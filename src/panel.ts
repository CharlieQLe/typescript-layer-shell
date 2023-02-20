import Gtk from 'gi://Gtk?version=3.0';
import GtkLayerShell from 'gi://GtkLayerShell';
import GObject from 'gi://GObject';

export class Panel extends Gtk.Window {
    static {
        GObject.registerClass(this);
    }

    constructor() {
        super();
        const label = Gtk.Label.new('This is a panel!');
        this.add(label);
        GtkLayerShell.init_for_window(this);
        GtkLayerShell.auto_exclusive_zone_enable(this);
        GtkLayerShell.set_margin(this, GtkLayerShell.Edge.TOP, 10);
        GtkLayerShell.set_margin(this, GtkLayerShell.Edge.BOTTOM, 10);
        GtkLayerShell.set_anchor(this, GtkLayerShell.Edge.BOTTOM, true);
        this.show_all();
    }
}