class Config{
  constructor(opts) {
    this.network = "T"
    this.port = 3500
    this.nodeURL = "https://nodes-testnet.wavesnodes.com"; // https://nodes.wavesplatform.com
    this.providerUrl = "https://testnet.waves.exchange/signer/"; // "https://waves.exchange/signer/"
    this.userAddress = "3PKBiycFymE8qfXLLXJVj6TPEanV5rLbcwq"; // 3P...
    this.dappAddress = "3PLoCUbMPZiJqBvhnJWMb2Z6Uy3u2BNSgE4"; // 3P...
  }

  get(key) {
    return this[key];
  }

  set(key, val) {
    this[key] = val;
  }

}
module.exports = Config