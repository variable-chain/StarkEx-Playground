export const perpAbi =[
    {
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "inputs": [],
        "name": "VERSION",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "configurationDelay",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "configurationHash",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "selector",
                "type": "bytes4"
            }
        ],
        "name": "getSubContract",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "globalConfigurationHash",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "selector",
                "type": "bytes4"
            }
        ],
        "name": "handlingContractId",
        "outputs": [
            {
                "internalType": "string",
                "name": "id",
                "type": "string"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "stateMutability": "payable",
        "type": "receive"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "LogFrozen",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "acceptedGovernor",
                "type": "address"
            }
        ],
        "name": "LogNewGovernorAccepted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "nominatedGovernor",
                "type": "address"
            }
        ],
        "name": "LogNominatedGovernor",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "LogNominationCancelled",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "entry",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "entryId",
                "type": "string"
            }
        ],
        "name": "LogRegistered",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "entry",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "entryId",
                "type": "string"
            }
        ],
        "name": "LogRemovalIntent",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "entry",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "entryId",
                "type": "string"
            }
        ],
        "name": "LogRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "removedGovernor",
                "type": "address"
            }
        ],
        "name": "LogRemovedGovernor",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "LogUnFrozen",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "DEPOSIT_CANCEL_DELAY",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "FREEZE_GRACE_PERIOD",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MAIN_GOVERNANCE_INFO_TAG",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MAX_FORCED_ACTIONS_REQS_PER_BLOCK",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "MAX_VERIFIER_COUNT",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "UNFREEZE_DELAY",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "VERIFIER_REMOVAL_DELAY",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "verifier",
                "type": "address"
            }
        ],
        "name": "announceAvailabilityVerifierRemovalIntent",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "verifier",
                "type": "address"
            }
        ],
        "name": "announceVerifierRemovalIntent",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getRegisteredAvailabilityVerifiers",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "_verifers",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getRegisteredVerifiers",
        "outputs": [
            {
                "internalType": "address[]",
                "name": "_verifers",
                "type": "address[]"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "verifierAddress",
                "type": "address"
            }
        ],
        "name": "isAvailabilityVerifier",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "isFrozen",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "verifierAddress",
                "type": "address"
            }
        ],
        "name": "isVerifier",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "mainAcceptGovernance",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "mainCancelNomination",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "testGovernor",
                "type": "address"
            }
        ],
        "name": "mainIsGovernor",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newGovernor",
                "type": "address"
            }
        ],
        "name": "mainNominateNewGovernor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "governorForRemoval",
                "type": "address"
            }
        ],
        "name": "mainRemoveGovernor",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "verifier",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "identifier",
                "type": "string"
            }
        ],
        "name": "registerAvailabilityVerifier",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "verifier",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "identifier",
                "type": "string"
            }
        ],
        "name": "registerVerifier",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "verifier",
                "type": "address"
            }
        ],
        "name": "removeAvailabilityVerifier",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "verifier",
                "type": "address"
            }
        ],
        "name": "removeVerifier",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "unFreeze",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "ownerKey",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "quantizedAmount",
                "type": "uint256"
            }
        ],
        "name": "LogAssetWithdrawalAllowed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "depositorEthKey",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "nonQuantizedAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "quantizedAmount",
                "type": "uint256"
            }
        ],
        "name": "LogDeposit",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetId",
                "type": "uint256"
            }
        ],
        "name": "LogDepositCancel",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "nonQuantizedAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "quantizedAmount",
                "type": "uint256"
            }
        ],
        "name": "LogDepositCancelReclaimed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetId",
                "type": "uint256"
            }
        ],
        "name": "LogDepositNftCancelReclaimed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "depositorEthKey",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "nonQuantizedAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "quantizedAmount",
                "type": "uint256"
            }
        ],
        "name": "LogDepositWithTokenId",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "nonQuantizedAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "quantizedAmount",
                "type": "uint256"
            }
        ],
        "name": "LogDepositWithTokenIdCancelReclaimed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "ownerKey",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "nonQuantizedAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "quantizedAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetId",
                "type": "uint256"
            }
        ],
        "name": "LogMintWithdrawalPerformed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "ownerKey",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "quantizedAmount",
                "type": "uint256"
            }
        ],
        "name": "LogMintableWithdrawalAllowed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "depositorEthKey",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetId",
                "type": "uint256"
            }
        ],
        "name": "LogNftDeposit",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "ownerKey",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetId",
                "type": "uint256"
            }
        ],
        "name": "LogNftWithdrawalAllowed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "ownerKey",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            }
        ],
        "name": "LogNftWithdrawalPerformed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            }
        ],
        "name": "LogSystemAssetType",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "tokenAdmin",
                "type": "address"
            }
        ],
        "name": "LogTokenAdminAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "tokenAdmin",
                "type": "address"
            }
        ],
        "name": "LogTokenAdminRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bytes",
                "name": "assetInfo",
                "type": "bytes"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "quantum",
                "type": "uint256"
            }
        ],
        "name": "LogTokenRegistered",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "ownerKey",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "nonQuantizedAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "quantizedAmount",
                "type": "uint256"
            }
        ],
        "name": "LogWithdrawalAllowed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "ownerKey",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "nonQuantizedAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "quantizedAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            }
        ],
        "name": "LogWithdrawalPerformed",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "ownerKey",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "nonQuantizedAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "quantizedAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            }
        ],
        "name": "LogWithdrawalWithTokenIdPerformed",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "calculateAssetIdWithTokenId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "mintingBlob",
                "type": "bytes"
            }
        ],
        "name": "calculateMintableAssetId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "assetId",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "quantizedAmount",
                "type": "uint256"
            }
        ],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "assetId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            }
        ],
        "name": "depositCancel",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "quantizedAmount",
                "type": "uint256"
            }
        ],
        "name": "depositERC1155",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "quantizedAmount",
                "type": "uint256"
            }
        ],
        "name": "depositERC20",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            }
        ],
        "name": "depositEth",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "depositNft",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "depositNftReclaim",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            }
        ],
        "name": "depositReclaim",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "quantizedAmount",
                "type": "uint256"
            }
        ],
        "name": "depositWithTokenId",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            }
        ],
        "name": "depositWithTokenIdReclaim",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            }
        ],
        "name": "getAssetInfo",
        "outputs": [
            {
                "internalType": "bytes",
                "name": "assetInfo",
                "type": "bytes"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "assetId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            }
        ],
        "name": "getCancellationRequest",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "request",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "assetId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            }
        ],
        "name": "getDepositBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "ownerKey",
                "type": "uint256"
            }
        ],
        "name": "getEthKey",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "assetId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            }
        ],
        "name": "getQuantizedDepositBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "presumedAssetType",
                "type": "uint256"
            }
        ],
        "name": "getQuantum",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "quantum",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSystemAssetType",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "ownerKey",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "assetId",
                "type": "uint256"
            }
        ],
        "name": "getWithdrawalBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            }
        ],
        "name": "isAssetRegistered",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "testedAdmin",
                "type": "address"
            }
        ],
        "name": "isTokenAdmin",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "onERC721Received",
        "outputs": [
            {
                "internalType": "bytes4",
                "name": "",
                "type": "bytes4"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "assetInfo",
                "type": "bytes"
            }
        ],
        "name": "registerSystemAssetType",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            }
        ],
        "name": "registerToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "",
                "type": "bytes"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "registerToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newAdmin",
                "type": "address"
            }
        ],
        "name": "registerTokenAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "oldAdmin",
                "type": "address"
            }
        ],
        "name": "unregisterTokenAdmin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "ownerKey",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "ownerKey",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "mintingBlob",
                "type": "bytes"
            }
        ],
        "name": "withdrawAndMint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "ownerKey",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "withdrawNft",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "ownerKey",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "assetType",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "withdrawWithTokenId",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "configHash",
                "type": "bytes32"
            }
        ],
        "name": "LogAssetConfigurationApplied",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "configHash",
                "type": "bytes32"
            }
        ],
        "name": "LogAssetConfigurationRegistered",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "assetId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "configHash",
                "type": "bytes32"
            }
        ],
        "name": "LogAssetConfigurationRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "configHash",
                "type": "bytes32"
            }
        ],
        "name": "LogGlobalConfigurationApplied",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "configHash",
                "type": "bytes32"
            }
        ],
        "name": "LogGlobalConfigurationRegistered",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "configHash",
                "type": "bytes32"
            }
        ],
        "name": "LogGlobalConfigurationRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "LogOperatorAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "LogOperatorRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "bytes32",
                "name": "stateTransitionFact",
                "type": "bytes32"
            }
        ],
        "name": "LogStateTransitionFact",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "sequenceNumber",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "batchId",
                "type": "uint256"
            }
        ],
        "name": "LogUpdateState",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "assetId",
                "type": "uint256"
            },
            {
                "internalType": "bytes32",
                "name": "configHash",
                "type": "bytes32"
            }
        ],
        "name": "applyAssetConfigurationChange",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "configHash",
                "type": "bytes32"
            }
        ],
        "name": "applyGlobalConfigurationChange",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "quantizedAmount",
                "type": "uint256"
            }
        ],
        "name": "escape",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getActionCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "actionIndex",
                "type": "uint256"
            }
        ],
        "name": "getActionHashByIndex",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "starkKeyA",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "starkKeyB",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "vaultIdA",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "vaultIdB",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "collateralAssetId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "syntheticAssetId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountCollateral",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountSynthetic",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "aIsBuyingSynthetic",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "nonce",
                "type": "uint256"
            }
        ],
        "name": "getForcedTradeRequest",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "quantizedAmount",
                "type": "uint256"
            }
        ],
        "name": "getForcedWithdrawalRequest",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getGlobalConfigCode",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getLastBatchId",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getOrderRoot",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getOrderTreeHeight",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getRollupTreeHeight",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getRollupVaultRoot",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSequenceNumber",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getValidiumTreeHeight",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getValidiumVaultRoot",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "testedOperator",
                "type": "address"
            }
        ],
        "name": "isOperator",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "assetId",
                "type": "uint256"
            },
            {
                "internalType": "bytes32",
                "name": "configHash",
                "type": "bytes32"
            }
        ],
        "name": "registerAssetConfigurationChange",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "configHash",
                "type": "bytes32"
            }
        ],
        "name": "registerGlobalConfigurationChange",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOperator",
                "type": "address"
            }
        ],
        "name": "registerOperator",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "assetId",
                "type": "uint256"
            },
            {
                "internalType": "bytes32",
                "name": "configHash",
                "type": "bytes32"
            }
        ],
        "name": "removeAssetConfigurationChange",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "configHash",
                "type": "bytes32"
            }
        ],
        "name": "removeGlobalConfigurationChange",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "removedOperator",
                "type": "address"
            }
        ],
        "name": "unregisterOperator",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256[]",
                "name": "programOutput",
                "type": "uint256[]"
            },
            {
                "internalType": "uint256[]",
                "name": "applicationData",
                "type": "uint256[]"
            }
        ],
        "name": "updateState",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "starkKeyA",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "starkKeyB",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "vaultIdA",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "vaultIdB",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "collateralAssetId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "syntheticAssetId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountCollateral",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "amountSynthetic",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "aIsBuyingSynthetic",
                "type": "bool"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "nonce",
                "type": "uint256"
            }
        ],
        "name": "LogForcedTradeRequest",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "quantizedAmount",
                "type": "uint256"
            }
        ],
        "name": "LogForcedWithdrawalRequest",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "ethKey",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "LogUserRegistered",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "starkKeyA",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "starkKeyB",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "vaultIdA",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "vaultIdB",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "collateralAssetId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "syntheticAssetId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountCollateral",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountSynthetic",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "aIsBuyingSynthetic",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "submissionExpirationTime",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "nonce",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "signature",
                "type": "bytes"
            },
            {
                "internalType": "bool",
                "name": "premiumCost",
                "type": "bool"
            }
        ],
        "name": "forcedTradeRequest",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "quantizedAmount",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "premiumCost",
                "type": "bool"
            }
        ],
        "name": "forcedWithdrawalRequest",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "starkKeyA",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "starkKeyB",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "vaultIdA",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "vaultIdB",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "collateralAssetId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "syntheticAssetId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountCollateral",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "amountSynthetic",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "aIsBuyingSynthetic",
                "type": "bool"
            },
            {
                "internalType": "uint256",
                "name": "nonce",
                "type": "uint256"
            }
        ],
        "name": "freezeRequest",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "vaultId",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "quantizedAmount",
                "type": "uint256"
            }
        ],
        "name": "freezeRequest",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "ethKey",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "starkSignature",
                "type": "bytes"
            }
        ],
        "name": "registerEthAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "starkKey",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "starkSignature",
                "type": "bytes"
            }
        ],
        "name": "registerSender",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
