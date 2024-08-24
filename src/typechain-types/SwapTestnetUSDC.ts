/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface SwapTestnetUSDCInterface extends Interface {
  getFunction(nameOrSignature: "getSupportedTokens" | "swap"): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;

  encodeFunctionData(
    functionFragment: "getSupportedTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getSupportedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
}

export namespace SwapEvent {
  export type InputTuple = [
    tokenIn: AddressLike,
    tokenOut: AddressLike,
    amount: BigNumberish,
    trader: AddressLike
  ];
  export type OutputTuple = [
    tokenIn: string,
    tokenOut: string,
    amount: bigint,
    trader: string
  ];
  export interface OutputObject {
    tokenIn: string;
    tokenOut: string;
    amount: bigint;
    trader: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SwapTestnetUSDC extends BaseContract {
  connect(runner?: ContractRunner | null): SwapTestnetUSDC;
  waitForDeployment(): Promise<this>;

  interface: SwapTestnetUSDCInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getSupportedTokens: TypedContractMethod<
    [],
    [[string, string] & { usdcToken: string; compoundUsdcToken: string }],
    "view"
  >;

  swap: TypedContractMethod<
    [tokenIn: AddressLike, tokenOut: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getSupportedTokens"
  ): TypedContractMethod<
    [],
    [[string, string] & { usdcToken: string; compoundUsdcToken: string }],
    "view"
  >;
  getFunction(
    nameOrSignature: "swap"
  ): TypedContractMethod<
    [tokenIn: AddressLike, tokenOut: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "Swap"
  ): TypedContractEvent<
    SwapEvent.InputTuple,
    SwapEvent.OutputTuple,
    SwapEvent.OutputObject
  >;

  filters: {
    "Swap(address,address,uint256,address)": TypedContractEvent<
      SwapEvent.InputTuple,
      SwapEvent.OutputTuple,
      SwapEvent.OutputObject
    >;
    Swap: TypedContractEvent<
      SwapEvent.InputTuple,
      SwapEvent.OutputTuple,
      SwapEvent.OutputObject
    >;
  };
}
