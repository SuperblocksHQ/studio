// Copyright 2019 Superblocks AB
// 
// This file is part of Superblocks Lab.
// 
// Superblocks Lab is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation version 3 of the License.
// 
// Superblocks Lab is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with Superblocks Lab.  If not, see <http://www.gnu.org/licenses/>.

import Networks from '../../networks';
import { IAccountEnvironment } from '../../models';
import { IAccount } from '../../models/state';

function getAccountInfo(dappfileAccount: any, dappfileWallets: any[], environmentName: string, openWallets: any): IAccount {
    const accountEnvironment = dappfileAccount._environments.find((e: IAccountEnvironment) => e.name === environmentName);
    const walletName = accountEnvironment ? accountEnvironment.data.wallet : null;

    const accountInfo: IAccount = {
        name: dappfileAccount.name,
        address: accountEnvironment.data.address,
        balance: null,
        type: 'pseudo',
        isLocked: false
    };

    if (!walletName) {
        return accountInfo;
    }
    const wallet = dappfileWallets.find(w => w.name === walletName);

    if (wallet) {
        if (wallet.type === 'external') {
            accountInfo.type = 'metamask';
            if (window.web3) {
                accountInfo.isLocked = true;
                const extAccounts = window.web3.eth.accounts || [];
                accountInfo.isLocked = extAccounts.length < 1;
                accountInfo.address = extAccounts[0];
            }
        } else {
            accountInfo.type = 'wallet';
            if (openWallets[walletName]) {
                try {
                    accountInfo.address = openWallets[walletName][accountEnvironment.data.index];
                } catch (ex) {
                    accountInfo.address = '0x0';
                }
            } else {
                accountInfo.isLocked = true;
            }
        }
    }

    return accountInfo;
}

export function getDappSettings(dappfileCode: string, openWallets: any) {
    const dappfileData: any = JSON.parse(dappfileCode);

    // environments
    const environments = dappfileData.environments.map((e: any) => ({
        name: e.name,
        endpoint: Networks[e.name].endpoint
    }));
    const selectedEnvironment = environments[0];

    // accounts
    const accounts = dappfileData.accounts.map((a: any) => getAccountInfo(a, dappfileData.wallets, selectedEnvironment.name, openWallets));

    return { environments, selectedEnvironment, accounts, selectedAccount: accounts[0], dappfileData };
}
