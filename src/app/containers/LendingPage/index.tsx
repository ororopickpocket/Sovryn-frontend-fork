/**
 *
 * LendingPage
 *
 */

import React from 'react';
import { LendingTokenSelectorCard } from 'app/components/LendingTokenSelectorCard';
import { AssetsDictionary } from 'utils/blockchain/assets-dictionary';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function LendingPage() {
  const assets = AssetsDictionary.assetList();
  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="d-flex row justify-content-center align-items-top">
          {assets.map(asset => (
            <div className="col-12 col-lg-6" key={asset}>
              <div className="py-1 py-lg-0">
                <LendingTokenSelectorCard asset={asset} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
