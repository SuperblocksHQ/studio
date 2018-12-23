import Networks from '../../networks';

function getProviderHTML(endpoint, accounts) {
    const js =
        `<script type="text/javascript" src="${window.location.origin}/static/js/web3provider.js?ts=${Date.now()}"></script>
<script type="text/javascript">
    window.web3={currentProvider:new DevKitProvider.provider("${endpoint}"),eth:{accounts:${JSON.stringify(accounts)}}};
    console.log("Using Superblocks web3 provider for endpoint: ${endpoint}");
</script>
`;
    return js;
}

function getInnerContent(html, style, js, title, endpoint, accounts) {
    const js2 = (
        endpoint !== null && accounts !== null
            ? getProviderHTML(endpoint, accounts)
            : '') +
        `<script type="text/javascript">${js}</script>`;

    const style2 = `<style type="text/css">${style}</style>`;
    html = html.replace('<!-- TITLE -->', '<title>' + title + '</title>');
    html = html.replace('<!-- STYLE -->', style2);
    html = html.replace('<!-- JAVASCRIPT -->', js2);
    return html;
}

function errorHtml(message) {
    return `
    <html>
        <head>
        <style type="text/css">body {background-color: #fff; color: #333;text-align:center;}</style></head>
        <body>
            <h1>${message}</h1>
        </body>
    </html>`;
}

function loadFiles(project, filesArray, cb) {
    const bodiesArray = [];
    const fn = (files, bodies, cb2) => {
        if (files.length === 0) {
            cb2(0);
            return;
        }
        const file = files.shift();
        project.loadFile(
            file,
            body => {
                if (body.status !== 0) {
                    // NOTE: we currently allow for missing contract compilations.
                }
                else {
                    bodies.push(body.contents);
                }
                fn(files, bodies, status => {
                    cb2(status);
                });
            },
            true,
            true
        );
    };
    fn(filesArray, bodiesArray, status => {
        cb(status, bodiesArray);
    });
}

function makeFileName(path, network, suffix) {
    const a = path.match(/^(.*\/)([^/]+)$/);
    const dir = a[1];
    const filename = a[2];
    const contractName = filename.match(/^(.+)[.][Ss][Oo][Ll]$/)[1];
    return `/build${dir}${contractName}/${contractName}.${network}.${suffix}`;
}

function getAccountAddress(project, wallet) {
    // Check given account, try to open and get address, else return [].
    const accountName = project.getAccount();
    if (accountName === '(no provider)') { return null; }
    if (accountName === '(locked)') { return []; }
    if (!accountName) { return []; }

    const env = project.getEnvironment();
    const accounts = project.getHiddenItem('accounts');
    const account = accounts.getByName(accountName);
    const accountIndex = account.getAccountIndex(env);
    const walletName = account.getWallet(env);
    const walletsItem = project.getHiddenItem('wallets');
    const walletItem = walletsItem.getByName(walletName);

    if (!walletItem) {
        return [];
    }
    const walletType = walletItem.getWalletType();

    if (walletType === 'external') {
        // Metamask seems to always only provide one (the chosen) account.
        if (!window.web3) { return []; }
        const extAccounts = window.web3.eth.accounts || [];
        if (extAccounts.length < accountIndex + 1) {
            // Account not matched
            return [];
        }
        return [extAccounts[accountIndex]];
    }

    if (wallet.isOpen(walletName)) {
        const address = wallet.getAddress(walletName, accountIndex);
        return [ address ];
    }

    return [];
}

/**
 * Create HTML page to preview and download a project
 * @param {*} project 
 * @param {*} wallet 
 */
export function buildProjectHtml(project, wallet) {
    return new Promise((resolve, reject) => {

        let js, css, html, contractjs;

        project.loadFile(
            '/app/app.html',
            bodyHtml => {
                if (bodyHtml.status !== 0) {
                    resolve(errorHtml('Missing file(s)'));
                    return;
                }
                html = bodyHtml.contents;
                project.loadFile(
                    '/app/app.js',
                    bodyJs => {
                        if (bodyJs.status !== 0) {
                            resolve(errorHtml('Missing file(s)'));
                            return;
                        }
                        js = bodyJs.contents;
                        project.loadFile(
                            '/app/app.css',
                            body => {
                                if (body.status !== 0) {
                                    resolve(errorHtml('Missing file(s)'));
                                    return;
                                }
                                css = body.contents;
                                const contracts = project.getHiddenItem('contracts').getChildren()
                                    .map(contract => contract.getName());

                                const jsfiles = [];
                                const network = project.getEnvironment();
                                const endpoint = (Networks[network] || {}).endpoint;

                                for (const contractName of contracts) {
                                    const contract = project
                                        .getHiddenItem('contracts')
                                        .getByName(contractName);

                                    const src = contract.getSource();
                                    const jssrc = makeFileName(src, network, "js");
                                    jsfiles.push(jssrc);
                                }

                                loadFiles(project, jsfiles, (status, bodies) => {
                                    if (status !== 0) {
                                        resolve(errorHtml('Missing contract javascript file, have you deployed all contracts?'));
                                        return;
                                    }

                                    contractjs = bodies.join('\n');
                                    const content = getInnerContent(
                                        html,
                                        css,
                                        contractjs + '\n' + js,
                                        project.getTitle(),
                                        endpoint,
                                        getAccountAddress(project, wallet)
                                    );

                                    // exportable version.
                                    const exportableContent = getInnerContent(
                                        html,
                                        css,
                                        contractjs + '\n' + js,
                                        project.getTitle()
                                    );

                                    resolve({ content, exportableContent });
                                });
                            },
                            true,
                            true
                        );
                    },
                    true,
                    true
                );
            },
            true
        );
    });
}
