export const depositL1 = async (
  contract,
  starkKey,
  assetType,
  qAmt,
  vaultId
) => {
  //    console.log(starkKey,assetType,vaultId,qAmt);
  const tx = await contract.deposit(starkKey, assetType, vaultId, qAmt);
  tx.wait().then((r) => console.log(r));
};

export const selfMintAndAllowance = async (
  contract,
  amount,
  starkExAddress
) => {
  console.log(
    'contract.signer.address, starkExAddress : ',
    contract.signer.address,
    starkExAddress
  );
  let balance = await contract.balanceOf(contract.signer.address);
  console.log('current balance : ', balance);
  if (balance.toNumber() <= 0) {
    let tx = await contract.selfMint(amount);
    let receipt = await tx.wait();

    if (receipt) contract.approve(starkExAddress, amount);
  } else contract.approve(starkExAddress, amount);
};

export const deriveStarkKey = (stark, starKPvt) => {
  const keyPair = stark.ec.keyFromPrivate(starKPvt, 'hex');
  const publicKey = stark.ec.keyFromPublic(
    keyPair.getPublic(true, 'hex'),
    'hex'
  );
  const publicKeyX = publicKey.pub.getX().toString();
  return publicKeyX;
};
