import useOssFragment from './useOssFragment';
import { RefetchFunction } from './RelayHooksType';
import { GraphQLTaggedNode, OperationType } from 'relay-runtime';

import { KeyType, KeyReturnType, $Call, ArrayKeyType, ArrayKeyReturnType } from './RelayHooksType';

function useRefetch<TKey extends KeyType, TOperationType extends OperationType = OperationType>(
    fragmentNode: GraphQLTaggedNode,
    fragmentRef: TKey,
): [$Call<KeyReturnType<TKey>>, RefetchFunction<TOperationType['variables']>];
function useRefetch<TKey extends KeyType, TOperationType extends OperationType = OperationType>(
    fragmentNode: GraphQLTaggedNode,
    fragmentRef: TKey | null,
): [$Call<KeyReturnType<TKey>> | null, RefetchFunction<TOperationType['variables']>];
function useRefetch<
    TKey extends ArrayKeyType,
    TOperationType extends OperationType = OperationType
>(
    fragmentNode: GraphQLTaggedNode,
    fragmentRef: TKey,
): [ReadonlyArray<$Call<ArrayKeyReturnType<TKey>>>, RefetchFunction<TOperationType['variables']>];
function useRefetch<
    TKey extends ArrayKeyType,
    TOperationType extends OperationType = OperationType
>(
    fragmentNode: GraphQLTaggedNode,
    fragmentRef: TKey | null,
): [
    ReadonlyArray<$Call<ArrayKeyReturnType<TKey>>> | null,
    RefetchFunction<TOperationType['variables']>,
] {
    const [data, { refetch }] = useOssFragment(fragmentNode, fragmentRef);

    return [data, refetch];
}

export default useRefetch;