export const erc20ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"fundsOwner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"adminApproval","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"_decimals","type":"uint8"}],"name":"initlialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"registerAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"oldAdmin","type":"address"}],"name":"removeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"newMax","type":"uint256"}],"name":"resetMaxMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"selfMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"setBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
export const starkEXL1ABI= [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"ownerKey","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"quantizedAmount","type":"uint256"}],"name":"LogAssetWithdrawalAllowed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"depositorEthKey","type":"address"},{"indexed":false,"internalType":"uint256","name":"starkKey","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"vaultId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"assetType","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nonQuantizedAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"quantizedAmount","type":"uint256"}],"name":"LogDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"starkKey","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"vaultId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"assetId","type":"uint256"}],"name":"LogDepositCancel","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"starkKey","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"vaultId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"assetType","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nonQuantizedAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"quantizedAmount","type":"uint256"}],"name":"LogDepositCancelReclaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"starkKey","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"vaultId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"assetType","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"assetId","type":"uint256"}],"name":"LogDepositNftCancelReclaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"depositorEthKey","type":"address"},{"indexed":false,"internalType":"uint256","name":"starkKey","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"vaultId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"assetType","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nonQuantizedAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"quantizedAmount","type":"uint256"}],"name":"LogDepositWithTokenId","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"starkKey","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"vaultId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"assetType","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nonQuantizedAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"quantizedAmount","type":"uint256"}],"name":"LogDepositWithTokenIdCancelReclaimed","type":"event"},{"anonymous":false,"inputs":[],"name":"LogFrozen","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"ownerKey","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"assetType","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nonQuantizedAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"quantizedAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"assetId","type":"uint256"}],"name":"LogMintWithdrawalPerformed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"ownerKey","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"quantizedAmount","type":"uint256"}],"name":"LogMintableWithdrawalAllowed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"acceptedGovernor","type":"address"}],"name":"LogNewGovernorAccepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"depositorEthKey","type":"address"},{"indexed":false,"internalType":"uint256","name":"starkKey","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"vaultId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"assetType","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"assetId","type":"uint256"}],"name":"LogNftDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"ownerKey","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"assetId","type":"uint256"}],"name":"LogNftWithdrawalAllowed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"ownerKey","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"assetType","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"}],"name":"LogNftWithdrawalPerformed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"nominatedGovernor","type":"address"}],"name":"LogNominatedGovernor","type":"event"},{"anonymous":false,"inputs":[],"name":"LogNominationCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"removedGovernor","type":"address"}],"name":"LogRemovedGovernor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"assetType","type":"uint256"}],"name":"LogSystemAssetType","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenAdmin","type":"address"}],"name":"LogTokenAdminAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"tokenAdmin","type":"address"}],"name":"LogTokenAdminRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"assetType","type":"uint256"},{"indexed":false,"internalType":"bytes","name":"assetInfo","type":"bytes"},{"indexed":false,"internalType":"uint256","name":"quantum","type":"uint256"}],"name":"LogTokenRegistered","type":"event"},{"anonymous":false,"inputs":[],"name":"LogUnFrozen","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"ownerKey","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"assetType","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nonQuantizedAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"quantizedAmount","type":"uint256"}],"name":"LogWithdrawalAllowed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"ownerKey","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"assetType","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nonQuantizedAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"quantizedAmount","type":"uint256"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"}],"name":"LogWithdrawalPerformed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"ownerKey","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"assetType","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"assetId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nonQuantizedAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"quantizedAmount","type":"uint256"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"}],"name":"LogWithdrawalWithTokenIdPerformed","type":"event"},{"inputs":[],"name":"DEPOSIT_CANCEL_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FREEZE_GRACE_PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAIN_GOVERNANCE_INFO_TAG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_FORCED_ACTIONS_REQS_PER_BLOCK","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_VERIFIER_COUNT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UNFREEZE_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VERIFIER_REMOVAL_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"assetType","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"calculateAssetIdWithTokenId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"assetType","type":"uint256"},{"internalType":"bytes","name":"mintingBlob","type":"bytes"}],"name":"calculateMintableAssetId","outputs":[{"internalType":"uint256","name":"assetId","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"configurationDelay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"configurationHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"starkKey","type":"uint256"},{"internalType":"uint256","name":"assetType","type":"uint256"},{"internalType":"uint256","name":"vaultId","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"starkKey","type":"uint256"},{"internalType":"uint256","name":"assetType","type":"uint256"},{"internalType":"uint256","name":"vaultId","type":"uint256"},{"internalType":"uint256","name":"quantizedAmount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"starkKey","type":"uint256"},{"internalType":"uint256","name":"assetId","type":"uint256"},{"internalType":"uint256","name":"vaultId","type":"uint256"}],"name":"depositCancel","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"starkKey","type":"uint256"},{"internalType":"uint256","name":"assetType","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"vaultId","type":"uint256"},{"internalType":"uint256","name":"quantizedAmount","type":"uint256"}],"name":"depositERC1155","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"starkKey","type":"uint256"},{"internalType":"uint256","name":"assetType","type":"uint256"},{"internalType":"uint256","name":"vaultId","type":"uint256"},{"internalType":"uint256","name":"quantizedAmount","type":"uint256"}],"name":"depositERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"starkKey","type":"uint256"},{"internalType":"uint256","name":"assetType","type":"uint256"},{"internalType":"uint256","name":"vaultId","type":"uint256"}],"name":"depositEth","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"starkKey","type":"uint256"},{"internalType":"uint256","name":"assetType","type":"uint256"},{"internalType":"uint256","name":"vaultId","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"depositNft","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"starkKey","type":"uint256"},{"internalType":"uint256","name":"assetType","type":"uint256"},{"internalType":"uint256","name":"vaultId","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"depositNftReclaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"starkKey","type":"uint256"},{"internalType":"uint256","name":"assetType","type":"uint256"},{"internalType":"uint256","name":"vaultId","type":"uint256"}],"name":"depositReclaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"starkKey","type":"uint256"},{"internalType":"uint256","name":"assetType","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"vaultId","type":"uint256"},{"internalType":"uint256","name":"quantizedAmount","type":"uint256"}],"name":"depositWithTokenId","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"starkKey","type":"uint256"},{"internalType":"uint256","name":"assetType","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"vaultId","type":"uint256"}],"name":"depositWithTokenIdReclaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"assetType","type":"uint256"}],"name":"getAssetInfo","outputs":[{"internalType":"bytes","name":"assetInfo","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"starkKey","type":"uint256"},{"internalType":"uint256","name":"assetId","type":"uint256"},{"internalType":"uint256","name":"vaultId","type":"uint256"}],"name":"getCancellationRequest","outputs":[{"internalType":"uint256","name":"request","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"starkKey","type":"uint256"},{"internalType":"uint256","name":"assetId","type":"uint256"},{"internalType":"uint256","name":"vaultId","type":"uint256"}],"name":"getDepositBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"ownerKey","type":"uint256"}],"name":"getEthKey","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"starkKey","type":"uint256"},{"internalType":"uint256","name":"assetId","type":"uint256"},{"internalType":"uint256","name":"vaultId","type":"uint256"}],"name":"getQuantizedDepositBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"presumedAssetType","type":"uint256"}],"name":"getQuantum","outputs":[{"internalType":"uint256","name":"quantum","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSystemAssetType","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"ownerKey","type":"uint256"},{"internalType":"uint256","name":"assetId","type":"uint256"}],"name":"getWithdrawalBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"globalConfigurationHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"identify","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes","name":"","type":"bytes"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initializerSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"assetType","type":"uint256"}],"name":"isAssetRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isFrozen","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"testedAdmin","type":"address"}],"name":"isTokenAdmin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mainAcceptGovernance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mainCancelNomination","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"mainIsGovernor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newGovernor","type":"address"}],"name":"mainNominateNewGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"governorForRemoval","type":"address"}],"name":"mainRemoveGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"assetType","type":"uint256"},{"internalType":"bytes","name":"assetInfo","type":"bytes"}],"name":"registerSystemAssetType","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"registerToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"registerToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"registerTokenAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unFreeze","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"oldAdmin","type":"address"}],"name":"unregisterTokenAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"validatedSelectors","outputs":[{"internalType":"bytes4[]","name":"selectors","type":"bytes4[]"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"ownerKey","type":"uint256"},{"internalType":"uint256","name":"assetType","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"ownerKey","type":"uint256"},{"internalType":"uint256","name":"assetType","type":"uint256"},{"internalType":"bytes","name":"mintingBlob","type":"bytes"}],"name":"withdrawAndMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"ownerKey","type":"uint256"},{"internalType":"uint256","name":"assetType","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"withdrawNft","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"ownerKey","type":"uint256"},{"internalType":"uint256","name":"assetType","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"withdrawWithTokenId","outputs":[],"stateMutability":"nonpayable","type":"function"}];