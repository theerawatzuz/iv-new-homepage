"use client";

import { createContext } from "react";

export enum ErrorStatus {
  NotFound = 404,
  InternalServerError = 500,
  CustomError = 600,
}

export const INITIAL_ERROR_STATE = {
  status: 0,
  messsage: "",
  closeable: false,
};

export const ErrorContext = createContext({
  error: INITIAL_ERROR_STATE,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  setError: (error: {
    status?: ErrorStatus;
    messsage?: string;
    closeable?: boolean;
  }) => {},
});
