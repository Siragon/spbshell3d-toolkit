/*
SPBShell-ToolKit is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

SPBShell-ToolKit is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with SPBShell-ToolKit. If not, see <http://www.gnu.org/licenses/>. 
*/

pref("general.useragent.extra.webrunner", "Webrunner/0.1");

pref("browser.dom.window.dump.enabled", true);
pref("javascript.options.showInConsole", true);

pref("javascript.enabled", true);

pref("network.protocol-handler.warn-external.http", false);
pref("network.protocol-handler.warn-external.https", false);
pref("network.protocol-handler.warn-external.ftp", false);

pref("toolkit.defaultChromeURI", "chrome://siragon/content/background.xul");
pref("toolkit.defaultChromeFeatures", "alwaysLowered,chrome, fullscreen,resizable=no,dialog=no");

pref("intl.locale.matchOS", false);

pref("usb.conected", false);
pref("usb.driver", false);

pref("general.useragent.locale", "es-VE");

pref("toolkit.singletonWindowType", "background:main");

pref("general.skins.selectedSkin", "classic/1.0");

/* debugging prefs */
//pref("browser.dom.window.dump.file", "C:\dump\dump.txt");
pref("browser.dom.window.dump.enabled", true);
pref("javascript.options.showInConsole", true);
pref("javascript.options.strict", true);
pref("nglayout.debug.disable_xul_cache", true);
pref("nglayout.debug.disable_xul_fastload", true);
pref("extensions.getAddons.cache.enabled", false);