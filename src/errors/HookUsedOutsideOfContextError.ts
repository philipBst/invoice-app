export class HookUsedOutsideOfContextError extends Error {
  constructor(hookName: string, contextName: string) {
    super(`${hookName} used outside of ${contextName} Provider.`)
  }
}
