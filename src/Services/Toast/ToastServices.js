import { toast } from 'react-toastify';

export const success = (msg) => toast.success(msg);

export const remove = (msg) => toast.error(msg);

export const failed = (msg) => toast.error(msg)

export const loginTocontinue = (msg) => toast.warn(msg);

export const warning = (msg) => toast.warn(msg)