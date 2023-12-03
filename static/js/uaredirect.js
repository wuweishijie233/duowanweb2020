var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");


function uaredirect(f) {
	try {
		if (document.getElementById("bdmark") != null) {
			return
		}
		var b = false;
		if (arguments[1]) {
			var e = window.location.host;
			var a = window.location.href;
			if (isSubdomain(arguments[1], e) == 1) {
				f = f + "/#m/" + a;
				b = true
			} else {
				if (isSubdomain(arguments[1], e) == 2) {
					f = f + "/#m/" + a;
					b = true
				} else {
					f = a;
					b = false
				}
			}
		} else {
			b = true
		}
		if (b) {
			var c = window.location.hash;
			if (!c.match("fromapp")) {
				if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i))) {
					location.replace(f)
				}
			}
		}
	} catch (d) {
	}
}
function isSubdomain(c, d) {
	this.getdomain = function(f) {
		var e = f.indexOf("://");
		if (e > 0) {
			var h = f.substr(e + 3)
		} else {
			var h = f
		}
		var g = /^www\./;
		if (g.test(h)) {
			h = h.substr(4)
		}
		return h
	};
	if (c == d) {
		return 1
	} else {
		var c = this.getdomain(c);
		var b = this.getdomain(d);
		if (c == b) {
			return 1
		} else {
			c = c.replace(".", "\\.");
			var a = new RegExp("\\." + c + "$");
			if (b.match(a)) {
				return 2
			} else {
				return 0
			}
		}
	}
};


}
/*
     FILE ARCHIVED ON 06:20:29 Mar 16, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:09:23 Dec 03, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 122.037
  exclusion.robots: 0.115
  exclusion.robots.policy: 0.107
  cdx.remote: 0.054
  esindex: 0.009
  LoadShardBlock: 95.359 (3)
  PetaboxLoader3.datanode: 235.218 (5)
  PetaboxLoader3.resolve: 167.815 (3)
  load_resource: 339.218 (2)
*/