import Gtk from 'gi://Gtk?version=3.0';
import GObject from 'gi://GObject';
import GLib from 'gi://GLib';

export class ClockWidget extends Gtk.Label {
    private _signalId: number;
    
    static {
        GObject.registerClass(this);
    }

    constructor() {
        super();
        this._updateClock();
        this._signalId = GLib.timeout_add_seconds(GLib.PRIORITY_DEFAULT, 1, this._updateClock.bind(this));
    }

    private _updateClock() {
        const now = GLib.DateTime.new_now_local();
        this.set_label(`${now.format('%I:%M:%S')}`);
        return true;
    }

    vfunc_destroy(): void {
        GLib.Source.remove(this._signalId);
    }
}