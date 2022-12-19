export class HookUsedOutsideOfContextError extends Error {
  constructor(contextName: string, hookName: string) {
    super(`${hookName} used outside of ${contextName} Provider.`)
  }
}
