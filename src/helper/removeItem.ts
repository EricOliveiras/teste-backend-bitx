import { IMember } from '../types/IMember';

export function removeItem(arr: string[], refId: string) {
  return arr.filter(function(i) { return i !== refId; });
}

export function removeItemObject(arr: Array<IMember>, email: string) {
  return arr.filter(function(i) { { return i.email !== email; }});
}
