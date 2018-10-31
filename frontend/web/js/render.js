/* Что может быть забавнее, чем круглый идиот, обфусцирующий чужий код?
 * Пингвины в шляпах и с трубками. */

var MSP = function(variable_0) {
    "use strict";
    var variable_1 = 64;
    var variable_2 = 32;
    var variable_3 = 1;
    var variable_4 = 64;
    var variable_5 = 32;
    var variable_6 = 1;
    window["requestAnimFrame"] = (function() {
        return window["requestAnimationFrame"] || window["webkitRequestAnimationFrame"] || window["mozRequestAnimationFrame"] || window["oRequestAnimationFrame"] || window["msRequestAnimationFrame"] || function(variable_7, variable_8) {
            window["setTimeout"](variable_7, 1000 / 60)
        }
    })();
    var variable_9 = (function() {
        var variable_10 = document["createElement"]("div");
        variable_10["innerHTML"] = "<!--[if IE]><i></i><![endif]-->";
        return (variable_10["getElementsByTagName"]("i")["length"] === 1)
    }());
    var variable_11 = (!!document["createElement"]("canvas")["getContext"]("experimental-webgl") || !!document["createElement"]("canvas")["getContext"]("webgl"));
    var variable_12 = document["querySelector"]("#skinpreview");
    if (!variable_11) {
        var variable_13 = document["createElement"]("div");
        variable_13["innerHTML"] = "<div style='position:absolute;width:180px;padding:5px;font-size:11px;font-style:italic'><strong>\u0412\u043D\u0438\u043C\u0430\u043D\u0438\u0435:</strong> \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u044C \u0432\u0430\u0448 \u0441\u043A\u0438\u043D.<br> \u0421\u043A\u0430\u0447\u0430\u0439\u0442\u0435 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u044E\u044E \u0432\u0435\u0440\u0441\u0438\u044E \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430.</div>";
        variable_13["style"]["fontStyle"] = "italic";
        variable_13["style"]["fontSize"] = "10px"
    };
    var variable_140 = variable_1;
    var variable_141 = 240,
        variable_142 = 300;
    var variable_143 = 1 / variable_1;
    var variable_144 = 1 / variable_2;
    var variable_145 = document["createElement"]("canvas");
    var variable_146 = variable_145["getContext"]("2d");
    var variable_147 = 8;
    variable_145["width"] = variable_1 * variable_147;
    variable_145["height"] = variable_2 * variable_147;
    var variable_148 = document["createElement"]("canvas");
    var variable_149 = variable_148["getContext"]("2d");
    variable_148["width"] = variable_1;
    variable_148["height"] = variable_2;
    var variable_14a = document["createElement"]("canvas");
    var variable_14b = variable_14a["getContext"]("2d");
    variable_14a["width"] = variable_1;
    variable_14a["height"] = variable_2;
    var variable_14c = variable_0["spin"] || false;
    var variable_14d = true;
    var variable_14e = false;
    var variable_14f = variable_0["freezecamera"] || false;
    var variable_00 = variable_0["running"] || false;
    var variable_01 = function(variable_02, variable_03) {
        var variable_04 = new THREE.MeshBasicMaterial({
            map: new THREE.Texture(variable_02, new THREE.UVMapping(), THREE.ClampToEdgeWrapping, THREE.ClampToEdgeWrapping, THREE.NearestFilter, THREE.NearestFilter, (variable_03 ? THREE["RGBAFormat"] : THREE["RGBFormat"])),
            transparent: variable_03
        });
        variable_04["map"]["needsUpdate"] = true;
        return variable_04
    };
    var variable_05 = function(variable_06, variable_07, variable_08, variable_09, variable_0a, variable_0b, variable_0c) {
        if (!variable_0c) {
            variable_0c = 0
        };
        var variable_0d = variable_06["geometry"]["faceVertexUvs"][0][variable_07];
        var variable_0e = variable_08;
        var variable_0f = variable_09;
        variable_0d[(0 + variable_0c) % 4]["u"] = variable_0e * variable_143;
        variable_0d[(0 + variable_0c) % 4]["v"] = variable_0f * variable_144;
        variable_0d[(1 + variable_0c) % 4]["u"] = variable_0e * variable_143;
        variable_0d[(1 + variable_0c) % 4]["v"] = variable_0f * variable_144 + variable_0b * variable_144;
        variable_0d[(2 + variable_0c) % 4]["u"] = variable_0e * variable_143 + variable_0a * variable_143;
        variable_0d[(2 + variable_0c) % 4]["v"] = variable_0f * variable_144 + variable_0b * variable_144;
        variable_0d[(3 + variable_0c) % 4]["u"] = variable_0e * variable_143 + variable_0a * variable_143;
        variable_0d[(3 + variable_0c) % 4]["v"] = variable_0f * variable_144
    };
    var variable_10 = function(variable_11, variable_12) {
        var variable_13 = new THREE.Object3D();
        var variable_14 = [];
        for (var variable_15 = 0; variable_15 < 6; variable_15++) {
            var variable_06 = new THREE.Mesh(new THREE.PlaneGeometry(variable_11, variable_11), variable_12);
            variable_06["doubleSided"] = true;
            variable_13["add"](variable_06);
            variable_14["push"](variable_06)
        };
        variable_14[0]["rotation"]["x"] = Math["PI"] / 2;
        variable_14[0]["rotation"]["z"] = -Math["PI"] / 2;
        variable_14[0]["position"]["x"] = variable_11 / 2;
        variable_14[1]["rotation"]["x"] = Math["PI"] / 2;
        variable_14[1]["rotation"]["z"] = Math["PI"] / 2;
        variable_14[1]["position"]["x"] = -variable_11 / 2;
        variable_14[2]["position"]["y"] = variable_11 / 2;
        variable_14[3]["rotation"]["y"] = Math["PI"];
        variable_14[3]["rotation"]["z"] = Math["PI"];
        variable_14[3]["position"]["y"] = -variable_11 / 2;
        variable_14[4]["rotation"]["x"] = Math["PI"] / 2;
        variable_14[4]["position"]["z"] = variable_11 / 2;
        variable_14[5]["rotation"]["x"] = -Math["PI"] / 2;
        variable_14[5]["rotation"]["y"] = Math["PI"];
        variable_14[5]["position"]["z"] = -variable_11 / 2;
        return variable_13
    };
    var variable_16 = variable_01(variable_148, false);
    var variable_17 = variable_01(variable_148, true);
    var variable_18 = variable_01(variable_14a, false);
    var variable_19 = new THREE.PerspectiveCamera(35, variable_141 / variable_142, 1, 1000);
    variable_19["position"]["z"] = 48;
    var variable_1a = new THREE.Scene();
    variable_1a["add"](variable_19);
    var variable_1b = new THREE.Object3D();
    var variable_1c = new THREE.Object3D();
    var variable_1d = new THREE.CubeGeometry(4, 12, 4);
    for (var variable_15 = 0; variable_15 < 8; variable_15 += 1) {
        variable_1d["vertices"][variable_15]["y"] -= 6
    };
    var variable_1e = new THREE.Mesh(variable_1d, variable_16);
    variable_1e["position"]["z"] = -2;
    variable_1e["position"]["y"] = -6;
    variable_05(variable_1e, 0, 8 * variable_3, 20 * variable_3, -4 * variable_3, 12 * variable_3);
    variable_05(variable_1e, 1, 16 * variable_3, 20 * variable_3, -4 * variable_3, 12 * variable_3);
    variable_05(variable_1e, 2, 4 * variable_3, 16 * variable_3, 4 * variable_3, 4 * variable_3, 3);
    variable_05(variable_1e, 3, 8 * variable_3, 16 * variable_3, 4 * variable_3, 4 * variable_3, 1);
    variable_05(variable_1e, 4, 12 * variable_3, 20 * variable_3, -4 * variable_3, 12 * variable_3);
    variable_05(variable_1e, 5, 4 * variable_3, 20 * variable_3, -4 * variable_3, 12 * variable_3);
    var variable_1f = new THREE.CubeGeometry(4, 12, 4);
    for (var variable_15 = 0; variable_15 < 8; variable_15 += 1) {
        variable_1f["vertices"][variable_15]["y"] -= 6
    };
    var variable_20 = new THREE.Mesh(variable_1f, variable_16);
    variable_20["position"]["z"] = 2;
    variable_20["position"]["y"] = -6;
    variable_05(variable_20, 0, 4 * variable_3, 20 * variable_3, 4 * variable_3, 12 * variable_3);
    variable_05(variable_20, 1, 12 * variable_3, 20 * variable_3, 4 * variable_3, 12 * variable_3);
    variable_05(variable_20, 2, 8 * variable_3, 16 * variable_3, -4 * variable_3, 4 * variable_3, 3);
    variable_05(variable_20, 3, 12 * variable_3, 16 * variable_3, -4 * variable_3, 4 * variable_3, 1);
    variable_05(variable_20, 4, 0 * variable_3, 20 * variable_3, 4 * variable_3, 12 * variable_3);
    variable_05(variable_20, 5, 8 * variable_3, 20 * variable_3, 4 * variable_3, 12 * variable_3);
    var variable_21 = new THREE.CubeGeometry(4, 12, 8);
    var variable_22 = new THREE.Mesh(variable_21, variable_16);
    variable_05(variable_22, 0, 20 * variable_3, 20 * variable_3, 8 * variable_3, 12 * variable_3);
    variable_05(variable_22, 1, 32 * variable_3, 20 * variable_3, 8 * variable_3, 12 * variable_3);
    variable_05(variable_22, 2, 20 * variable_3, 16 * variable_3, 8 * variable_3, 4 * variable_3, 1);
    variable_05(variable_22, 3, 28 * variable_3, 16 * variable_3, 8 * variable_3, 4 * variable_3, 3);
    variable_05(variable_22, 4, 16 * variable_3, 20 * variable_3, 4 * variable_3, 12 * variable_3);
    variable_05(variable_22, 5, 28 * variable_3, 20 * variable_3, 4 * variable_3, 12 * variable_3);
    variable_1c["add"](variable_22);
    var variable_23 = new THREE.CubeGeometry(4, 12, 4);
    for (var variable_15 = 0; variable_15 < 8; variable_15 += 1) {
        variable_23["vertices"][variable_15]["y"] -= 4
    };
    var variable_24 = new THREE.Mesh(variable_23, variable_16);
    variable_24["position"]["z"] = -6;
    variable_24["position"]["y"] = 4;
    variable_24["rotation"]["x"] = Math["PI"] / 32;
    variable_05(variable_24, 0, 48 * variable_3, 20 * variable_3, -4 * variable_3, 12 * variable_3);
    variable_05(variable_24, 1, 56 * variable_3, 20 * variable_3, -4 * variable_3, 12 * variable_3);
    variable_05(variable_24, 2, 48 * variable_3, 16 * variable_3, -4 * variable_3, 4 * variable_3, 1);
    variable_05(variable_24, 3, 52 * variable_3, 20 * variable_3, -4 * variable_3, -4 * variable_3, 3);
    variable_05(variable_24, 4, 52 * variable_3, 20 * variable_3, -4 * variable_3, 12 * variable_3);
    variable_05(variable_24, 5, 44 * variable_3, 20 * variable_3, -4 * variable_3, 12 * variable_3);
    variable_1c["add"](variable_24);
    var variable_25 = new THREE.CubeGeometry(4, 12, 4);
    for (var variable_15 = 0; variable_15 < 8; variable_15 += 1) {
        variable_25["vertices"][variable_15]["y"] -= 4
    };
    var variable_26 = new THREE.Mesh(variable_25, variable_16);
    variable_26["position"]["z"] = 6;
    variable_26["position"]["y"] = 4;
    variable_26["rotation"]["x"] = -Math["PI"] / 32;
    variable_05(variable_26, 0, 44 * variable_3, 20 * variable_3, 4 * variable_3, 12 * variable_3);
    variable_05(variable_26, 1, 52 * variable_3, 20 * variable_3, 4 * variable_3, 12 * variable_3);
    variable_05(variable_26, 2, 44 * variable_3, 16 * variable_3, 4 * variable_3, 4 * variable_3, 1);
    variable_05(variable_26, 3, 48 * variable_3, 20 * variable_3, 4 * variable_3, -4 * variable_3, 3);
    variable_05(variable_26, 4, 40 * variable_3, 20 * variable_3, 4 * variable_3, 12 * variable_3);
    variable_05(variable_26, 5, 48 * variable_3, 20 * variable_3, 4 * variable_3, 12 * variable_3);
    variable_1c["add"](variable_26);
    var variable_27 = new THREE["ImageUtils"]["loadTexture"]("/images/bg_stone.png");
    var variable_28 = new THREE.MeshBasicMaterial({
        map: variable_27
    });
    var variable_29 = new THREE.CubeGeometry(26, 26, 26);
    var variable_2a = new THREE.Mesh(variable_29, variable_28);
    variable_2a["rotation"]["y"] = -4.7;
    variable_2a["position"]["x"] = 0;
    variable_2a["position"]["y"] = -28;
    variable_2a["position"]["z"] = 0;
    variable_1a["add"](variable_2a);
    var variable_2b = new THREE.CubeGeometry(8, 8, 8);
    var variable_2c = new THREE.Mesh(variable_2b, variable_16);
    variable_2c["position"]["y"] = 2;
    variable_05(variable_2c, 0, 8 * variable_3, 8 * variable_3, 8 * variable_3, 8 * variable_3);
    variable_05(variable_2c, 1, 24 * variable_3, 8 * variable_3, 8 * variable_3, 8 * variable_3);
    variable_05(variable_2c, 2, 8 * variable_3, 0 * variable_3, 8 * variable_3, 8 * variable_3, 1);
    variable_05(variable_2c, 3, 16 * variable_3, 0 * variable_3, 8 * variable_3, 8 * variable_3, 3);
    variable_05(variable_2c, 4, 0 * variable_3, 8 * variable_3, 8 * variable_3, 8 * variable_3);
    variable_05(variable_2c, 5, 16 * variable_3, 8 * variable_3, 8 * variable_3, 8 * variable_3);
    variable_1b["add"](variable_2c);
    var variable_2d = new THREE.Object3D();
    var variable_2e = new THREE.CubeGeometry(1, (9 / 8) * 6, (9 / 8) * 6);
    var variable_2f = new THREE.Mesh(variable_2e, variable_16);
    var variable_30 = new THREE.Mesh(variable_2e, variable_16);
    variable_2f["position"]["y"] = 2 + (9 / 8) * 5;
    variable_30["position"]["y"] = 2 + (9 / 8) * 5;
    variable_2f["position"]["z"] = -(9 / 8) * 5;
    variable_30["position"]["z"] = (9 / 8) * 5;
    variable_05(variable_2f, 0, 25, 1, 6, 6);
    variable_05(variable_2f, 1, 32, 1, 6, 6);
    variable_05(variable_2f, 2, 25, 0, 6, 1, 1);
    variable_05(variable_2f, 3, 31, 0, 6, 1, 1);
    variable_05(variable_2f, 4, 24, 1, 1, 6);
    variable_05(variable_2f, 5, 31, 1, 1, 6);
    variable_2d["add"](variable_2f);
    variable_2d["add"](variable_30);
    variable_1b["position"]["y"] = 8;
    var variable_31 = new THREE.Object3D();
    var variable_32 = new THREE.CubeGeometry(1, 16, 10);
    var variable_33 = new THREE.Mesh(variable_32, variable_18);
    variable_33["position"]["y"] = -8;
    variable_33["visible"] = false;
    variable_05(variable_33, 0, 1 * variable_6, 1 * variable_6, 10 * variable_6, 16 * variable_6);
    variable_05(variable_33, 1, 12 * variable_6, 1 * variable_6, 10 * variable_6, 16 * variable_6);
    variable_05(variable_33, 2, 1 * variable_6, 0 * variable_6, 10 * variable_6, 1 * variable_6);
    variable_05(variable_33, 3, 11 * variable_6, 0 * variable_6, 10 * variable_6, 1 * variable_6, 1);
    variable_05(variable_33, 4, 0 * variable_6, 1 * variable_6, 1 * variable_6, 16 * variable_6);
    variable_05(variable_33, 5, 11 * variable_6, 1 * variable_6, 1 * variable_6, 16 * variable_6);
    variable_31["rotation"]["y"] = Math["PI"];
    variable_31["position"]["x"] = -2;
    variable_31["position"]["y"] = 6;
    variable_31["add"](variable_33);
    var variable_34 = new THREE.Object3D();
    variable_34["add"](variable_1e);
    variable_34["add"](variable_20);
    variable_34["add"](variable_1c);
    variable_34["add"](variable_1b);
    variable_34["add"](variable_31);
    variable_34["position"]["y"] = 6;
    var variable_35 = new THREE.Object3D();
    variable_35["add"](variable_34);
    variable_1a["add"](variable_35);
    var variable_36 = 0;
    var variable_37 = 0.1;
    var variable_38 = 0;
    var variable_39 = 0;
    var variable_3a = 0;
    var variable_3b = false;
    var variable_3c = false;
    var variable_3d = 0;
    var variable_3e = true;
    var variable_3f = Date["now"]();
    var variable_40 = 0;
    var variable_41 = function() {
        requestAnimFrame(variable_41, variable_44["domElement"]);
        var variable_42 = variable_3a;
        var variable_43 = (Date["now"]() - variable_3f) / 1000;
        if (!variable_3c) {
            if (!variable_14f) {
                variable_37 *= 0.97
            };
            if (variable_14c) {
                variable_3a += 2
            }
        } else {
            variable_3a = variable_36
        };
        if (variable_37 > 500) {
            variable_37 = 500
        } else {
            if (variable_37 < -500) {
                variable_37 = -500
            }
        };
        variable_19["position"]["x"] = -Math["cos"](variable_3a / (variable_141 / 2) + (Math["PI"] / 0.9));
        variable_19["position"]["z"] = -Math["sin"](variable_3a / (variable_141 / 2) + (Math["PI"] / 0.9));
        variable_19["position"]["y"] = (variable_37 / (variable_142 / 2)) * 1.5 + 0.2;
        variable_140 = variable_48(variable_140, 20, 300);
        variable_19["position"]["setLength"](variable_140);
        variable_19["lookAt"](new THREE.Vector3(0, 0, 0));
        if (!variable_14e) {
            variable_3d += 0.01;
            variable_1b["rotation"]["y"] = Math["sin"](variable_43 * 1.5) / 5;
            variable_1b["rotation"]["z"] = Math["sin"](variable_43) / 6;
            if (variable_00) {
                variable_26["rotation"]["z"] = 2 * Math["cos"](0.6662 * variable_43 * 10 + Math["PI"]);
                variable_26["rotation"]["x"] = 1 * (Math["cos"](0.2812 * variable_43 * 10) - 1);
                variable_24["rotation"]["z"] = 2 * Math["cos"](0.6662 * variable_43 * 10);
                variable_24["rotation"]["x"] = 1 * (Math["cos"](0.2312 * variable_43 * 10) + 1);
                variable_20["rotation"]["z"] = 1.4 * Math["cos"](0.6662 * variable_43 * 10);
                variable_1e["rotation"]["z"] = 1.4 * Math["cos"](0.6662 * variable_43 * 10 + Math["PI"]);
                variable_35["position"]["y"] = -3 + 1 * Math["cos"](0.6662 * variable_43 * 10 * 2);
                variable_35["position"]["z"] = 0.15 * Math["cos"](0.6662 * variable_43 * 10);
                variable_35["rotation"]["x"] = 0.01 * Math["cos"](0.6662 * variable_43 * 10 + Math["PI"]);
                variable_31["rotation"]["z"] = 0.1 * Math["sin"](0.6662 * variable_43 * 10 * 2) + Math["PI"] / 2.5
            } else {
                variable_24["rotation"]["z"] = -Math["sin"](variable_43 * 3) / 2;
                variable_24["rotation"]["x"] = (Math["cos"](variable_43 * 3) + Math["PI"] / 2) / 30;
                variable_26["rotation"]["z"] = Math["sin"](variable_43 * 3) / 2;
                variable_26["rotation"]["x"] = -(Math["cos"](variable_43 * 3) + Math["PI"] / 2) / 30;
                variable_1e["rotation"]["z"] = Math["sin"](variable_43 * 3) / 3;
                variable_20["rotation"]["z"] = -Math["sin"](variable_43 * 3) / 3;
                variable_31["rotation"]["z"] = Math["sin"](variable_43 * 2) / 15 + Math["PI"] / 15;
                variable_35["position"]["y"] = -3
            }
        };
        variable_44["render"](variable_1a, variable_19)
    };
    if (variable_11) {
        var variable_44 = new THREE.WebGLRenderer({
            antialias: true,
            preserveDrawingBuffer: true
        })
    } else {
        var variable_44 = new THREE.CanvasRenderer({
            antialias: true,
            preserveDrawingBuffer: true
        })
    };
    var variable_45 = variable_44["domElement"];
    variable_44["setSize"](variable_141, variable_142);
    variable_12["appendChild"](variable_45);
    var variable_46 = function(variable_47) {
        variable_47["preventDefault"]();
        if (variable_3c) {
            variable_36 = (variable_47["pageX"] - variable_45["offsetLeft"] - variable_38);
            variable_37 = (variable_47["pageY"] - variable_45["offsetTop"] - variable_39)
        }
    };
    variable_45["addEventListener"]("contextmenu", function(variable_47) {
        variable_47["preventDefault"]();
        variable_14e = !variable_14e;
        variable_14c = !variable_14c
    }, false);
    var variable_48 = function(variable_49, variable_4a, variable_4b) {
        return Math["max"](variable_4a, Math["min"](variable_4b, variable_49))
    };
    var variable_4c = 0;
    variable_12["addEventListener"]("mousewheel", (function(variable_4d, variable_4e) {
        variable_4d["preventDefault"]();
        if (variable_4e > 0) {
            variable_140 -= ((window["opera"] != null) ? -1 : 1) * 2.75
        } else {
            if (variable_4e < 0) {
                variable_140 += ((window["opera"] != null) ? -1 : 1) * 2.75
            }
        }
    }), false);
    variable_45["addEventListener"]("mousedown", function(variable_47) {
        variable_47["preventDefault"]();
        variable_38 = (variable_47["pageX"] - variable_45["offsetLeft"]) - variable_3a;
        variable_39 = (variable_47["pageY"] - variable_45["offsetTop"]) - variable_37;
        variable_3c = true;
        variable_3b = true;
        variable_46(variable_47)
    }, false);
    addEventListener("mouseup", function(variable_47) {
        variable_47["preventDefault"]();
        variable_3c = false;
        if (variable_47["which"] == 2) {
            variable_00 = !variable_00
        }
    }, false);
    variable_45["addEventListener"]("mousemove", variable_46, false);
    variable_45["addEventListener"]("mouseout", function(variable_47) {
        variable_3b = false
    }, false);
    variable_41();
    var variable_4f = new Image();
    variable_4f["onload"] = function() {
        variable_149["clearRect"](0, 0, variable_1, variable_2);
        variable_149["drawImage"](variable_4f, 0, 0)
    };
    var variable_50 = new Image();
    variable_50["crossOrigin"] = "Anonymous";
    variable_50["onload"] = function() {
        var variable_0a = variable_50["width"];
        variable_1 = variable_0a;
        variable_2 = variable_0a / 2;
        variable_3 = variable_1 / 64;
        variable_148["width"] = variable_1;
        variable_148["height"] = variable_2;
        variable_149["clearRect"](0, 0, variable_1, variable_2);
        variable_149["drawImage"](variable_50, 0, 0);
        var variable_51 = variable_149["getImageData"](0, 0, variable_1, variable_2);
        var variable_52 = variable_51["data"];
        variable_146["clearRect"](0, 0, variable_145["width"], variable_145["height"]);
        variable_146["save"]();
        var variable_53 = true;
        var variable_54 = [40, 0];
        var variable_55 = (variable_54[0] + variable_54[1] * variable_1) * 4;
        var variable_56 = function(variable_08, variable_09) {
            if (variable_52[(variable_08 + variable_09 * variable_1) * 4 + 0] !== variable_52[variable_55 + 0] || variable_52[(variable_08 + variable_09 * variable_1) * 4 + 1] !== variable_52[variable_55 + 1] || variable_52[(variable_08 + variable_09 * variable_1) * 4 + 2] !== variable_52[variable_55 + 2] || variable_52[(variable_08 + variable_09 * variable_1) * 4 + 3] !== variable_52[variable_55 + 3]) {
                return true
            };
            return false
        };
        for (var variable_15 = variable_2; variable_15 < variable_1; variable_15 += 1) {
            for (var variable_57 = 8; variable_57 < 16; variable_57 += 1) {
                if (variable_56(variable_15, variable_57)) {
                    variable_53 = false;
                    break
                }
            };
            if (!variable_53) {
                break
            }
        };
        if (!variable_53) {
            for (var variable_15 = 40; variable_15 < 56; variable_15 += 1) {
                for (var variable_57 = 0; variable_57 < 8; variable_57 += 1) {
                    if (variable_56(variable_15, variable_57)) {
                        variable_53 = false;
                        break
                    }
                };
                if (!variable_53) {
                    break
                }
            }
        };
        for (var variable_15 = 0; variable_15 < variable_1; variable_15 += 1) {
            for (var variable_57 = 0; variable_57 < variable_2; variable_57 += 1) {
                if (variable_53 && ((variable_15 >= variable_2 && variable_15 < variable_1 && variable_57 >= 8 && variable_57 < 16) || (variable_15 >= 40 && variable_15 < 56 && variable_57 >= 0 && variable_57 < 8))) {
                    variable_52[(variable_15 + variable_57 * variable_1) * 4 + 3] = 0
                };
                variable_146["fillStyle"] = "rgba(" + variable_52[(variable_15 + variable_57 * variable_1) * 4 + 0] + ", " + variable_52[(variable_15 + variable_57 * variable_1) * 4 + 1] + ", " + variable_52[(variable_15 + variable_57 * variable_1) * 4 + 2] + ", " + variable_52[(variable_15 + variable_57 * variable_1) * 4 + 3] / 255 + ")";
                variable_146["fillRect"](variable_15 * variable_147, variable_57 * variable_147, variable_147, variable_147)
            }
        };
        variable_146["restore"]();
        variable_149["putImageData"](variable_51, 0, 0);
        variable_16["map"]["needsUpdate"] = true;
        variable_17["map"]["needsUpdate"] = true
    };
    var variable_58 = new Image();
    variable_58["crossOrigin"] = "Anonymous";
    variable_58["onload"] = function() {
        var variable_0a = variable_58["width"];
        variable_4 = variable_0a;
        variable_5 = variable_0a / 2;
        variable_6 = variable_4 / 64;
        variable_14a["width"] = variable_4;
        variable_14a["height"] = variable_5;
        variable_14b["clearRect"](0, 0, variable_4, variable_5);
        variable_14b["drawImage"](variable_58, 0, 0);
        variable_18["map"]["needsUpdate"] = true;
        variable_33["visible"] = true
    };
    variable_58["onerror"] = function() {
        variable_33["visible"] = false
    };
    var variable_59 = ["/img/cache/raw/Notch.png"];
    var variable_5a = function(variable_5b) {
        if (variable_5b["length"] > 0) {
            var variable_5c = variable_5b[0];
            if (variable_5c["type"] === "image/png") {
                var variable_5d = new FileReader();
                variable_5d["onload"] = function(variable_47) {
                    var variable_02 = new Image();
                    variable_02["onload"] = function() {
                        if (document["getElementById"]("mod")["value"] == 1) {
                            variable_50["src"] = variable_02["src"]
                        } else {
                            variable_58["src"] = variable_02["src"]
                        }
                    };
                    variable_02["onerror"] = function() {
                        alert("Error: Not an image or unknown file format")
                    };
                    variable_02["src"] = this["result"]
                };
                variable_5d["readAsDataURL"](variable_5c)
            } else {
                alert("Error: This is not a PNG image!")
            }
        }
    };
    var variable_5e = document["getElementById"]("userfile");
    variable_45["addEventListener"]("dragenter", function(variable_47) {
        variable_47["stopPropagation"]();
        variable_47["preventDefault"]();
        variable_45["className"] = "dragenter"
    }, false);
    variable_45["addEventListener"]("dragleave", function(variable_47) {
        variable_47["stopPropagation"]();
        variable_47["preventDefault"]();
        variable_45["className"] = ""
    }, false);
    variable_45["addEventListener"]("dragover", function(variable_47) {
        variable_47["stopPropagation"]();
        variable_47["preventDefault"]()
    }, false);
    variable_45["addEventListener"]("drop", function(variable_47) {
        variable_47["stopPropagation"]();
        variable_47["preventDefault"]();
        variable_45["className"] = "";
        var variable_5f = variable_47["dataTransfer"];
        var variable_5b = variable_5f["files"];
        if (userfiles) {
            variable_5e["files"] = variable_5b
        };
        variable_5a(variable_5b)
    }, false);
    if (variable_5e) {
        variable_5e["addEventListener"]("change", function() {
            var variable_5b = this["files"];
            variable_5a(variable_5b)
        }, false)
    };
    return {
        setBackgroundImage: function(variable_60) {
            variable_4f["src"] = variable_60
        },
        setEars: function(variable_49) {
            if (variable_49) {
                variable_1b["add"](variable_2d);
                variable_2f["visible"] = variable_30["visible"] = true
            } else {
                variable_1b["remove"](variable_2d)
            }
        },
        getBase64: function() {
            return variable_44["domElement"]["toDataURL"]()
        },
        changeSkin: function(variable_60) {
            variable_50["src"] = variable_60
        },
        changeCape: function(variable_60) {
            variable_58["src"] = variable_60
        },
        changeCoub: function(webPath) {
            variable_27 = new THREE["ImageUtils"]["loadTexture"](webPath);
        },
        toggleMovement: function() {
            variable_14e = !variable_14e
        },
        toggleRotation: function() {
            variable_14c = !variable_14c
        },
        toggleCape: function() {
            if (!variable_14d) {
                variable_31["add"](variable_33);
                variable_14d = true
            } else {
                variable_31["remove"](variable_33);
                variable_14d = false
            }
        },
        toggleClassicRun: function() {
            variable_00 = !variable_00
        },
        toggleCameraY: function() {
            variable_14f = !variable_14f
        },
        setDefault: function(variable_60) {
            variable_50["onerror"] = function() {
                variable_50["src"] = variable_60
            }
        },
        getPrice: function(variable_61) {
            var variable_62 = {
                64: 1,
                128: 1.5,
                256: 2,
                512: 3,
                1024: 4
            };
            var variable_63 = document["getElementById"]("mod")["value"];
            if (variable_63 == 1) {
                return variable_61 * variable_62[variable_1]
            } else {
                return variable_61 * variable_62[variable_4]
            }
        },
        getSize: function() {
            var variable_63 = document["getElementById"]("mod")["value"];
            if (variable_63 == 1) {
                return variable_1 + "x" + variable_2
            } else {
                return variable_4 + "x" + variable_5
            }
        }
    }
}