/*
Copyright 2024 New Vector Ltd.
Copyright 2023 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/

import { IPusher, MatrixClient } from "matrix-js-sdk/src/matrix";

import { useAsyncRefreshMemo } from "./useAsyncRefreshMemo";

export function usePushers(client: MatrixClient): [IPusher[], () => void] {
    return useAsyncRefreshMemo<IPusher[]>(() => client.getPushers().then((it) => it.pushers), [client], []);
}