#!/usr/bin/env gjs -m

import Gtk from 'gi://Gtk?version=3.0';
import Gio from 'gi://Gio';
import GObject from 'gi://GObject';
import GLib from 'gi://GLib';

import { Panel } from './panel.js';

class MyApp extends Gtk.Application {
    private _panel?: Panel;

    static {
        GObject.registerClass(this);
    }

    constructor() {
        super({
            application_id: "io.github.charlieqle.LayerShell",
            flags: Gio.ApplicationFlags.FLAGS_NONE,
        });
    }

    vfunc_activate(): void {
        this._panel = new Panel();
        this._panel.connect('destroy', _ => {
            this._panel = undefined;
            this._onWidgetDestroy();
        });
        log(GLib.get_current_dir());
    }

    private _onWidgetDestroy() {
        if (this._panel) {
            return;
        }
        Gtk.main_quit();
    }
}

const app = new MyApp();
app.run(null);
Gtk.main();