import { Namespace } from "./namespace";
import type { Server, RemoteSocket } from "./index";
import type { EventParams, EventNames, EventsMap, DefaultEventsMap } from "./typed-events";
export declare class ParentNamespace<ListenEvents extends EventsMap = DefaultEventsMap, EmitEvents extends EventsMap = ListenEvents, ServerSideEvents extends EventsMap = DefaultEventsMap, SocketData = any> extends Namespace<ListenEvents, EmitEvents, ServerSideEvents, SocketData> {
    private static count;
    private children;
    constructor(server: Server<ListenEvents, EmitEvents, ServerSideEvents, SocketData>);
    /**
     * @private
     */
    _initAdapter(): void;
    emit<Ev extends EventNames<EmitEvents>>(ev: Ev, ...args: EventParams<EmitEvents, Ev>): boolean;
    createChild(name: string): Namespace<ListenEvents, EmitEvents, ServerSideEvents, SocketData>;
    fetchSockets(): Promise<RemoteSocket<EmitEvents, SocketData>[]>;
}
