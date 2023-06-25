import { nanoid } from 'nanoid';

export function generateNanoId() {
    const idFriendly = nanoid();
    return idFriendly;
}