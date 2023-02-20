/**
 * GtkLayerShell 0.1
 *
 * Generated from 0.1
 */

import * as Gtk from "gtk3";
import * as Gdk from "gdk3";
import * as GObject from "gobject2";

export function auto_exclusive_zone_enable(window: Gtk.Window): void;
export function auto_exclusive_zone_is_enabled(window: Gtk.Window): boolean;
export function get_anchor(window: Gtk.Window, edge: Edge): boolean;
export function get_exclusive_zone(window: Gtk.Window): number;
export function get_keyboard_interactivity(window: Gtk.Window): boolean;
export function get_keyboard_mode(window: Gtk.Window): KeyboardMode;
export function get_layer(window: Gtk.Window): Layer;
export function get_major_version(): number;
export function get_margin(window: Gtk.Window, edge: Edge): number;
export function get_micro_version(): number;
export function get_minor_version(): number;
export function get_monitor(window: Gtk.Window): Gdk.Monitor;
export function get_namespace(window: Gtk.Window): string;
export function get_protocol_version(): number;
export function get_zwlr_layer_surface_v1(window: Gtk.Window): any | null;
export function init_for_window(window: Gtk.Window): void;
export function is_layer_window(window: Gtk.Window): boolean;
export function is_supported(): boolean;
export function set_anchor(window: Gtk.Window, edge: Edge, anchor_to_edge: boolean): void;
export function set_exclusive_zone(window: Gtk.Window, exclusive_zone: number): void;
export function set_keyboard_interactivity(window: Gtk.Window, interactivity: boolean): void;
export function set_keyboard_mode(window: Gtk.Window, mode: KeyboardMode): void;
export function set_layer(window: Gtk.Window, layer: Layer): void;
export function set_margin(window: Gtk.Window, edge: Edge, margin_size: number): void;
export function set_monitor(window: Gtk.Window, monitor: Gdk.Monitor): void;
export function set_namespace(window: Gtk.Window, name_space: string): void;

export namespace Edge {
    export const $gtype: GObject.GType<Edge>;
}

export enum Edge {
    LEFT = 0,
    RIGHT = 1,
    TOP = 2,
    BOTTOM = 3,
    ENTRY_NUMBER = 4,
}

export namespace KeyboardMode {
    export const $gtype: GObject.GType<KeyboardMode>;
}

export enum KeyboardMode {
    NONE = 0,
    EXCLUSIVE = 1,
    ON_DEMAND = 2,
    ENTRY_NUMBER = 3,
}

export namespace Layer {
    export const $gtype: GObject.GType<Layer>;
}

export enum Layer {
    BACKGROUND = 0,
    BOTTOM = 1,
    TOP = 2,
    OVERLAY = 3,
    ENTRY_NUMBER = 4,
}
