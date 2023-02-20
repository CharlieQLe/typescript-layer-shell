/**
 * Gtk 3.0
 *
 * Generated from 3.24.36
 */

import * as Gio from "gio2";
import * as GObject from "gobject2";
import * as Pango from "pango1";
import * as Gdk from "gdk3";
import * as cairo from "cairo1";
import * as GLib from "glib2";
import * as Atk from "atk1";
import * as GdkPixbuf from "gdkpixbuf2";
import * as xlib from "xlib2";

export const BINARY_AGE: number;
export const INPUT_ERROR: number;
export const INTERFACE_AGE: number;
export const LEVEL_BAR_OFFSET_FULL: string;
export const LEVEL_BAR_OFFSET_HIGH: string;
export const LEVEL_BAR_OFFSET_LOW: string;
export const MAJOR_VERSION: number;
export const MAX_COMPOSE_LEN: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const PAPER_NAME_A3: string;
export const PAPER_NAME_A4: string;
export const PAPER_NAME_A5: string;
export const PAPER_NAME_B5: string;
export const PAPER_NAME_EXECUTIVE: string;
export const PAPER_NAME_LEGAL: string;
export const PAPER_NAME_LETTER: string;
export const PATH_PRIO_MASK: number;
export const PRINT_SETTINGS_COLLATE: string;
export const PRINT_SETTINGS_DEFAULT_SOURCE: string;
export const PRINT_SETTINGS_DITHER: string;
export const PRINT_SETTINGS_DUPLEX: string;
export const PRINT_SETTINGS_FINISHINGS: string;
export const PRINT_SETTINGS_MEDIA_TYPE: string;
export const PRINT_SETTINGS_NUMBER_UP: string;
export const PRINT_SETTINGS_NUMBER_UP_LAYOUT: string;
export const PRINT_SETTINGS_N_COPIES: string;
export const PRINT_SETTINGS_ORIENTATION: string;
export const PRINT_SETTINGS_OUTPUT_BASENAME: string;
export const PRINT_SETTINGS_OUTPUT_BIN: string;
export const PRINT_SETTINGS_OUTPUT_DIR: string;
export const PRINT_SETTINGS_OUTPUT_FILE_FORMAT: string;
export const PRINT_SETTINGS_OUTPUT_URI: string;
export const PRINT_SETTINGS_PAGE_RANGES: string;
export const PRINT_SETTINGS_PAGE_SET: string;
export const PRINT_SETTINGS_PAPER_FORMAT: string;
export const PRINT_SETTINGS_PAPER_HEIGHT: string;
export const PRINT_SETTINGS_PAPER_WIDTH: string;
export const PRINT_SETTINGS_PRINTER: string;
export const PRINT_SETTINGS_PRINTER_LPI: string;
export const PRINT_SETTINGS_PRINT_PAGES: string;
export const PRINT_SETTINGS_QUALITY: string;
export const PRINT_SETTINGS_RESOLUTION: string;
export const PRINT_SETTINGS_RESOLUTION_X: string;
export const PRINT_SETTINGS_RESOLUTION_Y: string;
export const PRINT_SETTINGS_REVERSE: string;
export const PRINT_SETTINGS_SCALE: string;
export const PRINT_SETTINGS_USE_COLOR: string;
export const PRINT_SETTINGS_WIN32_DRIVER_EXTRA: string;
export const PRINT_SETTINGS_WIN32_DRIVER_VERSION: string;
export const PRIORITY_RESIZE: number;
export const STOCK_ABOUT: string;
export const STOCK_ADD: string;
export const STOCK_APPLY: string;
export const STOCK_BOLD: string;
export const STOCK_CANCEL: string;
export const STOCK_CAPS_LOCK_WARNING: string;
export const STOCK_CDROM: string;
export const STOCK_CLEAR: string;
export const STOCK_CLOSE: string;
export const STOCK_COLOR_PICKER: string;
export const STOCK_CONNECT: string;
export const STOCK_CONVERT: string;
export const STOCK_COPY: string;
export const STOCK_CUT: string;
export const STOCK_DELETE: string;
export const STOCK_DIALOG_AUTHENTICATION: string;
export const STOCK_DIALOG_ERROR: string;
export const STOCK_DIALOG_INFO: string;
export const STOCK_DIALOG_QUESTION: string;
export const STOCK_DIALOG_WARNING: string;
export const STOCK_DIRECTORY: string;
export const STOCK_DISCARD: string;
export const STOCK_DISCONNECT: string;
export const STOCK_DND: string;
export const STOCK_DND_MULTIPLE: string;
export const STOCK_EDIT: string;
export const STOCK_EXECUTE: string;
export const STOCK_FILE: string;
export const STOCK_FIND: string;
export const STOCK_FIND_AND_REPLACE: string;
export const STOCK_FLOPPY: string;
export const STOCK_FULLSCREEN: string;
export const STOCK_GOTO_BOTTOM: string;
export const STOCK_GOTO_FIRST: string;
export const STOCK_GOTO_LAST: string;
export const STOCK_GOTO_TOP: string;
export const STOCK_GO_BACK: string;
export const STOCK_GO_DOWN: string;
export const STOCK_GO_FORWARD: string;
export const STOCK_GO_UP: string;
export const STOCK_HARDDISK: string;
export const STOCK_HELP: string;
export const STOCK_HOME: string;
export const STOCK_INDENT: string;
export const STOCK_INDEX: string;
export const STOCK_INFO: string;
export const STOCK_ITALIC: string;
export const STOCK_JUMP_TO: string;
export const STOCK_JUSTIFY_CENTER: string;
export const STOCK_JUSTIFY_FILL: string;
export const STOCK_JUSTIFY_LEFT: string;
export const STOCK_JUSTIFY_RIGHT: string;
export const STOCK_LEAVE_FULLSCREEN: string;
export const STOCK_MEDIA_FORWARD: string;
export const STOCK_MEDIA_NEXT: string;
export const STOCK_MEDIA_PAUSE: string;
export const STOCK_MEDIA_PLAY: string;
export const STOCK_MEDIA_PREVIOUS: string;
export const STOCK_MEDIA_RECORD: string;
export const STOCK_MEDIA_REWIND: string;
export const STOCK_MEDIA_STOP: string;
export const STOCK_MISSING_IMAGE: string;
export const STOCK_NETWORK: string;
export const STOCK_NEW: string;
export const STOCK_NO: string;
export const STOCK_OK: string;
export const STOCK_OPEN: string;
export const STOCK_ORIENTATION_LANDSCAPE: string;
export const STOCK_ORIENTATION_PORTRAIT: string;
export const STOCK_ORIENTATION_REVERSE_LANDSCAPE: string;
export const STOCK_ORIENTATION_REVERSE_PORTRAIT: string;
export const STOCK_PAGE_SETUP: string;
export const STOCK_PASTE: string;
export const STOCK_PREFERENCES: string;
export const STOCK_PRINT: string;
export const STOCK_PRINT_ERROR: string;
export const STOCK_PRINT_PAUSED: string;
export const STOCK_PRINT_PREVIEW: string;
export const STOCK_PRINT_REPORT: string;
export const STOCK_PRINT_WARNING: string;
export const STOCK_PROPERTIES: string;
export const STOCK_QUIT: string;
export const STOCK_REDO: string;
export const STOCK_REFRESH: string;
export const STOCK_REMOVE: string;
export const STOCK_REVERT_TO_SAVED: string;
export const STOCK_SAVE: string;
export const STOCK_SAVE_AS: string;
export const STOCK_SELECT_ALL: string;
export const STOCK_SELECT_COLOR: string;
export const STOCK_SELECT_FONT: string;
export const STOCK_SORT_ASCENDING: string;
export const STOCK_SORT_DESCENDING: string;
export const STOCK_SPELL_CHECK: string;
export const STOCK_STOP: string;
export const STOCK_STRIKETHROUGH: string;
export const STOCK_UNDELETE: string;
export const STOCK_UNDERLINE: string;
export const STOCK_UNDO: string;
export const STOCK_UNINDENT: string;
export const STOCK_YES: string;
export const STOCK_ZOOM_100: string;
export const STOCK_ZOOM_FIT: string;
export const STOCK_ZOOM_IN: string;
export const STOCK_ZOOM_OUT: string;
export const STYLE_CLASS_ACCELERATOR: string;
export const STYLE_CLASS_ARROW: string;
export const STYLE_CLASS_BACKGROUND: string;
export const STYLE_CLASS_BOTTOM: string;
export const STYLE_CLASS_BUTTON: string;
export const STYLE_CLASS_CALENDAR: string;
export const STYLE_CLASS_CELL: string;
export const STYLE_CLASS_CHECK: string;
export const STYLE_CLASS_COMBOBOX_ENTRY: string;
export const STYLE_CLASS_CONTEXT_MENU: string;
export const STYLE_CLASS_CSD: string;
export const STYLE_CLASS_CURSOR_HANDLE: string;
export const STYLE_CLASS_DEFAULT: string;
export const STYLE_CLASS_DESTRUCTIVE_ACTION: string;
export const STYLE_CLASS_DIM_LABEL: string;
export const STYLE_CLASS_DND: string;
export const STYLE_CLASS_DOCK: string;
export const STYLE_CLASS_ENTRY: string;
export const STYLE_CLASS_ERROR: string;
export const STYLE_CLASS_EXPANDER: string;
export const STYLE_CLASS_FLAT: string;
export const STYLE_CLASS_FRAME: string;
export const STYLE_CLASS_GRIP: string;
export const STYLE_CLASS_HEADER: string;
export const STYLE_CLASS_HIGHLIGHT: string;
export const STYLE_CLASS_HORIZONTAL: string;
export const STYLE_CLASS_IMAGE: string;
export const STYLE_CLASS_INFO: string;
export const STYLE_CLASS_INLINE_TOOLBAR: string;
export const STYLE_CLASS_INSERTION_CURSOR: string;
export const STYLE_CLASS_LABEL: string;
export const STYLE_CLASS_LEFT: string;
export const STYLE_CLASS_LEVEL_BAR: string;
export const STYLE_CLASS_LINKED: string;
export const STYLE_CLASS_LIST: string;
export const STYLE_CLASS_LIST_ROW: string;
export const STYLE_CLASS_MARK: string;
export const STYLE_CLASS_MENU: string;
export const STYLE_CLASS_MENUBAR: string;
export const STYLE_CLASS_MENUITEM: string;
export const STYLE_CLASS_MESSAGE_DIALOG: string;
export const STYLE_CLASS_MONOSPACE: string;
export const STYLE_CLASS_NEEDS_ATTENTION: string;
export const STYLE_CLASS_NOTEBOOK: string;
export const STYLE_CLASS_OSD: string;
export const STYLE_CLASS_OVERSHOOT: string;
export const STYLE_CLASS_PANE_SEPARATOR: string;
export const STYLE_CLASS_PAPER: string;
export const STYLE_CLASS_POPOVER: string;
export const STYLE_CLASS_POPUP: string;
export const STYLE_CLASS_PRIMARY_TOOLBAR: string;
export const STYLE_CLASS_PROGRESSBAR: string;
export const STYLE_CLASS_PULSE: string;
export const STYLE_CLASS_QUESTION: string;
export const STYLE_CLASS_RADIO: string;
export const STYLE_CLASS_RAISED: string;
export const STYLE_CLASS_READ_ONLY: string;
export const STYLE_CLASS_RIGHT: string;
export const STYLE_CLASS_RUBBERBAND: string;
export const STYLE_CLASS_SCALE: string;
export const STYLE_CLASS_SCALE_HAS_MARKS_ABOVE: string;
export const STYLE_CLASS_SCALE_HAS_MARKS_BELOW: string;
export const STYLE_CLASS_SCROLLBAR: string;
export const STYLE_CLASS_SCROLLBARS_JUNCTION: string;
export const STYLE_CLASS_SEPARATOR: string;
export const STYLE_CLASS_SIDEBAR: string;
export const STYLE_CLASS_SLIDER: string;
export const STYLE_CLASS_SPINBUTTON: string;
export const STYLE_CLASS_SPINNER: string;
export const STYLE_CLASS_STATUSBAR: string;
export const STYLE_CLASS_SUBTITLE: string;
export const STYLE_CLASS_SUGGESTED_ACTION: string;
export const STYLE_CLASS_TITLE: string;
export const STYLE_CLASS_TITLEBAR: string;
export const STYLE_CLASS_TOOLBAR: string;
export const STYLE_CLASS_TOOLTIP: string;
export const STYLE_CLASS_TOP: string;
export const STYLE_CLASS_TOUCH_SELECTION: string;
export const STYLE_CLASS_TROUGH: string;
export const STYLE_CLASS_UNDERSHOOT: string;
export const STYLE_CLASS_VERTICAL: string;
export const STYLE_CLASS_VIEW: string;
export const STYLE_CLASS_WARNING: string;
export const STYLE_CLASS_WIDE: string;
export const STYLE_PROPERTY_BACKGROUND_COLOR: string;
export const STYLE_PROPERTY_BACKGROUND_IMAGE: string;
export const STYLE_PROPERTY_BORDER_COLOR: string;
export const STYLE_PROPERTY_BORDER_RADIUS: string;
export const STYLE_PROPERTY_BORDER_STYLE: string;
export const STYLE_PROPERTY_BORDER_WIDTH: string;
export const STYLE_PROPERTY_COLOR: string;
export const STYLE_PROPERTY_FONT: string;
export const STYLE_PROPERTY_MARGIN: string;
export const STYLE_PROPERTY_PADDING: string;
export const STYLE_PROVIDER_PRIORITY_APPLICATION: number;
export const STYLE_PROVIDER_PRIORITY_FALLBACK: number;
export const STYLE_PROVIDER_PRIORITY_SETTINGS: number;
export const STYLE_PROVIDER_PRIORITY_THEME: number;
export const STYLE_PROVIDER_PRIORITY_USER: number;
export const STYLE_REGION_COLUMN: string;
export const STYLE_REGION_COLUMN_HEADER: string;
export const STYLE_REGION_ROW: string;
export const STYLE_REGION_TAB: string;
export const TEXT_VIEW_PRIORITY_VALIDATE: number;
export const TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID: number;
export const TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID: number;
export function accel_groups_activate(object: GObject.Object, accel_key: number, accel_mods: Gdk.ModifierType): boolean;
export function accel_groups_from_object(object: GObject.Object): AccelGroup[];
export function accelerator_get_default_mod_mask(): Gdk.ModifierType;
export function accelerator_get_label(accelerator_key: number, accelerator_mods: Gdk.ModifierType): string;
export function accelerator_get_label_with_keycode(
    display: Gdk.Display | null,
    accelerator_key: number,
    keycode: number,
    accelerator_mods: Gdk.ModifierType
): string;
export function accelerator_name(accelerator_key: number, accelerator_mods: Gdk.ModifierType): string;
export function accelerator_name_with_keycode(
    display: Gdk.Display | null,
    accelerator_key: number,
    keycode: number,
    accelerator_mods: Gdk.ModifierType
): string;
export function accelerator_parse(accelerator: string): [number, Gdk.ModifierType | null];
export function accelerator_parse_with_keycode(accelerator: string): [number, number[] | null, Gdk.ModifierType | null];
export function accelerator_set_default_mod_mask(default_mod_mask: Gdk.ModifierType): void;
export function accelerator_valid(keyval: number, modifiers: Gdk.ModifierType): boolean;
export function alternative_dialog_button_order(screen?: Gdk.Screen | null): boolean;
export function binding_entry_add_signal_from_string(binding_set: BindingSet, signal_desc: string): GLib.TokenType;
export function binding_entry_add_signall(
    binding_set: BindingSet,
    keyval: number,
    modifiers: Gdk.ModifierType,
    signal_name: string,
    binding_args: BindingArg[]
): void;
export function binding_entry_remove(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType): void;
export function binding_entry_skip(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType): void;
export function binding_set_find(set_name: string): BindingSet | null;
export function bindings_activate(object: GObject.Object, keyval: number, modifiers: Gdk.ModifierType): boolean;
export function bindings_activate_event(object: GObject.Object, event: Gdk.EventKey): boolean;
export function builder_error_quark(): GLib.Quark;
export function cairo_should_draw_window(cr: cairo.Context, window: Gdk.Window): boolean;
export function cairo_transform_to_window(cr: cairo.Context, widget: Widget, window: Gdk.Window): void;
export function check_version(required_major: number, required_minor: number, required_micro: number): string | null;
export function css_provider_error_quark(): GLib.Quark;
export function device_grab_add(widget: Widget, device: Gdk.Device, block_others: boolean): void;
export function device_grab_remove(widget: Widget, device: Gdk.Device): void;
export function disable_setlocale(): void;
export function distribute_natural_allocation(
    extra_space: number,
    n_requested_sizes: number,
    sizes: RequestedSize
): number;
export function drag_cancel(context: Gdk.DragContext): void;
export function drag_finish(context: Gdk.DragContext, success: boolean, del: boolean, time_: number): void;
export function drag_get_source_widget(context: Gdk.DragContext): Widget | null;
export function drag_set_icon_default(context: Gdk.DragContext): void;
export function drag_set_icon_gicon(context: Gdk.DragContext, icon: Gio.Icon, hot_x: number, hot_y: number): void;
export function drag_set_icon_name(context: Gdk.DragContext, icon_name: string, hot_x: number, hot_y: number): void;
export function drag_set_icon_pixbuf(
    context: Gdk.DragContext,
    pixbuf: GdkPixbuf.Pixbuf,
    hot_x: number,
    hot_y: number
): void;
export function drag_set_icon_stock(context: Gdk.DragContext, stock_id: string, hot_x: number, hot_y: number): void;
export function drag_set_icon_surface(context: Gdk.DragContext, surface: cairo.Surface): void;
export function drag_set_icon_widget(context: Gdk.DragContext, widget: Widget, hot_x: number, hot_y: number): void;
export function draw_insertion_cursor(
    widget: Widget,
    cr: cairo.Context,
    location: Gdk.Rectangle,
    is_primary: boolean,
    direction: TextDirection,
    draw_arrow: boolean
): void;
export function events_pending(): boolean;
export function __false(): boolean;
export function file_chooser_error_quark(): GLib.Quark;
export function get_binary_age(): number;
export function get_current_event(): Gdk.Event | null;
export function get_current_event_device(): Gdk.Device | null;
export function get_current_event_state(): [boolean, Gdk.ModifierType];
export function get_current_event_time(): number;
export function get_debug_flags(): number;
export function get_default_language(): Pango.Language;
export function get_event_widget(event: Gdk.Event): Widget | null;
export function get_interface_age(): number;
export function get_locale_direction(): TextDirection;
export function get_major_version(): number;
export function get_micro_version(): number;
export function get_minor_version(): number;
export function get_option_group(open_default_display: boolean): GLib.OptionGroup;
export function grab_get_current(): Widget | null;
export function icon_size_from_name(name: string): number;
export function icon_size_get_name(size: number): string;
export function icon_size_lookup(size: number): [boolean, number, number];
export function icon_size_lookup_for_settings(settings: Settings, size: number): [boolean, number, number];
export function icon_size_register(name: string, width: number, height: number): number;
export function icon_size_register_alias(alias: string, target: number): void;
export function icon_theme_error_quark(): GLib.Quark;
export function init(argv?: string[] | null): string[] | null;
export function init_check(argv?: string[] | null): [boolean, string[] | null];
export function init_with_args(
    argv: string[] | null,
    parameter_string: string | null,
    entries: GLib.OptionEntry[],
    translation_domain?: string | null
): [boolean, string[] | null];
export function key_snooper_remove(snooper_handler_id: number): void;
export function main(): void;
export function main_do_event(event: Gdk.Event): void;
export function main_iteration(): boolean;
export function main_iteration_do(blocking: boolean): boolean;
export function main_level(): number;
export function main_quit(): void;
export function paint_arrow(
    style: Style,
    cr: cairo.Context,
    state_type: StateType,
    shadow_type: ShadowType,
    widget: Widget | null,
    detail: string | null,
    arrow_type: ArrowType,
    fill: boolean,
    x: number,
    y: number,
    width: number,
    height: number
): void;
export function paint_box(
    style: Style,
    cr: cairo.Context,
    state_type: StateType,
    shadow_type: ShadowType,
    widget: Widget | null,
    detail: string | null,
    x: number,
    y: number,
    width: number,
    height: number
): void;
export function paint_box_gap(
    style: Style,
    cr: cairo.Context,
    state_type: StateType,
    shadow_type: ShadowType,
    widget: Widget | null,
    detail: string | null,
    x: number,
    y: number,
    width: number,
    height: number,
    gap_side: PositionType,
    gap_x: number,
    gap_width: number
): void;
export function paint_check(
    style: Style,
    cr: cairo.Context,
    state_type: StateType,
    shadow_type: ShadowType,
    widget: Widget | null,
    detail: string | null,
    x: number,
    y: number,
    width: number,
    height: number
): void;
export function paint_diamond(
    style: Style,
    cr: cairo.Context,
    state_type: StateType,
    shadow_type: ShadowType,
    widget: Widget | null,
    detail: string | null,
    x: number,
    y: number,
    width: number,
    height: number
): void;
export function paint_expander(
    style: Style,
    cr: cairo.Context,
    state_type: StateType,
    widget: Widget | null,
    detail: string | null,
    x: number,
    y: number,
    expander_style: ExpanderStyle
): void;
export function paint_extension(
    style: Style,
    cr: cairo.Context,
    state_type: StateType,
    shadow_type: ShadowType,
    widget: Widget | null,
    detail: string | null,
    x: number,
    y: number,
    width: number,
    height: number,
    gap_side: PositionType
): void;
export function paint_flat_box(
    style: Style,
    cr: cairo.Context,
    state_type: StateType,
    shadow_type: ShadowType,
    widget: Widget | null,
    detail: string | null,
    x: number,
    y: number,
    width: number,
    height: number
): void;
export function paint_focus(
    style: Style,
    cr: cairo.Context,
    state_type: StateType,
    widget: Widget | null,
    detail: string | null,
    x: number,
    y: number,
    width: number,
    height: number
): void;
export function paint_handle(
    style: Style,
    cr: cairo.Context,
    state_type: StateType,
    shadow_type: ShadowType,
    widget: Widget | null,
    detail: string | null,
    x: number,
    y: number,
    width: number,
    height: number,
    orientation: Orientation
): void;
export function paint_hline(
    style: Style,
    cr: cairo.Context,
    state_type: StateType,
    widget: Widget | null,
    detail: string | null,
    x1: number,
    x2: number,
    y: number
): void;
export function paint_layout(
    style: Style,
    cr: cairo.Context,
    state_type: StateType,
    use_text: boolean,
    widget: Widget | null,
    detail: string | null,
    x: number,
    y: number,
    layout: Pango.Layout
): void;
export function paint_option(
    style: Style,
    cr: cairo.Context,
    state_type: StateType,
    shadow_type: ShadowType,
    widget: Widget | null,
    detail: string | null,
    x: number,
    y: number,
    width: number,
    height: number
): void;
export function paint_resize_grip(
    style: Style,
    cr: cairo.Context,
    state_type: StateType,
    widget: Widget | null,
    detail: string | null,
    edge: Gdk.WindowEdge,
    x: number,
    y: number,
    width: number,
    height: number
): void;
export function paint_shadow(
    style: Style,
    cr: cairo.Context,
    state_type: StateType,
    shadow_type: ShadowType,
    widget: Widget | null,
    detail: string | null,
    x: number,
    y: number,
    width: number,
    height: number
): void;
export function paint_shadow_gap(
    style: Style,
    cr: cairo.Context,
    state_type: StateType,
    shadow_type: ShadowType,
    widget: Widget | null,
    detail: string | null,
    x: number,
    y: number,
    width: number,
    height: number,
    gap_side: PositionType,
    gap_x: number,
    gap_width: number
): void;
export function paint_slider(
    style: Style,
    cr: cairo.Context,
    state_type: StateType,
    shadow_type: ShadowType,
    widget: Widget | null,
    detail: string | null,
    x: number,
    y: number,
    width: number,
    height: number,
    orientation: Orientation
): void;
export function paint_spinner(
    style: Style,
    cr: cairo.Context,
    state_type: StateType,
    widget: Widget | null,
    detail: string | null,
    step: number,
    x: number,
    y: number,
    width: number,
    height: number
): void;
export function paint_tab(
    style: Style,
    cr: cairo.Context,
    state_type: StateType,
    shadow_type: ShadowType,
    widget: Widget | null,
    detail: string | null,
    x: number,
    y: number,
    width: number,
    height: number
): void;
export function paint_vline(
    style: Style,
    cr: cairo.Context,
    state_type: StateType,
    widget: Widget | null,
    detail: string | null,
    y1_: number,
    y2_: number,
    x: number
): void;
export function paper_size_get_default(): string;
export function paper_size_get_paper_sizes(include_custom: boolean): PaperSize[];
export function parse_args(argv: string[]): [boolean, string[]];
export function print_error_quark(): GLib.Quark;
export function print_run_page_setup_dialog(
    parent: Window | null,
    page_setup: PageSetup | null,
    settings: PrintSettings
): PageSetup;
export function print_run_page_setup_dialog_async(
    parent: Window | null,
    page_setup: PageSetup | null,
    settings: PrintSettings,
    done_cb: PageSetupDoneFunc
): void;
export function propagate_event(widget: Widget, event: Gdk.Event): void;
export function rc_add_default_file(filename: string): void;
export function rc_find_module_in_path(module_file: string): string;
export function rc_find_pixmap_in_path(settings: Settings, scanner: GLib.Scanner, pixmap_file: string): string;
export function rc_get_default_files(): string[];
export function rc_get_im_module_file(): string;
export function rc_get_im_module_path(): string;
export function rc_get_module_dir(): string;
export function rc_get_style(widget: Widget): Style;
export function rc_get_style_by_paths(
    settings: Settings,
    widget_path: string | null,
    class_path: string | null,
    type: GObject.GType
): Style | null;
export function rc_get_theme_dir(): string;
export function rc_parse(filename: string): void;
export function rc_parse_color(scanner: GLib.Scanner): [number, Gdk.Color];
export function rc_parse_color_full(scanner: GLib.Scanner, style: RcStyle | null): [number, Gdk.Color];
export function rc_parse_priority(scanner: GLib.Scanner, priority: PathPriorityType): number;
export function rc_parse_state(scanner: GLib.Scanner): [number, StateType];
export function rc_parse_string(rc_string: string): void;
export function rc_property_parse_border(
    pspec: GObject.ParamSpec,
    gstring: GLib.String,
    property_value: GObject.Value | any
): boolean;
export function rc_property_parse_color(
    pspec: GObject.ParamSpec,
    gstring: GLib.String,
    property_value: GObject.Value | any
): boolean;
export function rc_property_parse_enum(
    pspec: GObject.ParamSpec,
    gstring: GLib.String,
    property_value: GObject.Value | any
): boolean;
export function rc_property_parse_flags(
    pspec: GObject.ParamSpec,
    gstring: GLib.String,
    property_value: GObject.Value | any
): boolean;
export function rc_property_parse_requisition(
    pspec: GObject.ParamSpec,
    gstring: GLib.String,
    property_value: GObject.Value | any
): boolean;
export function rc_reparse_all(): boolean;
export function rc_reparse_all_for_settings(settings: Settings, force_load: boolean): boolean;
export function rc_reset_styles(settings: Settings): void;
export function rc_set_default_files(filenames: string[]): void;
export function recent_chooser_error_quark(): GLib.Quark;
export function recent_manager_error_quark(): GLib.Quark;
export function render_activity(
    context: StyleContext,
    cr: cairo.Context,
    x: number,
    y: number,
    width: number,
    height: number
): void;
export function render_arrow(
    context: StyleContext,
    cr: cairo.Context,
    angle: number,
    x: number,
    y: number,
    size: number
): void;
export function render_background(
    context: StyleContext,
    cr: cairo.Context,
    x: number,
    y: number,
    width: number,
    height: number
): void;
export function render_background_get_clip(
    context: StyleContext,
    x: number,
    y: number,
    width: number,
    height: number
): Gdk.Rectangle;
export function render_check(
    context: StyleContext,
    cr: cairo.Context,
    x: number,
    y: number,
    width: number,
    height: number
): void;
export function render_expander(
    context: StyleContext,
    cr: cairo.Context,
    x: number,
    y: number,
    width: number,
    height: number
): void;
export function render_extension(
    context: StyleContext,
    cr: cairo.Context,
    x: number,
    y: number,
    width: number,
    height: number,
    gap_side: PositionType
): void;
export function render_focus(
    context: StyleContext,
    cr: cairo.Context,
    x: number,
    y: number,
    width: number,
    height: number
): void;
export function render_frame(
    context: StyleContext,
    cr: cairo.Context,
    x: number,
    y: number,
    width: number,
    height: number
): void;
export function render_frame_gap(
    context: StyleContext,
    cr: cairo.Context,
    x: number,
    y: number,
    width: number,
    height: number,
    gap_side: PositionType,
    xy0_gap: number,
    xy1_gap: number
): void;
export function render_handle(
    context: StyleContext,
    cr: cairo.Context,
    x: number,
    y: number,
    width: number,
    height: number
): void;
export function render_icon(
    context: StyleContext,
    cr: cairo.Context,
    pixbuf: GdkPixbuf.Pixbuf,
    x: number,
    y: number
): void;
export function render_icon_pixbuf(context: StyleContext, source: IconSource, size: number): GdkPixbuf.Pixbuf;
export function render_icon_surface(
    context: StyleContext,
    cr: cairo.Context,
    surface: cairo.Surface,
    x: number,
    y: number
): void;
export function render_insertion_cursor(
    context: StyleContext,
    cr: cairo.Context,
    x: number,
    y: number,
    layout: Pango.Layout,
    index: number,
    direction: Pango.Direction
): void;
export function render_layout(
    context: StyleContext,
    cr: cairo.Context,
    x: number,
    y: number,
    layout: Pango.Layout
): void;
export function render_line(
    context: StyleContext,
    cr: cairo.Context,
    x0: number,
    y0: number,
    x1: number,
    y1: number
): void;
export function render_option(
    context: StyleContext,
    cr: cairo.Context,
    x: number,
    y: number,
    width: number,
    height: number
): void;
export function render_slider(
    context: StyleContext,
    cr: cairo.Context,
    x: number,
    y: number,
    width: number,
    height: number,
    orientation: Orientation
): void;
export function rgb_to_hsv(r: number, g: number, b: number): [number, number, number];
export function selection_add_target(widget: Widget, selection: Gdk.Atom, target: Gdk.Atom, info: number): void;
export function selection_add_targets(widget: Widget, selection: Gdk.Atom, targets: TargetEntry[]): void;
export function selection_clear_targets(widget: Widget, selection: Gdk.Atom): void;
export function selection_convert(widget: Widget, selection: Gdk.Atom, target: Gdk.Atom, time_: number): boolean;
export function selection_owner_set(widget: Widget | null, selection: Gdk.Atom, time_: number): boolean;
export function selection_owner_set_for_display(
    display: Gdk.Display,
    widget: Widget | null,
    selection: Gdk.Atom,
    time_: number
): boolean;
export function selection_remove_all(widget: Widget): void;
export function set_debug_flags(flags: number): void;
export function show_uri(screen: Gdk.Screen | null, uri: string, timestamp: number): boolean;
export function show_uri_on_window(parent: Window | null, uri: string, timestamp: number): boolean;
export function stock_add(items: StockItem[]): void;
export function stock_add_static(items: StockItem[]): void;
export function stock_list_ids(): string[];
export function stock_lookup(stock_id: string): [boolean, StockItem];
export function stock_set_translate_func(domain: string, func: TranslateFunc): void;
export function target_table_free(targets: TargetEntry[]): void;
export function target_table_new_from_list(list: TargetList): TargetEntry[];
export function targets_include_image(targets: Gdk.Atom[], writable: boolean): boolean;
export function targets_include_rich_text(targets: Gdk.Atom[], buffer: TextBuffer): boolean;
export function targets_include_text(targets: Gdk.Atom[]): boolean;
export function targets_include_uri(targets: Gdk.Atom[]): boolean;
export function test_create_simple_window(window_title: string, dialog_text: string): Widget;
export function test_find_label(widget: Widget, label_pattern: string): Widget;
export function test_find_sibling(base_widget: Widget, widget_type: GObject.GType): Widget;
export function test_find_widget(widget: Widget, label_pattern: string, widget_type: GObject.GType): Widget | null;
export function test_list_all_types(): GObject.GType[];
export function test_register_all_types(): void;
export function test_slider_get_value(widget: Widget): number;
export function test_slider_set_perc(widget: Widget, percentage: number): void;
export function test_spin_button_click(spinner: SpinButton, button: number, upwards: boolean): boolean;
export function test_text_get(widget: Widget): string;
export function test_text_set(widget: Widget, string: string): void;
export function test_widget_click(widget: Widget, button: number, modifiers: Gdk.ModifierType): boolean;
export function test_widget_send_key(widget: Widget, keyval: number, modifiers: Gdk.ModifierType): boolean;
export function test_widget_wait_for_draw(widget: Widget): void;
export function tree_get_row_drag_data(selection_data: SelectionData): [boolean, TreeModel | null, TreePath | null];
export function tree_row_reference_deleted(proxy: GObject.Object, path: TreePath): void;
export function tree_row_reference_inserted(proxy: GObject.Object, path: TreePath): void;
export function tree_set_row_drag_data(selection_data: SelectionData, tree_model: TreeModel, path: TreePath): boolean;
export function __true(): boolean;
export type AccelGroupActivate<A = GObject.Object> = (
    accel_group: AccelGroup,
    acceleratable: A,
    keyval: number,
    modifier: Gdk.ModifierType
) => boolean;
export type AccelGroupFindFunc = (key: AccelKey, closure: GObject.Closure) => boolean;
export type AccelMapForeach = (
    data: any | null,
    accel_path: string,
    accel_key: number,
    accel_mods: Gdk.ModifierType,
    changed: boolean
) => void;
export type AssistantPageFunc = (current_page: number) => number;
export type BuilderConnectFunc<A = GObject.Object, B = GObject.Object> = (
    builder: Builder,
    object: A,
    signal_name: string,
    handler_name: string,
    connect_object: B | null,
    flags: GObject.ConnectFlags
) => void;
export type CalendarDetailFunc = (calendar: Calendar, year: number, month: number, day: number) => string | null;
export type Callback = (widget: Widget) => void;
export type CellAllocCallback = (
    renderer: CellRenderer,
    cell_area: Gdk.Rectangle,
    cell_background: Gdk.Rectangle
) => boolean;
export type CellCallback = (renderer: CellRenderer) => boolean;
export type CellLayoutDataFunc = (
    cell_layout: CellLayout,
    cell: CellRenderer,
    tree_model: TreeModel,
    iter: TreeIter
) => void;
export type ClipboardClearFunc = (clipboard: Clipboard, user_data_or_owner?: any | null) => void;
export type ClipboardGetFunc = (
    clipboard: Clipboard,
    selection_data: SelectionData,
    info: number,
    user_data_or_owner?: any | null
) => void;
export type ClipboardImageReceivedFunc = (clipboard: Clipboard, pixbuf: GdkPixbuf.Pixbuf) => void;
export type ClipboardReceivedFunc = (clipboard: Clipboard, selection_data: SelectionData) => void;
export type ClipboardRichTextReceivedFunc = (
    clipboard: Clipboard,
    format: Gdk.Atom,
    text: string | null,
    length: number
) => void;
export type ClipboardTargetsReceivedFunc = (clipboard: Clipboard, atoms?: Gdk.Atom[] | null) => void;
export type ClipboardTextReceivedFunc = (clipboard: Clipboard, text?: string | null) => void;
export type ClipboardURIReceivedFunc = (clipboard: Clipboard, uris: string[]) => void;
export type ColorSelectionChangePaletteFunc = (colors: Gdk.Color[]) => void;
export type ColorSelectionChangePaletteWithScreenFunc = (screen: Gdk.Screen, colors: Gdk.Color[]) => void;
export type EntryCompletionMatchFunc = (completion: EntryCompletion, key: string, iter: TreeIter) => boolean;
export type FileFilterFunc = (filter_info: FileFilterInfo) => boolean;
export type FlowBoxCreateWidgetFunc<A = GObject.Object> = (item: A) => Widget;
export type FlowBoxFilterFunc = (child: FlowBoxChild) => boolean;
export type FlowBoxForeachFunc = (box: FlowBox, child: FlowBoxChild) => void;
export type FlowBoxSortFunc = (child1: FlowBoxChild, child2: FlowBoxChild) => number;
export type FontFilterFunc = (family: Pango.FontFamily, face: Pango.FontFace) => boolean;
export type IconViewForeachFunc = (icon_view: IconView, path: TreePath) => void;
export type KeySnoopFunc = (grab_widget: Widget, event: Gdk.EventKey) => number;
export type ListBoxCreateWidgetFunc<A = GObject.Object> = (item: A) => Widget;
export type ListBoxFilterFunc = (row: ListBoxRow) => boolean;
export type ListBoxForeachFunc = (box: ListBox, row: ListBoxRow) => void;
export type ListBoxSortFunc = (row1: ListBoxRow, row2: ListBoxRow) => number;
export type ListBoxUpdateHeaderFunc = (row: ListBoxRow, before?: ListBoxRow | null) => void;
export type MenuDetachFunc = (attach_widget: Widget, menu: Menu) => void;
export type MenuPositionFunc = (menu: Menu, x: number, y: number) => void;
export type ModuleDisplayInitFunc = (display: Gdk.Display) => void;
export type ModuleInitFunc = (argv?: string[] | null) => void;
export type PageSetupDoneFunc = (page_setup: PageSetup) => void;
export type PrintSettingsFunc = (key: string, value: string) => void;
export type RcPropertyParser = (
    pspec: GObject.ParamSpec,
    rc_string: GLib.String,
    property_value: GObject.Value | any
) => boolean;
export type RecentFilterFunc = (filter_info: RecentFilterInfo) => boolean;
export type RecentSortFunc = (a: RecentInfo, b: RecentInfo) => number;
export type StylePropertyParser = (string: string, value: GObject.Value | any) => boolean;
export type TextBufferDeserializeFunc = (
    register_buffer: TextBuffer,
    content_buffer: TextBuffer,
    iter: TextIter,
    data: Uint8Array | string,
    create_tags: boolean
) => boolean;
export type TextBufferSerializeFunc = (
    register_buffer: TextBuffer,
    content_buffer: TextBuffer,
    start: TextIter,
    end: TextIter
) => Uint8Array | null;
export type TextCharPredicate = (ch: number) => boolean;
export type TextTagTableForeach = (tag: TextTag) => void;
export type TickCallback = (widget: Widget, frame_clock: Gdk.FrameClock) => boolean;
export type TranslateFunc = (path: string) => string;
export type TreeCellDataFunc = (
    tree_column: TreeViewColumn,
    cell: CellRenderer,
    tree_model: TreeModel,
    iter: TreeIter
) => void;
export type TreeDestroyCountFunc = (tree_view: TreeView, path: TreePath, children: number) => void;
export type TreeIterCompareFunc = (model: TreeModel, a: TreeIter, b: TreeIter) => number;
export type TreeModelFilterModifyFunc = (model: TreeModel, iter: TreeIter, column: number) => void;
export type TreeModelFilterVisibleFunc = (model: TreeModel, iter: TreeIter) => boolean;
export type TreeModelForeachFunc = (model: TreeModel, path: TreePath, iter: TreeIter) => boolean;
export type TreeSelectionForeachFunc = (model: TreeModel, path: TreePath, iter: TreeIter) => void;
export type TreeSelectionFunc = (
    selection: TreeSelection,
    model: TreeModel,
    path: TreePath,
    path_currently_selected: boolean
) => boolean;
export type TreeViewColumnDropFunc = (
    tree_view: TreeView,
    column: TreeViewColumn,
    prev_column: TreeViewColumn,
    next_column: TreeViewColumn
) => boolean;
export type TreeViewMappingFunc = (tree_view: TreeView, path: TreePath) => void;
export type TreeViewRowSeparatorFunc = (model: TreeModel, iter: TreeIter) => boolean;
export type TreeViewSearchEqualFunc = (model: TreeModel, column: number, key: string, iter: TreeIter) => boolean;
export type TreeViewSearchPositionFunc = (tree_view: TreeView, search_dialog: Widget) => void;

export namespace Align {
    export const $gtype: GObject.GType<Align>;
}

export enum Align {
    FILL = 0,
    START = 1,
    END = 2,
    CENTER = 3,
    BASELINE = 4,
}

export namespace ArrowPlacement {
    export const $gtype: GObject.GType<ArrowPlacement>;
}

export enum ArrowPlacement {
    BOTH = 0,
    START = 1,
    END = 2,
}

export namespace ArrowType {
    export const $gtype: GObject.GType<ArrowType>;
}

export enum ArrowType {
    UP = 0,
    DOWN = 1,
    LEFT = 2,
    RIGHT = 3,
    NONE = 4,
}

export namespace AssistantPageType {
    export const $gtype: GObject.GType<AssistantPageType>;
}

export enum AssistantPageType {
    CONTENT = 0,
    INTRO = 1,
    CONFIRM = 2,
    SUMMARY = 3,
    PROGRESS = 4,
    CUSTOM = 5,
}

export namespace BaselinePosition {
    export const $gtype: GObject.GType<BaselinePosition>;
}

export enum BaselinePosition {
    TOP = 0,
    CENTER = 1,
    BOTTOM = 2,
}

export namespace BorderStyle {
    export const $gtype: GObject.GType<BorderStyle>;
}

export enum BorderStyle {
    NONE = 0,
    SOLID = 1,
    INSET = 2,
    OUTSET = 3,
    HIDDEN = 4,
    DOTTED = 5,
    DASHED = 6,
    DOUBLE = 7,
    GROOVE = 8,
    RIDGE = 9,
}

export class BuilderError extends GLib.Error {
    static $gtype: GObject.GType<BuilderError>;

    constructor(options: { message: string; code: number });
    constructor(copy: BuilderError);

    // Fields
    static INVALID_TYPE_FUNCTION: number;
    static UNHANDLED_TAG: number;
    static MISSING_ATTRIBUTE: number;
    static INVALID_ATTRIBUTE: number;
    static INVALID_TAG: number;
    static MISSING_PROPERTY_VALUE: number;
    static INVALID_VALUE: number;
    static VERSION_MISMATCH: number;
    static DUPLICATE_ID: number;
    static OBJECT_TYPE_REFUSED: number;
    static TEMPLATE_MISMATCH: number;
    static INVALID_PROPERTY: number;
    static INVALID_SIGNAL: number;
    static INVALID_ID: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace ButtonBoxStyle {
    export const $gtype: GObject.GType<ButtonBoxStyle>;
}

export enum ButtonBoxStyle {
    SPREAD = 1,
    EDGE = 2,
    START = 3,
    END = 4,
    CENTER = 5,
    EXPAND = 6,
}

export namespace ButtonRole {
    export const $gtype: GObject.GType<ButtonRole>;
}

export enum ButtonRole {
    NORMAL = 0,
    CHECK = 1,
    RADIO = 2,
}

export namespace ButtonsType {
    export const $gtype: GObject.GType<ButtonsType>;
}

export enum ButtonsType {
    NONE = 0,
    OK = 1,
    CLOSE = 2,
    CANCEL = 3,
    YES_NO = 4,
    OK_CANCEL = 5,
}

export namespace CellRendererAccelMode {
    export const $gtype: GObject.GType<CellRendererAccelMode>;
}

export enum CellRendererAccelMode {
    GTK = 0,
    OTHER = 1,
}

export namespace CellRendererMode {
    export const $gtype: GObject.GType<CellRendererMode>;
}

export enum CellRendererMode {
    INERT = 0,
    ACTIVATABLE = 1,
    EDITABLE = 2,
}

export namespace CornerType {
    export const $gtype: GObject.GType<CornerType>;
}

export enum CornerType {
    TOP_LEFT = 0,
    BOTTOM_LEFT = 1,
    TOP_RIGHT = 2,
    BOTTOM_RIGHT = 3,
}

export class CssProviderError extends GLib.Error {
    static $gtype: GObject.GType<CssProviderError>;

    constructor(options: { message: string; code: number });
    constructor(copy: CssProviderError);

    // Fields
    static FAILED: number;
    static SYNTAX: number;
    static IMPORT: number;
    static NAME: number;
    static DEPRECATED: number;
    static UNKNOWN_VALUE: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace CssSectionType {
    export const $gtype: GObject.GType<CssSectionType>;
}

export enum CssSectionType {
    DOCUMENT = 0,
    IMPORT = 1,
    COLOR_DEFINITION = 2,
    BINDING_SET = 3,
    RULESET = 4,
    SELECTOR = 5,
    DECLARATION = 6,
    VALUE = 7,
    KEYFRAMES = 8,
}

export namespace DeleteType {
    export const $gtype: GObject.GType<DeleteType>;
}

export enum DeleteType {
    CHARS = 0,
    WORD_ENDS = 1,
    WORDS = 2,
    DISPLAY_LINES = 3,
    DISPLAY_LINE_ENDS = 4,
    PARAGRAPH_ENDS = 5,
    PARAGRAPHS = 6,
    WHITESPACE = 7,
}

export namespace DirectionType {
    export const $gtype: GObject.GType<DirectionType>;
}

export enum DirectionType {
    TAB_FORWARD = 0,
    TAB_BACKWARD = 1,
    UP = 2,
    DOWN = 3,
    LEFT = 4,
    RIGHT = 5,
}

export namespace DragResult {
    export const $gtype: GObject.GType<DragResult>;
}

export enum DragResult {
    SUCCESS = 0,
    NO_TARGET = 1,
    USER_CANCELLED = 2,
    TIMEOUT_EXPIRED = 3,
    GRAB_BROKEN = 4,
    ERROR = 5,
}

export namespace EntryIconPosition {
    export const $gtype: GObject.GType<EntryIconPosition>;
}

export enum EntryIconPosition {
    PRIMARY = 0,
    SECONDARY = 1,
}

export namespace EventSequenceState {
    export const $gtype: GObject.GType<EventSequenceState>;
}

export enum EventSequenceState {
    NONE = 0,
    CLAIMED = 1,
    DENIED = 2,
}

export namespace ExpanderStyle {
    export const $gtype: GObject.GType<ExpanderStyle>;
}

export enum ExpanderStyle {
    COLLAPSED = 0,
    SEMI_COLLAPSED = 1,
    SEMI_EXPANDED = 2,
    EXPANDED = 3,
}

export namespace FileChooserAction {
    export const $gtype: GObject.GType<FileChooserAction>;
}

export enum FileChooserAction {
    OPEN = 0,
    SAVE = 1,
    SELECT_FOLDER = 2,
    CREATE_FOLDER = 3,
}

export namespace FileChooserConfirmation {
    export const $gtype: GObject.GType<FileChooserConfirmation>;
}

export enum FileChooserConfirmation {
    CONFIRM = 0,
    ACCEPT_FILENAME = 1,
    SELECT_AGAIN = 2,
}

export class FileChooserError extends GLib.Error {
    static $gtype: GObject.GType<FileChooserError>;

    constructor(options: { message: string; code: number });
    constructor(copy: FileChooserError);

    // Fields
    static NONEXISTENT: number;
    static BAD_FILENAME: number;
    static ALREADY_EXISTS: number;
    static INCOMPLETE_HOSTNAME: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace IMPreeditStyle {
    export const $gtype: GObject.GType<IMPreeditStyle>;
}

export enum IMPreeditStyle {
    NOTHING = 0,
    CALLBACK = 1,
    NONE = 2,
}

export namespace IMStatusStyle {
    export const $gtype: GObject.GType<IMStatusStyle>;
}

export enum IMStatusStyle {
    NOTHING = 0,
    CALLBACK = 1,
    NONE = 2,
}

export namespace IconSize {
    export const $gtype: GObject.GType<IconSize>;
}

export enum IconSize {
    INVALID = 0,
    MENU = 1,
    SMALL_TOOLBAR = 2,
    LARGE_TOOLBAR = 3,
    BUTTON = 4,
    DND = 5,
    DIALOG = 6,
}

export class IconThemeError extends GLib.Error {
    static $gtype: GObject.GType<IconThemeError>;

    constructor(options: { message: string; code: number });
    constructor(copy: IconThemeError);

    // Fields
    static NOT_FOUND: number;
    static FAILED: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace IconViewDropPosition {
    export const $gtype: GObject.GType<IconViewDropPosition>;
}

export enum IconViewDropPosition {
    NO_DROP = 0,
    DROP_INTO = 1,
    DROP_LEFT = 2,
    DROP_RIGHT = 3,
    DROP_ABOVE = 4,
    DROP_BELOW = 5,
}

export namespace ImageType {
    export const $gtype: GObject.GType<ImageType>;
}

export enum ImageType {
    EMPTY = 0,
    PIXBUF = 1,
    STOCK = 2,
    ICON_SET = 3,
    ANIMATION = 4,
    ICON_NAME = 5,
    GICON = 6,
    SURFACE = 7,
}

export namespace InputPurpose {
    export const $gtype: GObject.GType<InputPurpose>;
}

export enum InputPurpose {
    FREE_FORM = 0,
    ALPHA = 1,
    DIGITS = 2,
    NUMBER = 3,
    PHONE = 4,
    URL = 5,
    EMAIL = 6,
    NAME = 7,
    PASSWORD = 8,
    PIN = 9,
    TERMINAL = 10,
}

export namespace Justification {
    export const $gtype: GObject.GType<Justification>;
}

export enum Justification {
    LEFT = 0,
    RIGHT = 1,
    CENTER = 2,
    FILL = 3,
}

export namespace LevelBarMode {
    export const $gtype: GObject.GType<LevelBarMode>;
}

export enum LevelBarMode {
    CONTINUOUS = 0,
    DISCRETE = 1,
}

export namespace License {
    export const $gtype: GObject.GType<License>;
}

export enum License {
    UNKNOWN = 0,
    CUSTOM = 1,
    GPL_2_0 = 2,
    GPL_3_0 = 3,
    LGPL_2_1 = 4,
    LGPL_3_0 = 5,
    BSD = 6,
    MIT_X11 = 7,
    ARTISTIC = 8,
    GPL_2_0_ONLY = 9,
    GPL_3_0_ONLY = 10,
    LGPL_2_1_ONLY = 11,
    LGPL_3_0_ONLY = 12,
    AGPL_3_0 = 13,
    AGPL_3_0_ONLY = 14,
    BSD_3 = 15,
    APACHE_2_0 = 16,
    MPL_2_0 = 17,
}

export namespace MenuDirectionType {
    export const $gtype: GObject.GType<MenuDirectionType>;
}

export enum MenuDirectionType {
    PARENT = 0,
    CHILD = 1,
    NEXT = 2,
    PREV = 3,
}

export namespace MessageType {
    export const $gtype: GObject.GType<MessageType>;
}

export enum MessageType {
    INFO = 0,
    WARNING = 1,
    QUESTION = 2,
    ERROR = 3,
    OTHER = 4,
}

export namespace MovementStep {
    export const $gtype: GObject.GType<MovementStep>;
}

export enum MovementStep {
    LOGICAL_POSITIONS = 0,
    VISUAL_POSITIONS = 1,
    WORDS = 2,
    DISPLAY_LINES = 3,
    DISPLAY_LINE_ENDS = 4,
    PARAGRAPHS = 5,
    PARAGRAPH_ENDS = 6,
    PAGES = 7,
    BUFFER_ENDS = 8,
    HORIZONTAL_PAGES = 9,
}

export namespace NotebookTab {
    export const $gtype: GObject.GType<NotebookTab>;
}

export enum NotebookTab {
    FIRST = 0,
    LAST = 1,
}

export namespace NumberUpLayout {
    export const $gtype: GObject.GType<NumberUpLayout>;
}

export enum NumberUpLayout {
    LRTB = 0,
    LRBT = 1,
    RLTB = 2,
    RLBT = 3,
    TBLR = 4,
    TBRL = 5,
    BTLR = 6,
    BTRL = 7,
}

export namespace Orientation {
    export const $gtype: GObject.GType<Orientation>;
}

export enum Orientation {
    HORIZONTAL = 0,
    VERTICAL = 1,
}

export namespace PackDirection {
    export const $gtype: GObject.GType<PackDirection>;
}

export enum PackDirection {
    LTR = 0,
    RTL = 1,
    TTB = 2,
    BTT = 3,
}

export namespace PackType {
    export const $gtype: GObject.GType<PackType>;
}

export enum PackType {
    START = 0,
    END = 1,
}

export namespace PadActionType {
    export const $gtype: GObject.GType<PadActionType>;
}

export enum PadActionType {
    BUTTON = 0,
    RING = 1,
    STRIP = 2,
}

export namespace PageOrientation {
    export const $gtype: GObject.GType<PageOrientation>;
}

export enum PageOrientation {
    PORTRAIT = 0,
    LANDSCAPE = 1,
    REVERSE_PORTRAIT = 2,
    REVERSE_LANDSCAPE = 3,
}

export namespace PageSet {
    export const $gtype: GObject.GType<PageSet>;
}

export enum PageSet {
    ALL = 0,
    EVEN = 1,
    ODD = 2,
}

export namespace PanDirection {
    export const $gtype: GObject.GType<PanDirection>;
}

export enum PanDirection {
    LEFT = 0,
    RIGHT = 1,
    UP = 2,
    DOWN = 3,
}

export namespace PathPriorityType {
    export const $gtype: GObject.GType<PathPriorityType>;
}

export enum PathPriorityType {
    LOWEST = 0,
    GTK = 4,
    APPLICATION = 8,
    THEME = 10,
    RC = 12,
    HIGHEST = 15,
}

export namespace PathType {
    export const $gtype: GObject.GType<PathType>;
}

export enum PathType {
    WIDGET = 0,
    WIDGET_CLASS = 1,
    CLASS = 2,
}

export namespace PolicyType {
    export const $gtype: GObject.GType<PolicyType>;
}

export enum PolicyType {
    ALWAYS = 0,
    AUTOMATIC = 1,
    NEVER = 2,
    EXTERNAL = 3,
}

export namespace PopoverConstraint {
    export const $gtype: GObject.GType<PopoverConstraint>;
}

export enum PopoverConstraint {
    NONE = 0,
    WINDOW = 1,
}

export namespace PositionType {
    export const $gtype: GObject.GType<PositionType>;
}

export enum PositionType {
    LEFT = 0,
    RIGHT = 1,
    TOP = 2,
    BOTTOM = 3,
}

export namespace PrintDuplex {
    export const $gtype: GObject.GType<PrintDuplex>;
}

export enum PrintDuplex {
    SIMPLEX = 0,
    HORIZONTAL = 1,
    VERTICAL = 2,
}

export class PrintError extends GLib.Error {
    static $gtype: GObject.GType<PrintError>;

    constructor(options: { message: string; code: number });
    constructor(copy: PrintError);

    // Fields
    static GENERAL: number;
    static INTERNAL_ERROR: number;
    static NOMEM: number;
    static INVALID_FILE: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace PrintOperationAction {
    export const $gtype: GObject.GType<PrintOperationAction>;
}

export enum PrintOperationAction {
    PRINT_DIALOG = 0,
    PRINT = 1,
    PREVIEW = 2,
    EXPORT = 3,
}

export namespace PrintOperationResult {
    export const $gtype: GObject.GType<PrintOperationResult>;
}

export enum PrintOperationResult {
    ERROR = 0,
    APPLY = 1,
    CANCEL = 2,
    IN_PROGRESS = 3,
}

export namespace PrintPages {
    export const $gtype: GObject.GType<PrintPages>;
}

export enum PrintPages {
    ALL = 0,
    CURRENT = 1,
    RANGES = 2,
    SELECTION = 3,
}

export namespace PrintQuality {
    export const $gtype: GObject.GType<PrintQuality>;
}

export enum PrintQuality {
    LOW = 0,
    NORMAL = 1,
    HIGH = 2,
    DRAFT = 3,
}

export namespace PrintStatus {
    export const $gtype: GObject.GType<PrintStatus>;
}

export enum PrintStatus {
    INITIAL = 0,
    PREPARING = 1,
    GENERATING_DATA = 2,
    SENDING_DATA = 3,
    PENDING = 4,
    PENDING_ISSUE = 5,
    PRINTING = 6,
    FINISHED = 7,
    FINISHED_ABORTED = 8,
}

export namespace PropagationPhase {
    export const $gtype: GObject.GType<PropagationPhase>;
}

export enum PropagationPhase {
    NONE = 0,
    CAPTURE = 1,
    BUBBLE = 2,
    TARGET = 3,
}

export namespace RcTokenType {
    export const $gtype: GObject.GType<RcTokenType>;
}

export enum RcTokenType {
    INVALID = 270,
    INCLUDE = 271,
    NORMAL = 272,
    ACTIVE = 273,
    PRELIGHT = 274,
    SELECTED = 275,
    INSENSITIVE = 276,
    FG = 277,
    BG = 278,
    TEXT = 279,
    BASE = 280,
    XTHICKNESS = 281,
    YTHICKNESS = 282,
    FONT = 283,
    FONTSET = 284,
    FONT_NAME = 285,
    BG_PIXMAP = 286,
    PIXMAP_PATH = 287,
    STYLE = 288,
    BINDING = 289,
    BIND = 290,
    WIDGET = 291,
    WIDGET_CLASS = 292,
    CLASS = 293,
    LOWEST = 294,
    GTK = 295,
    APPLICATION = 296,
    THEME = 297,
    RC = 298,
    HIGHEST = 299,
    ENGINE = 300,
    MODULE_PATH = 301,
    IM_MODULE_PATH = 302,
    IM_MODULE_FILE = 303,
    STOCK = 304,
    LTR = 305,
    RTL = 306,
    COLOR = 307,
    UNBIND = 308,
    LAST = 309,
}

export class RecentChooserError extends GLib.Error {
    static $gtype: GObject.GType<RecentChooserError>;

    constructor(options: { message: string; code: number });
    constructor(copy: RecentChooserError);

    // Fields
    static NOT_FOUND: number;
    static INVALID_URI: number;

    // Members
    static quark(): GLib.Quark;
}

export class RecentManagerError extends GLib.Error {
    static $gtype: GObject.GType<RecentManagerError>;

    constructor(options: { message: string; code: number });
    constructor(copy: RecentManagerError);

    // Fields
    static NOT_FOUND: number;
    static INVALID_URI: number;
    static INVALID_ENCODING: number;
    static NOT_REGISTERED: number;
    static READ: number;
    static WRITE: number;
    static UNKNOWN: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace RecentSortType {
    export const $gtype: GObject.GType<RecentSortType>;
}

export enum RecentSortType {
    NONE = 0,
    MRU = 1,
    LRU = 2,
    CUSTOM = 3,
}

export namespace ReliefStyle {
    export const $gtype: GObject.GType<ReliefStyle>;
}

export enum ReliefStyle {
    NORMAL = 0,
    HALF = 1,
    NONE = 2,
}

export namespace ResizeMode {
    export const $gtype: GObject.GType<ResizeMode>;
}

export enum ResizeMode {
    PARENT = 0,
    QUEUE = 1,
    IMMEDIATE = 2,
}

export namespace ResponseType {
    export const $gtype: GObject.GType<ResponseType>;
}

export enum ResponseType {
    NONE = -1,
    REJECT = -2,
    ACCEPT = -3,
    DELETE_EVENT = -4,
    OK = -5,
    CANCEL = -6,
    CLOSE = -7,
    YES = -8,
    NO = -9,
    APPLY = -10,
    HELP = -11,
}

export namespace RevealerTransitionType {
    export const $gtype: GObject.GType<RevealerTransitionType>;
}

export enum RevealerTransitionType {
    NONE = 0,
    CROSSFADE = 1,
    SLIDE_RIGHT = 2,
    SLIDE_LEFT = 3,
    SLIDE_UP = 4,
    SLIDE_DOWN = 5,
}

export namespace ScrollStep {
    export const $gtype: GObject.GType<ScrollStep>;
}

export enum ScrollStep {
    STEPS = 0,
    PAGES = 1,
    ENDS = 2,
    HORIZONTAL_STEPS = 3,
    HORIZONTAL_PAGES = 4,
    HORIZONTAL_ENDS = 5,
}

export namespace ScrollType {
    export const $gtype: GObject.GType<ScrollType>;
}

export enum ScrollType {
    NONE = 0,
    JUMP = 1,
    STEP_BACKWARD = 2,
    STEP_FORWARD = 3,
    PAGE_BACKWARD = 4,
    PAGE_FORWARD = 5,
    STEP_UP = 6,
    STEP_DOWN = 7,
    PAGE_UP = 8,
    PAGE_DOWN = 9,
    STEP_LEFT = 10,
    STEP_RIGHT = 11,
    PAGE_LEFT = 12,
    PAGE_RIGHT = 13,
    START = 14,
    END = 15,
}

export namespace ScrollablePolicy {
    export const $gtype: GObject.GType<ScrollablePolicy>;
}

export enum ScrollablePolicy {
    MINIMUM = 0,
    NATURAL = 1,
}

export namespace SelectionMode {
    export const $gtype: GObject.GType<SelectionMode>;
}

export enum SelectionMode {
    NONE = 0,
    SINGLE = 1,
    BROWSE = 2,
    MULTIPLE = 3,
}

export namespace SensitivityType {
    export const $gtype: GObject.GType<SensitivityType>;
}

export enum SensitivityType {
    AUTO = 0,
    ON = 1,
    OFF = 2,
}

export namespace ShadowType {
    export const $gtype: GObject.GType<ShadowType>;
}

export enum ShadowType {
    NONE = 0,
    IN = 1,
    OUT = 2,
    ETCHED_IN = 3,
    ETCHED_OUT = 4,
}

export namespace ShortcutType {
    export const $gtype: GObject.GType<ShortcutType>;
}

export enum ShortcutType {
    ACCELERATOR = 0,
    GESTURE_PINCH = 1,
    GESTURE_STRETCH = 2,
    GESTURE_ROTATE_CLOCKWISE = 3,
    GESTURE_ROTATE_COUNTERCLOCKWISE = 4,
    GESTURE_TWO_FINGER_SWIPE_LEFT = 5,
    GESTURE_TWO_FINGER_SWIPE_RIGHT = 6,
    GESTURE = 7,
}

export namespace SizeGroupMode {
    export const $gtype: GObject.GType<SizeGroupMode>;
}

export enum SizeGroupMode {
    NONE = 0,
    HORIZONTAL = 1,
    VERTICAL = 2,
    BOTH = 3,
}

export namespace SizeRequestMode {
    export const $gtype: GObject.GType<SizeRequestMode>;
}

export enum SizeRequestMode {
    HEIGHT_FOR_WIDTH = 0,
    WIDTH_FOR_HEIGHT = 1,
    CONSTANT_SIZE = 2,
}

export namespace SortType {
    export const $gtype: GObject.GType<SortType>;
}

export enum SortType {
    ASCENDING = 0,
    DESCENDING = 1,
}

export namespace SpinButtonUpdatePolicy {
    export const $gtype: GObject.GType<SpinButtonUpdatePolicy>;
}

export enum SpinButtonUpdatePolicy {
    ALWAYS = 0,
    IF_VALID = 1,
}

export namespace SpinType {
    export const $gtype: GObject.GType<SpinType>;
}

export enum SpinType {
    STEP_FORWARD = 0,
    STEP_BACKWARD = 1,
    PAGE_FORWARD = 2,
    PAGE_BACKWARD = 3,
    HOME = 4,
    END = 5,
    USER_DEFINED = 6,
}

export namespace StackTransitionType {
    export const $gtype: GObject.GType<StackTransitionType>;
}

export enum StackTransitionType {
    NONE = 0,
    CROSSFADE = 1,
    SLIDE_RIGHT = 2,
    SLIDE_LEFT = 3,
    SLIDE_UP = 4,
    SLIDE_DOWN = 5,
    SLIDE_LEFT_RIGHT = 6,
    SLIDE_UP_DOWN = 7,
    OVER_UP = 8,
    OVER_DOWN = 9,
    OVER_LEFT = 10,
    OVER_RIGHT = 11,
    UNDER_UP = 12,
    UNDER_DOWN = 13,
    UNDER_LEFT = 14,
    UNDER_RIGHT = 15,
    OVER_UP_DOWN = 16,
    OVER_DOWN_UP = 17,
    OVER_LEFT_RIGHT = 18,
    OVER_RIGHT_LEFT = 19,
}

export namespace StateType {
    export const $gtype: GObject.GType<StateType>;
}

export enum StateType {
    NORMAL = 0,
    ACTIVE = 1,
    PRELIGHT = 2,
    SELECTED = 3,
    INSENSITIVE = 4,
    INCONSISTENT = 5,
    FOCUSED = 6,
}

export namespace TextBufferTargetInfo {
    export const $gtype: GObject.GType<TextBufferTargetInfo>;
}

export enum TextBufferTargetInfo {
    BUFFER_CONTENTS = -1,
    RICH_TEXT = -2,
    TEXT = -3,
}

export namespace TextDirection {
    export const $gtype: GObject.GType<TextDirection>;
}

export enum TextDirection {
    NONE = 0,
    LTR = 1,
    RTL = 2,
}

export namespace TextExtendSelection {
    export const $gtype: GObject.GType<TextExtendSelection>;
}

export enum TextExtendSelection {
    WORD = 0,
    LINE = 1,
}

export namespace TextViewLayer {
    export const $gtype: GObject.GType<TextViewLayer>;
}

export enum TextViewLayer {
    BELOW = 0,
    ABOVE = 1,
    BELOW_TEXT = 2,
    ABOVE_TEXT = 3,
}

export namespace TextWindowType {
    export const $gtype: GObject.GType<TextWindowType>;
}

export enum TextWindowType {
    PRIVATE = 0,
    WIDGET = 1,
    TEXT = 2,
    LEFT = 3,
    RIGHT = 4,
    TOP = 5,
    BOTTOM = 6,
}

export namespace ToolbarSpaceStyle {
    export const $gtype: GObject.GType<ToolbarSpaceStyle>;
}

export enum ToolbarSpaceStyle {
    EMPTY = 0,
    LINE = 1,
}

export namespace ToolbarStyle {
    export const $gtype: GObject.GType<ToolbarStyle>;
}

export enum ToolbarStyle {
    ICONS = 0,
    TEXT = 1,
    BOTH = 2,
    BOTH_HORIZ = 3,
}

export namespace TreeViewColumnSizing {
    export const $gtype: GObject.GType<TreeViewColumnSizing>;
}

export enum TreeViewColumnSizing {
    GROW_ONLY = 0,
    AUTOSIZE = 1,
    FIXED = 2,
}

export namespace TreeViewDropPosition {
    export const $gtype: GObject.GType<TreeViewDropPosition>;
}

export enum TreeViewDropPosition {
    BEFORE = 0,
    AFTER = 1,
    INTO_OR_BEFORE = 2,
    INTO_OR_AFTER = 3,
}

export namespace TreeViewGridLines {
    export const $gtype: GObject.GType<TreeViewGridLines>;
}

export enum TreeViewGridLines {
    NONE = 0,
    HORIZONTAL = 1,
    VERTICAL = 2,
    BOTH = 3,
}

export namespace Unit {
    export const $gtype: GObject.GType<Unit>;
}

export enum Unit {
    NONE = 0,
    POINTS = 1,
    INCH = 2,
    MM = 3,
}

export namespace WidgetHelpType {
    export const $gtype: GObject.GType<WidgetHelpType>;
}

export enum WidgetHelpType {
    TOOLTIP = 0,
    WHATS_THIS = 1,
}

export namespace WindowPosition {
    export const $gtype: GObject.GType<WindowPosition>;
}

export enum WindowPosition {
    NONE = 0,
    CENTER = 1,
    MOUSE = 2,
    CENTER_ALWAYS = 3,
    CENTER_ON_PARENT = 4,
}

export namespace WindowType {
    export const $gtype: GObject.GType<WindowType>;
}

export enum WindowType {
    TOPLEVEL = 0,
    POPUP = 1,
}

export namespace WrapMode {
    export const $gtype: GObject.GType<WrapMode>;
}

export enum WrapMode {
    NONE = 0,
    CHAR = 1,
    WORD = 2,
    WORD_CHAR = 3,
}

export namespace AccelFlags {
    export const $gtype: GObject.GType<AccelFlags>;
}

export enum AccelFlags {
    VISIBLE = 1,
    LOCKED = 2,
    MASK = 7,
}

export namespace ApplicationInhibitFlags {
    export const $gtype: GObject.GType<ApplicationInhibitFlags>;
}

export enum ApplicationInhibitFlags {
    LOGOUT = 1,
    SWITCH = 2,
    SUSPEND = 4,
    IDLE = 8,
}

export namespace AttachOptions {
    export const $gtype: GObject.GType<AttachOptions>;
}

export enum AttachOptions {
    EXPAND = 1,
    SHRINK = 2,
    FILL = 4,
}

export namespace CalendarDisplayOptions {
    export const $gtype: GObject.GType<CalendarDisplayOptions>;
}

export enum CalendarDisplayOptions {
    SHOW_HEADING = 1,
    SHOW_DAY_NAMES = 2,
    NO_MONTH_CHANGE = 4,
    SHOW_WEEK_NUMBERS = 8,
    SHOW_DETAILS = 32,
}

export namespace CellRendererState {
    export const $gtype: GObject.GType<CellRendererState>;
}

export enum CellRendererState {
    SELECTED = 1,
    PRELIT = 2,
    INSENSITIVE = 4,
    SORTED = 8,
    FOCUSED = 16,
    EXPANDABLE = 32,
    EXPANDED = 64,
}

export namespace DebugFlag {
    export const $gtype: GObject.GType<DebugFlag>;
}

export enum DebugFlag {
    MISC = 1,
    PLUGSOCKET = 2,
    TEXT = 4,
    TREE = 8,
    UPDATES = 16,
    KEYBINDINGS = 32,
    MULTIHEAD = 64,
    MODULES = 128,
    GEOMETRY = 256,
    ICONTHEME = 512,
    PRINTING = 1024,
    BUILDER = 2048,
    SIZE_REQUEST = 4096,
    NO_CSS_CACHE = 8192,
    BASELINES = 16384,
    PIXEL_CACHE = 32768,
    NO_PIXEL_CACHE = 65536,
    INTERACTIVE = 131072,
    TOUCHSCREEN = 262144,
    ACTIONS = 524288,
    RESIZE = 1048576,
    LAYOUT = 2097152,
}

export namespace DestDefaults {
    export const $gtype: GObject.GType<DestDefaults>;
}

export enum DestDefaults {
    MOTION = 1,
    HIGHLIGHT = 2,
    DROP = 4,
    ALL = 7,
}

export namespace DialogFlags {
    export const $gtype: GObject.GType<DialogFlags>;
}

export enum DialogFlags {
    MODAL = 1,
    DESTROY_WITH_PARENT = 2,
    USE_HEADER_BAR = 4,
}

export namespace EventControllerScrollFlags {
    export const $gtype: GObject.GType<EventControllerScrollFlags>;
}

export enum EventControllerScrollFlags {
    NONE = 0,
    VERTICAL = 1,
    HORIZONTAL = 2,
    DISCRETE = 4,
    KINETIC = 8,
    BOTH_AXES = 3,
}

export namespace FileFilterFlags {
    export const $gtype: GObject.GType<FileFilterFlags>;
}

export enum FileFilterFlags {
    FILENAME = 1,
    URI = 2,
    DISPLAY_NAME = 4,
    MIME_TYPE = 8,
}

export namespace FontChooserLevel {
    export const $gtype: GObject.GType<FontChooserLevel>;
}

export enum FontChooserLevel {
    FAMILY = 0,
    STYLE = 1,
    SIZE = 2,
    VARIATIONS = 4,
    FEATURES = 8,
}

export namespace IconLookupFlags {
    export const $gtype: GObject.GType<IconLookupFlags>;
}

export enum IconLookupFlags {
    NO_SVG = 1,
    FORCE_SVG = 2,
    USE_BUILTIN = 4,
    GENERIC_FALLBACK = 8,
    FORCE_SIZE = 16,
    FORCE_REGULAR = 32,
    FORCE_SYMBOLIC = 64,
    DIR_LTR = 128,
    DIR_RTL = 256,
}

export namespace InputHints {
    export const $gtype: GObject.GType<InputHints>;
}

export enum InputHints {
    NONE = 0,
    SPELLCHECK = 1,
    NO_SPELLCHECK = 2,
    WORD_COMPLETION = 4,
    LOWERCASE = 8,
    UPPERCASE_CHARS = 16,
    UPPERCASE_WORDS = 32,
    UPPERCASE_SENTENCES = 64,
    INHIBIT_OSK = 128,
    VERTICAL_WRITING = 256,
    EMOJI = 512,
    NO_EMOJI = 1024,
}

export namespace JunctionSides {
    export const $gtype: GObject.GType<JunctionSides>;
}

export enum JunctionSides {
    NONE = 0,
    CORNER_TOPLEFT = 1,
    CORNER_TOPRIGHT = 2,
    CORNER_BOTTOMLEFT = 4,
    CORNER_BOTTOMRIGHT = 8,
    TOP = 3,
    BOTTOM = 12,
    LEFT = 5,
    RIGHT = 10,
}

export namespace PlacesOpenFlags {
    export const $gtype: GObject.GType<PlacesOpenFlags>;
}

export enum PlacesOpenFlags {
    NORMAL = 1,
    NEW_TAB = 2,
    NEW_WINDOW = 4,
}

export namespace RcFlags {
    export const $gtype: GObject.GType<RcFlags>;
}

export enum RcFlags {
    FG = 1,
    BG = 2,
    TEXT = 4,
    BASE = 8,
}

export namespace RecentFilterFlags {
    export const $gtype: GObject.GType<RecentFilterFlags>;
}

export enum RecentFilterFlags {
    URI = 1,
    DISPLAY_NAME = 2,
    MIME_TYPE = 4,
    APPLICATION = 8,
    GROUP = 16,
    AGE = 32,
}

export namespace RegionFlags {
    export const $gtype: GObject.GType<RegionFlags>;
}

export enum RegionFlags {
    EVEN = 1,
    ODD = 2,
    FIRST = 4,
    LAST = 8,
    ONLY = 16,
    SORTED = 32,
}

export namespace StateFlags {
    export const $gtype: GObject.GType<StateFlags>;
}

export enum StateFlags {
    NORMAL = 0,
    ACTIVE = 1,
    PRELIGHT = 2,
    SELECTED = 4,
    INSENSITIVE = 8,
    INCONSISTENT = 16,
    FOCUSED = 32,
    BACKDROP = 64,
    DIR_LTR = 128,
    DIR_RTL = 256,
    LINK = 512,
    VISITED = 1024,
    CHECKED = 2048,
    DROP_ACTIVE = 4096,
}

export namespace StyleContextPrintFlags {
    export const $gtype: GObject.GType<StyleContextPrintFlags>;
}

export enum StyleContextPrintFlags {
    NONE = 0,
    RECURSE = 1,
    SHOW_STYLE = 2,
}

export namespace TargetFlags {
    export const $gtype: GObject.GType<TargetFlags>;
}

export enum TargetFlags {
    SAME_APP = 1,
    SAME_WIDGET = 2,
    OTHER_APP = 4,
    OTHER_WIDGET = 8,
}

export namespace TextSearchFlags {
    export const $gtype: GObject.GType<TextSearchFlags>;
}

export enum TextSearchFlags {
    VISIBLE_ONLY = 1,
    TEXT_ONLY = 2,
    CASE_INSENSITIVE = 4,
}

export namespace ToolPaletteDragTargets {
    export const $gtype: GObject.GType<ToolPaletteDragTargets>;
}

export enum ToolPaletteDragTargets {
    ITEMS = 1,
    GROUPS = 2,
}

export namespace TreeModelFlags {
    export const $gtype: GObject.GType<TreeModelFlags>;
}

export enum TreeModelFlags {
    ITERS_PERSIST = 1,
    LIST_ONLY = 2,
}

export namespace UIManagerItemType {
    export const $gtype: GObject.GType<UIManagerItemType>;
}

export enum UIManagerItemType {
    AUTO = 0,
    MENUBAR = 1,
    MENU = 2,
    TOOLBAR = 4,
    PLACEHOLDER = 8,
    POPUP = 16,
    MENUITEM = 32,
    TOOLITEM = 64,
    SEPARATOR = 128,
    ACCELERATOR = 256,
    POPUP_WITH_ACCELS = 512,
}
export module AboutDialog {
    export interface ConstructorProperties extends Dialog.ConstructorProperties {
        [key: string]: any;
        artists: string[];
        authors: string[];
        comments: string;
        copyright: string;
        documenters: string[];
        license: string;
        licenseType: License;
        logo: GdkPixbuf.Pixbuf;
        logoIconName: string;
        programName: string;
        translatorCredits: string;
        version: string;
        website: string;
        websiteLabel: string;
        wrapLicense: boolean;
    }
}
export class AboutDialog extends Dialog implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<AboutDialog>;

    constructor(properties?: Partial<AboutDialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AboutDialog.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get artists(): string[];
    set artists(val: string[]);
    get authors(): string[];
    set authors(val: string[]);
    get comments(): string;
    set comments(val: string);
    get copyright(): string;
    set copyright(val: string);
    get documenters(): string[];
    set documenters(val: string[]);
    get license(): string;
    set license(val: string);
    get licenseType(): License;
    set licenseType(val: License);
    get logo(): GdkPixbuf.Pixbuf;
    set logo(val: GdkPixbuf.Pixbuf);
    get logoIconName(): string;
    set logoIconName(val: string);
    get programName(): string;
    set programName(val: string);
    get translatorCredits(): string;
    set translatorCredits(val: string);
    get version(): string;
    set version(val: string);
    get website(): string;
    set website(val: string);
    get websiteLabel(): string;
    set websiteLabel(val: string);
    get wrapLicense(): boolean;
    set wrapLicense(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "activate-link", callback: (_source: this, uri: string) => boolean): number;
    connect_after(signal: "activate-link", callback: (_source: this, uri: string) => boolean): number;
    emit(signal: "activate-link", uri: string): void;

    // Constructors

    static ["new"](): AboutDialog;

    // Members

    add_credit_section(section_name: string, people: string[]): void;
    get_artists(): string[];
    get_authors(): string[];
    get_comments(): string;
    get_copyright(): string;
    get_documenters(): string[];
    get_license(): string;
    get_license_type(): License;
    get_logo(): GdkPixbuf.Pixbuf;
    get_logo_icon_name(): string;
    get_program_name(): string;
    get_translator_credits(): string;
    get_version(): string;
    get_website(): string;
    get_website_label(): string;
    get_wrap_license(): boolean;
    set_artists(artists: string[]): void;
    set_authors(authors: string[]): void;
    set_comments(comments?: string | null): void;
    set_copyright(copyright?: string | null): void;
    set_documenters(documenters: string[]): void;
    set_license(license?: string | null): void;
    set_license_type(license_type: License): void;
    set_logo(logo?: GdkPixbuf.Pixbuf | null): void;
    set_logo_icon_name(icon_name?: string | null): void;
    set_program_name(name: string): void;
    set_translator_credits(translator_credits?: string | null): void;
    set_version(version?: string | null): void;
    set_website(website?: string | null): void;
    set_website_label(website_label: string): void;
    set_wrap_license(wrap_license: boolean): void;
    vfunc_activate_link(uri: string): boolean;
}
export module AccelGroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        isLocked: boolean;
        modifierMask: Gdk.ModifierType;
    }
}
export class AccelGroup extends GObject.Object {
    static $gtype: GObject.GType<AccelGroup>;

    constructor(properties?: Partial<AccelGroup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AccelGroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get isLocked(): boolean;
    get modifierMask(): Gdk.ModifierType;

    // Fields
    priv: AccelGroupPrivate;

    // Signals

    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect_after(
        signal: "accel-activate",
        callback: (_source: this, acceleratable: GObject.Object, keyval: number, modifier: Gdk.ModifierType) => boolean
    ): number;
    emit(signal: "accel-activate", acceleratable: GObject.Object, keyval: number, modifier: Gdk.ModifierType): void;
    connect_after(
        signal: "accel-changed",
        callback: (_source: this, keyval: number, modifier: Gdk.ModifierType, accel_closure: GObject.Closure) => void
    ): number;
    emit(signal: "accel-changed", keyval: number, modifier: Gdk.ModifierType, accel_closure: GObject.Closure): void;

    // Constructors

    static ["new"](): AccelGroup;

    // Members

    activate(
        accel_quark: GLib.Quark,
        acceleratable: GObject.Object,
        accel_key: number,
        accel_mods: Gdk.ModifierType
    ): boolean;
    connect(accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: AccelFlags, closure: GObject.Closure): void;
    connect(...args: never[]): any;
    connect_by_path(accel_path: string, closure: GObject.Closure): void;
    disconnect(closure?: GObject.Closure | null): boolean;
    // Conflicted with GObject.Object.disconnect
    disconnect(...args: never[]): any;
    disconnect_key(accel_key: number, accel_mods: Gdk.ModifierType): boolean;
    find(find_func: AccelGroupFindFunc): AccelKey;
    get_is_locked(): boolean;
    get_modifier_mask(): Gdk.ModifierType;
    lock(): void;
    query(accel_key: number, accel_mods: Gdk.ModifierType): AccelGroupEntry[] | null;
    unlock(): void;
    vfunc_accel_changed(keyval: number, modifier: Gdk.ModifierType, accel_closure: GObject.Closure): void;
    static from_accel_closure(closure: GObject.Closure): AccelGroup | null;
}
export module AccelLabel {
    export interface ConstructorProperties extends Label.ConstructorProperties {
        [key: string]: any;
        accelClosure: GObject.Closure;
        accelWidget: Widget;
    }
}
export class AccelLabel extends Label implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<AccelLabel>;

    constructor(properties?: Partial<AccelLabel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AccelLabel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get accelClosure(): GObject.Closure;
    set accelClosure(val: GObject.Closure);
    get accelWidget(): Widget;
    set accelWidget(val: Widget);

    // Fields
    // This accessor conflicts with a property, field, or function name in a parent class or interface.
    // @ts-expect-error
    label: Label | any;
    priv: AccelLabelPrivate;

    // Constructors

    static ["new"](string: string): AccelLabel;
    // Conflicted with Gtk.Label.new
    static ["new"](...args: never[]): any;

    // Members

    get_accel(): [number, Gdk.ModifierType];
    get_accel_widget(): Widget | null;
    get_accel_width(): number;
    refetch(): boolean;
    set_accel(accelerator_key: number, accelerator_mods: Gdk.ModifierType): void;
    set_accel_closure(accel_closure?: GObject.Closure | null): void;
    set_accel_widget(accel_widget?: Widget | null): void;
}
export module AccelMap {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class AccelMap extends GObject.Object {
    static $gtype: GObject.GType<AccelMap>;

    constructor(properties?: Partial<AccelMap.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AccelMap.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "changed",
        callback: (_source: this, accel_path: string, accel_key: number, accel_mods: Gdk.ModifierType) => void
    ): number;
    connect_after(
        signal: "changed",
        callback: (_source: this, accel_path: string, accel_key: number, accel_mods: Gdk.ModifierType) => void
    ): number;
    emit(signal: "changed", accel_path: string, accel_key: number, accel_mods: Gdk.ModifierType): void;

    // Members

    static add_entry(accel_path: string, accel_key: number, accel_mods: Gdk.ModifierType): void;
    static add_filter(filter_pattern: string): void;
    static change_entry(accel_path: string, accel_key: number, accel_mods: Gdk.ModifierType, replace: boolean): boolean;
    static foreach(data: any | null, foreach_func: AccelMapForeach): void;
    static foreach_unfiltered(data: any | null, foreach_func: AccelMapForeach): void;
    static get(): AccelMap;
    static load(file_name: string): void;
    static load_fd(fd: number): void;
    static load_scanner(scanner: GLib.Scanner): void;
    static lock_path(accel_path: string): void;
    static lookup_entry(accel_path: string): [boolean, AccelKey | null];
    static save(file_name: string): void;
    static save_fd(fd: number): void;
    static unlock_path(accel_path: string): void;
}
export module Accessible {
    export interface ConstructorProperties extends Atk.Object.ConstructorProperties {
        [key: string]: any;
        widget: Widget;
    }
}
export class Accessible extends Atk.Object {
    static $gtype: GObject.GType<Accessible>;

    constructor(properties?: Partial<Accessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Accessible.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get widget(): Widget;
    set widget(val: Widget);

    // Members

    connect_widget_destroyed(): void;
    get_widget(): Widget | null;
    set_widget(widget?: Widget | null): void;
    vfunc_connect_widget_destroyed(): void;
    vfunc_widget_set(): void;
    vfunc_widget_unset(): void;
}
export module Action {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        actionGroup: ActionGroup;
        alwaysShowImage: boolean;
        gicon: Gio.Icon;
        hideIfEmpty: boolean;
        iconName: string;
        isImportant: boolean;
        label: string;
        name: string;
        sensitive: boolean;
        shortLabel: string;
        stockId: string;
        tooltip: string;
        visible: boolean;
        visibleHorizontal: boolean;
        visibleOverflown: boolean;
        visibleVertical: boolean;
    }
}
export class Action extends GObject.Object implements Buildable {
    static $gtype: GObject.GType<Action>;

    constructor(properties?: Partial<Action.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Action.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get actionGroup(): ActionGroup;
    set actionGroup(val: ActionGroup);
    get alwaysShowImage(): boolean;
    set alwaysShowImage(val: boolean);
    get gicon(): Gio.Icon;
    set gicon(val: Gio.Icon);
    get hideIfEmpty(): boolean;
    set hideIfEmpty(val: boolean);
    get iconName(): string;
    set iconName(val: string);
    get isImportant(): boolean;
    set isImportant(val: boolean);
    get label(): string;
    set label(val: string);
    get name(): string;
    get sensitive(): boolean;
    set sensitive(val: boolean);
    get shortLabel(): string;
    set shortLabel(val: string);
    get stockId(): string;
    set stockId(val: string);
    get tooltip(): string;
    set tooltip(val: string);
    get visible(): boolean;
    set visible(val: boolean);
    get visibleHorizontal(): boolean;
    set visibleHorizontal(val: boolean);
    get visibleOverflown(): boolean;
    set visibleOverflown(val: boolean);
    get visibleVertical(): boolean;
    set visibleVertical(val: boolean);

    // Fields
    object: GObject.Object;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "activate", callback: (_source: this) => void): number;
    connect_after(signal: "activate", callback: (_source: this) => void): number;
    emit(signal: "activate"): void;

    // Constructors

    static ["new"](name: string, label?: string | null, tooltip?: string | null, stock_id?: string | null): Action;

    // Members

    activate(): void;
    block_activate(): void;
    connect_accelerator(): void;
    create_icon(icon_size: number): Widget;
    create_menu(): Widget;
    create_menu_item(): Widget;
    create_tool_item(): Widget;
    disconnect_accelerator(): void;
    get_accel_closure(): GObject.Closure;
    get_accel_path(): string;
    get_always_show_image(): boolean;
    get_gicon(): Gio.Icon;
    get_icon_name(): string;
    get_is_important(): boolean;
    get_label(): string;
    get_name(): string;
    get_proxies(): Widget[];
    get_sensitive(): boolean;
    get_short_label(): string;
    get_stock_id(): string;
    get_tooltip(): string;
    get_visible(): boolean;
    get_visible_horizontal(): boolean;
    get_visible_vertical(): boolean;
    is_sensitive(): boolean;
    is_visible(): boolean;
    set_accel_group(accel_group?: AccelGroup | null): void;
    set_accel_path(accel_path: string): void;
    set_always_show_image(always_show: boolean): void;
    set_gicon(icon: Gio.Icon): void;
    set_icon_name(icon_name: string): void;
    set_is_important(is_important: boolean): void;
    set_label(label: string): void;
    set_sensitive(sensitive: boolean): void;
    set_short_label(short_label: string): void;
    set_stock_id(stock_id: string): void;
    set_tooltip(tooltip: string): void;
    set_visible(visible: boolean): void;
    set_visible_horizontal(visible_horizontal: boolean): void;
    set_visible_vertical(visible_vertical: boolean): void;
    unblock_activate(): void;
    vfunc_activate(): void;
    vfunc_connect_proxy(proxy: Widget): void;
    vfunc_create_menu(): Widget;
    vfunc_create_menu_item(): Widget;
    vfunc_create_tool_item(): Widget;
    vfunc_disconnect_proxy(proxy: Widget): void;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
}
export module ActionBar {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
    }
}
export class ActionBar extends Bin implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<ActionBar>;

    constructor(properties?: Partial<ActionBar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ActionBar.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): ActionBar;

    // Members

    get_center_widget(): Widget | null;
    pack_end(child: Widget): void;
    pack_start(child: Widget): void;
    set_center_widget(center_widget?: Widget | null): void;
}
export module ActionGroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        accelGroup: AccelGroup;
        name: string;
        sensitive: boolean;
        visible: boolean;
    }
}
export class ActionGroup extends GObject.Object implements Buildable {
    static $gtype: GObject.GType<ActionGroup>;

    constructor(properties?: Partial<ActionGroup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ActionGroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get accelGroup(): AccelGroup;
    set accelGroup(val: AccelGroup);
    get name(): string;
    get sensitive(): boolean;
    set sensitive(val: boolean);
    get visible(): boolean;
    set visible(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "connect-proxy", callback: (_source: this, action: Action, proxy: Widget) => void): number;
    connect_after(signal: "connect-proxy", callback: (_source: this, action: Action, proxy: Widget) => void): number;
    emit(signal: "connect-proxy", action: Action, proxy: Widget): void;
    connect(signal: "disconnect-proxy", callback: (_source: this, action: Action, proxy: Widget) => void): number;
    connect_after(signal: "disconnect-proxy", callback: (_source: this, action: Action, proxy: Widget) => void): number;
    emit(signal: "disconnect-proxy", action: Action, proxy: Widget): void;
    connect(signal: "post-activate", callback: (_source: this, action: Action) => void): number;
    connect_after(signal: "post-activate", callback: (_source: this, action: Action) => void): number;
    emit(signal: "post-activate", action: Action): void;
    connect(signal: "pre-activate", callback: (_source: this, action: Action) => void): number;
    connect_after(signal: "pre-activate", callback: (_source: this, action: Action) => void): number;
    emit(signal: "pre-activate", action: Action): void;

    // Constructors

    static ["new"](name: string): ActionGroup;

    // Members

    add_action(action: Action): void;
    add_action_with_accel(action: Action, accelerator?: string | null): void;
    get_accel_group(): AccelGroup;
    get_action(action_name: string): Action;
    get_name(): string;
    get_sensitive(): boolean;
    get_visible(): boolean;
    list_actions(): Action[];
    remove_action(action: Action): void;
    set_accel_group(accel_group?: AccelGroup | null): void;
    set_sensitive(sensitive: boolean): void;
    set_translate_func(func: TranslateFunc): void;
    set_translation_domain(domain?: string | null): void;
    set_visible(visible: boolean): void;
    translate_string(string: string): string;
    vfunc_get_action(action_name: string): Action;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
}
export module Adjustment {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
        lower: number;
        pageIncrement: number;
        pageSize: number;
        stepIncrement: number;
        upper: number;
        value: number;
    }
}
export class Adjustment extends GObject.InitiallyUnowned {
    static $gtype: GObject.GType<Adjustment>;

    constructor(properties?: Partial<Adjustment.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Adjustment.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get lower(): number;
    set lower(val: number);
    get pageIncrement(): number;
    set pageIncrement(val: number);
    get pageSize(): number;
    set pageSize(val: number);
    get stepIncrement(): number;
    set stepIncrement(val: number);
    get upper(): number;
    set upper(val: number);
    get value(): number;
    set value(val: number);

    // Fields
    priv: AdjustmentPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this) => void): number;
    connect_after(signal: "changed", callback: (_source: this) => void): number;
    emit(signal: "changed"): void;
    connect(signal: "value-changed", callback: (_source: this) => void): number;
    connect_after(signal: "value-changed", callback: (_source: this) => void): number;
    emit(signal: "value-changed"): void;

    // Constructors

    static ["new"](
        value: number,
        lower: number,
        upper: number,
        step_increment: number,
        page_increment: number,
        page_size: number
    ): Adjustment;

    // Members

    changed(): void;
    clamp_page(lower: number, upper: number): void;
    configure(
        value: number,
        lower: number,
        upper: number,
        step_increment: number,
        page_increment: number,
        page_size: number
    ): void;
    get_lower(): number;
    get_minimum_increment(): number;
    get_page_increment(): number;
    get_page_size(): number;
    get_step_increment(): number;
    get_upper(): number;
    get_value(): number;
    set_lower(lower: number): void;
    set_page_increment(page_increment: number): void;
    set_page_size(page_size: number): void;
    set_step_increment(step_increment: number): void;
    set_upper(upper: number): void;
    set_value(value: number): void;
    value_changed(): void;
    vfunc_changed(): void;
    vfunc_value_changed(): void;
}
export module Alignment {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        bottomPadding: number;
        leftPadding: number;
        rightPadding: number;
        topPadding: number;
        xalign: number;
        xscale: number;
        yalign: number;
        yscale: number;
    }
}
export class Alignment extends Bin implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Alignment>;

    constructor(properties?: Partial<Alignment.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Alignment.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get bottomPadding(): number;
    set bottomPadding(val: number);
    get leftPadding(): number;
    set leftPadding(val: number);
    get rightPadding(): number;
    set rightPadding(val: number);
    get topPadding(): number;
    set topPadding(val: number);
    get xalign(): number;
    set xalign(val: number);
    get xscale(): number;
    set xscale(val: number);
    get yalign(): number;
    set yalign(val: number);
    get yscale(): number;
    set yscale(val: number);

    // Fields
    bin: Bin;

    // Constructors

    static ["new"](xalign: number, yalign: number, xscale: number, yscale: number): Alignment;

    // Members

    get_padding(): [number, number, number, number];
    set(xalign: number, yalign: number, xscale: number, yscale: number): void;
    // Conflicted with GObject.Object.set
    set(...args: never[]): any;
    set_padding(padding_top: number, padding_bottom: number, padding_left: number, padding_right: number): void;
}
export module AppChooserButton {
    export interface ConstructorProperties extends ComboBox.ConstructorProperties {
        [key: string]: any;
        heading: string;
        showDefaultItem: boolean;
        showDialogItem: boolean;
    }
}
export class AppChooserButton
    extends ComboBox
    implements Atk.ImplementorIface, AppChooser, Buildable, CellEditable, CellLayout
{
    static $gtype: GObject.GType<AppChooserButton>;

    constructor(properties?: Partial<AppChooserButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AppChooserButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get heading(): string;
    set heading(val: string);
    get showDefaultItem(): boolean;
    set showDefaultItem(val: boolean);
    get showDialogItem(): boolean;
    set showDialogItem(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "custom-item-activated", callback: (_source: this, item_name: string) => void): number;
    connect_after(signal: "custom-item-activated", callback: (_source: this, item_name: string) => void): number;
    emit(signal: "custom-item-activated", item_name: string): void;

    // Implemented Properties

    get contentType(): string;
    get editingCanceled(): boolean;
    set editingCanceled(val: boolean);

    // Constructors

    static ["new"](content_type: string): AppChooserButton;
    // Conflicted with Gtk.ComboBox.new
    static ["new"](...args: never[]): any;

    // Members

    append_custom_item(name: string, label: string, icon: Gio.Icon): void;
    append_separator(): void;
    get_heading(): string | null;
    get_show_default_item(): boolean;
    get_show_dialog_item(): boolean;
    set_active_custom_item(name: string): void;
    set_heading(heading: string): void;
    set_show_default_item(setting: boolean): void;
    set_show_dialog_item(setting: boolean): void;
    vfunc_custom_item_activated(item_name: string): void;

    // Implemented Members

    get_app_info(): Gio.AppInfo | null;
    get_content_type(): string;
    refresh(): void;
    editing_done(): void;
    remove_widget(): void;
    start_editing(event?: Gdk.Event | null): void;
    vfunc_editing_done(): void;
    vfunc_remove_widget(): void;
    vfunc_start_editing(event?: Gdk.Event | null): void;
    add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    clear(): void;
    clear_attributes(cell: CellRenderer): void;
    get_area(): CellArea | null;
    get_cells(): CellRenderer[];
    pack_end(cell: CellRenderer, expand: boolean): void;
    pack_start(cell: CellRenderer, expand: boolean): void;
    reorder(cell: CellRenderer, position: number): void;
    set_cell_data_func(cell: CellRenderer, func?: CellLayoutDataFunc | null): void;
    vfunc_add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    vfunc_clear(): void;
    vfunc_clear_attributes(cell: CellRenderer): void;
    vfunc_get_area(): CellArea | null;
    vfunc_get_cells(): CellRenderer[];
    vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
    vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
    vfunc_reorder(cell: CellRenderer, position: number): void;
    vfunc_set_cell_data_func(cell: CellRenderer, func?: CellLayoutDataFunc | null): void;
}
export module AppChooserDialog {
    export interface ConstructorProperties extends Dialog.ConstructorProperties {
        [key: string]: any;
        gfile: Gio.File;
        heading: string;
    }
}
export class AppChooserDialog extends Dialog implements Atk.ImplementorIface, AppChooser, Buildable {
    static $gtype: GObject.GType<AppChooserDialog>;

    constructor(properties?: Partial<AppChooserDialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AppChooserDialog.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get gfile(): Gio.File;
    get heading(): string;
    set heading(val: string);

    // Implemented Properties

    get contentType(): string;

    // Constructors

    static ["new"](parent: Window | null, flags: DialogFlags, file: Gio.File): AppChooserDialog;
    // Conflicted with Gtk.Dialog.new
    static ["new"](...args: never[]): any;
    static new_for_content_type(parent: Window | null, flags: DialogFlags, content_type: string): AppChooserDialog;

    // Members

    get_heading(): string | null;
    get_widget(): Widget;
    set_heading(heading: string): void;

    // Implemented Members

    get_app_info(): Gio.AppInfo | null;
    get_content_type(): string;
    refresh(): void;
}
export module AppChooserWidget {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        defaultText: string;
        showDefault: boolean;
        showFallback: boolean;
        showOther: boolean;
        showRecommended: boolean;
    }
}
export class AppChooserWidget extends Box implements Atk.ImplementorIface, AppChooser, Buildable, Orientable {
    static $gtype: GObject.GType<AppChooserWidget>;

    constructor(properties?: Partial<AppChooserWidget.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AppChooserWidget.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get defaultText(): string;
    set defaultText(val: string);
    get showDefault(): boolean;
    set showDefault(val: boolean);
    get showFallback(): boolean;
    set showFallback(val: boolean);
    get showOther(): boolean;
    set showOther(val: boolean);
    get showRecommended(): boolean;
    set showRecommended(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "application-activated", callback: (_source: this, application: Gio.AppInfo) => void): number;
    connect_after(signal: "application-activated", callback: (_source: this, application: Gio.AppInfo) => void): number;
    emit(signal: "application-activated", application: Gio.AppInfo): void;
    connect(signal: "application-selected", callback: (_source: this, application: Gio.AppInfo) => void): number;
    connect_after(signal: "application-selected", callback: (_source: this, application: Gio.AppInfo) => void): number;
    emit(signal: "application-selected", application: Gio.AppInfo): void;
    connect(signal: "populate-popup", callback: (_source: this, menu: Menu, application: Gio.AppInfo) => void): number;
    connect_after(
        signal: "populate-popup",
        callback: (_source: this, menu: Menu, application: Gio.AppInfo) => void
    ): number;
    emit(signal: "populate-popup", menu: Menu, application: Gio.AppInfo): void;

    // Implemented Properties

    get contentType(): string;
    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](content_type: string): AppChooserWidget;
    // Conflicted with Gtk.Box.new
    static ["new"](...args: never[]): any;

    // Members

    get_default_text(): string;
    get_show_all(): boolean;
    get_show_default(): boolean;
    get_show_fallback(): boolean;
    get_show_other(): boolean;
    get_show_recommended(): boolean;
    set_default_text(text: string): void;
    set_show_all(setting: boolean): void;
    set_show_default(setting: boolean): void;
    set_show_fallback(setting: boolean): void;
    set_show_other(setting: boolean): void;
    set_show_recommended(setting: boolean): void;
    vfunc_application_activated(app_info: Gio.AppInfo): void;
    vfunc_application_selected(app_info: Gio.AppInfo): void;
    vfunc_populate_popup(menu: Menu, app_info: Gio.AppInfo): void;

    // Implemented Members

    get_app_info(): Gio.AppInfo | null;
    get_content_type(): string;
    refresh(): void;
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module Application {
    export interface ConstructorProperties extends Gio.Application.ConstructorProperties {
        [key: string]: any;
        activeWindow: Window;
        appMenu: Gio.MenuModel;
        menubar: Gio.MenuModel;
        registerSession: boolean;
        screensaverActive: boolean;
    }
}
export class Application extends Gio.Application implements Gio.ActionGroup, Gio.ActionMap {
    static $gtype: GObject.GType<Application>;

    constructor(properties?: Partial<Application.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Application.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get activeWindow(): Window;
    get appMenu(): Gio.MenuModel;
    set appMenu(val: Gio.MenuModel);
    get menubar(): Gio.MenuModel;
    set menubar(val: Gio.MenuModel);
    get registerSession(): boolean;
    set registerSession(val: boolean);
    get screensaverActive(): boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "query-end", callback: (_source: this) => void): number;
    connect_after(signal: "query-end", callback: (_source: this) => void): number;
    emit(signal: "query-end"): void;
    connect(signal: "window-added", callback: (_source: this, window: Window) => void): number;
    connect_after(signal: "window-added", callback: (_source: this, window: Window) => void): number;
    emit(signal: "window-added", window: Window): void;
    connect(signal: "window-removed", callback: (_source: this, window: Window) => void): number;
    connect_after(signal: "window-removed", callback: (_source: this, window: Window) => void): number;
    emit(signal: "window-removed", window: Window): void;

    // Constructors

    static ["new"](application_id: string | null, flags: Gio.ApplicationFlags): Application;

    // Members

    add_accelerator(accelerator: string, action_name: string, parameter?: GLib.Variant | null): void;
    add_window(window: Window): void;
    get_accels_for_action(detailed_action_name: string): string[];
    get_actions_for_accel(accel: string): string[];
    get_active_window(): Window | null;
    get_app_menu(): Gio.MenuModel | null;
    get_menu_by_id(id: string): Gio.Menu;
    get_menubar(): Gio.MenuModel;
    get_window_by_id(id: number): Window | null;
    get_windows(): Window[];
    inhibit(window: Window | null, flags: ApplicationInhibitFlags, reason?: string | null): number;
    is_inhibited(flags: ApplicationInhibitFlags): boolean;
    list_action_descriptions(): string[];
    prefers_app_menu(): boolean;
    remove_accelerator(action_name: string, parameter?: GLib.Variant | null): void;
    remove_window(window: Window): void;
    set_accels_for_action(detailed_action_name: string, accels: string[]): void;
    set_app_menu(app_menu?: Gio.MenuModel | null): void;
    set_menubar(menubar?: Gio.MenuModel | null): void;
    uninhibit(cookie: number): void;
    vfunc_window_added(window: Window): void;
    vfunc_window_removed(window: Window): void;

    // Implemented Members

    action_added(action_name: string): void;
    action_enabled_changed(action_name: string, enabled: boolean): void;
    action_removed(action_name: string): void;
    action_state_changed(action_name: string, state: GLib.Variant): void;
    activate_action(action_name: string, parameter?: GLib.Variant | null): void;
    change_action_state(action_name: string, value: GLib.Variant): void;
    get_action_enabled(action_name: string): boolean;
    get_action_parameter_type(action_name: string): GLib.VariantType | null;
    get_action_state(action_name: string): GLib.Variant | null;
    get_action_state_hint(action_name: string): GLib.Variant | null;
    get_action_state_type(action_name: string): GLib.VariantType | null;
    has_action(action_name: string): boolean;
    list_actions(): string[];
    query_action(
        action_name: string
    ): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];
    vfunc_action_added(action_name: string): void;
    vfunc_action_enabled_changed(action_name: string, enabled: boolean): void;
    vfunc_action_removed(action_name: string): void;
    vfunc_action_state_changed(action_name: string, state: GLib.Variant): void;
    vfunc_activate_action(action_name: string, parameter?: GLib.Variant | null): void;
    vfunc_change_action_state(action_name: string, value: GLib.Variant): void;
    vfunc_get_action_enabled(action_name: string): boolean;
    vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null;
    vfunc_get_action_state(action_name: string): GLib.Variant | null;
    vfunc_get_action_state_hint(action_name: string): GLib.Variant | null;
    vfunc_get_action_state_type(action_name: string): GLib.VariantType | null;
    vfunc_has_action(action_name: string): boolean;
    vfunc_list_actions(): string[];
    vfunc_query_action(
        action_name: string
    ): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];
    add_action(action: Gio.Action): void;
    add_action_entries(entries: Gio.ActionEntry[], user_data?: any | null): void;
    lookup_action(action_name: string): Gio.Action | null;
    remove_action(action_name: string): void;
    vfunc_add_action(action: Gio.Action): void;
    vfunc_lookup_action(action_name: string): Gio.Action | null;
    vfunc_remove_action(action_name: string): void;
}
export module ApplicationWindow {
    export interface ConstructorProperties extends Window.ConstructorProperties {
        [key: string]: any;
        showMenubar: boolean;
    }
}
export class ApplicationWindow
    extends Window
    implements Atk.ImplementorIface, Gio.ActionGroup, Gio.ActionMap, Buildable
{
    static $gtype: GObject.GType<ApplicationWindow>;

    constructor(properties?: Partial<ApplicationWindow.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ApplicationWindow.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get showMenubar(): boolean;
    set showMenubar(val: boolean);

    // Constructors

    static ["new"](application: Application): ApplicationWindow;
    // Conflicted with Gtk.Window.new
    static ["new"](...args: never[]): any;

    // Members

    get_help_overlay(): ShortcutsWindow | null;
    get_id(): number;
    get_show_menubar(): boolean;
    set_help_overlay(help_overlay?: ShortcutsWindow | null): void;
    set_show_menubar(show_menubar: boolean): void;

    // Implemented Members

    action_added(action_name: string): void;
    action_enabled_changed(action_name: string, enabled: boolean): void;
    action_removed(action_name: string): void;
    action_state_changed(action_name: string, state: GLib.Variant): void;
    activate_action(action_name: string, parameter?: GLib.Variant | null): void;
    change_action_state(action_name: string, value: GLib.Variant): void;
    get_action_enabled(action_name: string): boolean;
    get_action_parameter_type(action_name: string): GLib.VariantType | null;
    get_action_state(action_name: string): GLib.Variant | null;
    get_action_state_hint(action_name: string): GLib.Variant | null;
    get_action_state_type(action_name: string): GLib.VariantType | null;
    has_action(action_name: string): boolean;
    list_actions(): string[];
    query_action(
        action_name: string
    ): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];
    vfunc_action_added(action_name: string): void;
    vfunc_action_enabled_changed(action_name: string, enabled: boolean): void;
    vfunc_action_removed(action_name: string): void;
    vfunc_action_state_changed(action_name: string, state: GLib.Variant): void;
    vfunc_activate_action(action_name: string, parameter?: GLib.Variant | null): void;
    vfunc_change_action_state(action_name: string, value: GLib.Variant): void;
    vfunc_get_action_enabled(action_name: string): boolean;
    vfunc_get_action_parameter_type(action_name: string): GLib.VariantType | null;
    vfunc_get_action_state(action_name: string): GLib.Variant | null;
    vfunc_get_action_state_hint(action_name: string): GLib.Variant | null;
    vfunc_get_action_state_type(action_name: string): GLib.VariantType | null;
    vfunc_has_action(action_name: string): boolean;
    vfunc_list_actions(): string[];
    vfunc_query_action(
        action_name: string
    ): [boolean, boolean, GLib.VariantType | null, GLib.VariantType | null, GLib.Variant | null, GLib.Variant | null];
    add_action(action: Gio.Action): void;
    add_action_entries(entries: Gio.ActionEntry[], user_data?: any | null): void;
    lookup_action(action_name: string): Gio.Action | null;
    remove_action(action_name: string): void;
    vfunc_add_action(action: Gio.Action): void;
    vfunc_lookup_action(action_name: string): Gio.Action | null;
    vfunc_remove_action(action_name: string): void;
}
export module Arrow {
    export interface ConstructorProperties extends Misc.ConstructorProperties {
        [key: string]: any;
        arrowType: ArrowType;
        shadowType: ShadowType;
    }
}
export class Arrow extends Misc implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Arrow>;

    constructor(properties?: Partial<Arrow.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Arrow.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get arrowType(): ArrowType;
    set arrowType(val: ArrowType);
    get shadowType(): ShadowType;
    set shadowType(val: ShadowType);

    // Fields
    misc: Misc;

    // Constructors

    static ["new"](arrow_type: ArrowType, shadow_type: ShadowType): Arrow;

    // Members

    set(arrow_type: ArrowType, shadow_type: ShadowType): void;
    // Conflicted with GObject.Object.set
    set(...args: never[]): any;
}
export module ArrowAccessible {
    export interface ConstructorProperties extends WidgetAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ArrowAccessible extends WidgetAccessible implements Atk.Component, Atk.Image {
    static $gtype: GObject.GType<ArrowAccessible>;

    constructor(properties?: Partial<ArrowAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ArrowAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ArrowAccessiblePrivate | any;

    // Implemented Members

    contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    get_alpha(): number;
    get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    get_layer(): Atk.Layer;
    get_mdi_zorder(): number;
    get_position(coord_type: Atk.CoordType): [number, number];
    get_size(): [number, number];
    grab_focus(): boolean;
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    remove_focus_handler(handler_id: number): void;
    scroll_to(type: Atk.ScrollType): boolean;
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    set_size(width: number, height: number): boolean;
    vfunc_bounds_changed(bounds: Atk.Rectangle): void;
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_get_alpha(): number;
    vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    vfunc_get_layer(): Atk.Layer;
    vfunc_get_mdi_zorder(): number;
    vfunc_get_position(coord_type: Atk.CoordType): [number, number];
    vfunc_get_size(): [number, number];
    vfunc_grab_focus(): boolean;
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    vfunc_remove_focus_handler(handler_id: number): void;
    vfunc_scroll_to(type: Atk.ScrollType): boolean;
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_size(width: number, height: number): boolean;
    get_image_description(): string;
    get_image_locale(): string | null;
    get_image_position(coord_type: Atk.CoordType): [number, number];
    get_image_size(): [number, number];
    set_image_description(description: string): boolean;
    vfunc_get_image_description(): string;
    vfunc_get_image_locale(): string | null;
    vfunc_get_image_position(coord_type: Atk.CoordType): [number, number];
    vfunc_get_image_size(): [number, number];
    vfunc_set_image_description(description: string): boolean;
}
export module AspectFrame {
    export interface ConstructorProperties extends Frame.ConstructorProperties {
        [key: string]: any;
        obeyChild: boolean;
        ratio: number;
        xalign: number;
        yalign: number;
    }
}
export class AspectFrame extends Frame implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<AspectFrame>;

    constructor(properties?: Partial<AspectFrame.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<AspectFrame.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get obeyChild(): boolean;
    set obeyChild(val: boolean);
    get ratio(): number;
    set ratio(val: number);
    get xalign(): number;
    set xalign(val: number);
    get yalign(): number;
    set yalign(val: number);

    // Fields
    frame: Frame;

    // Constructors

    static ["new"](
        label: string | null,
        xalign: number,
        yalign: number,
        ratio: number,
        obey_child: boolean
    ): AspectFrame;
    // Conflicted with Gtk.Frame.new
    static ["new"](...args: never[]): any;

    // Members

    set(xalign: number, yalign: number, ratio: number, obey_child: boolean): void;
    // Conflicted with GObject.Object.set
    set(...args: never[]): any;
}
export module Assistant {
    export interface ConstructorProperties extends Window.ConstructorProperties {
        [key: string]: any;
        useHeaderBar: number;
    }
}
export class Assistant extends Window implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Assistant>;

    constructor(properties?: Partial<Assistant.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Assistant.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get useHeaderBar(): number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "apply", callback: (_source: this) => void): number;
    connect_after(signal: "apply", callback: (_source: this) => void): number;
    emit(signal: "apply"): void;
    connect(signal: "cancel", callback: (_source: this) => void): number;
    connect_after(signal: "cancel", callback: (_source: this) => void): number;
    emit(signal: "cancel"): void;
    connect(signal: "close", callback: (_source: this) => void): number;
    connect_after(signal: "close", callback: (_source: this) => void): number;
    emit(signal: "close"): void;
    connect(signal: "escape", callback: (_source: this) => void): number;
    connect_after(signal: "escape", callback: (_source: this) => void): number;
    emit(signal: "escape"): void;
    connect(signal: "prepare", callback: (_source: this, page: Widget) => void): number;
    connect_after(signal: "prepare", callback: (_source: this, page: Widget) => void): number;
    emit(signal: "prepare", page: Widget): void;

    // Constructors

    static ["new"](): Assistant;

    // Members

    add_action_widget(child: Widget): void;
    append_page(page: Widget): number;
    commit(): void;
    get_current_page(): number;
    get_n_pages(): number;
    get_nth_page(page_num: number): Widget | null;
    get_page_complete(page: Widget): boolean;
    get_page_has_padding(page: Widget): boolean;
    get_page_header_image(page: Widget): GdkPixbuf.Pixbuf;
    get_page_side_image(page: Widget): GdkPixbuf.Pixbuf;
    get_page_title(page: Widget): string;
    get_page_type(page: Widget): AssistantPageType;
    insert_page(page: Widget, position: number): number;
    next_page(): void;
    prepend_page(page: Widget): number;
    previous_page(): void;
    remove_action_widget(child: Widget): void;
    remove_page(page_num: number): void;
    set_current_page(page_num: number): void;
    set_forward_page_func(page_func?: AssistantPageFunc | null): void;
    set_page_complete(page: Widget, complete: boolean): void;
    set_page_has_padding(page: Widget, has_padding: boolean): void;
    set_page_header_image(page: Widget, pixbuf?: GdkPixbuf.Pixbuf | null): void;
    set_page_side_image(page: Widget, pixbuf?: GdkPixbuf.Pixbuf | null): void;
    set_page_title(page: Widget, title: string): void;
    set_page_type(page: Widget, type: AssistantPageType): void;
    update_buttons_state(): void;
    vfunc_apply(): void;
    vfunc_cancel(): void;
    vfunc_close(): void;
    vfunc_prepare(page: Widget): void;
}
export module Bin {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
    }
}
export abstract class Bin extends Container implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Bin>;

    constructor(properties?: Partial<Bin.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Bin.ConstructorProperties>, ...args: any[]): void;

    // Fields
    container: Container;

    // Members

    get_child(): Widget | null;
}
export module BooleanCellAccessible {
    export interface ConstructorProperties extends RendererCellAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class BooleanCellAccessible extends RendererCellAccessible implements Atk.Action, Atk.Component, Atk.TableCell {
    static $gtype: GObject.GType<BooleanCellAccessible>;

    constructor(properties?: Partial<BooleanCellAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<BooleanCellAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: BooleanCellAccessiblePrivate | any;
}
export module Box {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        baselinePosition: BaselinePosition;
        homogeneous: boolean;
        spacing: number;
    }
}
export class Box extends Container implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<Box>;

    constructor(properties?: Partial<Box.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Box.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get baselinePosition(): BaselinePosition;
    set baselinePosition(val: BaselinePosition);
    get homogeneous(): boolean;
    set homogeneous(val: boolean);
    get spacing(): number;
    set spacing(val: number);

    // Fields
    container: Container;

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](orientation: Orientation, spacing: number): Box;

    // Members

    get_baseline_position(): BaselinePosition;
    get_center_widget(): Widget | null;
    get_homogeneous(): boolean;
    get_spacing(): number;
    pack_end(child: Widget, expand: boolean, fill: boolean, padding: number): void;
    pack_start(child: Widget, expand: boolean, fill: boolean, padding: number): void;
    query_child_packing(child: Widget): [boolean, boolean, number, PackType];
    reorder_child(child: Widget, position: number): void;
    set_baseline_position(position: BaselinePosition): void;
    set_center_widget(widget?: Widget | null): void;
    set_child_packing(child: Widget, expand: boolean, fill: boolean, padding: number, pack_type: PackType): void;
    set_homogeneous(homogeneous: boolean): void;
    set_spacing(spacing: number): void;

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module Builder {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        translationDomain: string;
    }
}
export class Builder extends GObject.Object {
    static $gtype: GObject.GType<Builder>;

    constructor(properties?: Partial<Builder.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Builder.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get translationDomain(): string;
    set translationDomain(val: string);

    // Fields
    priv: BuilderPrivate;

    // Constructors

    static ["new"](): Builder;
    static new_from_file(filename: string): Builder;
    static new_from_resource(resource_path: string): Builder;
    static new_from_string(string: string, length: number): Builder;

    // Members

    add_callback_symbol(callback_name: string, callback_symbol: GObject.Callback): void;
    add_from_file(filename: string): number;
    add_from_resource(resource_path: string): number;
    add_from_string(buffer: string, length: number): number;
    add_objects_from_file(filename: string, object_ids: string[]): number;
    add_objects_from_resource(resource_path: string, object_ids: string[]): number;
    add_objects_from_string(buffer: string, length: number, object_ids: string[]): number;
    connect_signals(user_data?: any | null): void;
    connect_signals_full(func: BuilderConnectFunc): void;
    expose_object(name: string, object: GObject.Object): void;
    extend_with_template(widget: Widget, template_type: GObject.GType, buffer: string, length: number): number;
    get_application(): Application | null;
    get_object<T = GObject.Object>(name: string): T;
    get_objects(): GObject.Object[];
    get_translation_domain(): string;
    get_type_from_name(type_name: string): GObject.GType;
    set_application(application: Application): void;
    set_translation_domain(domain?: string | null): void;
    value_from_string(pspec: GObject.ParamSpec, string: string): [boolean, unknown];
    value_from_string_type(type: GObject.GType, string: string): [boolean, unknown];
    vfunc_get_type_from_name(type_name: string): GObject.GType;
}
export module Button {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        alwaysShowImage: boolean;
        image: Widget;
        imagePosition: PositionType;
        label: string;
        relief: ReliefStyle;
        useStock: boolean;
        useUnderline: boolean;
        xalign: number;
        yalign: number;
    }
}
export class Button extends Bin implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    static $gtype: GObject.GType<Button>;

    constructor(properties?: Partial<Button.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Button.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get alwaysShowImage(): boolean;
    set alwaysShowImage(val: boolean);
    get image(): Widget;
    set image(val: Widget);
    get imagePosition(): PositionType;
    set imagePosition(val: PositionType);
    get label(): string;
    set label(val: string);
    get relief(): ReliefStyle;
    set relief(val: ReliefStyle);
    get useStock(): boolean;
    set useStock(val: boolean);
    get useUnderline(): boolean;
    set useUnderline(val: boolean);
    get xalign(): number;
    set xalign(val: number);
    get yalign(): number;
    set yalign(val: number);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "activate", callback: (_source: this) => void): number;
    connect_after(signal: "activate", callback: (_source: this) => void): number;
    emit(signal: "activate"): void;
    connect(signal: "clicked", callback: (_source: this) => void): number;
    connect_after(signal: "clicked", callback: (_source: this) => void): number;
    emit(signal: "clicked"): void;
    connect(signal: "enter", callback: (_source: this) => void): number;
    connect_after(signal: "enter", callback: (_source: this) => void): number;
    emit(signal: "enter"): void;
    connect(signal: "leave", callback: (_source: this) => void): number;
    connect_after(signal: "leave", callback: (_source: this) => void): number;
    emit(signal: "leave"): void;
    connect(signal: "pressed", callback: (_source: this) => void): number;
    connect_after(signal: "pressed", callback: (_source: this) => void): number;
    emit(signal: "pressed"): void;
    connect(signal: "released", callback: (_source: this) => void): number;
    connect_after(signal: "released", callback: (_source: this) => void): number;
    emit(signal: "released"): void;

    // Implemented Properties

    get actionName(): string;
    set actionName(val: string);
    get actionTarget(): GLib.Variant;
    set actionTarget(val: GLib.Variant);
    get relatedAction(): Action;
    set relatedAction(val: Action);
    get useActionAppearance(): boolean;
    set useActionAppearance(val: boolean);

    // Constructors

    static ["new"](): Button;
    static new_from_icon_name(icon_name: string | null, size: number): Button;
    static new_from_stock(stock_id: string): Button;
    static new_with_label(label: string): Button;
    static new_with_mnemonic(label: string): Button;

    // Members

    clicked(): void;
    enter(): void;
    get_alignment(): [number, number];
    get_always_show_image(): boolean;
    get_event_window(): Gdk.Window;
    get_focus_on_click(): boolean;
    get_image(): Widget | null;
    get_image_position(): PositionType;
    get_label(): string;
    get_relief(): ReliefStyle;
    get_use_stock(): boolean;
    get_use_underline(): boolean;
    leave(): void;
    pressed(): void;
    released(): void;
    set_alignment(xalign: number, yalign: number): void;
    set_always_show_image(always_show: boolean): void;
    set_focus_on_click(focus_on_click: boolean): void;
    set_image(image?: Widget | null): void;
    set_image_position(position: PositionType): void;
    set_label(label: string): void;
    set_relief(relief: ReliefStyle): void;
    set_use_stock(use_stock: boolean): void;
    set_use_underline(use_underline: boolean): void;
    vfunc_activate(): void;
    vfunc_clicked(): void;
    vfunc_enter(): void;
    vfunc_leave(): void;
    vfunc_pressed(): void;
    vfunc_released(): void;

    // Implemented Members

    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name?: string | null): void;
    set_action_target_value(target_value?: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name?: string | null): void;
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action?: Action | null): void;
    vfunc_sync_action_properties(action?: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
}
export module ButtonAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ButtonAccessible extends ContainerAccessible implements Atk.Action, Atk.Component, Atk.Image {
    static $gtype: GObject.GType<ButtonAccessible>;

    constructor(properties?: Partial<ButtonAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ButtonAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ButtonAccessiblePrivate | any;

    // Implemented Members

    do_action(i: number): boolean;
    get_description(i: number): string | null;
    // Conflicted with Atk.Object.get_description
    get_description(...args: never[]): any;
    get_keybinding(i: number): string | null;
    get_localized_name(i: number): string | null;
    get_n_actions(): number;
    get_name(i: number): string | null;
    // Conflicted with Atk.Object.get_name
    get_name(...args: never[]): any;
    set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.set_description
    set_description(...args: never[]): any;
    vfunc_do_action(i: number): boolean;
    vfunc_get_description(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_description
    vfunc_get_description(...args: never[]): any;
    vfunc_get_keybinding(i: number): string | null;
    vfunc_get_localized_name(i: number): string | null;
    vfunc_get_n_actions(): number;
    vfunc_get_name(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_name
    vfunc_get_name(...args: never[]): any;
    vfunc_set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.vfunc_set_description
    vfunc_set_description(...args: never[]): any;
    get_image_description(): string;
    get_image_locale(): string | null;
    get_image_position(coord_type: Atk.CoordType): [number, number];
    get_image_size(): [number, number];
    set_image_description(description: string): boolean;
    vfunc_get_image_description(): string;
    vfunc_get_image_locale(): string | null;
    vfunc_get_image_position(coord_type: Atk.CoordType): [number, number];
    vfunc_get_image_size(): [number, number];
    vfunc_set_image_description(description: string): boolean;
}
export module ButtonBox {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        layoutStyle: ButtonBoxStyle;
    }
}
export class ButtonBox extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<ButtonBox>;

    constructor(properties?: Partial<ButtonBox.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ButtonBox.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get layoutStyle(): ButtonBoxStyle;
    set layoutStyle(val: ButtonBoxStyle);

    // Fields
    box: Box;

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](orientation: Orientation): ButtonBox;

    // Members

    get_child_non_homogeneous(child: Widget): boolean;
    get_child_secondary(child: Widget): boolean;
    get_layout(): ButtonBoxStyle;
    set_child_non_homogeneous(child: Widget, non_homogeneous: boolean): void;
    set_child_secondary(child: Widget, is_secondary: boolean): void;
    set_layout(layout_style: ButtonBoxStyle): void;

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module Calendar {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        day: number;
        detailHeightRows: number;
        detailWidthChars: number;
        month: number;
        noMonthChange: boolean;
        showDayNames: boolean;
        showDetails: boolean;
        showHeading: boolean;
        showWeekNumbers: boolean;
        year: number;
    }
}
export class Calendar extends Widget implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Calendar>;

    constructor(properties?: Partial<Calendar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Calendar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get day(): number;
    set day(val: number);
    get detailHeightRows(): number;
    set detailHeightRows(val: number);
    get detailWidthChars(): number;
    set detailWidthChars(val: number);
    get month(): number;
    set month(val: number);
    get noMonthChange(): boolean;
    set noMonthChange(val: boolean);
    get showDayNames(): boolean;
    set showDayNames(val: boolean);
    get showDetails(): boolean;
    set showDetails(val: boolean);
    get showHeading(): boolean;
    set showHeading(val: boolean);
    get showWeekNumbers(): boolean;
    set showWeekNumbers(val: boolean);
    get year(): number;
    set year(val: number);

    // Fields
    widget: Widget;
    priv: CalendarPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "day-selected", callback: (_source: this) => void): number;
    connect_after(signal: "day-selected", callback: (_source: this) => void): number;
    emit(signal: "day-selected"): void;
    connect(signal: "day-selected-double-click", callback: (_source: this) => void): number;
    connect_after(signal: "day-selected-double-click", callback: (_source: this) => void): number;
    emit(signal: "day-selected-double-click"): void;
    connect(signal: "month-changed", callback: (_source: this) => void): number;
    connect_after(signal: "month-changed", callback: (_source: this) => void): number;
    emit(signal: "month-changed"): void;
    connect(signal: "next-month", callback: (_source: this) => void): number;
    connect_after(signal: "next-month", callback: (_source: this) => void): number;
    emit(signal: "next-month"): void;
    connect(signal: "next-year", callback: (_source: this) => void): number;
    connect_after(signal: "next-year", callback: (_source: this) => void): number;
    emit(signal: "next-year"): void;
    connect(signal: "prev-month", callback: (_source: this) => void): number;
    connect_after(signal: "prev-month", callback: (_source: this) => void): number;
    emit(signal: "prev-month"): void;
    connect(signal: "prev-year", callback: (_source: this) => void): number;
    connect_after(signal: "prev-year", callback: (_source: this) => void): number;
    emit(signal: "prev-year"): void;

    // Constructors

    static ["new"](): Calendar;

    // Members

    clear_marks(): void;
    get_date(): [number, number, number];
    get_day_is_marked(day: number): boolean;
    get_detail_height_rows(): number;
    get_detail_width_chars(): number;
    get_display_options(): CalendarDisplayOptions;
    mark_day(day: number): void;
    select_day(day: number): void;
    select_month(month: number, year: number): void;
    set_detail_func(func: CalendarDetailFunc): void;
    set_detail_height_rows(rows: number): void;
    set_detail_width_chars(chars: number): void;
    set_display_options(flags: CalendarDisplayOptions): void;
    unmark_day(day: number): void;
    vfunc_day_selected(): void;
    vfunc_day_selected_double_click(): void;
    vfunc_month_changed(): void;
    vfunc_next_month(): void;
    vfunc_next_year(): void;
    vfunc_prev_month(): void;
    vfunc_prev_year(): void;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
}
export module CellAccessible {
    export interface ConstructorProperties extends Accessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class CellAccessible extends Accessible implements Atk.Action, Atk.Component, Atk.TableCell {
    static $gtype: GObject.GType<CellAccessible>;

    constructor(properties?: Partial<CellAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: CellAccessiblePrivate;

    // Members

    vfunc_update_cache(emit_signal: boolean): void;

    // Implemented Members

    do_action(i: number): boolean;
    get_description(i: number): string | null;
    // Conflicted with Atk.Object.get_description
    get_description(...args: never[]): any;
    get_keybinding(i: number): string | null;
    get_localized_name(i: number): string | null;
    get_n_actions(): number;
    get_name(i: number): string | null;
    // Conflicted with Atk.Object.get_name
    get_name(...args: never[]): any;
    set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.set_description
    set_description(...args: never[]): any;
    vfunc_do_action(i: number): boolean;
    vfunc_get_description(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_description
    vfunc_get_description(...args: never[]): any;
    vfunc_get_keybinding(i: number): string | null;
    vfunc_get_localized_name(i: number): string | null;
    vfunc_get_n_actions(): number;
    vfunc_get_name(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_name
    vfunc_get_name(...args: never[]): any;
    vfunc_set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.vfunc_set_description
    vfunc_set_description(...args: never[]): any;
    contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    get_alpha(): number;
    get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    get_layer(): Atk.Layer;
    get_mdi_zorder(): number;
    get_position(coord_type: Atk.CoordType): [number, number];
    // Conflicted with Atk.TableCell.get_position
    get_position(...args: never[]): any;
    get_size(): [number, number];
    grab_focus(): boolean;
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    remove_focus_handler(handler_id: number): void;
    scroll_to(type: Atk.ScrollType): boolean;
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    set_size(width: number, height: number): boolean;
    vfunc_bounds_changed(bounds: Atk.Rectangle): void;
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_get_alpha(): number;
    vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    vfunc_get_layer(): Atk.Layer;
    vfunc_get_mdi_zorder(): number;
    vfunc_get_position(coord_type: Atk.CoordType): [number, number];
    // Conflicted with Atk.TableCell.vfunc_get_position
    vfunc_get_position(...args: never[]): any;
    vfunc_get_size(): [number, number];
    vfunc_grab_focus(): boolean;
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    vfunc_remove_focus_handler(handler_id: number): void;
    vfunc_scroll_to(type: Atk.ScrollType): boolean;
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_size(width: number, height: number): boolean;
    get_column_header_cells(): Atk.Object[];
    get_column_span(): number;
    get_row_column_span(): [boolean, number, number, number, number];
    get_row_header_cells(): Atk.Object[];
    get_row_span(): number;
    get_table(): Atk.Object;
    vfunc_get_column_header_cells(): Atk.Object[];
    vfunc_get_column_span(): number;
    vfunc_get_row_column_span(): [boolean, number, number, number, number];
    vfunc_get_row_header_cells(): Atk.Object[];
    vfunc_get_row_span(): number;
    vfunc_get_table(): Atk.Object;
}
export module CellArea {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
        editWidget: CellEditable;
        editedCell: CellRenderer;
        focusCell: CellRenderer;
    }
}
export abstract class CellArea extends GObject.InitiallyUnowned implements Buildable, CellLayout {
    static $gtype: GObject.GType<CellArea>;

    constructor(properties?: Partial<CellArea.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellArea.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get editWidget(): CellEditable;
    get editedCell(): CellRenderer;
    get focusCell(): CellRenderer;
    set focusCell(val: CellRenderer);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "add-editable",
        callback: (
            _source: this,
            renderer: CellRenderer,
            editable: CellEditable,
            cell_area: Gdk.Rectangle,
            path: string
        ) => void
    ): number;
    connect_after(
        signal: "add-editable",
        callback: (
            _source: this,
            renderer: CellRenderer,
            editable: CellEditable,
            cell_area: Gdk.Rectangle,
            path: string
        ) => void
    ): number;
    emit(
        signal: "add-editable",
        renderer: CellRenderer,
        editable: CellEditable,
        cell_area: Gdk.Rectangle,
        path: string
    ): void;
    connect(
        signal: "apply-attributes",
        callback: (_source: this, model: TreeModel, iter: TreeIter, is_expander: boolean, is_expanded: boolean) => void
    ): number;
    connect_after(
        signal: "apply-attributes",
        callback: (_source: this, model: TreeModel, iter: TreeIter, is_expander: boolean, is_expanded: boolean) => void
    ): number;
    emit(
        signal: "apply-attributes",
        model: TreeModel,
        iter: TreeIter,
        is_expander: boolean,
        is_expanded: boolean
    ): void;
    connect(signal: "focus-changed", callback: (_source: this, renderer: CellRenderer, path: string) => void): number;
    connect_after(
        signal: "focus-changed",
        callback: (_source: this, renderer: CellRenderer, path: string) => void
    ): number;
    emit(signal: "focus-changed", renderer: CellRenderer, path: string): void;
    connect(
        signal: "remove-editable",
        callback: (_source: this, renderer: CellRenderer, editable: CellEditable) => void
    ): number;
    connect_after(
        signal: "remove-editable",
        callback: (_source: this, renderer: CellRenderer, editable: CellEditable) => void
    ): number;
    emit(signal: "remove-editable", renderer: CellRenderer, editable: CellEditable): void;

    // Members

    activate(
        context: CellAreaContext,
        widget: Widget,
        cell_area: Gdk.Rectangle,
        flags: CellRendererState,
        edit_only: boolean
    ): boolean;
    activate_cell(
        widget: Widget,
        renderer: CellRenderer,
        event: Gdk.Event,
        cell_area: Gdk.Rectangle,
        flags: CellRendererState
    ): boolean;
    add(renderer: CellRenderer): void;
    add_focus_sibling(renderer: CellRenderer, sibling: CellRenderer): void;
    apply_attributes(tree_model: TreeModel, iter: TreeIter, is_expander: boolean, is_expanded: boolean): void;
    attribute_connect(renderer: CellRenderer, attribute: string, column: number): void;
    attribute_disconnect(renderer: CellRenderer, attribute: string): void;
    attribute_get_column(renderer: CellRenderer, attribute: string): number;
    cell_get_property(renderer: CellRenderer, property_name: string, value: GObject.Value | any): void;
    cell_set_property(renderer: CellRenderer, property_name: string, value: GObject.Value | any): void;
    copy_context(context: CellAreaContext): CellAreaContext;
    create_context(): CellAreaContext;
    event(
        context: CellAreaContext,
        widget: Widget,
        event: Gdk.Event,
        cell_area: Gdk.Rectangle,
        flags: CellRendererState
    ): number;
    focus(direction: DirectionType): boolean;
    foreach(callback: CellCallback): void;
    foreach_alloc(
        context: CellAreaContext,
        widget: Widget,
        cell_area: Gdk.Rectangle,
        background_area: Gdk.Rectangle,
        callback: CellAllocCallback
    ): void;
    get_cell_allocation(
        context: CellAreaContext,
        widget: Widget,
        renderer: CellRenderer,
        cell_area: Gdk.Rectangle
    ): Gdk.Rectangle;
    get_cell_at_position(
        context: CellAreaContext,
        widget: Widget,
        cell_area: Gdk.Rectangle,
        x: number,
        y: number
    ): [CellRenderer, Gdk.Rectangle | null];
    get_current_path_string(): string;
    get_edit_widget(): CellEditable;
    get_edited_cell(): CellRenderer;
    get_focus_cell(): CellRenderer;
    get_focus_from_sibling(renderer: CellRenderer): CellRenderer | null;
    get_focus_siblings(renderer: CellRenderer): CellRenderer[];
    get_preferred_height(context: CellAreaContext, widget: Widget): [number, number];
    get_preferred_height_for_width(context: CellAreaContext, widget: Widget, width: number): [number, number];
    get_preferred_width(context: CellAreaContext, widget: Widget): [number, number];
    get_preferred_width_for_height(context: CellAreaContext, widget: Widget, height: number): [number, number];
    get_request_mode(): SizeRequestMode;
    has_renderer(renderer: CellRenderer): boolean;
    inner_cell_area(widget: Widget, cell_area: Gdk.Rectangle): Gdk.Rectangle;
    is_activatable(): boolean;
    is_focus_sibling(renderer: CellRenderer, sibling: CellRenderer): boolean;
    remove(renderer: CellRenderer): void;
    remove_focus_sibling(renderer: CellRenderer, sibling: CellRenderer): void;
    render(
        context: CellAreaContext,
        widget: Widget,
        cr: cairo.Context,
        background_area: Gdk.Rectangle,
        cell_area: Gdk.Rectangle,
        flags: CellRendererState,
        paint_focus: boolean
    ): void;
    request_renderer(
        renderer: CellRenderer,
        orientation: Orientation,
        widget: Widget,
        for_size: number
    ): [number, number];
    set_focus_cell(renderer: CellRenderer): void;
    stop_editing(canceled: boolean): void;
    vfunc_activate(
        context: CellAreaContext,
        widget: Widget,
        cell_area: Gdk.Rectangle,
        flags: CellRendererState,
        edit_only: boolean
    ): boolean;
    vfunc_add(renderer: CellRenderer): void;
    vfunc_apply_attributes(tree_model: TreeModel, iter: TreeIter, is_expander: boolean, is_expanded: boolean): void;
    vfunc_copy_context(context: CellAreaContext): CellAreaContext;
    vfunc_create_context(): CellAreaContext;
    vfunc_event(
        context: CellAreaContext,
        widget: Widget,
        event: Gdk.Event,
        cell_area: Gdk.Rectangle,
        flags: CellRendererState
    ): number;
    vfunc_focus(direction: DirectionType): boolean;
    vfunc_foreach(callback: CellCallback): void;
    vfunc_foreach_alloc(
        context: CellAreaContext,
        widget: Widget,
        cell_area: Gdk.Rectangle,
        background_area: Gdk.Rectangle,
        callback: CellAllocCallback
    ): void;
    vfunc_get_cell_property(
        renderer: CellRenderer,
        property_id: number,
        value: GObject.Value | any,
        pspec: GObject.ParamSpec
    ): void;
    vfunc_get_preferred_height(context: CellAreaContext, widget: Widget): [number, number];
    vfunc_get_preferred_height_for_width(context: CellAreaContext, widget: Widget, width: number): [number, number];
    vfunc_get_preferred_width(context: CellAreaContext, widget: Widget): [number, number];
    vfunc_get_preferred_width_for_height(context: CellAreaContext, widget: Widget, height: number): [number, number];
    vfunc_get_request_mode(): SizeRequestMode;
    vfunc_is_activatable(): boolean;
    vfunc_remove(renderer: CellRenderer): void;
    vfunc_render(
        context: CellAreaContext,
        widget: Widget,
        cr: cairo.Context,
        background_area: Gdk.Rectangle,
        cell_area: Gdk.Rectangle,
        flags: CellRendererState,
        paint_focus: boolean
    ): void;
    vfunc_set_cell_property(
        renderer: CellRenderer,
        property_id: number,
        value: GObject.Value | any,
        pspec: GObject.ParamSpec
    ): void;
    static find_cell_property(property_name: string): GObject.ParamSpec;
    static install_cell_property(property_id: number, pspec: GObject.ParamSpec): void;
    static list_cell_properties(): GObject.ParamSpec[];

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
    add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    clear(): void;
    clear_attributes(cell: CellRenderer): void;
    get_area(): CellArea | null;
    get_cells(): CellRenderer[];
    pack_end(cell: CellRenderer, expand: boolean): void;
    pack_start(cell: CellRenderer, expand: boolean): void;
    reorder(cell: CellRenderer, position: number): void;
    set_cell_data_func(cell: CellRenderer, func?: CellLayoutDataFunc | null): void;
    vfunc_add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    vfunc_clear(): void;
    vfunc_clear_attributes(cell: CellRenderer): void;
    vfunc_get_area(): CellArea | null;
    vfunc_get_cells(): CellRenderer[];
    vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
    vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
    vfunc_reorder(cell: CellRenderer, position: number): void;
    vfunc_set_cell_data_func(cell: CellRenderer, func?: CellLayoutDataFunc | null): void;
}
export module CellAreaBox {
    export interface ConstructorProperties extends CellArea.ConstructorProperties {
        [key: string]: any;
        spacing: number;
    }
}
export class CellAreaBox extends CellArea implements Buildable, CellLayout, Orientable {
    static $gtype: GObject.GType<CellAreaBox>;

    constructor(properties?: Partial<CellAreaBox.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellAreaBox.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get spacing(): number;
    set spacing(val: number);

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](): CellAreaBox;

    // Members

    get_spacing(): number;
    pack_end(renderer: CellRenderer, expand: boolean, align: boolean, fixed: boolean): void;
    // Conflicted with Gtk.CellLayout.pack_end
    pack_end(...args: never[]): any;
    pack_start(renderer: CellRenderer, expand: boolean, align: boolean, fixed: boolean): void;
    // Conflicted with Gtk.CellLayout.pack_start
    pack_start(...args: never[]): any;
    set_spacing(spacing: number): void;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
    add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    clear(): void;
    clear_attributes(cell: CellRenderer): void;
    get_area(): CellArea | null;
    get_cells(): CellRenderer[];
    reorder(cell: CellRenderer, position: number): void;
    set_cell_data_func(cell: CellRenderer, func?: CellLayoutDataFunc | null): void;
    vfunc_add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    vfunc_clear(): void;
    vfunc_clear_attributes(cell: CellRenderer): void;
    vfunc_get_area(): CellArea | null;
    vfunc_get_cells(): CellRenderer[];
    vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
    vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
    vfunc_reorder(cell: CellRenderer, position: number): void;
    vfunc_set_cell_data_func(cell: CellRenderer, func?: CellLayoutDataFunc | null): void;
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module CellAreaContext {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        area: CellArea;
        minimumHeight: number;
        minimumWidth: number;
        naturalHeight: number;
        naturalWidth: number;
    }
}
export class CellAreaContext extends GObject.Object {
    static $gtype: GObject.GType<CellAreaContext>;

    constructor(properties?: Partial<CellAreaContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellAreaContext.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get area(): CellArea;
    get minimumHeight(): number;
    get minimumWidth(): number;
    get naturalHeight(): number;
    get naturalWidth(): number;

    // Members

    allocate(width: number, height: number): void;
    get_allocation(): [number, number];
    get_area(): CellArea;
    get_preferred_height(): [number, number];
    get_preferred_height_for_width(width: number): [number, number];
    get_preferred_width(): [number, number];
    get_preferred_width_for_height(height: number): [number, number];
    push_preferred_height(minimum_height: number, natural_height: number): void;
    push_preferred_width(minimum_width: number, natural_width: number): void;
    reset(): void;
    vfunc_allocate(width: number, height: number): void;
    vfunc_get_preferred_height_for_width(width: number): [number, number];
    vfunc_get_preferred_width_for_height(height: number): [number, number];
    vfunc_reset(): void;
}
export module CellRenderer {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
        cellBackground: string;
        cellBackgroundGdk: Gdk.Color;
        cellBackgroundRgba: Gdk.RGBA;
        cellBackgroundSet: boolean;
        editing: boolean;
        height: number;
        isExpanded: boolean;
        isExpander: boolean;
        mode: CellRendererMode;
        sensitive: boolean;
        visible: boolean;
        width: number;
        xalign: number;
        xpad: number;
        yalign: number;
        ypad: number;
    }
}
export abstract class CellRenderer extends GObject.InitiallyUnowned {
    static $gtype: GObject.GType<CellRenderer>;

    constructor(properties?: Partial<CellRenderer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellRenderer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    set cellBackground(val: string);
    get cellBackgroundGdk(): Gdk.Color;
    set cellBackgroundGdk(val: Gdk.Color);
    get cellBackgroundRgba(): Gdk.RGBA;
    set cellBackgroundRgba(val: Gdk.RGBA);
    get cellBackgroundSet(): boolean;
    set cellBackgroundSet(val: boolean);
    get editing(): boolean;
    get height(): number;
    set height(val: number);
    get isExpanded(): boolean;
    set isExpanded(val: boolean);
    get isExpander(): boolean;
    set isExpander(val: boolean);
    get mode(): CellRendererMode;
    set mode(val: CellRendererMode);
    get sensitive(): boolean;
    set sensitive(val: boolean);
    get visible(): boolean;
    set visible(val: boolean);
    get width(): number;
    set width(val: number);
    get xalign(): number;
    set xalign(val: number);
    get xpad(): number;
    set xpad(val: number);
    get yalign(): number;
    set yalign(val: number);
    get ypad(): number;
    set ypad(val: number);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "editing-canceled", callback: (_source: this) => void): number;
    connect_after(signal: "editing-canceled", callback: (_source: this) => void): number;
    emit(signal: "editing-canceled"): void;
    connect(signal: "editing-started", callback: (_source: this, editable: CellEditable, path: string) => void): number;
    connect_after(
        signal: "editing-started",
        callback: (_source: this, editable: CellEditable, path: string) => void
    ): number;
    emit(signal: "editing-started", editable: CellEditable, path: string): void;

    // Members

    activate(
        event: Gdk.Event,
        widget: Widget,
        path: string,
        background_area: Gdk.Rectangle,
        cell_area: Gdk.Rectangle,
        flags: CellRendererState
    ): boolean;
    get_aligned_area(widget: Widget, flags: CellRendererState, cell_area: Gdk.Rectangle): Gdk.Rectangle;
    get_alignment(): [number, number];
    get_fixed_size(): [number, number];
    get_padding(): [number, number];
    get_preferred_height(widget: Widget): [number, number];
    get_preferred_height_for_width(widget: Widget, width: number): [number, number];
    get_preferred_size(widget: Widget): [Requisition | null, Requisition | null];
    get_preferred_width(widget: Widget): [number, number];
    get_preferred_width_for_height(widget: Widget, height: number): [number, number];
    get_request_mode(): SizeRequestMode;
    get_sensitive(): boolean;
    get_size(widget: Widget, cell_area: Gdk.Rectangle | null): [number, number, number, number];
    get_state(widget: Widget | null, cell_state: CellRendererState): StateFlags;
    get_visible(): boolean;
    is_activatable(): boolean;
    render(
        cr: cairo.Context,
        widget: Widget,
        background_area: Gdk.Rectangle,
        cell_area: Gdk.Rectangle,
        flags: CellRendererState
    ): void;
    set_alignment(xalign: number, yalign: number): void;
    set_fixed_size(width: number, height: number): void;
    set_padding(xpad: number, ypad: number): void;
    set_sensitive(sensitive: boolean): void;
    set_visible(visible: boolean): void;
    start_editing(
        event: Gdk.Event | null,
        widget: Widget,
        path: string,
        background_area: Gdk.Rectangle,
        cell_area: Gdk.Rectangle,
        flags: CellRendererState
    ): CellEditable | null;
    stop_editing(canceled: boolean): void;
    vfunc_activate(
        event: Gdk.Event,
        widget: Widget,
        path: string,
        background_area: Gdk.Rectangle,
        cell_area: Gdk.Rectangle,
        flags: CellRendererState
    ): boolean;
    vfunc_editing_canceled(): void;
    vfunc_editing_started(editable: CellEditable, path: string): void;
    vfunc_get_aligned_area(widget: Widget, flags: CellRendererState, cell_area: Gdk.Rectangle): Gdk.Rectangle;
    vfunc_get_preferred_height(widget: Widget): [number, number];
    vfunc_get_preferred_height_for_width(widget: Widget, width: number): [number, number];
    vfunc_get_preferred_width(widget: Widget): [number, number];
    vfunc_get_preferred_width_for_height(widget: Widget, height: number): [number, number];
    vfunc_get_request_mode(): SizeRequestMode;
    vfunc_get_size(widget: Widget, cell_area: Gdk.Rectangle | null): [number, number, number, number];
    vfunc_render(
        cr: cairo.Context,
        widget: Widget,
        background_area: Gdk.Rectangle,
        cell_area: Gdk.Rectangle,
        flags: CellRendererState
    ): void;
    vfunc_start_editing(
        event: Gdk.Event | null,
        widget: Widget,
        path: string,
        background_area: Gdk.Rectangle,
        cell_area: Gdk.Rectangle,
        flags: CellRendererState
    ): CellEditable | null;
    static set_accessible_type(type: GObject.GType): void;
}
export module CellRendererAccel {
    export interface ConstructorProperties extends CellRendererText.ConstructorProperties {
        [key: string]: any;
        accelKey: number;
        accelMode: CellRendererAccelMode;
        accelMods: Gdk.ModifierType;
        keycode: number;
    }
}
export class CellRendererAccel extends CellRendererText {
    static $gtype: GObject.GType<CellRendererAccel>;

    constructor(properties?: Partial<CellRendererAccel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellRendererAccel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get accelKey(): number;
    set accelKey(val: number);
    get accelMode(): CellRendererAccelMode;
    set accelMode(val: CellRendererAccelMode);
    get accelMods(): Gdk.ModifierType;
    set accelMods(val: Gdk.ModifierType);
    get keycode(): number;
    set keycode(val: number);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "accel-cleared", callback: (_source: this, path_string: string) => void): number;
    connect_after(signal: "accel-cleared", callback: (_source: this, path_string: string) => void): number;
    emit(signal: "accel-cleared", path_string: string): void;
    connect(
        signal: "accel-edited",
        callback: (
            _source: this,
            path_string: string,
            accel_key: number,
            accel_mods: Gdk.ModifierType,
            hardware_keycode: number
        ) => void
    ): number;
    connect_after(
        signal: "accel-edited",
        callback: (
            _source: this,
            path_string: string,
            accel_key: number,
            accel_mods: Gdk.ModifierType,
            hardware_keycode: number
        ) => void
    ): number;
    emit(
        signal: "accel-edited",
        path_string: string,
        accel_key: number,
        accel_mods: Gdk.ModifierType,
        hardware_keycode: number
    ): void;

    // Constructors

    static ["new"](): CellRendererAccel;

    // Members

    vfunc_accel_cleared(path_string: string): void;
    vfunc_accel_edited(
        path_string: string,
        accel_key: number,
        accel_mods: Gdk.ModifierType,
        hardware_keycode: number
    ): void;
}
export module CellRendererCombo {
    export interface ConstructorProperties extends CellRendererText.ConstructorProperties {
        [key: string]: any;
        hasEntry: boolean;
        model: TreeModel;
        textColumn: number;
    }
}
export class CellRendererCombo extends CellRendererText {
    static $gtype: GObject.GType<CellRendererCombo>;

    constructor(properties?: Partial<CellRendererCombo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellRendererCombo.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get hasEntry(): boolean;
    set hasEntry(val: boolean);
    get model(): TreeModel;
    set model(val: TreeModel);
    get textColumn(): number;
    set textColumn(val: number);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this, path_string: string, new_iter: TreeIter) => void): number;
    connect_after(
        signal: "changed",
        callback: (_source: this, path_string: string, new_iter: TreeIter) => void
    ): number;
    emit(signal: "changed", path_string: string, new_iter: TreeIter): void;

    // Constructors

    static ["new"](): CellRendererCombo;
}
export module CellRendererPixbuf {
    export interface ConstructorProperties extends CellRenderer.ConstructorProperties {
        [key: string]: any;
        followState: boolean;
        gicon: Gio.Icon;
        iconName: string;
        pixbuf: GdkPixbuf.Pixbuf;
        pixbufExpanderClosed: GdkPixbuf.Pixbuf;
        pixbufExpanderOpen: GdkPixbuf.Pixbuf;
        stockDetail: string;
        stockId: string;
        stockSize: number;
        surface: cairo.Surface;
    }
}
export class CellRendererPixbuf extends CellRenderer {
    static $gtype: GObject.GType<CellRendererPixbuf>;

    constructor(properties?: Partial<CellRendererPixbuf.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellRendererPixbuf.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get followState(): boolean;
    set followState(val: boolean);
    get gicon(): Gio.Icon;
    set gicon(val: Gio.Icon);
    get iconName(): string;
    set iconName(val: string);
    get pixbuf(): GdkPixbuf.Pixbuf;
    set pixbuf(val: GdkPixbuf.Pixbuf);
    get pixbufExpanderClosed(): GdkPixbuf.Pixbuf;
    set pixbufExpanderClosed(val: GdkPixbuf.Pixbuf);
    get pixbufExpanderOpen(): GdkPixbuf.Pixbuf;
    set pixbufExpanderOpen(val: GdkPixbuf.Pixbuf);
    get stockDetail(): string;
    set stockDetail(val: string);
    get stockId(): string;
    set stockId(val: string);
    get stockSize(): number;
    set stockSize(val: number);
    get surface(): cairo.Surface;
    set surface(val: cairo.Surface);

    // Constructors

    static ["new"](): CellRendererPixbuf;
}
export module CellRendererProgress {
    export interface ConstructorProperties extends CellRenderer.ConstructorProperties {
        [key: string]: any;
        inverted: boolean;
        pulse: number;
        text: string;
        textXalign: number;
        textYalign: number;
        value: number;
    }
}
export class CellRendererProgress extends CellRenderer implements Orientable {
    static $gtype: GObject.GType<CellRendererProgress>;

    constructor(properties?: Partial<CellRendererProgress.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellRendererProgress.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get inverted(): boolean;
    set inverted(val: boolean);
    get pulse(): number;
    set pulse(val: number);
    get text(): string;
    set text(val: string);
    get textXalign(): number;
    set textXalign(val: number);
    get textYalign(): number;
    set textYalign(val: number);
    get value(): number;
    set value(val: number);

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](): CellRendererProgress;

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module CellRendererSpin {
    export interface ConstructorProperties extends CellRendererText.ConstructorProperties {
        [key: string]: any;
        adjustment: Adjustment;
        climbRate: number;
        digits: number;
    }
}
export class CellRendererSpin extends CellRendererText {
    static $gtype: GObject.GType<CellRendererSpin>;

    constructor(properties?: Partial<CellRendererSpin.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellRendererSpin.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get adjustment(): Adjustment;
    set adjustment(val: Adjustment);
    get climbRate(): number;
    set climbRate(val: number);
    get digits(): number;
    set digits(val: number);

    // Constructors

    static ["new"](): CellRendererSpin;
}
export module CellRendererSpinner {
    export interface ConstructorProperties extends CellRenderer.ConstructorProperties {
        [key: string]: any;
        active: boolean;
        pulse: number;
        size: IconSize;
    }
}
export class CellRendererSpinner extends CellRenderer {
    static $gtype: GObject.GType<CellRendererSpinner>;

    constructor(properties?: Partial<CellRendererSpinner.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellRendererSpinner.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get active(): boolean;
    set active(val: boolean);
    get pulse(): number;
    set pulse(val: number);
    get size(): IconSize;
    set size(val: IconSize);

    // Constructors

    static ["new"](): CellRendererSpinner;
}
export module CellRendererText {
    export interface ConstructorProperties extends CellRenderer.ConstructorProperties {
        [key: string]: any;
        alignSet: boolean;
        alignment: Pango.Alignment;
        attributes: Pango.AttrList;
        background: string;
        backgroundGdk: Gdk.Color;
        backgroundRgba: Gdk.RGBA;
        backgroundSet: boolean;
        editable: boolean;
        editableSet: boolean;
        ellipsize: Pango.EllipsizeMode;
        ellipsizeSet: boolean;
        family: string;
        familySet: boolean;
        font: string;
        fontDesc: Pango.FontDescription;
        foreground: string;
        foregroundGdk: Gdk.Color;
        foregroundRgba: Gdk.RGBA;
        foregroundSet: boolean;
        language: string;
        languageSet: boolean;
        markup: string;
        maxWidthChars: number;
        placeholderText: string;
        rise: number;
        riseSet: boolean;
        scale: number;
        scaleSet: boolean;
        singleParagraphMode: boolean;
        size: number;
        sizePoints: number;
        sizeSet: boolean;
        stretch: Pango.Stretch;
        stretchSet: boolean;
        strikethrough: boolean;
        strikethroughSet: boolean;
        style: Pango.Style;
        styleSet: boolean;
        text: string;
        underline: Pango.Underline;
        underlineSet: boolean;
        variant: Pango.Variant;
        variantSet: boolean;
        weight: number;
        weightSet: boolean;
        widthChars: number;
        wrapMode: Pango.WrapMode;
        wrapWidth: number;
    }
}
export class CellRendererText extends CellRenderer {
    static $gtype: GObject.GType<CellRendererText>;

    constructor(properties?: Partial<CellRendererText.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellRendererText.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get alignSet(): boolean;
    set alignSet(val: boolean);
    get alignment(): Pango.Alignment;
    set alignment(val: Pango.Alignment);
    get attributes(): Pango.AttrList;
    set attributes(val: Pango.AttrList);
    set background(val: string);
    get backgroundGdk(): Gdk.Color;
    set backgroundGdk(val: Gdk.Color);
    get backgroundRgba(): Gdk.RGBA;
    set backgroundRgba(val: Gdk.RGBA);
    get backgroundSet(): boolean;
    set backgroundSet(val: boolean);
    get editable(): boolean;
    set editable(val: boolean);
    get editableSet(): boolean;
    set editableSet(val: boolean);
    get ellipsize(): Pango.EllipsizeMode;
    set ellipsize(val: Pango.EllipsizeMode);
    get ellipsizeSet(): boolean;
    set ellipsizeSet(val: boolean);
    get family(): string;
    set family(val: string);
    get familySet(): boolean;
    set familySet(val: boolean);
    get font(): string;
    set font(val: string);
    get fontDesc(): Pango.FontDescription;
    set fontDesc(val: Pango.FontDescription);
    set foreground(val: string);
    get foregroundGdk(): Gdk.Color;
    set foregroundGdk(val: Gdk.Color);
    get foregroundRgba(): Gdk.RGBA;
    set foregroundRgba(val: Gdk.RGBA);
    get foregroundSet(): boolean;
    set foregroundSet(val: boolean);
    get language(): string;
    set language(val: string);
    get languageSet(): boolean;
    set languageSet(val: boolean);
    set markup(val: string);
    get maxWidthChars(): number;
    set maxWidthChars(val: number);
    get placeholderText(): string;
    set placeholderText(val: string);
    get rise(): number;
    set rise(val: number);
    get riseSet(): boolean;
    set riseSet(val: boolean);
    get scale(): number;
    set scale(val: number);
    get scaleSet(): boolean;
    set scaleSet(val: boolean);
    get singleParagraphMode(): boolean;
    set singleParagraphMode(val: boolean);
    get size(): number;
    set size(val: number);
    get sizePoints(): number;
    set sizePoints(val: number);
    get sizeSet(): boolean;
    set sizeSet(val: boolean);
    get stretch(): Pango.Stretch;
    set stretch(val: Pango.Stretch);
    get stretchSet(): boolean;
    set stretchSet(val: boolean);
    get strikethrough(): boolean;
    set strikethrough(val: boolean);
    get strikethroughSet(): boolean;
    set strikethroughSet(val: boolean);
    get style(): Pango.Style;
    set style(val: Pango.Style);
    get styleSet(): boolean;
    set styleSet(val: boolean);
    get text(): string;
    set text(val: string);
    get underline(): Pango.Underline;
    set underline(val: Pango.Underline);
    get underlineSet(): boolean;
    set underlineSet(val: boolean);
    get variant(): Pango.Variant;
    set variant(val: Pango.Variant);
    get variantSet(): boolean;
    set variantSet(val: boolean);
    get weight(): number;
    set weight(val: number);
    get weightSet(): boolean;
    set weightSet(val: boolean);
    get widthChars(): number;
    set widthChars(val: number);
    get wrapMode(): Pango.WrapMode;
    set wrapMode(val: Pango.WrapMode);
    get wrapWidth(): number;
    set wrapWidth(val: number);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "edited", callback: (_source: this, path: string, new_text: string) => void): number;
    connect_after(signal: "edited", callback: (_source: this, path: string, new_text: string) => void): number;
    emit(signal: "edited", path: string, new_text: string): void;

    // Constructors

    static ["new"](): CellRendererText;

    // Members

    set_fixed_height_from_font(number_of_rows: number): void;
    vfunc_edited(path: string, new_text: string): void;
}
export module CellRendererToggle {
    export interface ConstructorProperties extends CellRenderer.ConstructorProperties {
        [key: string]: any;
        activatable: boolean;
        active: boolean;
        inconsistent: boolean;
        indicatorSize: number;
        radio: boolean;
    }
}
export class CellRendererToggle extends CellRenderer {
    static $gtype: GObject.GType<CellRendererToggle>;

    constructor(properties?: Partial<CellRendererToggle.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellRendererToggle.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get activatable(): boolean;
    set activatable(val: boolean);
    get active(): boolean;
    set active(val: boolean);
    get inconsistent(): boolean;
    set inconsistent(val: boolean);
    get indicatorSize(): number;
    set indicatorSize(val: number);
    get radio(): boolean;
    set radio(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "toggled", callback: (_source: this, path: string) => void): number;
    connect_after(signal: "toggled", callback: (_source: this, path: string) => void): number;
    emit(signal: "toggled", path: string): void;

    // Constructors

    static ["new"](): CellRendererToggle;

    // Members

    get_activatable(): boolean;
    get_active(): boolean;
    get_radio(): boolean;
    set_activatable(setting: boolean): void;
    set_active(setting: boolean): void;
    set_radio(radio: boolean): void;
    vfunc_toggled(path: string): void;
}
export module CellView {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        background: string;
        backgroundGdk: Gdk.Color;
        backgroundRgba: Gdk.RGBA;
        backgroundSet: boolean;
        cellArea: CellArea;
        cellAreaContext: CellAreaContext;
        drawSensitive: boolean;
        fitModel: boolean;
        model: TreeModel;
    }
}
export class CellView extends Widget implements Atk.ImplementorIface, Buildable, CellLayout, Orientable {
    static $gtype: GObject.GType<CellView>;

    constructor(properties?: Partial<CellView.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CellView.ConstructorProperties>, ...args: any[]): void;

    // Properties
    set background(val: string);
    get backgroundGdk(): Gdk.Color;
    set backgroundGdk(val: Gdk.Color);
    get backgroundRgba(): Gdk.RGBA;
    set backgroundRgba(val: Gdk.RGBA);
    get backgroundSet(): boolean;
    set backgroundSet(val: boolean);
    get cellArea(): CellArea;
    get cellAreaContext(): CellAreaContext;
    get drawSensitive(): boolean;
    set drawSensitive(val: boolean);
    get fitModel(): boolean;
    set fitModel(val: boolean);
    get model(): TreeModel;
    set model(val: TreeModel);

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](): CellView;
    static new_with_context(area: CellArea, context: CellAreaContext): CellView;
    static new_with_markup(markup: string): CellView;
    static new_with_pixbuf(pixbuf: GdkPixbuf.Pixbuf): CellView;
    static new_with_text(text: string): CellView;

    // Members

    get_displayed_row(): TreePath | null;
    get_draw_sensitive(): boolean;
    get_fit_model(): boolean;
    get_model(): TreeModel | null;
    get_size_of_row(path: TreePath): [boolean, Requisition];
    set_background_color(color: Gdk.Color): void;
    set_background_rgba(rgba: Gdk.RGBA): void;
    set_displayed_row(path?: TreePath | null): void;
    set_draw_sensitive(draw_sensitive: boolean): void;
    set_fit_model(fit_model: boolean): void;
    set_model(model?: TreeModel | null): void;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
    add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    clear(): void;
    clear_attributes(cell: CellRenderer): void;
    get_area(): CellArea | null;
    get_cells(): CellRenderer[];
    pack_end(cell: CellRenderer, expand: boolean): void;
    pack_start(cell: CellRenderer, expand: boolean): void;
    reorder(cell: CellRenderer, position: number): void;
    set_cell_data_func(cell: CellRenderer, func?: CellLayoutDataFunc | null): void;
    vfunc_add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    vfunc_clear(): void;
    vfunc_clear_attributes(cell: CellRenderer): void;
    vfunc_get_area(): CellArea | null;
    vfunc_get_cells(): CellRenderer[];
    vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
    vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
    vfunc_reorder(cell: CellRenderer, position: number): void;
    vfunc_set_cell_data_func(cell: CellRenderer, func?: CellLayoutDataFunc | null): void;
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module CheckButton {
    export interface ConstructorProperties extends ToggleButton.ConstructorProperties {
        [key: string]: any;
    }
}
export class CheckButton extends ToggleButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    static $gtype: GObject.GType<CheckButton>;

    constructor(properties?: Partial<CheckButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CheckButton.ConstructorProperties>, ...args: any[]): void;

    // Fields
    toggle_button: ToggleButton;

    // Constructors

    static ["new"](): CheckButton;
    static new_with_label(label: string): CheckButton;
    static new_with_mnemonic(label: string): CheckButton;

    // Members

    vfunc_draw_indicator(cr: cairo.Context): void;
}
export module CheckMenuItem {
    export interface ConstructorProperties extends MenuItem.ConstructorProperties {
        [key: string]: any;
        active: boolean;
        drawAsRadio: boolean;
        inconsistent: boolean;
    }
}
export class CheckMenuItem extends MenuItem implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    static $gtype: GObject.GType<CheckMenuItem>;

    constructor(properties?: Partial<CheckMenuItem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CheckMenuItem.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get active(): boolean;
    set active(val: boolean);
    get drawAsRadio(): boolean;
    set drawAsRadio(val: boolean);
    get inconsistent(): boolean;
    set inconsistent(val: boolean);

    // Fields
    menu_item: MenuItem;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "toggled", callback: (_source: this) => void): number;
    connect_after(signal: "toggled", callback: (_source: this) => void): number;
    emit(signal: "toggled"): void;

    // Implemented Properties

    get actionName(): string;
    set actionName(val: string);
    get actionTarget(): GLib.Variant;
    set actionTarget(val: GLib.Variant);
    get relatedAction(): Action;
    set relatedAction(val: Action);
    get useActionAppearance(): boolean;
    set useActionAppearance(val: boolean);

    // Constructors

    static ["new"](): CheckMenuItem;
    static new_with_label(label: string): CheckMenuItem;
    static new_with_mnemonic(label: string): CheckMenuItem;

    // Members

    get_active(): boolean;
    get_draw_as_radio(): boolean;
    get_inconsistent(): boolean;
    set_active(is_active: boolean): void;
    set_draw_as_radio(draw_as_radio: boolean): void;
    set_inconsistent(setting: boolean): void;
    toggled(): void;
    vfunc_draw_indicator(cr: cairo.Context): void;
    vfunc_toggled(): void;

    // Implemented Members

    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name?: string | null): void;
    set_action_target_value(target_value?: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name?: string | null): void;
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action?: Action | null): void;
    vfunc_sync_action_properties(action?: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
}
export module CheckMenuItemAccessible {
    export interface ConstructorProperties extends MenuItemAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class CheckMenuItemAccessible extends MenuItemAccessible implements Atk.Action, Atk.Component, Atk.Selection {
    static $gtype: GObject.GType<CheckMenuItemAccessible>;

    constructor(properties?: Partial<CheckMenuItemAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CheckMenuItemAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: CheckMenuItemAccessiblePrivate | any;

    // Implemented Members

    do_action(i: number): boolean;
    get_description(i: number): string | null;
    // Conflicted with Atk.Object.get_description
    get_description(...args: never[]): any;
    get_keybinding(i: number): string | null;
    get_localized_name(i: number): string | null;
    get_n_actions(): number;
    get_name(i: number): string | null;
    // Conflicted with Atk.Object.get_name
    get_name(...args: never[]): any;
    set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.set_description
    set_description(...args: never[]): any;
    vfunc_do_action(i: number): boolean;
    vfunc_get_description(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_description
    vfunc_get_description(...args: never[]): any;
    vfunc_get_keybinding(i: number): string | null;
    vfunc_get_localized_name(i: number): string | null;
    vfunc_get_n_actions(): number;
    vfunc_get_name(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_name
    vfunc_get_name(...args: never[]): any;
    vfunc_set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.vfunc_set_description
    vfunc_set_description(...args: never[]): any;
    add_selection(i: number): boolean;
    clear_selection(): boolean;
    get_selection_count(): number;
    is_child_selected(i: number): boolean;
    ref_selection(i: number): Atk.Object | null;
    remove_selection(i: number): boolean;
    select_all_selection(): boolean;
    vfunc_add_selection(i: number): boolean;
    vfunc_clear_selection(): boolean;
    vfunc_get_selection_count(): number;
    vfunc_is_child_selected(i: number): boolean;
    vfunc_ref_selection(i: number): Atk.Object | null;
    vfunc_remove_selection(i: number): boolean;
    vfunc_select_all_selection(): boolean;
    vfunc_selection_changed(): void;
}
export module Clipboard {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Clipboard extends GObject.Object {
    static $gtype: GObject.GType<Clipboard>;

    constructor(properties?: Partial<Clipboard.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Clipboard.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "owner-change", callback: (_source: this, event: Gdk.EventOwnerChange) => void): number;
    connect_after(signal: "owner-change", callback: (_source: this, event: Gdk.EventOwnerChange) => void): number;
    emit(signal: "owner-change", event: Gdk.EventOwnerChange): void;

    // Members

    clear(): void;
    get_display(): Gdk.Display;
    get_owner<T = GObject.Object>(): T;
    get_selection(): Gdk.Atom;
    request_contents(target: Gdk.Atom, callback: ClipboardReceivedFunc): void;
    request_image(callback: ClipboardImageReceivedFunc): void;
    request_rich_text(buffer: TextBuffer, callback: ClipboardRichTextReceivedFunc): void;
    request_targets(callback: ClipboardTargetsReceivedFunc): void;
    request_text(callback: ClipboardTextReceivedFunc): void;
    request_uris(callback: ClipboardURIReceivedFunc): void;
    set_can_store(targets?: TargetEntry[] | null): void;
    set_image(pixbuf: GdkPixbuf.Pixbuf): void;
    set_text(text: string, len: number): void;
    store(): void;
    wait_for_contents(target: Gdk.Atom): SelectionData | null;
    wait_for_image(): GdkPixbuf.Pixbuf | null;
    wait_for_rich_text(buffer: TextBuffer): [Uint8Array | null, Gdk.Atom];
    wait_for_targets(): [boolean, Gdk.Atom[]];
    wait_for_text(): string | null;
    wait_for_uris(): string[] | null;
    wait_is_image_available(): boolean;
    wait_is_rich_text_available(buffer: TextBuffer): boolean;
    wait_is_target_available(target: Gdk.Atom): boolean;
    wait_is_text_available(): boolean;
    wait_is_uris_available(): boolean;
    static get(selection: Gdk.Atom): Clipboard;
    static get_default(display: Gdk.Display): Clipboard;
    static get_for_display(display: Gdk.Display, selection: Gdk.Atom): Clipboard;
}
export module ColorButton {
    export interface ConstructorProperties extends Button.ConstructorProperties {
        [key: string]: any;
        alpha: number;
        color: Gdk.Color;
        rgba: Gdk.RGBA;
        showEditor: boolean;
        title: string;
        useAlpha: boolean;
    }
}
export class ColorButton
    extends Button
    implements Atk.ImplementorIface, Actionable, Activatable, Buildable, ColorChooser
{
    static $gtype: GObject.GType<ColorButton>;

    constructor(properties?: Partial<ColorButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ColorButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get alpha(): number;
    set alpha(val: number);
    get color(): Gdk.Color;
    set color(val: Gdk.Color);
    get rgba(): Gdk.RGBA;
    set rgba(val: Gdk.RGBA);
    get showEditor(): boolean;
    set showEditor(val: boolean);
    get title(): string;
    set title(val: string);
    get useAlpha(): boolean;
    set useAlpha(val: boolean);

    // Fields
    button: Button;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "color-set", callback: (_source: this) => void): number;
    connect_after(signal: "color-set", callback: (_source: this) => void): number;
    emit(signal: "color-set"): void;

    // Implemented Properties

    get actionName(): string;
    set actionName(val: string);
    get actionTarget(): GLib.Variant;
    set actionTarget(val: GLib.Variant);
    get relatedAction(): Action;
    set relatedAction(val: Action);
    get useActionAppearance(): boolean;
    set useActionAppearance(val: boolean);

    // Constructors

    static ["new"](): ColorButton;
    static new_with_color(color: Gdk.Color): ColorButton;
    static new_with_rgba(rgba: Gdk.RGBA): ColorButton;

    // Members

    get_alpha(): number;
    get_color(): Gdk.Color;
    get_title(): string;
    get_use_alpha(): boolean;
    set_alpha(alpha: number): void;
    set_color(color: Gdk.Color): void;
    set_title(title: string): void;
    set_use_alpha(use_alpha: boolean): void;
    vfunc_color_set(): void;

    // Implemented Members

    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name?: string | null): void;
    set_action_target_value(target_value?: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name?: string | null): void;
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action?: Action | null): void;
    vfunc_sync_action_properties(action?: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
    add_palette(orientation: Orientation, colors_per_line: number, colors?: Gdk.RGBA[] | null): void;
    get_rgba(): Gdk.RGBA;
    set_rgba(color: Gdk.RGBA): void;
    vfunc_add_palette(orientation: Orientation, colors_per_line: number, colors?: Gdk.RGBA[] | null): void;
    vfunc_color_activated(color: Gdk.RGBA): void;
    vfunc_get_rgba(): Gdk.RGBA;
    vfunc_set_rgba(color: Gdk.RGBA): void;
}
export module ColorChooserDialog {
    export interface ConstructorProperties extends Dialog.ConstructorProperties {
        [key: string]: any;
        showEditor: boolean;
    }
}
export class ColorChooserDialog extends Dialog implements Atk.ImplementorIface, Buildable, ColorChooser {
    static $gtype: GObject.GType<ColorChooserDialog>;

    constructor(properties?: Partial<ColorChooserDialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ColorChooserDialog.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get showEditor(): boolean;
    set showEditor(val: boolean);

    // Implemented Properties

    get rgba(): Gdk.RGBA;
    set rgba(val: Gdk.RGBA);
    get useAlpha(): boolean;
    set useAlpha(val: boolean);

    // Constructors

    static ["new"](title?: string | null, parent?: Window | null): ColorChooserDialog;
    // Conflicted with Gtk.Dialog.new
    static ["new"](...args: never[]): any;

    // Implemented Members

    add_palette(orientation: Orientation, colors_per_line: number, colors?: Gdk.RGBA[] | null): void;
    get_rgba(): Gdk.RGBA;
    get_use_alpha(): boolean;
    set_rgba(color: Gdk.RGBA): void;
    set_use_alpha(use_alpha: boolean): void;
    vfunc_add_palette(orientation: Orientation, colors_per_line: number, colors?: Gdk.RGBA[] | null): void;
    vfunc_color_activated(color: Gdk.RGBA): void;
    vfunc_get_rgba(): Gdk.RGBA;
    vfunc_set_rgba(color: Gdk.RGBA): void;
}
export module ColorChooserWidget {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        showEditor: boolean;
    }
}
export class ColorChooserWidget extends Box implements Atk.ImplementorIface, Buildable, ColorChooser, Orientable {
    static $gtype: GObject.GType<ColorChooserWidget>;

    constructor(properties?: Partial<ColorChooserWidget.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ColorChooserWidget.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get showEditor(): boolean;
    set showEditor(val: boolean);

    // Implemented Properties

    get rgba(): Gdk.RGBA;
    set rgba(val: Gdk.RGBA);
    get useAlpha(): boolean;
    set useAlpha(val: boolean);
    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](): ColorChooserWidget;

    // Implemented Members

    add_palette(orientation: Orientation, colors_per_line: number, colors?: Gdk.RGBA[] | null): void;
    get_rgba(): Gdk.RGBA;
    get_use_alpha(): boolean;
    set_rgba(color: Gdk.RGBA): void;
    set_use_alpha(use_alpha: boolean): void;
    vfunc_add_palette(orientation: Orientation, colors_per_line: number, colors?: Gdk.RGBA[] | null): void;
    vfunc_color_activated(color: Gdk.RGBA): void;
    vfunc_get_rgba(): Gdk.RGBA;
    vfunc_set_rgba(color: Gdk.RGBA): void;
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module ColorSelection {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        currentAlpha: number;
        currentColor: Gdk.Color;
        currentRgba: Gdk.RGBA;
        hasOpacityControl: boolean;
        hasPalette: boolean;
    }
}
export class ColorSelection extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<ColorSelection>;

    constructor(properties?: Partial<ColorSelection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ColorSelection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get currentAlpha(): number;
    set currentAlpha(val: number);
    get currentColor(): Gdk.Color;
    set currentColor(val: Gdk.Color);
    get currentRgba(): Gdk.RGBA;
    set currentRgba(val: Gdk.RGBA);
    get hasOpacityControl(): boolean;
    set hasOpacityControl(val: boolean);
    get hasPalette(): boolean;
    set hasPalette(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "color-changed", callback: (_source: this) => void): number;
    connect_after(signal: "color-changed", callback: (_source: this) => void): number;
    emit(signal: "color-changed"): void;

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](): ColorSelection;

    // Members

    get_current_alpha(): number;
    get_current_color(): Gdk.Color;
    get_current_rgba(): Gdk.RGBA;
    get_has_opacity_control(): boolean;
    get_has_palette(): boolean;
    get_previous_alpha(): number;
    get_previous_color(): Gdk.Color;
    get_previous_rgba(): Gdk.RGBA;
    is_adjusting(): boolean;
    set_current_alpha(alpha: number): void;
    set_current_color(color: Gdk.Color): void;
    set_current_rgba(rgba: Gdk.RGBA): void;
    set_has_opacity_control(has_opacity: boolean): void;
    set_has_palette(has_palette: boolean): void;
    set_previous_alpha(alpha: number): void;
    set_previous_color(color: Gdk.Color): void;
    set_previous_rgba(rgba: Gdk.RGBA): void;
    vfunc_color_changed(): void;
    static palette_from_string(str: string): [boolean, Gdk.Color[]];
    static palette_to_string(colors: Gdk.Color[]): string;

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module ColorSelectionDialog {
    export interface ConstructorProperties extends Dialog.ConstructorProperties {
        [key: string]: any;
        cancelButton: Widget;
        colorSelection: Widget;
        helpButton: Widget;
        okButton: Widget;
    }
}
export class ColorSelectionDialog extends Dialog implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<ColorSelectionDialog>;

    constructor(properties?: Partial<ColorSelectionDialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ColorSelectionDialog.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get cancelButton(): Widget;
    get colorSelection(): Widget;
    get helpButton(): Widget;
    get okButton(): Widget;

    // Constructors

    static ["new"](title: string): ColorSelectionDialog;
    // Conflicted with Gtk.Dialog.new
    static ["new"](...args: never[]): any;

    // Members

    get_color_selection(): Widget;
}
export module ComboBox {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        active: number;
        activeId: string;
        addTearoffs: boolean;
        buttonSensitivity: SensitivityType;
        cellArea: CellArea;
        columnSpanColumn: number;
        entryTextColumn: number;
        hasEntry: boolean;
        hasFrame: boolean;
        idColumn: number;
        model: TreeModel;
        popupFixedWidth: boolean;
        popupShown: boolean;
        rowSpanColumn: number;
        tearoffTitle: string;
        wrapWidth: number;
    }
}
export class ComboBox extends Bin implements Atk.ImplementorIface, Buildable, CellEditable, CellLayout {
    static $gtype: GObject.GType<ComboBox>;

    constructor(properties?: Partial<ComboBox.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ComboBox.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get active(): number;
    set active(val: number);
    get activeId(): string;
    set activeId(val: string);
    get addTearoffs(): boolean;
    set addTearoffs(val: boolean);
    get buttonSensitivity(): SensitivityType;
    set buttonSensitivity(val: SensitivityType);
    get cellArea(): CellArea;
    get columnSpanColumn(): number;
    set columnSpanColumn(val: number);
    get entryTextColumn(): number;
    set entryTextColumn(val: number);
    get hasEntry(): boolean;
    get hasFrame(): boolean;
    set hasFrame(val: boolean);
    get idColumn(): number;
    set idColumn(val: number);
    get model(): TreeModel;
    set model(val: TreeModel);
    get popupFixedWidth(): boolean;
    set popupFixedWidth(val: boolean);
    get popupShown(): boolean;
    get rowSpanColumn(): number;
    set rowSpanColumn(val: number);
    get tearoffTitle(): string;
    set tearoffTitle(val: string);
    get wrapWidth(): number;
    set wrapWidth(val: number);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this) => void): number;
    connect_after(signal: "changed", callback: (_source: this) => void): number;
    emit(signal: "changed"): void;
    connect(signal: "format-entry-text", callback: (_source: this, path: string) => string): number;
    connect_after(signal: "format-entry-text", callback: (_source: this, path: string) => string): number;
    emit(signal: "format-entry-text", path: string): void;
    connect(signal: "move-active", callback: (_source: this, scroll_type: ScrollType) => void): number;
    connect_after(signal: "move-active", callback: (_source: this, scroll_type: ScrollType) => void): number;
    emit(signal: "move-active", scroll_type: ScrollType): void;
    connect(signal: "popdown", callback: (_source: this) => boolean): number;
    connect_after(signal: "popdown", callback: (_source: this) => boolean): number;
    emit(signal: "popdown"): void;
    connect(signal: "popup", callback: (_source: this) => void): number;
    connect_after(signal: "popup", callback: (_source: this) => void): number;
    emit(signal: "popup"): void;

    // Implemented Properties

    get editingCanceled(): boolean;
    set editingCanceled(val: boolean);

    // Constructors

    static ["new"](): ComboBox;
    static new_with_area(area: CellArea): ComboBox;
    static new_with_area_and_entry(area: CellArea): ComboBox;
    static new_with_entry(): ComboBox;
    static new_with_model(model: TreeModel): ComboBox;
    static new_with_model_and_entry(model: TreeModel): ComboBox;

    // Members

    get_active(): number;
    get_active_id(): string | null;
    get_active_iter(): [boolean, TreeIter];
    get_add_tearoffs(): boolean;
    get_button_sensitivity(): SensitivityType;
    get_column_span_column(): number;
    get_entry_text_column(): number;
    get_focus_on_click(): boolean;
    get_has_entry(): boolean;
    get_id_column(): number;
    get_model(): TreeModel;
    get_popup_accessible(): Atk.Object;
    get_popup_fixed_width(): boolean;
    get_row_span_column(): number;
    get_title(): string;
    get_wrap_width(): number;
    popdown(): void;
    popup(): void;
    popup_for_device(device: Gdk.Device): void;
    set_active(index_: number): void;
    set_active_id(active_id?: string | null): boolean;
    set_active_iter(iter?: TreeIter | null): void;
    set_add_tearoffs(add_tearoffs: boolean): void;
    set_button_sensitivity(sensitivity: SensitivityType): void;
    set_column_span_column(column_span: number): void;
    set_entry_text_column(text_column: number): void;
    set_focus_on_click(focus_on_click: boolean): void;
    set_id_column(id_column: number): void;
    set_model(model?: TreeModel | null): void;
    set_popup_fixed_width(fixed: boolean): void;
    set_row_separator_func(func: TreeViewRowSeparatorFunc, destroy?: GLib.DestroyNotify | null): void;
    set_row_span_column(row_span: number): void;
    set_title(title: string): void;
    set_wrap_width(width: number): void;
    vfunc_changed(): void;
    vfunc_format_entry_text(path: string): string;

    // Implemented Members

    editing_done(): void;
    remove_widget(): void;
    start_editing(event?: Gdk.Event | null): void;
    vfunc_editing_done(): void;
    vfunc_remove_widget(): void;
    vfunc_start_editing(event?: Gdk.Event | null): void;
    add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    clear(): void;
    clear_attributes(cell: CellRenderer): void;
    get_area(): CellArea | null;
    get_cells(): CellRenderer[];
    pack_end(cell: CellRenderer, expand: boolean): void;
    pack_start(cell: CellRenderer, expand: boolean): void;
    reorder(cell: CellRenderer, position: number): void;
    set_cell_data_func(cell: CellRenderer, func?: CellLayoutDataFunc | null): void;
    vfunc_add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    vfunc_clear(): void;
    vfunc_clear_attributes(cell: CellRenderer): void;
    vfunc_get_area(): CellArea | null;
    vfunc_get_cells(): CellRenderer[];
    vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
    vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
    vfunc_reorder(cell: CellRenderer, position: number): void;
    vfunc_set_cell_data_func(cell: CellRenderer, func?: CellLayoutDataFunc | null): void;
}
export module ComboBoxAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ComboBoxAccessible extends ContainerAccessible implements Atk.Action, Atk.Component, Atk.Selection {
    static $gtype: GObject.GType<ComboBoxAccessible>;

    constructor(properties?: Partial<ComboBoxAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ComboBoxAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ComboBoxAccessiblePrivate | any;

    // Implemented Members

    do_action(i: number): boolean;
    get_description(i: number): string | null;
    // Conflicted with Atk.Object.get_description
    get_description(...args: never[]): any;
    get_keybinding(i: number): string | null;
    get_localized_name(i: number): string | null;
    get_n_actions(): number;
    get_name(i: number): string | null;
    // Conflicted with Atk.Object.get_name
    get_name(...args: never[]): any;
    set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.set_description
    set_description(...args: never[]): any;
    vfunc_do_action(i: number): boolean;
    vfunc_get_description(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_description
    vfunc_get_description(...args: never[]): any;
    vfunc_get_keybinding(i: number): string | null;
    vfunc_get_localized_name(i: number): string | null;
    vfunc_get_n_actions(): number;
    vfunc_get_name(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_name
    vfunc_get_name(...args: never[]): any;
    vfunc_set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.vfunc_set_description
    vfunc_set_description(...args: never[]): any;
    add_selection(i: number): boolean;
    clear_selection(): boolean;
    get_selection_count(): number;
    is_child_selected(i: number): boolean;
    ref_selection(i: number): Atk.Object | null;
    remove_selection(i: number): boolean;
    select_all_selection(): boolean;
    vfunc_add_selection(i: number): boolean;
    vfunc_clear_selection(): boolean;
    vfunc_get_selection_count(): number;
    vfunc_is_child_selected(i: number): boolean;
    vfunc_ref_selection(i: number): Atk.Object | null;
    vfunc_remove_selection(i: number): boolean;
    vfunc_select_all_selection(): boolean;
    vfunc_selection_changed(): void;
}
export module ComboBoxText {
    export interface ConstructorProperties extends ComboBox.ConstructorProperties {
        [key: string]: any;
    }
}
export class ComboBoxText extends ComboBox implements Atk.ImplementorIface, Buildable, CellEditable, CellLayout {
    static $gtype: GObject.GType<ComboBoxText>;

    constructor(properties?: Partial<ComboBoxText.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ComboBoxText.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get editingCanceled(): boolean;
    set editingCanceled(val: boolean);

    // Constructors

    static ["new"](): ComboBoxText;
    static new_with_entry(): ComboBoxText;

    // Members

    append(id: string | null, text: string): void;
    append_text(text: string): void;
    get_active_text(): string;
    insert(position: number, id: string | null, text: string): void;
    insert_text(position: number, text: string): void;
    prepend(id: string | null, text: string): void;
    prepend_text(text: string): void;
    remove(position: number): void;
    // Conflicted with Gtk.Container.remove
    remove(...args: never[]): any;
    remove_all(): void;

    // Implemented Members

    editing_done(): void;
    remove_widget(): void;
    start_editing(event?: Gdk.Event | null): void;
    vfunc_editing_done(): void;
    vfunc_remove_widget(): void;
    vfunc_start_editing(event?: Gdk.Event | null): void;
    add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    clear(): void;
    clear_attributes(cell: CellRenderer): void;
    get_area(): CellArea | null;
    get_cells(): CellRenderer[];
    pack_end(cell: CellRenderer, expand: boolean): void;
    pack_start(cell: CellRenderer, expand: boolean): void;
    reorder(cell: CellRenderer, position: number): void;
    set_cell_data_func(cell: CellRenderer, func?: CellLayoutDataFunc | null): void;
    vfunc_add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    vfunc_clear(): void;
    vfunc_clear_attributes(cell: CellRenderer): void;
    vfunc_get_area(): CellArea | null;
    vfunc_get_cells(): CellRenderer[];
    vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
    vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
    vfunc_reorder(cell: CellRenderer, position: number): void;
    vfunc_set_cell_data_func(cell: CellRenderer, func?: CellLayoutDataFunc | null): void;
}
export module Container {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        borderWidth: number;
        child: Widget;
        resizeMode: ResizeMode;
    }
}
export abstract class Container extends Widget implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Container>;

    constructor(properties?: Partial<Container.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Container.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get borderWidth(): number;
    set borderWidth(val: number);
    set child(val: Widget);
    get resizeMode(): ResizeMode;
    set resizeMode(val: ResizeMode);

    // Fields
    widget: Widget;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "add", callback: (_source: this, object: Widget) => void): number;
    connect_after(signal: "add", callback: (_source: this, object: Widget) => void): number;
    emit(signal: "add", object: Widget): void;
    connect(signal: "check-resize", callback: (_source: this) => void): number;
    connect_after(signal: "check-resize", callback: (_source: this) => void): number;
    emit(signal: "check-resize"): void;
    connect(signal: "remove", callback: (_source: this, object: Widget) => void): number;
    connect_after(signal: "remove", callback: (_source: this, object: Widget) => void): number;
    emit(signal: "remove", object: Widget): void;
    connect(signal: "set-focus-child", callback: (_source: this, object: Widget) => void): number;
    connect_after(signal: "set-focus-child", callback: (_source: this, object: Widget) => void): number;
    emit(signal: "set-focus-child", object: Widget): void;

    // Members

    add(widget: Widget): void;
    check_resize(): void;
    child_get_property(child: Widget, property_name: string, value: GObject.Value | any): void;
    child_notify(child: Widget, child_property: string): void;
    // Conflicted with Gtk.Widget.child_notify
    child_notify(...args: never[]): any;
    child_notify_by_pspec(child: Widget, pspec: GObject.ParamSpec): void;
    child_set_property(child: Widget, property_name: string, value: GObject.Value | any): void;
    child_type(): GObject.GType;
    forall(callback: Callback): void;
    foreach(callback: Callback): void;
    get_border_width(): number;
    get_children(): Widget[];
    get_focus_chain(): [boolean, Widget[]];
    get_focus_child(): Widget | null;
    get_focus_hadjustment(): Adjustment | null;
    get_focus_vadjustment(): Adjustment | null;
    get_path_for_child(child: Widget): WidgetPath;
    get_resize_mode(): ResizeMode;
    propagate_draw(child: Widget, cr: cairo.Context): void;
    remove(widget: Widget): void;
    resize_children(): void;
    set_border_width(border_width: number): void;
    set_focus_chain(focusable_widgets: Widget[]): void;
    set_focus_child(child?: Widget | null): void;
    set_focus_hadjustment(adjustment: Adjustment): void;
    set_focus_vadjustment(adjustment: Adjustment): void;
    set_reallocate_redraws(needs_redraws: boolean): void;
    set_resize_mode(resize_mode: ResizeMode): void;
    unset_focus_chain(): void;
    vfunc_add(widget: Widget): void;
    vfunc_check_resize(): void;
    vfunc_child_type(): GObject.GType;
    vfunc_composite_name(child: Widget): string;
    vfunc_forall(include_internals: boolean, callback: Callback): void;
    vfunc_get_child_property(
        child: Widget,
        property_id: number,
        value: GObject.Value | any,
        pspec: GObject.ParamSpec
    ): void;
    vfunc_get_path_for_child(child: Widget): WidgetPath;
    vfunc_remove(widget: Widget): void;
    vfunc_set_child_property(
        child: Widget,
        property_id: number,
        value: GObject.Value | any,
        pspec: GObject.ParamSpec
    ): void;
    vfunc_set_focus_child(child?: Widget | null): void;
    static find_child_property(property_name: string): GObject.ParamSpec | null;
    static handle_border_width(): void;
    static install_child_properties(pspecs: GObject.ParamSpec[]): void;
    static install_child_property(property_id: number, pspec: GObject.ParamSpec): void;
    static list_child_properties(): GObject.ParamSpec[];

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
}
export module ContainerAccessible {
    export interface ConstructorProperties extends WidgetAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ContainerAccessible extends WidgetAccessible implements Atk.Component {
    static $gtype: GObject.GType<ContainerAccessible>;

    constructor(properties?: Partial<ContainerAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ContainerAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ContainerAccessiblePrivate | any;

    // Implemented Members

    contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    get_alpha(): number;
    get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    get_layer(): Atk.Layer;
    get_mdi_zorder(): number;
    get_position(coord_type: Atk.CoordType): [number, number];
    get_size(): [number, number];
    grab_focus(): boolean;
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    remove_focus_handler(handler_id: number): void;
    scroll_to(type: Atk.ScrollType): boolean;
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    set_size(width: number, height: number): boolean;
    vfunc_bounds_changed(bounds: Atk.Rectangle): void;
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_get_alpha(): number;
    vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    vfunc_get_layer(): Atk.Layer;
    vfunc_get_mdi_zorder(): number;
    vfunc_get_position(coord_type: Atk.CoordType): [number, number];
    vfunc_get_size(): [number, number];
    vfunc_grab_focus(): boolean;
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    vfunc_remove_focus_handler(handler_id: number): void;
    vfunc_scroll_to(type: Atk.ScrollType): boolean;
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_size(width: number, height: number): boolean;
}
export module ContainerCellAccessible {
    export interface ConstructorProperties extends CellAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ContainerCellAccessible extends CellAccessible implements Atk.Action, Atk.Component, Atk.TableCell {
    static $gtype: GObject.GType<ContainerCellAccessible>;

    constructor(properties?: Partial<ContainerCellAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ContainerCellAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ContainerCellAccessiblePrivate | any;

    // Constructors

    static ["new"](): ContainerCellAccessible;

    // Members

    add_child(child: CellAccessible): void;
    get_children(): CellAccessible[];
    remove_child(child: CellAccessible): void;

    // Implemented Members

    do_action(i: number): boolean;
    get_description(i: number): string | null;
    // Conflicted with Atk.Object.get_description
    get_description(...args: never[]): any;
    get_keybinding(i: number): string | null;
    get_localized_name(i: number): string | null;
    get_n_actions(): number;
    get_name(i: number): string | null;
    // Conflicted with Atk.Object.get_name
    get_name(...args: never[]): any;
    set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.set_description
    set_description(...args: never[]): any;
    vfunc_do_action(i: number): boolean;
    vfunc_get_description(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_description
    vfunc_get_description(...args: never[]): any;
    vfunc_get_keybinding(i: number): string | null;
    vfunc_get_localized_name(i: number): string | null;
    vfunc_get_n_actions(): number;
    vfunc_get_name(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_name
    vfunc_get_name(...args: never[]): any;
    vfunc_set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.vfunc_set_description
    vfunc_set_description(...args: never[]): any;
    contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    get_alpha(): number;
    get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    get_layer(): Atk.Layer;
    get_mdi_zorder(): number;
    get_position(coord_type: Atk.CoordType): [number, number];
    // Conflicted with Atk.TableCell.get_position
    get_position(...args: never[]): any;
    get_size(): [number, number];
    grab_focus(): boolean;
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    remove_focus_handler(handler_id: number): void;
    scroll_to(type: Atk.ScrollType): boolean;
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    set_size(width: number, height: number): boolean;
    vfunc_bounds_changed(bounds: Atk.Rectangle): void;
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_get_alpha(): number;
    vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    vfunc_get_layer(): Atk.Layer;
    vfunc_get_mdi_zorder(): number;
    vfunc_get_position(coord_type: Atk.CoordType): [number, number];
    // Conflicted with Atk.TableCell.vfunc_get_position
    vfunc_get_position(...args: never[]): any;
    vfunc_get_size(): [number, number];
    vfunc_grab_focus(): boolean;
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    vfunc_remove_focus_handler(handler_id: number): void;
    vfunc_scroll_to(type: Atk.ScrollType): boolean;
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_size(width: number, height: number): boolean;
    get_column_header_cells(): Atk.Object[];
    get_column_span(): number;
    get_row_column_span(): [boolean, number, number, number, number];
    get_row_header_cells(): Atk.Object[];
    get_row_span(): number;
    get_table(): Atk.Object;
    vfunc_get_column_header_cells(): Atk.Object[];
    vfunc_get_column_span(): number;
    vfunc_get_row_column_span(): [boolean, number, number, number, number];
    vfunc_get_row_header_cells(): Atk.Object[];
    vfunc_get_row_span(): number;
    vfunc_get_table(): Atk.Object;
}
export module CssProvider {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class CssProvider extends GObject.Object implements StyleProvider {
    static $gtype: GObject.GType<CssProvider>;

    constructor(properties?: Partial<CssProvider.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CssProvider.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: CssProviderPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "parsing-error", callback: (_source: this, section: CssSection, error: GLib.Error) => void): number;
    connect_after(
        signal: "parsing-error",
        callback: (_source: this, section: CssSection, error: GLib.Error) => void
    ): number;
    emit(signal: "parsing-error", section: CssSection, error: GLib.Error): void;

    // Constructors

    static ["new"](): CssProvider;

    // Members

    load_from_data(data: Uint8Array | string): boolean;
    load_from_file(file: Gio.File): boolean;
    load_from_path(path: string): boolean;
    load_from_resource(resource_path: string): void;
    to_string(): string;
    vfunc_parsing_error(section: CssSection, error: GLib.Error): void;
    static get_default(): CssProvider;
    static get_named(name: string, variant?: string | null): CssProvider;

    // Implemented Members

    get_icon_factory(path: WidgetPath): IconFactory | null;
    get_style(path: WidgetPath): StyleProperties | null;
    get_style_property(path: WidgetPath, state: StateFlags, pspec: GObject.ParamSpec): [boolean, unknown];
    vfunc_get_icon_factory(path: WidgetPath): IconFactory | null;
    vfunc_get_style(path: WidgetPath): StyleProperties | null;
    vfunc_get_style_property(path: WidgetPath, state: StateFlags, pspec: GObject.ParamSpec): [boolean, unknown];
}
export module Dialog {
    export interface ConstructorProperties extends Window.ConstructorProperties {
        [key: string]: any;
        useHeaderBar: number;
    }
}
export class Dialog extends Window implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Dialog>;

    constructor(properties?: Partial<Dialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Dialog.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get useHeaderBar(): number;

    // Fields
    // This accessor conflicts with a property, field, or function name in a parent class or interface.
    // @ts-expect-error
    window: Window | any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "close", callback: (_source: this) => void): number;
    connect_after(signal: "close", callback: (_source: this) => void): number;
    emit(signal: "close"): void;
    connect(signal: "response", callback: (_source: this, response_id: number) => void): number;
    connect_after(signal: "response", callback: (_source: this, response_id: number) => void): number;
    emit(signal: "response", response_id: number): void;

    // Constructors

    static ["new"](): Dialog;

    // Members

    add_action_widget(child: Widget, response_id: number): void;
    add_button(button_text: string, response_id: number): Widget;
    get_action_area(): Box;
    get_content_area(): Box;
    get_header_bar(): HeaderBar;
    get_response_for_widget(widget: Widget): number;
    get_widget_for_response(response_id: number): Widget | null;
    response(response_id: number): void;
    run(): number;
    set_alternative_button_order_from_array(new_order: number[]): void;
    set_default_response(response_id: number): void;
    set_response_sensitive(response_id: number, setting: boolean): void;
    vfunc_close(): void;
    vfunc_response(response_id: number): void;
}
export module DrawingArea {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
    }
}
export class DrawingArea extends Widget implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<DrawingArea>;

    constructor(properties?: Partial<DrawingArea.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<DrawingArea.ConstructorProperties>, ...args: any[]): void;

    // Fields
    widget: Widget;

    // Constructors

    static ["new"](): DrawingArea;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
}
export module Entry {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        activatesDefault: boolean;
        attributes: Pango.AttrList;
        buffer: EntryBuffer;
        capsLockWarning: boolean;
        completion: EntryCompletion;
        cursorPosition: number;
        editable: boolean;
        enableEmojiCompletion: boolean;
        hasFrame: boolean;
        imModule: string;
        innerBorder: Border;
        inputHints: InputHints;
        inputPurpose: InputPurpose;
        invisibleChar: number;
        invisibleCharSet: boolean;
        maxLength: number;
        maxWidthChars: number;
        overwriteMode: boolean;
        placeholderText: string;
        populateAll: boolean;
        primaryIconActivatable: boolean;
        primaryIconGicon: Gio.Icon;
        primaryIconName: string;
        primaryIconPixbuf: GdkPixbuf.Pixbuf;
        primaryIconSensitive: boolean;
        primaryIconStock: string;
        primaryIconStorageType: ImageType;
        primaryIconTooltipMarkup: string;
        primaryIconTooltipText: string;
        progressFraction: number;
        progressPulseStep: number;
        scrollOffset: number;
        secondaryIconActivatable: boolean;
        secondaryIconGicon: Gio.Icon;
        secondaryIconName: string;
        secondaryIconPixbuf: GdkPixbuf.Pixbuf;
        secondaryIconSensitive: boolean;
        secondaryIconStock: string;
        secondaryIconStorageType: ImageType;
        secondaryIconTooltipMarkup: string;
        secondaryIconTooltipText: string;
        selectionBound: number;
        shadowType: ShadowType;
        showEmojiIcon: boolean;
        tabs: Pango.TabArray;
        text: string;
        textLength: number;
        truncateMultiline: boolean;
        visibility: boolean;
        widthChars: number;
        xalign: number;
    }
}
export class Entry extends Widget implements Atk.ImplementorIface, Buildable, CellEditable, Editable {
    static $gtype: GObject.GType<Entry>;

    constructor(properties?: Partial<Entry.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Entry.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get activatesDefault(): boolean;
    set activatesDefault(val: boolean);
    get attributes(): Pango.AttrList;
    set attributes(val: Pango.AttrList);
    get buffer(): EntryBuffer;
    set buffer(val: EntryBuffer);
    get capsLockWarning(): boolean;
    set capsLockWarning(val: boolean);
    get completion(): EntryCompletion;
    set completion(val: EntryCompletion);
    get cursorPosition(): number;
    get editable(): boolean;
    set editable(val: boolean);
    get enableEmojiCompletion(): boolean;
    set enableEmojiCompletion(val: boolean);
    get hasFrame(): boolean;
    set hasFrame(val: boolean);
    get imModule(): string;
    set imModule(val: string);
    get innerBorder(): Border;
    set innerBorder(val: Border);
    get inputHints(): InputHints;
    set inputHints(val: InputHints);
    get inputPurpose(): InputPurpose;
    set inputPurpose(val: InputPurpose);
    get invisibleChar(): number;
    set invisibleChar(val: number);
    get invisibleCharSet(): boolean;
    set invisibleCharSet(val: boolean);
    get maxLength(): number;
    set maxLength(val: number);
    get maxWidthChars(): number;
    set maxWidthChars(val: number);
    get overwriteMode(): boolean;
    set overwriteMode(val: boolean);
    get placeholderText(): string;
    set placeholderText(val: string);
    get populateAll(): boolean;
    set populateAll(val: boolean);
    get primaryIconActivatable(): boolean;
    set primaryIconActivatable(val: boolean);
    get primaryIconGicon(): Gio.Icon;
    set primaryIconGicon(val: Gio.Icon);
    get primaryIconName(): string;
    set primaryIconName(val: string);
    get primaryIconPixbuf(): GdkPixbuf.Pixbuf;
    set primaryIconPixbuf(val: GdkPixbuf.Pixbuf);
    get primaryIconSensitive(): boolean;
    set primaryIconSensitive(val: boolean);
    get primaryIconStock(): string;
    set primaryIconStock(val: string);
    get primaryIconStorageType(): ImageType;
    get primaryIconTooltipMarkup(): string;
    set primaryIconTooltipMarkup(val: string);
    get primaryIconTooltipText(): string;
    set primaryIconTooltipText(val: string);
    get progressFraction(): number;
    set progressFraction(val: number);
    get progressPulseStep(): number;
    set progressPulseStep(val: number);
    get scrollOffset(): number;
    get secondaryIconActivatable(): boolean;
    set secondaryIconActivatable(val: boolean);
    get secondaryIconGicon(): Gio.Icon;
    set secondaryIconGicon(val: Gio.Icon);
    get secondaryIconName(): string;
    set secondaryIconName(val: string);
    get secondaryIconPixbuf(): GdkPixbuf.Pixbuf;
    set secondaryIconPixbuf(val: GdkPixbuf.Pixbuf);
    get secondaryIconSensitive(): boolean;
    set secondaryIconSensitive(val: boolean);
    get secondaryIconStock(): string;
    set secondaryIconStock(val: string);
    get secondaryIconStorageType(): ImageType;
    get secondaryIconTooltipMarkup(): string;
    set secondaryIconTooltipMarkup(val: string);
    get secondaryIconTooltipText(): string;
    set secondaryIconTooltipText(val: string);
    get selectionBound(): number;
    get shadowType(): ShadowType;
    set shadowType(val: ShadowType);
    get showEmojiIcon(): boolean;
    set showEmojiIcon(val: boolean);
    get tabs(): Pango.TabArray;
    set tabs(val: Pango.TabArray);
    get text(): string;
    set text(val: string);
    get textLength(): number;
    get truncateMultiline(): boolean;
    set truncateMultiline(val: boolean);
    get visibility(): boolean;
    set visibility(val: boolean);
    get widthChars(): number;
    set widthChars(val: number);
    get xalign(): number;
    set xalign(val: number);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "activate", callback: (_source: this) => void): number;
    connect_after(signal: "activate", callback: (_source: this) => void): number;
    emit(signal: "activate"): void;
    connect(signal: "backspace", callback: (_source: this) => void): number;
    connect_after(signal: "backspace", callback: (_source: this) => void): number;
    emit(signal: "backspace"): void;
    connect(signal: "copy-clipboard", callback: (_source: this) => void): number;
    connect_after(signal: "copy-clipboard", callback: (_source: this) => void): number;
    emit(signal: "copy-clipboard"): void;
    connect(signal: "cut-clipboard", callback: (_source: this) => void): number;
    connect_after(signal: "cut-clipboard", callback: (_source: this) => void): number;
    emit(signal: "cut-clipboard"): void;
    connect(signal: "delete-from-cursor", callback: (_source: this, type: DeleteType, count: number) => void): number;
    connect_after(
        signal: "delete-from-cursor",
        callback: (_source: this, type: DeleteType, count: number) => void
    ): number;
    emit(signal: "delete-from-cursor", type: DeleteType, count: number): void;
    connect(
        signal: "icon-press",
        callback: (_source: this, icon_pos: EntryIconPosition, event: Gdk.Event) => void
    ): number;
    connect_after(
        signal: "icon-press",
        callback: (_source: this, icon_pos: EntryIconPosition, event: Gdk.Event) => void
    ): number;
    emit(signal: "icon-press", icon_pos: EntryIconPosition, event: Gdk.Event): void;
    connect(
        signal: "icon-release",
        callback: (_source: this, icon_pos: EntryIconPosition, event: Gdk.Event) => void
    ): number;
    connect_after(
        signal: "icon-release",
        callback: (_source: this, icon_pos: EntryIconPosition, event: Gdk.Event) => void
    ): number;
    emit(signal: "icon-release", icon_pos: EntryIconPosition, event: Gdk.Event): void;
    connect(signal: "insert-at-cursor", callback: (_source: this, string: string) => void): number;
    connect_after(signal: "insert-at-cursor", callback: (_source: this, string: string) => void): number;
    emit(signal: "insert-at-cursor", string: string): void;
    connect(signal: "insert-emoji", callback: (_source: this) => void): number;
    connect_after(signal: "insert-emoji", callback: (_source: this) => void): number;
    emit(signal: "insert-emoji"): void;
    connect(
        signal: "move-cursor",
        callback: (_source: this, step: MovementStep, count: number, extend_selection: boolean) => void
    ): number;
    connect_after(
        signal: "move-cursor",
        callback: (_source: this, step: MovementStep, count: number, extend_selection: boolean) => void
    ): number;
    emit(signal: "move-cursor", step: MovementStep, count: number, extend_selection: boolean): void;
    connect(signal: "paste-clipboard", callback: (_source: this) => void): number;
    connect_after(signal: "paste-clipboard", callback: (_source: this) => void): number;
    emit(signal: "paste-clipboard"): void;
    connect(signal: "populate-popup", callback: (_source: this, widget: Widget) => void): number;
    connect_after(signal: "populate-popup", callback: (_source: this, widget: Widget) => void): number;
    emit(signal: "populate-popup", widget: Widget): void;
    connect(signal: "preedit-changed", callback: (_source: this, preedit: string) => void): number;
    connect_after(signal: "preedit-changed", callback: (_source: this, preedit: string) => void): number;
    emit(signal: "preedit-changed", preedit: string): void;
    connect(signal: "toggle-overwrite", callback: (_source: this) => void): number;
    connect_after(signal: "toggle-overwrite", callback: (_source: this) => void): number;
    emit(signal: "toggle-overwrite"): void;

    // Implemented Properties

    get editingCanceled(): boolean;
    set editingCanceled(val: boolean);

    // Constructors

    static ["new"](): Entry;
    static new_with_buffer(buffer: EntryBuffer): Entry;

    // Members

    get_activates_default(): boolean;
    get_alignment(): number;
    get_attributes(): Pango.AttrList | null;
    get_buffer(): EntryBuffer;
    get_completion(): EntryCompletion;
    get_current_icon_drag_source(): number;
    get_cursor_hadjustment(): Adjustment | null;
    get_has_frame(): boolean;
    get_icon_activatable(icon_pos: EntryIconPosition): boolean;
    get_icon_area(icon_pos: EntryIconPosition): Gdk.Rectangle;
    get_icon_at_pos(x: number, y: number): number;
    get_icon_gicon(icon_pos: EntryIconPosition): Gio.Icon | null;
    get_icon_name(icon_pos: EntryIconPosition): string | null;
    get_icon_pixbuf(icon_pos: EntryIconPosition): GdkPixbuf.Pixbuf | null;
    get_icon_sensitive(icon_pos: EntryIconPosition): boolean;
    get_icon_stock(icon_pos: EntryIconPosition): string;
    get_icon_storage_type(icon_pos: EntryIconPosition): ImageType;
    get_icon_tooltip_markup(icon_pos: EntryIconPosition): string | null;
    get_icon_tooltip_text(icon_pos: EntryIconPosition): string | null;
    get_inner_border(): Border | null;
    get_input_hints(): InputHints;
    get_input_purpose(): InputPurpose;
    get_invisible_char(): number;
    get_layout(): Pango.Layout;
    get_layout_offsets(): [number, number];
    get_max_length(): number;
    get_max_width_chars(): number;
    get_overwrite_mode(): boolean;
    get_placeholder_text(): string;
    get_progress_fraction(): number;
    get_progress_pulse_step(): number;
    get_tabs(): Pango.TabArray | null;
    get_text(): string;
    get_text_area(): Gdk.Rectangle;
    get_text_length(): number;
    get_visibility(): boolean;
    get_width_chars(): number;
    grab_focus_without_selecting(): void;
    im_context_filter_keypress(event: Gdk.EventKey): boolean;
    layout_index_to_text_index(layout_index: number): number;
    progress_pulse(): void;
    reset_im_context(): void;
    set_activates_default(setting: boolean): void;
    set_alignment(xalign: number): void;
    set_attributes(attrs: Pango.AttrList): void;
    set_buffer(buffer: EntryBuffer): void;
    set_completion(completion?: EntryCompletion | null): void;
    set_cursor_hadjustment(adjustment?: Adjustment | null): void;
    set_has_frame(setting: boolean): void;
    set_icon_activatable(icon_pos: EntryIconPosition, activatable: boolean): void;
    set_icon_drag_source(icon_pos: EntryIconPosition, target_list: TargetList, actions: Gdk.DragAction): void;
    set_icon_from_gicon(icon_pos: EntryIconPosition, icon?: Gio.Icon | null): void;
    set_icon_from_icon_name(icon_pos: EntryIconPosition, icon_name?: string | null): void;
    set_icon_from_pixbuf(icon_pos: EntryIconPosition, pixbuf?: GdkPixbuf.Pixbuf | null): void;
    set_icon_from_stock(icon_pos: EntryIconPosition, stock_id?: string | null): void;
    set_icon_sensitive(icon_pos: EntryIconPosition, sensitive: boolean): void;
    set_icon_tooltip_markup(icon_pos: EntryIconPosition, tooltip?: string | null): void;
    set_icon_tooltip_text(icon_pos: EntryIconPosition, tooltip?: string | null): void;
    set_inner_border(border?: Border | null): void;
    set_input_hints(hints: InputHints): void;
    set_input_purpose(purpose: InputPurpose): void;
    set_invisible_char(ch: number): void;
    set_max_length(max: number): void;
    set_max_width_chars(n_chars: number): void;
    set_overwrite_mode(overwrite: boolean): void;
    set_placeholder_text(text?: string | null): void;
    set_progress_fraction(fraction: number): void;
    set_progress_pulse_step(fraction: number): void;
    set_tabs(tabs: Pango.TabArray): void;
    set_text(text: string): void;
    set_visibility(visible: boolean): void;
    set_width_chars(n_chars: number): void;
    text_index_to_layout_index(text_index: number): number;
    unset_invisible_char(): void;
    vfunc_activate(): void;
    vfunc_backspace(): void;
    vfunc_copy_clipboard(): void;
    vfunc_cut_clipboard(): void;
    vfunc_delete_from_cursor(type: DeleteType, count: number): void;
    vfunc_get_frame_size(x: number, y: number, width: number, height: number): void;
    vfunc_get_text_area_size(x: number, y: number, width: number, height: number): void;
    vfunc_insert_at_cursor(str: string): void;
    vfunc_insert_emoji(): void;
    vfunc_move_cursor(step: MovementStep, count: number, extend_selection: boolean): void;
    vfunc_paste_clipboard(): void;
    vfunc_populate_popup(popup: Widget): void;
    vfunc_toggle_overwrite(): void;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
    editing_done(): void;
    remove_widget(): void;
    start_editing(event?: Gdk.Event | null): void;
    vfunc_editing_done(): void;
    vfunc_remove_widget(): void;
    vfunc_start_editing(event?: Gdk.Event | null): void;
    copy_clipboard(): void;
    cut_clipboard(): void;
    delete_selection(): void;
    delete_text(start_pos: number, end_pos: number): void;
    get_chars(start_pos: number, end_pos: number): string;
    get_editable(): boolean;
    get_position(): number;
    get_selection_bounds(): [boolean, number, number];
    insert_text(new_text: string, new_text_length: number, position: number): number;
    paste_clipboard(): void;
    select_region(start_pos: number, end_pos: number): void;
    set_editable(is_editable: boolean): void;
    set_position(position: number): void;
    vfunc_changed(): void;
    vfunc_delete_text(start_pos: number, end_pos: number): void;
    vfunc_do_delete_text(start_pos: number, end_pos: number): void;
    vfunc_do_insert_text(new_text: string, new_text_length: number, position: number): number;
    vfunc_get_chars(start_pos: number, end_pos: number): string;
    vfunc_get_position(): number;
    vfunc_get_selection_bounds(): [boolean, number, number];
    vfunc_insert_text(new_text: string, new_text_length: number, position: number): number;
    vfunc_set_position(position: number): void;
    vfunc_set_selection_bounds(start_pos: number, end_pos: number): void;
}
export module EntryAccessible {
    export interface ConstructorProperties extends WidgetAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class EntryAccessible extends WidgetAccessible implements Atk.Action, Atk.Component, Atk.EditableText, Atk.Text {
    static $gtype: GObject.GType<EntryAccessible>;

    constructor(properties?: Partial<EntryAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EntryAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: EntryAccessiblePrivate | any;

    // Implemented Members

    do_action(i: number): boolean;
    get_description(i: number): string | null;
    // Conflicted with Atk.Object.get_description
    get_description(...args: never[]): any;
    get_keybinding(i: number): string | null;
    get_localized_name(i: number): string | null;
    get_n_actions(): number;
    get_name(i: number): string | null;
    // Conflicted with Atk.Object.get_name
    get_name(...args: never[]): any;
    set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.set_description
    set_description(...args: never[]): any;
    vfunc_do_action(i: number): boolean;
    vfunc_get_description(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_description
    vfunc_get_description(...args: never[]): any;
    vfunc_get_keybinding(i: number): string | null;
    vfunc_get_localized_name(i: number): string | null;
    vfunc_get_n_actions(): number;
    vfunc_get_name(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_name
    vfunc_get_name(...args: never[]): any;
    vfunc_set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.vfunc_set_description
    vfunc_set_description(...args: never[]): any;
    contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    get_alpha(): number;
    get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    get_layer(): Atk.Layer;
    get_mdi_zorder(): number;
    get_position(coord_type: Atk.CoordType): [number, number];
    get_size(): [number, number];
    grab_focus(): boolean;
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    remove_focus_handler(handler_id: number): void;
    scroll_to(type: Atk.ScrollType): boolean;
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    set_size(width: number, height: number): boolean;
    vfunc_bounds_changed(bounds: Atk.Rectangle): void;
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_get_alpha(): number;
    vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    vfunc_get_layer(): Atk.Layer;
    vfunc_get_mdi_zorder(): number;
    vfunc_get_position(coord_type: Atk.CoordType): [number, number];
    vfunc_get_size(): [number, number];
    vfunc_grab_focus(): boolean;
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    vfunc_remove_focus_handler(handler_id: number): void;
    vfunc_scroll_to(type: Atk.ScrollType): boolean;
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_size(width: number, height: number): boolean;
    copy_text(start_pos: number, end_pos: number): void;
    cut_text(start_pos: number, end_pos: number): void;
    delete_text(start_pos: number, end_pos: number): void;
    insert_text(string: string, length: number, position: number): void;
    paste_text(position: number): void;
    set_run_attributes(attrib_set: Atk.AttributeSet, start_offset: number, end_offset: number): boolean;
    set_text_contents(string: string): void;
    vfunc_copy_text(start_pos: number, end_pos: number): void;
    vfunc_cut_text(start_pos: number, end_pos: number): void;
    vfunc_delete_text(start_pos: number, end_pos: number): void;
    vfunc_insert_text(string: string, length: number, position: number): void;
    vfunc_paste_text(position: number): void;
    vfunc_set_run_attributes(attrib_set: Atk.AttributeSet, start_offset: number, end_offset: number): boolean;
    vfunc_set_text_contents(string: string): void;
    add_selection(start_offset: number, end_offset: number): boolean;
    get_bounded_ranges(
        rect: Atk.TextRectangle,
        coord_type: Atk.CoordType,
        x_clip_type: Atk.TextClipType,
        y_clip_type: Atk.TextClipType
    ): Atk.TextRange[];
    get_caret_offset(): number;
    get_character_at_offset(offset: number): number;
    get_character_count(): number;
    get_character_extents(offset: number, coords: Atk.CoordType): [number, number, number, number];
    get_default_attributes(): Atk.AttributeSet;
    get_n_selections(): number;
    get_offset_at_point(x: number, y: number, coords: Atk.CoordType): number;
    get_range_extents(start_offset: number, end_offset: number, coord_type: Atk.CoordType): Atk.TextRectangle;
    get_run_attributes(offset: number): [Atk.AttributeSet, number, number];
    get_selection(selection_num: number): [string, number, number];
    get_string_at_offset(offset: number, granularity: Atk.TextGranularity): [string | null, number, number];
    get_text(start_offset: number, end_offset: number): string;
    get_text_after_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    get_text_at_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    get_text_before_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    remove_selection(selection_num: number): boolean;
    scroll_substring_to(start_offset: number, end_offset: number, type: Atk.ScrollType): boolean;
    scroll_substring_to_point(
        start_offset: number,
        end_offset: number,
        coords: Atk.CoordType,
        x: number,
        y: number
    ): boolean;
    set_caret_offset(offset: number): boolean;
    set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
    vfunc_add_selection(start_offset: number, end_offset: number): boolean;
    vfunc_get_bounded_ranges(
        rect: Atk.TextRectangle,
        coord_type: Atk.CoordType,
        x_clip_type: Atk.TextClipType,
        y_clip_type: Atk.TextClipType
    ): Atk.TextRange[];
    vfunc_get_caret_offset(): number;
    vfunc_get_character_at_offset(offset: number): number;
    vfunc_get_character_count(): number;
    vfunc_get_character_extents(offset: number, coords: Atk.CoordType): [number, number, number, number];
    vfunc_get_default_attributes(): Atk.AttributeSet;
    vfunc_get_n_selections(): number;
    vfunc_get_offset_at_point(x: number, y: number, coords: Atk.CoordType): number;
    vfunc_get_range_extents(start_offset: number, end_offset: number, coord_type: Atk.CoordType): Atk.TextRectangle;
    vfunc_get_run_attributes(offset: number): [Atk.AttributeSet, number, number];
    vfunc_get_selection(selection_num: number): [string, number, number];
    vfunc_get_string_at_offset(offset: number, granularity: Atk.TextGranularity): [string | null, number, number];
    vfunc_get_text(start_offset: number, end_offset: number): string;
    vfunc_get_text_after_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    vfunc_get_text_at_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    vfunc_get_text_before_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    vfunc_remove_selection(selection_num: number): boolean;
    vfunc_scroll_substring_to(start_offset: number, end_offset: number, type: Atk.ScrollType): boolean;
    vfunc_scroll_substring_to_point(
        start_offset: number,
        end_offset: number,
        coords: Atk.CoordType,
        x: number,
        y: number
    ): boolean;
    vfunc_set_caret_offset(offset: number): boolean;
    vfunc_set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
    vfunc_text_attributes_changed(): void;
    vfunc_text_caret_moved(location: number): void;
    vfunc_text_changed(position: number, length: number): void;
    vfunc_text_selection_changed(): void;
}
export module EntryBuffer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        length: number;
        maxLength: number;
        text: string;
    }
}
export class EntryBuffer extends GObject.Object {
    static $gtype: GObject.GType<EntryBuffer>;

    constructor(properties?: Partial<EntryBuffer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EntryBuffer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get length(): number;
    get maxLength(): number;
    set maxLength(val: number);
    get text(): string;
    set text(val: string);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "deleted-text", callback: (_source: this, position: number, n_chars: number) => void): number;
    connect_after(signal: "deleted-text", callback: (_source: this, position: number, n_chars: number) => void): number;
    emit(signal: "deleted-text", position: number, n_chars: number): void;
    connect(
        signal: "inserted-text",
        callback: (_source: this, position: number, chars: string, n_chars: number) => void
    ): number;
    connect_after(
        signal: "inserted-text",
        callback: (_source: this, position: number, chars: string, n_chars: number) => void
    ): number;
    emit(signal: "inserted-text", position: number, chars: string, n_chars: number): void;

    // Constructors

    static ["new"](initial_chars: string | null, n_initial_chars: number): EntryBuffer;

    // Members

    delete_text(position: number, n_chars: number): number;
    emit_deleted_text(position: number, n_chars: number): void;
    emit_inserted_text(position: number, chars: string, n_chars: number): void;
    get_bytes(): number;
    get_length(): number;
    get_max_length(): number;
    get_text(): string;
    insert_text(position: number, chars: string, n_chars: number): number;
    set_max_length(max_length: number): void;
    set_text(chars: string, n_chars: number): void;
    vfunc_delete_text(position: number, n_chars: number): number;
    vfunc_deleted_text(position: number, n_chars: number): void;
    vfunc_get_length(): number;
    vfunc_get_text(n_bytes: number): string;
    vfunc_insert_text(position: number, chars: string, n_chars: number): number;
    vfunc_inserted_text(position: number, chars: string, n_chars: number): void;
}
export module EntryCompletion {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        cellArea: CellArea;
        inlineCompletion: boolean;
        inlineSelection: boolean;
        minimumKeyLength: number;
        model: TreeModel;
        popupCompletion: boolean;
        popupSetWidth: boolean;
        popupSingleMatch: boolean;
        textColumn: number;
    }
}
export class EntryCompletion extends GObject.Object implements Buildable, CellLayout {
    static $gtype: GObject.GType<EntryCompletion>;

    constructor(properties?: Partial<EntryCompletion.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EntryCompletion.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get cellArea(): CellArea;
    get inlineCompletion(): boolean;
    set inlineCompletion(val: boolean);
    get inlineSelection(): boolean;
    set inlineSelection(val: boolean);
    get minimumKeyLength(): number;
    set minimumKeyLength(val: number);
    get model(): TreeModel;
    set model(val: TreeModel);
    get popupCompletion(): boolean;
    set popupCompletion(val: boolean);
    get popupSetWidth(): boolean;
    set popupSetWidth(val: boolean);
    get popupSingleMatch(): boolean;
    set popupSingleMatch(val: boolean);
    get textColumn(): number;
    set textColumn(val: number);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "action-activated", callback: (_source: this, index: number) => void): number;
    connect_after(signal: "action-activated", callback: (_source: this, index: number) => void): number;
    emit(signal: "action-activated", index: number): void;
    connect(signal: "cursor-on-match", callback: (_source: this, model: TreeModel, iter: TreeIter) => boolean): number;
    connect_after(
        signal: "cursor-on-match",
        callback: (_source: this, model: TreeModel, iter: TreeIter) => boolean
    ): number;
    emit(signal: "cursor-on-match", model: TreeModel, iter: TreeIter): void;
    connect(signal: "insert-prefix", callback: (_source: this, prefix: string) => boolean): number;
    connect_after(signal: "insert-prefix", callback: (_source: this, prefix: string) => boolean): number;
    emit(signal: "insert-prefix", prefix: string): void;
    connect(signal: "match-selected", callback: (_source: this, model: TreeModel, iter: TreeIter) => boolean): number;
    connect_after(
        signal: "match-selected",
        callback: (_source: this, model: TreeModel, iter: TreeIter) => boolean
    ): number;
    emit(signal: "match-selected", model: TreeModel, iter: TreeIter): void;
    connect(signal: "no-matches", callback: (_source: this) => void): number;
    connect_after(signal: "no-matches", callback: (_source: this) => void): number;
    emit(signal: "no-matches"): void;

    // Constructors

    static ["new"](): EntryCompletion;
    static new_with_area(area: CellArea): EntryCompletion;

    // Members

    complete(): void;
    compute_prefix(key: string): string | null;
    delete_action(index_: number): void;
    get_completion_prefix(): string;
    get_entry(): Widget;
    get_inline_completion(): boolean;
    get_inline_selection(): boolean;
    get_minimum_key_length(): number;
    get_model(): TreeModel | null;
    get_popup_completion(): boolean;
    get_popup_set_width(): boolean;
    get_popup_single_match(): boolean;
    get_text_column(): number;
    insert_action_markup(index_: number, markup: string): void;
    insert_action_text(index_: number, text: string): void;
    insert_prefix(): void;
    set_inline_completion(inline_completion: boolean): void;
    set_inline_selection(inline_selection: boolean): void;
    set_match_func(func: EntryCompletionMatchFunc): void;
    set_minimum_key_length(length: number): void;
    set_model(model?: TreeModel | null): void;
    set_popup_completion(popup_completion: boolean): void;
    set_popup_set_width(popup_set_width: boolean): void;
    set_popup_single_match(popup_single_match: boolean): void;
    set_text_column(column: number): void;
    vfunc_action_activated(index_: number): void;
    vfunc_cursor_on_match(model: TreeModel, iter: TreeIter): boolean;
    vfunc_insert_prefix(prefix: string): boolean;
    vfunc_match_selected(model: TreeModel, iter: TreeIter): boolean;
    vfunc_no_matches(): void;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
    add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    clear(): void;
    clear_attributes(cell: CellRenderer): void;
    get_area(): CellArea | null;
    get_cells(): CellRenderer[];
    pack_end(cell: CellRenderer, expand: boolean): void;
    pack_start(cell: CellRenderer, expand: boolean): void;
    reorder(cell: CellRenderer, position: number): void;
    set_cell_data_func(cell: CellRenderer, func?: CellLayoutDataFunc | null): void;
    vfunc_add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    vfunc_clear(): void;
    vfunc_clear_attributes(cell: CellRenderer): void;
    vfunc_get_area(): CellArea | null;
    vfunc_get_cells(): CellRenderer[];
    vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
    vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
    vfunc_reorder(cell: CellRenderer, position: number): void;
    vfunc_set_cell_data_func(cell: CellRenderer, func?: CellLayoutDataFunc | null): void;
}
export module EntryIconAccessible {
    export interface ConstructorProperties extends Atk.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class EntryIconAccessible extends Atk.Object implements Atk.Action, Atk.Component {
    static $gtype: GObject.GType<EntryIconAccessible>;

    constructor(properties?: Partial<EntryIconAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EntryIconAccessible.ConstructorProperties>, ...args: any[]): void;

    // Implemented Members

    do_action(i: number): boolean;
    get_description(i: number): string | null;
    // Conflicted with Atk.Object.get_description
    get_description(...args: never[]): any;
    get_keybinding(i: number): string | null;
    get_localized_name(i: number): string | null;
    get_n_actions(): number;
    get_name(i: number): string | null;
    // Conflicted with Atk.Object.get_name
    get_name(...args: never[]): any;
    set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.set_description
    set_description(...args: never[]): any;
    vfunc_do_action(i: number): boolean;
    vfunc_get_description(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_description
    vfunc_get_description(...args: never[]): any;
    vfunc_get_keybinding(i: number): string | null;
    vfunc_get_localized_name(i: number): string | null;
    vfunc_get_n_actions(): number;
    vfunc_get_name(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_name
    vfunc_get_name(...args: never[]): any;
    vfunc_set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.vfunc_set_description
    vfunc_set_description(...args: never[]): any;
    contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    get_alpha(): number;
    get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    get_layer(): Atk.Layer;
    get_mdi_zorder(): number;
    get_position(coord_type: Atk.CoordType): [number, number];
    get_size(): [number, number];
    grab_focus(): boolean;
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    remove_focus_handler(handler_id: number): void;
    scroll_to(type: Atk.ScrollType): boolean;
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    set_size(width: number, height: number): boolean;
    vfunc_bounds_changed(bounds: Atk.Rectangle): void;
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_get_alpha(): number;
    vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    vfunc_get_layer(): Atk.Layer;
    vfunc_get_mdi_zorder(): number;
    vfunc_get_position(coord_type: Atk.CoordType): [number, number];
    vfunc_get_size(): [number, number];
    vfunc_grab_focus(): boolean;
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    vfunc_remove_focus_handler(handler_id: number): void;
    vfunc_scroll_to(type: Atk.ScrollType): boolean;
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_size(width: number, height: number): boolean;
}
export module EventBox {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        aboveChild: boolean;
        visibleWindow: boolean;
    }
}
export class EventBox extends Bin implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<EventBox>;

    constructor(properties?: Partial<EventBox.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EventBox.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get aboveChild(): boolean;
    set aboveChild(val: boolean);
    get visibleWindow(): boolean;
    set visibleWindow(val: boolean);

    // Fields
    bin: Bin;

    // Constructors

    static ["new"](): EventBox;

    // Members

    get_above_child(): boolean;
    get_visible_window(): boolean;
    set_above_child(above_child: boolean): void;
    set_visible_window(visible_window: boolean): void;
}
export module EventController {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        propagationPhase: PropagationPhase;
        widget: Widget;
    }
}
export abstract class EventController extends GObject.Object {
    static $gtype: GObject.GType<EventController>;

    constructor(properties?: Partial<EventController.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EventController.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get propagationPhase(): PropagationPhase;
    set propagationPhase(val: PropagationPhase);
    get widget(): Widget;

    // Members

    get_propagation_phase(): PropagationPhase;
    get_widget(): Widget;
    handle_event(event: Gdk.Event): boolean;
    reset(): void;
    set_propagation_phase(phase: PropagationPhase): void;
}
export module EventControllerKey {
    export interface ConstructorProperties extends EventController.ConstructorProperties {
        [key: string]: any;
    }
}
export class EventControllerKey extends EventController {
    static $gtype: GObject.GType<EventControllerKey>;

    constructor(properties?: Partial<EventControllerKey.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EventControllerKey.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "focus-in", callback: (_source: this) => void): number;
    connect_after(signal: "focus-in", callback: (_source: this) => void): number;
    emit(signal: "focus-in"): void;
    connect(signal: "focus-out", callback: (_source: this) => void): number;
    connect_after(signal: "focus-out", callback: (_source: this) => void): number;
    emit(signal: "focus-out"): void;
    connect(signal: "im-update", callback: (_source: this) => void): number;
    connect_after(signal: "im-update", callback: (_source: this) => void): number;
    emit(signal: "im-update"): void;
    connect(
        signal: "key-pressed",
        callback: (_source: this, keyval: number, keycode: number, state: Gdk.ModifierType) => boolean
    ): number;
    connect_after(
        signal: "key-pressed",
        callback: (_source: this, keyval: number, keycode: number, state: Gdk.ModifierType) => boolean
    ): number;
    emit(signal: "key-pressed", keyval: number, keycode: number, state: Gdk.ModifierType): void;
    connect(
        signal: "key-released",
        callback: (_source: this, keyval: number, keycode: number, state: Gdk.ModifierType) => void
    ): number;
    connect_after(
        signal: "key-released",
        callback: (_source: this, keyval: number, keycode: number, state: Gdk.ModifierType) => void
    ): number;
    emit(signal: "key-released", keyval: number, keycode: number, state: Gdk.ModifierType): void;
    connect(signal: "modifiers", callback: (_source: this, object: Gdk.ModifierType) => boolean): number;
    connect_after(signal: "modifiers", callback: (_source: this, object: Gdk.ModifierType) => boolean): number;
    emit(signal: "modifiers", object: Gdk.ModifierType): void;

    // Constructors

    static ["new"](widget: Widget): EventControllerKey;

    // Members

    forward(widget: Widget): boolean;
    get_group(): number;
    get_im_context(): IMContext;
    set_im_context(im_context: IMContext): void;
}
export module EventControllerMotion {
    export interface ConstructorProperties extends EventController.ConstructorProperties {
        [key: string]: any;
    }
}
export class EventControllerMotion extends EventController {
    static $gtype: GObject.GType<EventControllerMotion>;

    constructor(properties?: Partial<EventControllerMotion.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EventControllerMotion.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "enter", callback: (_source: this, x: number, y: number) => void): number;
    connect_after(signal: "enter", callback: (_source: this, x: number, y: number) => void): number;
    emit(signal: "enter", x: number, y: number): void;
    connect(signal: "leave", callback: (_source: this) => void): number;
    connect_after(signal: "leave", callback: (_source: this) => void): number;
    emit(signal: "leave"): void;
    connect(signal: "motion", callback: (_source: this, x: number, y: number) => void): number;
    connect_after(signal: "motion", callback: (_source: this, x: number, y: number) => void): number;
    emit(signal: "motion", x: number, y: number): void;

    // Constructors

    static ["new"](widget: Widget): EventControllerMotion;
}
export module EventControllerScroll {
    export interface ConstructorProperties extends EventController.ConstructorProperties {
        [key: string]: any;
        flags: EventControllerScrollFlags;
    }
}
export class EventControllerScroll extends EventController {
    static $gtype: GObject.GType<EventControllerScroll>;

    constructor(properties?: Partial<EventControllerScroll.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<EventControllerScroll.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get flags(): EventControllerScrollFlags;
    set flags(val: EventControllerScrollFlags);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "decelerate", callback: (_source: this, vel_x: number, vel_y: number) => void): number;
    connect_after(signal: "decelerate", callback: (_source: this, vel_x: number, vel_y: number) => void): number;
    emit(signal: "decelerate", vel_x: number, vel_y: number): void;
    connect(signal: "scroll", callback: (_source: this, dx: number, dy: number) => void): number;
    connect_after(signal: "scroll", callback: (_source: this, dx: number, dy: number) => void): number;
    emit(signal: "scroll", dx: number, dy: number): void;
    connect(signal: "scroll-begin", callback: (_source: this) => void): number;
    connect_after(signal: "scroll-begin", callback: (_source: this) => void): number;
    emit(signal: "scroll-begin"): void;
    connect(signal: "scroll-end", callback: (_source: this) => void): number;
    connect_after(signal: "scroll-end", callback: (_source: this) => void): number;
    emit(signal: "scroll-end"): void;

    // Constructors

    static ["new"](widget: Widget, flags: EventControllerScrollFlags): EventControllerScroll;

    // Members

    get_flags(): EventControllerScrollFlags;
    set_flags(flags: EventControllerScrollFlags): void;
}
export module Expander {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        expanded: boolean;
        label: string;
        labelFill: boolean;
        labelWidget: Widget;
        resizeToplevel: boolean;
        spacing: number;
        useMarkup: boolean;
        useUnderline: boolean;
    }
}
export class Expander extends Bin implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Expander>;

    constructor(properties?: Partial<Expander.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Expander.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get expanded(): boolean;
    set expanded(val: boolean);
    get label(): string;
    set label(val: string);
    get labelFill(): boolean;
    set labelFill(val: boolean);
    get labelWidget(): Widget;
    set labelWidget(val: Widget);
    get resizeToplevel(): boolean;
    set resizeToplevel(val: boolean);
    get spacing(): number;
    set spacing(val: number);
    get useMarkup(): boolean;
    set useMarkup(val: boolean);
    get useUnderline(): boolean;
    set useUnderline(val: boolean);

    // Fields
    bin: Bin;
    priv: ExpanderPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "activate", callback: (_source: this) => void): number;
    connect_after(signal: "activate", callback: (_source: this) => void): number;
    emit(signal: "activate"): void;

    // Constructors

    static ["new"](label?: string | null): Expander;
    static new_with_mnemonic(label?: string | null): Expander;

    // Members

    get_expanded(): boolean;
    get_label(): string | null;
    get_label_fill(): boolean;
    get_label_widget(): Widget | null;
    get_resize_toplevel(): boolean;
    get_spacing(): number;
    get_use_markup(): boolean;
    get_use_underline(): boolean;
    set_expanded(expanded: boolean): void;
    set_label(label?: string | null): void;
    set_label_fill(label_fill: boolean): void;
    set_label_widget(label_widget?: Widget | null): void;
    set_resize_toplevel(resize_toplevel: boolean): void;
    set_spacing(spacing: number): void;
    set_use_markup(use_markup: boolean): void;
    set_use_underline(use_underline: boolean): void;
    vfunc_activate(): void;
}
export module ExpanderAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ExpanderAccessible extends ContainerAccessible implements Atk.Action, Atk.Component {
    static $gtype: GObject.GType<ExpanderAccessible>;

    constructor(properties?: Partial<ExpanderAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ExpanderAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ExpanderAccessiblePrivate | any;

    // Implemented Members

    do_action(i: number): boolean;
    get_description(i: number): string | null;
    // Conflicted with Atk.Object.get_description
    get_description(...args: never[]): any;
    get_keybinding(i: number): string | null;
    get_localized_name(i: number): string | null;
    get_n_actions(): number;
    get_name(i: number): string | null;
    // Conflicted with Atk.Object.get_name
    get_name(...args: never[]): any;
    set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.set_description
    set_description(...args: never[]): any;
    vfunc_do_action(i: number): boolean;
    vfunc_get_description(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_description
    vfunc_get_description(...args: never[]): any;
    vfunc_get_keybinding(i: number): string | null;
    vfunc_get_localized_name(i: number): string | null;
    vfunc_get_n_actions(): number;
    vfunc_get_name(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_name
    vfunc_get_name(...args: never[]): any;
    vfunc_set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.vfunc_set_description
    vfunc_set_description(...args: never[]): any;
}
export module FileChooserButton {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        dialog: FileChooser;
        title: string;
        widthChars: number;
    }
}
export class FileChooserButton extends Box implements Atk.ImplementorIface, Buildable, FileChooser, Orientable {
    static $gtype: GObject.GType<FileChooserButton>;

    constructor(properties?: Partial<FileChooserButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FileChooserButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    set dialog(val: FileChooser);
    get title(): string;
    set title(val: string);
    get widthChars(): number;
    set widthChars(val: number);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "file-set", callback: (_source: this) => void): number;
    connect_after(signal: "file-set", callback: (_source: this) => void): number;
    emit(signal: "file-set"): void;

    // Implemented Properties

    get action(): FileChooserAction;
    set action(val: FileChooserAction);
    get createFolders(): boolean;
    set createFolders(val: boolean);
    get doOverwriteConfirmation(): boolean;
    set doOverwriteConfirmation(val: boolean);
    get extraWidget(): Widget;
    set extraWidget(val: Widget);
    get filter(): FileFilter;
    set filter(val: FileFilter);
    get localOnly(): boolean;
    set localOnly(val: boolean);
    get previewWidget(): Widget;
    set previewWidget(val: Widget);
    get previewWidgetActive(): boolean;
    set previewWidgetActive(val: boolean);
    get selectMultiple(): boolean;
    set selectMultiple(val: boolean);
    get showHidden(): boolean;
    set showHidden(val: boolean);
    get usePreviewLabel(): boolean;
    set usePreviewLabel(val: boolean);
    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](title: string, action: FileChooserAction): FileChooserButton;
    // Conflicted with Gtk.Box.new
    static ["new"](...args: never[]): any;
    static new_with_dialog(dialog: Dialog): FileChooserButton;

    // Members

    get_focus_on_click(): boolean;
    get_title(): string;
    get_width_chars(): number;
    set_focus_on_click(focus_on_click: boolean): void;
    set_title(title: string): void;
    set_width_chars(n_chars: number): void;
    vfunc_file_set(): void;

    // Implemented Members

    add_choice(id: string, label: string, options?: string[] | null, option_labels?: string[] | null): void;
    add_filter(filter: FileFilter): void;
    add_shortcut_folder(folder: string): boolean;
    add_shortcut_folder_uri(uri: string): boolean;
    get_action(): FileChooserAction;
    get_choice(id: string): string;
    get_create_folders(): boolean;
    get_current_folder(): string | null;
    get_current_folder_file(): Gio.File | null;
    get_current_folder_uri(): string | null;
    get_current_name(): string;
    get_do_overwrite_confirmation(): boolean;
    get_extra_widget(): Widget | null;
    get_file(): Gio.File;
    get_filename(): string | null;
    get_filenames(): string[];
    get_files(): Gio.File[];
    get_filter(): FileFilter | null;
    get_local_only(): boolean;
    get_preview_file(): Gio.File | null;
    get_preview_filename(): string | null;
    get_preview_uri(): string | null;
    get_preview_widget(): Widget | null;
    get_preview_widget_active(): boolean;
    get_select_multiple(): boolean;
    get_show_hidden(): boolean;
    get_uri(): string | null;
    get_uris(): string[];
    get_use_preview_label(): boolean;
    list_filters(): FileFilter[];
    list_shortcut_folder_uris(): string[] | null;
    list_shortcut_folders(): string[] | null;
    remove_choice(id: string): void;
    remove_filter(filter: FileFilter): void;
    remove_shortcut_folder(folder: string): boolean;
    remove_shortcut_folder_uri(uri: string): boolean;
    select_all(): void;
    select_file(file: Gio.File): boolean;
    select_filename(filename: string): boolean;
    select_uri(uri: string): boolean;
    set_action(action: FileChooserAction): void;
    set_choice(id: string, option: string): void;
    set_create_folders(create_folders: boolean): void;
    set_current_folder(filename: string): boolean;
    set_current_folder_file(file: Gio.File): boolean;
    set_current_folder_uri(uri: string): boolean;
    set_current_name(name: string): void;
    set_do_overwrite_confirmation(do_overwrite_confirmation: boolean): void;
    set_extra_widget(extra_widget: Widget): void;
    set_file(file: Gio.File): boolean;
    set_filename(filename: string): boolean;
    set_filter(filter: FileFilter): void;
    set_local_only(local_only: boolean): void;
    set_preview_widget(preview_widget: Widget): void;
    set_preview_widget_active(active: boolean): void;
    set_select_multiple(select_multiple: boolean): void;
    set_show_hidden(show_hidden: boolean): void;
    set_uri(uri: string): boolean;
    set_use_preview_label(use_label: boolean): void;
    unselect_all(): void;
    unselect_file(file: Gio.File): void;
    unselect_filename(filename: string): void;
    unselect_uri(uri: string): void;
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module FileChooserDialog {
    export interface ConstructorProperties extends Dialog.ConstructorProperties {
        [key: string]: any;
    }
}
export class FileChooserDialog extends Dialog implements Atk.ImplementorIface, Buildable, FileChooser {
    static $gtype: GObject.GType<FileChooserDialog>;

    constructor(properties?: Partial<FileChooserDialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FileChooserDialog.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: FileChooserDialogPrivate | any;

    // Implemented Properties

    get action(): FileChooserAction;
    set action(val: FileChooserAction);
    get createFolders(): boolean;
    set createFolders(val: boolean);
    get doOverwriteConfirmation(): boolean;
    set doOverwriteConfirmation(val: boolean);
    get extraWidget(): Widget;
    set extraWidget(val: Widget);
    get filter(): FileFilter;
    set filter(val: FileFilter);
    get localOnly(): boolean;
    set localOnly(val: boolean);
    get previewWidget(): Widget;
    set previewWidget(val: Widget);
    get previewWidgetActive(): boolean;
    set previewWidgetActive(val: boolean);
    get selectMultiple(): boolean;
    set selectMultiple(val: boolean);
    get showHidden(): boolean;
    set showHidden(val: boolean);
    get usePreviewLabel(): boolean;
    set usePreviewLabel(val: boolean);

    // Implemented Members

    add_choice(id: string, label: string, options?: string[] | null, option_labels?: string[] | null): void;
    add_filter(filter: FileFilter): void;
    add_shortcut_folder(folder: string): boolean;
    add_shortcut_folder_uri(uri: string): boolean;
    get_action(): FileChooserAction;
    get_choice(id: string): string;
    get_create_folders(): boolean;
    get_current_folder(): string | null;
    get_current_folder_file(): Gio.File | null;
    get_current_folder_uri(): string | null;
    get_current_name(): string;
    get_do_overwrite_confirmation(): boolean;
    get_extra_widget(): Widget | null;
    get_file(): Gio.File;
    get_filename(): string | null;
    get_filenames(): string[];
    get_files(): Gio.File[];
    get_filter(): FileFilter | null;
    get_local_only(): boolean;
    get_preview_file(): Gio.File | null;
    get_preview_filename(): string | null;
    get_preview_uri(): string | null;
    get_preview_widget(): Widget | null;
    get_preview_widget_active(): boolean;
    get_select_multiple(): boolean;
    get_show_hidden(): boolean;
    get_uri(): string | null;
    get_uris(): string[];
    get_use_preview_label(): boolean;
    list_filters(): FileFilter[];
    list_shortcut_folder_uris(): string[] | null;
    list_shortcut_folders(): string[] | null;
    remove_choice(id: string): void;
    remove_filter(filter: FileFilter): void;
    remove_shortcut_folder(folder: string): boolean;
    remove_shortcut_folder_uri(uri: string): boolean;
    select_all(): void;
    select_file(file: Gio.File): boolean;
    select_filename(filename: string): boolean;
    select_uri(uri: string): boolean;
    set_action(action: FileChooserAction): void;
    set_choice(id: string, option: string): void;
    set_create_folders(create_folders: boolean): void;
    set_current_folder(filename: string): boolean;
    set_current_folder_file(file: Gio.File): boolean;
    set_current_folder_uri(uri: string): boolean;
    set_current_name(name: string): void;
    set_do_overwrite_confirmation(do_overwrite_confirmation: boolean): void;
    set_extra_widget(extra_widget: Widget): void;
    set_file(file: Gio.File): boolean;
    set_filename(filename: string): boolean;
    set_filter(filter: FileFilter): void;
    set_local_only(local_only: boolean): void;
    set_preview_widget(preview_widget: Widget): void;
    set_preview_widget_active(active: boolean): void;
    set_select_multiple(select_multiple: boolean): void;
    set_show_hidden(show_hidden: boolean): void;
    set_uri(uri: string): boolean;
    set_use_preview_label(use_label: boolean): void;
    unselect_all(): void;
    unselect_file(file: Gio.File): void;
    unselect_filename(filename: string): void;
    unselect_uri(uri: string): void;
}
export module FileChooserNative {
    export interface ConstructorProperties extends NativeDialog.ConstructorProperties {
        [key: string]: any;
        acceptLabel: string;
        cancelLabel: string;
    }
}
export class FileChooserNative extends NativeDialog implements FileChooser {
    static $gtype: GObject.GType<FileChooserNative>;

    constructor(properties?: Partial<FileChooserNative.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FileChooserNative.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get acceptLabel(): string;
    set acceptLabel(val: string);
    get cancelLabel(): string;
    set cancelLabel(val: string);

    // Implemented Properties

    get action(): FileChooserAction;
    set action(val: FileChooserAction);
    get createFolders(): boolean;
    set createFolders(val: boolean);
    get doOverwriteConfirmation(): boolean;
    set doOverwriteConfirmation(val: boolean);
    get extraWidget(): Widget;
    set extraWidget(val: Widget);
    get filter(): FileFilter;
    set filter(val: FileFilter);
    get localOnly(): boolean;
    set localOnly(val: boolean);
    get previewWidget(): Widget;
    set previewWidget(val: Widget);
    get previewWidgetActive(): boolean;
    set previewWidgetActive(val: boolean);
    get selectMultiple(): boolean;
    set selectMultiple(val: boolean);
    get showHidden(): boolean;
    set showHidden(val: boolean);
    get usePreviewLabel(): boolean;
    set usePreviewLabel(val: boolean);

    // Constructors

    static ["new"](
        title: string | null,
        parent: Window | null,
        action: FileChooserAction,
        accept_label?: string | null,
        cancel_label?: string | null
    ): FileChooserNative;

    // Members

    get_accept_label(): string | null;
    get_cancel_label(): string | null;
    set_accept_label(accept_label?: string | null): void;
    set_cancel_label(cancel_label?: string | null): void;

    // Implemented Members

    add_choice(id: string, label: string, options?: string[] | null, option_labels?: string[] | null): void;
    add_filter(filter: FileFilter): void;
    add_shortcut_folder(folder: string): boolean;
    add_shortcut_folder_uri(uri: string): boolean;
    get_action(): FileChooserAction;
    get_choice(id: string): string;
    get_create_folders(): boolean;
    get_current_folder(): string | null;
    get_current_folder_file(): Gio.File | null;
    get_current_folder_uri(): string | null;
    get_current_name(): string;
    get_do_overwrite_confirmation(): boolean;
    get_extra_widget(): Widget | null;
    get_file(): Gio.File;
    get_filename(): string | null;
    get_filenames(): string[];
    get_files(): Gio.File[];
    get_filter(): FileFilter | null;
    get_local_only(): boolean;
    get_preview_file(): Gio.File | null;
    get_preview_filename(): string | null;
    get_preview_uri(): string | null;
    get_preview_widget(): Widget | null;
    get_preview_widget_active(): boolean;
    get_select_multiple(): boolean;
    get_show_hidden(): boolean;
    get_uri(): string | null;
    get_uris(): string[];
    get_use_preview_label(): boolean;
    list_filters(): FileFilter[];
    list_shortcut_folder_uris(): string[] | null;
    list_shortcut_folders(): string[] | null;
    remove_choice(id: string): void;
    remove_filter(filter: FileFilter): void;
    remove_shortcut_folder(folder: string): boolean;
    remove_shortcut_folder_uri(uri: string): boolean;
    select_all(): void;
    select_file(file: Gio.File): boolean;
    select_filename(filename: string): boolean;
    select_uri(uri: string): boolean;
    set_action(action: FileChooserAction): void;
    set_choice(id: string, option: string): void;
    set_create_folders(create_folders: boolean): void;
    set_current_folder(filename: string): boolean;
    set_current_folder_file(file: Gio.File): boolean;
    set_current_folder_uri(uri: string): boolean;
    set_current_name(name: string): void;
    set_do_overwrite_confirmation(do_overwrite_confirmation: boolean): void;
    set_extra_widget(extra_widget: Widget): void;
    set_file(file: Gio.File): boolean;
    set_filename(filename: string): boolean;
    set_filter(filter: FileFilter): void;
    set_local_only(local_only: boolean): void;
    set_preview_widget(preview_widget: Widget): void;
    set_preview_widget_active(active: boolean): void;
    set_select_multiple(select_multiple: boolean): void;
    set_show_hidden(show_hidden: boolean): void;
    set_uri(uri: string): boolean;
    set_use_preview_label(use_label: boolean): void;
    unselect_all(): void;
    unselect_file(file: Gio.File): void;
    unselect_filename(filename: string): void;
    unselect_uri(uri: string): void;
}
export module FileChooserWidget {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        searchMode: boolean;
        subtitle: string;
    }
}
export class FileChooserWidget extends Box implements Atk.ImplementorIface, Buildable, FileChooser, Orientable {
    static $gtype: GObject.GType<FileChooserWidget>;

    constructor(properties?: Partial<FileChooserWidget.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FileChooserWidget.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get searchMode(): boolean;
    set searchMode(val: boolean);
    get subtitle(): string;

    // Fields
    priv: FileChooserWidgetPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "desktop-folder", callback: (_source: this) => void): number;
    connect_after(signal: "desktop-folder", callback: (_source: this) => void): number;
    emit(signal: "desktop-folder"): void;
    connect(signal: "down-folder", callback: (_source: this) => void): number;
    connect_after(signal: "down-folder", callback: (_source: this) => void): number;
    emit(signal: "down-folder"): void;
    connect(signal: "home-folder", callback: (_source: this) => void): number;
    connect_after(signal: "home-folder", callback: (_source: this) => void): number;
    emit(signal: "home-folder"): void;
    connect(signal: "location-popup", callback: (_source: this, path: string) => void): number;
    connect_after(signal: "location-popup", callback: (_source: this, path: string) => void): number;
    emit(signal: "location-popup", path: string): void;
    connect(signal: "location-popup-on-paste", callback: (_source: this) => void): number;
    connect_after(signal: "location-popup-on-paste", callback: (_source: this) => void): number;
    emit(signal: "location-popup-on-paste"): void;
    connect(signal: "location-toggle-popup", callback: (_source: this) => void): number;
    connect_after(signal: "location-toggle-popup", callback: (_source: this) => void): number;
    emit(signal: "location-toggle-popup"): void;
    connect(signal: "places-shortcut", callback: (_source: this) => void): number;
    connect_after(signal: "places-shortcut", callback: (_source: this) => void): number;
    emit(signal: "places-shortcut"): void;
    connect(signal: "quick-bookmark", callback: (_source: this, bookmark_index: number) => void): number;
    connect_after(signal: "quick-bookmark", callback: (_source: this, bookmark_index: number) => void): number;
    emit(signal: "quick-bookmark", bookmark_index: number): void;
    connect(signal: "recent-shortcut", callback: (_source: this) => void): number;
    connect_after(signal: "recent-shortcut", callback: (_source: this) => void): number;
    emit(signal: "recent-shortcut"): void;
    connect(signal: "search-shortcut", callback: (_source: this) => void): number;
    connect_after(signal: "search-shortcut", callback: (_source: this) => void): number;
    emit(signal: "search-shortcut"): void;
    connect(signal: "show-hidden", callback: (_source: this) => void): number;
    connect_after(signal: "show-hidden", callback: (_source: this) => void): number;
    emit(signal: "show-hidden"): void;
    connect(signal: "up-folder", callback: (_source: this) => void): number;
    connect_after(signal: "up-folder", callback: (_source: this) => void): number;
    emit(signal: "up-folder"): void;

    // Implemented Properties

    get action(): FileChooserAction;
    set action(val: FileChooserAction);
    get createFolders(): boolean;
    set createFolders(val: boolean);
    get doOverwriteConfirmation(): boolean;
    set doOverwriteConfirmation(val: boolean);
    get extraWidget(): Widget;
    set extraWidget(val: Widget);
    get filter(): FileFilter;
    set filter(val: FileFilter);
    get localOnly(): boolean;
    set localOnly(val: boolean);
    get previewWidget(): Widget;
    set previewWidget(val: Widget);
    get previewWidgetActive(): boolean;
    set previewWidgetActive(val: boolean);
    get selectMultiple(): boolean;
    set selectMultiple(val: boolean);
    get showHidden(): boolean;
    set showHidden(val: boolean);
    get usePreviewLabel(): boolean;
    set usePreviewLabel(val: boolean);
    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](action: FileChooserAction): FileChooserWidget;
    // Conflicted with Gtk.Box.new
    static ["new"](...args: never[]): any;

    // Implemented Members

    add_choice(id: string, label: string, options?: string[] | null, option_labels?: string[] | null): void;
    add_filter(filter: FileFilter): void;
    add_shortcut_folder(folder: string): boolean;
    add_shortcut_folder_uri(uri: string): boolean;
    get_action(): FileChooserAction;
    get_choice(id: string): string;
    get_create_folders(): boolean;
    get_current_folder(): string | null;
    get_current_folder_file(): Gio.File | null;
    get_current_folder_uri(): string | null;
    get_current_name(): string;
    get_do_overwrite_confirmation(): boolean;
    get_extra_widget(): Widget | null;
    get_file(): Gio.File;
    get_filename(): string | null;
    get_filenames(): string[];
    get_files(): Gio.File[];
    get_filter(): FileFilter | null;
    get_local_only(): boolean;
    get_preview_file(): Gio.File | null;
    get_preview_filename(): string | null;
    get_preview_uri(): string | null;
    get_preview_widget(): Widget | null;
    get_preview_widget_active(): boolean;
    get_select_multiple(): boolean;
    get_show_hidden(): boolean;
    get_uri(): string | null;
    get_uris(): string[];
    get_use_preview_label(): boolean;
    list_filters(): FileFilter[];
    list_shortcut_folder_uris(): string[] | null;
    list_shortcut_folders(): string[] | null;
    remove_choice(id: string): void;
    remove_filter(filter: FileFilter): void;
    remove_shortcut_folder(folder: string): boolean;
    remove_shortcut_folder_uri(uri: string): boolean;
    select_all(): void;
    select_file(file: Gio.File): boolean;
    select_filename(filename: string): boolean;
    select_uri(uri: string): boolean;
    set_action(action: FileChooserAction): void;
    set_choice(id: string, option: string): void;
    set_create_folders(create_folders: boolean): void;
    set_current_folder(filename: string): boolean;
    set_current_folder_file(file: Gio.File): boolean;
    set_current_folder_uri(uri: string): boolean;
    set_current_name(name: string): void;
    set_do_overwrite_confirmation(do_overwrite_confirmation: boolean): void;
    set_extra_widget(extra_widget: Widget): void;
    set_file(file: Gio.File): boolean;
    set_filename(filename: string): boolean;
    set_filter(filter: FileFilter): void;
    set_local_only(local_only: boolean): void;
    set_preview_widget(preview_widget: Widget): void;
    set_preview_widget_active(active: boolean): void;
    set_select_multiple(select_multiple: boolean): void;
    set_show_hidden(show_hidden: boolean): void;
    set_uri(uri: string): boolean;
    set_use_preview_label(use_label: boolean): void;
    unselect_all(): void;
    unselect_file(file: Gio.File): void;
    unselect_filename(filename: string): void;
    unselect_uri(uri: string): void;
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module FileChooserWidgetAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class FileChooserWidgetAccessible extends ContainerAccessible implements Atk.Action, Atk.Component {
    static $gtype: GObject.GType<FileChooserWidgetAccessible>;

    constructor(properties?: Partial<FileChooserWidgetAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FileChooserWidgetAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: FileChooserWidgetAccessiblePrivate | any;

    // Implemented Members

    do_action(i: number): boolean;
    get_description(i: number): string | null;
    // Conflicted with Atk.Object.get_description
    get_description(...args: never[]): any;
    get_keybinding(i: number): string | null;
    get_localized_name(i: number): string | null;
    get_n_actions(): number;
    get_name(i: number): string | null;
    // Conflicted with Atk.Object.get_name
    get_name(...args: never[]): any;
    set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.set_description
    set_description(...args: never[]): any;
    vfunc_do_action(i: number): boolean;
    vfunc_get_description(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_description
    vfunc_get_description(...args: never[]): any;
    vfunc_get_keybinding(i: number): string | null;
    vfunc_get_localized_name(i: number): string | null;
    vfunc_get_n_actions(): number;
    vfunc_get_name(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_name
    vfunc_get_name(...args: never[]): any;
    vfunc_set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.vfunc_set_description
    vfunc_set_description(...args: never[]): any;
}
export module FileFilter {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
    }
}
export class FileFilter extends GObject.InitiallyUnowned implements Buildable {
    static $gtype: GObject.GType<FileFilter>;

    constructor(properties?: Partial<FileFilter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FileFilter.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): FileFilter;
    static new_from_gvariant(variant: GLib.Variant): FileFilter;

    // Members

    add_custom(needed: FileFilterFlags, func: FileFilterFunc): void;
    add_mime_type(mime_type: string): void;
    add_pattern(pattern: string): void;
    add_pixbuf_formats(): void;
    filter(filter_info: FileFilterInfo): boolean;
    get_name(): string | null;
    // Conflicted with Gtk.Buildable.get_name
    get_name(...args: never[]): any;
    get_needed(): FileFilterFlags;
    set_name(name?: string | null): void;
    // Conflicted with Gtk.Buildable.set_name
    set_name(...args: never[]): any;
    to_gvariant(): GLib.Variant;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
}
export module Fixed {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
    }
}
export class Fixed extends Container implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Fixed>;

    constructor(properties?: Partial<Fixed.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Fixed.ConstructorProperties>, ...args: any[]): void;

    // Fields
    container: Container;

    // Constructors

    static ["new"](): Fixed;

    // Members

    move(widget: Widget, x: number, y: number): void;
    put(widget: Widget, x: number, y: number): void;
}
export module FlowBox {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        activateOnSingleClick: boolean;
        columnSpacing: number;
        homogeneous: boolean;
        maxChildrenPerLine: number;
        minChildrenPerLine: number;
        rowSpacing: number;
        selectionMode: SelectionMode;
    }
}
export class FlowBox extends Container implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<FlowBox>;

    constructor(properties?: Partial<FlowBox.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FlowBox.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get activateOnSingleClick(): boolean;
    set activateOnSingleClick(val: boolean);
    get columnSpacing(): number;
    set columnSpacing(val: number);
    get homogeneous(): boolean;
    set homogeneous(val: boolean);
    get maxChildrenPerLine(): number;
    set maxChildrenPerLine(val: number);
    get minChildrenPerLine(): number;
    set minChildrenPerLine(val: number);
    get rowSpacing(): number;
    set rowSpacing(val: number);
    get selectionMode(): SelectionMode;
    set selectionMode(val: SelectionMode);

    // Fields
    container: Container;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "activate-cursor-child", callback: (_source: this) => void): number;
    connect_after(signal: "activate-cursor-child", callback: (_source: this) => void): number;
    emit(signal: "activate-cursor-child"): void;
    connect(signal: "child-activated", callback: (_source: this, child: FlowBoxChild) => void): number;
    connect_after(signal: "child-activated", callback: (_source: this, child: FlowBoxChild) => void): number;
    emit(signal: "child-activated", child: FlowBoxChild): void;
    connect(signal: "move-cursor", callback: (_source: this, step: MovementStep, count: number) => boolean): number;
    connect_after(
        signal: "move-cursor",
        callback: (_source: this, step: MovementStep, count: number) => boolean
    ): number;
    emit(signal: "move-cursor", step: MovementStep, count: number): void;
    connect(signal: "select-all", callback: (_source: this) => void): number;
    connect_after(signal: "select-all", callback: (_source: this) => void): number;
    emit(signal: "select-all"): void;
    connect(signal: "selected-children-changed", callback: (_source: this) => void): number;
    connect_after(signal: "selected-children-changed", callback: (_source: this) => void): number;
    emit(signal: "selected-children-changed"): void;
    connect(signal: "toggle-cursor-child", callback: (_source: this) => void): number;
    connect_after(signal: "toggle-cursor-child", callback: (_source: this) => void): number;
    emit(signal: "toggle-cursor-child"): void;
    connect(signal: "unselect-all", callback: (_source: this) => void): number;
    connect_after(signal: "unselect-all", callback: (_source: this) => void): number;
    emit(signal: "unselect-all"): void;

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](): FlowBox;

    // Members

    bind_model(model: Gio.ListModel | null, create_widget_func: FlowBoxCreateWidgetFunc): void;
    get_activate_on_single_click(): boolean;
    get_child_at_index(idx: number): FlowBoxChild | null;
    get_child_at_pos(x: number, y: number): FlowBoxChild | null;
    get_column_spacing(): number;
    get_homogeneous(): boolean;
    get_max_children_per_line(): number;
    get_min_children_per_line(): number;
    get_row_spacing(): number;
    get_selected_children(): FlowBoxChild[];
    get_selection_mode(): SelectionMode;
    insert(widget: Widget, position: number): void;
    invalidate_filter(): void;
    invalidate_sort(): void;
    select_all(): void;
    select_child(child: FlowBoxChild): void;
    selected_foreach(func: FlowBoxForeachFunc): void;
    set_activate_on_single_click(single: boolean): void;
    set_column_spacing(spacing: number): void;
    set_filter_func(filter_func?: FlowBoxFilterFunc | null): void;
    set_hadjustment(adjustment: Adjustment): void;
    set_homogeneous(homogeneous: boolean): void;
    set_max_children_per_line(n_children: number): void;
    set_min_children_per_line(n_children: number): void;
    set_row_spacing(spacing: number): void;
    set_selection_mode(mode: SelectionMode): void;
    set_sort_func(sort_func?: FlowBoxSortFunc | null): void;
    set_vadjustment(adjustment: Adjustment): void;
    unselect_all(): void;
    unselect_child(child: FlowBoxChild): void;
    vfunc_activate_cursor_child(): void;
    vfunc_child_activated(child: FlowBoxChild): void;
    vfunc_move_cursor(step: MovementStep, count: number): boolean;
    vfunc_select_all(): void;
    vfunc_selected_children_changed(): void;
    vfunc_toggle_cursor_child(): void;
    vfunc_unselect_all(): void;

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module FlowBoxAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class FlowBoxAccessible extends ContainerAccessible implements Atk.Component, Atk.Selection {
    static $gtype: GObject.GType<FlowBoxAccessible>;

    constructor(properties?: Partial<FlowBoxAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FlowBoxAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: FlowBoxAccessiblePrivate | any;

    // Implemented Members

    add_selection(i: number): boolean;
    clear_selection(): boolean;
    get_selection_count(): number;
    is_child_selected(i: number): boolean;
    ref_selection(i: number): Atk.Object | null;
    remove_selection(i: number): boolean;
    select_all_selection(): boolean;
    vfunc_add_selection(i: number): boolean;
    vfunc_clear_selection(): boolean;
    vfunc_get_selection_count(): number;
    vfunc_is_child_selected(i: number): boolean;
    vfunc_ref_selection(i: number): Atk.Object | null;
    vfunc_remove_selection(i: number): boolean;
    vfunc_select_all_selection(): boolean;
    vfunc_selection_changed(): void;
}
export module FlowBoxChild {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
    }
}
export class FlowBoxChild extends Bin implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<FlowBoxChild>;

    constructor(properties?: Partial<FlowBoxChild.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FlowBoxChild.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "activate", callback: (_source: this) => void): number;
    connect_after(signal: "activate", callback: (_source: this) => void): number;
    emit(signal: "activate"): void;

    // Constructors

    static ["new"](): FlowBoxChild;

    // Members

    changed(): void;
    get_index(): number;
    is_selected(): boolean;
    vfunc_activate(): void;
}
export module FlowBoxChildAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class FlowBoxChildAccessible extends ContainerAccessible implements Atk.Component {
    static $gtype: GObject.GType<FlowBoxChildAccessible>;

    constructor(properties?: Partial<FlowBoxChildAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FlowBoxChildAccessible.ConstructorProperties>, ...args: any[]): void;
}
export module FontButton {
    export interface ConstructorProperties extends Button.ConstructorProperties {
        [key: string]: any;
        fontName: string;
        showSize: boolean;
        showStyle: boolean;
        title: string;
        useFont: boolean;
        useSize: boolean;
    }
}
export class FontButton
    extends Button
    implements Atk.ImplementorIface, Actionable, Activatable, Buildable, FontChooser
{
    static $gtype: GObject.GType<FontButton>;

    constructor(properties?: Partial<FontButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FontButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get fontName(): string;
    set fontName(val: string);
    get showSize(): boolean;
    set showSize(val: boolean);
    get showStyle(): boolean;
    set showStyle(val: boolean);
    get title(): string;
    set title(val: string);
    get useFont(): boolean;
    set useFont(val: boolean);
    get useSize(): boolean;
    set useSize(val: boolean);

    // Fields
    button: Button;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "font-set", callback: (_source: this) => void): number;
    connect_after(signal: "font-set", callback: (_source: this) => void): number;
    emit(signal: "font-set"): void;

    // Implemented Properties

    get actionName(): string;
    set actionName(val: string);
    get actionTarget(): GLib.Variant;
    set actionTarget(val: GLib.Variant);
    get relatedAction(): Action;
    set relatedAction(val: Action);
    get useActionAppearance(): boolean;
    set useActionAppearance(val: boolean);
    get font(): string;
    set font(val: string);
    get fontDesc(): Pango.FontDescription;
    set fontDesc(val: Pango.FontDescription);
    get fontFeatures(): string;
    get language(): string;
    set language(val: string);
    get level(): FontChooserLevel;
    set level(val: FontChooserLevel);
    get previewText(): string;
    set previewText(val: string);
    get showPreviewEntry(): boolean;
    set showPreviewEntry(val: boolean);

    // Constructors

    static ["new"](): FontButton;
    static new_with_font(fontname: string): FontButton;

    // Members

    get_font_name(): string;
    get_show_size(): boolean;
    get_show_style(): boolean;
    get_title(): string;
    get_use_font(): boolean;
    get_use_size(): boolean;
    set_font_name(fontname: string): boolean;
    set_show_size(show_size: boolean): void;
    set_show_style(show_style: boolean): void;
    set_title(title: string): void;
    set_use_font(use_font: boolean): void;
    set_use_size(use_size: boolean): void;
    vfunc_font_set(): void;

    // Implemented Members

    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name?: string | null): void;
    set_action_target_value(target_value?: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name?: string | null): void;
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action?: Action | null): void;
    vfunc_sync_action_properties(action?: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
    get_font(): string | null;
    get_font_desc(): Pango.FontDescription | null;
    get_font_face(): Pango.FontFace | null;
    get_font_family(): Pango.FontFamily | null;
    get_font_features(): string;
    get_font_map(): Pango.FontMap | null;
    get_font_size(): number;
    get_language(): string;
    get_level(): FontChooserLevel;
    get_preview_text(): string;
    get_show_preview_entry(): boolean;
    set_filter_func(filter?: FontFilterFunc | null): void;
    set_font(fontname: string): void;
    set_font_desc(font_desc: Pango.FontDescription): void;
    set_font_map(fontmap?: Pango.FontMap | null): void;
    set_language(language: string): void;
    set_level(level: FontChooserLevel): void;
    set_preview_text(text: string): void;
    set_show_preview_entry(show_preview_entry: boolean): void;
    vfunc_font_activated(fontname: string): void;
    vfunc_get_font_face(): Pango.FontFace | null;
    vfunc_get_font_family(): Pango.FontFamily | null;
    vfunc_get_font_map(): Pango.FontMap | null;
    vfunc_get_font_size(): number;
    vfunc_set_filter_func(filter?: FontFilterFunc | null): void;
    vfunc_set_font_map(fontmap?: Pango.FontMap | null): void;
}
export module FontChooserDialog {
    export interface ConstructorProperties extends Dialog.ConstructorProperties {
        [key: string]: any;
    }
}
export class FontChooserDialog extends Dialog implements Atk.ImplementorIface, Buildable, FontChooser {
    static $gtype: GObject.GType<FontChooserDialog>;

    constructor(properties?: Partial<FontChooserDialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FontChooserDialog.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get font(): string;
    set font(val: string);
    get fontDesc(): Pango.FontDescription;
    set fontDesc(val: Pango.FontDescription);
    get fontFeatures(): string;
    get language(): string;
    set language(val: string);
    get level(): FontChooserLevel;
    set level(val: FontChooserLevel);
    get previewText(): string;
    set previewText(val: string);
    get showPreviewEntry(): boolean;
    set showPreviewEntry(val: boolean);

    // Constructors

    static ["new"](title?: string | null, parent?: Window | null): FontChooserDialog;
    // Conflicted with Gtk.Dialog.new
    static ["new"](...args: never[]): any;

    // Implemented Members

    get_font(): string | null;
    get_font_desc(): Pango.FontDescription | null;
    get_font_face(): Pango.FontFace | null;
    get_font_family(): Pango.FontFamily | null;
    get_font_features(): string;
    get_font_map(): Pango.FontMap | null;
    get_font_size(): number;
    get_language(): string;
    get_level(): FontChooserLevel;
    get_preview_text(): string;
    get_show_preview_entry(): boolean;
    set_filter_func(filter?: FontFilterFunc | null): void;
    set_font(fontname: string): void;
    set_font_desc(font_desc: Pango.FontDescription): void;
    set_font_map(fontmap?: Pango.FontMap | null): void;
    set_language(language: string): void;
    set_level(level: FontChooserLevel): void;
    set_preview_text(text: string): void;
    set_show_preview_entry(show_preview_entry: boolean): void;
    vfunc_font_activated(fontname: string): void;
    vfunc_get_font_face(): Pango.FontFace | null;
    vfunc_get_font_family(): Pango.FontFamily | null;
    vfunc_get_font_map(): Pango.FontMap | null;
    vfunc_get_font_size(): number;
    vfunc_set_filter_func(filter?: FontFilterFunc | null): void;
    vfunc_set_font_map(fontmap?: Pango.FontMap | null): void;
}
export module FontChooserWidget {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        tweakAction: Gio.Action;
    }
}
export class FontChooserWidget extends Box implements Atk.ImplementorIface, Buildable, FontChooser, Orientable {
    static $gtype: GObject.GType<FontChooserWidget>;

    constructor(properties?: Partial<FontChooserWidget.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FontChooserWidget.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get tweakAction(): Gio.Action;

    // Implemented Properties

    get font(): string;
    set font(val: string);
    get fontDesc(): Pango.FontDescription;
    set fontDesc(val: Pango.FontDescription);
    get fontFeatures(): string;
    get language(): string;
    set language(val: string);
    get level(): FontChooserLevel;
    set level(val: FontChooserLevel);
    get previewText(): string;
    set previewText(val: string);
    get showPreviewEntry(): boolean;
    set showPreviewEntry(val: boolean);
    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](): FontChooserWidget;

    // Implemented Members

    get_font(): string | null;
    get_font_desc(): Pango.FontDescription | null;
    get_font_face(): Pango.FontFace | null;
    get_font_family(): Pango.FontFamily | null;
    get_font_features(): string;
    get_font_map(): Pango.FontMap | null;
    get_font_size(): number;
    get_language(): string;
    get_level(): FontChooserLevel;
    get_preview_text(): string;
    get_show_preview_entry(): boolean;
    set_filter_func(filter?: FontFilterFunc | null): void;
    set_font(fontname: string): void;
    set_font_desc(font_desc: Pango.FontDescription): void;
    set_font_map(fontmap?: Pango.FontMap | null): void;
    set_language(language: string): void;
    set_level(level: FontChooserLevel): void;
    set_preview_text(text: string): void;
    set_show_preview_entry(show_preview_entry: boolean): void;
    vfunc_font_activated(fontname: string): void;
    vfunc_get_font_face(): Pango.FontFace | null;
    vfunc_get_font_family(): Pango.FontFamily | null;
    vfunc_get_font_map(): Pango.FontMap | null;
    vfunc_get_font_size(): number;
    vfunc_set_filter_func(filter?: FontFilterFunc | null): void;
    vfunc_set_font_map(fontmap?: Pango.FontMap | null): void;
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module FontSelection {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        fontName: string;
        previewText: string;
    }
}
export class FontSelection extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<FontSelection>;

    constructor(properties?: Partial<FontSelection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FontSelection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get fontName(): string;
    set fontName(val: string);
    get previewText(): string;
    set previewText(val: string);

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](): FontSelection;

    // Members

    get_face(): Pango.FontFace;
    get_face_list(): Widget;
    get_family(): Pango.FontFamily;
    get_family_list(): Widget;
    get_font_name(): string;
    get_preview_entry(): Widget;
    get_preview_text(): string;
    get_size(): number;
    get_size_entry(): Widget;
    get_size_list(): Widget;
    set_font_name(fontname: string): boolean;
    set_preview_text(text: string): void;

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module FontSelectionDialog {
    export interface ConstructorProperties extends Dialog.ConstructorProperties {
        [key: string]: any;
    }
}
export class FontSelectionDialog extends Dialog implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<FontSelectionDialog>;

    constructor(properties?: Partial<FontSelectionDialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FontSelectionDialog.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](title: string): FontSelectionDialog;
    // Conflicted with Gtk.Dialog.new
    static ["new"](...args: never[]): any;

    // Members

    get_cancel_button(): Widget;
    get_font_name(): string;
    get_font_selection(): Widget;
    get_ok_button(): Widget;
    get_preview_text(): string;
    set_font_name(fontname: string): boolean;
    set_preview_text(text: string): void;
}
export module Frame {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        label: string;
        labelWidget: Widget;
        labelXalign: number;
        labelYalign: number;
        shadowType: ShadowType;
    }
}
export class Frame extends Bin implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Frame>;

    constructor(properties?: Partial<Frame.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Frame.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get label(): string;
    set label(val: string);
    get labelWidget(): Widget;
    set labelWidget(val: Widget);
    get labelXalign(): number;
    set labelXalign(val: number);
    get labelYalign(): number;
    set labelYalign(val: number);
    get shadowType(): ShadowType;
    set shadowType(val: ShadowType);

    // Fields
    bin: Bin;

    // Constructors

    static ["new"](label?: string | null): Frame;

    // Members

    get_label(): string | null;
    get_label_align(): [number, number];
    get_label_widget(): Widget | null;
    get_shadow_type(): ShadowType;
    set_label(label?: string | null): void;
    set_label_align(xalign: number, yalign: number): void;
    set_label_widget(label_widget?: Widget | null): void;
    set_shadow_type(type: ShadowType): void;
    vfunc_compute_child_allocation(allocation: Allocation): void;
}
export module FrameAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class FrameAccessible extends ContainerAccessible implements Atk.Component {
    static $gtype: GObject.GType<FrameAccessible>;

    constructor(properties?: Partial<FrameAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<FrameAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: FrameAccessiblePrivate | any;
}
export module GLArea {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        autoRender: boolean;
        context: Gdk.GLContext;
        hasAlpha: boolean;
        hasDepthBuffer: boolean;
        hasStencilBuffer: boolean;
        useEs: boolean;
    }
}
export class GLArea extends Widget implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<GLArea>;

    constructor(properties?: Partial<GLArea.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GLArea.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get autoRender(): boolean;
    set autoRender(val: boolean);
    get context(): Gdk.GLContext;
    get hasAlpha(): boolean;
    set hasAlpha(val: boolean);
    get hasDepthBuffer(): boolean;
    set hasDepthBuffer(val: boolean);
    get hasStencilBuffer(): boolean;
    set hasStencilBuffer(val: boolean);
    get useEs(): boolean;
    set useEs(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "create-context", callback: (_source: this) => Gdk.GLContext): number;
    connect_after(signal: "create-context", callback: (_source: this) => Gdk.GLContext): number;
    emit(signal: "create-context"): void;
    connect(signal: "render", callback: (_source: this, context: Gdk.GLContext) => boolean): number;
    connect_after(signal: "render", callback: (_source: this, context: Gdk.GLContext) => boolean): number;
    emit(signal: "render", context: Gdk.GLContext): void;
    connect(signal: "resize", callback: (_source: this, width: number, height: number) => void): number;
    connect_after(signal: "resize", callback: (_source: this, width: number, height: number) => void): number;
    emit(signal: "resize", width: number, height: number): void;

    // Constructors

    static ["new"](): GLArea;

    // Members

    attach_buffers(): void;
    get_auto_render(): boolean;
    get_context(): Gdk.GLContext;
    get_error(): GLib.Error | null;
    get_has_alpha(): boolean;
    get_has_depth_buffer(): boolean;
    get_has_stencil_buffer(): boolean;
    get_required_version(): [number, number];
    get_use_es(): boolean;
    make_current(): void;
    queue_render(): void;
    set_auto_render(auto_render: boolean): void;
    set_error(error?: GLib.Error | null): void;
    set_has_alpha(has_alpha: boolean): void;
    set_has_depth_buffer(has_depth_buffer: boolean): void;
    set_has_stencil_buffer(has_stencil_buffer: boolean): void;
    set_required_version(major: number, minor: number): void;
    set_use_es(use_es: boolean): void;
    vfunc_render(context: Gdk.GLContext): boolean;
    vfunc_resize(width: number, height: number): void;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
}
export module Gesture {
    export interface ConstructorProperties extends EventController.ConstructorProperties {
        [key: string]: any;
        nPoints: number;
        window: Gdk.Window;
    }
}
export abstract class Gesture extends EventController {
    static $gtype: GObject.GType<Gesture>;

    constructor(properties?: Partial<Gesture.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Gesture.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get nPoints(): number;
    get window(): Gdk.Window;
    set window(val: Gdk.Window);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "begin", callback: (_source: this, sequence: Gdk.EventSequence | null) => void): number;
    connect_after(signal: "begin", callback: (_source: this, sequence: Gdk.EventSequence | null) => void): number;
    emit(signal: "begin", sequence: Gdk.EventSequence | null): void;
    connect(signal: "cancel", callback: (_source: this, sequence: Gdk.EventSequence | null) => void): number;
    connect_after(signal: "cancel", callback: (_source: this, sequence: Gdk.EventSequence | null) => void): number;
    emit(signal: "cancel", sequence: Gdk.EventSequence | null): void;
    connect(signal: "end", callback: (_source: this, sequence: Gdk.EventSequence | null) => void): number;
    connect_after(signal: "end", callback: (_source: this, sequence: Gdk.EventSequence | null) => void): number;
    emit(signal: "end", sequence: Gdk.EventSequence | null): void;
    connect(
        signal: "sequence-state-changed",
        callback: (_source: this, sequence: Gdk.EventSequence | null, state: EventSequenceState) => void
    ): number;
    connect_after(
        signal: "sequence-state-changed",
        callback: (_source: this, sequence: Gdk.EventSequence | null, state: EventSequenceState) => void
    ): number;
    emit(signal: "sequence-state-changed", sequence: Gdk.EventSequence | null, state: EventSequenceState): void;
    connect(signal: "update", callback: (_source: this, sequence: Gdk.EventSequence | null) => void): number;
    connect_after(signal: "update", callback: (_source: this, sequence: Gdk.EventSequence | null) => void): number;
    emit(signal: "update", sequence: Gdk.EventSequence | null): void;

    // Members

    get_bounding_box(): [boolean, Gdk.Rectangle];
    get_bounding_box_center(): [boolean, number, number];
    get_device(): Gdk.Device | null;
    get_group(): Gesture[];
    get_last_event(sequence?: Gdk.EventSequence | null): Gdk.Event | null;
    get_last_updated_sequence(): Gdk.EventSequence | null;
    get_point(sequence: Gdk.EventSequence | null): [boolean, number, number];
    get_sequence_state(sequence: Gdk.EventSequence): EventSequenceState;
    get_sequences(): Gdk.EventSequence[];
    get_window(): Gdk.Window | null;
    group(gesture: Gesture): void;
    handles_sequence(sequence?: Gdk.EventSequence | null): boolean;
    is_active(): boolean;
    is_grouped_with(other: Gesture): boolean;
    is_recognized(): boolean;
    set_sequence_state(sequence: Gdk.EventSequence, state: EventSequenceState): boolean;
    set_state(state: EventSequenceState): boolean;
    set_window(window?: Gdk.Window | null): void;
    ungroup(): void;
}
export module GestureDrag {
    export interface ConstructorProperties extends GestureSingle.ConstructorProperties {
        [key: string]: any;
    }
}
export class GestureDrag extends GestureSingle {
    static $gtype: GObject.GType<GestureDrag>;

    constructor(properties?: Partial<GestureDrag.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GestureDrag.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "drag-begin", callback: (_source: this, start_x: number, start_y: number) => void): number;
    connect_after(signal: "drag-begin", callback: (_source: this, start_x: number, start_y: number) => void): number;
    emit(signal: "drag-begin", start_x: number, start_y: number): void;
    connect(signal: "drag-end", callback: (_source: this, offset_x: number, offset_y: number) => void): number;
    connect_after(signal: "drag-end", callback: (_source: this, offset_x: number, offset_y: number) => void): number;
    emit(signal: "drag-end", offset_x: number, offset_y: number): void;
    connect(signal: "drag-update", callback: (_source: this, offset_x: number, offset_y: number) => void): number;
    connect_after(signal: "drag-update", callback: (_source: this, offset_x: number, offset_y: number) => void): number;
    emit(signal: "drag-update", offset_x: number, offset_y: number): void;

    // Constructors

    static ["new"](widget: Widget): GestureDrag;

    // Members

    get_offset(): [boolean, number, number];
    get_start_point(): [boolean, number, number];
}
export module GestureLongPress {
    export interface ConstructorProperties extends GestureSingle.ConstructorProperties {
        [key: string]: any;
        delayFactor: number;
    }
}
export class GestureLongPress extends GestureSingle {
    static $gtype: GObject.GType<GestureLongPress>;

    constructor(properties?: Partial<GestureLongPress.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GestureLongPress.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get delayFactor(): number;
    set delayFactor(val: number);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "cancelled", callback: (_source: this) => void): number;
    connect_after(signal: "cancelled", callback: (_source: this) => void): number;
    emit(signal: "cancelled"): void;
    connect(signal: "pressed", callback: (_source: this, x: number, y: number) => void): number;
    connect_after(signal: "pressed", callback: (_source: this, x: number, y: number) => void): number;
    emit(signal: "pressed", x: number, y: number): void;

    // Constructors

    static ["new"](widget: Widget): GestureLongPress;
}
export module GestureMultiPress {
    export interface ConstructorProperties extends GestureSingle.ConstructorProperties {
        [key: string]: any;
    }
}
export class GestureMultiPress extends GestureSingle {
    static $gtype: GObject.GType<GestureMultiPress>;

    constructor(properties?: Partial<GestureMultiPress.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GestureMultiPress.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "pressed", callback: (_source: this, n_press: number, x: number, y: number) => void): number;
    connect_after(signal: "pressed", callback: (_source: this, n_press: number, x: number, y: number) => void): number;
    emit(signal: "pressed", n_press: number, x: number, y: number): void;
    connect(signal: "released", callback: (_source: this, n_press: number, x: number, y: number) => void): number;
    connect_after(signal: "released", callback: (_source: this, n_press: number, x: number, y: number) => void): number;
    emit(signal: "released", n_press: number, x: number, y: number): void;
    connect(signal: "stopped", callback: (_source: this) => void): number;
    connect_after(signal: "stopped", callback: (_source: this) => void): number;
    emit(signal: "stopped"): void;

    // Constructors

    static ["new"](widget: Widget): GestureMultiPress;

    // Members

    get_area(): [boolean, Gdk.Rectangle];
    set_area(rect?: Gdk.Rectangle | null): void;
}
export module GesturePan {
    export interface ConstructorProperties extends GestureDrag.ConstructorProperties {
        [key: string]: any;
        orientation: Orientation;
    }
}
export class GesturePan extends GestureDrag {
    static $gtype: GObject.GType<GesturePan>;

    constructor(properties?: Partial<GesturePan.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GesturePan.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "pan", callback: (_source: this, direction: PanDirection, offset: number) => void): number;
    connect_after(signal: "pan", callback: (_source: this, direction: PanDirection, offset: number) => void): number;
    emit(signal: "pan", direction: PanDirection, offset: number): void;

    // Constructors

    static ["new"](widget: Widget, orientation: Orientation): GesturePan;
    // Conflicted with Gtk.GestureDrag.new
    static ["new"](...args: never[]): any;

    // Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module GestureRotate {
    export interface ConstructorProperties extends Gesture.ConstructorProperties {
        [key: string]: any;
    }
}
export class GestureRotate extends Gesture {
    static $gtype: GObject.GType<GestureRotate>;

    constructor(properties?: Partial<GestureRotate.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GestureRotate.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "angle-changed", callback: (_source: this, angle: number, angle_delta: number) => void): number;
    connect_after(
        signal: "angle-changed",
        callback: (_source: this, angle: number, angle_delta: number) => void
    ): number;
    emit(signal: "angle-changed", angle: number, angle_delta: number): void;

    // Constructors

    static ["new"](widget: Widget): GestureRotate;

    // Members

    get_angle_delta(): number;
}
export module GestureSingle {
    export interface ConstructorProperties extends Gesture.ConstructorProperties {
        [key: string]: any;
        button: number;
        exclusive: boolean;
        touchOnly: boolean;
    }
}
export class GestureSingle extends Gesture {
    static $gtype: GObject.GType<GestureSingle>;

    constructor(properties?: Partial<GestureSingle.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GestureSingle.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get button(): number;
    set button(val: number);
    get exclusive(): boolean;
    set exclusive(val: boolean);
    get touchOnly(): boolean;
    set touchOnly(val: boolean);

    // Members

    get_button(): number;
    get_current_button(): number;
    get_current_sequence(): Gdk.EventSequence | null;
    get_exclusive(): boolean;
    get_touch_only(): boolean;
    set_button(button: number): void;
    set_exclusive(exclusive: boolean): void;
    set_touch_only(touch_only: boolean): void;
}
export module GestureStylus {
    export interface ConstructorProperties extends GestureSingle.ConstructorProperties {
        [key: string]: any;
    }
}
export class GestureStylus extends GestureSingle {
    static $gtype: GObject.GType<GestureStylus>;

    constructor(properties?: Partial<GestureStylus.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GestureStylus.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "down", callback: (_source: this, object: number, p0: number) => void): number;
    connect_after(signal: "down", callback: (_source: this, object: number, p0: number) => void): number;
    emit(signal: "down", object: number, p0: number): void;
    connect(signal: "motion", callback: (_source: this, object: number, p0: number) => void): number;
    connect_after(signal: "motion", callback: (_source: this, object: number, p0: number) => void): number;
    emit(signal: "motion", object: number, p0: number): void;
    connect(signal: "proximity", callback: (_source: this, object: number, p0: number) => void): number;
    connect_after(signal: "proximity", callback: (_source: this, object: number, p0: number) => void): number;
    emit(signal: "proximity", object: number, p0: number): void;
    connect(signal: "up", callback: (_source: this, object: number, p0: number) => void): number;
    connect_after(signal: "up", callback: (_source: this, object: number, p0: number) => void): number;
    emit(signal: "up", object: number, p0: number): void;

    // Constructors

    static ["new"](widget: Widget): GestureStylus;

    // Members

    get_axes(axes: Gdk.AxisUse[]): [boolean, number[]];
    get_axis(axis: Gdk.AxisUse): [boolean, number];
    get_device_tool(): Gdk.DeviceTool | null;
}
export module GestureSwipe {
    export interface ConstructorProperties extends GestureSingle.ConstructorProperties {
        [key: string]: any;
    }
}
export class GestureSwipe extends GestureSingle {
    static $gtype: GObject.GType<GestureSwipe>;

    constructor(properties?: Partial<GestureSwipe.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GestureSwipe.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "swipe", callback: (_source: this, velocity_x: number, velocity_y: number) => void): number;
    connect_after(signal: "swipe", callback: (_source: this, velocity_x: number, velocity_y: number) => void): number;
    emit(signal: "swipe", velocity_x: number, velocity_y: number): void;

    // Constructors

    static ["new"](widget: Widget): GestureSwipe;

    // Members

    get_velocity(): [boolean, number, number];
}
export module GestureZoom {
    export interface ConstructorProperties extends Gesture.ConstructorProperties {
        [key: string]: any;
    }
}
export class GestureZoom extends Gesture {
    static $gtype: GObject.GType<GestureZoom>;

    constructor(properties?: Partial<GestureZoom.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<GestureZoom.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "scale-changed", callback: (_source: this, scale: number) => void): number;
    connect_after(signal: "scale-changed", callback: (_source: this, scale: number) => void): number;
    emit(signal: "scale-changed", scale: number): void;

    // Constructors

    static ["new"](widget: Widget): GestureZoom;

    // Members

    get_scale_delta(): number;
}
export module Grid {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        baselineRow: number;
        columnHomogeneous: boolean;
        columnSpacing: number;
        rowHomogeneous: boolean;
        rowSpacing: number;
    }
}
export class Grid extends Container implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<Grid>;

    constructor(properties?: Partial<Grid.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Grid.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get baselineRow(): number;
    set baselineRow(val: number);
    get columnHomogeneous(): boolean;
    set columnHomogeneous(val: boolean);
    get columnSpacing(): number;
    set columnSpacing(val: number);
    get rowHomogeneous(): boolean;
    set rowHomogeneous(val: boolean);
    get rowSpacing(): number;
    set rowSpacing(val: number);

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](): Grid;

    // Members

    attach(child: Widget, left: number, top: number, width: number, height: number): void;
    attach_next_to(child: Widget, sibling: Widget | null, side: PositionType, width: number, height: number): void;
    get_baseline_row(): number;
    get_child_at(left: number, top: number): Widget | null;
    get_column_homogeneous(): boolean;
    get_column_spacing(): number;
    get_row_baseline_position(row: number): BaselinePosition;
    get_row_homogeneous(): boolean;
    get_row_spacing(): number;
    insert_column(position: number): void;
    insert_next_to(sibling: Widget, side: PositionType): void;
    insert_row(position: number): void;
    remove_column(position: number): void;
    remove_row(position: number): void;
    set_baseline_row(row: number): void;
    set_column_homogeneous(homogeneous: boolean): void;
    set_column_spacing(spacing: number): void;
    set_row_baseline_position(row: number, pos: BaselinePosition): void;
    set_row_homogeneous(homogeneous: boolean): void;
    set_row_spacing(spacing: number): void;

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module HBox {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
    }
}
export class HBox extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<HBox>;

    constructor(properties?: Partial<HBox.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HBox.ConstructorProperties>, ...args: any[]): void;

    // Fields
    box: Box;

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](homogeneous: boolean, spacing: number): HBox;
    // Conflicted with Gtk.Box.new
    static ["new"](...args: never[]): any;

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module HButtonBox {
    export interface ConstructorProperties extends ButtonBox.ConstructorProperties {
        [key: string]: any;
    }
}
export class HButtonBox extends ButtonBox implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<HButtonBox>;

    constructor(properties?: Partial<HButtonBox.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HButtonBox.ConstructorProperties>, ...args: any[]): void;

    // Fields
    button_box: ButtonBox;

    // Constructors

    static ["new"](): HButtonBox;
}
export module HPaned {
    export interface ConstructorProperties extends Paned.ConstructorProperties {
        [key: string]: any;
    }
}
export class HPaned extends Paned implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<HPaned>;

    constructor(properties?: Partial<HPaned.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HPaned.ConstructorProperties>, ...args: any[]): void;

    // Fields
    paned: Paned;

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](): HPaned;

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module HSV {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
    }
}
export class HSV extends Widget implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<HSV>;

    constructor(properties?: Partial<HSV.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HSV.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this) => void): number;
    connect_after(signal: "changed", callback: (_source: this) => void): number;
    emit(signal: "changed"): void;
    connect(signal: "move", callback: (_source: this, object: DirectionType) => void): number;
    connect_after(signal: "move", callback: (_source: this, object: DirectionType) => void): number;
    emit(signal: "move", object: DirectionType): void;

    // Constructors

    static ["new"](): HSV;

    // Members

    get_color(): [number, number, number];
    get_metrics(): [number, number];
    is_adjusting(): boolean;
    set_color(h: number, s: number, v: number): void;
    set_metrics(size: number, ring_width: number): void;
    vfunc_changed(): void;
    vfunc_move(type: DirectionType): void;
    static to_rgb(h: number, s: number, v: number): [number, number, number];

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
}
export module HScale {
    export interface ConstructorProperties extends Scale.ConstructorProperties {
        [key: string]: any;
    }
}
export class HScale extends Scale implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<HScale>;

    constructor(properties?: Partial<HScale.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HScale.ConstructorProperties>, ...args: any[]): void;

    // Fields
    scale: Scale;

    // Constructors

    static ["new"](adjustment?: Adjustment | null): HScale;
    // Conflicted with Gtk.Scale.new
    static ["new"](...args: never[]): any;
    static new_with_range(min: number, max: number, step: number): HScale;
    // Conflicted with Gtk.Scale.new_with_range
    static new_with_range(...args: never[]): any;
}
export module HScrollbar {
    export interface ConstructorProperties extends Scrollbar.ConstructorProperties {
        [key: string]: any;
    }
}
export class HScrollbar extends Scrollbar implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<HScrollbar>;

    constructor(properties?: Partial<HScrollbar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HScrollbar.ConstructorProperties>, ...args: any[]): void;

    // Fields
    scrollbar: Scrollbar;

    // Constructors

    static ["new"](adjustment?: Adjustment | null): HScrollbar;
    // Conflicted with Gtk.Scrollbar.new
    static ["new"](...args: never[]): any;
}
export module HSeparator {
    export interface ConstructorProperties extends Separator.ConstructorProperties {
        [key: string]: any;
    }
}
export class HSeparator extends Separator implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<HSeparator>;

    constructor(properties?: Partial<HSeparator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HSeparator.ConstructorProperties>, ...args: any[]): void;

    // Fields
    separator: Separator;

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](): HSeparator;

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module HandleBox {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        childDetached: boolean;
        handlePosition: PositionType;
        shadowType: ShadowType;
        snapEdge: PositionType;
        snapEdgeSet: boolean;
    }
}
export class HandleBox extends Bin implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<HandleBox>;

    constructor(properties?: Partial<HandleBox.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HandleBox.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get childDetached(): boolean;
    get handlePosition(): PositionType;
    set handlePosition(val: PositionType);
    get shadowType(): ShadowType;
    set shadowType(val: ShadowType);
    get snapEdge(): PositionType;
    set snapEdge(val: PositionType);
    get snapEdgeSet(): boolean;
    set snapEdgeSet(val: boolean);

    // Fields
    bin: Bin;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "child-attached", callback: (_source: this, widget: Widget) => void): number;
    connect_after(signal: "child-attached", callback: (_source: this, widget: Widget) => void): number;
    emit(signal: "child-attached", widget: Widget): void;
    connect(signal: "child-detached", callback: (_source: this, widget: Widget) => void): number;
    connect_after(signal: "child-detached", callback: (_source: this, widget: Widget) => void): number;
    emit(signal: "child-detached", widget: Widget): void;

    // Constructors

    static ["new"](): HandleBox;

    // Members

    get_child_detached(): boolean;
    get_handle_position(): PositionType;
    get_shadow_type(): ShadowType;
    get_snap_edge(): PositionType;
    set_handle_position(position: PositionType): void;
    set_shadow_type(type: ShadowType): void;
    set_snap_edge(edge: PositionType): void;
    vfunc_child_attached(child: Widget): void;
    vfunc_child_detached(child: Widget): void;
}
export module HeaderBar {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        customTitle: Widget;
        decorationLayout: string;
        decorationLayoutSet: boolean;
        hasSubtitle: boolean;
        showCloseButton: boolean;
        spacing: number;
        subtitle: string;
        title: string;
    }
}
export class HeaderBar extends Container implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<HeaderBar>;

    constructor(properties?: Partial<HeaderBar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HeaderBar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get customTitle(): Widget;
    set customTitle(val: Widget);
    get decorationLayout(): string;
    set decorationLayout(val: string);
    get decorationLayoutSet(): boolean;
    set decorationLayoutSet(val: boolean);
    get hasSubtitle(): boolean;
    set hasSubtitle(val: boolean);
    get showCloseButton(): boolean;
    set showCloseButton(val: boolean);
    get spacing(): number;
    set spacing(val: number);
    get subtitle(): string;
    set subtitle(val: string);
    get title(): string;
    set title(val: string);

    // Fields
    container: Container;

    // Constructors

    static ["new"](): HeaderBar;

    // Members

    get_custom_title(): Widget | null;
    get_decoration_layout(): string;
    get_has_subtitle(): boolean;
    get_show_close_button(): boolean;
    get_subtitle(): string | null;
    get_title(): string | null;
    pack_end(child: Widget): void;
    pack_start(child: Widget): void;
    set_custom_title(title_widget?: Widget | null): void;
    set_decoration_layout(layout?: string | null): void;
    set_has_subtitle(setting: boolean): void;
    set_show_close_button(setting: boolean): void;
    set_subtitle(subtitle?: string | null): void;
    set_title(title?: string | null): void;
}
export module HeaderBarAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class HeaderBarAccessible extends ContainerAccessible implements Atk.Component {
    static $gtype: GObject.GType<HeaderBarAccessible>;

    constructor(properties?: Partial<HeaderBarAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<HeaderBarAccessible.ConstructorProperties>, ...args: any[]): void;
}
export module IMContext {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        inputHints: InputHints;
        inputPurpose: InputPurpose;
    }
}
export abstract class IMContext extends GObject.Object {
    static $gtype: GObject.GType<IMContext>;

    constructor(properties?: Partial<IMContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<IMContext.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get inputHints(): InputHints;
    set inputHints(val: InputHints);
    get inputPurpose(): InputPurpose;
    set inputPurpose(val: InputPurpose);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "commit", callback: (_source: this, str: string) => void): number;
    connect_after(signal: "commit", callback: (_source: this, str: string) => void): number;
    emit(signal: "commit", str: string): void;
    connect(
        signal: "delete-surrounding",
        callback: (_source: this, offset: number, n_chars: number) => boolean
    ): number;
    connect_after(
        signal: "delete-surrounding",
        callback: (_source: this, offset: number, n_chars: number) => boolean
    ): number;
    emit(signal: "delete-surrounding", offset: number, n_chars: number): void;
    connect(signal: "preedit-changed", callback: (_source: this) => void): number;
    connect_after(signal: "preedit-changed", callback: (_source: this) => void): number;
    emit(signal: "preedit-changed"): void;
    connect(signal: "preedit-end", callback: (_source: this) => void): number;
    connect_after(signal: "preedit-end", callback: (_source: this) => void): number;
    emit(signal: "preedit-end"): void;
    connect(signal: "preedit-start", callback: (_source: this) => void): number;
    connect_after(signal: "preedit-start", callback: (_source: this) => void): number;
    emit(signal: "preedit-start"): void;
    connect(signal: "retrieve-surrounding", callback: (_source: this) => boolean): number;
    connect_after(signal: "retrieve-surrounding", callback: (_source: this) => boolean): number;
    emit(signal: "retrieve-surrounding"): void;

    // Members

    delete_surrounding(offset: number, n_chars: number): boolean;
    filter_keypress(event: Gdk.EventKey): boolean;
    focus_in(): void;
    focus_out(): void;
    get_preedit_string(): [string, Pango.AttrList, number];
    get_surrounding(): [boolean, string, number];
    reset(): void;
    set_client_window(window?: Gdk.Window | null): void;
    set_cursor_location(area: Gdk.Rectangle): void;
    set_surrounding(text: string, len: number, cursor_index: number): void;
    set_use_preedit(use_preedit: boolean): void;
    vfunc_commit(str: string): void;
    vfunc_delete_surrounding(offset: number, n_chars: number): boolean;
    vfunc_filter_keypress(event: Gdk.EventKey): boolean;
    vfunc_focus_in(): void;
    vfunc_focus_out(): void;
    vfunc_get_preedit_string(): [string, Pango.AttrList, number];
    vfunc_get_surrounding(): [boolean, string, number];
    vfunc_preedit_changed(): void;
    vfunc_preedit_end(): void;
    vfunc_preedit_start(): void;
    vfunc_reset(): void;
    vfunc_retrieve_surrounding(): boolean;
    vfunc_set_client_window(window?: Gdk.Window | null): void;
    vfunc_set_cursor_location(area: Gdk.Rectangle): void;
    vfunc_set_surrounding(text: string, len: number, cursor_index: number): void;
    vfunc_set_use_preedit(use_preedit: boolean): void;
}
export module IMContextSimple {
    export interface ConstructorProperties extends IMContext.ConstructorProperties {
        [key: string]: any;
    }
}
export class IMContextSimple extends IMContext {
    static $gtype: GObject.GType<IMContextSimple>;

    constructor(properties?: Partial<IMContextSimple.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<IMContextSimple.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: IMContext;

    // Constructors

    static ["new"](): IMContextSimple;

    // Members

    add_compose_file(compose_file: string): void;
}
export module IMMulticontext {
    export interface ConstructorProperties extends IMContext.ConstructorProperties {
        [key: string]: any;
    }
}
export class IMMulticontext extends IMContext {
    static $gtype: GObject.GType<IMMulticontext>;

    constructor(properties?: Partial<IMMulticontext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<IMMulticontext.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: IMContext;

    // Constructors

    static ["new"](): IMMulticontext;

    // Members

    append_menuitems(menushell: MenuShell): void;
    get_context_id(): string;
    set_context_id(context_id: string): void;
}
export module IconFactory {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class IconFactory extends GObject.Object implements Buildable {
    static $gtype: GObject.GType<IconFactory>;

    constructor(properties?: Partial<IconFactory.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<IconFactory.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): IconFactory;

    // Members

    add(stock_id: string, icon_set: IconSet): void;
    add_default(): void;
    lookup(stock_id: string): IconSet;
    remove_default(): void;
    static lookup_default(stock_id: string): IconSet;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
}
export module IconInfo {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class IconInfo extends GObject.Object {
    static $gtype: GObject.GType<IconInfo>;

    constructor(properties?: Partial<IconInfo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<IconInfo.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_for_pixbuf(icon_theme: IconTheme, pixbuf: GdkPixbuf.Pixbuf): IconInfo;

    // Members

    get_attach_points(): [boolean, Gdk.Point[] | null];
    get_base_scale(): number;
    get_base_size(): number;
    get_builtin_pixbuf(): GdkPixbuf.Pixbuf | null;
    get_display_name(): string;
    get_embedded_rect(): [boolean, Gdk.Rectangle];
    get_filename(): string | null;
    is_symbolic(): boolean;
    load_icon(): GdkPixbuf.Pixbuf;
    load_icon_async(cancellable?: Gio.Cancellable | null): Promise<GdkPixbuf.Pixbuf>;
    load_icon_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;
    load_icon_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<GdkPixbuf.Pixbuf> | void;
    load_icon_finish(res: Gio.AsyncResult): GdkPixbuf.Pixbuf;
    load_surface(for_window?: Gdk.Window | null): cairo.Surface;
    load_symbolic(
        fg: Gdk.RGBA,
        success_color: Gdk.RGBA | null,
        warning_color: Gdk.RGBA | null,
        error_color: Gdk.RGBA | null
    ): [GdkPixbuf.Pixbuf, boolean];
    load_symbolic_async(
        fg: Gdk.RGBA,
        success_color?: Gdk.RGBA | null,
        warning_color?: Gdk.RGBA | null,
        error_color?: Gdk.RGBA | null,
        cancellable?: Gio.Cancellable | null
    ): Promise<[GdkPixbuf.Pixbuf, boolean]>;
    load_symbolic_async(
        fg: Gdk.RGBA,
        success_color: Gdk.RGBA | null,
        warning_color: Gdk.RGBA | null,
        error_color: Gdk.RGBA | null,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    load_symbolic_async(
        fg: Gdk.RGBA,
        success_color?: Gdk.RGBA | null,
        warning_color?: Gdk.RGBA | null,
        error_color?: Gdk.RGBA | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[GdkPixbuf.Pixbuf, boolean]> | void;
    load_symbolic_finish(res: Gio.AsyncResult): [GdkPixbuf.Pixbuf, boolean];
    load_symbolic_for_context(context: StyleContext): [GdkPixbuf.Pixbuf, boolean];
    load_symbolic_for_context_async(
        context: StyleContext,
        cancellable?: Gio.Cancellable | null
    ): Promise<[GdkPixbuf.Pixbuf, boolean]>;
    load_symbolic_for_context_async(
        context: StyleContext,
        cancellable: Gio.Cancellable | null,
        callback: Gio.AsyncReadyCallback<this> | null
    ): void;
    load_symbolic_for_context_async(
        context: StyleContext,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): Promise<[GdkPixbuf.Pixbuf, boolean]> | void;
    load_symbolic_for_context_finish(res: Gio.AsyncResult): [GdkPixbuf.Pixbuf, boolean];
    load_symbolic_for_style(style: Style, state: StateType): [GdkPixbuf.Pixbuf, boolean];
    set_raw_coordinates(raw_coordinates: boolean): void;
}
export module IconTheme {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class IconTheme extends GObject.Object {
    static $gtype: GObject.GType<IconTheme>;

    constructor(properties?: Partial<IconTheme.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<IconTheme.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this) => void): number;
    connect_after(signal: "changed", callback: (_source: this) => void): number;
    emit(signal: "changed"): void;

    // Constructors

    static ["new"](): IconTheme;

    // Members

    add_resource_path(path: string): void;
    append_search_path(path: string): void;
    choose_icon(icon_names: string[], size: number, flags: IconLookupFlags): IconInfo | null;
    choose_icon_for_scale(icon_names: string[], size: number, scale: number, flags: IconLookupFlags): IconInfo | null;
    get_example_icon_name(): string | null;
    get_icon_sizes(icon_name: string): number[];
    get_search_path(): string[] | null;
    has_icon(icon_name: string): boolean;
    list_contexts(): string[];
    list_icons(context?: string | null): string[];
    load_icon(icon_name: string, size: number, flags: IconLookupFlags): GdkPixbuf.Pixbuf | null;
    load_icon_for_scale(
        icon_name: string,
        size: number,
        scale: number,
        flags: IconLookupFlags
    ): GdkPixbuf.Pixbuf | null;
    load_surface(
        icon_name: string,
        size: number,
        scale: number,
        for_window: Gdk.Window | null,
        flags: IconLookupFlags
    ): cairo.Surface | null;
    lookup_by_gicon(icon: Gio.Icon, size: number, flags: IconLookupFlags): IconInfo | null;
    lookup_by_gicon_for_scale(icon: Gio.Icon, size: number, scale: number, flags: IconLookupFlags): IconInfo | null;
    lookup_icon(icon_name: string, size: number, flags: IconLookupFlags): IconInfo | null;
    lookup_icon_for_scale(icon_name: string, size: number, scale: number, flags: IconLookupFlags): IconInfo | null;
    prepend_search_path(path: string): void;
    rescan_if_needed(): boolean;
    set_custom_theme(theme_name?: string | null): void;
    set_screen(screen: Gdk.Screen): void;
    set_search_path(path: string[]): void;
    vfunc_changed(): void;
    static add_builtin_icon(icon_name: string, size: number, pixbuf: GdkPixbuf.Pixbuf): void;
    static get_default(): IconTheme;
    static get_for_screen(screen: Gdk.Screen): IconTheme;
}
export module IconView {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        activateOnSingleClick: boolean;
        cellArea: CellArea;
        columnSpacing: number;
        columns: number;
        itemOrientation: Orientation;
        itemPadding: number;
        itemWidth: number;
        margin: number;
        markupColumn: number;
        model: TreeModel;
        pixbufColumn: number;
        reorderable: boolean;
        rowSpacing: number;
        selectionMode: SelectionMode;
        spacing: number;
        textColumn: number;
        tooltipColumn: number;
    }
}
export class IconView extends Container implements Atk.ImplementorIface, Buildable, CellLayout, Scrollable {
    static $gtype: GObject.GType<IconView>;

    constructor(properties?: Partial<IconView.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<IconView.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get activateOnSingleClick(): boolean;
    set activateOnSingleClick(val: boolean);
    get cellArea(): CellArea;
    get columnSpacing(): number;
    set columnSpacing(val: number);
    get columns(): number;
    set columns(val: number);
    get itemOrientation(): Orientation;
    set itemOrientation(val: Orientation);
    get itemPadding(): number;
    set itemPadding(val: number);
    get itemWidth(): number;
    set itemWidth(val: number);
    get margin(): number;
    set margin(val: number);
    get markupColumn(): number;
    set markupColumn(val: number);
    get model(): TreeModel;
    set model(val: TreeModel);
    get pixbufColumn(): number;
    set pixbufColumn(val: number);
    get reorderable(): boolean;
    set reorderable(val: boolean);
    get rowSpacing(): number;
    set rowSpacing(val: number);
    get selectionMode(): SelectionMode;
    set selectionMode(val: SelectionMode);
    get spacing(): number;
    set spacing(val: number);
    get textColumn(): number;
    set textColumn(val: number);
    get tooltipColumn(): number;
    set tooltipColumn(val: number);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "activate-cursor-item", callback: (_source: this) => boolean): number;
    connect_after(signal: "activate-cursor-item", callback: (_source: this) => boolean): number;
    emit(signal: "activate-cursor-item"): void;
    connect(signal: "item-activated", callback: (_source: this, path: TreePath) => void): number;
    connect_after(signal: "item-activated", callback: (_source: this, path: TreePath) => void): number;
    emit(signal: "item-activated", path: TreePath): void;
    connect(signal: "move-cursor", callback: (_source: this, step: MovementStep, count: number) => boolean): number;
    connect_after(
        signal: "move-cursor",
        callback: (_source: this, step: MovementStep, count: number) => boolean
    ): number;
    emit(signal: "move-cursor", step: MovementStep, count: number): void;
    connect(signal: "select-all", callback: (_source: this) => void): number;
    connect_after(signal: "select-all", callback: (_source: this) => void): number;
    emit(signal: "select-all"): void;
    connect(signal: "select-cursor-item", callback: (_source: this) => void): number;
    connect_after(signal: "select-cursor-item", callback: (_source: this) => void): number;
    emit(signal: "select-cursor-item"): void;
    connect(signal: "selection-changed", callback: (_source: this) => void): number;
    connect_after(signal: "selection-changed", callback: (_source: this) => void): number;
    emit(signal: "selection-changed"): void;
    connect(signal: "toggle-cursor-item", callback: (_source: this) => void): number;
    connect_after(signal: "toggle-cursor-item", callback: (_source: this) => void): number;
    emit(signal: "toggle-cursor-item"): void;
    connect(signal: "unselect-all", callback: (_source: this) => void): number;
    connect_after(signal: "unselect-all", callback: (_source: this) => void): number;
    emit(signal: "unselect-all"): void;

    // Implemented Properties

    get hadjustment(): Adjustment;
    set hadjustment(val: Adjustment);
    get hscrollPolicy(): ScrollablePolicy;
    set hscrollPolicy(val: ScrollablePolicy);
    get vadjustment(): Adjustment;
    set vadjustment(val: Adjustment);
    get vscrollPolicy(): ScrollablePolicy;
    set vscrollPolicy(val: ScrollablePolicy);

    // Constructors

    static ["new"](): IconView;
    static new_with_area(area: CellArea): IconView;
    static new_with_model(model: TreeModel): IconView;

    // Members

    convert_widget_to_bin_window_coords(wx: number, wy: number): [number, number];
    create_drag_icon(path: TreePath): cairo.Surface;
    enable_model_drag_dest(targets: TargetEntry[], actions: Gdk.DragAction): void;
    enable_model_drag_source(
        start_button_mask: Gdk.ModifierType,
        targets: TargetEntry[],
        actions: Gdk.DragAction
    ): void;
    get_activate_on_single_click(): boolean;
    get_cell_rect(path: TreePath, cell: CellRenderer | null): [boolean, Gdk.Rectangle];
    get_column_spacing(): number;
    get_columns(): number;
    get_cursor(): [boolean, TreePath | null, CellRenderer | null];
    get_dest_item_at_pos(drag_x: number, drag_y: number): [boolean, TreePath | null, IconViewDropPosition | null];
    get_drag_dest_item(): [TreePath | null, IconViewDropPosition | null];
    get_item_at_pos(x: number, y: number): [boolean, TreePath | null, CellRenderer | null];
    get_item_column(path: TreePath): number;
    get_item_orientation(): Orientation;
    get_item_padding(): number;
    get_item_row(path: TreePath): number;
    get_item_width(): number;
    get_margin(): number;
    get_markup_column(): number;
    get_model(): TreeModel | null;
    get_path_at_pos(x: number, y: number): TreePath | null;
    get_pixbuf_column(): number;
    get_reorderable(): boolean;
    get_row_spacing(): number;
    get_selected_items(): TreePath[];
    get_selection_mode(): SelectionMode;
    get_spacing(): number;
    get_text_column(): number;
    get_tooltip_column(): number;
    get_tooltip_context(
        x: number,
        y: number,
        keyboard_tip: boolean
    ): [boolean, number, number, TreeModel | null, TreePath | null, TreeIter | null];
    get_visible_range(): [boolean, TreePath | null, TreePath | null];
    item_activated(path: TreePath): void;
    path_is_selected(path: TreePath): boolean;
    scroll_to_path(path: TreePath, use_align: boolean, row_align: number, col_align: number): void;
    select_all(): void;
    select_path(path: TreePath): void;
    selected_foreach(func: IconViewForeachFunc): void;
    set_activate_on_single_click(single: boolean): void;
    set_column_spacing(column_spacing: number): void;
    set_columns(columns: number): void;
    set_cursor(path: TreePath, cell: CellRenderer | null, start_editing: boolean): void;
    set_drag_dest_item(path: TreePath | null, pos: IconViewDropPosition): void;
    set_item_orientation(orientation: Orientation): void;
    set_item_padding(item_padding: number): void;
    set_item_width(item_width: number): void;
    set_margin(margin: number): void;
    set_markup_column(column: number): void;
    set_model(model?: TreeModel | null): void;
    set_pixbuf_column(column: number): void;
    set_reorderable(reorderable: boolean): void;
    set_row_spacing(row_spacing: number): void;
    set_selection_mode(mode: SelectionMode): void;
    set_spacing(spacing: number): void;
    set_text_column(column: number): void;
    set_tooltip_cell(tooltip: Tooltip, path: TreePath, cell?: CellRenderer | null): void;
    set_tooltip_column(column: number): void;
    set_tooltip_item(tooltip: Tooltip, path: TreePath): void;
    unselect_all(): void;
    unselect_path(path: TreePath): void;
    unset_model_drag_dest(): void;
    unset_model_drag_source(): void;
    vfunc_activate_cursor_item(): boolean;
    vfunc_item_activated(path: TreePath): void;
    vfunc_move_cursor(step: MovementStep, count: number): boolean;
    vfunc_select_all(): void;
    vfunc_select_cursor_item(): void;
    vfunc_selection_changed(): void;
    vfunc_toggle_cursor_item(): void;
    vfunc_unselect_all(): void;

    // Implemented Members

    add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    clear(): void;
    clear_attributes(cell: CellRenderer): void;
    get_area(): CellArea | null;
    get_cells(): CellRenderer[];
    pack_end(cell: CellRenderer, expand: boolean): void;
    pack_start(cell: CellRenderer, expand: boolean): void;
    reorder(cell: CellRenderer, position: number): void;
    set_cell_data_func(cell: CellRenderer, func?: CellLayoutDataFunc | null): void;
    vfunc_add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    vfunc_clear(): void;
    vfunc_clear_attributes(cell: CellRenderer): void;
    vfunc_get_area(): CellArea | null;
    vfunc_get_cells(): CellRenderer[];
    vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
    vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
    vfunc_reorder(cell: CellRenderer, position: number): void;
    vfunc_set_cell_data_func(cell: CellRenderer, func?: CellLayoutDataFunc | null): void;
    get_border(): [boolean, Border];
    get_hadjustment(): Adjustment;
    get_hscroll_policy(): ScrollablePolicy;
    get_vadjustment(): Adjustment;
    get_vscroll_policy(): ScrollablePolicy;
    set_hadjustment(hadjustment?: Adjustment | null): void;
    set_hscroll_policy(policy: ScrollablePolicy): void;
    set_vadjustment(vadjustment?: Adjustment | null): void;
    set_vscroll_policy(policy: ScrollablePolicy): void;
    vfunc_get_border(): [boolean, Border];
}
export module IconViewAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class IconViewAccessible extends ContainerAccessible implements Atk.Component, Atk.Selection {
    static $gtype: GObject.GType<IconViewAccessible>;

    constructor(properties?: Partial<IconViewAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<IconViewAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: IconViewAccessiblePrivate | any;

    // Implemented Members

    add_selection(i: number): boolean;
    clear_selection(): boolean;
    get_selection_count(): number;
    is_child_selected(i: number): boolean;
    ref_selection(i: number): Atk.Object | null;
    remove_selection(i: number): boolean;
    select_all_selection(): boolean;
    vfunc_add_selection(i: number): boolean;
    vfunc_clear_selection(): boolean;
    vfunc_get_selection_count(): number;
    vfunc_is_child_selected(i: number): boolean;
    vfunc_ref_selection(i: number): Atk.Object | null;
    vfunc_remove_selection(i: number): boolean;
    vfunc_select_all_selection(): boolean;
    vfunc_selection_changed(): void;
}
export module Image {
    export interface ConstructorProperties extends Misc.ConstructorProperties {
        [key: string]: any;
        file: string;
        gicon: Gio.Icon;
        iconName: string;
        iconSet: IconSet;
        iconSize: number;
        pixbuf: GdkPixbuf.Pixbuf;
        pixbufAnimation: GdkPixbuf.PixbufAnimation;
        pixelSize: number;
        resource: string;
        stock: string;
        storageType: ImageType;
        surface: cairo.Surface;
        useFallback: boolean;
    }
}
export class Image extends Misc implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Image>;

    constructor(properties?: Partial<Image.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Image.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get file(): string;
    set file(val: string);
    get gicon(): Gio.Icon;
    set gicon(val: Gio.Icon);
    get iconName(): string;
    set iconName(val: string);
    get iconSet(): IconSet;
    set iconSet(val: IconSet);
    get iconSize(): number;
    set iconSize(val: number);
    get pixbuf(): GdkPixbuf.Pixbuf;
    set pixbuf(val: GdkPixbuf.Pixbuf);
    get pixbufAnimation(): GdkPixbuf.PixbufAnimation;
    set pixbufAnimation(val: GdkPixbuf.PixbufAnimation);
    get pixelSize(): number;
    set pixelSize(val: number);
    get resource(): string;
    set resource(val: string);
    get stock(): string;
    set stock(val: string);
    get storageType(): ImageType;
    get surface(): cairo.Surface;
    set surface(val: cairo.Surface);
    get useFallback(): boolean;
    set useFallback(val: boolean);

    // Fields
    misc: Misc;

    // Constructors

    static ["new"](): Image;
    static new_from_animation(animation: GdkPixbuf.PixbufAnimation): Image;
    static new_from_file(filename: string): Image;
    static new_from_gicon(icon: Gio.Icon, size: number): Image;
    static new_from_icon_name(icon_name: string | null, size: number): Image;
    static new_from_icon_set(icon_set: IconSet, size: number): Image;
    static new_from_pixbuf(pixbuf?: GdkPixbuf.Pixbuf | null): Image;
    static new_from_resource(resource_path: string): Image;
    static new_from_stock(stock_id: string, size: number): Image;
    static new_from_surface(surface?: cairo.Surface | null): Image;

    // Members

    clear(): void;
    get_animation(): GdkPixbuf.PixbufAnimation | null;
    get_gicon(): [Gio.Icon | null, number];
    get_icon_name(): [string, number];
    get_icon_set(): [IconSet | null, number];
    get_pixbuf(): GdkPixbuf.Pixbuf | null;
    get_pixel_size(): number;
    get_stock(): [string, number];
    get_storage_type(): ImageType;
    set_from_animation(animation: GdkPixbuf.PixbufAnimation): void;
    set_from_file(filename?: string | null): void;
    set_from_gicon(icon: Gio.Icon, size: number): void;
    set_from_icon_name(icon_name: string | null, size: number): void;
    set_from_icon_set(icon_set: IconSet, size: number): void;
    set_from_pixbuf(pixbuf?: GdkPixbuf.Pixbuf | null): void;
    set_from_resource(resource_path?: string | null): void;
    set_from_stock(stock_id: string, size: number): void;
    set_from_surface(surface?: cairo.Surface | null): void;
    set_pixel_size(pixel_size: number): void;
}
export module ImageAccessible {
    export interface ConstructorProperties extends WidgetAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ImageAccessible extends WidgetAccessible implements Atk.Component, Atk.Image {
    static $gtype: GObject.GType<ImageAccessible>;

    constructor(properties?: Partial<ImageAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ImageAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ImageAccessiblePrivate | any;

    // Implemented Members

    contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    get_alpha(): number;
    get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    get_layer(): Atk.Layer;
    get_mdi_zorder(): number;
    get_position(coord_type: Atk.CoordType): [number, number];
    get_size(): [number, number];
    grab_focus(): boolean;
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    remove_focus_handler(handler_id: number): void;
    scroll_to(type: Atk.ScrollType): boolean;
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    set_size(width: number, height: number): boolean;
    vfunc_bounds_changed(bounds: Atk.Rectangle): void;
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_get_alpha(): number;
    vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    vfunc_get_layer(): Atk.Layer;
    vfunc_get_mdi_zorder(): number;
    vfunc_get_position(coord_type: Atk.CoordType): [number, number];
    vfunc_get_size(): [number, number];
    vfunc_grab_focus(): boolean;
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    vfunc_remove_focus_handler(handler_id: number): void;
    vfunc_scroll_to(type: Atk.ScrollType): boolean;
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_size(width: number, height: number): boolean;
    get_image_description(): string;
    get_image_locale(): string | null;
    get_image_position(coord_type: Atk.CoordType): [number, number];
    get_image_size(): [number, number];
    set_image_description(description: string): boolean;
    vfunc_get_image_description(): string;
    vfunc_get_image_locale(): string | null;
    vfunc_get_image_position(coord_type: Atk.CoordType): [number, number];
    vfunc_get_image_size(): [number, number];
    vfunc_set_image_description(description: string): boolean;
}
export module ImageCellAccessible {
    export interface ConstructorProperties extends RendererCellAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ImageCellAccessible
    extends RendererCellAccessible
    implements Atk.Action, Atk.Component, Atk.Image, Atk.TableCell
{
    static $gtype: GObject.GType<ImageCellAccessible>;

    constructor(properties?: Partial<ImageCellAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ImageCellAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ImageCellAccessiblePrivate | any;

    // Implemented Members

    get_image_description(): string;
    get_image_locale(): string | null;
    get_image_position(coord_type: Atk.CoordType): [number, number];
    get_image_size(): [number, number];
    set_image_description(description: string): boolean;
    vfunc_get_image_description(): string;
    vfunc_get_image_locale(): string | null;
    vfunc_get_image_position(coord_type: Atk.CoordType): [number, number];
    vfunc_get_image_size(): [number, number];
    vfunc_set_image_description(description: string): boolean;
}
export module ImageMenuItem {
    export interface ConstructorProperties extends MenuItem.ConstructorProperties {
        [key: string]: any;
        accelGroup: AccelGroup;
        alwaysShowImage: boolean;
        image: Widget;
        useStock: boolean;
    }
}
export class ImageMenuItem extends MenuItem implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    static $gtype: GObject.GType<ImageMenuItem>;

    constructor(properties?: Partial<ImageMenuItem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ImageMenuItem.ConstructorProperties>, ...args: any[]): void;

    // Properties
    set accelGroup(val: AccelGroup);
    get alwaysShowImage(): boolean;
    set alwaysShowImage(val: boolean);
    get image(): Widget;
    set image(val: Widget);
    get useStock(): boolean;
    set useStock(val: boolean);

    // Fields
    menu_item: MenuItem;

    // Implemented Properties

    get actionName(): string;
    set actionName(val: string);
    get actionTarget(): GLib.Variant;
    set actionTarget(val: GLib.Variant);
    get relatedAction(): Action;
    set relatedAction(val: Action);
    get useActionAppearance(): boolean;
    set useActionAppearance(val: boolean);

    // Constructors

    static ["new"](): ImageMenuItem;
    static new_from_stock(stock_id: string, accel_group?: AccelGroup | null): ImageMenuItem;
    static new_with_label(label: string): ImageMenuItem;
    static new_with_mnemonic(label: string): ImageMenuItem;

    // Members

    get_always_show_image(): boolean;
    get_image(): Widget;
    get_use_stock(): boolean;
    set_accel_group(accel_group: AccelGroup): void;
    set_always_show_image(always_show: boolean): void;
    set_image(image?: Widget | null): void;
    set_use_stock(use_stock: boolean): void;

    // Implemented Members

    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name?: string | null): void;
    set_action_target_value(target_value?: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name?: string | null): void;
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action?: Action | null): void;
    vfunc_sync_action_properties(action?: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
}
export module InfoBar {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        messageType: MessageType;
        revealed: boolean;
        showCloseButton: boolean;
    }
}
export class InfoBar extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<InfoBar>;

    constructor(properties?: Partial<InfoBar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<InfoBar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get messageType(): MessageType;
    set messageType(val: MessageType);
    get revealed(): boolean;
    set revealed(val: boolean);
    get showCloseButton(): boolean;
    set showCloseButton(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "close", callback: (_source: this) => void): number;
    connect_after(signal: "close", callback: (_source: this) => void): number;
    emit(signal: "close"): void;
    connect(signal: "response", callback: (_source: this, response_id: number) => void): number;
    connect_after(signal: "response", callback: (_source: this, response_id: number) => void): number;
    emit(signal: "response", response_id: number): void;

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](): InfoBar;

    // Members

    add_action_widget(child: Widget, response_id: number): void;
    add_button(button_text: string, response_id: number): Button;
    get_action_area(): Box;
    get_content_area(): Box;
    get_message_type(): MessageType;
    get_revealed(): boolean;
    get_show_close_button(): boolean;
    response(response_id: number): void;
    set_default_response(response_id: number): void;
    set_message_type(message_type: MessageType): void;
    set_response_sensitive(response_id: number, setting: boolean): void;
    set_revealed(revealed: boolean): void;
    set_show_close_button(setting: boolean): void;
    vfunc_close(): void;
    vfunc_response(response_id: number): void;

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module Invisible {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        screen: Gdk.Screen;
    }
}
export class Invisible extends Widget implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Invisible>;

    constructor(properties?: Partial<Invisible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Invisible.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get screen(): Gdk.Screen;
    set screen(val: Gdk.Screen);

    // Fields
    widget: Widget;

    // Constructors

    static ["new"](): Invisible;
    static new_for_screen(screen: Gdk.Screen): Invisible;

    // Members

    get_screen(): Gdk.Screen;
    set_screen(screen: Gdk.Screen): void;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
}
export module Label {
    export interface ConstructorProperties extends Misc.ConstructorProperties {
        [key: string]: any;
        angle: number;
        attributes: Pango.AttrList;
        cursorPosition: number;
        ellipsize: Pango.EllipsizeMode;
        justify: Justification;
        label: string;
        lines: number;
        maxWidthChars: number;
        mnemonicKeyval: number;
        mnemonicWidget: Widget;
        pattern: string;
        selectable: boolean;
        selectionBound: number;
        singleLineMode: boolean;
        trackVisitedLinks: boolean;
        useMarkup: boolean;
        useUnderline: boolean;
        widthChars: number;
        wrap: boolean;
        wrapMode: Pango.WrapMode;
        xalign: number;
        yalign: number;
    }
}
export class Label extends Misc implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Label>;

    constructor(properties?: Partial<Label.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Label.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get angle(): number;
    set angle(val: number);
    get attributes(): Pango.AttrList;
    set attributes(val: Pango.AttrList);
    get cursorPosition(): number;
    get ellipsize(): Pango.EllipsizeMode;
    set ellipsize(val: Pango.EllipsizeMode);
    get justify(): Justification;
    set justify(val: Justification);
    get label(): string;
    set label(val: string);
    get lines(): number;
    set lines(val: number);
    get maxWidthChars(): number;
    set maxWidthChars(val: number);
    get mnemonicKeyval(): number;
    get mnemonicWidget(): Widget;
    set mnemonicWidget(val: Widget);
    set pattern(val: string);
    get selectable(): boolean;
    set selectable(val: boolean);
    get selectionBound(): number;
    get singleLineMode(): boolean;
    set singleLineMode(val: boolean);
    get trackVisitedLinks(): boolean;
    set trackVisitedLinks(val: boolean);
    get useMarkup(): boolean;
    set useMarkup(val: boolean);
    get useUnderline(): boolean;
    set useUnderline(val: boolean);
    get widthChars(): number;
    set widthChars(val: number);
    get wrap(): boolean;
    set wrap(val: boolean);
    get wrapMode(): Pango.WrapMode;
    set wrapMode(val: Pango.WrapMode);
    get xalign(): number;
    set xalign(val: number);
    get yalign(): number;
    set yalign(val: number);

    // Fields
    misc: Misc;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "activate-current-link", callback: (_source: this) => void): number;
    connect_after(signal: "activate-current-link", callback: (_source: this) => void): number;
    emit(signal: "activate-current-link"): void;
    connect(signal: "activate-link", callback: (_source: this, uri: string) => boolean): number;
    connect_after(signal: "activate-link", callback: (_source: this, uri: string) => boolean): number;
    emit(signal: "activate-link", uri: string): void;
    connect(signal: "copy-clipboard", callback: (_source: this) => void): number;
    connect_after(signal: "copy-clipboard", callback: (_source: this) => void): number;
    emit(signal: "copy-clipboard"): void;
    connect(
        signal: "move-cursor",
        callback: (_source: this, step: MovementStep, count: number, extend_selection: boolean) => void
    ): number;
    connect_after(
        signal: "move-cursor",
        callback: (_source: this, step: MovementStep, count: number, extend_selection: boolean) => void
    ): number;
    emit(signal: "move-cursor", step: MovementStep, count: number, extend_selection: boolean): void;
    connect(signal: "populate-popup", callback: (_source: this, menu: Menu) => void): number;
    connect_after(signal: "populate-popup", callback: (_source: this, menu: Menu) => void): number;
    emit(signal: "populate-popup", menu: Menu): void;

    // Constructors

    static ["new"](str?: string | null): Label;
    static new_with_mnemonic(str?: string | null): Label;

    // Members

    get_angle(): number;
    get_attributes(): Pango.AttrList | null;
    get_current_uri(): string;
    get_ellipsize(): Pango.EllipsizeMode;
    get_justify(): Justification;
    get_label(): string;
    get_layout(): Pango.Layout;
    get_layout_offsets(): [number, number];
    get_line_wrap(): boolean;
    get_line_wrap_mode(): Pango.WrapMode;
    get_lines(): number;
    get_max_width_chars(): number;
    get_mnemonic_keyval(): number;
    get_mnemonic_widget(): Widget | null;
    get_selectable(): boolean;
    get_selection_bounds(): [boolean, number, number];
    get_single_line_mode(): boolean;
    get_text(): string;
    get_track_visited_links(): boolean;
    get_use_markup(): boolean;
    get_use_underline(): boolean;
    get_width_chars(): number;
    get_xalign(): number;
    get_yalign(): number;
    select_region(start_offset: number, end_offset: number): void;
    set_angle(angle: number): void;
    set_attributes(attrs?: Pango.AttrList | null): void;
    set_ellipsize(mode: Pango.EllipsizeMode): void;
    set_justify(jtype: Justification): void;
    set_label(str: string): void;
    set_line_wrap(wrap: boolean): void;
    set_line_wrap_mode(wrap_mode: Pango.WrapMode): void;
    set_lines(lines: number): void;
    set_markup(str: string): void;
    set_markup_with_mnemonic(str: string): void;
    set_max_width_chars(n_chars: number): void;
    set_mnemonic_widget(widget?: Widget | null): void;
    set_pattern(pattern: string): void;
    set_selectable(setting: boolean): void;
    set_single_line_mode(single_line_mode: boolean): void;
    set_text(str: string): void;
    set_text_with_mnemonic(str: string): void;
    set_track_visited_links(track_links: boolean): void;
    set_use_markup(setting: boolean): void;
    set_use_underline(setting: boolean): void;
    set_width_chars(n_chars: number): void;
    set_xalign(xalign: number): void;
    set_yalign(yalign: number): void;
    vfunc_activate_link(uri: string): boolean;
    vfunc_copy_clipboard(): void;
    vfunc_move_cursor(step: MovementStep, count: number, extend_selection: boolean): void;
    vfunc_populate_popup(menu: Menu): void;
}
export module LabelAccessible {
    export interface ConstructorProperties extends WidgetAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class LabelAccessible extends WidgetAccessible implements Atk.Component, Atk.Hypertext, Atk.Text {
    static $gtype: GObject.GType<LabelAccessible>;

    constructor(properties?: Partial<LabelAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LabelAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: LabelAccessiblePrivate | any;

    // Implemented Members

    contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    get_alpha(): number;
    get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    get_layer(): Atk.Layer;
    get_mdi_zorder(): number;
    get_position(coord_type: Atk.CoordType): [number, number];
    get_size(): [number, number];
    grab_focus(): boolean;
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    remove_focus_handler(handler_id: number): void;
    scroll_to(type: Atk.ScrollType): boolean;
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    set_size(width: number, height: number): boolean;
    vfunc_bounds_changed(bounds: Atk.Rectangle): void;
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_get_alpha(): number;
    vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    vfunc_get_layer(): Atk.Layer;
    vfunc_get_mdi_zorder(): number;
    vfunc_get_position(coord_type: Atk.CoordType): [number, number];
    vfunc_get_size(): [number, number];
    vfunc_grab_focus(): boolean;
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    vfunc_remove_focus_handler(handler_id: number): void;
    vfunc_scroll_to(type: Atk.ScrollType): boolean;
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_size(width: number, height: number): boolean;
    get_link(link_index: number): Atk.Hyperlink;
    get_link_index(char_index: number): number;
    get_n_links(): number;
    vfunc_get_link(link_index: number): Atk.Hyperlink;
    vfunc_get_link_index(char_index: number): number;
    vfunc_get_n_links(): number;
    vfunc_link_selected(link_index: number): void;
    add_selection(start_offset: number, end_offset: number): boolean;
    get_bounded_ranges(
        rect: Atk.TextRectangle,
        coord_type: Atk.CoordType,
        x_clip_type: Atk.TextClipType,
        y_clip_type: Atk.TextClipType
    ): Atk.TextRange[];
    get_caret_offset(): number;
    get_character_at_offset(offset: number): number;
    get_character_count(): number;
    get_character_extents(offset: number, coords: Atk.CoordType): [number, number, number, number];
    get_default_attributes(): Atk.AttributeSet;
    get_n_selections(): number;
    get_offset_at_point(x: number, y: number, coords: Atk.CoordType): number;
    get_range_extents(start_offset: number, end_offset: number, coord_type: Atk.CoordType): Atk.TextRectangle;
    get_run_attributes(offset: number): [Atk.AttributeSet, number, number];
    get_selection(selection_num: number): [string, number, number];
    get_string_at_offset(offset: number, granularity: Atk.TextGranularity): [string | null, number, number];
    get_text(start_offset: number, end_offset: number): string;
    get_text_after_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    get_text_at_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    get_text_before_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    remove_selection(selection_num: number): boolean;
    scroll_substring_to(start_offset: number, end_offset: number, type: Atk.ScrollType): boolean;
    scroll_substring_to_point(
        start_offset: number,
        end_offset: number,
        coords: Atk.CoordType,
        x: number,
        y: number
    ): boolean;
    set_caret_offset(offset: number): boolean;
    set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
    vfunc_add_selection(start_offset: number, end_offset: number): boolean;
    vfunc_get_bounded_ranges(
        rect: Atk.TextRectangle,
        coord_type: Atk.CoordType,
        x_clip_type: Atk.TextClipType,
        y_clip_type: Atk.TextClipType
    ): Atk.TextRange[];
    vfunc_get_caret_offset(): number;
    vfunc_get_character_at_offset(offset: number): number;
    vfunc_get_character_count(): number;
    vfunc_get_character_extents(offset: number, coords: Atk.CoordType): [number, number, number, number];
    vfunc_get_default_attributes(): Atk.AttributeSet;
    vfunc_get_n_selections(): number;
    vfunc_get_offset_at_point(x: number, y: number, coords: Atk.CoordType): number;
    vfunc_get_range_extents(start_offset: number, end_offset: number, coord_type: Atk.CoordType): Atk.TextRectangle;
    vfunc_get_run_attributes(offset: number): [Atk.AttributeSet, number, number];
    vfunc_get_selection(selection_num: number): [string, number, number];
    vfunc_get_string_at_offset(offset: number, granularity: Atk.TextGranularity): [string | null, number, number];
    vfunc_get_text(start_offset: number, end_offset: number): string;
    vfunc_get_text_after_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    vfunc_get_text_at_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    vfunc_get_text_before_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    vfunc_remove_selection(selection_num: number): boolean;
    vfunc_scroll_substring_to(start_offset: number, end_offset: number, type: Atk.ScrollType): boolean;
    vfunc_scroll_substring_to_point(
        start_offset: number,
        end_offset: number,
        coords: Atk.CoordType,
        x: number,
        y: number
    ): boolean;
    vfunc_set_caret_offset(offset: number): boolean;
    vfunc_set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
    vfunc_text_attributes_changed(): void;
    vfunc_text_caret_moved(location: number): void;
    vfunc_text_changed(position: number, length: number): void;
    vfunc_text_selection_changed(): void;
}
export module Layout {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        height: number;
        width: number;
    }
}
export class Layout extends Container implements Atk.ImplementorIface, Buildable, Scrollable {
    static $gtype: GObject.GType<Layout>;

    constructor(properties?: Partial<Layout.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Layout.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get height(): number;
    set height(val: number);
    get width(): number;
    set width(val: number);

    // Fields
    container: Container;

    // Implemented Properties

    get hadjustment(): Adjustment;
    set hadjustment(val: Adjustment);
    get hscrollPolicy(): ScrollablePolicy;
    set hscrollPolicy(val: ScrollablePolicy);
    get vadjustment(): Adjustment;
    set vadjustment(val: Adjustment);
    get vscrollPolicy(): ScrollablePolicy;
    set vscrollPolicy(val: ScrollablePolicy);

    // Constructors

    static ["new"](hadjustment?: Adjustment | null, vadjustment?: Adjustment | null): Layout;

    // Members

    get_bin_window(): Gdk.Window;
    get_hadjustment(): Adjustment;
    get_size(): [number, number];
    get_vadjustment(): Adjustment;
    move(child_widget: Widget, x: number, y: number): void;
    put(child_widget: Widget, x: number, y: number): void;
    set_hadjustment(adjustment?: Adjustment | null): void;
    set_size(width: number, height: number): void;
    set_vadjustment(adjustment?: Adjustment | null): void;

    // Implemented Members

    get_border(): [boolean, Border];
    get_hscroll_policy(): ScrollablePolicy;
    get_vscroll_policy(): ScrollablePolicy;
    set_hscroll_policy(policy: ScrollablePolicy): void;
    set_vscroll_policy(policy: ScrollablePolicy): void;
    vfunc_get_border(): [boolean, Border];
}
export module LevelBar {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        inverted: boolean;
        maxValue: number;
        minValue: number;
        mode: LevelBarMode;
        value: number;
    }
}
export class LevelBar extends Widget implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<LevelBar>;

    constructor(properties?: Partial<LevelBar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LevelBar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get inverted(): boolean;
    set inverted(val: boolean);
    get maxValue(): number;
    set maxValue(val: number);
    get minValue(): number;
    set minValue(val: number);
    get mode(): LevelBarMode;
    set mode(val: LevelBarMode);
    get value(): number;
    set value(val: number);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "offset-changed", callback: (_source: this, name: string) => void): number;
    connect_after(signal: "offset-changed", callback: (_source: this, name: string) => void): number;
    emit(signal: "offset-changed", name: string): void;

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](): LevelBar;
    static new_for_interval(min_value: number, max_value: number): LevelBar;

    // Members

    add_offset_value(name: string, value: number): void;
    get_inverted(): boolean;
    get_max_value(): number;
    get_min_value(): number;
    get_mode(): LevelBarMode;
    get_offset_value(name: string | null): [boolean, number];
    get_value(): number;
    remove_offset_value(name?: string | null): void;
    set_inverted(inverted: boolean): void;
    set_max_value(value: number): void;
    set_min_value(value: number): void;
    set_mode(mode: LevelBarMode): void;
    set_value(value: number): void;
    vfunc_offset_changed(name: string): void;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module LevelBarAccessible {
    export interface ConstructorProperties extends WidgetAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class LevelBarAccessible extends WidgetAccessible implements Atk.Component, Atk.Value {
    static $gtype: GObject.GType<LevelBarAccessible>;

    constructor(properties?: Partial<LevelBarAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LevelBarAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: LevelBarAccessiblePrivate | any;

    // Implemented Members

    contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    get_alpha(): number;
    get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    get_layer(): Atk.Layer;
    get_mdi_zorder(): number;
    get_position(coord_type: Atk.CoordType): [number, number];
    get_size(): [number, number];
    grab_focus(): boolean;
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    remove_focus_handler(handler_id: number): void;
    scroll_to(type: Atk.ScrollType): boolean;
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    set_size(width: number, height: number): boolean;
    vfunc_bounds_changed(bounds: Atk.Rectangle): void;
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_get_alpha(): number;
    vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    vfunc_get_layer(): Atk.Layer;
    vfunc_get_mdi_zorder(): number;
    vfunc_get_position(coord_type: Atk.CoordType): [number, number];
    vfunc_get_size(): [number, number];
    vfunc_grab_focus(): boolean;
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    vfunc_remove_focus_handler(handler_id: number): void;
    vfunc_scroll_to(type: Atk.ScrollType): boolean;
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_size(width: number, height: number): boolean;
    get_current_value(): unknown;
    get_increment(): number;
    get_maximum_value(): unknown;
    get_minimum_increment(): unknown;
    get_minimum_value(): unknown;
    get_range(): Atk.Range | null;
    get_sub_ranges(): Atk.Range[];
    get_value_and_text(): [number, string];
    set_current_value(value: GObject.Value | any): boolean;
    set_value(new_value: number): void;
    vfunc_get_current_value(): unknown;
    vfunc_get_increment(): number;
    vfunc_get_maximum_value(): unknown;
    vfunc_get_minimum_increment(): unknown;
    vfunc_get_minimum_value(): unknown;
    vfunc_get_range(): Atk.Range | null;
    vfunc_get_sub_ranges(): Atk.Range[];
    vfunc_get_value_and_text(): [number, string];
    vfunc_set_current_value(value: GObject.Value | any): boolean;
    vfunc_set_value(new_value: number): void;
}
export module LinkButton {
    export interface ConstructorProperties extends Button.ConstructorProperties {
        [key: string]: any;
        uri: string;
        visited: boolean;
    }
}
export class LinkButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    static $gtype: GObject.GType<LinkButton>;

    constructor(properties?: Partial<LinkButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LinkButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get uri(): string;
    set uri(val: string);
    get visited(): boolean;
    set visited(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "activate-link", callback: (_source: this) => boolean): number;
    connect_after(signal: "activate-link", callback: (_source: this) => boolean): number;
    emit(signal: "activate-link"): void;

    // Implemented Properties

    get actionName(): string;
    set actionName(val: string);
    get actionTarget(): GLib.Variant;
    set actionTarget(val: GLib.Variant);
    get relatedAction(): Action;
    set relatedAction(val: Action);
    get useActionAppearance(): boolean;
    set useActionAppearance(val: boolean);

    // Constructors

    static ["new"](uri: string): LinkButton;
    // Conflicted with Gtk.Button.new
    static ["new"](...args: never[]): any;
    static new_with_label(uri: string, label?: string | null): LinkButton;
    // Conflicted with Gtk.Button.new_with_label
    static new_with_label(...args: never[]): any;

    // Members

    get_uri(): string;
    get_visited(): boolean;
    set_uri(uri: string): void;
    set_visited(visited: boolean): void;
    vfunc_activate_link(): boolean;

    // Implemented Members

    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name?: string | null): void;
    set_action_target_value(target_value?: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name?: string | null): void;
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action?: Action | null): void;
    vfunc_sync_action_properties(action?: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
}
export module LinkButtonAccessible {
    export interface ConstructorProperties extends ButtonAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class LinkButtonAccessible
    extends ButtonAccessible
    implements Atk.Action, Atk.Component, Atk.HyperlinkImpl, Atk.Image
{
    static $gtype: GObject.GType<LinkButtonAccessible>;

    constructor(properties?: Partial<LinkButtonAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LinkButtonAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: LinkButtonAccessiblePrivate | any;

    // Implemented Members

    do_action(i: number): boolean;
    get_description(i: number): string | null;
    // Conflicted with Atk.Object.get_description
    get_description(...args: never[]): any;
    get_keybinding(i: number): string | null;
    get_localized_name(i: number): string | null;
    get_n_actions(): number;
    get_name(i: number): string | null;
    // Conflicted with Atk.Object.get_name
    get_name(...args: never[]): any;
    set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.set_description
    set_description(...args: never[]): any;
    vfunc_do_action(i: number): boolean;
    vfunc_get_description(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_description
    vfunc_get_description(...args: never[]): any;
    vfunc_get_keybinding(i: number): string | null;
    vfunc_get_localized_name(i: number): string | null;
    vfunc_get_n_actions(): number;
    vfunc_get_name(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_name
    vfunc_get_name(...args: never[]): any;
    vfunc_set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.vfunc_set_description
    vfunc_set_description(...args: never[]): any;
    get_hyperlink(): Atk.Hyperlink;
    vfunc_get_hyperlink(): Atk.Hyperlink;
    get_image_description(): string;
    get_image_locale(): string | null;
    get_image_position(coord_type: Atk.CoordType): [number, number];
    get_image_size(): [number, number];
    set_image_description(description: string): boolean;
    vfunc_get_image_description(): string;
    vfunc_get_image_locale(): string | null;
    vfunc_get_image_position(coord_type: Atk.CoordType): [number, number];
    vfunc_get_image_size(): [number, number];
    vfunc_set_image_description(description: string): boolean;
}
export module ListBox {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        activateOnSingleClick: boolean;
        selectionMode: SelectionMode;
    }
}
export class ListBox extends Container implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<ListBox>;

    constructor(properties?: Partial<ListBox.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ListBox.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get activateOnSingleClick(): boolean;
    set activateOnSingleClick(val: boolean);
    get selectionMode(): SelectionMode;
    set selectionMode(val: SelectionMode);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "activate-cursor-row", callback: (_source: this) => void): number;
    connect_after(signal: "activate-cursor-row", callback: (_source: this) => void): number;
    emit(signal: "activate-cursor-row"): void;
    connect(signal: "move-cursor", callback: (_source: this, object: MovementStep, p0: number) => void): number;
    connect_after(signal: "move-cursor", callback: (_source: this, object: MovementStep, p0: number) => void): number;
    emit(signal: "move-cursor", object: MovementStep, p0: number): void;
    connect(signal: "row-activated", callback: (_source: this, row: ListBoxRow) => void): number;
    connect_after(signal: "row-activated", callback: (_source: this, row: ListBoxRow) => void): number;
    emit(signal: "row-activated", row: ListBoxRow): void;
    connect(signal: "row-selected", callback: (_source: this, row: ListBoxRow | null) => void): number;
    connect_after(signal: "row-selected", callback: (_source: this, row: ListBoxRow | null) => void): number;
    emit(signal: "row-selected", row: ListBoxRow | null): void;
    connect(signal: "select-all", callback: (_source: this) => void): number;
    connect_after(signal: "select-all", callback: (_source: this) => void): number;
    emit(signal: "select-all"): void;
    connect(signal: "selected-rows-changed", callback: (_source: this) => void): number;
    connect_after(signal: "selected-rows-changed", callback: (_source: this) => void): number;
    emit(signal: "selected-rows-changed"): void;
    connect(signal: "toggle-cursor-row", callback: (_source: this) => void): number;
    connect_after(signal: "toggle-cursor-row", callback: (_source: this) => void): number;
    emit(signal: "toggle-cursor-row"): void;
    connect(signal: "unselect-all", callback: (_source: this) => void): number;
    connect_after(signal: "unselect-all", callback: (_source: this) => void): number;
    emit(signal: "unselect-all"): void;

    // Constructors

    static ["new"](): ListBox;

    // Members

    bind_model(model?: Gio.ListModel | null, create_widget_func?: ListBoxCreateWidgetFunc | null): void;
    drag_highlight_row(row: ListBoxRow): void;
    drag_unhighlight_row(): void;
    get_activate_on_single_click(): boolean;
    get_adjustment(): Adjustment;
    get_row_at_index(index_: number): ListBoxRow | null;
    get_row_at_y(y: number): ListBoxRow | null;
    get_selected_row(): ListBoxRow;
    get_selected_rows(): ListBoxRow[];
    get_selection_mode(): SelectionMode;
    insert(child: Widget, position: number): void;
    invalidate_filter(): void;
    invalidate_headers(): void;
    invalidate_sort(): void;
    prepend(child: Widget): void;
    select_all(): void;
    select_row(row?: ListBoxRow | null): void;
    selected_foreach(func: ListBoxForeachFunc): void;
    set_activate_on_single_click(single: boolean): void;
    set_adjustment(adjustment?: Adjustment | null): void;
    set_filter_func(filter_func?: ListBoxFilterFunc | null): void;
    set_header_func(update_header?: ListBoxUpdateHeaderFunc | null): void;
    set_placeholder(placeholder?: Widget | null): void;
    set_selection_mode(mode: SelectionMode): void;
    set_sort_func(sort_func?: ListBoxSortFunc | null): void;
    unselect_all(): void;
    unselect_row(row: ListBoxRow): void;
    vfunc_activate_cursor_row(): void;
    vfunc_move_cursor(step: MovementStep, count: number): void;
    vfunc_row_activated(row: ListBoxRow): void;
    vfunc_row_selected(row: ListBoxRow): void;
    vfunc_select_all(): void;
    vfunc_selected_rows_changed(): void;
    vfunc_toggle_cursor_row(): void;
    vfunc_unselect_all(): void;
}
export module ListBoxAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ListBoxAccessible extends ContainerAccessible implements Atk.Component, Atk.Selection {
    static $gtype: GObject.GType<ListBoxAccessible>;

    constructor(properties?: Partial<ListBoxAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ListBoxAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ListBoxAccessiblePrivate | any;

    // Implemented Members

    add_selection(i: number): boolean;
    clear_selection(): boolean;
    get_selection_count(): number;
    is_child_selected(i: number): boolean;
    ref_selection(i: number): Atk.Object | null;
    remove_selection(i: number): boolean;
    select_all_selection(): boolean;
    vfunc_add_selection(i: number): boolean;
    vfunc_clear_selection(): boolean;
    vfunc_get_selection_count(): number;
    vfunc_is_child_selected(i: number): boolean;
    vfunc_ref_selection(i: number): Atk.Object | null;
    vfunc_remove_selection(i: number): boolean;
    vfunc_select_all_selection(): boolean;
    vfunc_selection_changed(): void;
}
export module ListBoxRow {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        activatable: boolean;
        selectable: boolean;
    }
}
export class ListBoxRow extends Bin implements Atk.ImplementorIface, Actionable, Buildable {
    static $gtype: GObject.GType<ListBoxRow>;

    constructor(properties?: Partial<ListBoxRow.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ListBoxRow.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get activatable(): boolean;
    set activatable(val: boolean);
    get selectable(): boolean;
    set selectable(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "activate", callback: (_source: this) => void): number;
    connect_after(signal: "activate", callback: (_source: this) => void): number;
    emit(signal: "activate"): void;

    // Implemented Properties

    get actionName(): string;
    set actionName(val: string);
    get actionTarget(): GLib.Variant;
    set actionTarget(val: GLib.Variant);

    // Constructors

    static ["new"](): ListBoxRow;

    // Members

    changed(): void;
    get_activatable(): boolean;
    get_header(): Widget | null;
    get_index(): number;
    get_selectable(): boolean;
    is_selected(): boolean;
    set_activatable(activatable: boolean): void;
    set_header(header?: Widget | null): void;
    set_selectable(selectable: boolean): void;
    vfunc_activate(): void;

    // Implemented Members

    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name?: string | null): void;
    set_action_target_value(target_value?: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name?: string | null): void;
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
}
export module ListBoxRowAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ListBoxRowAccessible extends ContainerAccessible implements Atk.Component {
    static $gtype: GObject.GType<ListBoxRowAccessible>;

    constructor(properties?: Partial<ListBoxRowAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ListBoxRowAccessible.ConstructorProperties>, ...args: any[]): void;
}
export module ListStore {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class ListStore
    extends GObject.Object
    implements Buildable, TreeDragDest, TreeDragSource, TreeModel, TreeSortable
{
    static $gtype: GObject.GType<ListStore>;

    constructor(properties?: Partial<ListStore.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ListStore.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](types: GObject.GType[]): ListStore;

    // Members

    append(): TreeIter;
    clear(): void;
    insert(position: number): TreeIter;
    insert_after(sibling?: TreeIter | null): TreeIter;
    insert_before(sibling?: TreeIter | null): TreeIter;
    insert_with_valuesv(position: number, columns: number[], values: GObject.Value[]): TreeIter | null;
    iter_is_valid(iter: TreeIter): boolean;
    move_after(iter: TreeIter, position?: TreeIter | null): void;
    move_before(iter: TreeIter, position?: TreeIter | null): void;
    prepend(): TreeIter;
    remove(iter: TreeIter): boolean;
    reorder(new_order: number[]): void;
    set_column_types(types: GObject.GType[]): void;
    set_value(iter: TreeIter, column: number, value: GObject.Value | any): void;
    set(iter: TreeIter, columns: number[], values: GObject.Value[]): void;
    // Conflicted with GObject.Object.set
    set(...args: never[]): any;
    swap(a: TreeIter, b: TreeIter): void;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
    drag_data_received(dest: TreePath, selection_data: SelectionData): boolean;
    row_drop_possible(dest_path: TreePath, selection_data: SelectionData): boolean;
    vfunc_drag_data_received(dest: TreePath, selection_data: SelectionData): boolean;
    vfunc_row_drop_possible(dest_path: TreePath, selection_data: SelectionData): boolean;
    drag_data_delete(path: TreePath): boolean;
    drag_data_get(path: TreePath, selection_data: SelectionData): boolean;
    row_draggable(path: TreePath): boolean;
    vfunc_drag_data_delete(path: TreePath): boolean;
    vfunc_drag_data_get(path: TreePath, selection_data: SelectionData): boolean;
    vfunc_row_draggable(path: TreePath): boolean;
    filter_new(root?: TreePath | null): TreeModel;
    foreach(func: TreeModelForeachFunc): void;
    get_column_type(index_: number): GObject.GType;
    get_flags(): TreeModelFlags;
    get_iter(path: TreePath): [boolean, TreeIter];
    get_iter_first(): [boolean, TreeIter];
    get_iter_from_string(path_string: string): [boolean, TreeIter];
    get_n_columns(): number;
    get_path(iter: TreeIter): TreePath;
    get_string_from_iter(iter: TreeIter): string;
    get_value(iter: TreeIter, column: number): unknown;
    iter_children(parent?: TreeIter | null): [boolean, TreeIter];
    iter_has_child(iter: TreeIter): boolean;
    iter_n_children(iter?: TreeIter | null): number;
    iter_next(iter: TreeIter): boolean;
    iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
    iter_parent(child: TreeIter): [boolean, TreeIter];
    iter_previous(iter: TreeIter): boolean;
    ref_node(iter: TreeIter): void;
    row_changed(path: TreePath, iter: TreeIter): void;
    row_deleted(path: TreePath): void;
    row_has_child_toggled(path: TreePath, iter: TreeIter): void;
    row_inserted(path: TreePath, iter: TreeIter): void;
    rows_reordered(path: TreePath, iter: TreeIter | null, new_order: number[]): void;
    unref_node(iter: TreeIter): void;
    vfunc_get_column_type(index_: number): GObject.GType;
    vfunc_get_flags(): TreeModelFlags;
    vfunc_get_iter(path: TreePath): [boolean, TreeIter];
    vfunc_get_n_columns(): number;
    vfunc_get_path(iter: TreeIter): TreePath;
    vfunc_get_value(iter: TreeIter, column: number): unknown;
    vfunc_iter_children(parent?: TreeIter | null): [boolean, TreeIter];
    vfunc_iter_has_child(iter: TreeIter): boolean;
    vfunc_iter_n_children(iter?: TreeIter | null): number;
    vfunc_iter_next(iter: TreeIter): boolean;
    vfunc_iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
    vfunc_iter_parent(child: TreeIter): [boolean, TreeIter];
    vfunc_iter_previous(iter: TreeIter): boolean;
    vfunc_ref_node(iter: TreeIter): void;
    vfunc_row_changed(path: TreePath, iter: TreeIter): void;
    vfunc_row_deleted(path: TreePath): void;
    vfunc_row_has_child_toggled(path: TreePath, iter: TreeIter): void;
    vfunc_row_inserted(path: TreePath, iter: TreeIter): void;
    vfunc_unref_node(iter: TreeIter): void;
    get_sort_column_id(): [boolean, number, SortType];
    has_default_sort_func(): boolean;
    set_default_sort_func(sort_func: TreeIterCompareFunc, destroy?: GLib.DestroyNotify | null): void;
    set_sort_column_id(sort_column_id: number, order: SortType): void;
    set_sort_func(sort_column_id: number, sort_func: TreeIterCompareFunc, destroy?: GLib.DestroyNotify | null): void;
    sort_column_changed(): void;
    vfunc_get_sort_column_id(): [boolean, number, SortType];
    vfunc_has_default_sort_func(): boolean;
    vfunc_set_default_sort_func(sort_func: TreeIterCompareFunc, destroy?: GLib.DestroyNotify | null): void;
    vfunc_set_sort_column_id(sort_column_id: number, order: SortType): void;
    vfunc_set_sort_func(
        sort_column_id: number,
        sort_func: TreeIterCompareFunc,
        destroy?: GLib.DestroyNotify | null
    ): void;
    vfunc_sort_column_changed(): void;
}
export module LockButton {
    export interface ConstructorProperties extends Button.ConstructorProperties {
        [key: string]: any;
        permission: Gio.Permission;
        textLock: string;
        textUnlock: string;
        tooltipLock: string;
        tooltipNotAuthorized: string;
        tooltipUnlock: string;
    }
}
export class LockButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    static $gtype: GObject.GType<LockButton>;

    constructor(properties?: Partial<LockButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LockButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get permission(): Gio.Permission;
    set permission(val: Gio.Permission);
    get textLock(): string;
    set textLock(val: string);
    get textUnlock(): string;
    set textUnlock(val: string);
    get tooltipLock(): string;
    set tooltipLock(val: string);
    get tooltipNotAuthorized(): string;
    set tooltipNotAuthorized(val: string);
    get tooltipUnlock(): string;
    set tooltipUnlock(val: string);

    // Fields
    priv: LockButtonPrivate;

    // Implemented Properties

    get actionName(): string;
    set actionName(val: string);
    get actionTarget(): GLib.Variant;
    set actionTarget(val: GLib.Variant);
    get relatedAction(): Action;
    set relatedAction(val: Action);
    get useActionAppearance(): boolean;
    set useActionAppearance(val: boolean);

    // Constructors

    static ["new"](permission?: Gio.Permission | null): LockButton;
    // Conflicted with Gtk.Button.new
    static ["new"](...args: never[]): any;

    // Members

    get_permission(): Gio.Permission;
    set_permission(permission?: Gio.Permission | null): void;

    // Implemented Members

    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name?: string | null): void;
    set_action_target_value(target_value?: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name?: string | null): void;
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action?: Action | null): void;
    vfunc_sync_action_properties(action?: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
}
export module LockButtonAccessible {
    export interface ConstructorProperties extends ButtonAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class LockButtonAccessible extends ButtonAccessible implements Atk.Action, Atk.Component, Atk.Image {
    static $gtype: GObject.GType<LockButtonAccessible>;

    constructor(properties?: Partial<LockButtonAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<LockButtonAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: LockButtonAccessiblePrivate | any;

    // Implemented Members

    do_action(i: number): boolean;
    get_description(i: number): string | null;
    // Conflicted with Atk.Object.get_description
    get_description(...args: never[]): any;
    get_keybinding(i: number): string | null;
    get_localized_name(i: number): string | null;
    get_n_actions(): number;
    get_name(i: number): string | null;
    // Conflicted with Atk.Object.get_name
    get_name(...args: never[]): any;
    set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.set_description
    set_description(...args: never[]): any;
    vfunc_do_action(i: number): boolean;
    vfunc_get_description(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_description
    vfunc_get_description(...args: never[]): any;
    vfunc_get_keybinding(i: number): string | null;
    vfunc_get_localized_name(i: number): string | null;
    vfunc_get_n_actions(): number;
    vfunc_get_name(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_name
    vfunc_get_name(...args: never[]): any;
    vfunc_set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.vfunc_set_description
    vfunc_set_description(...args: never[]): any;
    get_image_description(): string;
    get_image_locale(): string | null;
    get_image_position(coord_type: Atk.CoordType): [number, number];
    get_image_size(): [number, number];
    set_image_description(description: string): boolean;
    vfunc_get_image_description(): string;
    vfunc_get_image_locale(): string | null;
    vfunc_get_image_position(coord_type: Atk.CoordType): [number, number];
    vfunc_get_image_size(): [number, number];
    vfunc_set_image_description(description: string): boolean;
}
export module Menu {
    export interface ConstructorProperties extends MenuShell.ConstructorProperties {
        [key: string]: any;
        accelGroup: AccelGroup;
        accelPath: string;
        active: number;
        anchorHints: Gdk.AnchorHints;
        attachWidget: Widget;
        menuTypeHint: Gdk.WindowTypeHint;
        monitor: number;
        rectAnchorDx: number;
        rectAnchorDy: number;
        reserveToggleSize: boolean;
        tearoffState: boolean;
        tearoffTitle: string;
    }
}
export class Menu extends MenuShell implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Menu>;

    constructor(properties?: Partial<Menu.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Menu.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get accelGroup(): AccelGroup;
    set accelGroup(val: AccelGroup);
    get accelPath(): string;
    set accelPath(val: string);
    get active(): number;
    set active(val: number);
    get anchorHints(): Gdk.AnchorHints;
    set anchorHints(val: Gdk.AnchorHints);
    get attachWidget(): Widget;
    set attachWidget(val: Widget);
    get menuTypeHint(): Gdk.WindowTypeHint;
    set menuTypeHint(val: Gdk.WindowTypeHint);
    get monitor(): number;
    set monitor(val: number);
    get rectAnchorDx(): number;
    set rectAnchorDx(val: number);
    get rectAnchorDy(): number;
    set rectAnchorDy(val: number);
    get reserveToggleSize(): boolean;
    set reserveToggleSize(val: boolean);
    get tearoffState(): boolean;
    set tearoffState(val: boolean);
    get tearoffTitle(): string;
    set tearoffTitle(val: string);

    // Fields
    menu_shell: MenuShell;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "move-scroll", callback: (_source: this, scroll_type: ScrollType) => void): number;
    connect_after(signal: "move-scroll", callback: (_source: this, scroll_type: ScrollType) => void): number;
    emit(signal: "move-scroll", scroll_type: ScrollType): void;
    connect(
        signal: "popped-up",
        callback: (
            _source: this,
            flipped_rect: any | null,
            final_rect: any | null,
            flipped_x: boolean,
            flipped_y: boolean
        ) => void
    ): number;
    connect_after(
        signal: "popped-up",
        callback: (
            _source: this,
            flipped_rect: any | null,
            final_rect: any | null,
            flipped_x: boolean,
            flipped_y: boolean
        ) => void
    ): number;
    emit(
        signal: "popped-up",
        flipped_rect: any | null,
        final_rect: any | null,
        flipped_x: boolean,
        flipped_y: boolean
    ): void;

    // Constructors

    static ["new"](): Menu;
    static new_from_model(model: Gio.MenuModel): Menu;

    // Members

    attach(child: Widget, left_attach: number, right_attach: number, top_attach: number, bottom_attach: number): void;
    attach_to_widget(attach_widget: Widget, detacher?: MenuDetachFunc | null): void;
    detach(): void;
    get_accel_group(): AccelGroup;
    get_accel_path(): string;
    get_active(): Widget;
    get_attach_widget(): Widget;
    get_monitor(): number;
    get_reserve_toggle_size(): boolean;
    get_tearoff_state(): boolean;
    get_title(): string;
    place_on_monitor(monitor: Gdk.Monitor): void;
    popdown(): void;
    popup(
        parent_menu_shell: Widget | null,
        parent_menu_item: Widget | null,
        func: MenuPositionFunc | null,
        button: number,
        activate_time: number
    ): void;
    popup_at_pointer(trigger_event?: Gdk.Event | null): void;
    popup_at_rect(
        rect_window: Gdk.Window,
        rect: Gdk.Rectangle,
        rect_anchor: Gdk.Gravity,
        menu_anchor: Gdk.Gravity,
        trigger_event?: Gdk.Event | null
    ): void;
    popup_at_widget(
        widget: Widget,
        widget_anchor: Gdk.Gravity,
        menu_anchor: Gdk.Gravity,
        trigger_event?: Gdk.Event | null
    ): void;
    popup_for_device(
        device: Gdk.Device | null,
        parent_menu_shell: Widget | null,
        parent_menu_item: Widget | null,
        func: MenuPositionFunc | null,
        destroy: GLib.DestroyNotify | null,
        button: number,
        activate_time: number
    ): void;
    reorder_child(child: Widget, position: number): void;
    reposition(): void;
    set_accel_group(accel_group?: AccelGroup | null): void;
    set_accel_path(accel_path?: string | null): void;
    set_active(index: number): void;
    set_monitor(monitor_num: number): void;
    set_reserve_toggle_size(reserve_toggle_size: boolean): void;
    set_screen(screen?: Gdk.Screen | null): void;
    set_tearoff_state(torn_off: boolean): void;
    set_title(title?: string | null): void;
    static get_for_attach_widget(widget: Widget): Widget[];
}
export module MenuAccessible {
    export interface ConstructorProperties extends MenuShellAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class MenuAccessible extends MenuShellAccessible implements Atk.Component, Atk.Selection {
    static $gtype: GObject.GType<MenuAccessible>;

    constructor(properties?: Partial<MenuAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MenuAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MenuAccessiblePrivate | any;

    // Implemented Members

    add_selection(i: number): boolean;
    clear_selection(): boolean;
    get_selection_count(): number;
    is_child_selected(i: number): boolean;
    ref_selection(i: number): Atk.Object | null;
    remove_selection(i: number): boolean;
    select_all_selection(): boolean;
    vfunc_add_selection(i: number): boolean;
    vfunc_clear_selection(): boolean;
    vfunc_get_selection_count(): number;
    vfunc_is_child_selected(i: number): boolean;
    vfunc_ref_selection(i: number): Atk.Object | null;
    vfunc_remove_selection(i: number): boolean;
    vfunc_select_all_selection(): boolean;
    vfunc_selection_changed(): void;
}
export module MenuBar {
    export interface ConstructorProperties extends MenuShell.ConstructorProperties {
        [key: string]: any;
        childPackDirection: PackDirection;
        packDirection: PackDirection;
    }
}
export class MenuBar extends MenuShell implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<MenuBar>;

    constructor(properties?: Partial<MenuBar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MenuBar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get childPackDirection(): PackDirection;
    set childPackDirection(val: PackDirection);
    get packDirection(): PackDirection;
    set packDirection(val: PackDirection);

    // Fields
    menu_shell: MenuShell;

    // Constructors

    static ["new"](): MenuBar;
    static new_from_model(model: Gio.MenuModel): MenuBar;

    // Members

    get_child_pack_direction(): PackDirection;
    get_pack_direction(): PackDirection;
    set_child_pack_direction(child_pack_dir: PackDirection): void;
    set_pack_direction(pack_dir: PackDirection): void;
}
export module MenuButton {
    export interface ConstructorProperties extends ToggleButton.ConstructorProperties {
        [key: string]: any;
        alignWidget: Container;
        direction: ArrowType;
        menuModel: Gio.MenuModel;
        popover: Popover;
        popup: Menu;
        usePopover: boolean;
    }
}
export class MenuButton extends ToggleButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    static $gtype: GObject.GType<MenuButton>;

    constructor(properties?: Partial<MenuButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MenuButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get alignWidget(): Container;
    set alignWidget(val: Container);
    get direction(): ArrowType;
    set direction(val: ArrowType);
    get menuModel(): Gio.MenuModel;
    set menuModel(val: Gio.MenuModel);
    get popover(): Popover;
    set popover(val: Popover);
    get popup(): Menu;
    set popup(val: Menu);
    get usePopover(): boolean;
    set usePopover(val: boolean);

    // Constructors

    static ["new"](): MenuButton;

    // Members

    get_align_widget(): Widget | null;
    get_direction(): ArrowType;
    // Conflicted with Gtk.Widget.get_direction
    get_direction(...args: never[]): any;
    get_menu_model(): Gio.MenuModel | null;
    get_popover(): Popover | null;
    get_popup(): Menu | null;
    get_use_popover(): boolean;
    set_align_widget(align_widget?: Widget | null): void;
    set_direction(direction: ArrowType): void;
    // Conflicted with Gtk.Widget.set_direction
    set_direction(...args: never[]): any;
    set_menu_model(menu_model?: Gio.MenuModel | null): void;
    set_popover(popover?: Widget | null): void;
    set_popup(menu?: Widget | null): void;
    set_use_popover(use_popover: boolean): void;
}
export module MenuButtonAccessible {
    export interface ConstructorProperties extends ToggleButtonAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class MenuButtonAccessible extends ToggleButtonAccessible implements Atk.Action, Atk.Component, Atk.Image {
    static $gtype: GObject.GType<MenuButtonAccessible>;

    constructor(properties?: Partial<MenuButtonAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MenuButtonAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MenuButtonAccessiblePrivate | any;
}
export module MenuItem {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        accelPath: string;
        label: string;
        rightJustified: boolean;
        submenu: Menu;
        useUnderline: boolean;
    }
}
export class MenuItem extends Bin implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    static $gtype: GObject.GType<MenuItem>;

    constructor(properties?: Partial<MenuItem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MenuItem.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get accelPath(): string;
    set accelPath(val: string);
    get label(): string;
    set label(val: string);
    get rightJustified(): boolean;
    set rightJustified(val: boolean);
    get submenu(): Menu;
    set submenu(val: Menu);
    get useUnderline(): boolean;
    set useUnderline(val: boolean);

    // Fields
    bin: Bin;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "activate", callback: (_source: this) => void): number;
    connect_after(signal: "activate", callback: (_source: this) => void): number;
    emit(signal: "activate"): void;
    connect(signal: "activate-item", callback: (_source: this) => void): number;
    connect_after(signal: "activate-item", callback: (_source: this) => void): number;
    emit(signal: "activate-item"): void;
    connect(signal: "deselect", callback: (_source: this) => void): number;
    connect_after(signal: "deselect", callback: (_source: this) => void): number;
    emit(signal: "deselect"): void;
    connect(signal: "select", callback: (_source: this) => void): number;
    connect_after(signal: "select", callback: (_source: this) => void): number;
    emit(signal: "select"): void;
    connect(signal: "toggle-size-allocate", callback: (_source: this, object: number) => void): number;
    connect_after(signal: "toggle-size-allocate", callback: (_source: this, object: number) => void): number;
    emit(signal: "toggle-size-allocate", object: number): void;
    connect(signal: "toggle-size-request", callback: (_source: this, object: any | null) => void): number;
    connect_after(signal: "toggle-size-request", callback: (_source: this, object: any | null) => void): number;
    emit(signal: "toggle-size-request", object: any | null): void;

    // Implemented Properties

    get actionName(): string;
    set actionName(val: string);
    get actionTarget(): GLib.Variant;
    set actionTarget(val: GLib.Variant);
    get relatedAction(): Action;
    set relatedAction(val: Action);
    get useActionAppearance(): boolean;
    set useActionAppearance(val: boolean);

    // Constructors

    static ["new"](): MenuItem;
    static new_with_label(label: string): MenuItem;
    static new_with_mnemonic(label: string): MenuItem;

    // Members

    activate(): void;
    // Conflicted with Gtk.Widget.activate
    activate(...args: never[]): any;
    deselect(): void;
    get_accel_path(): string | null;
    get_label(): string;
    get_reserve_indicator(): boolean;
    get_right_justified(): boolean;
    get_submenu(): Widget | null;
    get_use_underline(): boolean;
    select(): void;
    set_accel_path(accel_path?: string | null): void;
    set_label(label: string): void;
    set_reserve_indicator(reserve: boolean): void;
    set_right_justified(right_justified: boolean): void;
    set_submenu(submenu?: Menu | null): void;
    set_use_underline(setting: boolean): void;
    toggle_size_allocate(allocation: number): void;
    toggle_size_request(requisition: number): number;
    vfunc_activate(): void;
    vfunc_activate_item(): void;
    vfunc_deselect(): void;
    vfunc_get_label(): string;
    vfunc_select(): void;
    vfunc_set_label(label: string): void;
    vfunc_toggle_size_allocate(allocation: number): void;
    vfunc_toggle_size_request(requisition: number): number;

    // Implemented Members

    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name?: string | null): void;
    set_action_target_value(target_value?: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name?: string | null): void;
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action?: Action | null): void;
    vfunc_sync_action_properties(action?: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
}
export module MenuItemAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class MenuItemAccessible extends ContainerAccessible implements Atk.Action, Atk.Component, Atk.Selection {
    static $gtype: GObject.GType<MenuItemAccessible>;

    constructor(properties?: Partial<MenuItemAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MenuItemAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MenuItemAccessiblePrivate | any;

    // Implemented Members

    do_action(i: number): boolean;
    get_description(i: number): string | null;
    // Conflicted with Atk.Object.get_description
    get_description(...args: never[]): any;
    get_keybinding(i: number): string | null;
    get_localized_name(i: number): string | null;
    get_n_actions(): number;
    get_name(i: number): string | null;
    // Conflicted with Atk.Object.get_name
    get_name(...args: never[]): any;
    set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.set_description
    set_description(...args: never[]): any;
    vfunc_do_action(i: number): boolean;
    vfunc_get_description(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_description
    vfunc_get_description(...args: never[]): any;
    vfunc_get_keybinding(i: number): string | null;
    vfunc_get_localized_name(i: number): string | null;
    vfunc_get_n_actions(): number;
    vfunc_get_name(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_name
    vfunc_get_name(...args: never[]): any;
    vfunc_set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.vfunc_set_description
    vfunc_set_description(...args: never[]): any;
    add_selection(i: number): boolean;
    clear_selection(): boolean;
    get_selection_count(): number;
    is_child_selected(i: number): boolean;
    ref_selection(i: number): Atk.Object | null;
    remove_selection(i: number): boolean;
    select_all_selection(): boolean;
    vfunc_add_selection(i: number): boolean;
    vfunc_clear_selection(): boolean;
    vfunc_get_selection_count(): number;
    vfunc_is_child_selected(i: number): boolean;
    vfunc_ref_selection(i: number): Atk.Object | null;
    vfunc_remove_selection(i: number): boolean;
    vfunc_select_all_selection(): boolean;
    vfunc_selection_changed(): void;
}
export module MenuShell {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        takeFocus: boolean;
    }
}
export abstract class MenuShell extends Container implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<MenuShell>;

    constructor(properties?: Partial<MenuShell.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MenuShell.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get takeFocus(): boolean;
    set takeFocus(val: boolean);

    // Fields
    container: Container;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "activate-current", callback: (_source: this, force_hide: boolean) => void): number;
    connect_after(signal: "activate-current", callback: (_source: this, force_hide: boolean) => void): number;
    emit(signal: "activate-current", force_hide: boolean): void;
    connect(signal: "cancel", callback: (_source: this) => void): number;
    connect_after(signal: "cancel", callback: (_source: this) => void): number;
    emit(signal: "cancel"): void;
    connect(signal: "cycle-focus", callback: (_source: this, direction: DirectionType) => void): number;
    connect_after(signal: "cycle-focus", callback: (_source: this, direction: DirectionType) => void): number;
    emit(signal: "cycle-focus", direction: DirectionType): void;
    connect(signal: "deactivate", callback: (_source: this) => void): number;
    connect_after(signal: "deactivate", callback: (_source: this) => void): number;
    emit(signal: "deactivate"): void;
    connect(signal: "insert", callback: (_source: this, child: Widget, position: number) => void): number;
    connect_after(signal: "insert", callback: (_source: this, child: Widget, position: number) => void): number;
    emit(signal: "insert", child: Widget, position: number): void;
    connect(signal: "move-current", callback: (_source: this, direction: MenuDirectionType) => void): number;
    connect_after(signal: "move-current", callback: (_source: this, direction: MenuDirectionType) => void): number;
    emit(signal: "move-current", direction: MenuDirectionType): void;
    connect(signal: "move-selected", callback: (_source: this, distance: number) => boolean): number;
    connect_after(signal: "move-selected", callback: (_source: this, distance: number) => boolean): number;
    emit(signal: "move-selected", distance: number): void;
    connect(signal: "selection-done", callback: (_source: this) => void): number;
    connect_after(signal: "selection-done", callback: (_source: this) => void): number;
    emit(signal: "selection-done"): void;

    // Members

    activate_item(menu_item: Widget, force_deactivate: boolean): void;
    append(child: MenuItem): void;
    bind_model(model: Gio.MenuModel | null, action_namespace: string | null, with_separators: boolean): void;
    cancel(): void;
    deactivate(): void;
    deselect(): void;
    get_parent_shell(): Widget;
    get_selected_item(): Widget;
    get_take_focus(): boolean;
    insert(child: Widget, position: number): void;
    prepend(child: Widget): void;
    select_first(search_sensitive: boolean): void;
    select_item(menu_item: Widget): void;
    set_take_focus(take_focus: boolean): void;
    vfunc_activate_current(force_hide: boolean): void;
    vfunc_cancel(): void;
    vfunc_deactivate(): void;
    vfunc_get_popup_delay(): number;
    vfunc_insert(child: Widget, position: number): void;
    vfunc_move_current(direction: MenuDirectionType): void;
    vfunc_move_selected(distance: number): boolean;
    vfunc_select_item(menu_item: Widget): void;
    vfunc_selection_done(): void;
}
export module MenuShellAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class MenuShellAccessible extends ContainerAccessible implements Atk.Component, Atk.Selection {
    static $gtype: GObject.GType<MenuShellAccessible>;

    constructor(properties?: Partial<MenuShellAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MenuShellAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: MenuShellAccessiblePrivate | any;

    // Implemented Members

    add_selection(i: number): boolean;
    clear_selection(): boolean;
    get_selection_count(): number;
    is_child_selected(i: number): boolean;
    ref_selection(i: number): Atk.Object | null;
    remove_selection(i: number): boolean;
    select_all_selection(): boolean;
    vfunc_add_selection(i: number): boolean;
    vfunc_clear_selection(): boolean;
    vfunc_get_selection_count(): number;
    vfunc_is_child_selected(i: number): boolean;
    vfunc_ref_selection(i: number): Atk.Object | null;
    vfunc_remove_selection(i: number): boolean;
    vfunc_select_all_selection(): boolean;
    vfunc_selection_changed(): void;
}
export module MenuToolButton {
    export interface ConstructorProperties extends ToolButton.ConstructorProperties {
        [key: string]: any;
        menu: Menu;
    }
}
export class MenuToolButton extends ToolButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    static $gtype: GObject.GType<MenuToolButton>;

    constructor(properties?: Partial<MenuToolButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MenuToolButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get menu(): Menu;
    set menu(val: Menu);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "show-menu", callback: (_source: this) => void): number;
    connect_after(signal: "show-menu", callback: (_source: this) => void): number;
    emit(signal: "show-menu"): void;

    // Implemented Properties

    get actionName(): string;
    set actionName(val: string);
    get actionTarget(): GLib.Variant;
    set actionTarget(val: GLib.Variant);

    // Constructors

    static ["new"](icon_widget?: Widget | null, label?: string | null): MenuToolButton;
    // Conflicted with Gtk.ToolItem.new
    static ["new"](...args: never[]): any;
    static new_from_stock(stock_id: string): MenuToolButton;

    // Members

    get_menu(): Widget;
    set_arrow_tooltip_markup(markup: string): void;
    set_arrow_tooltip_text(text: string): void;
    set_menu(menu: Widget): void;
    vfunc_show_menu(): void;

    // Implemented Members

    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name?: string | null): void;
    set_action_target_value(target_value?: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name?: string | null): void;
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
}
export module MessageDialog {
    export interface ConstructorProperties extends Dialog.ConstructorProperties {
        [key: string]: any;
        buttons: ButtonsType;
        image: Widget;
        messageArea: Widget;
        messageType: MessageType;
        secondaryText: string;
        secondaryUseMarkup: boolean;
        text: string;
        useMarkup: boolean;
    }
}
export class MessageDialog extends Dialog implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<MessageDialog>;

    constructor(properties?: Partial<MessageDialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MessageDialog.ConstructorProperties>, ...args: any[]): void;

    // Properties
    set buttons(val: ButtonsType);
    get image(): Widget;
    set image(val: Widget);
    get messageArea(): Widget;
    get messageType(): MessageType;
    set messageType(val: MessageType);
    get secondaryText(): string;
    set secondaryText(val: string);
    get secondaryUseMarkup(): boolean;
    set secondaryUseMarkup(val: boolean);
    get text(): string;
    set text(val: string);
    get useMarkup(): boolean;
    set useMarkup(val: boolean);

    // Members

    get_image(): Widget;
    get_message_area(): Widget;
    set_image(image: Widget): void;
    set_markup(str: string): void;
}
export module Misc {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        xalign: number;
        xpad: number;
        yalign: number;
        ypad: number;
    }
}
export abstract class Misc extends Widget implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Misc>;

    constructor(properties?: Partial<Misc.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Misc.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get xalign(): number;
    set xalign(val: number);
    get xpad(): number;
    set xpad(val: number);
    get yalign(): number;
    set yalign(val: number);
    get ypad(): number;
    set ypad(val: number);

    // Fields
    widget: Widget;

    // Members

    get_alignment(): [number, number];
    get_padding(): [number, number];
    set_alignment(xalign: number, yalign: number): void;
    set_padding(xpad: number, ypad: number): void;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
}
export module ModelButton {
    export interface ConstructorProperties extends Button.ConstructorProperties {
        [key: string]: any;
        active: boolean;
        centered: boolean;
        icon: Gio.Icon;
        iconic: boolean;
        inverted: boolean;
        menuName: string;
        role: ButtonRole;
        text: string;
        useMarkup: boolean;
    }
}
export class ModelButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    static $gtype: GObject.GType<ModelButton>;

    constructor(properties?: Partial<ModelButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ModelButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get active(): boolean;
    set active(val: boolean);
    get centered(): boolean;
    set centered(val: boolean);
    get icon(): Gio.Icon;
    set icon(val: Gio.Icon);
    get iconic(): boolean;
    set iconic(val: boolean);
    get inverted(): boolean;
    set inverted(val: boolean);
    get menuName(): string;
    set menuName(val: string);
    get role(): ButtonRole;
    set role(val: ButtonRole);
    get text(): string;
    set text(val: string);
    get useMarkup(): boolean;
    set useMarkup(val: boolean);

    // Implemented Properties

    get actionName(): string;
    set actionName(val: string);
    get actionTarget(): GLib.Variant;
    set actionTarget(val: GLib.Variant);
    get relatedAction(): Action;
    set relatedAction(val: Action);
    get useActionAppearance(): boolean;
    set useActionAppearance(val: boolean);

    // Constructors

    static ["new"](): ModelButton;

    // Implemented Members

    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name?: string | null): void;
    set_action_target_value(target_value?: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name?: string | null): void;
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action?: Action | null): void;
    vfunc_sync_action_properties(action?: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
}
export module MountOperation {
    export interface ConstructorProperties extends Gio.MountOperation.ConstructorProperties {
        [key: string]: any;
        isShowing: boolean;
        screen: Gdk.Screen;
    }
}
export class MountOperation extends Gio.MountOperation {
    static $gtype: GObject.GType<MountOperation>;

    constructor(properties?: Partial<MountOperation.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<MountOperation.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get isShowing(): boolean;
    get screen(): Gdk.Screen;
    set screen(val: Gdk.Screen);

    // Fields
    priv: MountOperationPrivate | any;

    // Constructors

    static ["new"](parent?: Window | null): MountOperation;
    // Conflicted with Gio.MountOperation.new
    static ["new"](...args: never[]): any;

    // Members

    get_parent(): Window;
    get_screen(): Gdk.Screen;
    is_showing(): boolean;
    set_parent(parent?: Window | null): void;
    set_screen(screen: Gdk.Screen): void;
}
export module NativeDialog {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        modal: boolean;
        title: string;
        transientFor: Window;
        visible: boolean;
    }
}
export abstract class NativeDialog extends GObject.Object {
    static $gtype: GObject.GType<NativeDialog>;

    constructor(properties?: Partial<NativeDialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<NativeDialog.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get modal(): boolean;
    set modal(val: boolean);
    get title(): string;
    set title(val: string);
    get transientFor(): Window;
    set transientFor(val: Window);
    get visible(): boolean;
    set visible(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "response", callback: (_source: this, response_id: number) => void): number;
    connect_after(signal: "response", callback: (_source: this, response_id: number) => void): number;
    emit(signal: "response", response_id: number): void;

    // Members

    destroy(): void;
    get_modal(): boolean;
    get_title(): string | null;
    get_transient_for(): Window | null;
    get_visible(): boolean;
    hide(): void;
    run(): number;
    set_modal(modal: boolean): void;
    set_title(title: string): void;
    set_transient_for(parent?: Window | null): void;
    show(): void;
    vfunc_hide(): void;
    vfunc_response(response_id: number): void;
    vfunc_show(): void;
}
export module Notebook {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        enablePopup: boolean;
        groupName: string;
        page: number;
        scrollable: boolean;
        showBorder: boolean;
        showTabs: boolean;
        tabPos: PositionType;
    }
}
export class Notebook extends Container implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Notebook>;

    constructor(properties?: Partial<Notebook.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Notebook.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get enablePopup(): boolean;
    set enablePopup(val: boolean);
    get groupName(): string;
    set groupName(val: string);
    get page(): number;
    set page(val: number);
    get scrollable(): boolean;
    set scrollable(val: boolean);
    get showBorder(): boolean;
    set showBorder(val: boolean);
    get showTabs(): boolean;
    set showTabs(val: boolean);
    get tabPos(): PositionType;
    set tabPos(val: PositionType);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "change-current-page", callback: (_source: this, object: number) => boolean): number;
    connect_after(signal: "change-current-page", callback: (_source: this, object: number) => boolean): number;
    emit(signal: "change-current-page", object: number): void;
    connect(signal: "create-window", callback: (_source: this, page: Widget, x: number, y: number) => Notebook): number;
    connect_after(
        signal: "create-window",
        callback: (_source: this, page: Widget, x: number, y: number) => Notebook
    ): number;
    emit(signal: "create-window", page: Widget, x: number, y: number): void;
    connect(signal: "focus-tab", callback: (_source: this, object: NotebookTab) => boolean): number;
    connect_after(signal: "focus-tab", callback: (_source: this, object: NotebookTab) => boolean): number;
    emit(signal: "focus-tab", object: NotebookTab): void;
    connect(signal: "move-focus-out", callback: (_source: this, object: DirectionType) => void): number;
    connect_after(signal: "move-focus-out", callback: (_source: this, object: DirectionType) => void): number;
    emit(signal: "move-focus-out", object: DirectionType): void;
    connect(signal: "page-added", callback: (_source: this, child: Widget, page_num: number) => void): number;
    connect_after(signal: "page-added", callback: (_source: this, child: Widget, page_num: number) => void): number;
    emit(signal: "page-added", child: Widget, page_num: number): void;
    connect(signal: "page-removed", callback: (_source: this, child: Widget, page_num: number) => void): number;
    connect_after(signal: "page-removed", callback: (_source: this, child: Widget, page_num: number) => void): number;
    emit(signal: "page-removed", child: Widget, page_num: number): void;
    connect(signal: "page-reordered", callback: (_source: this, child: Widget, page_num: number) => void): number;
    connect_after(signal: "page-reordered", callback: (_source: this, child: Widget, page_num: number) => void): number;
    emit(signal: "page-reordered", child: Widget, page_num: number): void;
    connect(signal: "reorder-tab", callback: (_source: this, object: DirectionType, p0: boolean) => boolean): number;
    connect_after(
        signal: "reorder-tab",
        callback: (_source: this, object: DirectionType, p0: boolean) => boolean
    ): number;
    emit(signal: "reorder-tab", object: DirectionType, p0: boolean): void;
    connect(signal: "select-page", callback: (_source: this, object: boolean) => boolean): number;
    connect_after(signal: "select-page", callback: (_source: this, object: boolean) => boolean): number;
    emit(signal: "select-page", object: boolean): void;
    connect(signal: "switch-page", callback: (_source: this, page: Widget, page_num: number) => void): number;
    connect_after(signal: "switch-page", callback: (_source: this, page: Widget, page_num: number) => void): number;
    emit(signal: "switch-page", page: Widget, page_num: number): void;

    // Constructors

    static ["new"](): Notebook;

    // Members

    append_page(child: Widget, tab_label?: Widget | null): number;
    append_page_menu(child: Widget, tab_label?: Widget | null, menu_label?: Widget | null): number;
    detach_tab(child: Widget): void;
    get_action_widget(pack_type: PackType): Widget | null;
    get_current_page(): number;
    get_group_name(): string | null;
    get_menu_label(child: Widget): Widget | null;
    get_menu_label_text(child: Widget): string | null;
    get_n_pages(): number;
    get_nth_page(page_num: number): Widget | null;
    get_scrollable(): boolean;
    get_show_border(): boolean;
    get_show_tabs(): boolean;
    get_tab_detachable(child: Widget): boolean;
    get_tab_hborder(): number;
    get_tab_label(child: Widget): Widget | null;
    get_tab_label_text(child: Widget): string | null;
    get_tab_pos(): PositionType;
    get_tab_reorderable(child: Widget): boolean;
    get_tab_vborder(): number;
    insert_page(child: Widget, tab_label: Widget | null, position: number): number;
    insert_page_menu(child: Widget, tab_label: Widget | null, menu_label: Widget | null, position: number): number;
    next_page(): void;
    page_num(child: Widget): number;
    popup_disable(): void;
    popup_enable(): void;
    prepend_page(child: Widget, tab_label?: Widget | null): number;
    prepend_page_menu(child: Widget, tab_label?: Widget | null, menu_label?: Widget | null): number;
    prev_page(): void;
    remove_page(page_num: number): void;
    reorder_child(child: Widget, position: number): void;
    set_action_widget(widget: Widget, pack_type: PackType): void;
    set_current_page(page_num: number): void;
    set_group_name(group_name?: string | null): void;
    set_menu_label(child: Widget, menu_label?: Widget | null): void;
    set_menu_label_text(child: Widget, menu_text: string): void;
    set_scrollable(scrollable: boolean): void;
    set_show_border(show_border: boolean): void;
    set_show_tabs(show_tabs: boolean): void;
    set_tab_detachable(child: Widget, detachable: boolean): void;
    set_tab_label(child: Widget, tab_label?: Widget | null): void;
    set_tab_label_text(child: Widget, tab_text: string): void;
    set_tab_pos(pos: PositionType): void;
    set_tab_reorderable(child: Widget, reorderable: boolean): void;
    vfunc_change_current_page(offset: number): boolean;
    vfunc_focus_tab(type: NotebookTab): boolean;
    vfunc_insert_page(child: Widget, tab_label: Widget, menu_label: Widget, position: number): number;
    vfunc_move_focus_out(direction: DirectionType): void;
    vfunc_page_added(child: Widget, page_num: number): void;
    vfunc_page_removed(child: Widget, page_num: number): void;
    vfunc_page_reordered(child: Widget, page_num: number): void;
    vfunc_reorder_tab(direction: DirectionType, move_to_last: boolean): boolean;
    vfunc_select_page(move_focus: boolean): boolean;
    vfunc_switch_page(page: Widget, page_num: number): void;
}
export module NotebookAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class NotebookAccessible extends ContainerAccessible implements Atk.Component, Atk.Selection {
    static $gtype: GObject.GType<NotebookAccessible>;

    constructor(properties?: Partial<NotebookAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<NotebookAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: NotebookAccessiblePrivate | any;

    // Implemented Members

    add_selection(i: number): boolean;
    clear_selection(): boolean;
    get_selection_count(): number;
    is_child_selected(i: number): boolean;
    ref_selection(i: number): Atk.Object | null;
    remove_selection(i: number): boolean;
    select_all_selection(): boolean;
    vfunc_add_selection(i: number): boolean;
    vfunc_clear_selection(): boolean;
    vfunc_get_selection_count(): number;
    vfunc_is_child_selected(i: number): boolean;
    vfunc_ref_selection(i: number): Atk.Object | null;
    vfunc_remove_selection(i: number): boolean;
    vfunc_select_all_selection(): boolean;
    vfunc_selection_changed(): void;
}
export module NotebookPageAccessible {
    export interface ConstructorProperties extends Atk.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class NotebookPageAccessible extends Atk.Object implements Atk.Component {
    static $gtype: GObject.GType<NotebookPageAccessible>;

    constructor(properties?: Partial<NotebookPageAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<NotebookPageAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: NotebookPageAccessiblePrivate;

    // Constructors

    static ["new"](notebook: NotebookAccessible, child: Widget): NotebookPageAccessible;

    // Members

    invalidate(): void;

    // Implemented Members

    contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    get_alpha(): number;
    get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    get_layer(): Atk.Layer;
    get_mdi_zorder(): number;
    get_position(coord_type: Atk.CoordType): [number, number];
    get_size(): [number, number];
    grab_focus(): boolean;
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    remove_focus_handler(handler_id: number): void;
    scroll_to(type: Atk.ScrollType): boolean;
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    set_size(width: number, height: number): boolean;
    vfunc_bounds_changed(bounds: Atk.Rectangle): void;
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_get_alpha(): number;
    vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    vfunc_get_layer(): Atk.Layer;
    vfunc_get_mdi_zorder(): number;
    vfunc_get_position(coord_type: Atk.CoordType): [number, number];
    vfunc_get_size(): [number, number];
    vfunc_grab_focus(): boolean;
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    vfunc_remove_focus_handler(handler_id: number): void;
    vfunc_scroll_to(type: Atk.ScrollType): boolean;
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_size(width: number, height: number): boolean;
}
export module NumerableIcon {
    export interface ConstructorProperties extends Gio.EmblemedIcon.ConstructorProperties {
        [key: string]: any;
        backgroundIcon: Gio.Icon;
        backgroundIconName: string;
        count: number;
        label: string;
        styleContext: StyleContext;
    }
}
export class NumerableIcon extends Gio.EmblemedIcon implements Gio.Icon {
    static $gtype: GObject.GType<NumerableIcon>;

    constructor(properties?: Partial<NumerableIcon.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<NumerableIcon.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get backgroundIcon(): Gio.Icon;
    set backgroundIcon(val: Gio.Icon);
    get backgroundIconName(): string;
    set backgroundIconName(val: string);
    get count(): number;
    set count(val: number);
    get label(): string;
    set label(val: string);
    get styleContext(): StyleContext;
    set styleContext(val: StyleContext);

    // Members

    get_background_gicon(): Gio.Icon | null;
    get_background_icon_name(): string | null;
    get_count(): number;
    get_label(): string | null;
    get_style_context(): StyleContext | null;
    set_background_gicon(icon?: Gio.Icon | null): void;
    set_background_icon_name(icon_name?: string | null): void;
    set_count(count: number): void;
    set_label(label?: string | null): void;
    set_style_context(style: StyleContext): void;
    static new(base_icon: Gio.Icon): Gio.Icon;
    // Conflicted with Gio.EmblemedIcon.new
    static new(...args: never[]): any;
    static new_with_style_context(base_icon: Gio.Icon, context: StyleContext): Gio.Icon;

    // Implemented Members

    equal(icon2?: Gio.Icon | null): boolean;
    serialize(): GLib.Variant | null;
    to_string(): string | null;
    vfunc_equal(icon2?: Gio.Icon | null): boolean;
    vfunc_hash(): number;
    vfunc_serialize(): GLib.Variant | null;
}
export module OffscreenWindow {
    export interface ConstructorProperties extends Window.ConstructorProperties {
        [key: string]: any;
    }
}
export class OffscreenWindow extends Window implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<OffscreenWindow>;

    constructor(properties?: Partial<OffscreenWindow.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<OffscreenWindow.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_object: Window;

    // Constructors

    static ["new"](): OffscreenWindow;

    // Members

    get_pixbuf(): GdkPixbuf.Pixbuf | null;
    get_surface(): cairo.Surface | null;
}
export module Overlay {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
    }
}
export class Overlay extends Bin implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Overlay>;

    constructor(properties?: Partial<Overlay.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Overlay.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: OverlayPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "get-child-position",
        callback: (_source: this, widget: Widget, allocation: Gdk.Rectangle) => boolean
    ): number;
    connect_after(
        signal: "get-child-position",
        callback: (_source: this, widget: Widget, allocation: Gdk.Rectangle) => boolean
    ): number;
    emit(signal: "get-child-position", widget: Widget, allocation: Gdk.Rectangle): void;

    // Constructors

    static ["new"](): Overlay;

    // Members

    add_overlay(widget: Widget): void;
    get_overlay_pass_through(widget: Widget): boolean;
    reorder_overlay(child: Widget, index_: number): void;
    set_overlay_pass_through(widget: Widget, pass_through: boolean): void;
    vfunc_get_child_position(widget: Widget, allocation: Allocation): boolean;
}
export module PadController {
    export interface ConstructorProperties extends EventController.ConstructorProperties {
        [key: string]: any;
        actionGroup: Gio.ActionGroup;
        pad: Gdk.Device;
    }
}
export class PadController extends EventController {
    static $gtype: GObject.GType<PadController>;

    constructor(properties?: Partial<PadController.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PadController.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get actionGroup(): Gio.ActionGroup;
    get pad(): Gdk.Device;

    // Constructors

    static ["new"](window: Window, group: Gio.ActionGroup, pad?: Gdk.Device | null): PadController;

    // Members

    set_action(type: PadActionType, index: number, mode: number, label: string, action_name: string): void;
    set_action_entries(entries: PadActionEntry[]): void;
}
export module PageSetup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class PageSetup extends GObject.Object {
    static $gtype: GObject.GType<PageSetup>;

    constructor(properties?: Partial<PageSetup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PageSetup.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): PageSetup;
    static new_from_file(file_name: string): PageSetup;
    static new_from_gvariant(variant: GLib.Variant): PageSetup;
    static new_from_key_file(key_file: GLib.KeyFile, group_name?: string | null): PageSetup;

    // Members

    copy(): PageSetup;
    get_bottom_margin(unit: Unit): number;
    get_left_margin(unit: Unit): number;
    get_orientation(): PageOrientation;
    get_page_height(unit: Unit): number;
    get_page_width(unit: Unit): number;
    get_paper_height(unit: Unit): number;
    get_paper_size(): PaperSize;
    get_paper_width(unit: Unit): number;
    get_right_margin(unit: Unit): number;
    get_top_margin(unit: Unit): number;
    load_file(file_name: string): boolean;
    load_key_file(key_file: GLib.KeyFile, group_name?: string | null): boolean;
    set_bottom_margin(margin: number, unit: Unit): void;
    set_left_margin(margin: number, unit: Unit): void;
    set_orientation(orientation: PageOrientation): void;
    set_paper_size(size: PaperSize): void;
    set_paper_size_and_default_margins(size: PaperSize): void;
    set_right_margin(margin: number, unit: Unit): void;
    set_top_margin(margin: number, unit: Unit): void;
    to_file(file_name: string): boolean;
    to_gvariant(): GLib.Variant;
    to_key_file(key_file: GLib.KeyFile, group_name?: string | null): void;
}
export module Paned {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        maxPosition: number;
        minPosition: number;
        position: number;
        positionSet: boolean;
        wideHandle: boolean;
    }
}
export class Paned extends Container implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<Paned>;

    constructor(properties?: Partial<Paned.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Paned.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get maxPosition(): number;
    get minPosition(): number;
    get position(): number;
    set position(val: number);
    get positionSet(): boolean;
    set positionSet(val: boolean);
    get wideHandle(): boolean;
    set wideHandle(val: boolean);

    // Fields
    container: Container;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "accept-position", callback: (_source: this) => boolean): number;
    connect_after(signal: "accept-position", callback: (_source: this) => boolean): number;
    emit(signal: "accept-position"): void;
    connect(signal: "cancel-position", callback: (_source: this) => boolean): number;
    connect_after(signal: "cancel-position", callback: (_source: this) => boolean): number;
    emit(signal: "cancel-position"): void;
    connect(signal: "cycle-child-focus", callback: (_source: this, reversed: boolean) => boolean): number;
    connect_after(signal: "cycle-child-focus", callback: (_source: this, reversed: boolean) => boolean): number;
    emit(signal: "cycle-child-focus", reversed: boolean): void;
    connect(signal: "cycle-handle-focus", callback: (_source: this, reversed: boolean) => boolean): number;
    connect_after(signal: "cycle-handle-focus", callback: (_source: this, reversed: boolean) => boolean): number;
    emit(signal: "cycle-handle-focus", reversed: boolean): void;
    connect(signal: "move-handle", callback: (_source: this, scroll_type: ScrollType) => boolean): number;
    connect_after(signal: "move-handle", callback: (_source: this, scroll_type: ScrollType) => boolean): number;
    emit(signal: "move-handle", scroll_type: ScrollType): void;
    connect(signal: "toggle-handle-focus", callback: (_source: this) => boolean): number;
    connect_after(signal: "toggle-handle-focus", callback: (_source: this) => boolean): number;
    emit(signal: "toggle-handle-focus"): void;

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](orientation: Orientation): Paned;

    // Members

    add1(child: Widget): void;
    add2(child: Widget): void;
    get_child1(): Widget | null;
    get_child2(): Widget | null;
    get_handle_window(): Gdk.Window;
    get_position(): number;
    get_wide_handle(): boolean;
    pack1(child: Widget, resize: boolean, shrink: boolean): void;
    pack2(child: Widget, resize: boolean, shrink: boolean): void;
    set_position(position: number): void;
    set_wide_handle(wide: boolean): void;
    vfunc_accept_position(): boolean;
    vfunc_cancel_position(): boolean;
    vfunc_cycle_child_focus(reverse: boolean): boolean;
    vfunc_cycle_handle_focus(reverse: boolean): boolean;
    vfunc_move_handle(scroll: ScrollType): boolean;
    vfunc_toggle_handle_focus(): boolean;

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module PanedAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class PanedAccessible extends ContainerAccessible implements Atk.Component, Atk.Value {
    static $gtype: GObject.GType<PanedAccessible>;

    constructor(properties?: Partial<PanedAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PanedAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: PanedAccessiblePrivate | any;

    // Implemented Members

    get_current_value(): unknown;
    get_increment(): number;
    get_maximum_value(): unknown;
    get_minimum_increment(): unknown;
    get_minimum_value(): unknown;
    get_range(): Atk.Range | null;
    get_sub_ranges(): Atk.Range[];
    get_value_and_text(): [number, string];
    set_current_value(value: GObject.Value | any): boolean;
    set_value(new_value: number): void;
    vfunc_get_current_value(): unknown;
    vfunc_get_increment(): number;
    vfunc_get_maximum_value(): unknown;
    vfunc_get_minimum_increment(): unknown;
    vfunc_get_minimum_value(): unknown;
    vfunc_get_range(): Atk.Range | null;
    vfunc_get_sub_ranges(): Atk.Range[];
    vfunc_get_value_and_text(): [number, string];
    vfunc_set_current_value(value: GObject.Value | any): boolean;
    vfunc_set_value(new_value: number): void;
}
export module PlacesSidebar {
    export interface ConstructorProperties extends ScrolledWindow.ConstructorProperties {
        [key: string]: any;
        localOnly: boolean;
        location: Gio.File;
        openFlags: PlacesOpenFlags;
        populateAll: boolean;
        showConnectToServer: boolean;
        showDesktop: boolean;
        showEnterLocation: boolean;
        showOtherLocations: boolean;
        showRecent: boolean;
        showStarredLocation: boolean;
        showTrash: boolean;
    }
}
export class PlacesSidebar extends ScrolledWindow implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<PlacesSidebar>;

    constructor(properties?: Partial<PlacesSidebar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PlacesSidebar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get localOnly(): boolean;
    set localOnly(val: boolean);
    get location(): Gio.File;
    set location(val: Gio.File);
    get openFlags(): PlacesOpenFlags;
    set openFlags(val: PlacesOpenFlags);
    get populateAll(): boolean;
    set populateAll(val: boolean);
    get showConnectToServer(): boolean;
    set showConnectToServer(val: boolean);
    get showDesktop(): boolean;
    set showDesktop(val: boolean);
    get showEnterLocation(): boolean;
    set showEnterLocation(val: boolean);
    get showOtherLocations(): boolean;
    set showOtherLocations(val: boolean);
    get showRecent(): boolean;
    set showRecent(val: boolean);
    get showStarredLocation(): boolean;
    set showStarredLocation(val: boolean);
    get showTrash(): boolean;
    set showTrash(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "drag-action-ask", callback: (_source: this, actions: number) => number): number;
    connect_after(signal: "drag-action-ask", callback: (_source: this, actions: number) => number): number;
    emit(signal: "drag-action-ask", actions: number): void;
    connect(
        signal: "drag-action-requested",
        callback: (_source: this, context: Gdk.DragContext, dest_file: Gio.File, source_file_list: Gio.File[]) => number
    ): number;
    connect_after(
        signal: "drag-action-requested",
        callback: (_source: this, context: Gdk.DragContext, dest_file: Gio.File, source_file_list: Gio.File[]) => number
    ): number;
    emit(
        signal: "drag-action-requested",
        context: Gdk.DragContext,
        dest_file: Gio.File,
        source_file_list: Gio.File[]
    ): void;
    connect(
        signal: "drag-perform-drop",
        callback: (_source: this, dest_file: Gio.File, source_file_list: Gio.File[], action: number) => void
    ): number;
    connect_after(
        signal: "drag-perform-drop",
        callback: (_source: this, dest_file: Gio.File, source_file_list: Gio.File[], action: number) => void
    ): number;
    emit(signal: "drag-perform-drop", dest_file: Gio.File, source_file_list: Gio.File[], action: number): void;
    connect(signal: "mount", callback: (_source: this, mount_operation: Gio.MountOperation) => void): number;
    connect_after(signal: "mount", callback: (_source: this, mount_operation: Gio.MountOperation) => void): number;
    emit(signal: "mount", mount_operation: Gio.MountOperation): void;
    connect(
        signal: "open-location",
        callback: (_source: this, location: Gio.File, open_flags: PlacesOpenFlags) => void
    ): number;
    connect_after(
        signal: "open-location",
        callback: (_source: this, location: Gio.File, open_flags: PlacesOpenFlags) => void
    ): number;
    emit(signal: "open-location", location: Gio.File, open_flags: PlacesOpenFlags): void;
    connect(
        signal: "populate-popup",
        callback: (
            _source: this,
            container: Widget,
            selected_item: Gio.File | null,
            selected_volume: Gio.Volume | null
        ) => void
    ): number;
    connect_after(
        signal: "populate-popup",
        callback: (
            _source: this,
            container: Widget,
            selected_item: Gio.File | null,
            selected_volume: Gio.Volume | null
        ) => void
    ): number;
    emit(
        signal: "populate-popup",
        container: Widget,
        selected_item: Gio.File | null,
        selected_volume: Gio.Volume | null
    ): void;
    connect(signal: "show-connect-to-server", callback: (_source: this) => void): number;
    connect_after(signal: "show-connect-to-server", callback: (_source: this) => void): number;
    emit(signal: "show-connect-to-server"): void;
    connect(signal: "show-enter-location", callback: (_source: this) => void): number;
    connect_after(signal: "show-enter-location", callback: (_source: this) => void): number;
    emit(signal: "show-enter-location"): void;
    connect(
        signal: "show-error-message",
        callback: (_source: this, primary: string, secondary: string) => void
    ): number;
    connect_after(
        signal: "show-error-message",
        callback: (_source: this, primary: string, secondary: string) => void
    ): number;
    emit(signal: "show-error-message", primary: string, secondary: string): void;
    connect(signal: "show-other-locations", callback: (_source: this) => void): number;
    connect_after(signal: "show-other-locations", callback: (_source: this) => void): number;
    emit(signal: "show-other-locations"): void;
    connect(
        signal: "show-other-locations-with-flags",
        callback: (_source: this, open_flags: PlacesOpenFlags) => void
    ): number;
    connect_after(
        signal: "show-other-locations-with-flags",
        callback: (_source: this, open_flags: PlacesOpenFlags) => void
    ): number;
    emit(signal: "show-other-locations-with-flags", open_flags: PlacesOpenFlags): void;
    connect(signal: "show-starred-location", callback: (_source: this, open_flags: PlacesOpenFlags) => void): number;
    connect_after(
        signal: "show-starred-location",
        callback: (_source: this, open_flags: PlacesOpenFlags) => void
    ): number;
    emit(signal: "show-starred-location", open_flags: PlacesOpenFlags): void;
    connect(signal: "unmount", callback: (_source: this, mount_operation: Gio.MountOperation) => void): number;
    connect_after(signal: "unmount", callback: (_source: this, mount_operation: Gio.MountOperation) => void): number;
    emit(signal: "unmount", mount_operation: Gio.MountOperation): void;

    // Constructors

    static ["new"](): PlacesSidebar;

    // Members

    add_shortcut(location: Gio.File): void;
    get_local_only(): boolean;
    get_location(): Gio.File | null;
    get_nth_bookmark(n: number): Gio.File | null;
    get_open_flags(): PlacesOpenFlags;
    get_show_connect_to_server(): boolean;
    get_show_desktop(): boolean;
    get_show_enter_location(): boolean;
    get_show_other_locations(): boolean;
    get_show_recent(): boolean;
    get_show_starred_location(): boolean;
    get_show_trash(): boolean;
    list_shortcuts(): Gio.File[];
    remove_shortcut(location: Gio.File): void;
    set_drop_targets_visible(visible: boolean, context: Gdk.DragContext): void;
    set_local_only(local_only: boolean): void;
    set_location(location?: Gio.File | null): void;
    set_open_flags(flags: PlacesOpenFlags): void;
    set_show_connect_to_server(show_connect_to_server: boolean): void;
    set_show_desktop(show_desktop: boolean): void;
    set_show_enter_location(show_enter_location: boolean): void;
    set_show_other_locations(show_other_locations: boolean): void;
    set_show_recent(show_recent: boolean): void;
    set_show_starred_location(show_starred_location: boolean): void;
    set_show_trash(show_trash: boolean): void;
}
export module Plug {
    export interface ConstructorProperties extends Window.ConstructorProperties {
        [key: string]: any;
        embedded: boolean;
        socketWindow: Gdk.Window;
    }
}
export class Plug extends Window implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Plug>;

    constructor(properties?: Partial<Plug.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Plug.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get embedded(): boolean;
    get socketWindow(): Gdk.Window;

    // Fields
    // This accessor conflicts with a property, field, or function name in a parent class or interface.
    // @ts-expect-error
    window: Window | any;
    priv: PlugPrivate | any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "embedded", callback: (_source: this) => void): number;
    connect_after(signal: "embedded", callback: (_source: this) => void): number;
    emit(signal: "embedded"): void;

    // Constructors

    static ["new"](socket_id: xlib.Window): Plug;
    // Conflicted with Gtk.Window.new
    static ["new"](...args: never[]): any;
    static new_for_display(display: Gdk.Display, socket_id: xlib.Window): Plug;

    // Members

    construct(socket_id: xlib.Window): void;
    construct_for_display(display: Gdk.Display, socket_id: xlib.Window): void;
    get_embedded(): boolean;
    get_id(): xlib.Window;
    get_socket_window(): Gdk.Window | null;
    vfunc_embedded(): void;
}
export module PlugAccessible {
    export interface ConstructorProperties extends WindowAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class PlugAccessible extends WindowAccessible implements Atk.Component, Atk.Window {
    static $gtype: GObject.GType<PlugAccessible>;

    constructor(properties?: Partial<PlugAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PlugAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: PlugAccessiblePrivate | any;

    // Members

    get_id(): string;
}
export module Popover {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        constrainTo: PopoverConstraint;
        modal: boolean;
        pointingTo: Gdk.Rectangle;
        position: PositionType;
        relativeTo: Widget;
        transitionsEnabled: boolean;
    }
}
export class Popover extends Bin implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Popover>;

    constructor(properties?: Partial<Popover.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Popover.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get constrainTo(): PopoverConstraint;
    set constrainTo(val: PopoverConstraint);
    get modal(): boolean;
    set modal(val: boolean);
    get pointingTo(): Gdk.Rectangle;
    set pointingTo(val: Gdk.Rectangle);
    get position(): PositionType;
    set position(val: PositionType);
    get relativeTo(): Widget;
    set relativeTo(val: Widget);
    get transitionsEnabled(): boolean;
    set transitionsEnabled(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "closed", callback: (_source: this) => void): number;
    connect_after(signal: "closed", callback: (_source: this) => void): number;
    emit(signal: "closed"): void;

    // Constructors

    static ["new"](relative_to?: Widget | null): Popover;
    static new_from_model(relative_to: Widget | null, model: Gio.MenuModel): Popover;

    // Members

    bind_model(model?: Gio.MenuModel | null, action_namespace?: string | null): void;
    get_constrain_to(): PopoverConstraint;
    get_default_widget(): Widget | null;
    get_modal(): boolean;
    get_pointing_to(): [boolean, Gdk.Rectangle];
    get_position(): PositionType;
    get_relative_to(): Widget;
    get_transitions_enabled(): boolean;
    popdown(): void;
    popup(): void;
    set_constrain_to(constraint: PopoverConstraint): void;
    set_default_widget(widget?: Widget | null): void;
    set_modal(modal: boolean): void;
    set_pointing_to(rect: Gdk.Rectangle): void;
    set_position(position: PositionType): void;
    set_relative_to(relative_to?: Widget | null): void;
    set_transitions_enabled(transitions_enabled: boolean): void;
    vfunc_closed(): void;
}
export module PopoverAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class PopoverAccessible extends ContainerAccessible implements Atk.Component {
    static $gtype: GObject.GType<PopoverAccessible>;

    constructor(properties?: Partial<PopoverAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PopoverAccessible.ConstructorProperties>, ...args: any[]): void;
}
export module PopoverMenu {
    export interface ConstructorProperties extends Popover.ConstructorProperties {
        [key: string]: any;
        visibleSubmenu: string;
    }
}
export class PopoverMenu extends Popover implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<PopoverMenu>;

    constructor(properties?: Partial<PopoverMenu.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PopoverMenu.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get visibleSubmenu(): string;
    set visibleSubmenu(val: string);

    // Constructors

    static ["new"](): PopoverMenu;

    // Members

    open_submenu(name: string): void;
}
export module PrintContext {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class PrintContext extends GObject.Object {
    static $gtype: GObject.GType<PrintContext>;

    constructor(properties?: Partial<PrintContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PrintContext.ConstructorProperties>, ...args: any[]): void;

    // Members

    create_pango_context(): Pango.Context;
    create_pango_layout(): Pango.Layout;
    get_cairo_context(): cairo.Context;
    get_dpi_x(): number;
    get_dpi_y(): number;
    get_hard_margins(): [boolean, number, number, number, number];
    get_height(): number;
    get_page_setup(): PageSetup;
    get_pango_fontmap(): Pango.FontMap;
    get_width(): number;
    set_cairo_context(cr: cairo.Context, dpi_x: number, dpi_y: number): void;
}
export module PrintOperation {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        allowAsync: boolean;
        currentPage: number;
        customTabLabel: string;
        defaultPageSetup: PageSetup;
        embedPageSetup: boolean;
        exportFilename: string;
        hasSelection: boolean;
        jobName: string;
        nPages: number;
        nPagesToPrint: number;
        printSettings: PrintSettings;
        showProgress: boolean;
        status: PrintStatus;
        statusString: string;
        supportSelection: boolean;
        trackPrintStatus: boolean;
        unit: Unit;
        useFullPage: boolean;
    }
}
export class PrintOperation extends GObject.Object implements PrintOperationPreview {
    static $gtype: GObject.GType<PrintOperation>;

    constructor(properties?: Partial<PrintOperation.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PrintOperation.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get allowAsync(): boolean;
    set allowAsync(val: boolean);
    get currentPage(): number;
    set currentPage(val: number);
    get customTabLabel(): string;
    set customTabLabel(val: string);
    get defaultPageSetup(): PageSetup;
    set defaultPageSetup(val: PageSetup);
    get embedPageSetup(): boolean;
    set embedPageSetup(val: boolean);
    get exportFilename(): string;
    set exportFilename(val: string);
    get hasSelection(): boolean;
    set hasSelection(val: boolean);
    get jobName(): string;
    set jobName(val: string);
    get nPages(): number;
    set nPages(val: number);
    get nPagesToPrint(): number;
    get printSettings(): PrintSettings;
    set printSettings(val: PrintSettings);
    get showProgress(): boolean;
    set showProgress(val: boolean);
    get status(): PrintStatus;
    get statusString(): string;
    get supportSelection(): boolean;
    set supportSelection(val: boolean);
    get trackPrintStatus(): boolean;
    set trackPrintStatus(val: boolean);
    get unit(): Unit;
    set unit(val: Unit);
    get useFullPage(): boolean;
    set useFullPage(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "begin-print", callback: (_source: this, context: PrintContext) => void): number;
    connect_after(signal: "begin-print", callback: (_source: this, context: PrintContext) => void): number;
    emit(signal: "begin-print", context: PrintContext): void;
    connect(signal: "create-custom-widget", callback: (_source: this) => GObject.Object): number;
    connect_after(signal: "create-custom-widget", callback: (_source: this) => GObject.Object): number;
    emit(signal: "create-custom-widget"): void;
    connect(signal: "custom-widget-apply", callback: (_source: this, widget: Widget) => void): number;
    connect_after(signal: "custom-widget-apply", callback: (_source: this, widget: Widget) => void): number;
    emit(signal: "custom-widget-apply", widget: Widget): void;
    connect(signal: "done", callback: (_source: this, result: PrintOperationResult) => void): number;
    connect_after(signal: "done", callback: (_source: this, result: PrintOperationResult) => void): number;
    emit(signal: "done", result: PrintOperationResult): void;
    connect(signal: "draw-page", callback: (_source: this, context: PrintContext, page_nr: number) => void): number;
    connect_after(
        signal: "draw-page",
        callback: (_source: this, context: PrintContext, page_nr: number) => void
    ): number;
    emit(signal: "draw-page", context: PrintContext, page_nr: number): void;
    connect(signal: "end-print", callback: (_source: this, context: PrintContext) => void): number;
    connect_after(signal: "end-print", callback: (_source: this, context: PrintContext) => void): number;
    emit(signal: "end-print", context: PrintContext): void;
    connect(signal: "paginate", callback: (_source: this, context: PrintContext) => boolean): number;
    connect_after(signal: "paginate", callback: (_source: this, context: PrintContext) => boolean): number;
    emit(signal: "paginate", context: PrintContext): void;
    connect(
        signal: "preview",
        callback: (
            _source: this,
            preview: PrintOperationPreview,
            context: PrintContext,
            parent: Window | null
        ) => boolean
    ): number;
    connect_after(
        signal: "preview",
        callback: (
            _source: this,
            preview: PrintOperationPreview,
            context: PrintContext,
            parent: Window | null
        ) => boolean
    ): number;
    emit(signal: "preview", preview: PrintOperationPreview, context: PrintContext, parent: Window | null): void;
    connect(
        signal: "request-page-setup",
        callback: (_source: this, context: PrintContext, page_nr: number, setup: PageSetup) => void
    ): number;
    connect_after(
        signal: "request-page-setup",
        callback: (_source: this, context: PrintContext, page_nr: number, setup: PageSetup) => void
    ): number;
    emit(signal: "request-page-setup", context: PrintContext, page_nr: number, setup: PageSetup): void;
    connect(signal: "status-changed", callback: (_source: this) => void): number;
    connect_after(signal: "status-changed", callback: (_source: this) => void): number;
    emit(signal: "status-changed"): void;
    connect(
        signal: "update-custom-widget",
        callback: (_source: this, widget: Widget, setup: PageSetup, settings: PrintSettings) => void
    ): number;
    connect_after(
        signal: "update-custom-widget",
        callback: (_source: this, widget: Widget, setup: PageSetup, settings: PrintSettings) => void
    ): number;
    emit(signal: "update-custom-widget", widget: Widget, setup: PageSetup, settings: PrintSettings): void;

    // Constructors

    static ["new"](): PrintOperation;

    // Members

    cancel(): void;
    draw_page_finish(): void;
    get_default_page_setup(): PageSetup;
    get_embed_page_setup(): boolean;
    get_error(): void;
    get_has_selection(): boolean;
    get_n_pages_to_print(): number;
    get_print_settings(): PrintSettings;
    get_status(): PrintStatus;
    get_status_string(): string;
    get_support_selection(): boolean;
    is_finished(): boolean;
    run(action: PrintOperationAction, parent?: Window | null): PrintOperationResult;
    set_allow_async(allow_async: boolean): void;
    set_current_page(current_page: number): void;
    set_custom_tab_label(label?: string | null): void;
    set_default_page_setup(default_page_setup?: PageSetup | null): void;
    set_defer_drawing(): void;
    set_embed_page_setup(embed: boolean): void;
    set_export_filename(filename: string): void;
    set_has_selection(has_selection: boolean): void;
    set_job_name(job_name: string): void;
    set_n_pages(n_pages: number): void;
    set_print_settings(print_settings?: PrintSettings | null): void;
    set_show_progress(show_progress: boolean): void;
    set_support_selection(support_selection: boolean): void;
    set_track_print_status(track_status: boolean): void;
    set_unit(unit: Unit): void;
    set_use_full_page(full_page: boolean): void;
    vfunc_begin_print(context: PrintContext): void;
    vfunc_custom_widget_apply(widget: Widget): void;
    vfunc_done(result: PrintOperationResult): void;
    vfunc_draw_page(context: PrintContext, page_nr: number): void;
    vfunc_end_print(context: PrintContext): void;
    vfunc_paginate(context: PrintContext): boolean;
    vfunc_preview(preview: PrintOperationPreview, context: PrintContext, parent: Window): boolean;
    vfunc_request_page_setup(context: PrintContext, page_nr: number, setup: PageSetup): void;
    vfunc_status_changed(): void;
    vfunc_update_custom_widget(widget: Widget, setup: PageSetup, settings: PrintSettings): void;

    // Implemented Members

    end_preview(): void;
    is_selected(page_nr: number): boolean;
    render_page(page_nr: number): void;
    vfunc_end_preview(): void;
    vfunc_got_page_size(context: PrintContext, page_setup: PageSetup): void;
    vfunc_is_selected(page_nr: number): boolean;
    vfunc_ready(context: PrintContext): void;
    vfunc_render_page(page_nr: number): void;
}
export module PrintSettings {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class PrintSettings extends GObject.Object {
    static $gtype: GObject.GType<PrintSettings>;

    constructor(properties?: Partial<PrintSettings.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<PrintSettings.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): PrintSettings;
    static new_from_file(file_name: string): PrintSettings;
    static new_from_gvariant(variant: GLib.Variant): PrintSettings;
    static new_from_key_file(key_file: GLib.KeyFile, group_name?: string | null): PrintSettings;

    // Members

    copy(): PrintSettings;
    foreach(func: PrintSettingsFunc): void;
    get(key: string): string;
    get_bool(key: string): boolean;
    get_collate(): boolean;
    get_default_source(): string;
    get_dither(): string;
    get_double(key: string): number;
    get_double_with_default(key: string, def: number): number;
    get_duplex(): PrintDuplex;
    get_finishings(): string;
    get_int(key: string): number;
    get_int_with_default(key: string, def: number): number;
    get_length(key: string, unit: Unit): number;
    get_media_type(): string;
    get_n_copies(): number;
    get_number_up(): number;
    get_number_up_layout(): NumberUpLayout;
    get_orientation(): PageOrientation;
    get_output_bin(): string;
    get_page_ranges(): PageRange[];
    get_page_set(): PageSet;
    get_paper_height(unit: Unit): number;
    get_paper_size(): PaperSize;
    get_paper_width(unit: Unit): number;
    get_print_pages(): PrintPages;
    get_printer(): string;
    get_printer_lpi(): number;
    get_quality(): PrintQuality;
    get_resolution(): number;
    get_resolution_x(): number;
    get_resolution_y(): number;
    get_reverse(): boolean;
    get_scale(): number;
    get_use_color(): boolean;
    has_key(key: string): boolean;
    load_file(file_name: string): boolean;
    load_key_file(key_file: GLib.KeyFile, group_name?: string | null): boolean;
    set(key: string, value?: string | null): void;
    // Conflicted with GObject.Object.set
    set(...args: never[]): any;
    set_bool(key: string, value: boolean): void;
    set_collate(collate: boolean): void;
    set_default_source(default_source: string): void;
    set_dither(dither: string): void;
    set_double(key: string, value: number): void;
    set_duplex(duplex: PrintDuplex): void;
    set_finishings(finishings: string): void;
    set_int(key: string, value: number): void;
    set_length(key: string, value: number, unit: Unit): void;
    set_media_type(media_type: string): void;
    set_n_copies(num_copies: number): void;
    set_number_up(number_up: number): void;
    set_number_up_layout(number_up_layout: NumberUpLayout): void;
    set_orientation(orientation: PageOrientation): void;
    set_output_bin(output_bin: string): void;
    set_page_ranges(page_ranges: PageRange[]): void;
    set_page_set(page_set: PageSet): void;
    set_paper_height(height: number, unit: Unit): void;
    set_paper_size(paper_size: PaperSize): void;
    set_paper_width(width: number, unit: Unit): void;
    set_print_pages(pages: PrintPages): void;
    set_printer(printer: string): void;
    set_printer_lpi(lpi: number): void;
    set_quality(quality: PrintQuality): void;
    set_resolution(resolution: number): void;
    set_resolution_xy(resolution_x: number, resolution_y: number): void;
    set_reverse(reverse: boolean): void;
    set_scale(scale: number): void;
    set_use_color(use_color: boolean): void;
    to_file(file_name: string): boolean;
    to_gvariant(): GLib.Variant;
    to_key_file(key_file: GLib.KeyFile, group_name?: string | null): void;
    unset(key: string): void;
}
export module ProgressBar {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        ellipsize: Pango.EllipsizeMode;
        fraction: number;
        inverted: boolean;
        pulseStep: number;
        showText: boolean;
        text: string;
    }
}
export class ProgressBar extends Widget implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<ProgressBar>;

    constructor(properties?: Partial<ProgressBar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ProgressBar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get ellipsize(): Pango.EllipsizeMode;
    set ellipsize(val: Pango.EllipsizeMode);
    get fraction(): number;
    set fraction(val: number);
    get inverted(): boolean;
    set inverted(val: boolean);
    get pulseStep(): number;
    set pulseStep(val: number);
    get showText(): boolean;
    set showText(val: boolean);
    get text(): string;
    set text(val: string);

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](): ProgressBar;

    // Members

    get_ellipsize(): Pango.EllipsizeMode;
    get_fraction(): number;
    get_inverted(): boolean;
    get_pulse_step(): number;
    get_show_text(): boolean;
    get_text(): string | null;
    pulse(): void;
    set_ellipsize(mode: Pango.EllipsizeMode): void;
    set_fraction(fraction: number): void;
    set_inverted(inverted: boolean): void;
    set_pulse_step(fraction: number): void;
    set_show_text(show_text: boolean): void;
    set_text(text?: string | null): void;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module ProgressBarAccessible {
    export interface ConstructorProperties extends WidgetAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ProgressBarAccessible extends WidgetAccessible implements Atk.Component, Atk.Value {
    static $gtype: GObject.GType<ProgressBarAccessible>;

    constructor(properties?: Partial<ProgressBarAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ProgressBarAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ProgressBarAccessiblePrivate | any;

    // Implemented Members

    contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    get_alpha(): number;
    get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    get_layer(): Atk.Layer;
    get_mdi_zorder(): number;
    get_position(coord_type: Atk.CoordType): [number, number];
    get_size(): [number, number];
    grab_focus(): boolean;
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    remove_focus_handler(handler_id: number): void;
    scroll_to(type: Atk.ScrollType): boolean;
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    set_size(width: number, height: number): boolean;
    vfunc_bounds_changed(bounds: Atk.Rectangle): void;
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_get_alpha(): number;
    vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    vfunc_get_layer(): Atk.Layer;
    vfunc_get_mdi_zorder(): number;
    vfunc_get_position(coord_type: Atk.CoordType): [number, number];
    vfunc_get_size(): [number, number];
    vfunc_grab_focus(): boolean;
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    vfunc_remove_focus_handler(handler_id: number): void;
    vfunc_scroll_to(type: Atk.ScrollType): boolean;
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_size(width: number, height: number): boolean;
    get_current_value(): unknown;
    get_increment(): number;
    get_maximum_value(): unknown;
    get_minimum_increment(): unknown;
    get_minimum_value(): unknown;
    get_range(): Atk.Range | null;
    get_sub_ranges(): Atk.Range[];
    get_value_and_text(): [number, string];
    set_current_value(value: GObject.Value | any): boolean;
    set_value(new_value: number): void;
    vfunc_get_current_value(): unknown;
    vfunc_get_increment(): number;
    vfunc_get_maximum_value(): unknown;
    vfunc_get_minimum_increment(): unknown;
    vfunc_get_minimum_value(): unknown;
    vfunc_get_range(): Atk.Range | null;
    vfunc_get_sub_ranges(): Atk.Range[];
    vfunc_get_value_and_text(): [number, string];
    vfunc_set_current_value(value: GObject.Value | any): boolean;
    vfunc_set_value(new_value: number): void;
}
export module RadioAction {
    export interface ConstructorProperties extends ToggleAction.ConstructorProperties {
        [key: string]: any;
        currentValue: number;
        group: RadioAction;
        value: number;
    }
}
export class RadioAction extends ToggleAction implements Buildable {
    static $gtype: GObject.GType<RadioAction>;

    constructor(properties?: Partial<RadioAction.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RadioAction.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get currentValue(): number;
    set currentValue(val: number);
    set group(val: RadioAction);
    get value(): number;
    set value(val: number);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this, current: RadioAction) => void): number;
    connect_after(signal: "changed", callback: (_source: this, current: RadioAction) => void): number;
    emit(signal: "changed", current: RadioAction): void;

    // Constructors

    static ["new"](
        name: string,
        label: string | null,
        tooltip: string | null,
        stock_id: string | null,
        value: number
    ): RadioAction;
    // Conflicted with Gtk.ToggleAction.new
    static ["new"](...args: never[]): any;

    // Members

    get_current_value(): number;
    get_group(): RadioAction[];
    join_group(group_source?: RadioAction | null): void;
    set_current_value(current_value: number): void;
    set_group(group?: RadioAction[] | null): void;
    vfunc_changed(current: RadioAction): void;
}
export module RadioButton {
    export interface ConstructorProperties extends CheckButton.ConstructorProperties {
        [key: string]: any;
        group: RadioButton;
    }
}
export class RadioButton extends CheckButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    static $gtype: GObject.GType<RadioButton>;

    constructor(properties?: Partial<RadioButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RadioButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    set group(val: RadioButton);

    // Fields
    check_button: CheckButton;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "group-changed", callback: (_source: this) => void): number;
    connect_after(signal: "group-changed", callback: (_source: this) => void): number;
    emit(signal: "group-changed"): void;

    // Constructors

    static ["new"](group?: RadioButton[] | null): RadioButton;
    // Conflicted with Gtk.CheckButton.new
    static ["new"](...args: never[]): any;
    static new_from_widget(radio_group_member?: RadioButton | null): RadioButton;
    static new_with_label(group: RadioButton[] | null, label: string): RadioButton;
    // Conflicted with Gtk.CheckButton.new_with_label
    static new_with_label(...args: never[]): any;
    static new_with_label_from_widget(radio_group_member: RadioButton | null, label: string): RadioButton;
    static new_with_mnemonic(group: RadioButton[] | null, label: string): RadioButton;
    // Conflicted with Gtk.CheckButton.new_with_mnemonic
    static new_with_mnemonic(...args: never[]): any;
    static new_with_mnemonic_from_widget(radio_group_member: RadioButton | null, label: string): RadioButton;

    // Members

    get_group(): RadioButton[];
    join_group(group_source?: RadioButton | null): void;
    set_group(group?: RadioButton[] | null): void;
    vfunc_group_changed(): void;
}
export module RadioButtonAccessible {
    export interface ConstructorProperties extends ToggleButtonAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class RadioButtonAccessible extends ToggleButtonAccessible implements Atk.Action, Atk.Component, Atk.Image {
    static $gtype: GObject.GType<RadioButtonAccessible>;

    constructor(properties?: Partial<RadioButtonAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RadioButtonAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: RadioButtonAccessiblePrivate | any;
}
export module RadioMenuItem {
    export interface ConstructorProperties extends CheckMenuItem.ConstructorProperties {
        [key: string]: any;
        group: RadioMenuItem;
    }
}
export class RadioMenuItem extends CheckMenuItem implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    static $gtype: GObject.GType<RadioMenuItem>;

    constructor(properties?: Partial<RadioMenuItem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RadioMenuItem.ConstructorProperties>, ...args: any[]): void;

    // Properties
    set group(val: RadioMenuItem);

    // Fields
    check_menu_item: CheckMenuItem;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "group-changed", callback: (_source: this) => void): number;
    connect_after(signal: "group-changed", callback: (_source: this) => void): number;
    emit(signal: "group-changed"): void;

    // Constructors

    static ["new"](group?: RadioMenuItem[] | null): RadioMenuItem;
    // Conflicted with Gtk.CheckMenuItem.new
    static ["new"](...args: never[]): any;
    static new_from_widget(group?: RadioMenuItem | null): RadioMenuItem;
    static new_with_label(group: RadioMenuItem[] | null, label: string): RadioMenuItem;
    // Conflicted with Gtk.CheckMenuItem.new_with_label
    static new_with_label(...args: never[]): any;
    static new_with_label_from_widget(group?: RadioMenuItem | null, label?: string | null): RadioMenuItem;
    static new_with_mnemonic(group: RadioMenuItem[] | null, label: string): RadioMenuItem;
    // Conflicted with Gtk.CheckMenuItem.new_with_mnemonic
    static new_with_mnemonic(...args: never[]): any;
    static new_with_mnemonic_from_widget(group?: RadioMenuItem | null, label?: string | null): RadioMenuItem;

    // Members

    get_group(): RadioMenuItem[];
    join_group(group_source?: RadioMenuItem | null): void;
    set_group(group?: RadioMenuItem[] | null): void;
    vfunc_group_changed(): void;
}
export module RadioMenuItemAccessible {
    export interface ConstructorProperties extends CheckMenuItemAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class RadioMenuItemAccessible
    extends CheckMenuItemAccessible
    implements Atk.Action, Atk.Component, Atk.Selection
{
    static $gtype: GObject.GType<RadioMenuItemAccessible>;

    constructor(properties?: Partial<RadioMenuItemAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RadioMenuItemAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: RadioMenuItemAccessiblePrivate | any;
}
export module RadioToolButton {
    export interface ConstructorProperties extends ToggleToolButton.ConstructorProperties {
        [key: string]: any;
        group: RadioToolButton;
    }
}
export class RadioToolButton
    extends ToggleToolButton
    implements Atk.ImplementorIface, Actionable, Activatable, Buildable
{
    static $gtype: GObject.GType<RadioToolButton>;

    constructor(properties?: Partial<RadioToolButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RadioToolButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    set group(val: RadioToolButton);

    // Constructors

    static ["new"](group?: RadioButton[] | null): RadioToolButton;
    // Conflicted with Gtk.ToggleToolButton.new
    static ["new"](...args: never[]): any;
    static new_from_stock(group: RadioButton[] | null, stock_id: string): RadioToolButton;
    // Conflicted with Gtk.ToggleToolButton.new_from_stock
    static new_from_stock(...args: never[]): any;
    static new_from_widget(group?: RadioToolButton | null): RadioToolButton;
    static new_with_stock_from_widget(group: RadioToolButton | null, stock_id: string): RadioToolButton;

    // Members

    get_group(): RadioButton[];
    set_group(group?: RadioButton[] | null): void;
}
export module Range {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        adjustment: Adjustment;
        fillLevel: number;
        inverted: boolean;
        lowerStepperSensitivity: SensitivityType;
        restrictToFillLevel: boolean;
        roundDigits: number;
        showFillLevel: boolean;
        upperStepperSensitivity: SensitivityType;
    }
}
export abstract class Range extends Widget implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<Range>;

    constructor(properties?: Partial<Range.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Range.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get adjustment(): Adjustment;
    set adjustment(val: Adjustment);
    get fillLevel(): number;
    set fillLevel(val: number);
    get inverted(): boolean;
    set inverted(val: boolean);
    get lowerStepperSensitivity(): SensitivityType;
    set lowerStepperSensitivity(val: SensitivityType);
    get restrictToFillLevel(): boolean;
    set restrictToFillLevel(val: boolean);
    get roundDigits(): number;
    set roundDigits(val: number);
    get showFillLevel(): boolean;
    set showFillLevel(val: boolean);
    get upperStepperSensitivity(): SensitivityType;
    set upperStepperSensitivity(val: SensitivityType);

    // Fields
    widget: Widget;
    priv: RangePrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "adjust-bounds", callback: (_source: this, value: number) => void): number;
    connect_after(signal: "adjust-bounds", callback: (_source: this, value: number) => void): number;
    emit(signal: "adjust-bounds", value: number): void;
    connect(signal: "change-value", callback: (_source: this, scroll: ScrollType, value: number) => boolean): number;
    connect_after(
        signal: "change-value",
        callback: (_source: this, scroll: ScrollType, value: number) => boolean
    ): number;
    emit(signal: "change-value", scroll: ScrollType, value: number): void;
    connect(signal: "move-slider", callback: (_source: this, step: ScrollType) => void): number;
    connect_after(signal: "move-slider", callback: (_source: this, step: ScrollType) => void): number;
    emit(signal: "move-slider", step: ScrollType): void;
    connect(signal: "value-changed", callback: (_source: this) => void): number;
    connect_after(signal: "value-changed", callback: (_source: this) => void): number;
    emit(signal: "value-changed"): void;

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Members

    get_adjustment(): Adjustment;
    get_fill_level(): number;
    get_flippable(): boolean;
    get_inverted(): boolean;
    get_lower_stepper_sensitivity(): SensitivityType;
    get_min_slider_size(): number;
    get_range_rect(): Gdk.Rectangle;
    get_restrict_to_fill_level(): boolean;
    get_round_digits(): number;
    get_show_fill_level(): boolean;
    get_slider_range(): [number, number];
    get_slider_size_fixed(): boolean;
    get_upper_stepper_sensitivity(): SensitivityType;
    get_value(): number;
    set_adjustment(adjustment: Adjustment): void;
    set_fill_level(fill_level: number): void;
    set_flippable(flippable: boolean): void;
    set_increments(step: number, page: number): void;
    set_inverted(setting: boolean): void;
    set_lower_stepper_sensitivity(sensitivity: SensitivityType): void;
    set_min_slider_size(min_size: number): void;
    set_range(min: number, max: number): void;
    set_restrict_to_fill_level(restrict_to_fill_level: boolean): void;
    set_round_digits(round_digits: number): void;
    set_show_fill_level(show_fill_level: boolean): void;
    set_slider_size_fixed(size_fixed: boolean): void;
    set_upper_stepper_sensitivity(sensitivity: SensitivityType): void;
    set_value(value: number): void;
    vfunc_adjust_bounds(new_value: number): void;
    vfunc_change_value(scroll: ScrollType, new_value: number): boolean;
    vfunc_get_range_border(border_: Border): void;
    vfunc_get_range_size_request(orientation: Orientation, minimum: number, natural: number): void;
    vfunc_move_slider(scroll: ScrollType): void;
    vfunc_value_changed(): void;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module RangeAccessible {
    export interface ConstructorProperties extends WidgetAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class RangeAccessible extends WidgetAccessible implements Atk.Component, Atk.Value {
    static $gtype: GObject.GType<RangeAccessible>;

    constructor(properties?: Partial<RangeAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RangeAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: RangeAccessiblePrivate | any;

    // Implemented Members

    contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    get_alpha(): number;
    get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    get_layer(): Atk.Layer;
    get_mdi_zorder(): number;
    get_position(coord_type: Atk.CoordType): [number, number];
    get_size(): [number, number];
    grab_focus(): boolean;
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    remove_focus_handler(handler_id: number): void;
    scroll_to(type: Atk.ScrollType): boolean;
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    set_size(width: number, height: number): boolean;
    vfunc_bounds_changed(bounds: Atk.Rectangle): void;
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_get_alpha(): number;
    vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    vfunc_get_layer(): Atk.Layer;
    vfunc_get_mdi_zorder(): number;
    vfunc_get_position(coord_type: Atk.CoordType): [number, number];
    vfunc_get_size(): [number, number];
    vfunc_grab_focus(): boolean;
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    vfunc_remove_focus_handler(handler_id: number): void;
    vfunc_scroll_to(type: Atk.ScrollType): boolean;
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_size(width: number, height: number): boolean;
    get_current_value(): unknown;
    get_increment(): number;
    get_maximum_value(): unknown;
    get_minimum_increment(): unknown;
    get_minimum_value(): unknown;
    get_range(): Atk.Range | null;
    get_sub_ranges(): Atk.Range[];
    get_value_and_text(): [number, string];
    set_current_value(value: GObject.Value | any): boolean;
    set_value(new_value: number): void;
    vfunc_get_current_value(): unknown;
    vfunc_get_increment(): number;
    vfunc_get_maximum_value(): unknown;
    vfunc_get_minimum_increment(): unknown;
    vfunc_get_minimum_value(): unknown;
    vfunc_get_range(): Atk.Range | null;
    vfunc_get_sub_ranges(): Atk.Range[];
    vfunc_get_value_and_text(): [number, string];
    vfunc_set_current_value(value: GObject.Value | any): boolean;
    vfunc_set_value(new_value: number): void;
}
export module RcStyle {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class RcStyle extends GObject.Object {
    static $gtype: GObject.GType<RcStyle>;

    constructor(properties?: Partial<RcStyle.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RcStyle.ConstructorProperties>, ...args: any[]): void;

    // Fields
    name: string;
    bg_pixmap_name: string[];
    font_desc: Pango.FontDescription;
    color_flags: RcFlags[];
    fg: Gdk.Color[];
    bg: Gdk.Color[];
    text: Gdk.Color[];
    base: Gdk.Color[];
    xthickness: number;
    ythickness: number;

    // Constructors

    static ["new"](): RcStyle;

    // Members

    copy(): RcStyle;
    vfunc_merge(src: RcStyle): void;
    vfunc_parse(settings: Settings, scanner: GLib.Scanner): number;
}
export module RecentAction {
    export interface ConstructorProperties extends Action.ConstructorProperties {
        [key: string]: any;
        showNumbers: boolean;
    }
}
export class RecentAction extends Action implements Buildable, RecentChooser {
    static $gtype: GObject.GType<RecentAction>;

    constructor(properties?: Partial<RecentAction.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RecentAction.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get showNumbers(): boolean;
    set showNumbers(val: boolean);

    // Implemented Properties

    get filter(): RecentFilter;
    set filter(val: RecentFilter);
    get limit(): number;
    set limit(val: number);
    get localOnly(): boolean;
    set localOnly(val: boolean);
    set recentManager(val: RecentManager);
    get selectMultiple(): boolean;
    set selectMultiple(val: boolean);
    get showIcons(): boolean;
    set showIcons(val: boolean);
    get showNotFound(): boolean;
    set showNotFound(val: boolean);
    get showPrivate(): boolean;
    set showPrivate(val: boolean);
    get showTips(): boolean;
    set showTips(val: boolean);
    get sortType(): RecentSortType;
    set sortType(val: RecentSortType);

    // Constructors

    static ["new"](
        name: string,
        label?: string | null,
        tooltip?: string | null,
        stock_id?: string | null
    ): RecentAction;
    static new_for_manager(
        name: string,
        label?: string | null,
        tooltip?: string | null,
        stock_id?: string | null,
        manager?: RecentManager | null
    ): RecentAction;

    // Members

    get_show_numbers(): boolean;
    set_show_numbers(show_numbers: boolean): void;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
    add_filter(filter: RecentFilter): void;
    get_current_item(): RecentInfo;
    get_current_uri(): string;
    get_filter(): RecentFilter;
    get_items(): RecentInfo[];
    get_limit(): number;
    get_local_only(): boolean;
    get_select_multiple(): boolean;
    get_show_icons(): boolean;
    get_show_not_found(): boolean;
    get_show_private(): boolean;
    get_show_tips(): boolean;
    get_sort_type(): RecentSortType;
    get_uris(): string[];
    list_filters(): RecentFilter[];
    remove_filter(filter: RecentFilter): void;
    select_all(): void;
    select_uri(uri: string): boolean;
    set_current_uri(uri: string): boolean;
    set_filter(filter?: RecentFilter | null): void;
    set_limit(limit: number): void;
    set_local_only(local_only: boolean): void;
    set_select_multiple(select_multiple: boolean): void;
    set_show_icons(show_icons: boolean): void;
    set_show_not_found(show_not_found: boolean): void;
    set_show_private(show_private: boolean): void;
    set_show_tips(show_tips: boolean): void;
    set_sort_func(sort_func: RecentSortFunc, data_destroy?: GLib.DestroyNotify | null): void;
    set_sort_type(sort_type: RecentSortType): void;
    unselect_all(): void;
    unselect_uri(uri: string): void;
    vfunc_add_filter(filter: RecentFilter): void;
    vfunc_get_current_uri(): string;
    vfunc_get_items(): RecentInfo[];
    vfunc_item_activated(): void;
    vfunc_list_filters(): RecentFilter[];
    vfunc_remove_filter(filter: RecentFilter): void;
    vfunc_select_all(): void;
    vfunc_select_uri(uri: string): boolean;
    vfunc_selection_changed(): void;
    vfunc_set_current_uri(uri: string): boolean;
    vfunc_set_sort_func(sort_func: RecentSortFunc, data_destroy?: GLib.DestroyNotify | null): void;
    vfunc_unselect_all(): void;
    vfunc_unselect_uri(uri: string): void;
}
export module RecentChooserDialog {
    export interface ConstructorProperties extends Dialog.ConstructorProperties {
        [key: string]: any;
    }
}
export class RecentChooserDialog extends Dialog implements Atk.ImplementorIface, Buildable, RecentChooser {
    static $gtype: GObject.GType<RecentChooserDialog>;

    constructor(properties?: Partial<RecentChooserDialog.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RecentChooserDialog.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get filter(): RecentFilter;
    set filter(val: RecentFilter);
    get limit(): number;
    set limit(val: number);
    get localOnly(): boolean;
    set localOnly(val: boolean);
    set recentManager(val: RecentManager);
    get selectMultiple(): boolean;
    set selectMultiple(val: boolean);
    get showIcons(): boolean;
    set showIcons(val: boolean);
    get showNotFound(): boolean;
    set showNotFound(val: boolean);
    get showPrivate(): boolean;
    set showPrivate(val: boolean);
    get showTips(): boolean;
    set showTips(val: boolean);
    get sortType(): RecentSortType;
    set sortType(val: RecentSortType);

    // Implemented Members

    add_filter(filter: RecentFilter): void;
    get_current_item(): RecentInfo;
    get_current_uri(): string;
    get_filter(): RecentFilter;
    get_items(): RecentInfo[];
    get_limit(): number;
    get_local_only(): boolean;
    get_select_multiple(): boolean;
    get_show_icons(): boolean;
    get_show_not_found(): boolean;
    get_show_private(): boolean;
    get_show_tips(): boolean;
    get_sort_type(): RecentSortType;
    get_uris(): string[];
    list_filters(): RecentFilter[];
    remove_filter(filter: RecentFilter): void;
    select_all(): void;
    select_uri(uri: string): boolean;
    set_current_uri(uri: string): boolean;
    set_filter(filter?: RecentFilter | null): void;
    set_limit(limit: number): void;
    set_local_only(local_only: boolean): void;
    set_select_multiple(select_multiple: boolean): void;
    set_show_icons(show_icons: boolean): void;
    set_show_not_found(show_not_found: boolean): void;
    set_show_private(show_private: boolean): void;
    set_show_tips(show_tips: boolean): void;
    set_sort_func(sort_func: RecentSortFunc, data_destroy?: GLib.DestroyNotify | null): void;
    set_sort_type(sort_type: RecentSortType): void;
    unselect_all(): void;
    unselect_uri(uri: string): void;
    vfunc_add_filter(filter: RecentFilter): void;
    vfunc_get_current_uri(): string;
    vfunc_get_items(): RecentInfo[];
    vfunc_item_activated(): void;
    vfunc_list_filters(): RecentFilter[];
    vfunc_remove_filter(filter: RecentFilter): void;
    vfunc_select_all(): void;
    vfunc_select_uri(uri: string): boolean;
    vfunc_selection_changed(): void;
    vfunc_set_current_uri(uri: string): boolean;
    vfunc_set_sort_func(sort_func: RecentSortFunc, data_destroy?: GLib.DestroyNotify | null): void;
    vfunc_unselect_all(): void;
    vfunc_unselect_uri(uri: string): void;
}
export module RecentChooserMenu {
    export interface ConstructorProperties extends Menu.ConstructorProperties {
        [key: string]: any;
        showNumbers: boolean;
    }
}
export class RecentChooserMenu extends Menu implements Atk.ImplementorIface, Activatable, Buildable, RecentChooser {
    static $gtype: GObject.GType<RecentChooserMenu>;

    constructor(properties?: Partial<RecentChooserMenu.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RecentChooserMenu.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get showNumbers(): boolean;
    set showNumbers(val: boolean);

    // Implemented Properties

    get relatedAction(): Action;
    set relatedAction(val: Action);
    get useActionAppearance(): boolean;
    set useActionAppearance(val: boolean);
    get filter(): RecentFilter;
    set filter(val: RecentFilter);
    get limit(): number;
    set limit(val: number);
    get localOnly(): boolean;
    set localOnly(val: boolean);
    set recentManager(val: RecentManager);
    get selectMultiple(): boolean;
    set selectMultiple(val: boolean);
    get showIcons(): boolean;
    set showIcons(val: boolean);
    get showNotFound(): boolean;
    set showNotFound(val: boolean);
    get showPrivate(): boolean;
    set showPrivate(val: boolean);
    get showTips(): boolean;
    set showTips(val: boolean);
    get sortType(): RecentSortType;
    set sortType(val: RecentSortType);

    // Constructors

    static ["new"](): RecentChooserMenu;
    static new_for_manager(manager: RecentManager): RecentChooserMenu;

    // Members

    get_show_numbers(): boolean;
    set_show_numbers(show_numbers: boolean): void;

    // Implemented Members

    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action?: Action | null): void;
    vfunc_sync_action_properties(action?: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
    add_filter(filter: RecentFilter): void;
    get_current_item(): RecentInfo;
    get_current_uri(): string;
    get_filter(): RecentFilter;
    get_items(): RecentInfo[];
    get_limit(): number;
    get_local_only(): boolean;
    get_select_multiple(): boolean;
    get_show_icons(): boolean;
    get_show_not_found(): boolean;
    get_show_private(): boolean;
    get_show_tips(): boolean;
    get_sort_type(): RecentSortType;
    get_uris(): string[];
    list_filters(): RecentFilter[];
    remove_filter(filter: RecentFilter): void;
    select_all(): void;
    select_uri(uri: string): boolean;
    set_current_uri(uri: string): boolean;
    set_filter(filter?: RecentFilter | null): void;
    set_limit(limit: number): void;
    set_local_only(local_only: boolean): void;
    set_select_multiple(select_multiple: boolean): void;
    set_show_icons(show_icons: boolean): void;
    set_show_not_found(show_not_found: boolean): void;
    set_show_private(show_private: boolean): void;
    set_show_tips(show_tips: boolean): void;
    set_sort_func(sort_func: RecentSortFunc, data_destroy?: GLib.DestroyNotify | null): void;
    set_sort_type(sort_type: RecentSortType): void;
    unselect_all(): void;
    unselect_uri(uri: string): void;
    vfunc_add_filter(filter: RecentFilter): void;
    vfunc_get_current_uri(): string;
    vfunc_get_items(): RecentInfo[];
    vfunc_item_activated(): void;
    vfunc_list_filters(): RecentFilter[];
    vfunc_remove_filter(filter: RecentFilter): void;
    vfunc_select_all(): void;
    vfunc_select_uri(uri: string): boolean;
    vfunc_selection_changed(): void;
    vfunc_set_current_uri(uri: string): boolean;
    vfunc_set_sort_func(sort_func: RecentSortFunc, data_destroy?: GLib.DestroyNotify | null): void;
    vfunc_unselect_all(): void;
    vfunc_unselect_uri(uri: string): void;
}
export module RecentChooserWidget {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
    }
}
export class RecentChooserWidget extends Box implements Atk.ImplementorIface, Buildable, Orientable, RecentChooser {
    static $gtype: GObject.GType<RecentChooserWidget>;

    constructor(properties?: Partial<RecentChooserWidget.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RecentChooserWidget.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);
    get filter(): RecentFilter;
    set filter(val: RecentFilter);
    get limit(): number;
    set limit(val: number);
    get localOnly(): boolean;
    set localOnly(val: boolean);
    set recentManager(val: RecentManager);
    get selectMultiple(): boolean;
    set selectMultiple(val: boolean);
    get showIcons(): boolean;
    set showIcons(val: boolean);
    get showNotFound(): boolean;
    set showNotFound(val: boolean);
    get showPrivate(): boolean;
    set showPrivate(val: boolean);
    get showTips(): boolean;
    set showTips(val: boolean);
    get sortType(): RecentSortType;
    set sortType(val: RecentSortType);

    // Constructors

    static ["new"](): RecentChooserWidget;
    static new_for_manager(manager: RecentManager): RecentChooserWidget;

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
    add_filter(filter: RecentFilter): void;
    get_current_item(): RecentInfo;
    get_current_uri(): string;
    get_filter(): RecentFilter;
    get_items(): RecentInfo[];
    get_limit(): number;
    get_local_only(): boolean;
    get_select_multiple(): boolean;
    get_show_icons(): boolean;
    get_show_not_found(): boolean;
    get_show_private(): boolean;
    get_show_tips(): boolean;
    get_sort_type(): RecentSortType;
    get_uris(): string[];
    list_filters(): RecentFilter[];
    remove_filter(filter: RecentFilter): void;
    select_all(): void;
    select_uri(uri: string): boolean;
    set_current_uri(uri: string): boolean;
    set_filter(filter?: RecentFilter | null): void;
    set_limit(limit: number): void;
    set_local_only(local_only: boolean): void;
    set_select_multiple(select_multiple: boolean): void;
    set_show_icons(show_icons: boolean): void;
    set_show_not_found(show_not_found: boolean): void;
    set_show_private(show_private: boolean): void;
    set_show_tips(show_tips: boolean): void;
    set_sort_func(sort_func: RecentSortFunc, data_destroy?: GLib.DestroyNotify | null): void;
    set_sort_type(sort_type: RecentSortType): void;
    unselect_all(): void;
    unselect_uri(uri: string): void;
    vfunc_add_filter(filter: RecentFilter): void;
    vfunc_get_current_uri(): string;
    vfunc_get_items(): RecentInfo[];
    vfunc_item_activated(): void;
    vfunc_list_filters(): RecentFilter[];
    vfunc_remove_filter(filter: RecentFilter): void;
    vfunc_select_all(): void;
    vfunc_select_uri(uri: string): boolean;
    vfunc_selection_changed(): void;
    vfunc_set_current_uri(uri: string): boolean;
    vfunc_set_sort_func(sort_func: RecentSortFunc, data_destroy?: GLib.DestroyNotify | null): void;
    vfunc_unselect_all(): void;
    vfunc_unselect_uri(uri: string): void;
}
export module RecentFilter {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
    }
}
export class RecentFilter extends GObject.InitiallyUnowned implements Buildable {
    static $gtype: GObject.GType<RecentFilter>;

    constructor(properties?: Partial<RecentFilter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RecentFilter.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): RecentFilter;

    // Members

    add_age(days: number): void;
    add_application(application: string): void;
    add_custom(needed: RecentFilterFlags, func: RecentFilterFunc): void;
    add_group(group: string): void;
    add_mime_type(mime_type: string): void;
    add_pattern(pattern: string): void;
    add_pixbuf_formats(): void;
    filter(filter_info: RecentFilterInfo): boolean;
    get_name(): string | null;
    // Conflicted with Gtk.Buildable.get_name
    get_name(...args: never[]): any;
    get_needed(): RecentFilterFlags;
    set_name(name: string): void;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
}
export module RecentManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        filename: string;
        size: number;
    }
}
export class RecentManager extends GObject.Object {
    static $gtype: GObject.GType<RecentManager>;

    constructor(properties?: Partial<RecentManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RecentManager.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get filename(): string;
    get size(): number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this) => void): number;
    connect_after(signal: "changed", callback: (_source: this) => void): number;
    emit(signal: "changed"): void;

    // Constructors

    static ["new"](): RecentManager;

    // Members

    add_full(uri: string, recent_data: RecentData): boolean;
    add_item(uri: string): boolean;
    get_items(): RecentInfo[];
    has_item(uri: string): boolean;
    lookup_item(uri: string): RecentInfo | null;
    move_item(uri: string, new_uri?: string | null): boolean;
    purge_items(): number;
    remove_item(uri: string): boolean;
    vfunc_changed(): void;
    static get_default(): RecentManager;
}
export module RendererCellAccessible {
    export interface ConstructorProperties extends CellAccessible.ConstructorProperties {
        [key: string]: any;
        renderer: CellRenderer;
    }
}
export class RendererCellAccessible extends CellAccessible implements Atk.Action, Atk.Component, Atk.TableCell {
    static $gtype: GObject.GType<RendererCellAccessible>;

    constructor(properties?: Partial<RendererCellAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RendererCellAccessible.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get renderer(): CellRenderer;

    // Fields
    priv: RendererCellAccessiblePrivate | any;

    // Constructors

    static ["new"](renderer: CellRenderer): RendererCellAccessible;

    // Implemented Members

    do_action(i: number): boolean;
    get_description(i: number): string | null;
    // Conflicted with Atk.Object.get_description
    get_description(...args: never[]): any;
    get_keybinding(i: number): string | null;
    get_localized_name(i: number): string | null;
    get_n_actions(): number;
    get_name(i: number): string | null;
    // Conflicted with Atk.Object.get_name
    get_name(...args: never[]): any;
    set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.set_description
    set_description(...args: never[]): any;
    vfunc_do_action(i: number): boolean;
    vfunc_get_description(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_description
    vfunc_get_description(...args: never[]): any;
    vfunc_get_keybinding(i: number): string | null;
    vfunc_get_localized_name(i: number): string | null;
    vfunc_get_n_actions(): number;
    vfunc_get_name(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_name
    vfunc_get_name(...args: never[]): any;
    vfunc_set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.vfunc_set_description
    vfunc_set_description(...args: never[]): any;
    contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    get_alpha(): number;
    get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    get_layer(): Atk.Layer;
    get_mdi_zorder(): number;
    get_position(coord_type: Atk.CoordType): [number, number];
    // Conflicted with Atk.TableCell.get_position
    get_position(...args: never[]): any;
    get_size(): [number, number];
    grab_focus(): boolean;
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    remove_focus_handler(handler_id: number): void;
    scroll_to(type: Atk.ScrollType): boolean;
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    set_size(width: number, height: number): boolean;
    vfunc_bounds_changed(bounds: Atk.Rectangle): void;
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_get_alpha(): number;
    vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    vfunc_get_layer(): Atk.Layer;
    vfunc_get_mdi_zorder(): number;
    vfunc_get_position(coord_type: Atk.CoordType): [number, number];
    // Conflicted with Atk.TableCell.vfunc_get_position
    vfunc_get_position(...args: never[]): any;
    vfunc_get_size(): [number, number];
    vfunc_grab_focus(): boolean;
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    vfunc_remove_focus_handler(handler_id: number): void;
    vfunc_scroll_to(type: Atk.ScrollType): boolean;
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_size(width: number, height: number): boolean;
    get_column_header_cells(): Atk.Object[];
    get_column_span(): number;
    get_row_column_span(): [boolean, number, number, number, number];
    get_row_header_cells(): Atk.Object[];
    get_row_span(): number;
    get_table(): Atk.Object;
    vfunc_get_column_header_cells(): Atk.Object[];
    vfunc_get_column_span(): number;
    vfunc_get_row_column_span(): [boolean, number, number, number, number];
    vfunc_get_row_header_cells(): Atk.Object[];
    vfunc_get_row_span(): number;
    vfunc_get_table(): Atk.Object;
}
export module Revealer {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        childRevealed: boolean;
        revealChild: boolean;
        transitionDuration: number;
        transitionType: RevealerTransitionType;
    }
}
export class Revealer extends Bin implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Revealer>;

    constructor(properties?: Partial<Revealer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Revealer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get childRevealed(): boolean;
    get revealChild(): boolean;
    set revealChild(val: boolean);
    get transitionDuration(): number;
    set transitionDuration(val: number);
    get transitionType(): RevealerTransitionType;
    set transitionType(val: RevealerTransitionType);

    // Constructors

    static ["new"](): Revealer;

    // Members

    get_child_revealed(): boolean;
    get_reveal_child(): boolean;
    get_transition_duration(): number;
    get_transition_type(): RevealerTransitionType;
    set_reveal_child(reveal_child: boolean): void;
    set_transition_duration(duration: number): void;
    set_transition_type(transition: RevealerTransitionType): void;
}
export module Scale {
    export interface ConstructorProperties extends Range.ConstructorProperties {
        [key: string]: any;
        digits: number;
        drawValue: boolean;
        hasOrigin: boolean;
        valuePos: PositionType;
    }
}
export class Scale extends Range implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<Scale>;

    constructor(properties?: Partial<Scale.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Scale.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get digits(): number;
    set digits(val: number);
    get drawValue(): boolean;
    set drawValue(val: boolean);
    get hasOrigin(): boolean;
    set hasOrigin(val: boolean);
    get valuePos(): PositionType;
    set valuePos(val: PositionType);

    // Fields
    range: Range;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "format-value", callback: (_source: this, value: number) => string): number;
    connect_after(signal: "format-value", callback: (_source: this, value: number) => string): number;
    emit(signal: "format-value", value: number): void;

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](orientation: Orientation, adjustment?: Adjustment | null): Scale;
    static new_with_range(orientation: Orientation, min: number, max: number, step: number): Scale;

    // Members

    add_mark(value: number, position: PositionType, markup?: string | null): void;
    clear_marks(): void;
    get_digits(): number;
    get_draw_value(): boolean;
    get_has_origin(): boolean;
    get_layout(): Pango.Layout | null;
    get_layout_offsets(): [number, number];
    get_value_pos(): PositionType;
    set_digits(digits: number): void;
    set_draw_value(draw_value: boolean): void;
    set_has_origin(has_origin: boolean): void;
    set_value_pos(pos: PositionType): void;
    vfunc_draw_value(): void;
    vfunc_format_value(value: number): string;
    vfunc_get_layout_offsets(): [number, number];

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module ScaleAccessible {
    export interface ConstructorProperties extends RangeAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ScaleAccessible extends RangeAccessible implements Atk.Component, Atk.Value {
    static $gtype: GObject.GType<ScaleAccessible>;

    constructor(properties?: Partial<ScaleAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ScaleAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ScaleAccessiblePrivate | any;

    // Implemented Members

    get_current_value(): unknown;
    get_increment(): number;
    get_maximum_value(): unknown;
    get_minimum_increment(): unknown;
    get_minimum_value(): unknown;
    get_range(): Atk.Range | null;
    get_sub_ranges(): Atk.Range[];
    get_value_and_text(): [number, string];
    set_current_value(value: GObject.Value | any): boolean;
    set_value(new_value: number): void;
    vfunc_get_current_value(): unknown;
    vfunc_get_increment(): number;
    vfunc_get_maximum_value(): unknown;
    vfunc_get_minimum_increment(): unknown;
    vfunc_get_minimum_value(): unknown;
    vfunc_get_range(): Atk.Range | null;
    vfunc_get_sub_ranges(): Atk.Range[];
    vfunc_get_value_and_text(): [number, string];
    vfunc_set_current_value(value: GObject.Value | any): boolean;
    vfunc_set_value(new_value: number): void;
}
export module ScaleButton {
    export interface ConstructorProperties extends Button.ConstructorProperties {
        [key: string]: any;
        adjustment: Adjustment;
        icons: string[];
        size: IconSize;
        value: number;
    }
}
export class ScaleButton
    extends Button
    implements Atk.ImplementorIface, Actionable, Activatable, Buildable, Orientable
{
    static $gtype: GObject.GType<ScaleButton>;

    constructor(properties?: Partial<ScaleButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ScaleButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get adjustment(): Adjustment;
    set adjustment(val: Adjustment);
    get icons(): string[];
    set icons(val: string[]);
    get size(): IconSize;
    set size(val: IconSize);
    get value(): number;
    set value(val: number);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "popdown", callback: (_source: this) => void): number;
    connect_after(signal: "popdown", callback: (_source: this) => void): number;
    emit(signal: "popdown"): void;
    connect(signal: "popup", callback: (_source: this) => void): number;
    connect_after(signal: "popup", callback: (_source: this) => void): number;
    emit(signal: "popup"): void;
    connect(signal: "value-changed", callback: (_source: this, value: number) => void): number;
    connect_after(signal: "value-changed", callback: (_source: this, value: number) => void): number;
    emit(signal: "value-changed", value: number): void;

    // Implemented Properties

    get actionName(): string;
    set actionName(val: string);
    get actionTarget(): GLib.Variant;
    set actionTarget(val: GLib.Variant);
    get relatedAction(): Action;
    set relatedAction(val: Action);
    get useActionAppearance(): boolean;
    set useActionAppearance(val: boolean);
    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](size: number, min: number, max: number, step: number, icons?: string[] | null): ScaleButton;
    // Conflicted with Gtk.Button.new
    static ["new"](...args: never[]): any;

    // Members

    get_adjustment(): Adjustment;
    get_minus_button(): Button;
    get_plus_button(): Button;
    get_popup(): Widget;
    get_value(): number;
    set_adjustment(adjustment: Adjustment): void;
    set_icons(icons: string[]): void;
    set_value(value: number): void;
    vfunc_value_changed(value: number): void;

    // Implemented Members

    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name?: string | null): void;
    set_action_target_value(target_value?: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name?: string | null): void;
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action?: Action | null): void;
    vfunc_sync_action_properties(action?: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module ScaleButtonAccessible {
    export interface ConstructorProperties extends ButtonAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ScaleButtonAccessible extends ButtonAccessible implements Atk.Action, Atk.Component, Atk.Image, Atk.Value {
    static $gtype: GObject.GType<ScaleButtonAccessible>;

    constructor(properties?: Partial<ScaleButtonAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ScaleButtonAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ScaleButtonAccessiblePrivate | any;

    // Implemented Members

    do_action(i: number): boolean;
    get_description(i: number): string | null;
    // Conflicted with Atk.Object.get_description
    get_description(...args: never[]): any;
    get_keybinding(i: number): string | null;
    get_localized_name(i: number): string | null;
    get_n_actions(): number;
    get_name(i: number): string | null;
    // Conflicted with Atk.Object.get_name
    get_name(...args: never[]): any;
    set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.set_description
    set_description(...args: never[]): any;
    vfunc_do_action(i: number): boolean;
    vfunc_get_description(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_description
    vfunc_get_description(...args: never[]): any;
    vfunc_get_keybinding(i: number): string | null;
    vfunc_get_localized_name(i: number): string | null;
    vfunc_get_n_actions(): number;
    vfunc_get_name(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_name
    vfunc_get_name(...args: never[]): any;
    vfunc_set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.vfunc_set_description
    vfunc_set_description(...args: never[]): any;
    get_image_description(): string;
    get_image_locale(): string | null;
    get_image_position(coord_type: Atk.CoordType): [number, number];
    get_image_size(): [number, number];
    set_image_description(description: string): boolean;
    vfunc_get_image_description(): string;
    vfunc_get_image_locale(): string | null;
    vfunc_get_image_position(coord_type: Atk.CoordType): [number, number];
    vfunc_get_image_size(): [number, number];
    vfunc_set_image_description(description: string): boolean;
    get_current_value(): unknown;
    get_increment(): number;
    get_maximum_value(): unknown;
    get_minimum_increment(): unknown;
    get_minimum_value(): unknown;
    get_range(): Atk.Range | null;
    get_sub_ranges(): Atk.Range[];
    get_value_and_text(): [number, string];
    set_current_value(value: GObject.Value | any): boolean;
    set_value(new_value: number): void;
    vfunc_get_current_value(): unknown;
    vfunc_get_increment(): number;
    vfunc_get_maximum_value(): unknown;
    vfunc_get_minimum_increment(): unknown;
    vfunc_get_minimum_value(): unknown;
    vfunc_get_range(): Atk.Range | null;
    vfunc_get_sub_ranges(): Atk.Range[];
    vfunc_get_value_and_text(): [number, string];
    vfunc_set_current_value(value: GObject.Value | any): boolean;
    vfunc_set_value(new_value: number): void;
}
export module Scrollbar {
    export interface ConstructorProperties extends Range.ConstructorProperties {
        [key: string]: any;
    }
}
export class Scrollbar extends Range implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<Scrollbar>;

    constructor(properties?: Partial<Scrollbar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Scrollbar.ConstructorProperties>, ...args: any[]): void;

    // Fields
    range: Range;

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](orientation: Orientation, adjustment?: Adjustment | null): Scrollbar;

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module ScrolledWindow {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        hadjustment: Adjustment;
        hscrollbarPolicy: PolicyType;
        kineticScrolling: boolean;
        maxContentHeight: number;
        maxContentWidth: number;
        minContentHeight: number;
        minContentWidth: number;
        overlayScrolling: boolean;
        propagateNaturalHeight: boolean;
        propagateNaturalWidth: boolean;
        shadowType: ShadowType;
        vadjustment: Adjustment;
        vscrollbarPolicy: PolicyType;
        windowPlacement: CornerType;
        windowPlacementSet: boolean;
    }
}
export class ScrolledWindow extends Bin implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<ScrolledWindow>;

    constructor(properties?: Partial<ScrolledWindow.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ScrolledWindow.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get hadjustment(): Adjustment;
    set hadjustment(val: Adjustment);
    get hscrollbarPolicy(): PolicyType;
    set hscrollbarPolicy(val: PolicyType);
    get kineticScrolling(): boolean;
    set kineticScrolling(val: boolean);
    get maxContentHeight(): number;
    set maxContentHeight(val: number);
    get maxContentWidth(): number;
    set maxContentWidth(val: number);
    get minContentHeight(): number;
    set minContentHeight(val: number);
    get minContentWidth(): number;
    set minContentWidth(val: number);
    get overlayScrolling(): boolean;
    set overlayScrolling(val: boolean);
    get propagateNaturalHeight(): boolean;
    set propagateNaturalHeight(val: boolean);
    get propagateNaturalWidth(): boolean;
    set propagateNaturalWidth(val: boolean);
    get shadowType(): ShadowType;
    set shadowType(val: ShadowType);
    get vadjustment(): Adjustment;
    set vadjustment(val: Adjustment);
    get vscrollbarPolicy(): PolicyType;
    set vscrollbarPolicy(val: PolicyType);
    get windowPlacement(): CornerType;
    set windowPlacement(val: CornerType);
    get windowPlacementSet(): boolean;
    set windowPlacementSet(val: boolean);

    // Fields
    container: Bin;
    priv: ScrolledWindowPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "edge-overshot", callback: (_source: this, pos: PositionType) => void): number;
    connect_after(signal: "edge-overshot", callback: (_source: this, pos: PositionType) => void): number;
    emit(signal: "edge-overshot", pos: PositionType): void;
    connect(signal: "edge-reached", callback: (_source: this, pos: PositionType) => void): number;
    connect_after(signal: "edge-reached", callback: (_source: this, pos: PositionType) => void): number;
    emit(signal: "edge-reached", pos: PositionType): void;
    connect(signal: "move-focus-out", callback: (_source: this, direction_type: DirectionType) => void): number;
    connect_after(signal: "move-focus-out", callback: (_source: this, direction_type: DirectionType) => void): number;
    emit(signal: "move-focus-out", direction_type: DirectionType): void;
    connect(
        signal: "scroll-child",
        callback: (_source: this, scroll: ScrollType, horizontal: boolean) => boolean
    ): number;
    connect_after(
        signal: "scroll-child",
        callback: (_source: this, scroll: ScrollType, horizontal: boolean) => boolean
    ): number;
    emit(signal: "scroll-child", scroll: ScrollType, horizontal: boolean): void;

    // Constructors

    static ["new"](hadjustment?: Adjustment | null, vadjustment?: Adjustment | null): ScrolledWindow;

    // Members

    add_with_viewport(child: Widget): void;
    get_capture_button_press(): boolean;
    get_hadjustment(): Adjustment;
    get_hscrollbar(): Widget;
    get_kinetic_scrolling(): boolean;
    get_max_content_height(): number;
    get_max_content_width(): number;
    get_min_content_height(): number;
    get_min_content_width(): number;
    get_overlay_scrolling(): boolean;
    get_placement(): CornerType;
    get_policy(): [PolicyType | null, PolicyType | null];
    get_propagate_natural_height(): boolean;
    get_propagate_natural_width(): boolean;
    get_shadow_type(): ShadowType;
    get_vadjustment(): Adjustment;
    get_vscrollbar(): Widget;
    set_capture_button_press(capture_button_press: boolean): void;
    set_hadjustment(hadjustment?: Adjustment | null): void;
    set_kinetic_scrolling(kinetic_scrolling: boolean): void;
    set_max_content_height(height: number): void;
    set_max_content_width(width: number): void;
    set_min_content_height(height: number): void;
    set_min_content_width(width: number): void;
    set_overlay_scrolling(overlay_scrolling: boolean): void;
    set_placement(window_placement: CornerType): void;
    set_policy(hscrollbar_policy: PolicyType, vscrollbar_policy: PolicyType): void;
    set_propagate_natural_height(propagate: boolean): void;
    set_propagate_natural_width(propagate: boolean): void;
    set_shadow_type(type: ShadowType): void;
    set_vadjustment(vadjustment?: Adjustment | null): void;
    unset_placement(): void;
    vfunc_move_focus_out(direction: DirectionType): void;
    vfunc_scroll_child(scroll: ScrollType, horizontal: boolean): boolean;
}
export module ScrolledWindowAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ScrolledWindowAccessible extends ContainerAccessible implements Atk.Component {
    static $gtype: GObject.GType<ScrolledWindowAccessible>;

    constructor(properties?: Partial<ScrolledWindowAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ScrolledWindowAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ScrolledWindowAccessiblePrivate | any;
}
export module SearchBar {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        searchModeEnabled: boolean;
        showCloseButton: boolean;
    }
}
export class SearchBar extends Bin implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<SearchBar>;

    constructor(properties?: Partial<SearchBar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SearchBar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get searchModeEnabled(): boolean;
    set searchModeEnabled(val: boolean);
    get showCloseButton(): boolean;
    set showCloseButton(val: boolean);

    // Constructors

    static ["new"](): SearchBar;

    // Members

    connect_entry(entry: Entry): void;
    get_search_mode(): boolean;
    get_show_close_button(): boolean;
    handle_event(event: Gdk.Event): boolean;
    set_search_mode(search_mode: boolean): void;
    set_show_close_button(visible: boolean): void;
}
export module SearchEntry {
    export interface ConstructorProperties extends Entry.ConstructorProperties {
        [key: string]: any;
    }
}
export class SearchEntry extends Entry implements Atk.ImplementorIface, Buildable, CellEditable, Editable {
    static $gtype: GObject.GType<SearchEntry>;

    constructor(properties?: Partial<SearchEntry.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SearchEntry.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "next-match", callback: (_source: this) => void): number;
    connect_after(signal: "next-match", callback: (_source: this) => void): number;
    emit(signal: "next-match"): void;
    connect(signal: "previous-match", callback: (_source: this) => void): number;
    connect_after(signal: "previous-match", callback: (_source: this) => void): number;
    emit(signal: "previous-match"): void;
    connect(signal: "search-changed", callback: (_source: this) => void): number;
    connect_after(signal: "search-changed", callback: (_source: this) => void): number;
    emit(signal: "search-changed"): void;
    connect(signal: "stop-search", callback: (_source: this) => void): number;
    connect_after(signal: "stop-search", callback: (_source: this) => void): number;
    emit(signal: "stop-search"): void;

    // Implemented Properties

    get editingCanceled(): boolean;
    set editingCanceled(val: boolean);

    // Constructors

    static ["new"](): SearchEntry;

    // Members

    handle_event(event: Gdk.Event): boolean;
    vfunc_next_match(): void;
    vfunc_previous_match(): void;
    vfunc_search_changed(): void;
    vfunc_stop_search(): void;

    // Implemented Members

    editing_done(): void;
    remove_widget(): void;
    start_editing(event?: Gdk.Event | null): void;
    vfunc_editing_done(): void;
    vfunc_remove_widget(): void;
    vfunc_start_editing(event?: Gdk.Event | null): void;
    copy_clipboard(): void;
    cut_clipboard(): void;
    delete_selection(): void;
    delete_text(start_pos: number, end_pos: number): void;
    get_chars(start_pos: number, end_pos: number): string;
    get_editable(): boolean;
    get_position(): number;
    get_selection_bounds(): [boolean, number, number];
    insert_text(new_text: string, new_text_length: number, position: number): number;
    paste_clipboard(): void;
    select_region(start_pos: number, end_pos: number): void;
    set_editable(is_editable: boolean): void;
    set_position(position: number): void;
    vfunc_changed(): void;
    vfunc_delete_text(start_pos: number, end_pos: number): void;
    vfunc_do_delete_text(start_pos: number, end_pos: number): void;
    vfunc_do_insert_text(new_text: string, new_text_length: number, position: number): number;
    vfunc_get_chars(start_pos: number, end_pos: number): string;
    vfunc_get_position(): number;
    vfunc_get_selection_bounds(): [boolean, number, number];
    vfunc_insert_text(new_text: string, new_text_length: number, position: number): number;
    vfunc_set_position(position: number): void;
    vfunc_set_selection_bounds(start_pos: number, end_pos: number): void;
}
export module Separator {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
    }
}
export class Separator extends Widget implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<Separator>;

    constructor(properties?: Partial<Separator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Separator.ConstructorProperties>, ...args: any[]): void;

    // Fields
    widget: Widget;
    priv: SeparatorPrivate;

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](orientation: Orientation): Separator;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module SeparatorMenuItem {
    export interface ConstructorProperties extends MenuItem.ConstructorProperties {
        [key: string]: any;
    }
}
export class SeparatorMenuItem extends MenuItem implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    static $gtype: GObject.GType<SeparatorMenuItem>;

    constructor(properties?: Partial<SeparatorMenuItem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SeparatorMenuItem.ConstructorProperties>, ...args: any[]): void;

    // Fields
    menu_item: MenuItem;

    // Implemented Properties

    get actionName(): string;
    set actionName(val: string);
    get actionTarget(): GLib.Variant;
    set actionTarget(val: GLib.Variant);
    get relatedAction(): Action;
    set relatedAction(val: Action);
    get useActionAppearance(): boolean;
    set useActionAppearance(val: boolean);

    // Constructors

    static ["new"](): SeparatorMenuItem;

    // Implemented Members

    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name?: string | null): void;
    set_action_target_value(target_value?: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name?: string | null): void;
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action?: Action | null): void;
    vfunc_sync_action_properties(action?: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
}
export module SeparatorToolItem {
    export interface ConstructorProperties extends ToolItem.ConstructorProperties {
        [key: string]: any;
    }
}
export class SeparatorToolItem extends ToolItem implements Atk.ImplementorIface, Activatable, Buildable {
    static $gtype: GObject.GType<SeparatorToolItem>;

    constructor(properties?: Partial<SeparatorToolItem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SeparatorToolItem.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    get relatedAction(): Action;
    set relatedAction(val: Action);
    get useActionAppearance(): boolean;
    set useActionAppearance(val: boolean);

    // Constructors

    static ["new"](): SeparatorToolItem;

    // Members

    get_draw(): boolean;
    set_draw(draw: boolean): void;

    // Implemented Members

    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action?: Action | null): void;
    vfunc_sync_action_properties(action?: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
}
export module Settings {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        colorHash: GLib.HashTable<string, Gdk.Color>;
        gtkAlternativeButtonOrder: boolean;
        gtkAlternativeSortArrows: boolean;
        gtkApplicationPreferDarkTheme: boolean;
        gtkAutoMnemonics: boolean;
        gtkButtonImages: boolean;
        gtkCanChangeAccels: boolean;
        gtkColorPalette: string;
        gtkColorScheme: string;
        gtkCursorAspectRatio: number;
        gtkCursorBlink: boolean;
        gtkCursorBlinkTime: number;
        gtkCursorBlinkTimeout: number;
        gtkCursorThemeName: string;
        gtkCursorThemeSize: number;
        gtkDecorationLayout: string;
        gtkDialogsUseHeader: boolean;
        gtkDndDragThreshold: number;
        gtkDoubleClickDistance: number;
        gtkDoubleClickTime: number;
        gtkEnableAccels: boolean;
        gtkEnableAnimations: boolean;
        gtkEnableEventSounds: boolean;
        gtkEnableInputFeedbackSounds: boolean;
        gtkEnableMnemonics: boolean;
        gtkEnablePrimaryPaste: boolean;
        gtkEnableTooltips: boolean;
        gtkEntryPasswordHintTimeout: number;
        gtkEntrySelectOnFocus: boolean;
        gtkErrorBell: boolean;
        gtkFallbackIconTheme: string;
        gtkFileChooserBackend: string;
        gtkFontName: string;
        gtkFontconfigTimestamp: number;
        gtkIconSizes: string;
        gtkIconThemeName: string;
        gtkImModule: string;
        gtkImPreeditStyle: IMPreeditStyle;
        gtkImStatusStyle: IMStatusStyle;
        gtkKeyThemeName: string;
        gtkKeynavCursorOnly: boolean;
        gtkKeynavUseCaret: boolean;
        gtkKeynavWrapAround: boolean;
        gtkLabelSelectOnFocus: boolean;
        gtkLongPressTime: number;
        gtkMenuBarAccel: string;
        gtkMenuBarPopupDelay: number;
        gtkMenuImages: boolean;
        gtkMenuPopdownDelay: number;
        gtkMenuPopupDelay: number;
        gtkModules: string;
        gtkOverlayScrolling: boolean;
        gtkPrimaryButtonWarpsSlider: boolean;
        gtkPrintBackends: string;
        gtkPrintPreviewCommand: string;
        gtkRecentFilesEnabled: boolean;
        gtkRecentFilesLimit: number;
        gtkRecentFilesMaxAge: number;
        gtkScrolledWindowPlacement: CornerType;
        gtkShellShowsAppMenu: boolean;
        gtkShellShowsDesktop: boolean;
        gtkShellShowsMenubar: boolean;
        gtkShowInputMethodMenu: boolean;
        gtkShowUnicodeMenu: boolean;
        gtkSoundThemeName: string;
        gtkSplitCursor: boolean;
        gtkThemeName: string;
        gtkTimeoutExpand: number;
        gtkTimeoutInitial: number;
        gtkTimeoutRepeat: number;
        gtkTitlebarDoubleClick: string;
        gtkTitlebarMiddleClick: string;
        gtkTitlebarRightClick: string;
        gtkToolbarIconSize: IconSize;
        gtkToolbarStyle: ToolbarStyle;
        gtkTooltipBrowseModeTimeout: number;
        gtkTooltipBrowseTimeout: number;
        gtkTooltipTimeout: number;
        gtkTouchscreenMode: boolean;
        gtkVisibleFocus: PolicyType;
        gtkXftAntialias: number;
        gtkXftDpi: number;
        gtkXftHinting: number;
        gtkXftHintstyle: string;
        gtkXftRgba: string;
    }
}
export class Settings extends GObject.Object implements StyleProvider {
    static $gtype: GObject.GType<Settings>;

    constructor(properties?: Partial<Settings.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Settings.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get colorHash(): GLib.HashTable<string, Gdk.Color>;
    get gtkAlternativeButtonOrder(): boolean;
    set gtkAlternativeButtonOrder(val: boolean);
    get gtkAlternativeSortArrows(): boolean;
    set gtkAlternativeSortArrows(val: boolean);
    get gtkApplicationPreferDarkTheme(): boolean;
    set gtkApplicationPreferDarkTheme(val: boolean);
    get gtkAutoMnemonics(): boolean;
    set gtkAutoMnemonics(val: boolean);
    get gtkButtonImages(): boolean;
    set gtkButtonImages(val: boolean);
    get gtkCanChangeAccels(): boolean;
    set gtkCanChangeAccels(val: boolean);
    get gtkColorPalette(): string;
    set gtkColorPalette(val: string);
    get gtkColorScheme(): string;
    set gtkColorScheme(val: string);
    get gtkCursorAspectRatio(): number;
    set gtkCursorAspectRatio(val: number);
    get gtkCursorBlink(): boolean;
    set gtkCursorBlink(val: boolean);
    get gtkCursorBlinkTime(): number;
    set gtkCursorBlinkTime(val: number);
    get gtkCursorBlinkTimeout(): number;
    set gtkCursorBlinkTimeout(val: number);
    get gtkCursorThemeName(): string;
    set gtkCursorThemeName(val: string);
    get gtkCursorThemeSize(): number;
    set gtkCursorThemeSize(val: number);
    get gtkDecorationLayout(): string;
    set gtkDecorationLayout(val: string);
    get gtkDialogsUseHeader(): boolean;
    set gtkDialogsUseHeader(val: boolean);
    get gtkDndDragThreshold(): number;
    set gtkDndDragThreshold(val: number);
    get gtkDoubleClickDistance(): number;
    set gtkDoubleClickDistance(val: number);
    get gtkDoubleClickTime(): number;
    set gtkDoubleClickTime(val: number);
    get gtkEnableAccels(): boolean;
    set gtkEnableAccels(val: boolean);
    get gtkEnableAnimations(): boolean;
    set gtkEnableAnimations(val: boolean);
    get gtkEnableEventSounds(): boolean;
    set gtkEnableEventSounds(val: boolean);
    get gtkEnableInputFeedbackSounds(): boolean;
    set gtkEnableInputFeedbackSounds(val: boolean);
    get gtkEnableMnemonics(): boolean;
    set gtkEnableMnemonics(val: boolean);
    get gtkEnablePrimaryPaste(): boolean;
    set gtkEnablePrimaryPaste(val: boolean);
    get gtkEnableTooltips(): boolean;
    set gtkEnableTooltips(val: boolean);
    get gtkEntryPasswordHintTimeout(): number;
    set gtkEntryPasswordHintTimeout(val: number);
    get gtkEntrySelectOnFocus(): boolean;
    set gtkEntrySelectOnFocus(val: boolean);
    get gtkErrorBell(): boolean;
    set gtkErrorBell(val: boolean);
    get gtkFallbackIconTheme(): string;
    set gtkFallbackIconTheme(val: string);
    get gtkFileChooserBackend(): string;
    set gtkFileChooserBackend(val: string);
    get gtkFontName(): string;
    set gtkFontName(val: string);
    get gtkFontconfigTimestamp(): number;
    set gtkFontconfigTimestamp(val: number);
    get gtkIconSizes(): string;
    set gtkIconSizes(val: string);
    get gtkIconThemeName(): string;
    set gtkIconThemeName(val: string);
    get gtkImModule(): string;
    set gtkImModule(val: string);
    get gtkImPreeditStyle(): IMPreeditStyle;
    set gtkImPreeditStyle(val: IMPreeditStyle);
    get gtkImStatusStyle(): IMStatusStyle;
    set gtkImStatusStyle(val: IMStatusStyle);
    get gtkKeyThemeName(): string;
    set gtkKeyThemeName(val: string);
    get gtkKeynavCursorOnly(): boolean;
    set gtkKeynavCursorOnly(val: boolean);
    get gtkKeynavUseCaret(): boolean;
    set gtkKeynavUseCaret(val: boolean);
    get gtkKeynavWrapAround(): boolean;
    set gtkKeynavWrapAround(val: boolean);
    get gtkLabelSelectOnFocus(): boolean;
    set gtkLabelSelectOnFocus(val: boolean);
    get gtkLongPressTime(): number;
    set gtkLongPressTime(val: number);
    get gtkMenuBarAccel(): string;
    set gtkMenuBarAccel(val: string);
    get gtkMenuBarPopupDelay(): number;
    set gtkMenuBarPopupDelay(val: number);
    get gtkMenuImages(): boolean;
    set gtkMenuImages(val: boolean);
    get gtkMenuPopdownDelay(): number;
    set gtkMenuPopdownDelay(val: number);
    get gtkMenuPopupDelay(): number;
    set gtkMenuPopupDelay(val: number);
    get gtkModules(): string;
    set gtkModules(val: string);
    get gtkOverlayScrolling(): boolean;
    set gtkOverlayScrolling(val: boolean);
    get gtkPrimaryButtonWarpsSlider(): boolean;
    set gtkPrimaryButtonWarpsSlider(val: boolean);
    get gtkPrintBackends(): string;
    set gtkPrintBackends(val: string);
    get gtkPrintPreviewCommand(): string;
    set gtkPrintPreviewCommand(val: string);
    get gtkRecentFilesEnabled(): boolean;
    set gtkRecentFilesEnabled(val: boolean);
    get gtkRecentFilesLimit(): number;
    set gtkRecentFilesLimit(val: number);
    get gtkRecentFilesMaxAge(): number;
    set gtkRecentFilesMaxAge(val: number);
    get gtkScrolledWindowPlacement(): CornerType;
    set gtkScrolledWindowPlacement(val: CornerType);
    get gtkShellShowsAppMenu(): boolean;
    set gtkShellShowsAppMenu(val: boolean);
    get gtkShellShowsDesktop(): boolean;
    set gtkShellShowsDesktop(val: boolean);
    get gtkShellShowsMenubar(): boolean;
    set gtkShellShowsMenubar(val: boolean);
    get gtkShowInputMethodMenu(): boolean;
    set gtkShowInputMethodMenu(val: boolean);
    get gtkShowUnicodeMenu(): boolean;
    set gtkShowUnicodeMenu(val: boolean);
    get gtkSoundThemeName(): string;
    set gtkSoundThemeName(val: string);
    get gtkSplitCursor(): boolean;
    set gtkSplitCursor(val: boolean);
    get gtkThemeName(): string;
    set gtkThemeName(val: string);
    get gtkTimeoutExpand(): number;
    set gtkTimeoutExpand(val: number);
    get gtkTimeoutInitial(): number;
    set gtkTimeoutInitial(val: number);
    get gtkTimeoutRepeat(): number;
    set gtkTimeoutRepeat(val: number);
    get gtkTitlebarDoubleClick(): string;
    set gtkTitlebarDoubleClick(val: string);
    get gtkTitlebarMiddleClick(): string;
    set gtkTitlebarMiddleClick(val: string);
    get gtkTitlebarRightClick(): string;
    set gtkTitlebarRightClick(val: string);
    get gtkToolbarIconSize(): IconSize;
    set gtkToolbarIconSize(val: IconSize);
    get gtkToolbarStyle(): ToolbarStyle;
    set gtkToolbarStyle(val: ToolbarStyle);
    get gtkTooltipBrowseModeTimeout(): number;
    set gtkTooltipBrowseModeTimeout(val: number);
    get gtkTooltipBrowseTimeout(): number;
    set gtkTooltipBrowseTimeout(val: number);
    get gtkTooltipTimeout(): number;
    set gtkTooltipTimeout(val: number);
    get gtkTouchscreenMode(): boolean;
    set gtkTouchscreenMode(val: boolean);
    get gtkVisibleFocus(): PolicyType;
    set gtkVisibleFocus(val: PolicyType);
    get gtkXftAntialias(): number;
    set gtkXftAntialias(val: number);
    get gtkXftDpi(): number;
    set gtkXftDpi(val: number);
    get gtkXftHinting(): number;
    set gtkXftHinting(val: number);
    get gtkXftHintstyle(): string;
    set gtkXftHintstyle(val: string);
    get gtkXftRgba(): string;
    set gtkXftRgba(val: string);

    // Members

    reset_property(name: string): void;
    set_double_property(name: string, v_double: number, origin: string): void;
    set_long_property(name: string, v_long: number, origin: string): void;
    set_property_value(name: string, svalue: SettingsValue): void;
    set_string_property(name: string, v_string: string, origin: string): void;
    static get_default(): Settings | null;
    static get_for_screen(screen: Gdk.Screen): Settings;
    static install_property(pspec: GObject.ParamSpec): void;
    // Conflicted with GObject.Object.install_property
    static install_property(...args: never[]): any;
    static install_property_parser(pspec: GObject.ParamSpec, parser: RcPropertyParser): void;

    // Implemented Members

    get_icon_factory(path: WidgetPath): IconFactory | null;
    get_style(path: WidgetPath): StyleProperties | null;
    get_style_property(path: WidgetPath, state: StateFlags, pspec: GObject.ParamSpec): [boolean, unknown];
    vfunc_get_icon_factory(path: WidgetPath): IconFactory | null;
    vfunc_get_style(path: WidgetPath): StyleProperties | null;
    vfunc_get_style_property(path: WidgetPath, state: StateFlags, pspec: GObject.ParamSpec): [boolean, unknown];
}
export module ShortcutLabel {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        accelerator: string;
        disabledText: string;
    }
}
export class ShortcutLabel extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<ShortcutLabel>;

    constructor(properties?: Partial<ShortcutLabel.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ShortcutLabel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get accelerator(): string;
    set accelerator(val: string);
    get disabledText(): string;
    set disabledText(val: string);

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](accelerator: string): ShortcutLabel;
    // Conflicted with Gtk.Box.new
    static ["new"](...args: never[]): any;

    // Members

    get_accelerator(): string | null;
    get_disabled_text(): string | null;
    set_accelerator(accelerator: string): void;
    set_disabled_text(disabled_text: string): void;

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module ShortcutsGroup {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        accelSizeGroup: SizeGroup;
        height: number;
        title: string;
        titleSizeGroup: SizeGroup;
        view: string;
    }
}
export class ShortcutsGroup extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<ShortcutsGroup>;

    constructor(properties?: Partial<ShortcutsGroup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ShortcutsGroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    set accelSizeGroup(val: SizeGroup);
    get height(): number;
    get title(): string;
    set title(val: string);
    set titleSizeGroup(val: SizeGroup);
    get view(): string;
    set view(val: string);

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module ShortcutsSection {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        maxHeight: number;
        sectionName: string;
        title: string;
        viewName: string;
    }
}
export class ShortcutsSection extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<ShortcutsSection>;

    constructor(properties?: Partial<ShortcutsSection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ShortcutsSection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get maxHeight(): number;
    set maxHeight(val: number);
    get sectionName(): string;
    set sectionName(val: string);
    get title(): string;
    set title(val: string);
    get viewName(): string;
    set viewName(val: string);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "change-current-page", callback: (_source: this, object: number) => boolean): number;
    connect_after(signal: "change-current-page", callback: (_source: this, object: number) => boolean): number;
    emit(signal: "change-current-page", object: number): void;

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module ShortcutsShortcut {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        accelSizeGroup: SizeGroup;
        accelerator: string;
        actionName: string;
        direction: TextDirection;
        icon: Gio.Icon;
        iconSet: boolean;
        shortcutType: ShortcutType;
        subtitle: string;
        subtitleSet: boolean;
        title: string;
        titleSizeGroup: SizeGroup;
    }
}
export class ShortcutsShortcut extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<ShortcutsShortcut>;

    constructor(properties?: Partial<ShortcutsShortcut.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ShortcutsShortcut.ConstructorProperties>, ...args: any[]): void;

    // Properties
    set accelSizeGroup(val: SizeGroup);
    get accelerator(): string;
    set accelerator(val: string);
    get actionName(): string;
    set actionName(val: string);
    get direction(): TextDirection;
    set direction(val: TextDirection);
    get icon(): Gio.Icon;
    set icon(val: Gio.Icon);
    get iconSet(): boolean;
    set iconSet(val: boolean);
    get shortcutType(): ShortcutType;
    set shortcutType(val: ShortcutType);
    get subtitle(): string;
    set subtitle(val: string);
    get subtitleSet(): boolean;
    set subtitleSet(val: boolean);
    get title(): string;
    set title(val: string);
    set titleSizeGroup(val: SizeGroup);

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module ShortcutsWindow {
    export interface ConstructorProperties extends Window.ConstructorProperties {
        [key: string]: any;
        sectionName: string;
        viewName: string;
    }
}
export class ShortcutsWindow extends Window implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<ShortcutsWindow>;

    constructor(properties?: Partial<ShortcutsWindow.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ShortcutsWindow.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get sectionName(): string;
    set sectionName(val: string);
    get viewName(): string;
    set viewName(val: string);

    // Fields
    // This accessor conflicts with a property, field, or function name in a parent class or interface.
    // @ts-expect-error
    window: Window | any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "close", callback: (_source: this) => void): number;
    connect_after(signal: "close", callback: (_source: this) => void): number;
    emit(signal: "close"): void;
    connect(signal: "search", callback: (_source: this) => void): number;
    connect_after(signal: "search", callback: (_source: this) => void): number;
    emit(signal: "search"): void;

    // Members

    vfunc_close(): void;
    vfunc_search(): void;
}
export module SizeGroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        ignoreHidden: boolean;
        mode: SizeGroupMode;
    }
}
export class SizeGroup extends GObject.Object implements Buildable {
    static $gtype: GObject.GType<SizeGroup>;

    constructor(properties?: Partial<SizeGroup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SizeGroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get ignoreHidden(): boolean;
    set ignoreHidden(val: boolean);
    get mode(): SizeGroupMode;
    set mode(val: SizeGroupMode);

    // Constructors

    static ["new"](mode: SizeGroupMode): SizeGroup;

    // Members

    add_widget(widget: Widget): void;
    get_ignore_hidden(): boolean;
    get_mode(): SizeGroupMode;
    get_widgets(): Widget[];
    remove_widget(widget: Widget): void;
    set_ignore_hidden(ignore_hidden: boolean): void;
    set_mode(mode: SizeGroupMode): void;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
}
export module Socket {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
    }
}
export class Socket extends Container implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Socket>;

    constructor(properties?: Partial<Socket.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Socket.ConstructorProperties>, ...args: any[]): void;

    // Fields
    container: Container;
    priv: SocketPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "plug-added", callback: (_source: this) => void): number;
    connect_after(signal: "plug-added", callback: (_source: this) => void): number;
    emit(signal: "plug-added"): void;
    connect(signal: "plug-removed", callback: (_source: this) => boolean): number;
    connect_after(signal: "plug-removed", callback: (_source: this) => boolean): number;
    emit(signal: "plug-removed"): void;

    // Constructors

    static ["new"](): Socket;

    // Members

    add_id(window: xlib.Window): void;
    get_id(): xlib.Window;
    get_plug_window(): Gdk.Window | null;
    vfunc_plug_added(): void;
    vfunc_plug_removed(): boolean;
}
export module SocketAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class SocketAccessible extends ContainerAccessible implements Atk.Component {
    static $gtype: GObject.GType<SocketAccessible>;

    constructor(properties?: Partial<SocketAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SocketAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: SocketAccessiblePrivate | any;

    // Members

    embed(path: string): void;
}
export module SpinButton {
    export interface ConstructorProperties extends Entry.ConstructorProperties {
        [key: string]: any;
        adjustment: Adjustment;
        climbRate: number;
        digits: number;
        numeric: boolean;
        snapToTicks: boolean;
        updatePolicy: SpinButtonUpdatePolicy;
        value: number;
        wrap: boolean;
    }
}
export class SpinButton extends Entry implements Atk.ImplementorIface, Buildable, CellEditable, Editable, Orientable {
    static $gtype: GObject.GType<SpinButton>;

    constructor(properties?: Partial<SpinButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SpinButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get adjustment(): Adjustment;
    set adjustment(val: Adjustment);
    get climbRate(): number;
    set climbRate(val: number);
    get digits(): number;
    set digits(val: number);
    get numeric(): boolean;
    set numeric(val: boolean);
    get snapToTicks(): boolean;
    set snapToTicks(val: boolean);
    get updatePolicy(): SpinButtonUpdatePolicy;
    set updatePolicy(val: SpinButtonUpdatePolicy);
    get value(): number;
    set value(val: number);
    get wrap(): boolean;
    set wrap(val: boolean);

    // Fields
    entry: Entry;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "change-value", callback: (_source: this, scroll: ScrollType) => void): number;
    connect_after(signal: "change-value", callback: (_source: this, scroll: ScrollType) => void): number;
    emit(signal: "change-value", scroll: ScrollType): void;
    connect(signal: "input", callback: (_source: this, new_value: number) => number): number;
    connect_after(signal: "input", callback: (_source: this, new_value: number) => number): number;
    emit(signal: "input", new_value: number): void;
    connect(signal: "output", callback: (_source: this) => boolean): number;
    connect_after(signal: "output", callback: (_source: this) => boolean): number;
    emit(signal: "output"): void;
    connect(signal: "value-changed", callback: (_source: this) => void): number;
    connect_after(signal: "value-changed", callback: (_source: this) => void): number;
    emit(signal: "value-changed"): void;
    connect(signal: "wrapped", callback: (_source: this) => void): number;
    connect_after(signal: "wrapped", callback: (_source: this) => void): number;
    emit(signal: "wrapped"): void;

    // Implemented Properties

    get editingCanceled(): boolean;
    set editingCanceled(val: boolean);
    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](adjustment: Adjustment | null, climb_rate: number, digits: number): SpinButton;
    // Conflicted with Gtk.Entry.new
    static ["new"](...args: never[]): any;
    static new_with_range(min: number, max: number, step: number): SpinButton;

    // Members

    configure(adjustment: Adjustment | null, climb_rate: number, digits: number): void;
    get_adjustment(): Adjustment;
    get_digits(): number;
    get_increments(): [number, number];
    get_numeric(): boolean;
    get_range(): [number, number];
    get_snap_to_ticks(): boolean;
    get_update_policy(): SpinButtonUpdatePolicy;
    get_value(): number;
    get_value_as_int(): number;
    get_wrap(): boolean;
    set_adjustment(adjustment: Adjustment): void;
    set_digits(digits: number): void;
    set_increments(step: number, page: number): void;
    set_numeric(numeric: boolean): void;
    set_range(min: number, max: number): void;
    set_snap_to_ticks(snap_to_ticks: boolean): void;
    set_update_policy(policy: SpinButtonUpdatePolicy): void;
    set_value(value: number): void;
    set_wrap(wrap: boolean): void;
    spin(direction: SpinType, increment: number): void;
    update(): void;
    vfunc_change_value(scroll: ScrollType): void;
    vfunc_input(new_value: number): number;
    vfunc_output(): number;
    vfunc_value_changed(): void;
    vfunc_wrapped(): void;

    // Implemented Members

    editing_done(): void;
    remove_widget(): void;
    start_editing(event?: Gdk.Event | null): void;
    vfunc_editing_done(): void;
    vfunc_remove_widget(): void;
    vfunc_start_editing(event?: Gdk.Event | null): void;
    copy_clipboard(): void;
    cut_clipboard(): void;
    delete_selection(): void;
    delete_text(start_pos: number, end_pos: number): void;
    get_chars(start_pos: number, end_pos: number): string;
    get_editable(): boolean;
    get_position(): number;
    get_selection_bounds(): [boolean, number, number];
    insert_text(new_text: string, new_text_length: number, position: number): number;
    paste_clipboard(): void;
    select_region(start_pos: number, end_pos: number): void;
    set_editable(is_editable: boolean): void;
    set_position(position: number): void;
    vfunc_changed(): void;
    vfunc_delete_text(start_pos: number, end_pos: number): void;
    vfunc_do_delete_text(start_pos: number, end_pos: number): void;
    vfunc_do_insert_text(new_text: string, new_text_length: number, position: number): number;
    vfunc_get_chars(start_pos: number, end_pos: number): string;
    vfunc_get_position(): number;
    vfunc_get_selection_bounds(): [boolean, number, number];
    vfunc_insert_text(new_text: string, new_text_length: number, position: number): number;
    vfunc_set_position(position: number): void;
    vfunc_set_selection_bounds(start_pos: number, end_pos: number): void;
    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module SpinButtonAccessible {
    export interface ConstructorProperties extends EntryAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class SpinButtonAccessible
    extends EntryAccessible
    implements Atk.Action, Atk.Component, Atk.EditableText, Atk.Text, Atk.Value
{
    static $gtype: GObject.GType<SpinButtonAccessible>;

    constructor(properties?: Partial<SpinButtonAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SpinButtonAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: SpinButtonAccessiblePrivate | any;

    // Implemented Members

    do_action(i: number): boolean;
    get_description(i: number): string | null;
    // Conflicted with Atk.Object.get_description
    get_description(...args: never[]): any;
    get_keybinding(i: number): string | null;
    get_localized_name(i: number): string | null;
    get_n_actions(): number;
    get_name(i: number): string | null;
    // Conflicted with Atk.Object.get_name
    get_name(...args: never[]): any;
    set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.set_description
    set_description(...args: never[]): any;
    vfunc_do_action(i: number): boolean;
    vfunc_get_description(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_description
    vfunc_get_description(...args: never[]): any;
    vfunc_get_keybinding(i: number): string | null;
    vfunc_get_localized_name(i: number): string | null;
    vfunc_get_n_actions(): number;
    vfunc_get_name(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_name
    vfunc_get_name(...args: never[]): any;
    vfunc_set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.vfunc_set_description
    vfunc_set_description(...args: never[]): any;
    copy_text(start_pos: number, end_pos: number): void;
    cut_text(start_pos: number, end_pos: number): void;
    delete_text(start_pos: number, end_pos: number): void;
    insert_text(string: string, length: number, position: number): void;
    paste_text(position: number): void;
    set_run_attributes(attrib_set: Atk.AttributeSet, start_offset: number, end_offset: number): boolean;
    set_text_contents(string: string): void;
    vfunc_copy_text(start_pos: number, end_pos: number): void;
    vfunc_cut_text(start_pos: number, end_pos: number): void;
    vfunc_delete_text(start_pos: number, end_pos: number): void;
    vfunc_insert_text(string: string, length: number, position: number): void;
    vfunc_paste_text(position: number): void;
    vfunc_set_run_attributes(attrib_set: Atk.AttributeSet, start_offset: number, end_offset: number): boolean;
    vfunc_set_text_contents(string: string): void;
    add_selection(start_offset: number, end_offset: number): boolean;
    get_bounded_ranges(
        rect: Atk.TextRectangle,
        coord_type: Atk.CoordType,
        x_clip_type: Atk.TextClipType,
        y_clip_type: Atk.TextClipType
    ): Atk.TextRange[];
    get_caret_offset(): number;
    get_character_at_offset(offset: number): number;
    get_character_count(): number;
    get_character_extents(offset: number, coords: Atk.CoordType): [number, number, number, number];
    get_default_attributes(): Atk.AttributeSet;
    get_n_selections(): number;
    get_offset_at_point(x: number, y: number, coords: Atk.CoordType): number;
    get_range_extents(start_offset: number, end_offset: number, coord_type: Atk.CoordType): Atk.TextRectangle;
    get_run_attributes(offset: number): [Atk.AttributeSet, number, number];
    get_selection(selection_num: number): [string, number, number];
    get_string_at_offset(offset: number, granularity: Atk.TextGranularity): [string | null, number, number];
    get_text(start_offset: number, end_offset: number): string;
    get_text_after_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    get_text_at_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    get_text_before_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    remove_selection(selection_num: number): boolean;
    scroll_substring_to(start_offset: number, end_offset: number, type: Atk.ScrollType): boolean;
    scroll_substring_to_point(
        start_offset: number,
        end_offset: number,
        coords: Atk.CoordType,
        x: number,
        y: number
    ): boolean;
    set_caret_offset(offset: number): boolean;
    set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
    vfunc_add_selection(start_offset: number, end_offset: number): boolean;
    vfunc_get_bounded_ranges(
        rect: Atk.TextRectangle,
        coord_type: Atk.CoordType,
        x_clip_type: Atk.TextClipType,
        y_clip_type: Atk.TextClipType
    ): Atk.TextRange[];
    vfunc_get_caret_offset(): number;
    vfunc_get_character_at_offset(offset: number): number;
    vfunc_get_character_count(): number;
    vfunc_get_character_extents(offset: number, coords: Atk.CoordType): [number, number, number, number];
    vfunc_get_default_attributes(): Atk.AttributeSet;
    vfunc_get_n_selections(): number;
    vfunc_get_offset_at_point(x: number, y: number, coords: Atk.CoordType): number;
    vfunc_get_range_extents(start_offset: number, end_offset: number, coord_type: Atk.CoordType): Atk.TextRectangle;
    vfunc_get_run_attributes(offset: number): [Atk.AttributeSet, number, number];
    vfunc_get_selection(selection_num: number): [string, number, number];
    vfunc_get_string_at_offset(offset: number, granularity: Atk.TextGranularity): [string | null, number, number];
    vfunc_get_text(start_offset: number, end_offset: number): string;
    vfunc_get_text_after_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    vfunc_get_text_at_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    vfunc_get_text_before_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    vfunc_remove_selection(selection_num: number): boolean;
    vfunc_scroll_substring_to(start_offset: number, end_offset: number, type: Atk.ScrollType): boolean;
    vfunc_scroll_substring_to_point(
        start_offset: number,
        end_offset: number,
        coords: Atk.CoordType,
        x: number,
        y: number
    ): boolean;
    vfunc_set_caret_offset(offset: number): boolean;
    vfunc_set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
    vfunc_text_attributes_changed(): void;
    vfunc_text_caret_moved(location: number): void;
    vfunc_text_changed(position: number, length: number): void;
    vfunc_text_selection_changed(): void;
    get_current_value(): unknown;
    get_increment(): number;
    get_maximum_value(): unknown;
    get_minimum_increment(): unknown;
    get_minimum_value(): unknown;
    get_range(): Atk.Range | null;
    get_sub_ranges(): Atk.Range[];
    get_value_and_text(): [number, string];
    set_current_value(value: GObject.Value | any): boolean;
    set_value(new_value: number): void;
    vfunc_get_current_value(): unknown;
    vfunc_get_increment(): number;
    vfunc_get_maximum_value(): unknown;
    vfunc_get_minimum_increment(): unknown;
    vfunc_get_minimum_value(): unknown;
    vfunc_get_range(): Atk.Range | null;
    vfunc_get_sub_ranges(): Atk.Range[];
    vfunc_get_value_and_text(): [number, string];
    vfunc_set_current_value(value: GObject.Value | any): boolean;
    vfunc_set_value(new_value: number): void;
}
export module Spinner {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        active: boolean;
    }
}
export class Spinner extends Widget implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Spinner>;

    constructor(properties?: Partial<Spinner.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Spinner.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get active(): boolean;
    set active(val: boolean);

    // Constructors

    static ["new"](): Spinner;

    // Members

    start(): void;
    stop(): void;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
}
export module SpinnerAccessible {
    export interface ConstructorProperties extends WidgetAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class SpinnerAccessible extends WidgetAccessible implements Atk.Component, Atk.Image {
    static $gtype: GObject.GType<SpinnerAccessible>;

    constructor(properties?: Partial<SpinnerAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SpinnerAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: SpinnerAccessiblePrivate | any;

    // Implemented Members

    contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    get_alpha(): number;
    get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    get_layer(): Atk.Layer;
    get_mdi_zorder(): number;
    get_position(coord_type: Atk.CoordType): [number, number];
    get_size(): [number, number];
    grab_focus(): boolean;
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    remove_focus_handler(handler_id: number): void;
    scroll_to(type: Atk.ScrollType): boolean;
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    set_size(width: number, height: number): boolean;
    vfunc_bounds_changed(bounds: Atk.Rectangle): void;
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_get_alpha(): number;
    vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    vfunc_get_layer(): Atk.Layer;
    vfunc_get_mdi_zorder(): number;
    vfunc_get_position(coord_type: Atk.CoordType): [number, number];
    vfunc_get_size(): [number, number];
    vfunc_grab_focus(): boolean;
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    vfunc_remove_focus_handler(handler_id: number): void;
    vfunc_scroll_to(type: Atk.ScrollType): boolean;
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_size(width: number, height: number): boolean;
    get_image_description(): string;
    get_image_locale(): string | null;
    get_image_position(coord_type: Atk.CoordType): [number, number];
    get_image_size(): [number, number];
    set_image_description(description: string): boolean;
    vfunc_get_image_description(): string;
    vfunc_get_image_locale(): string | null;
    vfunc_get_image_position(coord_type: Atk.CoordType): [number, number];
    vfunc_get_image_size(): [number, number];
    vfunc_set_image_description(description: string): boolean;
}
export module Stack {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        hhomogeneous: boolean;
        homogeneous: boolean;
        interpolateSize: boolean;
        transitionDuration: number;
        transitionRunning: boolean;
        transitionType: StackTransitionType;
        vhomogeneous: boolean;
        visibleChild: Widget;
        visibleChildName: string;
    }
}
export class Stack extends Container implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Stack>;

    constructor(properties?: Partial<Stack.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Stack.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get hhomogeneous(): boolean;
    set hhomogeneous(val: boolean);
    get homogeneous(): boolean;
    set homogeneous(val: boolean);
    get interpolateSize(): boolean;
    set interpolateSize(val: boolean);
    get transitionDuration(): number;
    set transitionDuration(val: number);
    get transitionRunning(): boolean;
    get transitionType(): StackTransitionType;
    set transitionType(val: StackTransitionType);
    get vhomogeneous(): boolean;
    set vhomogeneous(val: boolean);
    get visibleChild(): Widget;
    set visibleChild(val: Widget);
    get visibleChildName(): string;
    set visibleChildName(val: string);

    // Constructors

    static ["new"](): Stack;

    // Members

    add_named(child: Widget, name: string): void;
    add_titled(child: Widget, name: string, title: string): void;
    get_child_by_name(name: string): Widget | null;
    get_hhomogeneous(): boolean;
    get_homogeneous(): boolean;
    get_interpolate_size(): boolean;
    get_transition_duration(): number;
    get_transition_running(): boolean;
    get_transition_type(): StackTransitionType;
    get_vhomogeneous(): boolean;
    get_visible_child(): Widget | null;
    get_visible_child_name(): string | null;
    set_hhomogeneous(hhomogeneous: boolean): void;
    set_homogeneous(homogeneous: boolean): void;
    set_interpolate_size(interpolate_size: boolean): void;
    set_transition_duration(duration: number): void;
    set_transition_type(transition: StackTransitionType): void;
    set_vhomogeneous(vhomogeneous: boolean): void;
    set_visible_child(child: Widget): void;
    set_visible_child_full(name: string, transition: StackTransitionType): void;
    set_visible_child_name(name: string): void;
}
export module StackAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class StackAccessible extends ContainerAccessible implements Atk.Component {
    static $gtype: GObject.GType<StackAccessible>;

    constructor(properties?: Partial<StackAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StackAccessible.ConstructorProperties>, ...args: any[]): void;
}
export module StackSidebar {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        stack: Stack;
    }
}
export class StackSidebar extends Bin implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<StackSidebar>;

    constructor(properties?: Partial<StackSidebar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StackSidebar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get stack(): Stack;
    set stack(val: Stack);

    // Constructors

    static ["new"](): StackSidebar;

    // Members

    get_stack(): Stack | null;
    set_stack(stack: Stack): void;
}
export module StackSwitcher {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
        iconSize: number;
        stack: Stack;
    }
}
export class StackSwitcher extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<StackSwitcher>;

    constructor(properties?: Partial<StackSwitcher.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StackSwitcher.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get iconSize(): number;
    set iconSize(val: number);
    get stack(): Stack;
    set stack(val: Stack);

    // Fields
    widget: Box;

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](): StackSwitcher;

    // Members

    get_stack(): Stack | null;
    set_stack(stack?: Stack | null): void;

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module StatusIcon {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        embedded: boolean;
        file: string;
        gicon: Gio.Icon;
        hasTooltip: boolean;
        iconName: string;
        orientation: Orientation;
        pixbuf: GdkPixbuf.Pixbuf;
        screen: Gdk.Screen;
        size: number;
        stock: string;
        storageType: ImageType;
        title: string;
        tooltipMarkup: string;
        tooltipText: string;
        visible: boolean;
    }
}
export class StatusIcon extends GObject.Object {
    static $gtype: GObject.GType<StatusIcon>;

    constructor(properties?: Partial<StatusIcon.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StatusIcon.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get embedded(): boolean;
    set file(val: string);
    get gicon(): Gio.Icon;
    set gicon(val: Gio.Icon);
    get hasTooltip(): boolean;
    set hasTooltip(val: boolean);
    get iconName(): string;
    set iconName(val: string);
    get orientation(): Orientation;
    get pixbuf(): GdkPixbuf.Pixbuf;
    set pixbuf(val: GdkPixbuf.Pixbuf);
    get screen(): Gdk.Screen;
    set screen(val: Gdk.Screen);
    get size(): number;
    get stock(): string;
    set stock(val: string);
    get storageType(): ImageType;
    get title(): string;
    set title(val: string);
    get tooltipMarkup(): string;
    set tooltipMarkup(val: string);
    get tooltipText(): string;
    set tooltipText(val: string);
    get visible(): boolean;
    set visible(val: boolean);

    // Fields
    priv: StatusIconPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "activate", callback: (_source: this) => void): number;
    connect_after(signal: "activate", callback: (_source: this) => void): number;
    emit(signal: "activate"): void;
    connect(signal: "button-press-event", callback: (_source: this, event: Gdk.EventButton) => boolean): number;
    connect_after(signal: "button-press-event", callback: (_source: this, event: Gdk.EventButton) => boolean): number;
    emit(signal: "button-press-event", event: Gdk.EventButton): void;
    connect(signal: "button-release-event", callback: (_source: this, event: Gdk.EventButton) => boolean): number;
    connect_after(signal: "button-release-event", callback: (_source: this, event: Gdk.EventButton) => boolean): number;
    emit(signal: "button-release-event", event: Gdk.EventButton): void;
    connect(signal: "popup-menu", callback: (_source: this, button: number, activate_time: number) => void): number;
    connect_after(
        signal: "popup-menu",
        callback: (_source: this, button: number, activate_time: number) => void
    ): number;
    emit(signal: "popup-menu", button: number, activate_time: number): void;
    connect(
        signal: "query-tooltip",
        callback: (_source: this, x: number, y: number, keyboard_mode: boolean, tooltip: Tooltip) => boolean
    ): number;
    connect_after(
        signal: "query-tooltip",
        callback: (_source: this, x: number, y: number, keyboard_mode: boolean, tooltip: Tooltip) => boolean
    ): number;
    emit(signal: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Tooltip): void;
    connect(signal: "scroll-event", callback: (_source: this, event: Gdk.EventScroll) => boolean): number;
    connect_after(signal: "scroll-event", callback: (_source: this, event: Gdk.EventScroll) => boolean): number;
    emit(signal: "scroll-event", event: Gdk.EventScroll): void;
    connect(signal: "size-changed", callback: (_source: this, size: number) => boolean): number;
    connect_after(signal: "size-changed", callback: (_source: this, size: number) => boolean): number;
    emit(signal: "size-changed", size: number): void;

    // Constructors

    static ["new"](): StatusIcon;
    static new_from_file(filename: string): StatusIcon;
    static new_from_gicon(icon: Gio.Icon): StatusIcon;
    static new_from_icon_name(icon_name: string): StatusIcon;
    static new_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): StatusIcon;
    static new_from_stock(stock_id: string): StatusIcon;

    // Members

    get_geometry(): [boolean, Gdk.Screen | null, Gdk.Rectangle | null, Orientation | null];
    get_gicon(): Gio.Icon | null;
    get_has_tooltip(): boolean;
    get_icon_name(): string | null;
    get_pixbuf(): GdkPixbuf.Pixbuf | null;
    get_screen(): Gdk.Screen;
    get_size(): number;
    get_stock(): string | null;
    get_storage_type(): ImageType;
    get_title(): string;
    get_tooltip_markup(): string | null;
    get_tooltip_text(): string | null;
    get_visible(): boolean;
    get_x11_window_id(): number;
    is_embedded(): boolean;
    set_from_file(filename: string): void;
    set_from_gicon(icon: Gio.Icon): void;
    set_from_icon_name(icon_name: string): void;
    set_from_pixbuf(pixbuf?: GdkPixbuf.Pixbuf | null): void;
    set_from_stock(stock_id: string): void;
    set_has_tooltip(has_tooltip: boolean): void;
    set_name(name: string): void;
    set_screen(screen: Gdk.Screen): void;
    set_title(title: string): void;
    set_tooltip_markup(markup?: string | null): void;
    set_tooltip_text(text: string): void;
    set_visible(visible: boolean): void;
    vfunc_activate(): void;
    vfunc_button_press_event(event: Gdk.EventButton): boolean;
    vfunc_button_release_event(event: Gdk.EventButton): boolean;
    vfunc_popup_menu(button: number, activate_time: number): void;
    vfunc_query_tooltip(x: number, y: number, keyboard_mode: boolean, tooltip: Tooltip): boolean;
    vfunc_scroll_event(event: Gdk.EventScroll): boolean;
    vfunc_size_changed(size: number): boolean;
    static position_menu(menu: Menu, x: number, y: number, user_data: StatusIcon): [number, number, boolean];
}
export module Statusbar {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
    }
}
export class Statusbar extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<Statusbar>;

    constructor(properties?: Partial<Statusbar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Statusbar.ConstructorProperties>, ...args: any[]): void;

    // Fields
    parent_widget: Box;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "text-popped", callback: (_source: this, context_id: number, text: string) => void): number;
    connect_after(signal: "text-popped", callback: (_source: this, context_id: number, text: string) => void): number;
    emit(signal: "text-popped", context_id: number, text: string): void;
    connect(signal: "text-pushed", callback: (_source: this, context_id: number, text: string) => void): number;
    connect_after(signal: "text-pushed", callback: (_source: this, context_id: number, text: string) => void): number;
    emit(signal: "text-pushed", context_id: number, text: string): void;

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](): Statusbar;

    // Members

    get_context_id(context_description: string): number;
    get_message_area(): Box;
    pop(context_id: number): void;
    push(context_id: number, text: string): number;
    remove(context_id: number, message_id: number): void;
    // Conflicted with Gtk.Container.remove
    remove(...args: never[]): any;
    remove_all(context_id: number): void;
    vfunc_text_popped(context_id: number, text: string): void;
    vfunc_text_pushed(context_id: number, text: string): void;

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module StatusbarAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class StatusbarAccessible extends ContainerAccessible implements Atk.Component {
    static $gtype: GObject.GType<StatusbarAccessible>;

    constructor(properties?: Partial<StatusbarAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StatusbarAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: StatusbarAccessiblePrivate | any;
}
export module Style {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        context: StyleContext;
    }
}
export class Style extends GObject.Object {
    static $gtype: GObject.GType<Style>;

    constructor(properties?: Partial<Style.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Style.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get context(): StyleContext;

    // Fields
    fg: Gdk.Color[];
    bg: Gdk.Color[];
    light: Gdk.Color[];
    dark: Gdk.Color[];
    mid: Gdk.Color[];
    text: Gdk.Color[];
    base: Gdk.Color[];
    text_aa: Gdk.Color[];
    black: Gdk.Color;
    white: Gdk.Color;
    font_desc: Pango.FontDescription;
    xthickness: number;
    ythickness: number;
    background: cairo.Pattern[];

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "realize", callback: (_source: this) => void): number;
    connect_after(signal: "realize", callback: (_source: this) => void): number;
    emit(signal: "realize"): void;
    connect(signal: "unrealize", callback: (_source: this) => void): number;
    connect_after(signal: "unrealize", callback: (_source: this) => void): number;
    emit(signal: "unrealize"): void;

    // Constructors

    static ["new"](): Style;

    // Members

    apply_default_background(
        cr: cairo.Context,
        window: Gdk.Window,
        state_type: StateType,
        x: number,
        y: number,
        width: number,
        height: number
    ): void;
    copy(): Style;
    detach(): void;
    get_style_property(widget_type: GObject.GType, property_name: string): unknown;
    has_context(): boolean;
    lookup_color(color_name: string): [boolean, Gdk.Color];
    lookup_icon_set(stock_id: string): IconSet;
    render_icon(
        source: IconSource,
        direction: TextDirection,
        state: StateType,
        size: number,
        widget?: Widget | null,
        detail?: string | null
    ): GdkPixbuf.Pixbuf;
    set_background(window: Gdk.Window, state_type: StateType): void;
    vfunc_copy(src: Style): void;
    vfunc_draw_arrow(
        cr: cairo.Context,
        state_type: StateType,
        shadow_type: ShadowType,
        widget: Widget,
        detail: string,
        arrow_type: ArrowType,
        fill: boolean,
        x: number,
        y: number,
        width: number,
        height: number
    ): void;
    vfunc_draw_box(
        cr: cairo.Context,
        state_type: StateType,
        shadow_type: ShadowType,
        widget: Widget,
        detail: string,
        x: number,
        y: number,
        width: number,
        height: number
    ): void;
    vfunc_draw_box_gap(
        cr: cairo.Context,
        state_type: StateType,
        shadow_type: ShadowType,
        widget: Widget,
        detail: string,
        x: number,
        y: number,
        width: number,
        height: number,
        gap_side: PositionType,
        gap_x: number,
        gap_width: number
    ): void;
    vfunc_draw_check(
        cr: cairo.Context,
        state_type: StateType,
        shadow_type: ShadowType,
        widget: Widget,
        detail: string,
        x: number,
        y: number,
        width: number,
        height: number
    ): void;
    vfunc_draw_diamond(
        cr: cairo.Context,
        state_type: StateType,
        shadow_type: ShadowType,
        widget: Widget,
        detail: string,
        x: number,
        y: number,
        width: number,
        height: number
    ): void;
    vfunc_draw_expander(
        cr: cairo.Context,
        state_type: StateType,
        widget: Widget,
        detail: string,
        x: number,
        y: number,
        expander_style: ExpanderStyle
    ): void;
    vfunc_draw_extension(
        cr: cairo.Context,
        state_type: StateType,
        shadow_type: ShadowType,
        widget: Widget,
        detail: string,
        x: number,
        y: number,
        width: number,
        height: number,
        gap_side: PositionType
    ): void;
    vfunc_draw_flat_box(
        cr: cairo.Context,
        state_type: StateType,
        shadow_type: ShadowType,
        widget: Widget,
        detail: string,
        x: number,
        y: number,
        width: number,
        height: number
    ): void;
    vfunc_draw_focus(
        cr: cairo.Context,
        state_type: StateType,
        widget: Widget,
        detail: string,
        x: number,
        y: number,
        width: number,
        height: number
    ): void;
    vfunc_draw_handle(
        cr: cairo.Context,
        state_type: StateType,
        shadow_type: ShadowType,
        widget: Widget,
        detail: string,
        x: number,
        y: number,
        width: number,
        height: number,
        orientation: Orientation
    ): void;
    vfunc_draw_hline(
        cr: cairo.Context,
        state_type: StateType,
        widget: Widget,
        detail: string,
        x1: number,
        x2: number,
        y: number
    ): void;
    vfunc_draw_layout(
        cr: cairo.Context,
        state_type: StateType,
        use_text: boolean,
        widget: Widget,
        detail: string,
        x: number,
        y: number,
        layout: Pango.Layout
    ): void;
    vfunc_draw_option(
        cr: cairo.Context,
        state_type: StateType,
        shadow_type: ShadowType,
        widget: Widget,
        detail: string,
        x: number,
        y: number,
        width: number,
        height: number
    ): void;
    vfunc_draw_resize_grip(
        cr: cairo.Context,
        state_type: StateType,
        widget: Widget,
        detail: string,
        edge: Gdk.WindowEdge,
        x: number,
        y: number,
        width: number,
        height: number
    ): void;
    vfunc_draw_shadow(
        cr: cairo.Context,
        state_type: StateType,
        shadow_type: ShadowType,
        widget: Widget,
        detail: string,
        x: number,
        y: number,
        width: number,
        height: number
    ): void;
    vfunc_draw_shadow_gap(
        cr: cairo.Context,
        state_type: StateType,
        shadow_type: ShadowType,
        widget: Widget,
        detail: string,
        x: number,
        y: number,
        width: number,
        height: number,
        gap_side: PositionType,
        gap_x: number,
        gap_width: number
    ): void;
    vfunc_draw_slider(
        cr: cairo.Context,
        state_type: StateType,
        shadow_type: ShadowType,
        widget: Widget,
        detail: string,
        x: number,
        y: number,
        width: number,
        height: number,
        orientation: Orientation
    ): void;
    vfunc_draw_spinner(
        cr: cairo.Context,
        state_type: StateType,
        widget: Widget,
        detail: string,
        step: number,
        x: number,
        y: number,
        width: number,
        height: number
    ): void;
    vfunc_draw_tab(
        cr: cairo.Context,
        state_type: StateType,
        shadow_type: ShadowType,
        widget: Widget,
        detail: string,
        x: number,
        y: number,
        width: number,
        height: number
    ): void;
    vfunc_draw_vline(
        cr: cairo.Context,
        state_type: StateType,
        widget: Widget,
        detail: string,
        y1_: number,
        y2_: number,
        x: number
    ): void;
    vfunc_init_from_rc(rc_style: RcStyle): void;
    vfunc_realize(): void;
    vfunc_render_icon(
        source: IconSource,
        direction: TextDirection,
        state: StateType,
        size: number,
        widget?: Widget | null,
        detail?: string | null
    ): GdkPixbuf.Pixbuf;
    vfunc_set_background(window: Gdk.Window, state_type: StateType): void;
    vfunc_unrealize(): void;
}
export module StyleContext {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        direction: TextDirection;
        paintClock: Gdk.FrameClock;
        screen: Gdk.Screen;
    }
}
export class StyleContext extends GObject.Object {
    static $gtype: GObject.GType<StyleContext>;

    constructor(properties?: Partial<StyleContext.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StyleContext.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get direction(): TextDirection;
    set direction(val: TextDirection);
    get paintClock(): Gdk.FrameClock;
    set paintClock(val: Gdk.FrameClock);
    get screen(): Gdk.Screen;
    set screen(val: Gdk.Screen);

    // Fields
    parent_object: GObject.Object;
    priv: StyleContextPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this) => void): number;
    connect_after(signal: "changed", callback: (_source: this) => void): number;
    emit(signal: "changed"): void;

    // Constructors

    static ["new"](): StyleContext;

    // Members

    add_class(class_name: string): void;
    add_provider(provider: StyleProvider, priority: number): void;
    add_region(region_name: string, flags: RegionFlags): void;
    cancel_animations(region_id?: any | null): void;
    get_background_color(state: StateFlags): Gdk.RGBA;
    get_border(state: StateFlags): Border;
    get_border_color(state: StateFlags): Gdk.RGBA;
    get_color(state: StateFlags): Gdk.RGBA;
    get_direction(): TextDirection;
    get_font(state: StateFlags): Pango.FontDescription;
    get_frame_clock(): Gdk.FrameClock | null;
    get_junction_sides(): JunctionSides;
    get_margin(state: StateFlags): Border;
    get_padding(state: StateFlags): Border;
    get_parent(): StyleContext | null;
    get_path(): WidgetPath;
    get_property(property: string, state: StateFlags): unknown;
    // Conflicted with GObject.Object.get_property
    get_property(...args: never[]): any;
    get_scale(): number;
    get_screen(): Gdk.Screen;
    get_section(property: string): CssSection | null;
    get_state(): StateFlags;
    get_style_property(property_name: string, value: GObject.Value | any): void;
    has_class(class_name: string): boolean;
    has_region(region_name: string): [boolean, RegionFlags | null];
    invalidate(): void;
    list_classes(): string[];
    list_regions(): string[];
    lookup_color(color_name: string): [boolean, Gdk.RGBA];
    lookup_icon_set(stock_id: string): IconSet | null;
    notify_state_change(window: Gdk.Window, region_id: any | null, state: StateType, state_value: boolean): void;
    pop_animatable_region(): void;
    push_animatable_region(region_id?: any | null): void;
    remove_class(class_name: string): void;
    remove_provider(provider: StyleProvider): void;
    remove_region(region_name: string): void;
    restore(): void;
    save(): void;
    scroll_animations(window: Gdk.Window, dx: number, dy: number): void;
    set_background(window: Gdk.Window): void;
    set_direction(direction: TextDirection): void;
    set_frame_clock(frame_clock: Gdk.FrameClock): void;
    set_junction_sides(sides: JunctionSides): void;
    set_parent(parent?: StyleContext | null): void;
    set_path(path: WidgetPath): void;
    set_scale(scale: number): void;
    set_screen(screen: Gdk.Screen): void;
    set_state(flags: StateFlags): void;
    state_is_running(state: StateType): [boolean, number];
    to_string(flags: StyleContextPrintFlags): string;
    vfunc_changed(): void;
    static add_provider_for_screen(screen: Gdk.Screen, provider: StyleProvider, priority: number): void;
    static remove_provider_for_screen(screen: Gdk.Screen, provider: StyleProvider): void;
    static reset_widgets(screen: Gdk.Screen): void;
}
export module StyleProperties {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class StyleProperties extends GObject.Object implements StyleProvider {
    static $gtype: GObject.GType<StyleProperties>;

    constructor(properties?: Partial<StyleProperties.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<StyleProperties.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): StyleProperties;

    // Members

    clear(): void;
    get_property(property: string, state: StateFlags): [boolean, unknown];
    // Conflicted with GObject.Object.get_property
    get_property(...args: never[]): any;
    lookup_color(name: string): SymbolicColor;
    map_color(name: string, color: SymbolicColor): void;
    merge(props_to_merge: StyleProperties, replace: boolean): void;
    set_property(property: string, state: StateFlags, value: GObject.Value | any): void;
    // Conflicted with GObject.Object.set_property
    set_property(...args: never[]): any;
    unset_property(property: string, state: StateFlags): void;

    // Implemented Members

    get_icon_factory(path: WidgetPath): IconFactory | null;
    get_style(path: WidgetPath): StyleProperties | null;
    get_style_property(path: WidgetPath, state: StateFlags, pspec: GObject.ParamSpec): [boolean, unknown];
    vfunc_get_icon_factory(path: WidgetPath): IconFactory | null;
    vfunc_get_style(path: WidgetPath): StyleProperties | null;
    vfunc_get_style_property(path: WidgetPath, state: StateFlags, pspec: GObject.ParamSpec): [boolean, unknown];
}
export module Switch {
    export interface ConstructorProperties extends Widget.ConstructorProperties {
        [key: string]: any;
        active: boolean;
        state: boolean;
    }
}
export class Switch extends Widget implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    static $gtype: GObject.GType<Switch>;

    constructor(properties?: Partial<Switch.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Switch.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get active(): boolean;
    set active(val: boolean);
    get state(): boolean;
    set state(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "activate", callback: (_source: this) => void): number;
    connect_after(signal: "activate", callback: (_source: this) => void): number;
    emit(signal: "activate"): void;
    connect(signal: "state-set", callback: (_source: this, state: boolean) => boolean): number;
    connect_after(signal: "state-set", callback: (_source: this, state: boolean) => boolean): number;
    emit(signal: "state-set", state: boolean): void;

    // Implemented Properties

    get actionName(): string;
    set actionName(val: string);
    get actionTarget(): GLib.Variant;
    set actionTarget(val: GLib.Variant);
    get relatedAction(): Action;
    set relatedAction(val: Action);
    get useActionAppearance(): boolean;
    set useActionAppearance(val: boolean);

    // Constructors

    static ["new"](): Switch;

    // Members

    get_active(): boolean;
    get_state(): boolean;
    // Conflicted with Gtk.Widget.get_state
    get_state(...args: never[]): any;
    set_active(is_active: boolean): void;
    set_state(state: boolean): void;
    // Conflicted with Gtk.Widget.set_state
    set_state(...args: never[]): any;
    vfunc_activate(): void;
    vfunc_state_set(state: boolean): boolean;

    // Implemented Members

    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name?: string | null): void;
    set_action_target_value(target_value?: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name?: string | null): void;
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action?: Action | null): void;
    vfunc_sync_action_properties(action?: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
}
export module SwitchAccessible {
    export interface ConstructorProperties extends WidgetAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class SwitchAccessible extends WidgetAccessible implements Atk.Action, Atk.Component {
    static $gtype: GObject.GType<SwitchAccessible>;

    constructor(properties?: Partial<SwitchAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<SwitchAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: SwitchAccessiblePrivate | any;

    // Implemented Members

    do_action(i: number): boolean;
    get_description(i: number): string | null;
    // Conflicted with Atk.Object.get_description
    get_description(...args: never[]): any;
    get_keybinding(i: number): string | null;
    get_localized_name(i: number): string | null;
    get_n_actions(): number;
    get_name(i: number): string | null;
    // Conflicted with Atk.Object.get_name
    get_name(...args: never[]): any;
    set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.set_description
    set_description(...args: never[]): any;
    vfunc_do_action(i: number): boolean;
    vfunc_get_description(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_description
    vfunc_get_description(...args: never[]): any;
    vfunc_get_keybinding(i: number): string | null;
    vfunc_get_localized_name(i: number): string | null;
    vfunc_get_n_actions(): number;
    vfunc_get_name(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_name
    vfunc_get_name(...args: never[]): any;
    vfunc_set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.vfunc_set_description
    vfunc_set_description(...args: never[]): any;
    contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    get_alpha(): number;
    get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    get_layer(): Atk.Layer;
    get_mdi_zorder(): number;
    get_position(coord_type: Atk.CoordType): [number, number];
    get_size(): [number, number];
    grab_focus(): boolean;
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    remove_focus_handler(handler_id: number): void;
    scroll_to(type: Atk.ScrollType): boolean;
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    set_size(width: number, height: number): boolean;
    vfunc_bounds_changed(bounds: Atk.Rectangle): void;
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_get_alpha(): number;
    vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    vfunc_get_layer(): Atk.Layer;
    vfunc_get_mdi_zorder(): number;
    vfunc_get_position(coord_type: Atk.CoordType): [number, number];
    vfunc_get_size(): [number, number];
    vfunc_grab_focus(): boolean;
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    vfunc_remove_focus_handler(handler_id: number): void;
    vfunc_scroll_to(type: Atk.ScrollType): boolean;
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_size(width: number, height: number): boolean;
}
export module Table {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        columnSpacing: number;
        homogeneous: boolean;
        nColumns: number;
        nRows: number;
        rowSpacing: number;
    }
}
export class Table extends Container implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Table>;

    constructor(properties?: Partial<Table.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Table.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get columnSpacing(): number;
    set columnSpacing(val: number);
    get homogeneous(): boolean;
    set homogeneous(val: boolean);
    get nColumns(): number;
    set nColumns(val: number);
    get nRows(): number;
    set nRows(val: number);
    get rowSpacing(): number;
    set rowSpacing(val: number);

    // Fields
    container: Container;

    // Constructors

    static ["new"](rows: number, columns: number, homogeneous: boolean): Table;

    // Members

    attach(
        child: Widget,
        left_attach: number,
        right_attach: number,
        top_attach: number,
        bottom_attach: number,
        xoptions: AttachOptions,
        yoptions: AttachOptions,
        xpadding: number,
        ypadding: number
    ): void;
    attach_defaults(
        widget: Widget,
        left_attach: number,
        right_attach: number,
        top_attach: number,
        bottom_attach: number
    ): void;
    get_col_spacing(column: number): number;
    get_default_col_spacing(): number;
    get_default_row_spacing(): number;
    get_homogeneous(): boolean;
    get_row_spacing(row: number): number;
    get_size(): [number, number];
    resize(rows: number, columns: number): void;
    set_col_spacing(column: number, spacing: number): void;
    set_col_spacings(spacing: number): void;
    set_homogeneous(homogeneous: boolean): void;
    set_row_spacing(row: number, spacing: number): void;
    set_row_spacings(spacing: number): void;
}
export module TearoffMenuItem {
    export interface ConstructorProperties extends MenuItem.ConstructorProperties {
        [key: string]: any;
    }
}
export class TearoffMenuItem extends MenuItem implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    static $gtype: GObject.GType<TearoffMenuItem>;

    constructor(properties?: Partial<TearoffMenuItem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TearoffMenuItem.ConstructorProperties>, ...args: any[]): void;

    // Fields
    menu_item: MenuItem;

    // Implemented Properties

    get actionName(): string;
    set actionName(val: string);
    get actionTarget(): GLib.Variant;
    set actionTarget(val: GLib.Variant);
    get relatedAction(): Action;
    set relatedAction(val: Action);
    get useActionAppearance(): boolean;
    set useActionAppearance(val: boolean);

    // Constructors

    static ["new"](): TearoffMenuItem;

    // Implemented Members

    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name?: string | null): void;
    set_action_target_value(target_value?: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name?: string | null): void;
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action?: Action | null): void;
    vfunc_sync_action_properties(action?: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
}
export module TextBuffer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        copyTargetList: TargetList;
        cursorPosition: number;
        hasSelection: boolean;
        pasteTargetList: TargetList;
        tagTable: TextTagTable;
        text: string;
    }
}
export class TextBuffer extends GObject.Object {
    static $gtype: GObject.GType<TextBuffer>;

    constructor(properties?: Partial<TextBuffer.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextBuffer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get copyTargetList(): TargetList;
    get cursorPosition(): number;
    get hasSelection(): boolean;
    get pasteTargetList(): TargetList;
    get tagTable(): TextTagTable;
    get text(): string;
    set text(val: string);

    // Fields
    priv: TextBufferPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "apply-tag",
        callback: (_source: this, tag: TextTag, start: TextIter, end: TextIter) => void
    ): number;
    connect_after(
        signal: "apply-tag",
        callback: (_source: this, tag: TextTag, start: TextIter, end: TextIter) => void
    ): number;
    emit(signal: "apply-tag", tag: TextTag, start: TextIter, end: TextIter): void;
    connect(signal: "begin-user-action", callback: (_source: this) => void): number;
    connect_after(signal: "begin-user-action", callback: (_source: this) => void): number;
    emit(signal: "begin-user-action"): void;
    connect(signal: "changed", callback: (_source: this) => void): number;
    connect_after(signal: "changed", callback: (_source: this) => void): number;
    emit(signal: "changed"): void;
    connect(signal: "delete-range", callback: (_source: this, start: TextIter, end: TextIter) => void): number;
    connect_after(signal: "delete-range", callback: (_source: this, start: TextIter, end: TextIter) => void): number;
    emit(signal: "delete-range", start: TextIter, end: TextIter): void;
    connect(signal: "end-user-action", callback: (_source: this) => void): number;
    connect_after(signal: "end-user-action", callback: (_source: this) => void): number;
    emit(signal: "end-user-action"): void;
    connect(
        signal: "insert-child-anchor",
        callback: (_source: this, location: TextIter, anchor: TextChildAnchor) => void
    ): number;
    connect_after(
        signal: "insert-child-anchor",
        callback: (_source: this, location: TextIter, anchor: TextChildAnchor) => void
    ): number;
    emit(signal: "insert-child-anchor", location: TextIter, anchor: TextChildAnchor): void;
    connect(
        signal: "insert-pixbuf",
        callback: (_source: this, location: TextIter, pixbuf: GdkPixbuf.Pixbuf) => void
    ): number;
    connect_after(
        signal: "insert-pixbuf",
        callback: (_source: this, location: TextIter, pixbuf: GdkPixbuf.Pixbuf) => void
    ): number;
    emit(signal: "insert-pixbuf", location: TextIter, pixbuf: GdkPixbuf.Pixbuf): void;
    connect(
        signal: "insert-text",
        callback: (_source: this, location: TextIter, text: string, len: number) => void
    ): number;
    connect_after(
        signal: "insert-text",
        callback: (_source: this, location: TextIter, text: string, len: number) => void
    ): number;
    emit(signal: "insert-text", location: TextIter, text: string, len: number): void;
    connect(signal: "mark-deleted", callback: (_source: this, mark: TextMark) => void): number;
    connect_after(signal: "mark-deleted", callback: (_source: this, mark: TextMark) => void): number;
    emit(signal: "mark-deleted", mark: TextMark): void;
    connect(signal: "mark-set", callback: (_source: this, location: TextIter, mark: TextMark) => void): number;
    connect_after(signal: "mark-set", callback: (_source: this, location: TextIter, mark: TextMark) => void): number;
    emit(signal: "mark-set", location: TextIter, mark: TextMark): void;
    connect(signal: "modified-changed", callback: (_source: this) => void): number;
    connect_after(signal: "modified-changed", callback: (_source: this) => void): number;
    emit(signal: "modified-changed"): void;
    connect(signal: "paste-done", callback: (_source: this, clipboard: Clipboard) => void): number;
    connect_after(signal: "paste-done", callback: (_source: this, clipboard: Clipboard) => void): number;
    emit(signal: "paste-done", clipboard: Clipboard): void;
    connect(
        signal: "remove-tag",
        callback: (_source: this, tag: TextTag, start: TextIter, end: TextIter) => void
    ): number;
    connect_after(
        signal: "remove-tag",
        callback: (_source: this, tag: TextTag, start: TextIter, end: TextIter) => void
    ): number;
    emit(signal: "remove-tag", tag: TextTag, start: TextIter, end: TextIter): void;

    // Constructors

    static ["new"](table?: TextTagTable | null): TextBuffer;

    // Members

    add_mark(mark: TextMark, where: TextIter): void;
    add_selection_clipboard(clipboard: Clipboard): void;
    apply_tag(tag: TextTag, start: TextIter, end: TextIter): void;
    apply_tag_by_name(name: string, start: TextIter, end: TextIter): void;
    backspace(iter: TextIter, interactive: boolean, default_editable: boolean): boolean;
    begin_user_action(): void;
    copy_clipboard(clipboard: Clipboard): void;
    create_child_anchor(iter: TextIter): TextChildAnchor;
    create_mark(mark_name: string | null, where: TextIter, left_gravity: boolean): TextMark;
    cut_clipboard(clipboard: Clipboard, default_editable: boolean): void;
    ["delete"](start: TextIter, end: TextIter): void;
    delete_interactive(start_iter: TextIter, end_iter: TextIter, default_editable: boolean): boolean;
    delete_mark(mark: TextMark): void;
    delete_mark_by_name(name: string): void;
    delete_selection(interactive: boolean, default_editable: boolean): boolean;
    deserialize(content_buffer: TextBuffer, format: Gdk.Atom, iter: TextIter, data: Uint8Array | string): boolean;
    deserialize_get_can_create_tags(format: Gdk.Atom): boolean;
    deserialize_set_can_create_tags(format: Gdk.Atom, can_create_tags: boolean): void;
    end_user_action(): void;
    get_bounds(): [TextIter, TextIter];
    get_char_count(): number;
    get_copy_target_list(): TargetList;
    get_deserialize_formats(): Gdk.Atom[];
    get_end_iter(): TextIter;
    get_has_selection(): boolean;
    get_insert(): TextMark;
    get_iter_at_child_anchor(anchor: TextChildAnchor): TextIter;
    get_iter_at_line(line_number: number): TextIter;
    get_iter_at_line_index(line_number: number, byte_index: number): TextIter;
    get_iter_at_line_offset(line_number: number, char_offset: number): TextIter;
    get_iter_at_mark(mark: TextMark): TextIter;
    get_iter_at_offset(char_offset: number): TextIter;
    get_line_count(): number;
    get_mark(name: string): TextMark | null;
    get_modified(): boolean;
    get_paste_target_list(): TargetList;
    get_selection_bound(): TextMark;
    get_selection_bounds(): [boolean, TextIter, TextIter];
    get_serialize_formats(): Gdk.Atom[];
    get_slice(start: TextIter, end: TextIter, include_hidden_chars: boolean): string;
    get_start_iter(): TextIter;
    get_tag_table(): TextTagTable;
    get_text(start: TextIter, end: TextIter, include_hidden_chars: boolean): string;
    insert(iter: TextIter, text: string, len: number): void;
    insert_at_cursor(text: string, len: number): void;
    insert_child_anchor(iter: TextIter, anchor: TextChildAnchor): void;
    insert_interactive(iter: TextIter, text: string, len: number, default_editable: boolean): boolean;
    insert_interactive_at_cursor(text: string, len: number, default_editable: boolean): boolean;
    insert_markup(iter: TextIter, markup: string, len: number): void;
    insert_pixbuf(iter: TextIter, pixbuf: GdkPixbuf.Pixbuf): void;
    insert_range(iter: TextIter, start: TextIter, end: TextIter): void;
    insert_range_interactive(iter: TextIter, start: TextIter, end: TextIter, default_editable: boolean): boolean;
    move_mark(mark: TextMark, where: TextIter): void;
    move_mark_by_name(name: string, where: TextIter): void;
    paste_clipboard(clipboard: Clipboard, override_location: TextIter | null, default_editable: boolean): void;
    place_cursor(where: TextIter): void;
    register_deserialize_format(mime_type: string, _function: TextBufferDeserializeFunc): Gdk.Atom;
    register_deserialize_tagset(tagset_name?: string | null): Gdk.Atom;
    register_serialize_format(mime_type: string, _function: TextBufferSerializeFunc): Gdk.Atom;
    register_serialize_tagset(tagset_name?: string | null): Gdk.Atom;
    remove_all_tags(start: TextIter, end: TextIter): void;
    remove_selection_clipboard(clipboard: Clipboard): void;
    remove_tag(tag: TextTag, start: TextIter, end: TextIter): void;
    remove_tag_by_name(name: string, start: TextIter, end: TextIter): void;
    select_range(ins: TextIter, bound: TextIter): void;
    serialize(content_buffer: TextBuffer, format: Gdk.Atom, start: TextIter, end: TextIter): Uint8Array;
    set_modified(setting: boolean): void;
    set_text(text: string, len: number): void;
    unregister_deserialize_format(format: Gdk.Atom): void;
    unregister_serialize_format(format: Gdk.Atom): void;
    vfunc_apply_tag(tag: TextTag, start: TextIter, end: TextIter): void;
    vfunc_begin_user_action(): void;
    vfunc_changed(): void;
    vfunc_delete_range(start: TextIter, end: TextIter): void;
    vfunc_end_user_action(): void;
    vfunc_insert_child_anchor(iter: TextIter, anchor: TextChildAnchor): void;
    vfunc_insert_pixbuf(iter: TextIter, pixbuf: GdkPixbuf.Pixbuf): void;
    vfunc_insert_text(pos: TextIter, new_text: string, new_text_length: number): void;
    vfunc_mark_deleted(mark: TextMark): void;
    vfunc_mark_set(location: TextIter, mark: TextMark): void;
    vfunc_modified_changed(): void;
    vfunc_paste_done(clipboard: Clipboard): void;
    vfunc_remove_tag(tag: TextTag, start: TextIter, end: TextIter): void;
}
export module TextCellAccessible {
    export interface ConstructorProperties extends RendererCellAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class TextCellAccessible
    extends RendererCellAccessible
    implements Atk.Action, Atk.Component, Atk.TableCell, Atk.Text
{
    static $gtype: GObject.GType<TextCellAccessible>;

    constructor(properties?: Partial<TextCellAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextCellAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: TextCellAccessiblePrivate | any;

    // Implemented Members

    add_selection(start_offset: number, end_offset: number): boolean;
    get_bounded_ranges(
        rect: Atk.TextRectangle,
        coord_type: Atk.CoordType,
        x_clip_type: Atk.TextClipType,
        y_clip_type: Atk.TextClipType
    ): Atk.TextRange[];
    get_caret_offset(): number;
    get_character_at_offset(offset: number): number;
    get_character_count(): number;
    get_character_extents(offset: number, coords: Atk.CoordType): [number, number, number, number];
    get_default_attributes(): Atk.AttributeSet;
    get_n_selections(): number;
    get_offset_at_point(x: number, y: number, coords: Atk.CoordType): number;
    get_range_extents(start_offset: number, end_offset: number, coord_type: Atk.CoordType): Atk.TextRectangle;
    get_run_attributes(offset: number): [Atk.AttributeSet, number, number];
    get_selection(selection_num: number): [string, number, number];
    get_string_at_offset(offset: number, granularity: Atk.TextGranularity): [string | null, number, number];
    get_text(start_offset: number, end_offset: number): string;
    get_text_after_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    get_text_at_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    get_text_before_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    remove_selection(selection_num: number): boolean;
    scroll_substring_to(start_offset: number, end_offset: number, type: Atk.ScrollType): boolean;
    scroll_substring_to_point(
        start_offset: number,
        end_offset: number,
        coords: Atk.CoordType,
        x: number,
        y: number
    ): boolean;
    set_caret_offset(offset: number): boolean;
    set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
    vfunc_add_selection(start_offset: number, end_offset: number): boolean;
    vfunc_get_bounded_ranges(
        rect: Atk.TextRectangle,
        coord_type: Atk.CoordType,
        x_clip_type: Atk.TextClipType,
        y_clip_type: Atk.TextClipType
    ): Atk.TextRange[];
    vfunc_get_caret_offset(): number;
    vfunc_get_character_at_offset(offset: number): number;
    vfunc_get_character_count(): number;
    vfunc_get_character_extents(offset: number, coords: Atk.CoordType): [number, number, number, number];
    vfunc_get_default_attributes(): Atk.AttributeSet;
    vfunc_get_n_selections(): number;
    vfunc_get_offset_at_point(x: number, y: number, coords: Atk.CoordType): number;
    vfunc_get_range_extents(start_offset: number, end_offset: number, coord_type: Atk.CoordType): Atk.TextRectangle;
    vfunc_get_run_attributes(offset: number): [Atk.AttributeSet, number, number];
    vfunc_get_selection(selection_num: number): [string, number, number];
    vfunc_get_string_at_offset(offset: number, granularity: Atk.TextGranularity): [string | null, number, number];
    vfunc_get_text(start_offset: number, end_offset: number): string;
    vfunc_get_text_after_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    vfunc_get_text_at_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    vfunc_get_text_before_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    vfunc_remove_selection(selection_num: number): boolean;
    vfunc_scroll_substring_to(start_offset: number, end_offset: number, type: Atk.ScrollType): boolean;
    vfunc_scroll_substring_to_point(
        start_offset: number,
        end_offset: number,
        coords: Atk.CoordType,
        x: number,
        y: number
    ): boolean;
    vfunc_set_caret_offset(offset: number): boolean;
    vfunc_set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
    vfunc_text_attributes_changed(): void;
    vfunc_text_caret_moved(location: number): void;
    vfunc_text_changed(position: number, length: number): void;
    vfunc_text_selection_changed(): void;
}
export module TextChildAnchor {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class TextChildAnchor extends GObject.Object {
    static $gtype: GObject.GType<TextChildAnchor>;

    constructor(properties?: Partial<TextChildAnchor.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextChildAnchor.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): TextChildAnchor;

    // Members

    get_deleted(): boolean;
    get_widgets(): Widget[];
}
export module TextMark {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        leftGravity: boolean;
        name: string;
    }
}
export class TextMark extends GObject.Object {
    static $gtype: GObject.GType<TextMark>;

    constructor(properties?: Partial<TextMark.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextMark.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get leftGravity(): boolean;
    get name(): string;

    // Constructors

    static ["new"](name: string | null, left_gravity: boolean): TextMark;

    // Members

    get_buffer(): TextBuffer;
    get_deleted(): boolean;
    get_left_gravity(): boolean;
    get_name(): string | null;
    get_visible(): boolean;
    set_visible(setting: boolean): void;
}
export module TextTag {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        accumulativeMargin: boolean;
        background: string;
        backgroundFullHeight: boolean;
        backgroundFullHeightSet: boolean;
        backgroundGdk: Gdk.Color;
        backgroundRgba: Gdk.RGBA;
        backgroundSet: boolean;
        direction: TextDirection;
        editable: boolean;
        editableSet: boolean;
        fallback: boolean;
        fallbackSet: boolean;
        family: string;
        familySet: boolean;
        font: string;
        fontDesc: Pango.FontDescription;
        fontFeatures: string;
        fontFeaturesSet: boolean;
        foreground: string;
        foregroundGdk: Gdk.Color;
        foregroundRgba: Gdk.RGBA;
        foregroundSet: boolean;
        indent: number;
        indentSet: boolean;
        invisible: boolean;
        invisibleSet: boolean;
        justification: Justification;
        justificationSet: boolean;
        language: string;
        languageSet: boolean;
        leftMargin: number;
        leftMarginSet: boolean;
        letterSpacing: number;
        letterSpacingSet: boolean;
        name: string;
        paragraphBackground: string;
        paragraphBackgroundGdk: Gdk.Color;
        paragraphBackgroundRgba: Gdk.RGBA;
        paragraphBackgroundSet: boolean;
        pixelsAboveLines: number;
        pixelsAboveLinesSet: boolean;
        pixelsBelowLines: number;
        pixelsBelowLinesSet: boolean;
        pixelsInsideWrap: number;
        pixelsInsideWrapSet: boolean;
        rightMargin: number;
        rightMarginSet: boolean;
        rise: number;
        riseSet: boolean;
        scale: number;
        scaleSet: boolean;
        size: number;
        sizePoints: number;
        sizeSet: boolean;
        stretch: Pango.Stretch;
        stretchSet: boolean;
        strikethrough: boolean;
        strikethroughRgba: Gdk.RGBA;
        strikethroughRgbaSet: boolean;
        strikethroughSet: boolean;
        style: Pango.Style;
        styleSet: boolean;
        tabs: Pango.TabArray;
        tabsSet: boolean;
        underline: Pango.Underline;
        underlineRgba: Gdk.RGBA;
        underlineRgbaSet: boolean;
        underlineSet: boolean;
        variant: Pango.Variant;
        variantSet: boolean;
        weight: number;
        weightSet: boolean;
        wrapMode: WrapMode;
        wrapModeSet: boolean;
    }
}
export class TextTag extends GObject.Object {
    static $gtype: GObject.GType<TextTag>;

    constructor(properties?: Partial<TextTag.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextTag.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get accumulativeMargin(): boolean;
    set accumulativeMargin(val: boolean);
    set background(val: string);
    get backgroundFullHeight(): boolean;
    set backgroundFullHeight(val: boolean);
    get backgroundFullHeightSet(): boolean;
    set backgroundFullHeightSet(val: boolean);
    get backgroundGdk(): Gdk.Color;
    set backgroundGdk(val: Gdk.Color);
    get backgroundRgba(): Gdk.RGBA;
    set backgroundRgba(val: Gdk.RGBA);
    get backgroundSet(): boolean;
    set backgroundSet(val: boolean);
    get direction(): TextDirection;
    set direction(val: TextDirection);
    get editable(): boolean;
    set editable(val: boolean);
    get editableSet(): boolean;
    set editableSet(val: boolean);
    get fallback(): boolean;
    set fallback(val: boolean);
    get fallbackSet(): boolean;
    set fallbackSet(val: boolean);
    get family(): string;
    set family(val: string);
    get familySet(): boolean;
    set familySet(val: boolean);
    get font(): string;
    set font(val: string);
    get fontDesc(): Pango.FontDescription;
    set fontDesc(val: Pango.FontDescription);
    get fontFeatures(): string;
    set fontFeatures(val: string);
    get fontFeaturesSet(): boolean;
    set fontFeaturesSet(val: boolean);
    set foreground(val: string);
    get foregroundGdk(): Gdk.Color;
    set foregroundGdk(val: Gdk.Color);
    get foregroundRgba(): Gdk.RGBA;
    set foregroundRgba(val: Gdk.RGBA);
    get foregroundSet(): boolean;
    set foregroundSet(val: boolean);
    get indent(): number;
    set indent(val: number);
    get indentSet(): boolean;
    set indentSet(val: boolean);
    get invisible(): boolean;
    set invisible(val: boolean);
    get invisibleSet(): boolean;
    set invisibleSet(val: boolean);
    get justification(): Justification;
    set justification(val: Justification);
    get justificationSet(): boolean;
    set justificationSet(val: boolean);
    get language(): string;
    set language(val: string);
    get languageSet(): boolean;
    set languageSet(val: boolean);
    get leftMargin(): number;
    set leftMargin(val: number);
    get leftMarginSet(): boolean;
    set leftMarginSet(val: boolean);
    get letterSpacing(): number;
    set letterSpacing(val: number);
    get letterSpacingSet(): boolean;
    set letterSpacingSet(val: boolean);
    get name(): string;
    set paragraphBackground(val: string);
    get paragraphBackgroundGdk(): Gdk.Color;
    set paragraphBackgroundGdk(val: Gdk.Color);
    get paragraphBackgroundRgba(): Gdk.RGBA;
    set paragraphBackgroundRgba(val: Gdk.RGBA);
    get paragraphBackgroundSet(): boolean;
    set paragraphBackgroundSet(val: boolean);
    get pixelsAboveLines(): number;
    set pixelsAboveLines(val: number);
    get pixelsAboveLinesSet(): boolean;
    set pixelsAboveLinesSet(val: boolean);
    get pixelsBelowLines(): number;
    set pixelsBelowLines(val: number);
    get pixelsBelowLinesSet(): boolean;
    set pixelsBelowLinesSet(val: boolean);
    get pixelsInsideWrap(): number;
    set pixelsInsideWrap(val: number);
    get pixelsInsideWrapSet(): boolean;
    set pixelsInsideWrapSet(val: boolean);
    get rightMargin(): number;
    set rightMargin(val: number);
    get rightMarginSet(): boolean;
    set rightMarginSet(val: boolean);
    get rise(): number;
    set rise(val: number);
    get riseSet(): boolean;
    set riseSet(val: boolean);
    get scale(): number;
    set scale(val: number);
    get scaleSet(): boolean;
    set scaleSet(val: boolean);
    get size(): number;
    set size(val: number);
    get sizePoints(): number;
    set sizePoints(val: number);
    get sizeSet(): boolean;
    set sizeSet(val: boolean);
    get stretch(): Pango.Stretch;
    set stretch(val: Pango.Stretch);
    get stretchSet(): boolean;
    set stretchSet(val: boolean);
    get strikethrough(): boolean;
    set strikethrough(val: boolean);
    get strikethroughRgba(): Gdk.RGBA;
    set strikethroughRgba(val: Gdk.RGBA);
    get strikethroughRgbaSet(): boolean;
    set strikethroughRgbaSet(val: boolean);
    get strikethroughSet(): boolean;
    set strikethroughSet(val: boolean);
    get style(): Pango.Style;
    set style(val: Pango.Style);
    get styleSet(): boolean;
    set styleSet(val: boolean);
    get tabs(): Pango.TabArray;
    set tabs(val: Pango.TabArray);
    get tabsSet(): boolean;
    set tabsSet(val: boolean);
    get underline(): Pango.Underline;
    set underline(val: Pango.Underline);
    get underlineRgba(): Gdk.RGBA;
    set underlineRgba(val: Gdk.RGBA);
    get underlineRgbaSet(): boolean;
    set underlineRgbaSet(val: boolean);
    get underlineSet(): boolean;
    set underlineSet(val: boolean);
    get variant(): Pango.Variant;
    set variant(val: Pango.Variant);
    get variantSet(): boolean;
    set variantSet(val: boolean);
    get weight(): number;
    set weight(val: number);
    get weightSet(): boolean;
    set weightSet(val: boolean);
    get wrapMode(): WrapMode;
    set wrapMode(val: WrapMode);
    get wrapModeSet(): boolean;
    set wrapModeSet(val: boolean);

    // Fields
    priv: TextTagPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(
        signal: "event",
        callback: (_source: this, object: GObject.Object, event: Gdk.Event, iter: TextIter) => boolean
    ): number;
    connect_after(
        signal: "event",
        callback: (_source: this, object: GObject.Object, event: Gdk.Event, iter: TextIter) => boolean
    ): number;
    emit(signal: "event", object: GObject.Object, event: Gdk.Event, iter: TextIter): void;

    // Constructors

    static ["new"](name?: string | null): TextTag;

    // Members

    changed(size_changed: boolean): void;
    event(event_object: GObject.Object, event: Gdk.Event, iter: TextIter): boolean;
    get_priority(): number;
    set_priority(priority: number): void;
    vfunc_event(event_object: GObject.Object, event: Gdk.Event, iter: TextIter): boolean;
}
export module TextTagTable {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class TextTagTable extends GObject.Object implements Buildable {
    static $gtype: GObject.GType<TextTagTable>;

    constructor(properties?: Partial<TextTagTable.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextTagTable.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: TextTagTablePrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "tag-added", callback: (_source: this, tag: TextTag) => void): number;
    connect_after(signal: "tag-added", callback: (_source: this, tag: TextTag) => void): number;
    emit(signal: "tag-added", tag: TextTag): void;
    connect(signal: "tag-changed", callback: (_source: this, tag: TextTag, size_changed: boolean) => void): number;
    connect_after(
        signal: "tag-changed",
        callback: (_source: this, tag: TextTag, size_changed: boolean) => void
    ): number;
    emit(signal: "tag-changed", tag: TextTag, size_changed: boolean): void;
    connect(signal: "tag-removed", callback: (_source: this, tag: TextTag) => void): number;
    connect_after(signal: "tag-removed", callback: (_source: this, tag: TextTag) => void): number;
    emit(signal: "tag-removed", tag: TextTag): void;

    // Constructors

    static ["new"](): TextTagTable;

    // Members

    add(tag: TextTag): boolean;
    foreach(func: TextTagTableForeach): void;
    get_size(): number;
    lookup(name: string): TextTag | null;
    remove(tag: TextTag): void;
    vfunc_tag_added(tag: TextTag): void;
    vfunc_tag_changed(tag: TextTag, size_changed: boolean): void;
    vfunc_tag_removed(tag: TextTag): void;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
}
export module TextView {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        acceptsTab: boolean;
        bottomMargin: number;
        buffer: TextBuffer;
        cursorVisible: boolean;
        editable: boolean;
        imModule: string;
        indent: number;
        inputHints: InputHints;
        inputPurpose: InputPurpose;
        justification: Justification;
        leftMargin: number;
        monospace: boolean;
        overwrite: boolean;
        pixelsAboveLines: number;
        pixelsBelowLines: number;
        pixelsInsideWrap: number;
        populateAll: boolean;
        rightMargin: number;
        tabs: Pango.TabArray;
        topMargin: number;
        wrapMode: WrapMode;
    }
}
export class TextView extends Container implements Atk.ImplementorIface, Buildable, Scrollable {
    static $gtype: GObject.GType<TextView>;

    constructor(properties?: Partial<TextView.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextView.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get acceptsTab(): boolean;
    set acceptsTab(val: boolean);
    get bottomMargin(): number;
    set bottomMargin(val: number);
    get buffer(): TextBuffer;
    set buffer(val: TextBuffer);
    get cursorVisible(): boolean;
    set cursorVisible(val: boolean);
    get editable(): boolean;
    set editable(val: boolean);
    get imModule(): string;
    set imModule(val: string);
    get indent(): number;
    set indent(val: number);
    get inputHints(): InputHints;
    set inputHints(val: InputHints);
    get inputPurpose(): InputPurpose;
    set inputPurpose(val: InputPurpose);
    get justification(): Justification;
    set justification(val: Justification);
    get leftMargin(): number;
    set leftMargin(val: number);
    get monospace(): boolean;
    set monospace(val: boolean);
    get overwrite(): boolean;
    set overwrite(val: boolean);
    get pixelsAboveLines(): number;
    set pixelsAboveLines(val: number);
    get pixelsBelowLines(): number;
    set pixelsBelowLines(val: number);
    get pixelsInsideWrap(): number;
    set pixelsInsideWrap(val: number);
    get populateAll(): boolean;
    set populateAll(val: boolean);
    get rightMargin(): number;
    set rightMargin(val: number);
    get tabs(): Pango.TabArray;
    set tabs(val: Pango.TabArray);
    get topMargin(): number;
    set topMargin(val: number);
    get wrapMode(): WrapMode;
    set wrapMode(val: WrapMode);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "backspace", callback: (_source: this) => void): number;
    connect_after(signal: "backspace", callback: (_source: this) => void): number;
    emit(signal: "backspace"): void;
    connect(signal: "copy-clipboard", callback: (_source: this) => void): number;
    connect_after(signal: "copy-clipboard", callback: (_source: this) => void): number;
    emit(signal: "copy-clipboard"): void;
    connect(signal: "cut-clipboard", callback: (_source: this) => void): number;
    connect_after(signal: "cut-clipboard", callback: (_source: this) => void): number;
    emit(signal: "cut-clipboard"): void;
    connect(signal: "delete-from-cursor", callback: (_source: this, type: DeleteType, count: number) => void): number;
    connect_after(
        signal: "delete-from-cursor",
        callback: (_source: this, type: DeleteType, count: number) => void
    ): number;
    emit(signal: "delete-from-cursor", type: DeleteType, count: number): void;
    connect(
        signal: "extend-selection",
        callback: (
            _source: this,
            granularity: TextExtendSelection,
            location: TextIter,
            start: TextIter,
            end: TextIter
        ) => boolean
    ): number;
    connect_after(
        signal: "extend-selection",
        callback: (
            _source: this,
            granularity: TextExtendSelection,
            location: TextIter,
            start: TextIter,
            end: TextIter
        ) => boolean
    ): number;
    emit(
        signal: "extend-selection",
        granularity: TextExtendSelection,
        location: TextIter,
        start: TextIter,
        end: TextIter
    ): void;
    connect(signal: "insert-at-cursor", callback: (_source: this, string: string) => void): number;
    connect_after(signal: "insert-at-cursor", callback: (_source: this, string: string) => void): number;
    emit(signal: "insert-at-cursor", string: string): void;
    connect(signal: "insert-emoji", callback: (_source: this) => void): number;
    connect_after(signal: "insert-emoji", callback: (_source: this) => void): number;
    emit(signal: "insert-emoji"): void;
    connect(
        signal: "move-cursor",
        callback: (_source: this, step: MovementStep, count: number, extend_selection: boolean) => void
    ): number;
    connect_after(
        signal: "move-cursor",
        callback: (_source: this, step: MovementStep, count: number, extend_selection: boolean) => void
    ): number;
    emit(signal: "move-cursor", step: MovementStep, count: number, extend_selection: boolean): void;
    connect(signal: "move-viewport", callback: (_source: this, step: ScrollStep, count: number) => void): number;
    connect_after(signal: "move-viewport", callback: (_source: this, step: ScrollStep, count: number) => void): number;
    emit(signal: "move-viewport", step: ScrollStep, count: number): void;
    connect(signal: "paste-clipboard", callback: (_source: this) => void): number;
    connect_after(signal: "paste-clipboard", callback: (_source: this) => void): number;
    emit(signal: "paste-clipboard"): void;
    connect(signal: "populate-popup", callback: (_source: this, popup: Widget) => void): number;
    connect_after(signal: "populate-popup", callback: (_source: this, popup: Widget) => void): number;
    emit(signal: "populate-popup", popup: Widget): void;
    connect(signal: "preedit-changed", callback: (_source: this, preedit: string) => void): number;
    connect_after(signal: "preedit-changed", callback: (_source: this, preedit: string) => void): number;
    emit(signal: "preedit-changed", preedit: string): void;
    connect(signal: "select-all", callback: (_source: this, select: boolean) => void): number;
    connect_after(signal: "select-all", callback: (_source: this, select: boolean) => void): number;
    emit(signal: "select-all", select: boolean): void;
    connect(signal: "set-anchor", callback: (_source: this) => void): number;
    connect_after(signal: "set-anchor", callback: (_source: this) => void): number;
    emit(signal: "set-anchor"): void;
    connect(signal: "toggle-cursor-visible", callback: (_source: this) => void): number;
    connect_after(signal: "toggle-cursor-visible", callback: (_source: this) => void): number;
    emit(signal: "toggle-cursor-visible"): void;
    connect(signal: "toggle-overwrite", callback: (_source: this) => void): number;
    connect_after(signal: "toggle-overwrite", callback: (_source: this) => void): number;
    emit(signal: "toggle-overwrite"): void;

    // Implemented Properties

    get hadjustment(): Adjustment;
    set hadjustment(val: Adjustment);
    get hscrollPolicy(): ScrollablePolicy;
    set hscrollPolicy(val: ScrollablePolicy);
    get vadjustment(): Adjustment;
    set vadjustment(val: Adjustment);
    get vscrollPolicy(): ScrollablePolicy;
    set vscrollPolicy(val: ScrollablePolicy);

    // Constructors

    static ["new"](): TextView;
    static new_with_buffer(buffer: TextBuffer): TextView;

    // Members

    add_child_at_anchor(child: Widget, anchor: TextChildAnchor): void;
    add_child_in_window(child: Widget, which_window: TextWindowType, xpos: number, ypos: number): void;
    backward_display_line(iter: TextIter): boolean;
    backward_display_line_start(iter: TextIter): boolean;
    buffer_to_window_coords(win: TextWindowType, buffer_x: number, buffer_y: number): [number, number];
    forward_display_line(iter: TextIter): boolean;
    forward_display_line_end(iter: TextIter): boolean;
    get_accepts_tab(): boolean;
    get_border_window_size(type: TextWindowType): number;
    get_bottom_margin(): number;
    get_buffer(): TextBuffer;
    get_cursor_locations(iter?: TextIter | null): [Gdk.Rectangle | null, Gdk.Rectangle | null];
    get_cursor_visible(): boolean;
    get_default_attributes(): TextAttributes;
    get_editable(): boolean;
    get_hadjustment(): Adjustment;
    get_indent(): number;
    get_input_hints(): InputHints;
    get_input_purpose(): InputPurpose;
    get_iter_at_location(x: number, y: number): [boolean, TextIter];
    get_iter_at_position(x: number, y: number): [boolean, TextIter, number];
    get_iter_location(iter: TextIter): Gdk.Rectangle;
    get_justification(): Justification;
    get_left_margin(): number;
    get_line_at_y(y: number): [TextIter, number];
    get_line_yrange(iter: TextIter): [number, number];
    get_monospace(): boolean;
    get_overwrite(): boolean;
    get_pixels_above_lines(): number;
    get_pixels_below_lines(): number;
    get_pixels_inside_wrap(): number;
    get_right_margin(): number;
    get_tabs(): Pango.TabArray | null;
    get_top_margin(): number;
    get_vadjustment(): Adjustment;
    get_visible_rect(): Gdk.Rectangle;
    get_window(win: TextWindowType): Gdk.Window | null;
    // Conflicted with Gtk.Widget.get_window
    get_window(...args: never[]): any;
    get_window_type(window: Gdk.Window): TextWindowType;
    get_wrap_mode(): WrapMode;
    im_context_filter_keypress(event: Gdk.EventKey): boolean;
    move_child(child: Widget, xpos: number, ypos: number): void;
    move_mark_onscreen(mark: TextMark): boolean;
    move_visually(iter: TextIter, count: number): boolean;
    place_cursor_onscreen(): boolean;
    reset_cursor_blink(): void;
    reset_im_context(): void;
    scroll_mark_onscreen(mark: TextMark): void;
    scroll_to_iter(iter: TextIter, within_margin: number, use_align: boolean, xalign: number, yalign: number): boolean;
    scroll_to_mark(mark: TextMark, within_margin: number, use_align: boolean, xalign: number, yalign: number): void;
    set_accepts_tab(accepts_tab: boolean): void;
    set_border_window_size(type: TextWindowType, size: number): void;
    set_bottom_margin(bottom_margin: number): void;
    set_buffer(buffer?: TextBuffer | null): void;
    set_cursor_visible(setting: boolean): void;
    set_editable(setting: boolean): void;
    set_indent(indent: number): void;
    set_input_hints(hints: InputHints): void;
    set_input_purpose(purpose: InputPurpose): void;
    set_justification(justification: Justification): void;
    set_left_margin(left_margin: number): void;
    set_monospace(monospace: boolean): void;
    set_overwrite(overwrite: boolean): void;
    set_pixels_above_lines(pixels_above_lines: number): void;
    set_pixels_below_lines(pixels_below_lines: number): void;
    set_pixels_inside_wrap(pixels_inside_wrap: number): void;
    set_right_margin(right_margin: number): void;
    set_tabs(tabs: Pango.TabArray): void;
    set_top_margin(top_margin: number): void;
    set_wrap_mode(wrap_mode: WrapMode): void;
    starts_display_line(iter: TextIter): boolean;
    window_to_buffer_coords(win: TextWindowType, window_x: number, window_y: number): [number, number];
    vfunc_backspace(): void;
    vfunc_copy_clipboard(): void;
    vfunc_cut_clipboard(): void;
    vfunc_delete_from_cursor(type: DeleteType, count: number): void;
    vfunc_draw_layer(layer: TextViewLayer, cr: cairo.Context): void;
    vfunc_extend_selection(
        granularity: TextExtendSelection,
        location: TextIter,
        start: TextIter,
        end: TextIter
    ): boolean;
    vfunc_insert_at_cursor(str: string): void;
    vfunc_insert_emoji(): void;
    vfunc_move_cursor(step: MovementStep, count: number, extend_selection: boolean): void;
    vfunc_paste_clipboard(): void;
    vfunc_populate_popup(popup: Widget): void;
    vfunc_set_anchor(): void;
    vfunc_toggle_overwrite(): void;

    // Implemented Members

    get_border(): [boolean, Border];
    get_hscroll_policy(): ScrollablePolicy;
    get_vscroll_policy(): ScrollablePolicy;
    set_hadjustment(hadjustment?: Adjustment | null): void;
    set_hscroll_policy(policy: ScrollablePolicy): void;
    set_vadjustment(vadjustment?: Adjustment | null): void;
    set_vscroll_policy(policy: ScrollablePolicy): void;
    vfunc_get_border(): [boolean, Border];
}
export module TextViewAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class TextViewAccessible
    extends ContainerAccessible
    implements Atk.Component, Atk.EditableText, Atk.StreamableContent, Atk.Text
{
    static $gtype: GObject.GType<TextViewAccessible>;

    constructor(properties?: Partial<TextViewAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TextViewAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: TextViewAccessiblePrivate | any;

    // Implemented Members

    copy_text(start_pos: number, end_pos: number): void;
    cut_text(start_pos: number, end_pos: number): void;
    delete_text(start_pos: number, end_pos: number): void;
    insert_text(string: string, length: number, position: number): void;
    paste_text(position: number): void;
    set_run_attributes(attrib_set: Atk.AttributeSet, start_offset: number, end_offset: number): boolean;
    set_text_contents(string: string): void;
    vfunc_copy_text(start_pos: number, end_pos: number): void;
    vfunc_cut_text(start_pos: number, end_pos: number): void;
    vfunc_delete_text(start_pos: number, end_pos: number): void;
    vfunc_insert_text(string: string, length: number, position: number): void;
    vfunc_paste_text(position: number): void;
    vfunc_set_run_attributes(attrib_set: Atk.AttributeSet, start_offset: number, end_offset: number): boolean;
    vfunc_set_text_contents(string: string): void;
    get_mime_type(i: number): string;
    get_n_mime_types(): number;
    get_stream(mime_type: string): GLib.IOChannel;
    get_uri(mime_type: string): string | null;
    vfunc_get_mime_type(i: number): string;
    vfunc_get_n_mime_types(): number;
    vfunc_get_stream(mime_type: string): GLib.IOChannel;
    vfunc_get_uri(mime_type: string): string | null;
    add_selection(start_offset: number, end_offset: number): boolean;
    get_bounded_ranges(
        rect: Atk.TextRectangle,
        coord_type: Atk.CoordType,
        x_clip_type: Atk.TextClipType,
        y_clip_type: Atk.TextClipType
    ): Atk.TextRange[];
    get_caret_offset(): number;
    get_character_at_offset(offset: number): number;
    get_character_count(): number;
    get_character_extents(offset: number, coords: Atk.CoordType): [number, number, number, number];
    get_default_attributes(): Atk.AttributeSet;
    get_n_selections(): number;
    get_offset_at_point(x: number, y: number, coords: Atk.CoordType): number;
    get_range_extents(start_offset: number, end_offset: number, coord_type: Atk.CoordType): Atk.TextRectangle;
    get_run_attributes(offset: number): [Atk.AttributeSet, number, number];
    get_selection(selection_num: number): [string, number, number];
    get_string_at_offset(offset: number, granularity: Atk.TextGranularity): [string | null, number, number];
    get_text(start_offset: number, end_offset: number): string;
    get_text_after_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    get_text_at_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    get_text_before_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    remove_selection(selection_num: number): boolean;
    scroll_substring_to(start_offset: number, end_offset: number, type: Atk.ScrollType): boolean;
    scroll_substring_to_point(
        start_offset: number,
        end_offset: number,
        coords: Atk.CoordType,
        x: number,
        y: number
    ): boolean;
    set_caret_offset(offset: number): boolean;
    set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
    vfunc_add_selection(start_offset: number, end_offset: number): boolean;
    vfunc_get_bounded_ranges(
        rect: Atk.TextRectangle,
        coord_type: Atk.CoordType,
        x_clip_type: Atk.TextClipType,
        y_clip_type: Atk.TextClipType
    ): Atk.TextRange[];
    vfunc_get_caret_offset(): number;
    vfunc_get_character_at_offset(offset: number): number;
    vfunc_get_character_count(): number;
    vfunc_get_character_extents(offset: number, coords: Atk.CoordType): [number, number, number, number];
    vfunc_get_default_attributes(): Atk.AttributeSet;
    vfunc_get_n_selections(): number;
    vfunc_get_offset_at_point(x: number, y: number, coords: Atk.CoordType): number;
    vfunc_get_range_extents(start_offset: number, end_offset: number, coord_type: Atk.CoordType): Atk.TextRectangle;
    vfunc_get_run_attributes(offset: number): [Atk.AttributeSet, number, number];
    vfunc_get_selection(selection_num: number): [string, number, number];
    vfunc_get_string_at_offset(offset: number, granularity: Atk.TextGranularity): [string | null, number, number];
    vfunc_get_text(start_offset: number, end_offset: number): string;
    vfunc_get_text_after_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    vfunc_get_text_at_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    vfunc_get_text_before_offset(offset: number, boundary_type: Atk.TextBoundary): [string, number, number];
    vfunc_remove_selection(selection_num: number): boolean;
    vfunc_scroll_substring_to(start_offset: number, end_offset: number, type: Atk.ScrollType): boolean;
    vfunc_scroll_substring_to_point(
        start_offset: number,
        end_offset: number,
        coords: Atk.CoordType,
        x: number,
        y: number
    ): boolean;
    vfunc_set_caret_offset(offset: number): boolean;
    vfunc_set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
    vfunc_text_attributes_changed(): void;
    vfunc_text_caret_moved(location: number): void;
    vfunc_text_changed(position: number, length: number): void;
    vfunc_text_selection_changed(): void;
}
export module ThemingEngine {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        name: string;
    }
}
export class ThemingEngine extends GObject.Object {
    static $gtype: GObject.GType<ThemingEngine>;

    constructor(properties?: Partial<ThemingEngine.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ThemingEngine.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get name(): string;

    // Fields
    parent_object: GObject.Object;
    priv: ThemingEnginePrivate;

    // Members

    get_background_color(state: StateFlags): Gdk.RGBA;
    get_border(state: StateFlags): Border;
    get_border_color(state: StateFlags): Gdk.RGBA;
    get_color(state: StateFlags): Gdk.RGBA;
    get_direction(): TextDirection;
    get_font(state: StateFlags): Pango.FontDescription;
    get_junction_sides(): JunctionSides;
    get_margin(state: StateFlags): Border;
    get_padding(state: StateFlags): Border;
    get_path(): WidgetPath;
    get_property(property: string, state: StateFlags): unknown;
    // Conflicted with GObject.Object.get_property
    get_property(...args: never[]): any;
    get_screen(): Gdk.Screen | null;
    get_state(): StateFlags;
    get_style_property(property_name: string): unknown;
    has_class(style_class: string): boolean;
    has_region(style_region: string): [boolean, RegionFlags | null];
    lookup_color(color_name: string): [boolean, Gdk.RGBA];
    state_is_running(state: StateType): [boolean, number];
    vfunc_render_activity(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
    vfunc_render_arrow(cr: cairo.Context, angle: number, x: number, y: number, size: number): void;
    vfunc_render_background(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
    vfunc_render_check(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
    vfunc_render_expander(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
    vfunc_render_extension(
        cr: cairo.Context,
        x: number,
        y: number,
        width: number,
        height: number,
        gap_side: PositionType
    ): void;
    vfunc_render_focus(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
    vfunc_render_frame(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
    vfunc_render_frame_gap(
        cr: cairo.Context,
        x: number,
        y: number,
        width: number,
        height: number,
        gap_side: PositionType,
        xy0_gap: number,
        xy1_gap: number
    ): void;
    vfunc_render_handle(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
    vfunc_render_icon(cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, x: number, y: number): void;
    vfunc_render_icon_surface(cr: cairo.Context, surface: cairo.Surface, x: number, y: number): void;
    vfunc_render_layout(cr: cairo.Context, x: number, y: number, layout: Pango.Layout): void;
    vfunc_render_line(cr: cairo.Context, x0: number, y0: number, x1: number, y1: number): void;
    vfunc_render_option(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
    vfunc_render_slider(
        cr: cairo.Context,
        x: number,
        y: number,
        width: number,
        height: number,
        orientation: Orientation
    ): void;
    static load(name: string): ThemingEngine | null;
}
export module ToggleAction {
    export interface ConstructorProperties extends Action.ConstructorProperties {
        [key: string]: any;
        active: boolean;
        drawAsRadio: boolean;
    }
}
export class ToggleAction extends Action implements Buildable {
    static $gtype: GObject.GType<ToggleAction>;

    constructor(properties?: Partial<ToggleAction.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ToggleAction.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get active(): boolean;
    set active(val: boolean);
    get drawAsRadio(): boolean;
    set drawAsRadio(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "toggled", callback: (_source: this) => void): number;
    connect_after(signal: "toggled", callback: (_source: this) => void): number;
    emit(signal: "toggled"): void;

    // Constructors

    static ["new"](
        name: string,
        label?: string | null,
        tooltip?: string | null,
        stock_id?: string | null
    ): ToggleAction;

    // Members

    get_active(): boolean;
    get_draw_as_radio(): boolean;
    set_active(is_active: boolean): void;
    set_draw_as_radio(draw_as_radio: boolean): void;
    toggled(): void;
    vfunc_toggled(): void;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
}
export module ToggleButton {
    export interface ConstructorProperties extends Button.ConstructorProperties {
        [key: string]: any;
        active: boolean;
        drawIndicator: boolean;
        inconsistent: boolean;
    }
}
export class ToggleButton extends Button implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    static $gtype: GObject.GType<ToggleButton>;

    constructor(properties?: Partial<ToggleButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ToggleButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get active(): boolean;
    set active(val: boolean);
    get drawIndicator(): boolean;
    set drawIndicator(val: boolean);
    get inconsistent(): boolean;
    set inconsistent(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "toggled", callback: (_source: this) => void): number;
    connect_after(signal: "toggled", callback: (_source: this) => void): number;
    emit(signal: "toggled"): void;

    // Implemented Properties

    get actionName(): string;
    set actionName(val: string);
    get actionTarget(): GLib.Variant;
    set actionTarget(val: GLib.Variant);
    get relatedAction(): Action;
    set relatedAction(val: Action);
    get useActionAppearance(): boolean;
    set useActionAppearance(val: boolean);

    // Constructors

    static ["new"](): ToggleButton;
    static new_with_label(label: string): ToggleButton;
    static new_with_mnemonic(label: string): ToggleButton;

    // Members

    get_active(): boolean;
    get_inconsistent(): boolean;
    get_mode(): boolean;
    set_active(is_active: boolean): void;
    set_inconsistent(setting: boolean): void;
    set_mode(draw_indicator: boolean): void;
    toggled(): void;
    vfunc_toggled(): void;

    // Implemented Members

    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name?: string | null): void;
    set_action_target_value(target_value?: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name?: string | null): void;
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action?: Action | null): void;
    vfunc_sync_action_properties(action?: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
}
export module ToggleButtonAccessible {
    export interface ConstructorProperties extends ButtonAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class ToggleButtonAccessible extends ButtonAccessible implements Atk.Action, Atk.Component, Atk.Image {
    static $gtype: GObject.GType<ToggleButtonAccessible>;

    constructor(properties?: Partial<ToggleButtonAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ToggleButtonAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ToggleButtonAccessiblePrivate | any;

    // Implemented Members

    do_action(i: number): boolean;
    get_description(i: number): string | null;
    // Conflicted with Atk.Object.get_description
    get_description(...args: never[]): any;
    get_keybinding(i: number): string | null;
    get_localized_name(i: number): string | null;
    get_n_actions(): number;
    get_name(i: number): string | null;
    // Conflicted with Atk.Object.get_name
    get_name(...args: never[]): any;
    set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.set_description
    set_description(...args: never[]): any;
    vfunc_do_action(i: number): boolean;
    vfunc_get_description(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_description
    vfunc_get_description(...args: never[]): any;
    vfunc_get_keybinding(i: number): string | null;
    vfunc_get_localized_name(i: number): string | null;
    vfunc_get_n_actions(): number;
    vfunc_get_name(i: number): string | null;
    // Conflicted with Atk.Object.vfunc_get_name
    vfunc_get_name(...args: never[]): any;
    vfunc_set_description(i: number, desc: string): boolean;
    // Conflicted with Atk.Object.vfunc_set_description
    vfunc_set_description(...args: never[]): any;
    get_image_description(): string;
    get_image_locale(): string | null;
    get_image_position(coord_type: Atk.CoordType): [number, number];
    get_image_size(): [number, number];
    set_image_description(description: string): boolean;
    vfunc_get_image_description(): string;
    vfunc_get_image_locale(): string | null;
    vfunc_get_image_position(coord_type: Atk.CoordType): [number, number];
    vfunc_get_image_size(): [number, number];
    vfunc_set_image_description(description: string): boolean;
}
export module ToggleToolButton {
    export interface ConstructorProperties extends ToolButton.ConstructorProperties {
        [key: string]: any;
        active: boolean;
    }
}
export class ToggleToolButton extends ToolButton implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    static $gtype: GObject.GType<ToggleToolButton>;

    constructor(properties?: Partial<ToggleToolButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ToggleToolButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get active(): boolean;
    set active(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "toggled", callback: (_source: this) => void): number;
    connect_after(signal: "toggled", callback: (_source: this) => void): number;
    emit(signal: "toggled"): void;

    // Implemented Properties

    get actionName(): string;
    set actionName(val: string);
    get actionTarget(): GLib.Variant;
    set actionTarget(val: GLib.Variant);

    // Constructors

    static ["new"](): ToggleToolButton;
    static new_from_stock(stock_id: string): ToggleToolButton;

    // Members

    get_active(): boolean;
    set_active(is_active: boolean): void;
    vfunc_toggled(): void;

    // Implemented Members

    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name?: string | null): void;
    set_action_target_value(target_value?: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name?: string | null): void;
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
}
export module ToolButton {
    export interface ConstructorProperties extends ToolItem.ConstructorProperties {
        [key: string]: any;
        iconName: string;
        iconWidget: Widget;
        label: string;
        labelWidget: Widget;
        stockId: string;
        useUnderline: boolean;
    }
}
export class ToolButton extends ToolItem implements Atk.ImplementorIface, Actionable, Activatable, Buildable {
    static $gtype: GObject.GType<ToolButton>;

    constructor(properties?: Partial<ToolButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ToolButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get iconName(): string;
    set iconName(val: string);
    get iconWidget(): Widget;
    set iconWidget(val: Widget);
    get label(): string;
    set label(val: string);
    get labelWidget(): Widget;
    set labelWidget(val: Widget);
    get stockId(): string;
    set stockId(val: string);
    get useUnderline(): boolean;
    set useUnderline(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "clicked", callback: (_source: this) => void): number;
    connect_after(signal: "clicked", callback: (_source: this) => void): number;
    emit(signal: "clicked"): void;

    // Implemented Properties

    get actionName(): string;
    set actionName(val: string);
    get actionTarget(): GLib.Variant;
    set actionTarget(val: GLib.Variant);
    get relatedAction(): Action;
    set relatedAction(val: Action);
    get useActionAppearance(): boolean;
    set useActionAppearance(val: boolean);

    // Constructors

    static ["new"](icon_widget?: Widget | null, label?: string | null): ToolButton;
    // Conflicted with Gtk.ToolItem.new
    static ["new"](...args: never[]): any;
    static new_from_stock(stock_id: string): ToolButton;

    // Members

    get_icon_name(): string | null;
    get_icon_widget(): Widget | null;
    get_label(): string | null;
    get_label_widget(): Widget | null;
    get_stock_id(): string;
    get_use_underline(): boolean;
    set_icon_name(icon_name?: string | null): void;
    set_icon_widget(icon_widget?: Widget | null): void;
    set_label(label?: string | null): void;
    set_label_widget(label_widget?: Widget | null): void;
    set_stock_id(stock_id?: string | null): void;
    set_use_underline(use_underline: boolean): void;
    vfunc_clicked(): void;

    // Implemented Members

    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name?: string | null): void;
    set_action_target_value(target_value?: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name?: string | null): void;
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action?: Action | null): void;
    vfunc_sync_action_properties(action?: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
}
export module ToolItem {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        isImportant: boolean;
        visibleHorizontal: boolean;
        visibleVertical: boolean;
    }
}
export class ToolItem extends Bin implements Atk.ImplementorIface, Activatable, Buildable {
    static $gtype: GObject.GType<ToolItem>;

    constructor(properties?: Partial<ToolItem.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ToolItem.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get isImportant(): boolean;
    set isImportant(val: boolean);
    get visibleHorizontal(): boolean;
    set visibleHorizontal(val: boolean);
    get visibleVertical(): boolean;
    set visibleVertical(val: boolean);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "create-menu-proxy", callback: (_source: this) => boolean): number;
    connect_after(signal: "create-menu-proxy", callback: (_source: this) => boolean): number;
    emit(signal: "create-menu-proxy"): void;
    connect(signal: "toolbar-reconfigured", callback: (_source: this) => void): number;
    connect_after(signal: "toolbar-reconfigured", callback: (_source: this) => void): number;
    emit(signal: "toolbar-reconfigured"): void;

    // Implemented Properties

    get relatedAction(): Action;
    set relatedAction(val: Action);
    get useActionAppearance(): boolean;
    set useActionAppearance(val: boolean);

    // Constructors

    static ["new"](): ToolItem;

    // Members

    get_ellipsize_mode(): Pango.EllipsizeMode;
    get_expand(): boolean;
    get_homogeneous(): boolean;
    get_icon_size(): number;
    get_is_important(): boolean;
    get_orientation(): Orientation;
    get_proxy_menu_item(menu_item_id: string): Widget | null;
    get_relief_style(): ReliefStyle;
    get_text_alignment(): number;
    get_text_orientation(): Orientation;
    get_text_size_group(): SizeGroup;
    get_toolbar_style(): ToolbarStyle;
    get_use_drag_window(): boolean;
    get_visible_horizontal(): boolean;
    get_visible_vertical(): boolean;
    rebuild_menu(): void;
    retrieve_proxy_menu_item(): Widget;
    set_expand(expand: boolean): void;
    set_homogeneous(homogeneous: boolean): void;
    set_is_important(is_important: boolean): void;
    set_proxy_menu_item(menu_item_id: string, menu_item?: Widget | null): void;
    set_tooltip_markup(markup: string): void;
    // Conflicted with Gtk.Widget.set_tooltip_markup
    set_tooltip_markup(...args: never[]): any;
    set_tooltip_text(text: string): void;
    // Conflicted with Gtk.Widget.set_tooltip_text
    set_tooltip_text(...args: never[]): any;
    set_use_drag_window(use_drag_window: boolean): void;
    set_visible_horizontal(visible_horizontal: boolean): void;
    set_visible_vertical(visible_vertical: boolean): void;
    toolbar_reconfigured(): void;
    vfunc_create_menu_proxy(): boolean;
    vfunc_toolbar_reconfigured(): void;

    // Implemented Members

    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action?: Action | null): void;
    vfunc_sync_action_properties(action?: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
}
export module ToolItemGroup {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        collapsed: boolean;
        ellipsize: Pango.EllipsizeMode;
        headerRelief: ReliefStyle;
        label: string;
        labelWidget: Widget;
    }
}
export class ToolItemGroup extends Container implements Atk.ImplementorIface, Buildable, ToolShell {
    static $gtype: GObject.GType<ToolItemGroup>;

    constructor(properties?: Partial<ToolItemGroup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ToolItemGroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get collapsed(): boolean;
    set collapsed(val: boolean);
    get ellipsize(): Pango.EllipsizeMode;
    set ellipsize(val: Pango.EllipsizeMode);
    get headerRelief(): ReliefStyle;
    set headerRelief(val: ReliefStyle);
    get label(): string;
    set label(val: string);
    get labelWidget(): Widget;
    set labelWidget(val: Widget);

    // Fields
    priv: ToolItemGroupPrivate;

    // Constructors

    static ["new"](label: string): ToolItemGroup;

    // Members

    get_collapsed(): boolean;
    get_drop_item(x: number, y: number): ToolItem;
    get_ellipsize(): Pango.EllipsizeMode;
    get_header_relief(): ReliefStyle;
    get_item_position(item: ToolItem): number;
    get_label(): string;
    get_label_widget(): Widget;
    get_n_items(): number;
    get_nth_item(index: number): ToolItem;
    insert(item: ToolItem, position: number): void;
    set_collapsed(collapsed: boolean): void;
    set_ellipsize(ellipsize: Pango.EllipsizeMode): void;
    set_header_relief(style: ReliefStyle): void;
    set_item_position(item: ToolItem, position: number): void;
    set_label(label: string): void;
    set_label_widget(label_widget: Widget): void;

    // Implemented Members

    get_ellipsize_mode(): Pango.EllipsizeMode;
    get_icon_size(): number;
    get_orientation(): Orientation;
    get_relief_style(): ReliefStyle;
    get_style(): ToolbarStyle;
    // Conflicted with Gtk.Widget.get_style
    get_style(...args: never[]): any;
    get_text_alignment(): number;
    get_text_orientation(): Orientation;
    get_text_size_group(): SizeGroup;
    rebuild_menu(): void;
    vfunc_get_ellipsize_mode(): Pango.EllipsizeMode;
    vfunc_get_icon_size(): IconSize;
    vfunc_get_orientation(): Orientation;
    vfunc_get_relief_style(): ReliefStyle;
    vfunc_get_style(): ToolbarStyle;
    vfunc_get_text_alignment(): number;
    vfunc_get_text_orientation(): Orientation;
    vfunc_get_text_size_group(): SizeGroup;
    vfunc_rebuild_menu(): void;
}
export module ToolPalette {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        iconSize: IconSize;
        iconSizeSet: boolean;
        toolbarStyle: ToolbarStyle;
    }
}
export class ToolPalette extends Container implements Atk.ImplementorIface, Buildable, Orientable, Scrollable {
    static $gtype: GObject.GType<ToolPalette>;

    constructor(properties?: Partial<ToolPalette.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ToolPalette.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get iconSize(): IconSize;
    set iconSize(val: IconSize);
    get iconSizeSet(): boolean;
    set iconSizeSet(val: boolean);
    get toolbarStyle(): ToolbarStyle;
    set toolbarStyle(val: ToolbarStyle);

    // Fields
    priv: ToolPalettePrivate;

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);
    get hadjustment(): Adjustment;
    set hadjustment(val: Adjustment);
    get hscrollPolicy(): ScrollablePolicy;
    set hscrollPolicy(val: ScrollablePolicy);
    get vadjustment(): Adjustment;
    set vadjustment(val: Adjustment);
    get vscrollPolicy(): ScrollablePolicy;
    set vscrollPolicy(val: ScrollablePolicy);

    // Constructors

    static ["new"](): ToolPalette;

    // Members

    add_drag_dest(widget: Widget, flags: DestDefaults, targets: ToolPaletteDragTargets, actions: Gdk.DragAction): void;
    get_drag_item(selection: SelectionData): Widget;
    get_drop_group(x: number, y: number): ToolItemGroup | null;
    get_drop_item(x: number, y: number): ToolItem | null;
    get_exclusive(group: ToolItemGroup): boolean;
    get_expand(group: ToolItemGroup): boolean;
    get_group_position(group: ToolItemGroup): number;
    get_hadjustment(): Adjustment;
    get_icon_size(): number;
    get_style(): ToolbarStyle;
    // Conflicted with Gtk.Widget.get_style
    get_style(...args: never[]): any;
    get_vadjustment(): Adjustment;
    set_drag_source(targets: ToolPaletteDragTargets): void;
    set_exclusive(group: ToolItemGroup, exclusive: boolean): void;
    set_expand(group: ToolItemGroup, expand: boolean): void;
    set_group_position(group: ToolItemGroup, position: number): void;
    set_icon_size(icon_size: number): void;
    set_style(style: ToolbarStyle): void;
    // Conflicted with Gtk.Widget.set_style
    set_style(...args: never[]): any;
    unset_icon_size(): void;
    unset_style(): void;
    static get_drag_target_group(): TargetEntry;
    static get_drag_target_item(): TargetEntry;

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
    get_border(): [boolean, Border];
    get_hscroll_policy(): ScrollablePolicy;
    get_vscroll_policy(): ScrollablePolicy;
    set_hadjustment(hadjustment?: Adjustment | null): void;
    set_hscroll_policy(policy: ScrollablePolicy): void;
    set_vadjustment(vadjustment?: Adjustment | null): void;
    set_vscroll_policy(policy: ScrollablePolicy): void;
    vfunc_get_border(): [boolean, Border];
}
export module Toolbar {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        iconSize: IconSize;
        iconSizeSet: boolean;
        showArrow: boolean;
        toolbarStyle: ToolbarStyle;
    }
}
export class Toolbar extends Container implements Atk.ImplementorIface, Buildable, Orientable, ToolShell {
    static $gtype: GObject.GType<Toolbar>;

    constructor(properties?: Partial<Toolbar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Toolbar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get iconSize(): IconSize;
    set iconSize(val: IconSize);
    get iconSizeSet(): boolean;
    set iconSizeSet(val: boolean);
    get showArrow(): boolean;
    set showArrow(val: boolean);
    get toolbarStyle(): ToolbarStyle;
    set toolbarStyle(val: ToolbarStyle);

    // Fields
    container: Container;
    priv: ToolbarPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "focus-home-or-end", callback: (_source: this, focus_home: boolean) => boolean): number;
    connect_after(signal: "focus-home-or-end", callback: (_source: this, focus_home: boolean) => boolean): number;
    emit(signal: "focus-home-or-end", focus_home: boolean): void;
    connect(signal: "orientation-changed", callback: (_source: this, orientation: Orientation) => void): number;
    connect_after(signal: "orientation-changed", callback: (_source: this, orientation: Orientation) => void): number;
    emit(signal: "orientation-changed", orientation: Orientation): void;
    connect(
        signal: "popup-context-menu",
        callback: (_source: this, x: number, y: number, button: number) => boolean
    ): number;
    connect_after(
        signal: "popup-context-menu",
        callback: (_source: this, x: number, y: number, button: number) => boolean
    ): number;
    emit(signal: "popup-context-menu", x: number, y: number, button: number): void;
    connect(signal: "style-changed", callback: (_source: this, style: ToolbarStyle) => void): number;
    connect_after(signal: "style-changed", callback: (_source: this, style: ToolbarStyle) => void): number;
    emit(signal: "style-changed", style: ToolbarStyle): void;

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](): Toolbar;

    // Members

    get_drop_index(x: number, y: number): number;
    get_icon_size(): IconSize;
    // Conflicted with Gtk.ToolShell.get_icon_size
    get_icon_size(...args: never[]): any;
    get_item_index(item: ToolItem): number;
    get_n_items(): number;
    get_nth_item(n: number): ToolItem | null;
    get_relief_style(): ReliefStyle;
    get_show_arrow(): boolean;
    get_style(): ToolbarStyle;
    // Conflicted with Gtk.Widget.get_style
    get_style(...args: never[]): any;
    insert(item: ToolItem, pos: number): void;
    set_drop_highlight_item(tool_item: ToolItem | null, index_: number): void;
    set_icon_size(icon_size: IconSize): void;
    set_show_arrow(show_arrow: boolean): void;
    set_style(style: ToolbarStyle): void;
    // Conflicted with Gtk.Widget.set_style
    set_style(...args: never[]): any;
    unset_icon_size(): void;
    unset_style(): void;
    vfunc_orientation_changed(orientation: Orientation): void;
    vfunc_popup_context_menu(x: number, y: number, button_number: number): boolean;
    vfunc_style_changed(style: ToolbarStyle): void;

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
    get_ellipsize_mode(): Pango.EllipsizeMode;
    get_text_alignment(): number;
    get_text_orientation(): Orientation;
    get_text_size_group(): SizeGroup;
    rebuild_menu(): void;
    vfunc_get_ellipsize_mode(): Pango.EllipsizeMode;
    vfunc_get_icon_size(): IconSize;
    vfunc_get_orientation(): Orientation;
    vfunc_get_relief_style(): ReliefStyle;
    vfunc_get_style(): ToolbarStyle;
    vfunc_get_text_alignment(): number;
    vfunc_get_text_orientation(): Orientation;
    vfunc_get_text_size_group(): SizeGroup;
    vfunc_rebuild_menu(): void;
}
export module Tooltip {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Tooltip extends GObject.Object {
    static $gtype: GObject.GType<Tooltip>;

    constructor(properties?: Partial<Tooltip.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Tooltip.ConstructorProperties>, ...args: any[]): void;

    // Members

    set_custom(custom_widget?: Widget | null): void;
    set_icon(pixbuf?: GdkPixbuf.Pixbuf | null): void;
    set_icon_from_gicon(gicon: Gio.Icon | null, size: number): void;
    set_icon_from_icon_name(icon_name: string | null, size: number): void;
    set_icon_from_stock(stock_id: string | null, size: number): void;
    set_markup(markup?: string | null): void;
    set_text(text?: string | null): void;
    set_tip_area(rect: Gdk.Rectangle): void;
    static trigger_tooltip_query(display: Gdk.Display): void;
}
export module ToplevelAccessible {
    export interface ConstructorProperties extends Atk.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class ToplevelAccessible extends Atk.Object {
    static $gtype: GObject.GType<ToplevelAccessible>;

    constructor(properties?: Partial<ToplevelAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<ToplevelAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ToplevelAccessiblePrivate;

    // Members

    get_children(): Window[];
}
export module TreeModelFilter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        childModel: TreeModel;
        virtualRoot: TreePath;
    }
}
export class TreeModelFilter extends GObject.Object implements TreeDragSource, TreeModel {
    static $gtype: GObject.GType<TreeModelFilter>;

    constructor(properties?: Partial<TreeModelFilter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TreeModelFilter.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get childModel(): TreeModel;
    get virtualRoot(): TreePath;

    // Members

    clear_cache(): void;
    convert_child_iter_to_iter(child_iter: TreeIter): [boolean, TreeIter];
    convert_child_path_to_path(child_path: TreePath): TreePath | null;
    convert_iter_to_child_iter(filter_iter: TreeIter): TreeIter;
    convert_path_to_child_path(filter_path: TreePath): TreePath | null;
    get_model(): TreeModel;
    refilter(): void;
    set_modify_func(types: GObject.GType[], func: TreeModelFilterModifyFunc, destroy?: GLib.DestroyNotify | null): void;
    set_visible_column(column: number): void;
    set_visible_func(func: TreeModelFilterVisibleFunc, destroy?: GLib.DestroyNotify | null): void;
    vfunc_modify(child_model: TreeModel, iter: TreeIter, value: GObject.Value | any, column: number): void;
    vfunc_visible(child_model: TreeModel, iter: TreeIter): boolean;

    // Implemented Members

    drag_data_delete(path: TreePath): boolean;
    drag_data_get(path: TreePath, selection_data: SelectionData): boolean;
    row_draggable(path: TreePath): boolean;
    vfunc_drag_data_delete(path: TreePath): boolean;
    vfunc_drag_data_get(path: TreePath, selection_data: SelectionData): boolean;
    vfunc_row_draggable(path: TreePath): boolean;
    filter_new(root?: TreePath | null): TreeModel;
    foreach(func: TreeModelForeachFunc): void;
    get_column_type(index_: number): GObject.GType;
    get_flags(): TreeModelFlags;
    get_iter(path: TreePath): [boolean, TreeIter];
    get_iter_first(): [boolean, TreeIter];
    get_iter_from_string(path_string: string): [boolean, TreeIter];
    get_n_columns(): number;
    get_path(iter: TreeIter): TreePath;
    get_string_from_iter(iter: TreeIter): string;
    get_value(iter: TreeIter, column: number): unknown;
    iter_children(parent?: TreeIter | null): [boolean, TreeIter];
    iter_has_child(iter: TreeIter): boolean;
    iter_n_children(iter?: TreeIter | null): number;
    iter_next(iter: TreeIter): boolean;
    iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
    iter_parent(child: TreeIter): [boolean, TreeIter];
    iter_previous(iter: TreeIter): boolean;
    ref_node(iter: TreeIter): void;
    row_changed(path: TreePath, iter: TreeIter): void;
    row_deleted(path: TreePath): void;
    row_has_child_toggled(path: TreePath, iter: TreeIter): void;
    row_inserted(path: TreePath, iter: TreeIter): void;
    rows_reordered(path: TreePath, iter: TreeIter | null, new_order: number[]): void;
    unref_node(iter: TreeIter): void;
    vfunc_get_column_type(index_: number): GObject.GType;
    vfunc_get_flags(): TreeModelFlags;
    vfunc_get_iter(path: TreePath): [boolean, TreeIter];
    vfunc_get_n_columns(): number;
    vfunc_get_path(iter: TreeIter): TreePath;
    vfunc_get_value(iter: TreeIter, column: number): unknown;
    vfunc_iter_children(parent?: TreeIter | null): [boolean, TreeIter];
    vfunc_iter_has_child(iter: TreeIter): boolean;
    vfunc_iter_n_children(iter?: TreeIter | null): number;
    vfunc_iter_next(iter: TreeIter): boolean;
    vfunc_iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
    vfunc_iter_parent(child: TreeIter): [boolean, TreeIter];
    vfunc_iter_previous(iter: TreeIter): boolean;
    vfunc_ref_node(iter: TreeIter): void;
    vfunc_row_changed(path: TreePath, iter: TreeIter): void;
    vfunc_row_deleted(path: TreePath): void;
    vfunc_row_has_child_toggled(path: TreePath, iter: TreeIter): void;
    vfunc_row_inserted(path: TreePath, iter: TreeIter): void;
    vfunc_unref_node(iter: TreeIter): void;
}
export module TreeModelSort {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        model: TreeModel;
    }
}
export class TreeModelSort extends GObject.Object implements TreeDragSource, TreeModel, TreeSortable {
    static $gtype: GObject.GType<TreeModelSort>;

    constructor(properties?: Partial<TreeModelSort.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TreeModelSort.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get model(): TreeModel;

    // Constructors

    static new_with_model(child_model: TreeModel): TreeModelSort;

    // Members

    clear_cache(): void;
    convert_child_iter_to_iter(child_iter: TreeIter): [boolean, TreeIter];
    convert_child_path_to_path(child_path: TreePath): TreePath | null;
    convert_iter_to_child_iter(sorted_iter: TreeIter): TreeIter;
    convert_path_to_child_path(sorted_path: TreePath): TreePath | null;
    get_model(): TreeModel;
    iter_is_valid(iter: TreeIter): boolean;
    reset_default_sort_func(): void;

    // Implemented Members

    drag_data_delete(path: TreePath): boolean;
    drag_data_get(path: TreePath, selection_data: SelectionData): boolean;
    row_draggable(path: TreePath): boolean;
    vfunc_drag_data_delete(path: TreePath): boolean;
    vfunc_drag_data_get(path: TreePath, selection_data: SelectionData): boolean;
    vfunc_row_draggable(path: TreePath): boolean;
    filter_new(root?: TreePath | null): TreeModel;
    foreach(func: TreeModelForeachFunc): void;
    get_column_type(index_: number): GObject.GType;
    get_flags(): TreeModelFlags;
    get_iter(path: TreePath): [boolean, TreeIter];
    get_iter_first(): [boolean, TreeIter];
    get_iter_from_string(path_string: string): [boolean, TreeIter];
    get_n_columns(): number;
    get_path(iter: TreeIter): TreePath;
    get_string_from_iter(iter: TreeIter): string;
    get_value(iter: TreeIter, column: number): unknown;
    iter_children(parent?: TreeIter | null): [boolean, TreeIter];
    iter_has_child(iter: TreeIter): boolean;
    iter_n_children(iter?: TreeIter | null): number;
    iter_next(iter: TreeIter): boolean;
    iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
    iter_parent(child: TreeIter): [boolean, TreeIter];
    iter_previous(iter: TreeIter): boolean;
    ref_node(iter: TreeIter): void;
    row_changed(path: TreePath, iter: TreeIter): void;
    row_deleted(path: TreePath): void;
    row_has_child_toggled(path: TreePath, iter: TreeIter): void;
    row_inserted(path: TreePath, iter: TreeIter): void;
    rows_reordered(path: TreePath, iter: TreeIter | null, new_order: number[]): void;
    unref_node(iter: TreeIter): void;
    vfunc_get_column_type(index_: number): GObject.GType;
    vfunc_get_flags(): TreeModelFlags;
    vfunc_get_iter(path: TreePath): [boolean, TreeIter];
    vfunc_get_n_columns(): number;
    vfunc_get_path(iter: TreeIter): TreePath;
    vfunc_get_value(iter: TreeIter, column: number): unknown;
    vfunc_iter_children(parent?: TreeIter | null): [boolean, TreeIter];
    vfunc_iter_has_child(iter: TreeIter): boolean;
    vfunc_iter_n_children(iter?: TreeIter | null): number;
    vfunc_iter_next(iter: TreeIter): boolean;
    vfunc_iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
    vfunc_iter_parent(child: TreeIter): [boolean, TreeIter];
    vfunc_iter_previous(iter: TreeIter): boolean;
    vfunc_ref_node(iter: TreeIter): void;
    vfunc_row_changed(path: TreePath, iter: TreeIter): void;
    vfunc_row_deleted(path: TreePath): void;
    vfunc_row_has_child_toggled(path: TreePath, iter: TreeIter): void;
    vfunc_row_inserted(path: TreePath, iter: TreeIter): void;
    vfunc_unref_node(iter: TreeIter): void;
    get_sort_column_id(): [boolean, number, SortType];
    has_default_sort_func(): boolean;
    set_default_sort_func(sort_func: TreeIterCompareFunc, destroy?: GLib.DestroyNotify | null): void;
    set_sort_column_id(sort_column_id: number, order: SortType): void;
    set_sort_func(sort_column_id: number, sort_func: TreeIterCompareFunc, destroy?: GLib.DestroyNotify | null): void;
    sort_column_changed(): void;
    vfunc_get_sort_column_id(): [boolean, number, SortType];
    vfunc_has_default_sort_func(): boolean;
    vfunc_set_default_sort_func(sort_func: TreeIterCompareFunc, destroy?: GLib.DestroyNotify | null): void;
    vfunc_set_sort_column_id(sort_column_id: number, order: SortType): void;
    vfunc_set_sort_func(
        sort_column_id: number,
        sort_func: TreeIterCompareFunc,
        destroy?: GLib.DestroyNotify | null
    ): void;
    vfunc_sort_column_changed(): void;
}
export module TreeSelection {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        mode: SelectionMode;
    }
}
export class TreeSelection extends GObject.Object {
    static $gtype: GObject.GType<TreeSelection>;

    constructor(properties?: Partial<TreeSelection.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TreeSelection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get mode(): SelectionMode;
    set mode(val: SelectionMode);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "changed", callback: (_source: this) => void): number;
    connect_after(signal: "changed", callback: (_source: this) => void): number;
    emit(signal: "changed"): void;

    // Members

    count_selected_rows(): number;
    get_mode(): SelectionMode;
    get_selected(): [boolean, TreeModel | null, TreeIter | null];
    get_selected_rows(): [TreePath[], TreeModel | null];
    get_tree_view(): TreeView;
    iter_is_selected(iter: TreeIter): boolean;
    path_is_selected(path: TreePath): boolean;
    select_all(): void;
    select_iter(iter: TreeIter): void;
    select_path(path: TreePath): void;
    select_range(start_path: TreePath, end_path: TreePath): void;
    selected_foreach(func: TreeSelectionForeachFunc): void;
    set_mode(type: SelectionMode): void;
    set_select_function(func?: TreeSelectionFunc | null): void;
    unselect_all(): void;
    unselect_iter(iter: TreeIter): void;
    unselect_path(path: TreePath): void;
    unselect_range(start_path: TreePath, end_path: TreePath): void;
    vfunc_changed(): void;
}
export module TreeStore {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class TreeStore
    extends GObject.Object
    implements Buildable, TreeDragDest, TreeDragSource, TreeModel, TreeSortable
{
    static $gtype: GObject.GType<TreeStore>;

    constructor(properties?: Partial<TreeStore.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TreeStore.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: TreeStorePrivate;

    // Constructors

    static ["new"](types: GObject.GType[]): TreeStore;

    // Members

    append(parent?: TreeIter | null): TreeIter;
    clear(): void;
    insert(parent: TreeIter | null, position: number): TreeIter;
    insert_after(parent?: TreeIter | null, sibling?: TreeIter | null): TreeIter;
    insert_before(parent?: TreeIter | null, sibling?: TreeIter | null): TreeIter;
    insert_with_values(
        parent: TreeIter | null,
        position: number,
        columns: number[],
        values: GObject.Value[]
    ): TreeIter | null;
    is_ancestor(iter: TreeIter, descendant: TreeIter): boolean;
    iter_depth(iter: TreeIter): number;
    iter_is_valid(iter: TreeIter): boolean;
    move_after(iter: TreeIter, position?: TreeIter | null): void;
    move_before(iter: TreeIter, position?: TreeIter | null): void;
    prepend(parent?: TreeIter | null): TreeIter;
    remove(iter: TreeIter): boolean;
    set_column_types(types: GObject.GType[]): void;
    set_value(iter: TreeIter, column: number, value: GObject.Value | any): void;
    set(iter: TreeIter, columns: number[], values: GObject.Value[]): void;
    // Conflicted with GObject.Object.set
    set(...args: never[]): any;
    swap(a: TreeIter, b: TreeIter): void;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
    drag_data_received(dest: TreePath, selection_data: SelectionData): boolean;
    row_drop_possible(dest_path: TreePath, selection_data: SelectionData): boolean;
    vfunc_drag_data_received(dest: TreePath, selection_data: SelectionData): boolean;
    vfunc_row_drop_possible(dest_path: TreePath, selection_data: SelectionData): boolean;
    drag_data_delete(path: TreePath): boolean;
    drag_data_get(path: TreePath, selection_data: SelectionData): boolean;
    row_draggable(path: TreePath): boolean;
    vfunc_drag_data_delete(path: TreePath): boolean;
    vfunc_drag_data_get(path: TreePath, selection_data: SelectionData): boolean;
    vfunc_row_draggable(path: TreePath): boolean;
    filter_new(root?: TreePath | null): TreeModel;
    foreach(func: TreeModelForeachFunc): void;
    get_column_type(index_: number): GObject.GType;
    get_flags(): TreeModelFlags;
    get_iter(path: TreePath): [boolean, TreeIter];
    get_iter_first(): [boolean, TreeIter];
    get_iter_from_string(path_string: string): [boolean, TreeIter];
    get_n_columns(): number;
    get_path(iter: TreeIter): TreePath;
    get_string_from_iter(iter: TreeIter): string;
    get_value(iter: TreeIter, column: number): unknown;
    iter_children(parent?: TreeIter | null): [boolean, TreeIter];
    iter_has_child(iter: TreeIter): boolean;
    iter_n_children(iter?: TreeIter | null): number;
    iter_next(iter: TreeIter): boolean;
    iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
    iter_parent(child: TreeIter): [boolean, TreeIter];
    iter_previous(iter: TreeIter): boolean;
    ref_node(iter: TreeIter): void;
    row_changed(path: TreePath, iter: TreeIter): void;
    row_deleted(path: TreePath): void;
    row_has_child_toggled(path: TreePath, iter: TreeIter): void;
    row_inserted(path: TreePath, iter: TreeIter): void;
    rows_reordered(path: TreePath, iter: TreeIter | null, new_order: number[]): void;
    unref_node(iter: TreeIter): void;
    vfunc_get_column_type(index_: number): GObject.GType;
    vfunc_get_flags(): TreeModelFlags;
    vfunc_get_iter(path: TreePath): [boolean, TreeIter];
    vfunc_get_n_columns(): number;
    vfunc_get_path(iter: TreeIter): TreePath;
    vfunc_get_value(iter: TreeIter, column: number): unknown;
    vfunc_iter_children(parent?: TreeIter | null): [boolean, TreeIter];
    vfunc_iter_has_child(iter: TreeIter): boolean;
    vfunc_iter_n_children(iter?: TreeIter | null): number;
    vfunc_iter_next(iter: TreeIter): boolean;
    vfunc_iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
    vfunc_iter_parent(child: TreeIter): [boolean, TreeIter];
    vfunc_iter_previous(iter: TreeIter): boolean;
    vfunc_ref_node(iter: TreeIter): void;
    vfunc_row_changed(path: TreePath, iter: TreeIter): void;
    vfunc_row_deleted(path: TreePath): void;
    vfunc_row_has_child_toggled(path: TreePath, iter: TreeIter): void;
    vfunc_row_inserted(path: TreePath, iter: TreeIter): void;
    vfunc_unref_node(iter: TreeIter): void;
    get_sort_column_id(): [boolean, number, SortType];
    has_default_sort_func(): boolean;
    set_default_sort_func(sort_func: TreeIterCompareFunc, destroy?: GLib.DestroyNotify | null): void;
    set_sort_column_id(sort_column_id: number, order: SortType): void;
    set_sort_func(sort_column_id: number, sort_func: TreeIterCompareFunc, destroy?: GLib.DestroyNotify | null): void;
    sort_column_changed(): void;
    vfunc_get_sort_column_id(): [boolean, number, SortType];
    vfunc_has_default_sort_func(): boolean;
    vfunc_set_default_sort_func(sort_func: TreeIterCompareFunc, destroy?: GLib.DestroyNotify | null): void;
    vfunc_set_sort_column_id(sort_column_id: number, order: SortType): void;
    vfunc_set_sort_func(
        sort_column_id: number,
        sort_func: TreeIterCompareFunc,
        destroy?: GLib.DestroyNotify | null
    ): void;
    vfunc_sort_column_changed(): void;
}
export module TreeView {
    export interface ConstructorProperties extends Container.ConstructorProperties {
        [key: string]: any;
        activateOnSingleClick: boolean;
        enableGridLines: TreeViewGridLines;
        enableSearch: boolean;
        enableTreeLines: boolean;
        expanderColumn: TreeViewColumn;
        fixedHeightMode: boolean;
        headersClickable: boolean;
        headersVisible: boolean;
        hoverExpand: boolean;
        hoverSelection: boolean;
        levelIndentation: number;
        model: TreeModel;
        reorderable: boolean;
        rubberBanding: boolean;
        rulesHint: boolean;
        searchColumn: number;
        showExpanders: boolean;
        tooltipColumn: number;
    }
}
export class TreeView extends Container implements Atk.ImplementorIface, Buildable, Scrollable {
    static $gtype: GObject.GType<TreeView>;

    constructor(properties?: Partial<TreeView.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TreeView.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get activateOnSingleClick(): boolean;
    set activateOnSingleClick(val: boolean);
    get enableGridLines(): TreeViewGridLines;
    set enableGridLines(val: TreeViewGridLines);
    get enableSearch(): boolean;
    set enableSearch(val: boolean);
    get enableTreeLines(): boolean;
    set enableTreeLines(val: boolean);
    get expanderColumn(): TreeViewColumn;
    set expanderColumn(val: TreeViewColumn);
    get fixedHeightMode(): boolean;
    set fixedHeightMode(val: boolean);
    get headersClickable(): boolean;
    set headersClickable(val: boolean);
    get headersVisible(): boolean;
    set headersVisible(val: boolean);
    get hoverExpand(): boolean;
    set hoverExpand(val: boolean);
    get hoverSelection(): boolean;
    set hoverSelection(val: boolean);
    get levelIndentation(): number;
    set levelIndentation(val: number);
    get model(): TreeModel;
    set model(val: TreeModel);
    get reorderable(): boolean;
    set reorderable(val: boolean);
    get rubberBanding(): boolean;
    set rubberBanding(val: boolean);
    get rulesHint(): boolean;
    set rulesHint(val: boolean);
    get searchColumn(): number;
    set searchColumn(val: number);
    get showExpanders(): boolean;
    set showExpanders(val: boolean);
    get tooltipColumn(): number;
    set tooltipColumn(val: number);

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "columns-changed", callback: (_source: this) => void): number;
    connect_after(signal: "columns-changed", callback: (_source: this) => void): number;
    emit(signal: "columns-changed"): void;
    connect(signal: "cursor-changed", callback: (_source: this) => void): number;
    connect_after(signal: "cursor-changed", callback: (_source: this) => void): number;
    emit(signal: "cursor-changed"): void;
    connect(
        signal: "expand-collapse-cursor-row",
        callback: (_source: this, object: boolean, p0: boolean, p1: boolean) => boolean
    ): number;
    connect_after(
        signal: "expand-collapse-cursor-row",
        callback: (_source: this, object: boolean, p0: boolean, p1: boolean) => boolean
    ): number;
    emit(signal: "expand-collapse-cursor-row", object: boolean, p0: boolean, p1: boolean): void;
    connect(signal: "move-cursor", callback: (_source: this, step: MovementStep, direction: number) => boolean): number;
    connect_after(
        signal: "move-cursor",
        callback: (_source: this, step: MovementStep, direction: number) => boolean
    ): number;
    emit(signal: "move-cursor", step: MovementStep, direction: number): void;
    connect(signal: "row-activated", callback: (_source: this, path: TreePath, column: TreeViewColumn) => void): number;
    connect_after(
        signal: "row-activated",
        callback: (_source: this, path: TreePath, column: TreeViewColumn) => void
    ): number;
    emit(signal: "row-activated", path: TreePath, column: TreeViewColumn): void;
    connect(signal: "row-collapsed", callback: (_source: this, iter: TreeIter, path: TreePath) => void): number;
    connect_after(signal: "row-collapsed", callback: (_source: this, iter: TreeIter, path: TreePath) => void): number;
    emit(signal: "row-collapsed", iter: TreeIter, path: TreePath): void;
    connect(signal: "row-expanded", callback: (_source: this, iter: TreeIter, path: TreePath) => void): number;
    connect_after(signal: "row-expanded", callback: (_source: this, iter: TreeIter, path: TreePath) => void): number;
    emit(signal: "row-expanded", iter: TreeIter, path: TreePath): void;
    connect(signal: "select-all", callback: (_source: this) => boolean): number;
    connect_after(signal: "select-all", callback: (_source: this) => boolean): number;
    emit(signal: "select-all"): void;
    connect(signal: "select-cursor-parent", callback: (_source: this) => boolean): number;
    connect_after(signal: "select-cursor-parent", callback: (_source: this) => boolean): number;
    emit(signal: "select-cursor-parent"): void;
    connect(signal: "select-cursor-row", callback: (_source: this, object: boolean) => boolean): number;
    connect_after(signal: "select-cursor-row", callback: (_source: this, object: boolean) => boolean): number;
    emit(signal: "select-cursor-row", object: boolean): void;
    connect(signal: "start-interactive-search", callback: (_source: this) => boolean): number;
    connect_after(signal: "start-interactive-search", callback: (_source: this) => boolean): number;
    emit(signal: "start-interactive-search"): void;
    connect(signal: "test-collapse-row", callback: (_source: this, iter: TreeIter, path: TreePath) => boolean): number;
    connect_after(
        signal: "test-collapse-row",
        callback: (_source: this, iter: TreeIter, path: TreePath) => boolean
    ): number;
    emit(signal: "test-collapse-row", iter: TreeIter, path: TreePath): void;
    connect(signal: "test-expand-row", callback: (_source: this, iter: TreeIter, path: TreePath) => boolean): number;
    connect_after(
        signal: "test-expand-row",
        callback: (_source: this, iter: TreeIter, path: TreePath) => boolean
    ): number;
    emit(signal: "test-expand-row", iter: TreeIter, path: TreePath): void;
    connect(signal: "toggle-cursor-row", callback: (_source: this) => boolean): number;
    connect_after(signal: "toggle-cursor-row", callback: (_source: this) => boolean): number;
    emit(signal: "toggle-cursor-row"): void;
    connect(signal: "unselect-all", callback: (_source: this) => boolean): number;
    connect_after(signal: "unselect-all", callback: (_source: this) => boolean): number;
    emit(signal: "unselect-all"): void;

    // Implemented Properties

    get hadjustment(): Adjustment;
    set hadjustment(val: Adjustment);
    get hscrollPolicy(): ScrollablePolicy;
    set hscrollPolicy(val: ScrollablePolicy);
    get vadjustment(): Adjustment;
    set vadjustment(val: Adjustment);
    get vscrollPolicy(): ScrollablePolicy;
    set vscrollPolicy(val: ScrollablePolicy);

    // Constructors

    static ["new"](): TreeView;
    static new_with_model(model: TreeModel): TreeView;

    // Members

    append_column(column: TreeViewColumn): number;
    collapse_all(): void;
    collapse_row(path: TreePath): boolean;
    columns_autosize(): void;
    convert_bin_window_to_tree_coords(bx: number, by: number): [number, number];
    convert_bin_window_to_widget_coords(bx: number, by: number): [number, number];
    convert_tree_to_bin_window_coords(tx: number, ty: number): [number, number];
    convert_tree_to_widget_coords(tx: number, ty: number): [number, number];
    convert_widget_to_bin_window_coords(wx: number, wy: number): [number, number];
    convert_widget_to_tree_coords(wx: number, wy: number): [number, number];
    create_row_drag_icon(path: TreePath): cairo.Surface;
    enable_model_drag_dest(targets: TargetEntry[], actions: Gdk.DragAction): void;
    enable_model_drag_source(
        start_button_mask: Gdk.ModifierType,
        targets: TargetEntry[],
        actions: Gdk.DragAction
    ): void;
    expand_all(): void;
    expand_row(path: TreePath, open_all: boolean): boolean;
    expand_to_path(path: TreePath): void;
    get_activate_on_single_click(): boolean;
    get_background_area(path: TreePath | null, column: TreeViewColumn | null): Gdk.Rectangle;
    get_bin_window(): Gdk.Window | null;
    get_cell_area(path: TreePath | null, column: TreeViewColumn | null): Gdk.Rectangle;
    get_column(n: number): TreeViewColumn | null;
    get_columns(): TreeViewColumn[];
    get_cursor(): [TreePath | null, TreeViewColumn | null];
    get_dest_row_at_pos(drag_x: number, drag_y: number): [boolean, TreePath | null, TreeViewDropPosition | null];
    get_drag_dest_row(): [TreePath | null, TreeViewDropPosition | null];
    get_enable_search(): boolean;
    get_enable_tree_lines(): boolean;
    get_expander_column(): TreeViewColumn;
    get_fixed_height_mode(): boolean;
    get_grid_lines(): TreeViewGridLines;
    get_hadjustment(): Adjustment;
    get_headers_clickable(): boolean;
    get_headers_visible(): boolean;
    get_hover_expand(): boolean;
    get_hover_selection(): boolean;
    get_level_indentation(): number;
    get_model(): TreeModel | null;
    get_n_columns(): number;
    get_path_at_pos(x: number, y: number): [boolean, TreePath | null, TreeViewColumn | null, number, number];
    get_reorderable(): boolean;
    get_rubber_banding(): boolean;
    get_rules_hint(): boolean;
    get_search_column(): number;
    get_search_entry(): Entry;
    get_selection(): TreeSelection;
    get_show_expanders(): boolean;
    get_tooltip_column(): number;
    get_tooltip_context(
        x: number,
        y: number,
        keyboard_tip: boolean
    ): [boolean, number, number, TreeModel | null, TreePath | null, TreeIter | null];
    get_vadjustment(): Adjustment;
    get_visible_range(): [boolean, TreePath | null, TreePath | null];
    get_visible_rect(): Gdk.Rectangle;
    insert_column(column: TreeViewColumn, position: number): number;
    insert_column_with_data_func(position: number, title: string, cell: CellRenderer, func: TreeCellDataFunc): number;
    is_blank_at_pos(x: number, y: number): [boolean, TreePath | null, TreeViewColumn | null, number, number];
    is_rubber_banding_active(): boolean;
    map_expanded_rows(func: TreeViewMappingFunc): void;
    move_column_after(column: TreeViewColumn, base_column?: TreeViewColumn | null): void;
    remove_column(column: TreeViewColumn): number;
    row_activated(path: TreePath, column: TreeViewColumn): void;
    row_expanded(path: TreePath): boolean;
    scroll_to_cell(
        path: TreePath | null,
        column: TreeViewColumn | null,
        use_align: boolean,
        row_align: number,
        col_align: number
    ): void;
    scroll_to_point(tree_x: number, tree_y: number): void;
    set_activate_on_single_click(single: boolean): void;
    set_column_drag_function(func?: TreeViewColumnDropFunc | null, destroy?: GLib.DestroyNotify | null): void;
    set_cursor(path: TreePath, focus_column: TreeViewColumn | null, start_editing: boolean): void;
    set_cursor_on_cell(
        path: TreePath,
        focus_column: TreeViewColumn | null,
        focus_cell: CellRenderer | null,
        start_editing: boolean
    ): void;
    set_destroy_count_func(func?: TreeDestroyCountFunc | null, destroy?: GLib.DestroyNotify | null): void;
    set_drag_dest_row(path: TreePath | null, pos: TreeViewDropPosition): void;
    set_enable_search(enable_search: boolean): void;
    set_enable_tree_lines(enabled: boolean): void;
    set_expander_column(column?: TreeViewColumn | null): void;
    set_fixed_height_mode(enable: boolean): void;
    set_grid_lines(grid_lines: TreeViewGridLines): void;
    set_hadjustment(adjustment?: Adjustment | null): void;
    set_headers_clickable(setting: boolean): void;
    set_headers_visible(headers_visible: boolean): void;
    set_hover_expand(expand: boolean): void;
    set_hover_selection(hover: boolean): void;
    set_level_indentation(indentation: number): void;
    set_model(model?: TreeModel | null): void;
    set_reorderable(reorderable: boolean): void;
    set_row_separator_func(func?: TreeViewRowSeparatorFunc | null, destroy?: GLib.DestroyNotify | null): void;
    set_rubber_banding(enable: boolean): void;
    set_rules_hint(setting: boolean): void;
    set_search_column(column: number): void;
    set_search_entry(entry?: Entry | null): void;
    set_search_equal_func(search_equal_func: TreeViewSearchEqualFunc, search_destroy?: GLib.DestroyNotify | null): void;
    set_search_position_func(func?: TreeViewSearchPositionFunc | null, destroy?: GLib.DestroyNotify | null): void;
    set_show_expanders(enabled: boolean): void;
    set_tooltip_cell(
        tooltip: Tooltip,
        path?: TreePath | null,
        column?: TreeViewColumn | null,
        cell?: CellRenderer | null
    ): void;
    set_tooltip_column(column: number): void;
    set_tooltip_row(tooltip: Tooltip, path: TreePath): void;
    set_vadjustment(adjustment?: Adjustment | null): void;
    unset_rows_drag_dest(): void;
    unset_rows_drag_source(): void;
    vfunc_columns_changed(): void;
    vfunc_cursor_changed(): void;
    vfunc_expand_collapse_cursor_row(logical: boolean, expand: boolean, open_all: boolean): boolean;
    vfunc_move_cursor(step: MovementStep, count: number): boolean;
    vfunc_row_activated(path: TreePath, column: TreeViewColumn): void;
    vfunc_row_collapsed(iter: TreeIter, path: TreePath): void;
    vfunc_row_expanded(iter: TreeIter, path: TreePath): void;
    vfunc_select_all(): boolean;
    vfunc_select_cursor_parent(): boolean;
    vfunc_select_cursor_row(start_editing: boolean): boolean;
    vfunc_start_interactive_search(): boolean;
    vfunc_test_collapse_row(iter: TreeIter, path: TreePath): boolean;
    vfunc_test_expand_row(iter: TreeIter, path: TreePath): boolean;
    vfunc_toggle_cursor_row(): boolean;
    vfunc_unselect_all(): boolean;

    // Implemented Members

    get_border(): [boolean, Border];
    get_hscroll_policy(): ScrollablePolicy;
    get_vscroll_policy(): ScrollablePolicy;
    set_hscroll_policy(policy: ScrollablePolicy): void;
    set_vscroll_policy(policy: ScrollablePolicy): void;
    vfunc_get_border(): [boolean, Border];
}
export module TreeViewAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class TreeViewAccessible
    extends ContainerAccessible
    implements Atk.Component, Atk.Selection, Atk.Table, CellAccessibleParent
{
    static $gtype: GObject.GType<TreeViewAccessible>;

    constructor(properties?: Partial<TreeViewAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TreeViewAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: TreeViewAccessiblePrivate | any;

    // Implemented Members

    add_selection(i: number): boolean;
    clear_selection(): boolean;
    get_selection_count(): number;
    is_child_selected(i: number): boolean;
    ref_selection(i: number): Atk.Object | null;
    remove_selection(i: number): boolean;
    select_all_selection(): boolean;
    vfunc_add_selection(i: number): boolean;
    vfunc_clear_selection(): boolean;
    vfunc_get_selection_count(): number;
    vfunc_is_child_selected(i: number): boolean;
    vfunc_ref_selection(i: number): Atk.Object | null;
    vfunc_remove_selection(i: number): boolean;
    vfunc_select_all_selection(): boolean;
    vfunc_selection_changed(): void;
    add_column_selection(column: number): boolean;
    add_row_selection(row: number): boolean;
    get_caption(): Atk.Object | null;
    get_column_at_index(index_: number): number;
    get_column_description(column: number): string;
    get_column_extent_at(row: number, column: number): number;
    get_column_header(column: number): Atk.Object | null;
    get_index_at(row: number, column: number): number;
    get_n_columns(): number;
    get_n_rows(): number;
    get_row_at_index(index_: number): number;
    get_row_description(row: number): string | null;
    get_row_extent_at(row: number, column: number): number;
    get_row_header(row: number): Atk.Object | null;
    get_selected_columns(selected: number): number;
    get_selected_rows(selected: number): number;
    get_summary(): Atk.Object;
    is_column_selected(column: number): boolean;
    is_row_selected(row: number): boolean;
    is_selected(row: number, column: number): boolean;
    ref_at(row: number, column: number): Atk.Object;
    remove_column_selection(column: number): boolean;
    remove_row_selection(row: number): boolean;
    set_caption(caption: Atk.Object): void;
    set_column_description(column: number, description: string): void;
    set_column_header(column: number, header: Atk.Object): void;
    set_row_description(row: number, description: string): void;
    set_row_header(row: number, header: Atk.Object): void;
    set_summary(accessible: Atk.Object): void;
    vfunc_add_column_selection(column: number): boolean;
    vfunc_add_row_selection(row: number): boolean;
    vfunc_column_deleted(column: number, num_deleted: number): void;
    vfunc_column_inserted(column: number, num_inserted: number): void;
    vfunc_column_reordered(): void;
    vfunc_get_caption(): Atk.Object | null;
    vfunc_get_column_at_index(index_: number): number;
    vfunc_get_column_description(column: number): string;
    vfunc_get_column_extent_at(row: number, column: number): number;
    vfunc_get_column_header(column: number): Atk.Object | null;
    vfunc_get_index_at(row: number, column: number): number;
    vfunc_get_n_columns(): number;
    vfunc_get_n_rows(): number;
    vfunc_get_row_at_index(index_: number): number;
    vfunc_get_row_description(row: number): string | null;
    vfunc_get_row_extent_at(row: number, column: number): number;
    vfunc_get_row_header(row: number): Atk.Object | null;
    vfunc_get_selected_columns(selected: number): number;
    vfunc_get_selected_rows(selected: number): number;
    vfunc_get_summary(): Atk.Object;
    vfunc_is_column_selected(column: number): boolean;
    vfunc_is_row_selected(row: number): boolean;
    vfunc_is_selected(row: number, column: number): boolean;
    vfunc_model_changed(): void;
    vfunc_ref_at(row: number, column: number): Atk.Object;
    vfunc_remove_column_selection(column: number): boolean;
    vfunc_remove_row_selection(row: number): boolean;
    vfunc_row_deleted(row: number, num_deleted: number): void;
    vfunc_row_inserted(row: number, num_inserted: number): void;
    vfunc_row_reordered(): void;
    vfunc_set_caption(caption: Atk.Object): void;
    vfunc_set_column_description(column: number, description: string): void;
    vfunc_set_column_header(column: number, header: Atk.Object): void;
    vfunc_set_row_description(row: number, description: string): void;
    vfunc_set_row_header(row: number, header: Atk.Object): void;
    vfunc_set_summary(accessible: Atk.Object): void;
    activate(cell: CellAccessible): void;
    edit(cell: CellAccessible): void;
    expand_collapse(cell: CellAccessible): void;
    get_cell_area(cell: CellAccessible): Gdk.Rectangle;
    get_cell_extents(cell: CellAccessible, coord_type: Atk.CoordType): [number, number, number, number];
    get_cell_position(cell: CellAccessible): [number, number];
    get_child_index(cell: CellAccessible): number;
    get_column_header_cells(cell: CellAccessible): Atk.Object[];
    get_renderer_state(cell: CellAccessible): CellRendererState;
    get_row_header_cells(cell: CellAccessible): Atk.Object[];
    grab_focus(cell: CellAccessible): boolean;
    // Conflicted with Atk.Component.grab_focus
    grab_focus(...args: never[]): any;
    update_relationset(cell: CellAccessible, relationset: Atk.RelationSet): void;
    vfunc_activate(cell: CellAccessible): void;
    vfunc_edit(cell: CellAccessible): void;
    vfunc_expand_collapse(cell: CellAccessible): void;
    vfunc_get_cell_area(cell: CellAccessible): Gdk.Rectangle;
    vfunc_get_cell_extents(cell: CellAccessible, coord_type: Atk.CoordType): [number, number, number, number];
    vfunc_get_cell_position(cell: CellAccessible): [number, number];
    vfunc_get_child_index(cell: CellAccessible): number;
    vfunc_get_column_header_cells(cell: CellAccessible): Atk.Object[];
    vfunc_get_renderer_state(cell: CellAccessible): CellRendererState;
    vfunc_get_row_header_cells(cell: CellAccessible): Atk.Object[];
    vfunc_grab_focus(cell: CellAccessible): boolean;
    // Conflicted with Atk.Component.vfunc_grab_focus
    vfunc_grab_focus(...args: never[]): any;
    vfunc_update_relationset(cell: CellAccessible, relationset: Atk.RelationSet): void;
}
export module TreeViewColumn {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
        alignment: number;
        cellArea: CellArea;
        clickable: boolean;
        expand: boolean;
        fixedWidth: number;
        maxWidth: number;
        minWidth: number;
        reorderable: boolean;
        resizable: boolean;
        sizing: TreeViewColumnSizing;
        sortColumnId: number;
        sortIndicator: boolean;
        sortOrder: SortType;
        spacing: number;
        title: string;
        visible: boolean;
        widget: Widget;
        width: number;
        xOffset: number;
    }
}
export class TreeViewColumn extends GObject.InitiallyUnowned implements Buildable, CellLayout {
    static $gtype: GObject.GType<TreeViewColumn>;

    constructor(properties?: Partial<TreeViewColumn.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TreeViewColumn.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get alignment(): number;
    set alignment(val: number);
    get cellArea(): CellArea;
    get clickable(): boolean;
    set clickable(val: boolean);
    get expand(): boolean;
    set expand(val: boolean);
    get fixedWidth(): number;
    set fixedWidth(val: number);
    get maxWidth(): number;
    set maxWidth(val: number);
    get minWidth(): number;
    set minWidth(val: number);
    get reorderable(): boolean;
    set reorderable(val: boolean);
    get resizable(): boolean;
    set resizable(val: boolean);
    get sizing(): TreeViewColumnSizing;
    set sizing(val: TreeViewColumnSizing);
    get sortColumnId(): number;
    set sortColumnId(val: number);
    get sortIndicator(): boolean;
    set sortIndicator(val: boolean);
    get sortOrder(): SortType;
    set sortOrder(val: SortType);
    get spacing(): number;
    set spacing(val: number);
    get title(): string;
    set title(val: string);
    get visible(): boolean;
    set visible(val: boolean);
    get widget(): Widget;
    set widget(val: Widget);
    get width(): number;
    get xOffset(): number;

    // Fields
    priv: TreeViewColumnPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "clicked", callback: (_source: this) => void): number;
    connect_after(signal: "clicked", callback: (_source: this) => void): number;
    emit(signal: "clicked"): void;

    // Constructors

    static ["new"](): TreeViewColumn;
    static new_with_area(area: CellArea): TreeViewColumn;

    // Members

    add_attribute(cell_renderer: CellRenderer, attribute: string, column: number): void;
    cell_get_position(cell_renderer: CellRenderer): [boolean, number, number];
    cell_get_size(cell_area: Gdk.Rectangle | null): [number, number, number, number];
    cell_is_visible(): boolean;
    cell_set_cell_data(tree_model: TreeModel, iter: TreeIter, is_expander: boolean, is_expanded: boolean): void;
    clear(): void;
    clear_attributes(cell_renderer: CellRenderer): void;
    clicked(): void;
    focus_cell(cell: CellRenderer): void;
    get_alignment(): number;
    get_button(): Widget;
    get_clickable(): boolean;
    get_expand(): boolean;
    get_fixed_width(): number;
    get_max_width(): number;
    get_min_width(): number;
    get_reorderable(): boolean;
    get_resizable(): boolean;
    get_sizing(): TreeViewColumnSizing;
    get_sort_column_id(): number;
    get_sort_indicator(): boolean;
    get_sort_order(): SortType;
    get_spacing(): number;
    get_title(): string;
    get_tree_view(): Widget | null;
    get_visible(): boolean;
    get_widget(): Widget | null;
    get_width(): number;
    get_x_offset(): number;
    pack_end(cell: CellRenderer, expand: boolean): void;
    pack_start(cell: CellRenderer, expand: boolean): void;
    queue_resize(): void;
    set_alignment(xalign: number): void;
    set_cell_data_func(cell_renderer: CellRenderer, func?: TreeCellDataFunc | null): void;
    // Conflicted with Gtk.CellLayout.set_cell_data_func
    set_cell_data_func(...args: never[]): any;
    set_clickable(clickable: boolean): void;
    set_expand(expand: boolean): void;
    set_fixed_width(fixed_width: number): void;
    set_max_width(max_width: number): void;
    set_min_width(min_width: number): void;
    set_reorderable(reorderable: boolean): void;
    set_resizable(resizable: boolean): void;
    set_sizing(type: TreeViewColumnSizing): void;
    set_sort_column_id(sort_column_id: number): void;
    set_sort_indicator(setting: boolean): void;
    set_sort_order(order: SortType): void;
    set_spacing(spacing: number): void;
    set_title(title: string): void;
    set_visible(visible: boolean): void;
    set_widget(widget?: Widget | null): void;
    vfunc_clicked(): void;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
    get_area(): CellArea | null;
    get_cells(): CellRenderer[];
    reorder(cell: CellRenderer, position: number): void;
    vfunc_add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    vfunc_clear(): void;
    vfunc_clear_attributes(cell: CellRenderer): void;
    vfunc_get_area(): CellArea | null;
    vfunc_get_cells(): CellRenderer[];
    vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
    vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
    vfunc_reorder(cell: CellRenderer, position: number): void;
    vfunc_set_cell_data_func(cell: CellRenderer, func?: CellLayoutDataFunc | null): void;
}
export module UIManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        addTearoffs: boolean;
        ui: string;
    }
}
export class UIManager extends GObject.Object implements Buildable {
    static $gtype: GObject.GType<UIManager>;

    constructor(properties?: Partial<UIManager.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<UIManager.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get addTearoffs(): boolean;
    set addTearoffs(val: boolean);
    get ui(): string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "actions-changed", callback: (_source: this) => void): number;
    connect_after(signal: "actions-changed", callback: (_source: this) => void): number;
    emit(signal: "actions-changed"): void;
    connect(signal: "add-widget", callback: (_source: this, widget: Widget) => void): number;
    connect_after(signal: "add-widget", callback: (_source: this, widget: Widget) => void): number;
    emit(signal: "add-widget", widget: Widget): void;
    connect(signal: "connect-proxy", callback: (_source: this, action: Action, proxy: Widget) => void): number;
    connect_after(signal: "connect-proxy", callback: (_source: this, action: Action, proxy: Widget) => void): number;
    emit(signal: "connect-proxy", action: Action, proxy: Widget): void;
    connect(signal: "disconnect-proxy", callback: (_source: this, action: Action, proxy: Widget) => void): number;
    connect_after(signal: "disconnect-proxy", callback: (_source: this, action: Action, proxy: Widget) => void): number;
    emit(signal: "disconnect-proxy", action: Action, proxy: Widget): void;
    connect(signal: "post-activate", callback: (_source: this, action: Action) => void): number;
    connect_after(signal: "post-activate", callback: (_source: this, action: Action) => void): number;
    emit(signal: "post-activate", action: Action): void;
    connect(signal: "pre-activate", callback: (_source: this, action: Action) => void): number;
    connect_after(signal: "pre-activate", callback: (_source: this, action: Action) => void): number;
    emit(signal: "pre-activate", action: Action): void;

    // Constructors

    static ["new"](): UIManager;

    // Members

    add_ui(
        merge_id: number,
        path: string,
        name: string,
        action: string | null,
        type: UIManagerItemType,
        top: boolean
    ): void;
    add_ui_from_file(filename: string): number;
    add_ui_from_resource(resource_path: string): number;
    add_ui_from_string(buffer: string, length: number): number;
    ensure_update(): void;
    get_accel_group(): AccelGroup;
    get_action(path: string): Action;
    get_action_groups(): ActionGroup[];
    get_add_tearoffs(): boolean;
    get_toplevels(types: UIManagerItemType): Widget[];
    get_ui(): string;
    get_widget(path: string): Widget;
    insert_action_group(action_group: ActionGroup, pos: number): void;
    new_merge_id(): number;
    remove_action_group(action_group: ActionGroup): void;
    remove_ui(merge_id: number): void;
    set_add_tearoffs(add_tearoffs: boolean): void;
    vfunc_actions_changed(): void;
    vfunc_add_widget(widget: Widget): void;
    vfunc_connect_proxy(action: Action, proxy: Widget): void;
    vfunc_disconnect_proxy(action: Action, proxy: Widget): void;
    vfunc_get_action(path: string): Action;
    vfunc_get_widget(path: string): Widget;
    vfunc_post_activate(action: Action): void;
    vfunc_pre_activate(action: Action): void;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
}
export module VBox {
    export interface ConstructorProperties extends Box.ConstructorProperties {
        [key: string]: any;
    }
}
export class VBox extends Box implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<VBox>;

    constructor(properties?: Partial<VBox.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VBox.ConstructorProperties>, ...args: any[]): void;

    // Fields
    box: Box;

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](homogeneous: boolean, spacing: number): VBox;
    // Conflicted with Gtk.Box.new
    static ["new"](...args: never[]): any;

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module VButtonBox {
    export interface ConstructorProperties extends ButtonBox.ConstructorProperties {
        [key: string]: any;
    }
}
export class VButtonBox extends ButtonBox implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<VButtonBox>;

    constructor(properties?: Partial<VButtonBox.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VButtonBox.ConstructorProperties>, ...args: any[]): void;

    // Fields
    button_box: ButtonBox;

    // Constructors

    static ["new"](): VButtonBox;
}
export module VPaned {
    export interface ConstructorProperties extends Paned.ConstructorProperties {
        [key: string]: any;
    }
}
export class VPaned extends Paned implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<VPaned>;

    constructor(properties?: Partial<VPaned.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VPaned.ConstructorProperties>, ...args: any[]): void;

    // Fields
    paned: Paned;

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](): VPaned;

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module VScale {
    export interface ConstructorProperties extends Scale.ConstructorProperties {
        [key: string]: any;
    }
}
export class VScale extends Scale implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<VScale>;

    constructor(properties?: Partial<VScale.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VScale.ConstructorProperties>, ...args: any[]): void;

    // Fields
    scale: Scale;

    // Constructors

    static ["new"](adjustment: Adjustment): VScale;
    // Conflicted with Gtk.Scale.new
    static ["new"](...args: never[]): any;
    static new_with_range(min: number, max: number, step: number): VScale;
    // Conflicted with Gtk.Scale.new_with_range
    static new_with_range(...args: never[]): any;
}
export module VScrollbar {
    export interface ConstructorProperties extends Scrollbar.ConstructorProperties {
        [key: string]: any;
    }
}
export class VScrollbar extends Scrollbar implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<VScrollbar>;

    constructor(properties?: Partial<VScrollbar.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VScrollbar.ConstructorProperties>, ...args: any[]): void;

    // Fields
    scrollbar: Scrollbar;

    // Constructors

    static ["new"](adjustment?: Adjustment | null): VScrollbar;
    // Conflicted with Gtk.Scrollbar.new
    static ["new"](...args: never[]): any;
}
export module VSeparator {
    export interface ConstructorProperties extends Separator.ConstructorProperties {
        [key: string]: any;
    }
}
export class VSeparator extends Separator implements Atk.ImplementorIface, Buildable, Orientable {
    static $gtype: GObject.GType<VSeparator>;

    constructor(properties?: Partial<VSeparator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VSeparator.ConstructorProperties>, ...args: any[]): void;

    // Fields
    separator: Separator;

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](): VSeparator;

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module Viewport {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        shadowType: ShadowType;
    }
}
export class Viewport extends Bin implements Atk.ImplementorIface, Buildable, Scrollable {
    static $gtype: GObject.GType<Viewport>;

    constructor(properties?: Partial<Viewport.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Viewport.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get shadowType(): ShadowType;
    set shadowType(val: ShadowType);

    // Fields
    bin: Bin;

    // Implemented Properties

    get hadjustment(): Adjustment;
    set hadjustment(val: Adjustment);
    get hscrollPolicy(): ScrollablePolicy;
    set hscrollPolicy(val: ScrollablePolicy);
    get vadjustment(): Adjustment;
    set vadjustment(val: Adjustment);
    get vscrollPolicy(): ScrollablePolicy;
    set vscrollPolicy(val: ScrollablePolicy);

    // Constructors

    static ["new"](hadjustment?: Adjustment | null, vadjustment?: Adjustment | null): Viewport;

    // Members

    get_bin_window(): Gdk.Window;
    get_hadjustment(): Adjustment;
    get_shadow_type(): ShadowType;
    get_vadjustment(): Adjustment;
    get_view_window(): Gdk.Window;
    set_hadjustment(adjustment?: Adjustment | null): void;
    set_shadow_type(type: ShadowType): void;
    set_vadjustment(adjustment?: Adjustment | null): void;

    // Implemented Members

    get_border(): [boolean, Border];
    get_hscroll_policy(): ScrollablePolicy;
    get_vscroll_policy(): ScrollablePolicy;
    set_hscroll_policy(policy: ScrollablePolicy): void;
    set_vscroll_policy(policy: ScrollablePolicy): void;
    vfunc_get_border(): [boolean, Border];
}
export module VolumeButton {
    export interface ConstructorProperties extends ScaleButton.ConstructorProperties {
        [key: string]: any;
        useSymbolic: boolean;
    }
}
export class VolumeButton
    extends ScaleButton
    implements Atk.ImplementorIface, Actionable, Activatable, Buildable, Orientable
{
    static $gtype: GObject.GType<VolumeButton>;

    constructor(properties?: Partial<VolumeButton.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<VolumeButton.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get useSymbolic(): boolean;
    set useSymbolic(val: boolean);

    // Implemented Properties

    get orientation(): Orientation;
    set orientation(val: Orientation);

    // Constructors

    static ["new"](): VolumeButton;

    // Implemented Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}
export module Widget {
    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
        [key: string]: any;
        appPaintable: boolean;
        canDefault: boolean;
        canFocus: boolean;
        compositeChild: boolean;
        doubleBuffered: boolean;
        events: Gdk.EventMask;
        expand: boolean;
        focusOnClick: boolean;
        halign: Align;
        hasDefault: boolean;
        hasFocus: boolean;
        hasTooltip: boolean;
        heightRequest: number;
        hexpand: boolean;
        hexpandSet: boolean;
        isFocus: boolean;
        margin: number;
        marginBottom: number;
        marginEnd: number;
        marginLeft: number;
        marginRight: number;
        marginStart: number;
        marginTop: number;
        name: string;
        noShowAll: boolean;
        opacity: number;
        receivesDefault: boolean;
        scaleFactor: number;
        sensitive: boolean;
        style: Style;
        tooltipMarkup: string;
        tooltipText: string;
        valign: Align;
        vexpand: boolean;
        vexpandSet: boolean;
        visible: boolean;
        widthRequest: number;
        window: Gdk.Window;
    }
}
export abstract class Widget extends GObject.InitiallyUnowned implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Widget>;

    constructor(properties?: Partial<Widget.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Widget.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get appPaintable(): boolean;
    set appPaintable(val: boolean);
    get canDefault(): boolean;
    set canDefault(val: boolean);
    get canFocus(): boolean;
    set canFocus(val: boolean);
    get compositeChild(): boolean;
    get doubleBuffered(): boolean;
    set doubleBuffered(val: boolean);
    get events(): Gdk.EventMask;
    set events(val: Gdk.EventMask);
    get expand(): boolean;
    set expand(val: boolean);
    get focusOnClick(): boolean;
    set focusOnClick(val: boolean);
    get halign(): Align;
    set halign(val: Align);
    get hasDefault(): boolean;
    set hasDefault(val: boolean);
    get hasFocus(): boolean;
    set hasFocus(val: boolean);
    get hasTooltip(): boolean;
    set hasTooltip(val: boolean);
    get heightRequest(): number;
    set heightRequest(val: number);
    get hexpand(): boolean;
    set hexpand(val: boolean);
    get hexpandSet(): boolean;
    set hexpandSet(val: boolean);
    get isFocus(): boolean;
    set isFocus(val: boolean);
    get margin(): number;
    set margin(val: number);
    get marginBottom(): number;
    set marginBottom(val: number);
    get marginEnd(): number;
    set marginEnd(val: number);
    get marginLeft(): number;
    set marginLeft(val: number);
    get marginRight(): number;
    set marginRight(val: number);
    get marginStart(): number;
    set marginStart(val: number);
    get marginTop(): number;
    set marginTop(val: number);
    get name(): string;
    set name(val: string);
    get noShowAll(): boolean;
    set noShowAll(val: boolean);
    get opacity(): number;
    set opacity(val: number);
    get receivesDefault(): boolean;
    set receivesDefault(val: boolean);
    get scaleFactor(): number;
    get sensitive(): boolean;
    set sensitive(val: boolean);
    get style(): Style;
    set style(val: Style);
    get tooltipMarkup(): string;
    set tooltipMarkup(val: string);
    get tooltipText(): string;
    set tooltipText(val: string);
    get valign(): Align;
    set valign(val: Align);
    get vexpand(): boolean;
    set vexpand(val: boolean);
    get vexpandSet(): boolean;
    set vexpandSet(val: boolean);
    get visible(): boolean;
    set visible(val: boolean);
    get widthRequest(): number;
    set widthRequest(val: number);
    get window(): Gdk.Window;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "accel-closures-changed", callback: (_source: this) => void): number;
    connect_after(signal: "accel-closures-changed", callback: (_source: this) => void): number;
    emit(signal: "accel-closures-changed"): void;
    connect(signal: "button-press-event", callback: (_source: this, event: Gdk.EventButton) => boolean): number;
    connect_after(signal: "button-press-event", callback: (_source: this, event: Gdk.EventButton) => boolean): number;
    emit(signal: "button-press-event", event: Gdk.EventButton): void;
    connect(signal: "button-release-event", callback: (_source: this, event: Gdk.EventButton) => boolean): number;
    connect_after(signal: "button-release-event", callback: (_source: this, event: Gdk.EventButton) => boolean): number;
    emit(signal: "button-release-event", event: Gdk.EventButton): void;
    connect(signal: "can-activate-accel", callback: (_source: this, signal_id: number) => boolean): number;
    connect_after(signal: "can-activate-accel", callback: (_source: this, signal_id: number) => boolean): number;
    emit(signal: "can-activate-accel", signal_id: number): void;
    connect(signal: "child-notify", callback: (_source: this, child_property: GObject.ParamSpec) => void): number;
    connect_after(signal: "child-notify", callback: (_source: this, child_property: GObject.ParamSpec) => void): number;
    emit(signal: "child-notify", child_property: GObject.ParamSpec): void;
    connect(signal: "composited-changed", callback: (_source: this) => void): number;
    connect_after(signal: "composited-changed", callback: (_source: this) => void): number;
    emit(signal: "composited-changed"): void;
    connect(signal: "configure-event", callback: (_source: this, event: Gdk.EventConfigure) => boolean): number;
    connect_after(signal: "configure-event", callback: (_source: this, event: Gdk.EventConfigure) => boolean): number;
    emit(signal: "configure-event", event: Gdk.EventConfigure): void;
    connect(signal: "damage-event", callback: (_source: this, event: Gdk.EventExpose) => boolean): number;
    connect_after(signal: "damage-event", callback: (_source: this, event: Gdk.EventExpose) => boolean): number;
    emit(signal: "damage-event", event: Gdk.EventExpose): void;
    connect(signal: "delete-event", callback: (_source: this, event: Gdk.Event) => boolean): number;
    connect_after(signal: "delete-event", callback: (_source: this, event: Gdk.Event) => boolean): number;
    emit(signal: "delete-event", event: Gdk.Event): void;
    connect(signal: "destroy", callback: (_source: this) => void): number;
    connect_after(signal: "destroy", callback: (_source: this) => void): number;
    emit(signal: "destroy"): void;
    connect(signal: "destroy-event", callback: (_source: this, event: Gdk.Event) => boolean): number;
    connect_after(signal: "destroy-event", callback: (_source: this, event: Gdk.Event) => boolean): number;
    emit(signal: "destroy-event", event: Gdk.Event): void;
    connect(signal: "direction-changed", callback: (_source: this, previous_direction: TextDirection) => void): number;
    connect_after(
        signal: "direction-changed",
        callback: (_source: this, previous_direction: TextDirection) => void
    ): number;
    emit(signal: "direction-changed", previous_direction: TextDirection): void;
    connect(signal: "drag-begin", callback: (_source: this, context: Gdk.DragContext) => void): number;
    connect_after(signal: "drag-begin", callback: (_source: this, context: Gdk.DragContext) => void): number;
    emit(signal: "drag-begin", context: Gdk.DragContext): void;
    connect(signal: "drag-data-delete", callback: (_source: this, context: Gdk.DragContext) => void): number;
    connect_after(signal: "drag-data-delete", callback: (_source: this, context: Gdk.DragContext) => void): number;
    emit(signal: "drag-data-delete", context: Gdk.DragContext): void;
    connect(
        signal: "drag-data-get",
        callback: (_source: this, context: Gdk.DragContext, data: SelectionData, info: number, time: number) => void
    ): number;
    connect_after(
        signal: "drag-data-get",
        callback: (_source: this, context: Gdk.DragContext, data: SelectionData, info: number, time: number) => void
    ): number;
    emit(signal: "drag-data-get", context: Gdk.DragContext, data: SelectionData, info: number, time: number): void;
    connect(
        signal: "drag-data-received",
        callback: (
            _source: this,
            context: Gdk.DragContext,
            x: number,
            y: number,
            data: SelectionData,
            info: number,
            time: number
        ) => void
    ): number;
    connect_after(
        signal: "drag-data-received",
        callback: (
            _source: this,
            context: Gdk.DragContext,
            x: number,
            y: number,
            data: SelectionData,
            info: number,
            time: number
        ) => void
    ): number;
    emit(
        signal: "drag-data-received",
        context: Gdk.DragContext,
        x: number,
        y: number,
        data: SelectionData,
        info: number,
        time: number
    ): void;
    connect(
        signal: "drag-drop",
        callback: (_source: this, context: Gdk.DragContext, x: number, y: number, time: number) => boolean
    ): number;
    connect_after(
        signal: "drag-drop",
        callback: (_source: this, context: Gdk.DragContext, x: number, y: number, time: number) => boolean
    ): number;
    emit(signal: "drag-drop", context: Gdk.DragContext, x: number, y: number, time: number): void;
    connect(signal: "drag-end", callback: (_source: this, context: Gdk.DragContext) => void): number;
    connect_after(signal: "drag-end", callback: (_source: this, context: Gdk.DragContext) => void): number;
    emit(signal: "drag-end", context: Gdk.DragContext): void;
    connect(
        signal: "drag-failed",
        callback: (_source: this, context: Gdk.DragContext, result: DragResult) => boolean
    ): number;
    connect_after(
        signal: "drag-failed",
        callback: (_source: this, context: Gdk.DragContext, result: DragResult) => boolean
    ): number;
    emit(signal: "drag-failed", context: Gdk.DragContext, result: DragResult): void;
    connect(signal: "drag-leave", callback: (_source: this, context: Gdk.DragContext, time: number) => void): number;
    connect_after(
        signal: "drag-leave",
        callback: (_source: this, context: Gdk.DragContext, time: number) => void
    ): number;
    emit(signal: "drag-leave", context: Gdk.DragContext, time: number): void;
    connect(
        signal: "drag-motion",
        callback: (_source: this, context: Gdk.DragContext, x: number, y: number, time: number) => boolean
    ): number;
    connect_after(
        signal: "drag-motion",
        callback: (_source: this, context: Gdk.DragContext, x: number, y: number, time: number) => boolean
    ): number;
    emit(signal: "drag-motion", context: Gdk.DragContext, x: number, y: number, time: number): void;
    connect(signal: "draw", callback: (_source: this, cr: cairo.Context) => boolean): number;
    connect_after(signal: "draw", callback: (_source: this, cr: cairo.Context) => boolean): number;
    emit(signal: "draw", cr: cairo.Context): void;
    connect(signal: "enter-notify-event", callback: (_source: this, event: Gdk.EventCrossing) => boolean): number;
    connect_after(signal: "enter-notify-event", callback: (_source: this, event: Gdk.EventCrossing) => boolean): number;
    emit(signal: "enter-notify-event", event: Gdk.EventCrossing): void;
    connect(signal: "event", callback: (_source: this, event: Gdk.Event) => boolean): number;
    connect_after(signal: "event", callback: (_source: this, event: Gdk.Event) => boolean): number;
    emit(signal: "event", event: Gdk.Event): void;
    connect(signal: "event-after", callback: (_source: this, event: Gdk.Event) => void): number;
    connect_after(signal: "event-after", callback: (_source: this, event: Gdk.Event) => void): number;
    emit(signal: "event-after", event: Gdk.Event): void;
    connect(signal: "focus", callback: (_source: this, direction: DirectionType) => boolean): number;
    connect_after(signal: "focus", callback: (_source: this, direction: DirectionType) => boolean): number;
    emit(signal: "focus", direction: DirectionType): void;
    connect(signal: "focus-in-event", callback: (_source: this, event: Gdk.EventFocus) => boolean): number;
    connect_after(signal: "focus-in-event", callback: (_source: this, event: Gdk.EventFocus) => boolean): number;
    emit(signal: "focus-in-event", event: Gdk.EventFocus): void;
    connect(signal: "focus-out-event", callback: (_source: this, event: Gdk.EventFocus) => boolean): number;
    connect_after(signal: "focus-out-event", callback: (_source: this, event: Gdk.EventFocus) => boolean): number;
    emit(signal: "focus-out-event", event: Gdk.EventFocus): void;
    connect(signal: "grab-broken-event", callback: (_source: this, event: Gdk.EventGrabBroken) => boolean): number;
    connect_after(
        signal: "grab-broken-event",
        callback: (_source: this, event: Gdk.EventGrabBroken) => boolean
    ): number;
    emit(signal: "grab-broken-event", event: Gdk.EventGrabBroken): void;
    connect(signal: "grab-focus", callback: (_source: this) => void): number;
    connect_after(signal: "grab-focus", callback: (_source: this) => void): number;
    emit(signal: "grab-focus"): void;
    connect(signal: "grab-notify", callback: (_source: this, was_grabbed: boolean) => void): number;
    connect_after(signal: "grab-notify", callback: (_source: this, was_grabbed: boolean) => void): number;
    emit(signal: "grab-notify", was_grabbed: boolean): void;
    connect(signal: "hide", callback: (_source: this) => void): number;
    connect_after(signal: "hide", callback: (_source: this) => void): number;
    emit(signal: "hide"): void;
    connect(signal: "hierarchy-changed", callback: (_source: this, previous_toplevel: Widget | null) => void): number;
    connect_after(
        signal: "hierarchy-changed",
        callback: (_source: this, previous_toplevel: Widget | null) => void
    ): number;
    emit(signal: "hierarchy-changed", previous_toplevel: Widget | null): void;
    connect(signal: "key-press-event", callback: (_source: this, event: Gdk.EventKey) => boolean): number;
    connect_after(signal: "key-press-event", callback: (_source: this, event: Gdk.EventKey) => boolean): number;
    emit(signal: "key-press-event", event: Gdk.EventKey): void;
    connect(signal: "key-release-event", callback: (_source: this, event: Gdk.EventKey) => boolean): number;
    connect_after(signal: "key-release-event", callback: (_source: this, event: Gdk.EventKey) => boolean): number;
    emit(signal: "key-release-event", event: Gdk.EventKey): void;
    connect(signal: "keynav-failed", callback: (_source: this, direction: DirectionType) => boolean): number;
    connect_after(signal: "keynav-failed", callback: (_source: this, direction: DirectionType) => boolean): number;
    emit(signal: "keynav-failed", direction: DirectionType): void;
    connect(signal: "leave-notify-event", callback: (_source: this, event: Gdk.EventCrossing) => boolean): number;
    connect_after(signal: "leave-notify-event", callback: (_source: this, event: Gdk.EventCrossing) => boolean): number;
    emit(signal: "leave-notify-event", event: Gdk.EventCrossing): void;
    connect(signal: "map", callback: (_source: this) => void): number;
    connect_after(signal: "map", callback: (_source: this) => void): number;
    emit(signal: "map"): void;
    connect(signal: "map-event", callback: (_source: this, event: Gdk.EventAny) => boolean): number;
    connect_after(signal: "map-event", callback: (_source: this, event: Gdk.EventAny) => boolean): number;
    emit(signal: "map-event", event: Gdk.EventAny): void;
    connect(signal: "mnemonic-activate", callback: (_source: this, group_cycling: boolean) => boolean): number;
    connect_after(signal: "mnemonic-activate", callback: (_source: this, group_cycling: boolean) => boolean): number;
    emit(signal: "mnemonic-activate", group_cycling: boolean): void;
    connect(signal: "motion-notify-event", callback: (_source: this, event: Gdk.EventMotion) => boolean): number;
    connect_after(signal: "motion-notify-event", callback: (_source: this, event: Gdk.EventMotion) => boolean): number;
    emit(signal: "motion-notify-event", event: Gdk.EventMotion): void;
    connect(signal: "move-focus", callback: (_source: this, direction: DirectionType) => void): number;
    connect_after(signal: "move-focus", callback: (_source: this, direction: DirectionType) => void): number;
    emit(signal: "move-focus", direction: DirectionType): void;
    connect(signal: "parent-set", callback: (_source: this, old_parent: Widget | null) => void): number;
    connect_after(signal: "parent-set", callback: (_source: this, old_parent: Widget | null) => void): number;
    emit(signal: "parent-set", old_parent: Widget | null): void;
    connect(signal: "popup-menu", callback: (_source: this) => boolean): number;
    connect_after(signal: "popup-menu", callback: (_source: this) => boolean): number;
    emit(signal: "popup-menu"): void;
    connect(signal: "property-notify-event", callback: (_source: this, event: Gdk.EventProperty) => boolean): number;
    connect_after(
        signal: "property-notify-event",
        callback: (_source: this, event: Gdk.EventProperty) => boolean
    ): number;
    emit(signal: "property-notify-event", event: Gdk.EventProperty): void;
    connect(signal: "proximity-in-event", callback: (_source: this, event: Gdk.EventProximity) => boolean): number;
    connect_after(
        signal: "proximity-in-event",
        callback: (_source: this, event: Gdk.EventProximity) => boolean
    ): number;
    emit(signal: "proximity-in-event", event: Gdk.EventProximity): void;
    connect(signal: "proximity-out-event", callback: (_source: this, event: Gdk.EventProximity) => boolean): number;
    connect_after(
        signal: "proximity-out-event",
        callback: (_source: this, event: Gdk.EventProximity) => boolean
    ): number;
    emit(signal: "proximity-out-event", event: Gdk.EventProximity): void;
    connect(
        signal: "query-tooltip",
        callback: (_source: this, x: number, y: number, keyboard_mode: boolean, tooltip: Tooltip) => boolean
    ): number;
    connect_after(
        signal: "query-tooltip",
        callback: (_source: this, x: number, y: number, keyboard_mode: boolean, tooltip: Tooltip) => boolean
    ): number;
    emit(signal: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Tooltip): void;
    connect(signal: "realize", callback: (_source: this) => void): number;
    connect_after(signal: "realize", callback: (_source: this) => void): number;
    emit(signal: "realize"): void;
    connect(signal: "screen-changed", callback: (_source: this, previous_screen: Gdk.Screen | null) => void): number;
    connect_after(
        signal: "screen-changed",
        callback: (_source: this, previous_screen: Gdk.Screen | null) => void
    ): number;
    emit(signal: "screen-changed", previous_screen: Gdk.Screen | null): void;
    connect(signal: "scroll-event", callback: (_source: this, event: Gdk.EventScroll) => boolean): number;
    connect_after(signal: "scroll-event", callback: (_source: this, event: Gdk.EventScroll) => boolean): number;
    emit(signal: "scroll-event", event: Gdk.EventScroll): void;
    connect(signal: "selection-clear-event", callback: (_source: this, event: Gdk.EventSelection) => boolean): number;
    connect_after(
        signal: "selection-clear-event",
        callback: (_source: this, event: Gdk.EventSelection) => boolean
    ): number;
    emit(signal: "selection-clear-event", event: Gdk.EventSelection): void;
    connect(
        signal: "selection-get",
        callback: (_source: this, data: SelectionData, info: number, time: number) => void
    ): number;
    connect_after(
        signal: "selection-get",
        callback: (_source: this, data: SelectionData, info: number, time: number) => void
    ): number;
    emit(signal: "selection-get", data: SelectionData, info: number, time: number): void;
    connect(signal: "selection-notify-event", callback: (_source: this, event: Gdk.EventSelection) => boolean): number;
    connect_after(
        signal: "selection-notify-event",
        callback: (_source: this, event: Gdk.EventSelection) => boolean
    ): number;
    emit(signal: "selection-notify-event", event: Gdk.EventSelection): void;
    connect(signal: "selection-received", callback: (_source: this, data: SelectionData, time: number) => void): number;
    connect_after(
        signal: "selection-received",
        callback: (_source: this, data: SelectionData, time: number) => void
    ): number;
    emit(signal: "selection-received", data: SelectionData, time: number): void;
    connect(signal: "selection-request-event", callback: (_source: this, event: Gdk.EventSelection) => boolean): number;
    connect_after(
        signal: "selection-request-event",
        callback: (_source: this, event: Gdk.EventSelection) => boolean
    ): number;
    emit(signal: "selection-request-event", event: Gdk.EventSelection): void;
    connect(signal: "show", callback: (_source: this) => void): number;
    connect_after(signal: "show", callback: (_source: this) => void): number;
    emit(signal: "show"): void;
    connect(signal: "show-help", callback: (_source: this, help_type: WidgetHelpType) => boolean): number;
    connect_after(signal: "show-help", callback: (_source: this, help_type: WidgetHelpType) => boolean): number;
    emit(signal: "show-help", help_type: WidgetHelpType): void;
    connect(signal: "size-allocate", callback: (_source: this, allocation: Allocation) => void): number;
    connect_after(signal: "size-allocate", callback: (_source: this, allocation: Allocation) => void): number;
    emit(signal: "size-allocate", allocation: Allocation): void;
    connect(signal: "state-changed", callback: (_source: this, state: StateType) => void): number;
    connect_after(signal: "state-changed", callback: (_source: this, state: StateType) => void): number;
    emit(signal: "state-changed", state: StateType): void;
    connect(signal: "state-flags-changed", callback: (_source: this, flags: StateFlags) => void): number;
    connect_after(signal: "state-flags-changed", callback: (_source: this, flags: StateFlags) => void): number;
    emit(signal: "state-flags-changed", flags: StateFlags): void;
    connect(signal: "style-set", callback: (_source: this, previous_style: Style | null) => void): number;
    connect_after(signal: "style-set", callback: (_source: this, previous_style: Style | null) => void): number;
    emit(signal: "style-set", previous_style: Style | null): void;
    connect(signal: "style-updated", callback: (_source: this) => void): number;
    connect_after(signal: "style-updated", callback: (_source: this) => void): number;
    emit(signal: "style-updated"): void;
    connect(signal: "touch-event", callback: (_source: this, object: Gdk.Event) => boolean): number;
    connect_after(signal: "touch-event", callback: (_source: this, object: Gdk.Event) => boolean): number;
    emit(signal: "touch-event", object: Gdk.Event): void;
    connect(signal: "unmap", callback: (_source: this) => void): number;
    connect_after(signal: "unmap", callback: (_source: this) => void): number;
    emit(signal: "unmap"): void;
    connect(signal: "unmap-event", callback: (_source: this, event: Gdk.EventAny) => boolean): number;
    connect_after(signal: "unmap-event", callback: (_source: this, event: Gdk.EventAny) => boolean): number;
    emit(signal: "unmap-event", event: Gdk.EventAny): void;
    connect(signal: "unrealize", callback: (_source: this) => void): number;
    connect_after(signal: "unrealize", callback: (_source: this) => void): number;
    emit(signal: "unrealize"): void;
    connect(
        signal: "visibility-notify-event",
        callback: (_source: this, event: Gdk.EventVisibility) => boolean
    ): number;
    connect_after(
        signal: "visibility-notify-event",
        callback: (_source: this, event: Gdk.EventVisibility) => boolean
    ): number;
    emit(signal: "visibility-notify-event", event: Gdk.EventVisibility): void;
    connect(signal: "window-state-event", callback: (_source: this, event: Gdk.EventWindowState) => boolean): number;
    connect_after(
        signal: "window-state-event",
        callback: (_source: this, event: Gdk.EventWindowState) => boolean
    ): number;
    emit(signal: "window-state-event", event: Gdk.EventWindowState): void;

    // Members

    activate(): boolean;
    add_accelerator(
        accel_signal: string,
        accel_group: AccelGroup,
        accel_key: number,
        accel_mods: Gdk.ModifierType,
        accel_flags: AccelFlags
    ): void;
    add_device_events(device: Gdk.Device, events: Gdk.EventMask): void;
    add_events(events: number): void;
    add_mnemonic_label(label: Widget): void;
    add_tick_callback(callback: TickCallback): number;
    can_activate_accel(signal_id: number): boolean;
    child_focus(direction: DirectionType): boolean;
    child_notify(child_property: string): void;
    class_path(): [number, string, string];
    compute_expand(orientation: Orientation): boolean;
    create_pango_context(): Pango.Context;
    create_pango_layout(text?: string | null): Pango.Layout;
    destroy(): void;
    destroyed(widget_pointer: Widget): Widget;
    device_is_shadowed(device: Gdk.Device): boolean;
    drag_begin(targets: TargetList, actions: Gdk.DragAction, button: number, event?: Gdk.Event | null): Gdk.DragContext;
    drag_begin_with_coordinates(
        targets: TargetList,
        actions: Gdk.DragAction,
        button: number,
        event: Gdk.Event | null,
        x: number,
        y: number
    ): Gdk.DragContext;
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean;
    drag_dest_add_image_targets(): void;
    drag_dest_add_text_targets(): void;
    drag_dest_add_uri_targets(): void;
    drag_dest_find_target(context: Gdk.DragContext, target_list?: TargetList | null): Gdk.Atom;
    drag_dest_get_target_list(): TargetList | null;
    drag_dest_get_track_motion(): boolean;
    drag_dest_set(flags: DestDefaults, targets: TargetEntry[] | null, actions: Gdk.DragAction): void;
    drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void;
    drag_dest_set_target_list(target_list?: TargetList | null): void;
    drag_dest_set_track_motion(track_motion: boolean): void;
    drag_dest_unset(): void;
    drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void;
    drag_highlight(): void;
    drag_source_add_image_targets(): void;
    drag_source_add_text_targets(): void;
    drag_source_add_uri_targets(): void;
    drag_source_get_target_list(): TargetList | null;
    drag_source_set(start_button_mask: Gdk.ModifierType, targets: TargetEntry[] | null, actions: Gdk.DragAction): void;
    drag_source_set_icon_gicon(icon: Gio.Icon): void;
    drag_source_set_icon_name(icon_name: string): void;
    drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
    drag_source_set_icon_stock(stock_id: string): void;
    drag_source_set_target_list(target_list?: TargetList | null): void;
    drag_source_unset(): void;
    drag_unhighlight(): void;
    draw(cr: cairo.Context): void;
    ensure_style(): void;
    error_bell(): void;
    event(event: Gdk.Event): boolean;
    freeze_child_notify(): void;
    get_accessible(): Atk.Object;
    get_action_group(prefix: string): Gio.ActionGroup | null;
    get_allocated_baseline(): number;
    get_allocated_height(): number;
    get_allocated_size(): [Allocation, number];
    get_allocated_width(): number;
    get_allocation(): Allocation;
    get_ancestor(widget_type: GObject.GType): Widget | null;
    get_app_paintable(): boolean;
    get_can_default(): boolean;
    get_can_focus(): boolean;
    get_child_requisition(): Requisition;
    get_child_visible(): boolean;
    get_clip(): Allocation;
    get_clipboard(selection: Gdk.Atom): Clipboard;
    get_composite_name(): string;
    get_device_enabled(device: Gdk.Device): boolean;
    get_device_events(device: Gdk.Device): Gdk.EventMask;
    get_direction(): TextDirection;
    get_display(): Gdk.Display;
    get_double_buffered(): boolean;
    get_events(): number;
    get_focus_on_click(): boolean;
    get_font_map(): Pango.FontMap | null;
    get_font_options(): cairo.FontOptions | null;
    get_frame_clock(): Gdk.FrameClock | null;
    get_halign(): Align;
    get_has_tooltip(): boolean;
    get_has_window(): boolean;
    get_hexpand(): boolean;
    get_hexpand_set(): boolean;
    get_mapped(): boolean;
    get_margin_bottom(): number;
    get_margin_end(): number;
    get_margin_left(): number;
    get_margin_right(): number;
    get_margin_start(): number;
    get_margin_top(): number;
    get_modifier_mask(intent: Gdk.ModifierIntent): Gdk.ModifierType;
    get_modifier_style(): RcStyle;
    get_name(): string;
    get_no_show_all(): boolean;
    get_opacity(): number;
    get_pango_context(): Pango.Context;
    get_parent(): Widget | null;
    get_parent_window(): Gdk.Window | null;
    get_path(): WidgetPath;
    get_pointer(): [number, number];
    get_preferred_height(): [number, number];
    get_preferred_height_and_baseline_for_width(width: number): [number, number, number, number];
    get_preferred_height_for_width(width: number): [number, number];
    get_preferred_size(): [Requisition | null, Requisition | null];
    get_preferred_width(): [number, number];
    get_preferred_width_for_height(height: number): [number, number];
    get_realized(): boolean;
    get_receives_default(): boolean;
    get_request_mode(): SizeRequestMode;
    get_requisition(): Requisition;
    get_root_window(): Gdk.Window;
    get_scale_factor(): number;
    get_screen(): Gdk.Screen;
    get_sensitive(): boolean;
    get_settings(): Settings;
    get_size_request(): [number, number];
    get_state(): StateType;
    get_state_flags(): StateFlags;
    get_style(): Style;
    get_style_context(): StyleContext;
    get_support_multidevice(): boolean;
    get_template_child<T = GObject.Object>(widget_type: GObject.GType, name: string): T;
    get_tooltip_markup(): string | null;
    get_tooltip_text(): string | null;
    get_tooltip_window(): Window;
    get_toplevel(): Widget;
    get_valign(): Align;
    get_valign_with_baseline(): Align;
    get_vexpand(): boolean;
    get_vexpand_set(): boolean;
    get_visible(): boolean;
    get_visual(): Gdk.Visual;
    get_window(): Gdk.Window | null;
    grab_add(): void;
    grab_default(): void;
    grab_focus(): void;
    grab_remove(): void;
    has_default(): boolean;
    has_focus(): boolean;
    has_grab(): boolean;
    has_rc_style(): boolean;
    has_screen(): boolean;
    has_visible_focus(): boolean;
    hide(): void;
    hide_on_delete(): boolean;
    in_destruction(): boolean;
    init_template(): void;
    input_shape_combine_region(region?: cairo.Region | null): void;
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void;
    intersect(area: Gdk.Rectangle): [boolean, Gdk.Rectangle | null];
    is_ancestor(ancestor: Widget): boolean;
    is_composited(): boolean;
    is_drawable(): boolean;
    is_focus(): boolean;
    is_sensitive(): boolean;
    is_toplevel(): boolean;
    is_visible(): boolean;
    keynav_failed(direction: DirectionType): boolean;
    list_accel_closures(): GObject.Closure[];
    list_action_prefixes(): string[];
    list_mnemonic_labels(): Widget[];
    map(): void;
    mnemonic_activate(group_cycling: boolean): boolean;
    modify_base(state: StateType, color?: Gdk.Color | null): void;
    modify_bg(state: StateType, color?: Gdk.Color | null): void;
    modify_cursor(primary?: Gdk.Color | null, secondary?: Gdk.Color | null): void;
    modify_fg(state: StateType, color?: Gdk.Color | null): void;
    modify_font(font_desc?: Pango.FontDescription | null): void;
    modify_style(style: RcStyle): void;
    modify_text(state: StateType, color?: Gdk.Color | null): void;
    override_background_color(state: StateFlags, color?: Gdk.RGBA | null): void;
    override_color(state: StateFlags, color?: Gdk.RGBA | null): void;
    override_cursor(cursor?: Gdk.RGBA | null, secondary_cursor?: Gdk.RGBA | null): void;
    override_font(font_desc?: Pango.FontDescription | null): void;
    override_symbolic_color(name: string, color?: Gdk.RGBA | null): void;
    path(): [number, string, string];
    queue_allocate(): void;
    queue_compute_expand(): void;
    queue_draw(): void;
    queue_draw_area(x: number, y: number, width: number, height: number): void;
    queue_draw_region(region: cairo.Region): void;
    queue_resize(): void;
    queue_resize_no_redraw(): void;
    realize(): void;
    region_intersect(region: cairo.Region): cairo.Region;
    register_window(window: Gdk.Window): void;
    remove_accelerator(accel_group: AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean;
    remove_mnemonic_label(label: Widget): void;
    remove_tick_callback(id: number): void;
    render_icon(stock_id: string, size: number, detail?: string | null): GdkPixbuf.Pixbuf | null;
    render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null;
    reparent(new_parent: Widget): void;
    reset_rc_styles(): void;
    reset_style(): void;
    send_expose(event: Gdk.Event): number;
    send_focus_change(event: Gdk.Event): boolean;
    set_accel_path(accel_path?: string | null, accel_group?: AccelGroup | null): void;
    set_allocation(allocation: Allocation): void;
    set_app_paintable(app_paintable: boolean): void;
    set_can_default(can_default: boolean): void;
    set_can_focus(can_focus: boolean): void;
    set_child_visible(is_visible: boolean): void;
    set_clip(clip: Allocation): void;
    set_composite_name(name: string): void;
    set_device_enabled(device: Gdk.Device, enabled: boolean): void;
    set_device_events(device: Gdk.Device, events: Gdk.EventMask): void;
    set_direction(dir: TextDirection): void;
    set_double_buffered(double_buffered: boolean): void;
    set_events(events: number): void;
    set_focus_on_click(focus_on_click: boolean): void;
    set_font_map(font_map?: Pango.FontMap | null): void;
    set_font_options(options?: cairo.FontOptions | null): void;
    set_halign(align: Align): void;
    set_has_tooltip(has_tooltip: boolean): void;
    set_has_window(has_window: boolean): void;
    set_hexpand(expand: boolean): void;
    set_hexpand_set(set: boolean): void;
    set_mapped(mapped: boolean): void;
    set_margin_bottom(margin: number): void;
    set_margin_end(margin: number): void;
    set_margin_left(margin: number): void;
    set_margin_right(margin: number): void;
    set_margin_start(margin: number): void;
    set_margin_top(margin: number): void;
    set_name(name: string): void;
    set_no_show_all(no_show_all: boolean): void;
    set_opacity(opacity: number): void;
    set_parent(parent: Widget): void;
    set_parent_window(parent_window: Gdk.Window): void;
    set_realized(realized: boolean): void;
    set_receives_default(receives_default: boolean): void;
    set_redraw_on_allocate(redraw_on_allocate: boolean): void;
    set_sensitive(sensitive: boolean): void;
    set_size_request(width: number, height: number): void;
    set_state(state: StateType): void;
    set_state_flags(flags: StateFlags, clear: boolean): void;
    set_style(style?: Style | null): void;
    set_support_multidevice(support_multidevice: boolean): void;
    set_tooltip_markup(markup?: string | null): void;
    set_tooltip_text(text?: string | null): void;
    set_tooltip_window(custom_window?: Window | null): void;
    set_valign(align: Align): void;
    set_vexpand(expand: boolean): void;
    set_vexpand_set(set: boolean): void;
    set_visible(visible: boolean): void;
    set_visual(visual?: Gdk.Visual | null): void;
    set_window(window: Gdk.Window): void;
    shape_combine_region(region?: cairo.Region | null): void;
    show(): void;
    show_all(): void;
    show_now(): void;
    size_allocate(allocation: Allocation): void;
    size_allocate_with_baseline(allocation: Allocation, baseline: number): void;
    size_request(): Requisition;
    style_attach(): void;
    style_get_property(property_name: string, value: GObject.Value | any): void;
    thaw_child_notify(): void;
    translate_coordinates(dest_widget: Widget, src_x: number, src_y: number): [boolean, number, number];
    trigger_tooltip_query(): void;
    unmap(): void;
    unparent(): void;
    unrealize(): void;
    unregister_window(window: Gdk.Window): void;
    unset_state_flags(flags: StateFlags): void;
    vfunc_adjust_baseline_allocation(baseline: number): void;
    vfunc_adjust_baseline_request(minimum_baseline: number, natural_baseline: number): void;
    vfunc_adjust_size_allocation(
        orientation: Orientation,
        minimum_size: number,
        natural_size: number,
        allocated_pos: number,
        allocated_size: number
    ): void;
    vfunc_adjust_size_request(orientation: Orientation, minimum_size: number, natural_size: number): void;
    vfunc_button_press_event(event: Gdk.EventButton): boolean;
    vfunc_button_release_event(event: Gdk.EventButton): boolean;
    vfunc_can_activate_accel(signal_id: number): boolean;
    vfunc_child_notify(child_property: GObject.ParamSpec): void;
    vfunc_composited_changed(): void;
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void;
    vfunc_configure_event(event: Gdk.EventConfigure): boolean;
    vfunc_damage_event(event: Gdk.EventExpose): boolean;
    vfunc_delete_event(event: Gdk.EventAny): boolean;
    vfunc_destroy(): void;
    vfunc_destroy_event(event: Gdk.EventAny): boolean;
    vfunc_direction_changed(previous_direction: TextDirection): void;
    vfunc_dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
    vfunc_drag_begin(context: Gdk.DragContext): void;
    vfunc_drag_data_delete(context: Gdk.DragContext): void;
    vfunc_drag_data_get(context: Gdk.DragContext, selection_data: SelectionData, info: number, time_: number): void;
    vfunc_drag_data_received(
        context: Gdk.DragContext,
        x: number,
        y: number,
        selection_data: SelectionData,
        info: number,
        time_: number
    ): void;
    vfunc_drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean;
    vfunc_drag_end(context: Gdk.DragContext): void;
    vfunc_drag_failed(context: Gdk.DragContext, result: DragResult): boolean;
    vfunc_drag_leave(context: Gdk.DragContext, time_: number): void;
    vfunc_drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean;
    vfunc_draw(cr: cairo.Context): boolean;
    vfunc_enter_notify_event(event: Gdk.EventCrossing): boolean;
    vfunc_event(event: Gdk.Event): boolean;
    vfunc_focus(direction: DirectionType): boolean;
    vfunc_focus_in_event(event: Gdk.EventFocus): boolean;
    vfunc_focus_out_event(event: Gdk.EventFocus): boolean;
    vfunc_get_accessible(): Atk.Object;
    vfunc_get_preferred_height(): [number, number];
    vfunc_get_preferred_height_and_baseline_for_width(width: number): [number, number, number, number];
    vfunc_get_preferred_height_for_width(width: number): [number, number];
    vfunc_get_preferred_width(): [number, number];
    vfunc_get_preferred_width_for_height(height: number): [number, number];
    vfunc_get_request_mode(): SizeRequestMode;
    vfunc_grab_broken_event(event: Gdk.EventGrabBroken): boolean;
    vfunc_grab_focus(): void;
    vfunc_grab_notify(was_grabbed: boolean): void;
    vfunc_hide(): void;
    vfunc_hierarchy_changed(previous_toplevel: Widget): void;
    vfunc_key_press_event(event: Gdk.EventKey): boolean;
    vfunc_key_release_event(event: Gdk.EventKey): boolean;
    vfunc_keynav_failed(direction: DirectionType): boolean;
    vfunc_leave_notify_event(event: Gdk.EventCrossing): boolean;
    vfunc_map(): void;
    vfunc_map_event(event: Gdk.EventAny): boolean;
    vfunc_mnemonic_activate(group_cycling: boolean): boolean;
    vfunc_motion_notify_event(event: Gdk.EventMotion): boolean;
    vfunc_move_focus(direction: DirectionType): void;
    vfunc_parent_set(previous_parent: Widget): void;
    vfunc_popup_menu(): boolean;
    vfunc_property_notify_event(event: Gdk.EventProperty): boolean;
    vfunc_proximity_in_event(event: Gdk.EventProximity): boolean;
    vfunc_proximity_out_event(event: Gdk.EventProximity): boolean;
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Tooltip): boolean;
    vfunc_queue_draw_region(region: cairo.Region): void;
    vfunc_realize(): void;
    vfunc_screen_changed(previous_screen: Gdk.Screen): void;
    vfunc_scroll_event(event: Gdk.EventScroll): boolean;
    vfunc_selection_clear_event(event: Gdk.EventSelection): boolean;
    vfunc_selection_get(selection_data: SelectionData, info: number, time_: number): void;
    vfunc_selection_notify_event(event: Gdk.EventSelection): boolean;
    vfunc_selection_received(selection_data: SelectionData, time_: number): void;
    vfunc_selection_request_event(event: Gdk.EventSelection): boolean;
    vfunc_show(): void;
    vfunc_show_all(): void;
    vfunc_show_help(help_type: WidgetHelpType): boolean;
    vfunc_size_allocate(allocation: Allocation): void;
    vfunc_state_changed(previous_state: StateType): void;
    vfunc_state_flags_changed(previous_state_flags: StateFlags): void;
    vfunc_style_set(previous_style: Style): void;
    vfunc_style_updated(): void;
    vfunc_touch_event(event: Gdk.EventTouch): boolean;
    vfunc_unmap(): void;
    vfunc_unmap_event(event: Gdk.EventAny): boolean;
    vfunc_unrealize(): void;
    vfunc_visibility_notify_event(event: Gdk.EventVisibility): boolean;
    vfunc_window_state_event(event: Gdk.EventWindowState): boolean;
    static get_default_direction(): TextDirection;
    static get_default_style(): Style;
    static pop_composite_child(): void;
    static push_composite_child(): void;
    static set_default_direction(dir: TextDirection): void;
    static bind_template_callback_full(callback_name: string, callback_symbol: GObject.Callback): void;
    static bind_template_child_full(name: string, internal_child: boolean, struct_offset: number): void;
    static find_style_property(property_name: string): GObject.ParamSpec;
    static get_css_name(): string;
    static install_style_property(pspec: GObject.ParamSpec): void;
    static list_style_properties(): GObject.ParamSpec[];
    static set_accessible_role(role: Atk.Role): void;
    static set_accessible_type(type: GObject.GType): void;
    static set_connect_func(connect_func: BuilderConnectFunc): void;
    static set_css_name(name: string): void;
    static set_template(template_bytes: GLib.Bytes | Uint8Array): void;
    static set_template_from_resource(resource_name: string): void;

    // Implemented Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
}
export module WidgetAccessible {
    export interface ConstructorProperties extends Accessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class WidgetAccessible extends Accessible implements Atk.Component {
    static $gtype: GObject.GType<WidgetAccessible>;

    constructor(properties?: Partial<WidgetAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WidgetAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: WidgetAccessiblePrivate;

    // Implemented Members

    contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    get_alpha(): number;
    get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    get_layer(): Atk.Layer;
    get_mdi_zorder(): number;
    get_position(coord_type: Atk.CoordType): [number, number];
    get_size(): [number, number];
    grab_focus(): boolean;
    ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    remove_focus_handler(handler_id: number): void;
    scroll_to(type: Atk.ScrollType): boolean;
    scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    set_size(width: number, height: number): boolean;
    vfunc_bounds_changed(bounds: Atk.Rectangle): void;
    vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_get_alpha(): number;
    vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
    vfunc_get_layer(): Atk.Layer;
    vfunc_get_mdi_zorder(): number;
    vfunc_get_position(coord_type: Atk.CoordType): [number, number];
    vfunc_get_size(): [number, number];
    vfunc_grab_focus(): boolean;
    vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
    vfunc_remove_focus_handler(handler_id: number): void;
    vfunc_scroll_to(type: Atk.ScrollType): boolean;
    vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
    vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
    vfunc_set_size(width: number, height: number): boolean;
}
export module Window {
    export interface ConstructorProperties extends Bin.ConstructorProperties {
        [key: string]: any;
        acceptFocus: boolean;
        application: Application;
        attachedTo: Widget;
        decorated: boolean;
        defaultHeight: number;
        defaultWidth: number;
        deletable: boolean;
        destroyWithParent: boolean;
        focusOnMap: boolean;
        focusVisible: boolean;
        gravity: Gdk.Gravity;
        hasResizeGrip: boolean;
        hasToplevelFocus: boolean;
        hideTitlebarWhenMaximized: boolean;
        icon: GdkPixbuf.Pixbuf;
        iconName: string;
        isActive: boolean;
        isMaximized: boolean;
        mnemonicsVisible: boolean;
        modal: boolean;
        resizable: boolean;
        resizeGripVisible: boolean;
        role: string;
        screen: Gdk.Screen;
        skipPagerHint: boolean;
        skipTaskbarHint: boolean;
        startupId: string;
        title: string;
        transientFor: Window;
        type: WindowType;
        typeHint: Gdk.WindowTypeHint;
        urgencyHint: boolean;
        windowPosition: WindowPosition;
    }
}
export class Window extends Bin implements Atk.ImplementorIface, Buildable {
    static $gtype: GObject.GType<Window>;

    constructor(properties?: Partial<Window.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Window.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get acceptFocus(): boolean;
    set acceptFocus(val: boolean);
    get application(): Application;
    set application(val: Application);
    get attachedTo(): Widget;
    set attachedTo(val: Widget);
    get decorated(): boolean;
    set decorated(val: boolean);
    get defaultHeight(): number;
    set defaultHeight(val: number);
    get defaultWidth(): number;
    set defaultWidth(val: number);
    get deletable(): boolean;
    set deletable(val: boolean);
    get destroyWithParent(): boolean;
    set destroyWithParent(val: boolean);
    get focusOnMap(): boolean;
    set focusOnMap(val: boolean);
    get focusVisible(): boolean;
    set focusVisible(val: boolean);
    get gravity(): Gdk.Gravity;
    set gravity(val: Gdk.Gravity);
    get hasResizeGrip(): boolean;
    set hasResizeGrip(val: boolean);
    get hasToplevelFocus(): boolean;
    get hideTitlebarWhenMaximized(): boolean;
    set hideTitlebarWhenMaximized(val: boolean);
    get icon(): GdkPixbuf.Pixbuf;
    set icon(val: GdkPixbuf.Pixbuf);
    get iconName(): string;
    set iconName(val: string);
    get isActive(): boolean;
    get isMaximized(): boolean;
    get mnemonicsVisible(): boolean;
    set mnemonicsVisible(val: boolean);
    get modal(): boolean;
    set modal(val: boolean);
    get resizable(): boolean;
    set resizable(val: boolean);
    get resizeGripVisible(): boolean;
    get role(): string;
    set role(val: string);
    get screen(): Gdk.Screen;
    set screen(val: Gdk.Screen);
    get skipPagerHint(): boolean;
    set skipPagerHint(val: boolean);
    get skipTaskbarHint(): boolean;
    set skipTaskbarHint(val: boolean);
    set startupId(val: string);
    get title(): string;
    set title(val: string);
    get transientFor(): Window;
    set transientFor(val: Window);
    get type(): WindowType;
    get typeHint(): Gdk.WindowTypeHint;
    set typeHint(val: Gdk.WindowTypeHint);
    get urgencyHint(): boolean;
    set urgencyHint(val: boolean);
    get windowPosition(): WindowPosition;
    set windowPosition(val: WindowPosition);

    // Fields
    bin: Bin;
    priv: WindowPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;
    connect_after(id: string, callback: (...args: any[]) => any): number;
    emit(id: string, ...args: any[]): void;
    connect(signal: "activate-default", callback: (_source: this) => void): number;
    connect_after(signal: "activate-default", callback: (_source: this) => void): number;
    emit(signal: "activate-default"): void;
    connect(signal: "activate-focus", callback: (_source: this) => void): number;
    connect_after(signal: "activate-focus", callback: (_source: this) => void): number;
    emit(signal: "activate-focus"): void;
    connect(signal: "enable-debugging", callback: (_source: this, toggle: boolean) => boolean): number;
    connect_after(signal: "enable-debugging", callback: (_source: this, toggle: boolean) => boolean): number;
    emit(signal: "enable-debugging", toggle: boolean): void;
    connect(signal: "keys-changed", callback: (_source: this) => void): number;
    connect_after(signal: "keys-changed", callback: (_source: this) => void): number;
    emit(signal: "keys-changed"): void;
    connect(signal: "set-focus", callback: (_source: this, widget: Widget | null) => void): number;
    connect_after(signal: "set-focus", callback: (_source: this, widget: Widget | null) => void): number;
    emit(signal: "set-focus", widget: Widget | null): void;

    // Constructors

    static ["new"](type: WindowType): Window;

    // Members

    activate_default(): boolean;
    activate_focus(): boolean;
    activate_key(event: Gdk.EventKey): boolean;
    add_accel_group(accel_group: AccelGroup): void;
    add_mnemonic(keyval: number, target: Widget): void;
    begin_move_drag(button: number, root_x: number, root_y: number, timestamp: number): void;
    begin_resize_drag(edge: Gdk.WindowEdge, button: number, root_x: number, root_y: number, timestamp: number): void;
    close(): void;
    deiconify(): void;
    fullscreen(): void;
    fullscreen_on_monitor(screen: Gdk.Screen, monitor: number): void;
    get_accept_focus(): boolean;
    get_application(): Application | null;
    get_attached_to(): Widget | null;
    get_decorated(): boolean;
    get_default_size(): [number, number];
    get_default_widget(): Widget | null;
    get_deletable(): boolean;
    get_destroy_with_parent(): boolean;
    get_focus(): Widget | null;
    get_focus_on_map(): boolean;
    get_focus_visible(): boolean;
    get_gravity(): Gdk.Gravity;
    get_group(): WindowGroup;
    get_has_resize_grip(): boolean;
    get_hide_titlebar_when_maximized(): boolean;
    get_icon(): GdkPixbuf.Pixbuf | null;
    get_icon_list(): GdkPixbuf.Pixbuf[];
    get_icon_name(): string | null;
    get_mnemonic_modifier(): Gdk.ModifierType;
    get_mnemonics_visible(): boolean;
    get_modal(): boolean;
    get_opacity(): number;
    get_position(): [number, number];
    get_resizable(): boolean;
    get_resize_grip_area(): [boolean, Gdk.Rectangle];
    get_role(): string | null;
    get_screen(): Gdk.Screen;
    get_size(): [number, number];
    get_skip_pager_hint(): boolean;
    get_skip_taskbar_hint(): boolean;
    get_title(): string | null;
    get_titlebar(): Widget | null;
    get_transient_for(): Window | null;
    get_type_hint(): Gdk.WindowTypeHint;
    get_urgency_hint(): boolean;
    get_window_type(): WindowType;
    has_group(): boolean;
    has_toplevel_focus(): boolean;
    iconify(): void;
    is_active(): boolean;
    is_maximized(): boolean;
    maximize(): void;
    mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean;
    // Conflicted with Gtk.Widget.mnemonic_activate
    mnemonic_activate(...args: never[]): any;
    move(x: number, y: number): void;
    parse_geometry(geometry: string): boolean;
    present(): void;
    present_with_time(timestamp: number): void;
    propagate_key_event(event: Gdk.EventKey): boolean;
    remove_accel_group(accel_group: AccelGroup): void;
    remove_mnemonic(keyval: number, target: Widget): void;
    reshow_with_initial_size(): void;
    resize(width: number, height: number): void;
    resize_grip_is_visible(): boolean;
    resize_to_geometry(width: number, height: number): void;
    set_accept_focus(setting: boolean): void;
    set_application(application?: Application | null): void;
    set_attached_to(attach_widget?: Widget | null): void;
    set_decorated(setting: boolean): void;
    set_default(default_widget?: Widget | null): void;
    set_default_geometry(width: number, height: number): void;
    set_default_size(width: number, height: number): void;
    set_deletable(setting: boolean): void;
    set_destroy_with_parent(setting: boolean): void;
    set_focus(focus?: Widget | null): void;
    set_focus_on_map(setting: boolean): void;
    set_focus_visible(setting: boolean): void;
    set_geometry_hints(geometry_widget: Widget | null, geometry: Gdk.Geometry | null, geom_mask: Gdk.WindowHints): void;
    set_gravity(gravity: Gdk.Gravity): void;
    set_has_resize_grip(value: boolean): void;
    set_has_user_ref_count(setting: boolean): void;
    set_hide_titlebar_when_maximized(setting: boolean): void;
    set_icon(icon?: GdkPixbuf.Pixbuf | null): void;
    set_icon_from_file(filename: string): boolean;
    set_icon_list(list: GdkPixbuf.Pixbuf[]): void;
    set_icon_name(name?: string | null): void;
    set_keep_above(setting: boolean): void;
    set_keep_below(setting: boolean): void;
    set_mnemonic_modifier(modifier: Gdk.ModifierType): void;
    set_mnemonics_visible(setting: boolean): void;
    set_modal(modal: boolean): void;
    set_opacity(opacity: number): void;
    set_position(position: WindowPosition): void;
    set_resizable(resizable: boolean): void;
    set_role(role: string): void;
    set_screen(screen: Gdk.Screen): void;
    set_skip_pager_hint(setting: boolean): void;
    set_skip_taskbar_hint(setting: boolean): void;
    set_startup_id(startup_id: string): void;
    set_title(title: string): void;
    set_titlebar(titlebar?: Widget | null): void;
    set_transient_for(parent?: Window | null): void;
    set_type_hint(hint: Gdk.WindowTypeHint): void;
    set_urgency_hint(setting: boolean): void;
    set_wmclass(wmclass_name: string, wmclass_class: string): void;
    stick(): void;
    unfullscreen(): void;
    unmaximize(): void;
    unstick(): void;
    vfunc_activate_default(): void;
    vfunc_activate_focus(): void;
    vfunc_enable_debugging(toggle: boolean): boolean;
    vfunc_keys_changed(): void;
    vfunc_set_focus(focus?: Widget | null): void;
    static get_default_icon_list(): GdkPixbuf.Pixbuf[];
    static get_default_icon_name(): string;
    static list_toplevels(): Widget[];
    static set_auto_startup_notification(setting: boolean): void;
    static set_default_icon(icon: GdkPixbuf.Pixbuf): void;
    static set_default_icon_from_file(filename: string): boolean;
    static set_default_icon_list(list: GdkPixbuf.Pixbuf[]): void;
    static set_default_icon_name(name: string): void;
    static set_interactive_debugging(enable: boolean): void;
}
export module WindowAccessible {
    export interface ConstructorProperties extends ContainerAccessible.ConstructorProperties {
        [key: string]: any;
    }
}
export class WindowAccessible extends ContainerAccessible implements Atk.Component, Atk.Window {
    static $gtype: GObject.GType<WindowAccessible>;

    constructor(properties?: Partial<WindowAccessible.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WindowAccessible.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: WindowAccessiblePrivate | any;
}
export module WindowGroup {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class WindowGroup extends GObject.Object {
    static $gtype: GObject.GType<WindowGroup>;

    constructor(properties?: Partial<WindowGroup.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<WindowGroup.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: WindowGroupPrivate;

    // Constructors

    static ["new"](): WindowGroup;

    // Members

    add_window(window: Window): void;
    get_current_device_grab(device: Gdk.Device): Widget | null;
    get_current_grab(): Widget;
    list_windows(): Window[];
    remove_window(window: Window): void;
}

export class AboutDialogPrivate {
    static $gtype: GObject.GType<AboutDialogPrivate>;

    constructor(copy: AboutDialogPrivate);
}

export class AccelGroupEntry {
    static $gtype: GObject.GType<AccelGroupEntry>;

    constructor(copy: AccelGroupEntry);

    // Fields
    key: AccelKey;
    closure: GObject.Closure;
    accel_path_quark: GLib.Quark;
}

export class AccelGroupPrivate {
    static $gtype: GObject.GType<AccelGroupPrivate>;

    constructor(copy: AccelGroupPrivate);
}

export class AccelKey {
    static $gtype: GObject.GType<AccelKey>;

    constructor(copy: AccelKey);

    // Fields
    accel_key: number;
    accel_mods: Gdk.ModifierType;
    accel_flags: number;
}

export class AccelLabelPrivate {
    static $gtype: GObject.GType<AccelLabelPrivate>;

    constructor(copy: AccelLabelPrivate);
}

export class AccessiblePrivate {
    static $gtype: GObject.GType<AccessiblePrivate>;

    constructor(copy: AccessiblePrivate);
}

export class ActionBarPrivate {
    static $gtype: GObject.GType<ActionBarPrivate>;

    constructor(copy: ActionBarPrivate);
}

export class ActionEntry {
    static $gtype: GObject.GType<ActionEntry>;

    constructor(copy: ActionEntry);

    // Fields
    name: string;
    stock_id: string;
    label: string;
    accelerator: string;
    tooltip: string;
    callback: GObject.Callback;
}

export class ActionGroupPrivate {
    static $gtype: GObject.GType<ActionGroupPrivate>;

    constructor(copy: ActionGroupPrivate);
}

export class ActionPrivate {
    static $gtype: GObject.GType<ActionPrivate>;

    constructor(copy: ActionPrivate);
}

export class AdjustmentPrivate {
    static $gtype: GObject.GType<AdjustmentPrivate>;

    constructor(copy: AdjustmentPrivate);
}

export class AlignmentPrivate {
    static $gtype: GObject.GType<AlignmentPrivate>;

    constructor(copy: AlignmentPrivate);
}

export class AppChooserButtonPrivate {
    static $gtype: GObject.GType<AppChooserButtonPrivate>;

    constructor(copy: AppChooserButtonPrivate);
}

export class AppChooserDialogPrivate {
    static $gtype: GObject.GType<AppChooserDialogPrivate>;

    constructor(copy: AppChooserDialogPrivate);
}

export class AppChooserWidgetPrivate {
    static $gtype: GObject.GType<AppChooserWidgetPrivate>;

    constructor(copy: AppChooserWidgetPrivate);
}

export class ApplicationPrivate {
    static $gtype: GObject.GType<ApplicationPrivate>;

    constructor(copy: ApplicationPrivate);
}

export class ApplicationWindowPrivate {
    static $gtype: GObject.GType<ApplicationWindowPrivate>;

    constructor(copy: ApplicationWindowPrivate);
}

export class ArrowAccessiblePrivate {
    static $gtype: GObject.GType<ArrowAccessiblePrivate>;

    constructor(copy: ArrowAccessiblePrivate);
}

export class ArrowPrivate {
    static $gtype: GObject.GType<ArrowPrivate>;

    constructor(copy: ArrowPrivate);
}

export class AspectFramePrivate {
    static $gtype: GObject.GType<AspectFramePrivate>;

    constructor(copy: AspectFramePrivate);
}

export class AssistantPrivate {
    static $gtype: GObject.GType<AssistantPrivate>;

    constructor(copy: AssistantPrivate);
}

export class BinPrivate {
    static $gtype: GObject.GType<BinPrivate>;

    constructor(copy: BinPrivate);
}

export class BindingArg {
    static $gtype: GObject.GType<BindingArg>;

    constructor(copy: BindingArg);

    // Fields
    arg_type: GObject.GType;
}

export class BindingEntry {
    static $gtype: GObject.GType<BindingEntry>;

    constructor(copy: BindingEntry);

    // Fields
    keyval: number;
    modifiers: Gdk.ModifierType;
    binding_set: BindingSet;
    destroyed: number;
    in_emission: number;
    marks_unbound: number;
    set_next: BindingEntry;
    hash_next: BindingEntry;
    signals: BindingSignal;

    // Members
    static add_signal_from_string(binding_set: BindingSet, signal_desc: string): GLib.TokenType;
    static add_signall(
        binding_set: BindingSet,
        keyval: number,
        modifiers: Gdk.ModifierType,
        signal_name: string,
        binding_args: BindingArg[]
    ): void;
    static remove(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType): void;
    static skip(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType): void;
}

export class BindingSet {
    static $gtype: GObject.GType<BindingSet>;

    constructor(copy: BindingSet);

    // Fields
    set_name: string;
    priority: number;
    widget_path_pspecs: any[];
    widget_class_pspecs: any[];
    class_branch_pspecs: any[];
    entries: BindingEntry;
    current: BindingEntry;
    parsed: number;

    // Members
    activate(keyval: number, modifiers: Gdk.ModifierType, object: GObject.Object): boolean;
    add_path(path_type: PathType, path_pattern: string, priority: PathPriorityType): void;
    static find(set_name: string): BindingSet | null;
}

export class BindingSignal {
    static $gtype: GObject.GType<BindingSignal>;

    constructor(copy: BindingSignal);

    // Fields
    next: BindingSignal;
    signal_name: string;
    n_args: number;
    args: BindingArg[];
}

export class BooleanCellAccessiblePrivate {
    static $gtype: GObject.GType<BooleanCellAccessiblePrivate>;

    constructor(copy: BooleanCellAccessiblePrivate);
}

export class Border {
    static $gtype: GObject.GType<Border>;

    constructor();
    constructor(
        properties?: Partial<{
            left?: number;
            right?: number;
            top?: number;
            bottom?: number;
        }>
    );
    constructor(copy: Border);

    // Fields
    left: number;
    right: number;
    top: number;
    bottom: number;

    // Constructors
    static ["new"](): Border;

    // Members
    copy(): Border;
    free(): void;
}

export class BoxPrivate {
    static $gtype: GObject.GType<BoxPrivate>;

    constructor(copy: BoxPrivate);
}

export class BuilderPrivate {
    static $gtype: GObject.GType<BuilderPrivate>;

    constructor(copy: BuilderPrivate);
}

export class ButtonAccessiblePrivate {
    static $gtype: GObject.GType<ButtonAccessiblePrivate>;

    constructor(copy: ButtonAccessiblePrivate);
}

export class ButtonBoxPrivate {
    static $gtype: GObject.GType<ButtonBoxPrivate>;

    constructor(copy: ButtonBoxPrivate);
}

export class ButtonPrivate {
    static $gtype: GObject.GType<ButtonPrivate>;

    constructor(copy: ButtonPrivate);
}

export class CalendarPrivate {
    static $gtype: GObject.GType<CalendarPrivate>;

    constructor(copy: CalendarPrivate);
}

export class CellAccessiblePrivate {
    static $gtype: GObject.GType<CellAccessiblePrivate>;

    constructor(copy: CellAccessiblePrivate);
}

export class CellAreaBoxPrivate {
    static $gtype: GObject.GType<CellAreaBoxPrivate>;

    constructor(copy: CellAreaBoxPrivate);
}

export class CellAreaContextPrivate {
    static $gtype: GObject.GType<CellAreaContextPrivate>;

    constructor(copy: CellAreaContextPrivate);
}

export class CellAreaPrivate {
    static $gtype: GObject.GType<CellAreaPrivate>;

    constructor(copy: CellAreaPrivate);
}

export class CellRendererAccelPrivate {
    static $gtype: GObject.GType<CellRendererAccelPrivate>;

    constructor(copy: CellRendererAccelPrivate);
}

export class CellRendererClassPrivate {
    static $gtype: GObject.GType<CellRendererClassPrivate>;

    constructor(copy: CellRendererClassPrivate);
}

export class CellRendererComboPrivate {
    static $gtype: GObject.GType<CellRendererComboPrivate>;

    constructor(copy: CellRendererComboPrivate);
}

export class CellRendererPixbufPrivate {
    static $gtype: GObject.GType<CellRendererPixbufPrivate>;

    constructor(copy: CellRendererPixbufPrivate);
}

export class CellRendererPrivate {
    static $gtype: GObject.GType<CellRendererPrivate>;

    constructor(copy: CellRendererPrivate);
}

export class CellRendererProgressPrivate {
    static $gtype: GObject.GType<CellRendererProgressPrivate>;

    constructor(copy: CellRendererProgressPrivate);
}

export class CellRendererSpinPrivate {
    static $gtype: GObject.GType<CellRendererSpinPrivate>;

    constructor(copy: CellRendererSpinPrivate);
}

export class CellRendererSpinnerPrivate {
    static $gtype: GObject.GType<CellRendererSpinnerPrivate>;

    constructor(copy: CellRendererSpinnerPrivate);
}

export class CellRendererTextPrivate {
    static $gtype: GObject.GType<CellRendererTextPrivate>;

    constructor(copy: CellRendererTextPrivate);
}

export class CellRendererTogglePrivate {
    static $gtype: GObject.GType<CellRendererTogglePrivate>;

    constructor(copy: CellRendererTogglePrivate);
}

export class CellViewPrivate {
    static $gtype: GObject.GType<CellViewPrivate>;

    constructor(copy: CellViewPrivate);
}

export class CheckMenuItemAccessiblePrivate {
    static $gtype: GObject.GType<CheckMenuItemAccessiblePrivate>;

    constructor(copy: CheckMenuItemAccessiblePrivate);
}

export class CheckMenuItemPrivate {
    static $gtype: GObject.GType<CheckMenuItemPrivate>;

    constructor(copy: CheckMenuItemPrivate);
}

export class ColorButtonPrivate {
    static $gtype: GObject.GType<ColorButtonPrivate>;

    constructor(copy: ColorButtonPrivate);
}

export class ColorChooserDialogPrivate {
    static $gtype: GObject.GType<ColorChooserDialogPrivate>;

    constructor(copy: ColorChooserDialogPrivate);
}

export class ColorChooserWidgetPrivate {
    static $gtype: GObject.GType<ColorChooserWidgetPrivate>;

    constructor(copy: ColorChooserWidgetPrivate);
}

export class ColorSelectionDialogPrivate {
    static $gtype: GObject.GType<ColorSelectionDialogPrivate>;

    constructor(copy: ColorSelectionDialogPrivate);
}

export class ColorSelectionPrivate {
    static $gtype: GObject.GType<ColorSelectionPrivate>;

    constructor(copy: ColorSelectionPrivate);
}

export class ComboBoxAccessiblePrivate {
    static $gtype: GObject.GType<ComboBoxAccessiblePrivate>;

    constructor(copy: ComboBoxAccessiblePrivate);
}

export class ComboBoxPrivate {
    static $gtype: GObject.GType<ComboBoxPrivate>;

    constructor(copy: ComboBoxPrivate);
}

export class ComboBoxTextPrivate {
    static $gtype: GObject.GType<ComboBoxTextPrivate>;

    constructor(copy: ComboBoxTextPrivate);
}

export class ContainerAccessiblePrivate {
    static $gtype: GObject.GType<ContainerAccessiblePrivate>;

    constructor(copy: ContainerAccessiblePrivate);
}

export class ContainerCellAccessiblePrivate {
    static $gtype: GObject.GType<ContainerCellAccessiblePrivate>;

    constructor(copy: ContainerCellAccessiblePrivate);
}

export class ContainerPrivate {
    static $gtype: GObject.GType<ContainerPrivate>;

    constructor(copy: ContainerPrivate);
}

export class CssProviderPrivate {
    static $gtype: GObject.GType<CssProviderPrivate>;

    constructor(copy: CssProviderPrivate);
}

export class CssSection {
    static $gtype: GObject.GType<CssSection>;

    constructor(copy: CssSection);

    // Members
    get_end_line(): number;
    get_end_position(): number;
    get_file(): Gio.File;
    get_parent(): CssSection | null;
    get_section_type(): CssSectionType;
    get_start_line(): number;
    get_start_position(): number;
    ref(): CssSection;
    unref(): void;
}

export class DialogPrivate {
    static $gtype: GObject.GType<DialogPrivate>;

    constructor(copy: DialogPrivate);
}

export class EntryAccessiblePrivate {
    static $gtype: GObject.GType<EntryAccessiblePrivate>;

    constructor(copy: EntryAccessiblePrivate);
}

export class EntryBufferPrivate {
    static $gtype: GObject.GType<EntryBufferPrivate>;

    constructor(copy: EntryBufferPrivate);
}

export class EntryCompletionPrivate {
    static $gtype: GObject.GType<EntryCompletionPrivate>;

    constructor(copy: EntryCompletionPrivate);
}

export class EntryPrivate {
    static $gtype: GObject.GType<EntryPrivate>;

    constructor(copy: EntryPrivate);
}

export class EventBoxPrivate {
    static $gtype: GObject.GType<EventBoxPrivate>;

    constructor(copy: EventBoxPrivate);
}

export class ExpanderAccessiblePrivate {
    static $gtype: GObject.GType<ExpanderAccessiblePrivate>;

    constructor(copy: ExpanderAccessiblePrivate);
}

export class ExpanderPrivate {
    static $gtype: GObject.GType<ExpanderPrivate>;

    constructor(copy: ExpanderPrivate);
}

export class FileChooserButtonPrivate {
    static $gtype: GObject.GType<FileChooserButtonPrivate>;

    constructor(copy: FileChooserButtonPrivate);
}

export class FileChooserDialogPrivate {
    static $gtype: GObject.GType<FileChooserDialogPrivate>;

    constructor(copy: FileChooserDialogPrivate);
}

export class FileChooserWidgetAccessiblePrivate {
    static $gtype: GObject.GType<FileChooserWidgetAccessiblePrivate>;

    constructor(copy: FileChooserWidgetAccessiblePrivate);
}

export class FileChooserWidgetPrivate {
    static $gtype: GObject.GType<FileChooserWidgetPrivate>;

    constructor(copy: FileChooserWidgetPrivate);
}

export class FileFilterInfo {
    static $gtype: GObject.GType<FileFilterInfo>;

    constructor(copy: FileFilterInfo);

    // Fields
    contains: FileFilterFlags;
    filename: string;
    uri: string;
    display_name: string;
    mime_type: string;
}

export class FixedChild {
    static $gtype: GObject.GType<FixedChild>;

    constructor(copy: FixedChild);

    // Fields
    widget: Widget;
    x: number;
    y: number;
}

export class FixedPrivate {
    static $gtype: GObject.GType<FixedPrivate>;

    constructor(copy: FixedPrivate);
}

export class FlowBoxAccessiblePrivate {
    static $gtype: GObject.GType<FlowBoxAccessiblePrivate>;

    constructor(copy: FlowBoxAccessiblePrivate);
}

export class FontButtonPrivate {
    static $gtype: GObject.GType<FontButtonPrivate>;

    constructor(copy: FontButtonPrivate);
}

export class FontChooserDialogPrivate {
    static $gtype: GObject.GType<FontChooserDialogPrivate>;

    constructor(copy: FontChooserDialogPrivate);
}

export class FontChooserWidgetPrivate {
    static $gtype: GObject.GType<FontChooserWidgetPrivate>;

    constructor(copy: FontChooserWidgetPrivate);
}

export class FontSelectionDialogPrivate {
    static $gtype: GObject.GType<FontSelectionDialogPrivate>;

    constructor(copy: FontSelectionDialogPrivate);
}

export class FontSelectionPrivate {
    static $gtype: GObject.GType<FontSelectionPrivate>;

    constructor(copy: FontSelectionPrivate);
}

export class FrameAccessiblePrivate {
    static $gtype: GObject.GType<FrameAccessiblePrivate>;

    constructor(copy: FrameAccessiblePrivate);
}

export class FramePrivate {
    static $gtype: GObject.GType<FramePrivate>;

    constructor(copy: FramePrivate);
}

export class Gradient {
    static $gtype: GObject.GType<Gradient>;

    constructor(x0: number, y0: number, x1: number, y1: number);
    constructor(copy: Gradient);

    // Constructors
    static new_linear(x0: number, y0: number, x1: number, y1: number): Gradient;
    static new_radial(x0: number, y0: number, radius0: number, x1: number, y1: number, radius1: number): Gradient;

    // Members
    add_color_stop(offset: number, color: SymbolicColor): void;
    ref(): Gradient;
    resolve(props: StyleProperties): [boolean, cairo.Pattern];
    resolve_for_context(context: StyleContext): cairo.Pattern;
    to_string(): string;
    unref(): void;
}

export class GridPrivate {
    static $gtype: GObject.GType<GridPrivate>;

    constructor(copy: GridPrivate);
}

export class HSVPrivate {
    static $gtype: GObject.GType<HSVPrivate>;

    constructor(copy: HSVPrivate);
}

export class HandleBoxPrivate {
    static $gtype: GObject.GType<HandleBoxPrivate>;

    constructor(copy: HandleBoxPrivate);
}

export class HeaderBarAccessiblePrivate {
    static $gtype: GObject.GType<HeaderBarAccessiblePrivate>;

    constructor(copy: HeaderBarAccessiblePrivate);
}

export class HeaderBarPrivate {
    static $gtype: GObject.GType<HeaderBarPrivate>;

    constructor(copy: HeaderBarPrivate);
}

export class IMContextInfo {
    static $gtype: GObject.GType<IMContextInfo>;

    constructor(
        properties?: Partial<{
            context_id?: string;
            context_name?: string;
            domain?: string;
            domain_dirname?: string;
            default_locales?: string;
        }>
    );
    constructor(copy: IMContextInfo);

    // Fields
    context_id: string;
    context_name: string;
    domain: string;
    domain_dirname: string;
    default_locales: string;
}

export class IMContextSimplePrivate {
    static $gtype: GObject.GType<IMContextSimplePrivate>;

    constructor(copy: IMContextSimplePrivate);
}

export class IMMulticontextPrivate {
    static $gtype: GObject.GType<IMMulticontextPrivate>;

    constructor(copy: IMMulticontextPrivate);
}

export class IconFactoryPrivate {
    static $gtype: GObject.GType<IconFactoryPrivate>;

    constructor(copy: IconFactoryPrivate);
}

export class IconSet {
    static $gtype: GObject.GType<IconSet>;

    constructor();
    constructor(properties?: Partial<{}>);
    constructor(copy: IconSet);

    // Constructors
    static ["new"](): IconSet;
    static new_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf): IconSet;

    // Members
    add_source(source: IconSource): void;
    copy(): IconSet;
    get_sizes(): number[];
    ref(): IconSet;
    render_icon(
        style: Style | null,
        direction: TextDirection,
        state: StateType,
        size: number,
        widget?: Widget | null,
        detail?: string | null
    ): GdkPixbuf.Pixbuf;
    render_icon_pixbuf(context: StyleContext, size: number): GdkPixbuf.Pixbuf;
    render_icon_surface(
        context: StyleContext,
        size: number,
        scale: number,
        for_window?: Gdk.Window | null
    ): cairo.Surface;
    unref(): void;
}

export class IconSource {
    static $gtype: GObject.GType<IconSource>;

    constructor();
    constructor(properties?: Partial<{}>);
    constructor(copy: IconSource);

    // Constructors
    static ["new"](): IconSource;

    // Members
    copy(): IconSource;
    free(): void;
    get_direction(): TextDirection;
    get_direction_wildcarded(): boolean;
    get_filename(): string;
    get_icon_name(): string;
    get_pixbuf(): GdkPixbuf.Pixbuf;
    get_size(): number;
    get_size_wildcarded(): boolean;
    get_state(): StateType;
    get_state_wildcarded(): boolean;
    set_direction(direction: TextDirection): void;
    set_direction_wildcarded(setting: boolean): void;
    set_filename(filename: string): void;
    set_icon_name(icon_name?: string | null): void;
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
    set_size(size: number): void;
    set_size_wildcarded(setting: boolean): void;
    set_state(state: StateType): void;
    set_state_wildcarded(setting: boolean): void;
}

export class IconThemePrivate {
    static $gtype: GObject.GType<IconThemePrivate>;

    constructor(copy: IconThemePrivate);
}

export class IconViewAccessiblePrivate {
    static $gtype: GObject.GType<IconViewAccessiblePrivate>;

    constructor(copy: IconViewAccessiblePrivate);
}

export class IconViewPrivate {
    static $gtype: GObject.GType<IconViewPrivate>;

    constructor(copy: IconViewPrivate);
}

export class ImageAccessiblePrivate {
    static $gtype: GObject.GType<ImageAccessiblePrivate>;

    constructor(copy: ImageAccessiblePrivate);
}

export class ImageCellAccessiblePrivate {
    static $gtype: GObject.GType<ImageCellAccessiblePrivate>;

    constructor(copy: ImageCellAccessiblePrivate);
}

export class ImageMenuItemPrivate {
    static $gtype: GObject.GType<ImageMenuItemPrivate>;

    constructor(copy: ImageMenuItemPrivate);
}

export class ImagePrivate {
    static $gtype: GObject.GType<ImagePrivate>;

    constructor(copy: ImagePrivate);
}

export class InfoBarPrivate {
    static $gtype: GObject.GType<InfoBarPrivate>;

    constructor(copy: InfoBarPrivate);
}

export class InvisiblePrivate {
    static $gtype: GObject.GType<InvisiblePrivate>;

    constructor(copy: InvisiblePrivate);
}

export class LabelAccessiblePrivate {
    static $gtype: GObject.GType<LabelAccessiblePrivate>;

    constructor(copy: LabelAccessiblePrivate);
}

export class LabelPrivate {
    static $gtype: GObject.GType<LabelPrivate>;

    constructor(copy: LabelPrivate);
}

export class LabelSelectionInfo {
    static $gtype: GObject.GType<LabelSelectionInfo>;

    constructor(copy: LabelSelectionInfo);
}

export class LayoutPrivate {
    static $gtype: GObject.GType<LayoutPrivate>;

    constructor(copy: LayoutPrivate);
}

export class LevelBarAccessiblePrivate {
    static $gtype: GObject.GType<LevelBarAccessiblePrivate>;

    constructor(copy: LevelBarAccessiblePrivate);
}

export class LevelBarPrivate {
    static $gtype: GObject.GType<LevelBarPrivate>;

    constructor(copy: LevelBarPrivate);
}

export class LinkButtonAccessiblePrivate {
    static $gtype: GObject.GType<LinkButtonAccessiblePrivate>;

    constructor(copy: LinkButtonAccessiblePrivate);
}

export class LinkButtonPrivate {
    static $gtype: GObject.GType<LinkButtonPrivate>;

    constructor(copy: LinkButtonPrivate);
}

export class ListBoxAccessiblePrivate {
    static $gtype: GObject.GType<ListBoxAccessiblePrivate>;

    constructor(copy: ListBoxAccessiblePrivate);
}

export class ListStorePrivate {
    static $gtype: GObject.GType<ListStorePrivate>;

    constructor(copy: ListStorePrivate);
}

export class LockButtonAccessiblePrivate {
    static $gtype: GObject.GType<LockButtonAccessiblePrivate>;

    constructor(copy: LockButtonAccessiblePrivate);
}

export class LockButtonPrivate {
    static $gtype: GObject.GType<LockButtonPrivate>;

    constructor(copy: LockButtonPrivate);
}

export class MenuAccessiblePrivate {
    static $gtype: GObject.GType<MenuAccessiblePrivate>;

    constructor(copy: MenuAccessiblePrivate);
}

export class MenuBarPrivate {
    static $gtype: GObject.GType<MenuBarPrivate>;

    constructor(copy: MenuBarPrivate);
}

export class MenuButtonAccessiblePrivate {
    static $gtype: GObject.GType<MenuButtonAccessiblePrivate>;

    constructor(copy: MenuButtonAccessiblePrivate);
}

export class MenuButtonPrivate {
    static $gtype: GObject.GType<MenuButtonPrivate>;

    constructor(copy: MenuButtonPrivate);
}

export class MenuItemAccessiblePrivate {
    static $gtype: GObject.GType<MenuItemAccessiblePrivate>;

    constructor(copy: MenuItemAccessiblePrivate);
}

export class MenuItemPrivate {
    static $gtype: GObject.GType<MenuItemPrivate>;

    constructor(copy: MenuItemPrivate);
}

export class MenuPrivate {
    static $gtype: GObject.GType<MenuPrivate>;

    constructor(copy: MenuPrivate);
}

export class MenuShellAccessiblePrivate {
    static $gtype: GObject.GType<MenuShellAccessiblePrivate>;

    constructor(copy: MenuShellAccessiblePrivate);
}

export class MenuShellPrivate {
    static $gtype: GObject.GType<MenuShellPrivate>;

    constructor(copy: MenuShellPrivate);
}

export class MenuToolButtonPrivate {
    static $gtype: GObject.GType<MenuToolButtonPrivate>;

    constructor(copy: MenuToolButtonPrivate);
}

export class MessageDialogPrivate {
    static $gtype: GObject.GType<MessageDialogPrivate>;

    constructor(copy: MessageDialogPrivate);
}

export class MiscPrivate {
    static $gtype: GObject.GType<MiscPrivate>;

    constructor(copy: MiscPrivate);
}

export class MountOperationPrivate {
    static $gtype: GObject.GType<MountOperationPrivate>;

    constructor(copy: MountOperationPrivate);
}

export class NotebookAccessiblePrivate {
    static $gtype: GObject.GType<NotebookAccessiblePrivate>;

    constructor(copy: NotebookAccessiblePrivate);
}

export class NotebookPageAccessiblePrivate {
    static $gtype: GObject.GType<NotebookPageAccessiblePrivate>;

    constructor(copy: NotebookPageAccessiblePrivate);
}

export class NotebookPrivate {
    static $gtype: GObject.GType<NotebookPrivate>;

    constructor(copy: NotebookPrivate);
}

export class NumerableIconPrivate {
    static $gtype: GObject.GType<NumerableIconPrivate>;

    constructor(copy: NumerableIconPrivate);
}

export class OverlayPrivate {
    static $gtype: GObject.GType<OverlayPrivate>;

    constructor(copy: OverlayPrivate);
}

export class PadActionEntry {
    static $gtype: GObject.GType<PadActionEntry>;

    constructor(copy: PadActionEntry);

    // Fields
    type: PadActionType;
    index: number;
    mode: number;
    label: string;
    action_name: string;
}

export class PageRange {
    static $gtype: GObject.GType<PageRange>;

    constructor(
        properties?: Partial<{
            start?: number;
            end?: number;
        }>
    );
    constructor(copy: PageRange);

    // Fields
    start: number;
    end: number;
}

export class PanedAccessiblePrivate {
    static $gtype: GObject.GType<PanedAccessiblePrivate>;

    constructor(copy: PanedAccessiblePrivate);
}

export class PanedPrivate {
    static $gtype: GObject.GType<PanedPrivate>;

    constructor(copy: PanedPrivate);
}

export class PaperSize {
    static $gtype: GObject.GType<PaperSize>;

    constructor(name?: string | null);
    constructor(copy: PaperSize);

    // Constructors
    static ["new"](name?: string | null): PaperSize;
    static new_custom(name: string, display_name: string, width: number, height: number, unit: Unit): PaperSize;
    static new_from_gvariant(variant: GLib.Variant): PaperSize;
    static new_from_ipp(ipp_name: string, width: number, height: number): PaperSize;
    static new_from_key_file(key_file: GLib.KeyFile, group_name?: string | null): PaperSize;
    static new_from_ppd(ppd_name: string, ppd_display_name: string, width: number, height: number): PaperSize;

    // Members
    copy(): PaperSize;
    free(): void;
    get_default_bottom_margin(unit: Unit): number;
    get_default_left_margin(unit: Unit): number;
    get_default_right_margin(unit: Unit): number;
    get_default_top_margin(unit: Unit): number;
    get_display_name(): string;
    get_height(unit: Unit): number;
    get_name(): string;
    get_ppd_name(): string;
    get_width(unit: Unit): number;
    is_custom(): boolean;
    is_equal(size2: PaperSize): boolean;
    is_ipp(): boolean;
    set_size(width: number, height: number, unit: Unit): void;
    to_gvariant(): GLib.Variant;
    to_key_file(key_file: GLib.KeyFile, group_name: string): void;
    static get_default(): string;
    static get_paper_sizes(include_custom: boolean): PaperSize[];
}

export class PlugAccessiblePrivate {
    static $gtype: GObject.GType<PlugAccessiblePrivate>;

    constructor(copy: PlugAccessiblePrivate);
}

export class PlugPrivate {
    static $gtype: GObject.GType<PlugPrivate>;

    constructor(copy: PlugPrivate);
}

export class PopoverPrivate {
    static $gtype: GObject.GType<PopoverPrivate>;

    constructor(copy: PopoverPrivate);
}

export class PrintOperationPrivate {
    static $gtype: GObject.GType<PrintOperationPrivate>;

    constructor(copy: PrintOperationPrivate);
}

export class ProgressBarAccessiblePrivate {
    static $gtype: GObject.GType<ProgressBarAccessiblePrivate>;

    constructor(copy: ProgressBarAccessiblePrivate);
}

export class ProgressBarPrivate {
    static $gtype: GObject.GType<ProgressBarPrivate>;

    constructor(copy: ProgressBarPrivate);
}

export class RadioActionEntry {
    static $gtype: GObject.GType<RadioActionEntry>;

    constructor(
        properties?: Partial<{
            name?: string;
            stock_id?: string;
            label?: string;
            accelerator?: string;
            tooltip?: string;
            value?: number;
        }>
    );
    constructor(copy: RadioActionEntry);

    // Fields
    name: string;
    stock_id: string;
    label: string;
    accelerator: string;
    tooltip: string;
    value: number;
}

export class RadioActionPrivate {
    static $gtype: GObject.GType<RadioActionPrivate>;

    constructor(copy: RadioActionPrivate);
}

export class RadioButtonAccessiblePrivate {
    static $gtype: GObject.GType<RadioButtonAccessiblePrivate>;

    constructor(copy: RadioButtonAccessiblePrivate);
}

export class RadioButtonPrivate {
    static $gtype: GObject.GType<RadioButtonPrivate>;

    constructor(copy: RadioButtonPrivate);
}

export class RadioMenuItemAccessiblePrivate {
    static $gtype: GObject.GType<RadioMenuItemAccessiblePrivate>;

    constructor(copy: RadioMenuItemAccessiblePrivate);
}

export class RadioMenuItemPrivate {
    static $gtype: GObject.GType<RadioMenuItemPrivate>;

    constructor(copy: RadioMenuItemPrivate);
}

export class RangeAccessiblePrivate {
    static $gtype: GObject.GType<RangeAccessiblePrivate>;

    constructor(copy: RangeAccessiblePrivate);
}

export class RangePrivate {
    static $gtype: GObject.GType<RangePrivate>;

    constructor(copy: RangePrivate);
}

export class RcContext {
    static $gtype: GObject.GType<RcContext>;

    constructor(copy: RcContext);
}

export class RcProperty {
    static $gtype: GObject.GType<RcProperty>;

    constructor(copy: RcProperty);

    // Fields
    type_name: GLib.Quark;
    property_name: GLib.Quark;
    origin: string;
    value: GObject.Value;

    // Members
    static parse_border(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value | any): boolean;
    static parse_color(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value | any): boolean;
    static parse_enum(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value | any): boolean;
    static parse_flags(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value | any): boolean;
    static parse_requisition(
        pspec: GObject.ParamSpec,
        gstring: GLib.String,
        property_value: GObject.Value | any
    ): boolean;
}

export class RecentActionPrivate {
    static $gtype: GObject.GType<RecentActionPrivate>;

    constructor(copy: RecentActionPrivate);
}

export class RecentChooserDialogPrivate {
    static $gtype: GObject.GType<RecentChooserDialogPrivate>;

    constructor(copy: RecentChooserDialogPrivate);
}

export class RecentChooserMenuPrivate {
    static $gtype: GObject.GType<RecentChooserMenuPrivate>;

    constructor(copy: RecentChooserMenuPrivate);
}

export class RecentChooserWidgetPrivate {
    static $gtype: GObject.GType<RecentChooserWidgetPrivate>;

    constructor(copy: RecentChooserWidgetPrivate);
}

export class RecentData {
    static $gtype: GObject.GType<RecentData>;

    constructor(copy: RecentData);

    // Fields
    display_name: string;
    description: string;
    mime_type: string;
    app_name: string;
    app_exec: string;
    groups: string[];
    is_private: boolean;
}

export class RecentFilterInfo {
    static $gtype: GObject.GType<RecentFilterInfo>;

    constructor(copy: RecentFilterInfo);

    // Fields
    contains: RecentFilterFlags;
    uri: string;
    display_name: string;
    mime_type: string;
    applications: string[];
    groups: string[];
    age: number;
}

export class RecentInfo {
    static $gtype: GObject.GType<RecentInfo>;

    constructor(copy: RecentInfo);

    // Members
    create_app_info(app_name?: string | null): Gio.AppInfo | null;
    exists(): boolean;
    get_added(): number;
    get_age(): number;
    get_application_info(app_name: string): [boolean, string, number, number];
    get_applications(): string[];
    get_description(): string;
    get_display_name(): string;
    get_gicon(): Gio.Icon | null;
    get_groups(): string[];
    get_icon(size: number): GdkPixbuf.Pixbuf | null;
    get_mime_type(): string;
    get_modified(): number;
    get_private_hint(): boolean;
    get_short_name(): string;
    get_uri(): string;
    get_uri_display(): string | null;
    get_visited(): number;
    has_application(app_name: string): boolean;
    has_group(group_name: string): boolean;
    is_local(): boolean;
    last_application(): string;
    match(info_b: RecentInfo): boolean;
    ref(): RecentInfo;
    unref(): void;
}

export class RecentManagerPrivate {
    static $gtype: GObject.GType<RecentManagerPrivate>;

    constructor(copy: RecentManagerPrivate);
}

export class RendererCellAccessiblePrivate {
    static $gtype: GObject.GType<RendererCellAccessiblePrivate>;

    constructor(copy: RendererCellAccessiblePrivate);
}

export class RequestedSize {
    static $gtype: GObject.GType<RequestedSize>;

    constructor(
        properties?: Partial<{
            data?: any;
            minimum_size?: number;
            natural_size?: number;
        }>
    );
    constructor(copy: RequestedSize);

    // Fields
    data: any;
    minimum_size: number;
    natural_size: number;
}

export class Requisition {
    static $gtype: GObject.GType<Requisition>;

    constructor();
    constructor(
        properties?: Partial<{
            width?: number;
            height?: number;
        }>
    );
    constructor(copy: Requisition);

    // Fields
    width: number;
    height: number;

    // Constructors
    static ["new"](): Requisition;

    // Members
    copy(): Requisition;
    free(): void;
}

export class ScaleAccessiblePrivate {
    static $gtype: GObject.GType<ScaleAccessiblePrivate>;

    constructor(copy: ScaleAccessiblePrivate);
}

export class ScaleButtonAccessiblePrivate {
    static $gtype: GObject.GType<ScaleButtonAccessiblePrivate>;

    constructor(copy: ScaleButtonAccessiblePrivate);
}

export class ScaleButtonPrivate {
    static $gtype: GObject.GType<ScaleButtonPrivate>;

    constructor(copy: ScaleButtonPrivate);
}

export class ScalePrivate {
    static $gtype: GObject.GType<ScalePrivate>;

    constructor(copy: ScalePrivate);
}

export class ScrolledWindowAccessiblePrivate {
    static $gtype: GObject.GType<ScrolledWindowAccessiblePrivate>;

    constructor(copy: ScrolledWindowAccessiblePrivate);
}

export class ScrolledWindowPrivate {
    static $gtype: GObject.GType<ScrolledWindowPrivate>;

    constructor(copy: ScrolledWindowPrivate);
}

export class SelectionData {
    static $gtype: GObject.GType<SelectionData>;

    constructor(copy: SelectionData);

    // Members
    copy(): SelectionData;
    free(): void;
    get_data_type(): Gdk.Atom;
    get_data(): Uint8Array;
    get_display(): Gdk.Display;
    get_format(): number;
    get_length(): number;
    get_pixbuf(): GdkPixbuf.Pixbuf | null;
    get_selection(): Gdk.Atom;
    get_target(): Gdk.Atom;
    get_targets(): [boolean, Gdk.Atom[]];
    get_text(): string | null;
    get_uris(): string[];
    set(type: Gdk.Atom, format: number, data: Uint8Array | string): void;
    set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): boolean;
    set_text(str: string, len: number): boolean;
    set_uris(uris: string[]): boolean;
    targets_include_image(writable: boolean): boolean;
    targets_include_rich_text(buffer: TextBuffer): boolean;
    targets_include_text(): boolean;
    targets_include_uri(): boolean;
}

export class SeparatorPrivate {
    static $gtype: GObject.GType<SeparatorPrivate>;

    constructor(copy: SeparatorPrivate);
}

export class SeparatorToolItemPrivate {
    static $gtype: GObject.GType<SeparatorToolItemPrivate>;

    constructor(copy: SeparatorToolItemPrivate);
}

export class SettingsPrivate {
    static $gtype: GObject.GType<SettingsPrivate>;

    constructor(copy: SettingsPrivate);
}

export class SettingsValue {
    static $gtype: GObject.GType<SettingsValue>;

    constructor(copy: SettingsValue);

    // Fields
    origin: string;
    value: GObject.Value;
}

export class SizeGroupPrivate {
    static $gtype: GObject.GType<SizeGroupPrivate>;

    constructor(copy: SizeGroupPrivate);
}

export class SocketAccessiblePrivate {
    static $gtype: GObject.GType<SocketAccessiblePrivate>;

    constructor(copy: SocketAccessiblePrivate);
}

export class SocketPrivate {
    static $gtype: GObject.GType<SocketPrivate>;

    constructor(copy: SocketPrivate);
}

export class SpinButtonAccessiblePrivate {
    static $gtype: GObject.GType<SpinButtonAccessiblePrivate>;

    constructor(copy: SpinButtonAccessiblePrivate);
}

export class SpinButtonPrivate {
    static $gtype: GObject.GType<SpinButtonPrivate>;

    constructor(copy: SpinButtonPrivate);
}

export class SpinnerAccessiblePrivate {
    static $gtype: GObject.GType<SpinnerAccessiblePrivate>;

    constructor(copy: SpinnerAccessiblePrivate);
}

export class SpinnerPrivate {
    static $gtype: GObject.GType<SpinnerPrivate>;

    constructor(copy: SpinnerPrivate);
}

export class StackSidebarPrivate {
    static $gtype: GObject.GType<StackSidebarPrivate>;

    constructor(copy: StackSidebarPrivate);
}

export class StatusIconPrivate {
    static $gtype: GObject.GType<StatusIconPrivate>;

    constructor(copy: StatusIconPrivate);
}

export class StatusbarAccessiblePrivate {
    static $gtype: GObject.GType<StatusbarAccessiblePrivate>;

    constructor(copy: StatusbarAccessiblePrivate);
}

export class StatusbarPrivate {
    static $gtype: GObject.GType<StatusbarPrivate>;

    constructor(copy: StatusbarPrivate);
}

export class StockItem {
    static $gtype: GObject.GType<StockItem>;

    constructor(copy: StockItem);

    // Fields
    stock_id: string;
    label: string;
    modifier: Gdk.ModifierType;
    keyval: number;
    translation_domain: string;

    // Members
    free(): void;
}

export class StyleContextPrivate {
    static $gtype: GObject.GType<StyleContextPrivate>;

    constructor(copy: StyleContextPrivate);
}

export class StylePropertiesPrivate {
    static $gtype: GObject.GType<StylePropertiesPrivate>;

    constructor(copy: StylePropertiesPrivate);
}

export class SwitchAccessiblePrivate {
    static $gtype: GObject.GType<SwitchAccessiblePrivate>;

    constructor(copy: SwitchAccessiblePrivate);
}

export class SwitchPrivate {
    static $gtype: GObject.GType<SwitchPrivate>;

    constructor(copy: SwitchPrivate);
}

export class SymbolicColor {
    static $gtype: GObject.GType<SymbolicColor>;

    constructor(color: SymbolicColor, factor: number);
    constructor(copy: SymbolicColor);

    // Constructors
    static new_alpha(color: SymbolicColor, factor: number): SymbolicColor;
    static new_literal(color: Gdk.RGBA): SymbolicColor;
    static new_mix(color1: SymbolicColor, color2: SymbolicColor, factor: number): SymbolicColor;
    static new_name(name: string): SymbolicColor;
    static new_shade(color: SymbolicColor, factor: number): SymbolicColor;
    static new_win32(theme_class: string, id: number): SymbolicColor;

    // Members
    ref(): SymbolicColor;
    resolve(props: StyleProperties | null): [boolean, Gdk.RGBA];
    to_string(): string;
    unref(): void;
}

export class TableChild {
    static $gtype: GObject.GType<TableChild>;

    constructor(copy: TableChild);

    // Fields
    widget: Widget;
    left_attach: number;
    right_attach: number;
    top_attach: number;
    bottom_attach: number;
    xpadding: number;
    ypadding: number;
    xexpand: number;
    yexpand: number;
    xshrink: number;
    yshrink: number;
    xfill: number;
    yfill: number;
}

export class TablePrivate {
    static $gtype: GObject.GType<TablePrivate>;

    constructor(copy: TablePrivate);
}

export class TableRowCol {
    static $gtype: GObject.GType<TableRowCol>;

    constructor(
        properties?: Partial<{
            requisition?: number;
            allocation?: number;
            spacing?: number;
            need_expand?: number;
            need_shrink?: number;
            expand?: number;
            shrink?: number;
            empty?: number;
        }>
    );
    constructor(copy: TableRowCol);

    // Fields
    requisition: number;
    allocation: number;
    spacing: number;
    need_expand: number;
    need_shrink: number;
    expand: number;
    shrink: number;
    empty: number;
}

export class TargetEntry {
    static $gtype: GObject.GType<TargetEntry>;

    constructor(
        properties?: Partial<{
            target?: string;
            flags?: number;
            info?: number;
        }>
    );
    constructor(copy: TargetEntry);

    // Fields
    target: string;
    flags: number;
    info: number;

    // Constructors
    static ["new"](target: string, flags: number, info: number): TargetEntry;

    // Members
    copy(): TargetEntry;
    free(): void;
}

export class TargetList {
    static $gtype: GObject.GType<TargetList>;

    constructor(targets?: TargetEntry[] | null);
    constructor(copy: TargetList);

    // Constructors
    static ["new"](targets?: TargetEntry[] | null): TargetList;

    // Members
    add(target: Gdk.Atom, flags: number, info: number): void;
    add_image_targets(info: number, writable: boolean): void;
    add_rich_text_targets(info: number, deserializable: boolean, buffer: TextBuffer): void;
    add_table(targets: TargetEntry[]): void;
    add_text_targets(info: number): void;
    add_uri_targets(info: number): void;
    find(target: Gdk.Atom): [boolean, number];
    ref(): TargetList;
    remove(target: Gdk.Atom): void;
    unref(): void;
}

export class TargetPair {
    static $gtype: GObject.GType<TargetPair>;

    constructor(copy: TargetPair);

    // Fields
    target: Gdk.Atom;
    flags: number;
    info: number;
}

export class TearoffMenuItemPrivate {
    static $gtype: GObject.GType<TearoffMenuItemPrivate>;

    constructor(copy: TearoffMenuItemPrivate);
}

export class TextAppearance {
    static $gtype: GObject.GType<TextAppearance>;

    constructor(
        properties?: Partial<{
            bg_color?: Gdk.Color;
            fg_color?: Gdk.Color;
            rise?: number;
            underline?: number;
            strikethrough?: number;
            draw_bg?: number;
            inside_selection?: number;
            is_text?: number;
        }>
    );
    constructor(copy: TextAppearance);

    // Fields
    bg_color: Gdk.Color;
    fg_color: Gdk.Color;
    rise: number;
    underline: number;
    strikethrough: number;
    draw_bg: number;
    inside_selection: number;
    is_text: number;
}

export class TextAttributes {
    static $gtype: GObject.GType<TextAttributes>;

    constructor();
    constructor(
        properties?: Partial<{
            appearance?: TextAppearance;
            justification?: Justification;
            direction?: TextDirection;
            font?: Pango.FontDescription;
            font_scale?: number;
            left_margin?: number;
            right_margin?: number;
            indent?: number;
            pixels_above_lines?: number;
            pixels_below_lines?: number;
            pixels_inside_wrap?: number;
            tabs?: Pango.TabArray;
            wrap_mode?: WrapMode;
            language?: Pango.Language;
            invisible?: number;
            bg_full_height?: number;
            editable?: number;
            no_fallback?: number;
            letter_spacing?: number;
        }>
    );
    constructor(copy: TextAttributes);

    // Fields
    appearance: TextAppearance;
    justification: Justification;
    direction: TextDirection;
    font: Pango.FontDescription;
    font_scale: number;
    left_margin: number;
    right_margin: number;
    indent: number;
    pixels_above_lines: number;
    pixels_below_lines: number;
    pixels_inside_wrap: number;
    tabs: Pango.TabArray;
    wrap_mode: WrapMode;
    language: Pango.Language;
    invisible: number;
    bg_full_height: number;
    editable: number;
    no_fallback: number;
    letter_spacing: number;

    // Constructors
    static ["new"](): TextAttributes;

    // Members
    copy(): TextAttributes;
    copy_values(dest: TextAttributes): void;
    ref(): TextAttributes;
    unref(): void;
}

export class TextBTree {
    static $gtype: GObject.GType<TextBTree>;

    constructor(copy: TextBTree);
}

export class TextBufferPrivate {
    static $gtype: GObject.GType<TextBufferPrivate>;

    constructor(copy: TextBufferPrivate);
}

export class TextCellAccessiblePrivate {
    static $gtype: GObject.GType<TextCellAccessiblePrivate>;

    constructor(copy: TextCellAccessiblePrivate);
}

export class TextIter {
    static $gtype: GObject.GType<TextIter>;

    constructor(copy: TextIter);

    // Members
    assign(other: TextIter): void;
    backward_char(): boolean;
    backward_chars(count: number): boolean;
    backward_cursor_position(): boolean;
    backward_cursor_positions(count: number): boolean;
    backward_find_char(pred: TextCharPredicate, limit?: TextIter | null): boolean;
    backward_line(): boolean;
    backward_lines(count: number): boolean;
    backward_search(
        str: string,
        flags: TextSearchFlags,
        limit?: TextIter | null
    ): [boolean, TextIter | null, TextIter | null];
    backward_sentence_start(): boolean;
    backward_sentence_starts(count: number): boolean;
    backward_to_tag_toggle(tag?: TextTag | null): boolean;
    backward_visible_cursor_position(): boolean;
    backward_visible_cursor_positions(count: number): boolean;
    backward_visible_line(): boolean;
    backward_visible_lines(count: number): boolean;
    backward_visible_word_start(): boolean;
    backward_visible_word_starts(count: number): boolean;
    backward_word_start(): boolean;
    backward_word_starts(count: number): boolean;
    begins_tag(tag?: TextTag | null): boolean;
    can_insert(default_editability: boolean): boolean;
    compare(rhs: TextIter): number;
    copy(): TextIter;
    editable(default_setting: boolean): boolean;
    ends_line(): boolean;
    ends_sentence(): boolean;
    ends_tag(tag?: TextTag | null): boolean;
    ends_word(): boolean;
    equal(rhs: TextIter): boolean;
    forward_char(): boolean;
    forward_chars(count: number): boolean;
    forward_cursor_position(): boolean;
    forward_cursor_positions(count: number): boolean;
    forward_find_char(pred: TextCharPredicate, limit?: TextIter | null): boolean;
    forward_line(): boolean;
    forward_lines(count: number): boolean;
    forward_search(
        str: string,
        flags: TextSearchFlags,
        limit?: TextIter | null
    ): [boolean, TextIter | null, TextIter | null];
    forward_sentence_end(): boolean;
    forward_sentence_ends(count: number): boolean;
    forward_to_end(): void;
    forward_to_line_end(): boolean;
    forward_to_tag_toggle(tag?: TextTag | null): boolean;
    forward_visible_cursor_position(): boolean;
    forward_visible_cursor_positions(count: number): boolean;
    forward_visible_line(): boolean;
    forward_visible_lines(count: number): boolean;
    forward_visible_word_end(): boolean;
    forward_visible_word_ends(count: number): boolean;
    forward_word_end(): boolean;
    forward_word_ends(count: number): boolean;
    free(): void;
    get_attributes(): [boolean, TextAttributes];
    get_buffer(): TextBuffer;
    get_bytes_in_line(): number;
    get_char(): number;
    get_chars_in_line(): number;
    get_child_anchor(): TextChildAnchor;
    get_language(): Pango.Language;
    get_line(): number;
    get_line_index(): number;
    get_line_offset(): number;
    get_marks(): TextMark[];
    get_offset(): number;
    get_pixbuf(): GdkPixbuf.Pixbuf;
    get_slice(end: TextIter): string;
    get_tags(): TextTag[];
    get_text(end: TextIter): string;
    get_toggled_tags(toggled_on: boolean): TextTag[];
    get_visible_line_index(): number;
    get_visible_line_offset(): number;
    get_visible_slice(end: TextIter): string;
    get_visible_text(end: TextIter): string;
    has_tag(tag: TextTag): boolean;
    in_range(start: TextIter, end: TextIter): boolean;
    inside_sentence(): boolean;
    inside_word(): boolean;
    is_cursor_position(): boolean;
    is_end(): boolean;
    is_start(): boolean;
    order(second: TextIter): void;
    set_line(line_number: number): void;
    set_line_index(byte_on_line: number): void;
    set_line_offset(char_on_line: number): void;
    set_offset(char_offset: number): void;
    set_visible_line_index(byte_on_line: number): void;
    set_visible_line_offset(char_on_line: number): void;
    starts_line(): boolean;
    starts_sentence(): boolean;
    starts_tag(tag?: TextTag | null): boolean;
    starts_word(): boolean;
    toggles_tag(tag?: TextTag | null): boolean;
}

export class TextTagPrivate {
    static $gtype: GObject.GType<TextTagPrivate>;

    constructor(copy: TextTagPrivate);
}

export class TextTagTablePrivate {
    static $gtype: GObject.GType<TextTagTablePrivate>;

    constructor(copy: TextTagTablePrivate);
}

export class TextViewAccessiblePrivate {
    static $gtype: GObject.GType<TextViewAccessiblePrivate>;

    constructor(copy: TextViewAccessiblePrivate);
}

export class TextViewPrivate {
    static $gtype: GObject.GType<TextViewPrivate>;

    constructor(copy: TextViewPrivate);
}

export class ThemeEngine {
    static $gtype: GObject.GType<ThemeEngine>;

    constructor(copy: ThemeEngine);
}

export class ThemingEnginePrivate {
    static $gtype: GObject.GType<ThemingEnginePrivate>;

    constructor(copy: ThemingEnginePrivate);
}

export class ToggleActionEntry {
    static $gtype: GObject.GType<ToggleActionEntry>;

    constructor(copy: ToggleActionEntry);

    // Fields
    name: string;
    stock_id: string;
    label: string;
    accelerator: string;
    tooltip: string;
    callback: GObject.Callback;
    is_active: boolean;
}

export class ToggleActionPrivate {
    static $gtype: GObject.GType<ToggleActionPrivate>;

    constructor(copy: ToggleActionPrivate);
}

export class ToggleButtonAccessiblePrivate {
    static $gtype: GObject.GType<ToggleButtonAccessiblePrivate>;

    constructor(copy: ToggleButtonAccessiblePrivate);
}

export class ToggleButtonPrivate {
    static $gtype: GObject.GType<ToggleButtonPrivate>;

    constructor(copy: ToggleButtonPrivate);
}

export class ToggleToolButtonPrivate {
    static $gtype: GObject.GType<ToggleToolButtonPrivate>;

    constructor(copy: ToggleToolButtonPrivate);
}

export class ToolButtonPrivate {
    static $gtype: GObject.GType<ToolButtonPrivate>;

    constructor(copy: ToolButtonPrivate);
}

export class ToolItemGroupPrivate {
    static $gtype: GObject.GType<ToolItemGroupPrivate>;

    constructor(copy: ToolItemGroupPrivate);
}

export class ToolItemPrivate {
    static $gtype: GObject.GType<ToolItemPrivate>;

    constructor(copy: ToolItemPrivate);
}

export class ToolPalettePrivate {
    static $gtype: GObject.GType<ToolPalettePrivate>;

    constructor(copy: ToolPalettePrivate);
}

export class ToolbarPrivate {
    static $gtype: GObject.GType<ToolbarPrivate>;

    constructor(copy: ToolbarPrivate);
}

export class ToplevelAccessiblePrivate {
    static $gtype: GObject.GType<ToplevelAccessiblePrivate>;

    constructor(copy: ToplevelAccessiblePrivate);
}

export class TreeIter {
    static $gtype: GObject.GType<TreeIter>;

    constructor(
        properties?: Partial<{
            stamp?: number;
            user_data?: any;
            user_data2?: any;
            user_data3?: any;
        }>
    );
    constructor(copy: TreeIter);

    // Fields
    stamp: number;
    user_data: any;
    user_data2: any;
    user_data3: any;

    // Members
    copy(): TreeIter;
    free(): void;
}

export class TreeModelFilterPrivate {
    static $gtype: GObject.GType<TreeModelFilterPrivate>;

    constructor(copy: TreeModelFilterPrivate);
}

export class TreeModelSortPrivate {
    static $gtype: GObject.GType<TreeModelSortPrivate>;

    constructor(copy: TreeModelSortPrivate);
}

export class TreePath {
    static $gtype: GObject.GType<TreePath>;

    constructor();
    constructor(properties?: Partial<{}>);
    constructor(copy: TreePath);

    // Constructors
    static ["new"](): TreePath;
    static new_first(): TreePath;
    static new_from_indices(indices: number[]): TreePath;
    static new_from_string(path: string): TreePath;

    // Members
    append_index(index_: number): void;
    compare(b: TreePath): number;
    copy(): TreePath;
    down(): void;
    free(): void;
    get_depth(): number;
    get_indices(): number[];
    is_ancestor(descendant: TreePath): boolean;
    is_descendant(ancestor: TreePath): boolean;
    next(): void;
    prepend_index(index_: number): void;
    prev(): boolean;
    to_string(): string;
    up(): boolean;
}

export class TreeRowReference {
    static $gtype: GObject.GType<TreeRowReference>;

    constructor(model: TreeModel, path: TreePath);
    constructor(copy: TreeRowReference);

    // Constructors
    static ["new"](model: TreeModel, path: TreePath): TreeRowReference;
    static new_proxy(proxy: GObject.Object, model: TreeModel, path: TreePath): TreeRowReference;

    // Members
    copy(): TreeRowReference;
    free(): void;
    get_model(): TreeModel;
    get_path(): TreePath | null;
    valid(): boolean;
    static deleted(proxy: GObject.Object, path: TreePath): void;
    static inserted(proxy: GObject.Object, path: TreePath): void;
}

export class TreeSelectionPrivate {
    static $gtype: GObject.GType<TreeSelectionPrivate>;

    constructor(copy: TreeSelectionPrivate);
}

export class TreeStorePrivate {
    static $gtype: GObject.GType<TreeStorePrivate>;

    constructor(copy: TreeStorePrivate);
}

export class TreeViewAccessiblePrivate {
    static $gtype: GObject.GType<TreeViewAccessiblePrivate>;

    constructor(copy: TreeViewAccessiblePrivate);
}

export class TreeViewColumnPrivate {
    static $gtype: GObject.GType<TreeViewColumnPrivate>;

    constructor(copy: TreeViewColumnPrivate);
}

export class TreeViewPrivate {
    static $gtype: GObject.GType<TreeViewPrivate>;

    constructor(copy: TreeViewPrivate);
}

export class UIManagerPrivate {
    static $gtype: GObject.GType<UIManagerPrivate>;

    constructor(copy: UIManagerPrivate);
}

export class ViewportPrivate {
    static $gtype: GObject.GType<ViewportPrivate>;

    constructor(copy: ViewportPrivate);
}

export class WidgetAccessiblePrivate {
    static $gtype: GObject.GType<WidgetAccessiblePrivate>;

    constructor(copy: WidgetAccessiblePrivate);
}

export class WidgetClassPrivate {
    static $gtype: GObject.GType<WidgetClassPrivate>;

    constructor(copy: WidgetClassPrivate);
}

export class WidgetPath {
    static $gtype: GObject.GType<WidgetPath>;

    constructor();
    constructor(properties?: Partial<{}>);
    constructor(copy: WidgetPath);

    // Constructors
    static ["new"](): WidgetPath;

    // Members
    append_for_widget(widget: Widget): number;
    append_type(type: GObject.GType): number;
    append_with_siblings(siblings: WidgetPath, sibling_index: number): number;
    copy(): WidgetPath;
    free(): void;
    get_object_type(): GObject.GType;
    has_parent(type: GObject.GType): boolean;
    is_type(type: GObject.GType): boolean;
    iter_add_class(pos: number, name: string): void;
    iter_add_region(pos: number, name: string, flags: RegionFlags): void;
    iter_clear_classes(pos: number): void;
    iter_clear_regions(pos: number): void;
    iter_get_name(pos: number): string | null;
    iter_get_object_name(pos: number): string | null;
    iter_get_object_type(pos: number): GObject.GType;
    iter_get_sibling_index(pos: number): number;
    iter_get_siblings(pos: number): WidgetPath;
    iter_get_state(pos: number): StateFlags;
    iter_has_class(pos: number, name: string): boolean;
    iter_has_name(pos: number, name: string): boolean;
    iter_has_qclass(pos: number, qname: GLib.Quark): boolean;
    iter_has_qname(pos: number, qname: GLib.Quark): boolean;
    iter_has_qregion(pos: number, qname: GLib.Quark): [boolean, RegionFlags];
    iter_has_region(pos: number, name: string): [boolean, RegionFlags];
    iter_list_classes(pos: number): string[];
    iter_list_regions(pos: number): string[];
    iter_remove_class(pos: number, name: string): void;
    iter_remove_region(pos: number, name: string): void;
    iter_set_name(pos: number, name: string): void;
    iter_set_object_name(pos: number, name?: string | null): void;
    iter_set_object_type(pos: number, type: GObject.GType): void;
    iter_set_state(pos: number, state: StateFlags): void;
    length(): number;
    prepend_type(type: GObject.GType): void;
    ref(): WidgetPath;
    to_string(): string;
    unref(): void;
}

export class WidgetPrivate {
    static $gtype: GObject.GType<WidgetPrivate>;

    constructor(copy: WidgetPrivate);
}

export class WindowAccessiblePrivate {
    static $gtype: GObject.GType<WindowAccessiblePrivate>;

    constructor(copy: WindowAccessiblePrivate);
}

export class WindowGeometryInfo {
    static $gtype: GObject.GType<WindowGeometryInfo>;

    constructor(copy: WindowGeometryInfo);
}

export class WindowGroupPrivate {
    static $gtype: GObject.GType<WindowGroupPrivate>;

    constructor(copy: WindowGroupPrivate);
}

export class WindowPrivate {
    static $gtype: GObject.GType<WindowPrivate>;

    constructor(copy: WindowPrivate);
}

export class _MountOperationHandler {
    static $gtype: GObject.GType<_MountOperationHandler>;

    constructor(copy: _MountOperationHandler);
}

export class _MountOperationHandlerIface {
    static $gtype: GObject.GType<_MountOperationHandlerIface>;

    constructor(copy: _MountOperationHandlerIface);

    // Fields
    parent_iface: GObject.TypeInterface;
}

export class _MountOperationHandlerProxy {
    static $gtype: GObject.GType<_MountOperationHandlerProxy>;

    constructor(copy: _MountOperationHandlerProxy);
}

export class _MountOperationHandlerProxyClass {
    static $gtype: GObject.GType<_MountOperationHandlerProxyClass>;

    constructor(copy: _MountOperationHandlerProxyClass);

    // Fields
    parent_class: Gio.DBusProxy;
}

export class _MountOperationHandlerProxyPrivate {
    static $gtype: GObject.GType<_MountOperationHandlerProxyPrivate>;

    constructor(copy: _MountOperationHandlerProxyPrivate);
}

export class _MountOperationHandlerSkeleton {
    static $gtype: GObject.GType<_MountOperationHandlerSkeleton>;

    constructor(copy: _MountOperationHandlerSkeleton);
}

export class _MountOperationHandlerSkeletonClass {
    static $gtype: GObject.GType<_MountOperationHandlerSkeletonClass>;

    constructor(copy: _MountOperationHandlerSkeletonClass);

    // Fields
    parent_class: Gio.DBusInterfaceSkeleton;
}

export class _MountOperationHandlerSkeletonPrivate {
    static $gtype: GObject.GType<_MountOperationHandlerSkeletonPrivate>;

    constructor(copy: _MountOperationHandlerSkeletonPrivate);
}

export interface ActionableNamespace {
    $gtype: GObject.GType<Actionable>;
    prototype: ActionablePrototype;
}
export type Actionable = ActionablePrototype;
export interface ActionablePrototype extends Widget {
    // Properties
    actionName: string;
    actionTarget: GLib.Variant;

    // Members

    get_action_name(): string | null;
    get_action_target_value(): GLib.Variant;
    set_action_name(action_name?: string | null): void;
    set_action_target_value(target_value?: GLib.Variant | null): void;
    set_detailed_action_name(detailed_action_name: string): void;
    vfunc_get_action_name(): string | null;
    vfunc_get_action_target_value(): GLib.Variant;
    vfunc_set_action_name(action_name?: string | null): void;
    vfunc_set_action_target_value(target_value?: GLib.Variant | null): void;
}

export const Actionable: ActionableNamespace;

export interface ActivatableNamespace {
    $gtype: GObject.GType<Activatable>;
    prototype: ActivatablePrototype;
}
export type Activatable = ActivatablePrototype;
export interface ActivatablePrototype extends GObject.Object {
    // Properties
    relatedAction: Action;
    useActionAppearance: boolean;

    // Members

    do_set_related_action(action: Action): void;
    get_related_action(): Action;
    get_use_action_appearance(): boolean;
    set_related_action(action: Action): void;
    set_use_action_appearance(use_appearance: boolean): void;
    sync_action_properties(action?: Action | null): void;
    vfunc_sync_action_properties(action?: Action | null): void;
    vfunc_update(action: Action, property_name: string): void;
}

export const Activatable: ActivatableNamespace;

export interface AppChooserNamespace {
    $gtype: GObject.GType<AppChooser>;
    prototype: AppChooserPrototype;
}
export type AppChooser = AppChooserPrototype;
export interface AppChooserPrototype extends Widget {
    // Properties
    readonly contentType: string;

    // Members

    get_app_info(): Gio.AppInfo | null;
    get_content_type(): string;
    refresh(): void;
}

export const AppChooser: AppChooserNamespace;

export interface BuildableNamespace {
    $gtype: GObject.GType<Buildable>;
    prototype: BuildablePrototype;
}
export type Buildable = BuildablePrototype;
export interface BuildablePrototype extends GObject.Object {
    // Members

    add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    get_name(): string;
    parser_finished(builder: Builder): void;
    set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    set_name(name: string): void;
    vfunc_add_child(builder: Builder, child: GObject.Object, type?: string | null): void;
    vfunc_construct_child<T = GObject.Object>(builder: Builder, name: string): T;
    vfunc_custom_finished(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_end(builder: Builder, child: GObject.Object | null, tagname: string, data?: any | null): void;
    vfunc_custom_tag_start(
        builder: Builder,
        child: GObject.Object | null,
        tagname: string
    ): [boolean, GLib.MarkupParser, any];
    vfunc_get_internal_child<T = GObject.Object>(builder: Builder, childname: string): T;
    vfunc_get_name(): string;
    vfunc_parser_finished(builder: Builder): void;
    vfunc_set_buildable_property(builder: Builder, name: string, value: GObject.Value | any): void;
    vfunc_set_name(name: string): void;
}

export const Buildable: BuildableNamespace;

export interface CellAccessibleParentNamespace {
    $gtype: GObject.GType<CellAccessibleParent>;
    prototype: CellAccessibleParentPrototype;
}
export type CellAccessibleParent = CellAccessibleParentPrototype;
export interface CellAccessibleParentPrototype extends GObject.Object {
    // Members

    activate(cell: CellAccessible): void;
    edit(cell: CellAccessible): void;
    expand_collapse(cell: CellAccessible): void;
    get_cell_area(cell: CellAccessible): Gdk.Rectangle;
    get_cell_extents(cell: CellAccessible, coord_type: Atk.CoordType): [number, number, number, number];
    get_cell_position(cell: CellAccessible): [number, number];
    get_child_index(cell: CellAccessible): number;
    get_column_header_cells(cell: CellAccessible): Atk.Object[];
    get_renderer_state(cell: CellAccessible): CellRendererState;
    get_row_header_cells(cell: CellAccessible): Atk.Object[];
    grab_focus(cell: CellAccessible): boolean;
    update_relationset(cell: CellAccessible, relationset: Atk.RelationSet): void;
    vfunc_activate(cell: CellAccessible): void;
    vfunc_edit(cell: CellAccessible): void;
    vfunc_expand_collapse(cell: CellAccessible): void;
    vfunc_get_cell_area(cell: CellAccessible): Gdk.Rectangle;
    vfunc_get_cell_extents(cell: CellAccessible, coord_type: Atk.CoordType): [number, number, number, number];
    vfunc_get_cell_position(cell: CellAccessible): [number, number];
    vfunc_get_child_index(cell: CellAccessible): number;
    vfunc_get_column_header_cells(cell: CellAccessible): Atk.Object[];
    vfunc_get_renderer_state(cell: CellAccessible): CellRendererState;
    vfunc_get_row_header_cells(cell: CellAccessible): Atk.Object[];
    vfunc_grab_focus(cell: CellAccessible): boolean;
    vfunc_update_relationset(cell: CellAccessible, relationset: Atk.RelationSet): void;
}

export const CellAccessibleParent: CellAccessibleParentNamespace;

export interface CellEditableNamespace {
    $gtype: GObject.GType<CellEditable>;
    prototype: CellEditablePrototype;
}
export type CellEditable = CellEditablePrototype;
export interface CellEditablePrototype extends Widget {
    // Properties
    editingCanceled: boolean;

    // Members

    editing_done(): void;
    remove_widget(): void;
    start_editing(event?: Gdk.Event | null): void;
    vfunc_editing_done(): void;
    vfunc_remove_widget(): void;
    vfunc_start_editing(event?: Gdk.Event | null): void;
}

export const CellEditable: CellEditableNamespace;

export interface CellLayoutNamespace {
    $gtype: GObject.GType<CellLayout>;
    prototype: CellLayoutPrototype;
}
export type CellLayout = CellLayoutPrototype;
export interface CellLayoutPrototype extends GObject.Object {
    // Members

    add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    clear(): void;
    clear_attributes(cell: CellRenderer): void;
    get_area(): CellArea | null;
    get_cells(): CellRenderer[];
    pack_end(cell: CellRenderer, expand: boolean): void;
    pack_start(cell: CellRenderer, expand: boolean): void;
    reorder(cell: CellRenderer, position: number): void;
    set_cell_data_func(cell: CellRenderer, func?: CellLayoutDataFunc | null): void;
    vfunc_add_attribute(cell: CellRenderer, attribute: string, column: number): void;
    vfunc_clear(): void;
    vfunc_clear_attributes(cell: CellRenderer): void;
    vfunc_get_area(): CellArea | null;
    vfunc_get_cells(): CellRenderer[];
    vfunc_pack_end(cell: CellRenderer, expand: boolean): void;
    vfunc_pack_start(cell: CellRenderer, expand: boolean): void;
    vfunc_reorder(cell: CellRenderer, position: number): void;
    vfunc_set_cell_data_func(cell: CellRenderer, func?: CellLayoutDataFunc | null): void;
}

export const CellLayout: CellLayoutNamespace;

export interface ColorChooserNamespace {
    $gtype: GObject.GType<ColorChooser>;
    prototype: ColorChooserPrototype;
}
export type ColorChooser = ColorChooserPrototype;
export interface ColorChooserPrototype extends GObject.Object {
    // Properties
    rgba: Gdk.RGBA;
    useAlpha: boolean;

    // Members

    add_palette(orientation: Orientation, colors_per_line: number, colors?: Gdk.RGBA[] | null): void;
    get_rgba(): Gdk.RGBA;
    get_use_alpha(): boolean;
    set_rgba(color: Gdk.RGBA): void;
    set_use_alpha(use_alpha: boolean): void;
    vfunc_add_palette(orientation: Orientation, colors_per_line: number, colors?: Gdk.RGBA[] | null): void;
    vfunc_color_activated(color: Gdk.RGBA): void;
    vfunc_get_rgba(): Gdk.RGBA;
    vfunc_set_rgba(color: Gdk.RGBA): void;
}

export const ColorChooser: ColorChooserNamespace;

export interface EditableNamespace {
    $gtype: GObject.GType<Editable>;
    prototype: EditablePrototype;
}
export type Editable = EditablePrototype;
export interface EditablePrototype extends GObject.Object {
    // Members

    copy_clipboard(): void;
    cut_clipboard(): void;
    delete_selection(): void;
    delete_text(start_pos: number, end_pos: number): void;
    get_chars(start_pos: number, end_pos: number): string;
    get_editable(): boolean;
    get_position(): number;
    get_selection_bounds(): [boolean, number, number];
    insert_text(new_text: string, new_text_length: number, position: number): number;
    paste_clipboard(): void;
    select_region(start_pos: number, end_pos: number): void;
    set_editable(is_editable: boolean): void;
    set_position(position: number): void;
    vfunc_changed(): void;
    vfunc_delete_text(start_pos: number, end_pos: number): void;
    vfunc_do_delete_text(start_pos: number, end_pos: number): void;
    vfunc_do_insert_text(new_text: string, new_text_length: number, position: number): number;
    vfunc_get_chars(start_pos: number, end_pos: number): string;
    vfunc_get_position(): number;
    vfunc_get_selection_bounds(): [boolean, number, number];
    vfunc_insert_text(new_text: string, new_text_length: number, position: number): number;
    vfunc_set_position(position: number): void;
    vfunc_set_selection_bounds(start_pos: number, end_pos: number): void;
}

export const Editable: EditableNamespace;

export interface FileChooserNamespace {
    $gtype: GObject.GType<FileChooser>;
    prototype: FileChooserPrototype;
}
export type FileChooser = FileChooserPrototype;
export interface FileChooserPrototype extends GObject.Object {
    // Properties
    action: FileChooserAction;
    createFolders: boolean;
    doOverwriteConfirmation: boolean;
    extraWidget: Widget;
    filter: FileFilter;
    localOnly: boolean;
    previewWidget: Widget;
    previewWidgetActive: boolean;
    selectMultiple: boolean;
    showHidden: boolean;
    usePreviewLabel: boolean;

    // Members

    add_choice(id: string, label: string, options?: string[] | null, option_labels?: string[] | null): void;
    add_filter(filter: FileFilter): void;
    add_shortcut_folder(folder: string): boolean;
    add_shortcut_folder_uri(uri: string): boolean;
    get_action(): FileChooserAction;
    get_choice(id: string): string;
    get_create_folders(): boolean;
    get_current_folder(): string | null;
    get_current_folder_file(): Gio.File | null;
    get_current_folder_uri(): string | null;
    get_current_name(): string;
    get_do_overwrite_confirmation(): boolean;
    get_extra_widget(): Widget | null;
    get_file(): Gio.File;
    get_filename(): string | null;
    get_filenames(): string[];
    get_files(): Gio.File[];
    get_filter(): FileFilter | null;
    get_local_only(): boolean;
    get_preview_file(): Gio.File | null;
    get_preview_filename(): string | null;
    get_preview_uri(): string | null;
    get_preview_widget(): Widget | null;
    get_preview_widget_active(): boolean;
    get_select_multiple(): boolean;
    get_show_hidden(): boolean;
    get_uri(): string | null;
    get_uris(): string[];
    get_use_preview_label(): boolean;
    list_filters(): FileFilter[];
    list_shortcut_folder_uris(): string[] | null;
    list_shortcut_folders(): string[] | null;
    remove_choice(id: string): void;
    remove_filter(filter: FileFilter): void;
    remove_shortcut_folder(folder: string): boolean;
    remove_shortcut_folder_uri(uri: string): boolean;
    select_all(): void;
    select_file(file: Gio.File): boolean;
    select_filename(filename: string): boolean;
    select_uri(uri: string): boolean;
    set_action(action: FileChooserAction): void;
    set_choice(id: string, option: string): void;
    set_create_folders(create_folders: boolean): void;
    set_current_folder(filename: string): boolean;
    set_current_folder_file(file: Gio.File): boolean;
    set_current_folder_uri(uri: string): boolean;
    set_current_name(name: string): void;
    set_do_overwrite_confirmation(do_overwrite_confirmation: boolean): void;
    set_extra_widget(extra_widget: Widget): void;
    set_file(file: Gio.File): boolean;
    set_filename(filename: string): boolean;
    set_filter(filter: FileFilter): void;
    set_local_only(local_only: boolean): void;
    set_preview_widget(preview_widget: Widget): void;
    set_preview_widget_active(active: boolean): void;
    set_select_multiple(select_multiple: boolean): void;
    set_show_hidden(show_hidden: boolean): void;
    set_uri(uri: string): boolean;
    set_use_preview_label(use_label: boolean): void;
    unselect_all(): void;
    unselect_file(file: Gio.File): void;
    unselect_filename(filename: string): void;
    unselect_uri(uri: string): void;
}

export const FileChooser: FileChooserNamespace;

export interface FontChooserNamespace {
    $gtype: GObject.GType<FontChooser>;
    prototype: FontChooserPrototype;
}
export type FontChooser = FontChooserPrototype;
export interface FontChooserPrototype extends GObject.Object {
    // Properties
    font: string;
    fontDesc: Pango.FontDescription;
    readonly fontFeatures: string;
    language: string;
    level: FontChooserLevel;
    previewText: string;
    showPreviewEntry: boolean;

    // Members

    get_font(): string | null;
    get_font_desc(): Pango.FontDescription | null;
    get_font_face(): Pango.FontFace | null;
    get_font_family(): Pango.FontFamily | null;
    get_font_features(): string;
    get_font_map(): Pango.FontMap | null;
    get_font_size(): number;
    get_language(): string;
    get_level(): FontChooserLevel;
    get_preview_text(): string;
    get_show_preview_entry(): boolean;
    set_filter_func(filter?: FontFilterFunc | null): void;
    set_font(fontname: string): void;
    set_font_desc(font_desc: Pango.FontDescription): void;
    set_font_map(fontmap?: Pango.FontMap | null): void;
    set_language(language: string): void;
    set_level(level: FontChooserLevel): void;
    set_preview_text(text: string): void;
    set_show_preview_entry(show_preview_entry: boolean): void;
    vfunc_font_activated(fontname: string): void;
    vfunc_get_font_face(): Pango.FontFace | null;
    vfunc_get_font_family(): Pango.FontFamily | null;
    vfunc_get_font_map(): Pango.FontMap | null;
    vfunc_get_font_size(): number;
    vfunc_set_filter_func(filter?: FontFilterFunc | null): void;
    vfunc_set_font_map(fontmap?: Pango.FontMap | null): void;
}

export const FontChooser: FontChooserNamespace;

export interface OrientableNamespace {
    $gtype: GObject.GType<Orientable>;
    prototype: OrientablePrototype;
}
export type Orientable = OrientablePrototype;
export interface OrientablePrototype extends GObject.Object {
    // Properties
    orientation: Orientation;

    // Members

    get_orientation(): Orientation;
    set_orientation(orientation: Orientation): void;
}

export const Orientable: OrientableNamespace;

export interface PrintOperationPreviewNamespace {
    $gtype: GObject.GType<PrintOperationPreview>;
    prototype: PrintOperationPreviewPrototype;
}
export type PrintOperationPreview = PrintOperationPreviewPrototype;
export interface PrintOperationPreviewPrototype extends GObject.Object {
    // Members

    end_preview(): void;
    is_selected(page_nr: number): boolean;
    render_page(page_nr: number): void;
    vfunc_end_preview(): void;
    vfunc_got_page_size(context: PrintContext, page_setup: PageSetup): void;
    vfunc_is_selected(page_nr: number): boolean;
    vfunc_ready(context: PrintContext): void;
    vfunc_render_page(page_nr: number): void;
}

export const PrintOperationPreview: PrintOperationPreviewNamespace;

export interface RecentChooserNamespace {
    $gtype: GObject.GType<RecentChooser>;
    prototype: RecentChooserPrototype;
}
export type RecentChooser = RecentChooserPrototype;
export interface RecentChooserPrototype extends GObject.Object {
    // Properties
    filter: RecentFilter;
    limit: number;
    localOnly: boolean;
    recentManager: RecentManager;
    selectMultiple: boolean;
    showIcons: boolean;
    showNotFound: boolean;
    showPrivate: boolean;
    showTips: boolean;
    sortType: RecentSortType;

    // Members

    add_filter(filter: RecentFilter): void;
    get_current_item(): RecentInfo;
    get_current_uri(): string;
    get_filter(): RecentFilter;
    get_items(): RecentInfo[];
    get_limit(): number;
    get_local_only(): boolean;
    get_select_multiple(): boolean;
    get_show_icons(): boolean;
    get_show_not_found(): boolean;
    get_show_private(): boolean;
    get_show_tips(): boolean;
    get_sort_type(): RecentSortType;
    get_uris(): string[];
    list_filters(): RecentFilter[];
    remove_filter(filter: RecentFilter): void;
    select_all(): void;
    select_uri(uri: string): boolean;
    set_current_uri(uri: string): boolean;
    set_filter(filter?: RecentFilter | null): void;
    set_limit(limit: number): void;
    set_local_only(local_only: boolean): void;
    set_select_multiple(select_multiple: boolean): void;
    set_show_icons(show_icons: boolean): void;
    set_show_not_found(show_not_found: boolean): void;
    set_show_private(show_private: boolean): void;
    set_show_tips(show_tips: boolean): void;
    set_sort_func(sort_func: RecentSortFunc, data_destroy?: GLib.DestroyNotify | null): void;
    set_sort_type(sort_type: RecentSortType): void;
    unselect_all(): void;
    unselect_uri(uri: string): void;
    vfunc_add_filter(filter: RecentFilter): void;
    vfunc_get_current_uri(): string;
    vfunc_get_items(): RecentInfo[];
    vfunc_item_activated(): void;
    vfunc_list_filters(): RecentFilter[];
    vfunc_remove_filter(filter: RecentFilter): void;
    vfunc_select_all(): void;
    vfunc_select_uri(uri: string): boolean;
    vfunc_selection_changed(): void;
    vfunc_set_current_uri(uri: string): boolean;
    vfunc_set_sort_func(sort_func: RecentSortFunc, data_destroy?: GLib.DestroyNotify | null): void;
    vfunc_unselect_all(): void;
    vfunc_unselect_uri(uri: string): void;
}

export const RecentChooser: RecentChooserNamespace;

export interface ScrollableNamespace {
    $gtype: GObject.GType<Scrollable>;
    prototype: ScrollablePrototype;
}
export type Scrollable = ScrollablePrototype;
export interface ScrollablePrototype extends GObject.Object {
    // Properties
    hadjustment: Adjustment;
    hscrollPolicy: ScrollablePolicy;
    vadjustment: Adjustment;
    vscrollPolicy: ScrollablePolicy;

    // Members

    get_border(): [boolean, Border];
    get_hadjustment(): Adjustment;
    get_hscroll_policy(): ScrollablePolicy;
    get_vadjustment(): Adjustment;
    get_vscroll_policy(): ScrollablePolicy;
    set_hadjustment(hadjustment?: Adjustment | null): void;
    set_hscroll_policy(policy: ScrollablePolicy): void;
    set_vadjustment(vadjustment?: Adjustment | null): void;
    set_vscroll_policy(policy: ScrollablePolicy): void;
    vfunc_get_border(): [boolean, Border];
}

export const Scrollable: ScrollableNamespace;

export interface StyleProviderNamespace {
    $gtype: GObject.GType<StyleProvider>;
    prototype: StyleProviderPrototype;
}
export type StyleProvider = StyleProviderPrototype;
export interface StyleProviderPrototype extends GObject.Object {
    // Members

    get_icon_factory(path: WidgetPath): IconFactory | null;
    get_style(path: WidgetPath): StyleProperties | null;
    get_style_property(path: WidgetPath, state: StateFlags, pspec: GObject.ParamSpec): [boolean, unknown];
    vfunc_get_icon_factory(path: WidgetPath): IconFactory | null;
    vfunc_get_style(path: WidgetPath): StyleProperties | null;
    vfunc_get_style_property(path: WidgetPath, state: StateFlags, pspec: GObject.ParamSpec): [boolean, unknown];
}

export const StyleProvider: StyleProviderNamespace;

export interface ToolShellNamespace {
    $gtype: GObject.GType<ToolShell>;
    prototype: ToolShellPrototype;
}
export type ToolShell = ToolShellPrototype;
export interface ToolShellPrototype extends Widget {
    // Members

    get_ellipsize_mode(): Pango.EllipsizeMode;
    get_icon_size(): number;
    get_orientation(): Orientation;
    get_relief_style(): ReliefStyle;
    get_style(): ToolbarStyle;
    // Conflicted with Gtk.Widget.get_style
    get_style(...args: never[]): any;
    get_text_alignment(): number;
    get_text_orientation(): Orientation;
    get_text_size_group(): SizeGroup;
    rebuild_menu(): void;
    vfunc_get_ellipsize_mode(): Pango.EllipsizeMode;
    vfunc_get_icon_size(): IconSize;
    vfunc_get_orientation(): Orientation;
    vfunc_get_relief_style(): ReliefStyle;
    vfunc_get_style(): ToolbarStyle;
    vfunc_get_text_alignment(): number;
    vfunc_get_text_orientation(): Orientation;
    vfunc_get_text_size_group(): SizeGroup;
    vfunc_rebuild_menu(): void;
}

export const ToolShell: ToolShellNamespace;

export interface TreeDragDestNamespace {
    $gtype: GObject.GType<TreeDragDest>;
    prototype: TreeDragDestPrototype;
}
export type TreeDragDest = TreeDragDestPrototype;
export interface TreeDragDestPrototype extends GObject.Object {
    // Members

    drag_data_received(dest: TreePath, selection_data: SelectionData): boolean;
    row_drop_possible(dest_path: TreePath, selection_data: SelectionData): boolean;
    vfunc_drag_data_received(dest: TreePath, selection_data: SelectionData): boolean;
    vfunc_row_drop_possible(dest_path: TreePath, selection_data: SelectionData): boolean;
}

export const TreeDragDest: TreeDragDestNamespace;

export interface TreeDragSourceNamespace {
    $gtype: GObject.GType<TreeDragSource>;
    prototype: TreeDragSourcePrototype;
}
export type TreeDragSource = TreeDragSourcePrototype;
export interface TreeDragSourcePrototype extends GObject.Object {
    // Members

    drag_data_delete(path: TreePath): boolean;
    drag_data_get(path: TreePath, selection_data: SelectionData): boolean;
    row_draggable(path: TreePath): boolean;
    vfunc_drag_data_delete(path: TreePath): boolean;
    vfunc_drag_data_get(path: TreePath, selection_data: SelectionData): boolean;
    vfunc_row_draggable(path: TreePath): boolean;
}

export const TreeDragSource: TreeDragSourceNamespace;

export interface TreeModelNamespace {
    $gtype: GObject.GType<TreeModel>;
    prototype: TreeModelPrototype;
}
export type TreeModel = TreeModelPrototype;
export interface TreeModelPrototype extends GObject.Object {
    // Members

    filter_new(root?: TreePath | null): TreeModel;
    foreach(func: TreeModelForeachFunc): void;
    get_column_type(index_: number): GObject.GType;
    get_flags(): TreeModelFlags;
    get_iter(path: TreePath): [boolean, TreeIter];
    get_iter_first(): [boolean, TreeIter];
    get_iter_from_string(path_string: string): [boolean, TreeIter];
    get_n_columns(): number;
    get_path(iter: TreeIter): TreePath;
    get_string_from_iter(iter: TreeIter): string;
    get_value(iter: TreeIter, column: number): unknown;
    iter_children(parent?: TreeIter | null): [boolean, TreeIter];
    iter_has_child(iter: TreeIter): boolean;
    iter_n_children(iter?: TreeIter | null): number;
    iter_next(iter: TreeIter): boolean;
    iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
    iter_parent(child: TreeIter): [boolean, TreeIter];
    iter_previous(iter: TreeIter): boolean;
    ref_node(iter: TreeIter): void;
    row_changed(path: TreePath, iter: TreeIter): void;
    row_deleted(path: TreePath): void;
    row_has_child_toggled(path: TreePath, iter: TreeIter): void;
    row_inserted(path: TreePath, iter: TreeIter): void;
    rows_reordered(path: TreePath, iter: TreeIter | null, new_order: number[]): void;
    unref_node(iter: TreeIter): void;
    vfunc_get_column_type(index_: number): GObject.GType;
    vfunc_get_flags(): TreeModelFlags;
    vfunc_get_iter(path: TreePath): [boolean, TreeIter];
    vfunc_get_n_columns(): number;
    vfunc_get_path(iter: TreeIter): TreePath;
    vfunc_get_value(iter: TreeIter, column: number): unknown;
    vfunc_iter_children(parent?: TreeIter | null): [boolean, TreeIter];
    vfunc_iter_has_child(iter: TreeIter): boolean;
    vfunc_iter_n_children(iter?: TreeIter | null): number;
    vfunc_iter_next(iter: TreeIter): boolean;
    vfunc_iter_nth_child(parent: TreeIter | null, n: number): [boolean, TreeIter];
    vfunc_iter_parent(child: TreeIter): [boolean, TreeIter];
    vfunc_iter_previous(iter: TreeIter): boolean;
    vfunc_ref_node(iter: TreeIter): void;
    vfunc_row_changed(path: TreePath, iter: TreeIter): void;
    vfunc_row_deleted(path: TreePath): void;
    vfunc_row_has_child_toggled(path: TreePath, iter: TreeIter): void;
    vfunc_row_inserted(path: TreePath, iter: TreeIter): void;
    vfunc_unref_node(iter: TreeIter): void;
}

export const TreeModel: TreeModelNamespace;

export interface TreeSortableNamespace {
    $gtype: GObject.GType<TreeSortable>;
    prototype: TreeSortablePrototype;
}
export type TreeSortable = TreeSortablePrototype;
export interface TreeSortablePrototype extends TreeModel {
    // Members

    get_sort_column_id(): [boolean, number, SortType];
    has_default_sort_func(): boolean;
    set_default_sort_func(sort_func: TreeIterCompareFunc, destroy?: GLib.DestroyNotify | null): void;
    set_sort_column_id(sort_column_id: number, order: SortType): void;
    set_sort_func(sort_column_id: number, sort_func: TreeIterCompareFunc, destroy?: GLib.DestroyNotify | null): void;
    sort_column_changed(): void;
    vfunc_get_sort_column_id(): [boolean, number, SortType];
    vfunc_has_default_sort_func(): boolean;
    vfunc_set_default_sort_func(sort_func: TreeIterCompareFunc, destroy?: GLib.DestroyNotify | null): void;
    vfunc_set_sort_column_id(sort_column_id: number, order: SortType): void;
    vfunc_set_sort_func(
        sort_column_id: number,
        sort_func: TreeIterCompareFunc,
        destroy?: GLib.DestroyNotify | null
    ): void;
    vfunc_sort_column_changed(): void;
}

export const TreeSortable: TreeSortableNamespace;

export type Allocation = Gdk.Rectangle;
export type Stock = string;
