import { drizzleReactHooks } from '@drizzle/react-plugin';

export function useDrizzleState(selector?: (state: any) => any) {
  return drizzleReactHooks.useDrizzleState(
    selector === undefined ? state => state : selector,
  );
}