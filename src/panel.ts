import Gtk from 'gi://Gtk?version=3.0';
import GtkLayerShell from 'gi://GtkLayerShell';
import GObject from 'gi://GObject';
import { ClockWidget } from './widgets/clock.js';

export class Panel extends Gtk.Window {
    static {
        GObject.registerClass(this);
    }

    constructor() {
        super();
        GtkLayerShell.init_for_window(this);
        GtkLayerShell.auto_exclusive_zone_enable(this);
        GtkLayerShell.set_margin(this, GtkLayerShell.Edge.TOP, 0);
        GtkLayerShell.set_margin(this, GtkLayerShell.Edge.BOTTOM, 0);
        GtkLayerShell.set_anchor(this, GtkLayerShell.Edge.BOTTOM, true);

        const box = new Gtk.Box();
        box.set_orientation(Gtk.Orientation.HORIZONTAL);
        this.add(box);
        
        box.add(new ClockWidget());

        this.show_all();
    }
}