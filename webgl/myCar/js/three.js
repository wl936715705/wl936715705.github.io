! function(t, e) {
	"object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.THREE = t.THREE || {})
}(this, function(t) {
	function e() {}

	function i(t, e) {
		this.x = t || 0, this.y = e || 0
	}

	function n(t, e, r, a, o, s, c, h, l, u) {
		Object.defineProperty(this, "id", {
			value: Fo++
		}), this.uuid = Do.generateUUID(), this.name = "", this.image = void 0 !== t ? t : n.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : n.DEFAULT_MAPPING, this.wrapS = void 0 !== r ? r : Ba, this.wrapT = void 0 !== a ? a : Ba, this.magFilter = void 0 !== o ? o : ka, this.minFilter = void 0 !== s ? s : Wa, this.anisotropy = void 0 !== l ? l : 1, this.format = void 0 !== c ? c : oo, this.type = void 0 !== h ? h : Xa, this.offset = new i(0, 0), this.repeat = new i(1, 1), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== u ? u : Ao, this.version = 0, this.onUpdate = null
	}

	function r(t, e, i, n) {
		this.x = t || 0, this.y = e || 0, this.z = i || 0, this.w = void 0 !== n ? n : 1
	}

	function a(t, e, i) {
		this.uuid = Do.generateUUID(), this.width = t, this.height = e, this.scissor = new r(0, 0, t, e), this.scissorTest = !1, this.viewport = new r(0, 0, t, e), void 0 === (i = i || {}).minFilter && (i.minFilter = ka), this.texture = new n(void 0, void 0, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer, this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null
	}

	function o(t, e, i) {
		a.call(this, t, e, i), this.activeCubeFace = 0, this.activeMipMapLevel = 0
	}

	function s(t, e, i, n) {
		this._x = t || 0, this._y = e || 0, this._z = i || 0, this._w = void 0 !== n ? n : 1
	}

	function c(t, e, i) {
		this.x = t || 0, this.y = e || 0, this.z = i || 0
	}

	function h() {
		this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
	}

	function l(t, e, i, r, a, o, s, c, h, l, u, d) {
		n.call(this, null, o, s, c, h, l, r, a, u, d), this.image = {
			data: t,
			width: e,
			height: i
		}, this.magFilter = void 0 !== h ? h : Ga, this.minFilter = void 0 !== l ? l : Ga, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1
	}

	function u(t, e, i, r, a, o, s, c, h, l) {
		t = void 0 !== t ? t : [], e = void 0 !== e ? e : Pa, n.call(this, t, e, i, r, a, o, s, c, h, l), this.flipY = !1
	}

	function d() {
		this.seq = [], this.map = {}
	}

	function p(t, e, i) {
		var n = t[0];
		if (n <= 0 || n > 0) {
			return t
		}
		var r = e * i,
			a = Go[r];
		if (void 0 === a && (a = new Float32Array(r), Go[r] = a), 0 !== e) {
			n.toArray(a, 0);
			for (var o = 1, s = 0; o !== e; ++o) {
				s += i, t[o].toArray(a, s)
			}
		}
		return a
	}

	function f(t, e) {
		var i = Ho[e];
		void 0 === i && (i = new Int32Array(e), Ho[e] = i);
		for (var n = 0; n !== e; ++n) {
			i[n] = t.allocTextureUnit()
		}
		return i
	}

	function m(t, e) {
		t.uniform1f(this.addr, e)
	}

	function g(t, e) {
		t.uniform1i(this.addr, e)
	}

	function v(t, e) {
		void 0 === e.x ? t.uniform2fv(this.addr, e) : t.uniform2f(this.addr, e.x, e.y)
	}

	function y(t, e) {
		void 0 !== e.x ? t.uniform3f(this.addr, e.x, e.y, e.z) : void 0 !== e.r ? t.uniform3f(this.addr, e.r, e.g, e.b) : t.uniform3fv(this.addr, e)
	}

	function x(t, e) {
		void 0 === e.x ? t.uniform4fv(this.addr, e) : t.uniform4f(this.addr, e.x, e.y, e.z, e.w)
	}

	function _(t, e) {
		t.uniformMatrix2fv(this.addr, !1, e.elements || e)
	}

	function b(t, e) {
		void 0 === e.elements ? t.uniformMatrix3fv(this.addr, !1, e) : (ko.set(e.elements), t.uniformMatrix3fv(this.addr, !1, ko))
	}

	function w(t, e) {
		void 0 === e.elements ? t.uniformMatrix4fv(this.addr, !1, e) : (Vo.set(e.elements), t.uniformMatrix4fv(this.addr, !1, Vo))
	}

	function M(t, e, i) {
		var n = i.allocTextureUnit();
		t.uniform1i(this.addr, n), i.setTexture2D(e || Bo, n)
	}

	function E(t, e, i) {
		var n = i.allocTextureUnit();
		t.uniform1i(this.addr, n), i.setTextureCube(e || zo, n)
	}

	function T(t, e) {
		t.uniform2iv(this.addr, e)
	}

	function S(t, e) {
		t.uniform3iv(this.addr, e)
	}

	function A(t, e) {
		t.uniform4iv(this.addr, e)
	}

	function R(t) {
		switch (t) {
			case 5126:
				return m;
			case 35664:
				return v;
			case 35665:
				return y;
			case 35666:
				return x;
			case 35674:
				return _;
			case 35675:
				return b;
			case 35676:
				return w;
			case 35678:
				return M;
			case 35680:
				return E;
			case 5124:
			case 35670:
				return g;
			case 35667:
			case 35671:
				return T;
			case 35668:
			case 35672:
				return S;
			case 35669:
			case 35673:
				return A
		}
	}

	function L(t, e) {
		t.uniform1fv(this.addr, e)
	}

	function P(t, e) {
		t.uniform1iv(this.addr, e)
	}

	function C(t, e) {
		t.uniform2fv(this.addr, p(e, this.size, 2))
	}

	function I(t, e) {
		t.uniform3fv(this.addr, p(e, this.size, 3))
	}

	function U(t, e) {
		t.uniform4fv(this.addr, p(e, this.size, 4))
	}

	function N(t, e) {
		t.uniformMatrix2fv(this.addr, !1, p(e, this.size, 4))
	}

	function O(t, e) {
		t.uniformMatrix3fv(this.addr, !1, p(e, this.size, 9))
	}

	function D(t, e) {
		t.uniformMatrix4fv(this.addr, !1, p(e, this.size, 16))
	}

	function F(t, e, i) {
		var n = e.length,
			r = f(i, n);
		t.uniform1iv(this.addr, r);
		for (var a = 0; a !== n; ++a) {
			i.setTexture2D(e[a] || Bo, r[a])
		}
	}

	function B(t, e, i) {
		var n = e.length,
			r = f(i, n);
		t.uniform1iv(this.addr, r);
		for (var a = 0; a !== n; ++a) {
			i.setTextureCube(e[a] || zo, r[a])
		}
	}

	function z(t) {
		switch (t) {
			case 5126:
				return L;
			case 35664:
				return C;
			case 35665:
				return I;
			case 35666:
				return U;
			case 35674:
				return N;
			case 35675:
				return O;
			case 35676:
				return D;
			case 35678:
				return F;
			case 35680:
				return B;
			case 5124:
			case 35670:
				return P;
			case 35667:
			case 35671:
				return T;
			case 35668:
			case 35672:
				return S;
			case 35669:
			case 35673:
				return A
		}
	}

	function G(t, e, i) {
		this.id = t, this.addr = i, this.setValue = R(e.type)
	}

	function H(t, e, i) {
		this.id = t, this.addr = i, this.size = e.size, this.setValue = z(e.type)
	}

	function V(t) {
		this.id = t, d.call(this)
	}

	function k(t, e) {
		t.seq.push(e), t.map[e.id] = e
	}

	function j(t, e, i) {
		var n = t.name,
			r = n.length;
		for (jo.lastIndex = 0;;) {
			var a = jo.exec(n),
				o = jo.lastIndex,
				s = a[1],
				c = "]" === a[2],
				h = a[3];
			if (c && (s |= 0), void 0 === h || "[" === h && o + 2 === r) {
				k(i, void 0 === h ? new G(s, t, e) : new H(s, t, e));
				break
			}
			var l = i.map[s];
			void 0 === l && k(i, l = new V(s)), i = l
		}
	}

	function W(t, e, i) {
		d.call(this), this.renderer = i;
		for (var n = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), r = 0; r < n; ++r) {
			var a = t.getActiveUniform(e, r),
				o = a.name;
			j(a, t.getUniformLocation(e, o), this)
		}
	}

	function X(t, e, i) {
		return void 0 === e && void 0 === i ? this.set(t) : this.setRGB(t, e, i)
	}

	function q(t, e) {
		this.min = void 0 !== t ? t : new i(1 / 0, 1 / 0), this.max = void 0 !== e ? e : new i(-1 / 0, -1 / 0)
	}

	function Y(t, e) {
		function n() {
			var t = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]),
				e = new Uint16Array([0, 1, 2, 0, 2, 3]);
			a = f.createBuffer(), o = f.createBuffer(), f.bindBuffer(f.ARRAY_BUFFER, a), f.bufferData(f.ARRAY_BUFFER, t, f.STATIC_DRAW), f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, o), f.bufferData(f.ELEMENT_ARRAY_BUFFER, e, f.STATIC_DRAW), d = f.createTexture(), p = f.createTexture(), m.bindTexture(f.TEXTURE_2D, d), f.texImage2D(f.TEXTURE_2D, 0, f.RGB, 16, 16, 0, f.RGB, f.UNSIGNED_BYTE, null), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_S, f.CLAMP_TO_EDGE), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_T, f.CLAMP_TO_EDGE), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MAG_FILTER, f.NEAREST), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MIN_FILTER, f.NEAREST), m.bindTexture(f.TEXTURE_2D, p), f.texImage2D(f.TEXTURE_2D, 0, f.RGBA, 16, 16, 0, f.RGBA, f.UNSIGNED_BYTE, null), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_S, f.CLAMP_TO_EDGE), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_T, f.CLAMP_TO_EDGE), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MAG_FILTER, f.NEAREST), f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MIN_FILTER, f.NEAREST), s = {
				vertexShader: ["uniform lowp int renderType;", "uniform vec3 screenPosition;", "uniform vec2 scale;", "uniform float rotation;", "uniform sampler2D occlusionMap;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "vUV = uv;", "vec2 pos = position;", "if ( renderType == 2 ) {", "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );", "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );", "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );", "vVisibility =        visibility.r / 9.0;", "vVisibility *= 1.0 - visibility.g / 9.0;", "vVisibility *=       visibility.b / 9.0;", "vVisibility *= 1.0 - visibility.a / 9.0;", "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;", "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;", "}", "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );", "}"].join("\n"),
				fragmentShader: ["uniform lowp int renderType;", "uniform sampler2D map;", "uniform float opacity;", "uniform vec3 color;", "varying vec2 vUV;", "varying float vVisibility;", "void main() {", "if ( renderType == 0 ) {", "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );", "} else if ( renderType == 1 ) {", "gl_FragColor = texture2D( map, vUV );", "} else {", "vec4 texture = texture2D( map, vUV );", "texture.a *= opacity * vVisibility;", "gl_FragColor = texture;", "gl_FragColor.rgb *= color;", "}", "}"].join("\n")
			}, h = r(s), l = {
				vertex: f.getAttribLocation(h, "position"),
				uv: f.getAttribLocation(h, "uv")
			}, u = {
				renderType: f.getUniformLocation(h, "renderType"),
				map: f.getUniformLocation(h, "map"),
				occlusionMap: f.getUniformLocation(h, "occlusionMap"),
				opacity: f.getUniformLocation(h, "opacity"),
				color: f.getUniformLocation(h, "color"),
				scale: f.getUniformLocation(h, "scale"),
				rotation: f.getUniformLocation(h, "rotation"),
				screenPosition: f.getUniformLocation(h, "screenPosition")
			}
		}

		function r(e) {
			var i = f.createProgram(),
				n = f.createShader(f.FRAGMENT_SHADER),
				r = f.createShader(f.VERTEX_SHADER),
				a = "precision " + t.getPrecision() + " float;\n";
			return f.shaderSource(n, a + e.fragmentShader), f.shaderSource(r, a + e.vertexShader), f.compileShader(n), f.compileShader(r), f.attachShader(i, n), f.attachShader(i, r), f.linkProgram(i), i
		}
		var a, o, s, h, l, u, d, p, f = t.context,
			m = t.state;
		this.render = function(r, s, g) {
			if (0 !== e.length) {
				var v = new c,
					y = g.w / g.z,
					x = 0.5 * g.z,
					_ = 0.5 * g.w,
					b = 16 / g.w,
					w = new i(b * y, b),
					M = new c(1, 1, 0),
					E = new i(1, 1),
					T = new q;
				T.min.set(g.x, g.y), T.max.set(g.x + (g.z - 16), g.y + (g.w - 16)), void 0 === h && n(), f.useProgram(h), m.initAttributes(), m.enableAttribute(l.vertex), m.enableAttribute(l.uv), m.disableUnusedAttributes(), f.uniform1i(u.occlusionMap, 0), f.uniform1i(u.map, 1), f.bindBuffer(f.ARRAY_BUFFER, a), f.vertexAttribPointer(l.vertex, 2, f.FLOAT, !1, 16, 0), f.vertexAttribPointer(l.uv, 2, f.FLOAT, !1, 16, 8), f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, o), m.disable(f.CULL_FACE), m.buffers.depth.setMask(!1);
				for (var S = 0, A = e.length; S < A; S++) {
					b = 16 / g.w, w.set(b * y, b);
					var R = e[S];
					if (v.set(R.matrixWorld.elements[12], R.matrixWorld.elements[13], R.matrixWorld.elements[14]), v.applyMatrix4(s.matrixWorldInverse), v.applyMatrix4(s.projectionMatrix), M.copy(v), E.x = g.x + M.x * x + x - 8, E.y = g.y + M.y * _ + _ - 8, !0 === T.containsPoint(E)) {
						m.activeTexture(f.TEXTURE0), m.bindTexture(f.TEXTURE_2D, null), m.activeTexture(f.TEXTURE1), m.bindTexture(f.TEXTURE_2D, d), f.copyTexImage2D(f.TEXTURE_2D, 0, f.RGB, E.x, E.y, 16, 16, 0), f.uniform1i(u.renderType, 0), f.uniform2f(u.scale, w.x, w.y), f.uniform3f(u.screenPosition, M.x, M.y, M.z), m.disable(f.BLEND), m.enable(f.DEPTH_TEST), f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0), m.activeTexture(f.TEXTURE0), m.bindTexture(f.TEXTURE_2D, p), f.copyTexImage2D(f.TEXTURE_2D, 0, f.RGBA, E.x, E.y, 16, 16, 0), f.uniform1i(u.renderType, 1), m.disable(f.DEPTH_TEST), m.activeTexture(f.TEXTURE1), m.bindTexture(f.TEXTURE_2D, d), f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0), R.positionScreen.copy(M), R.customUpdateCallback ? R.customUpdateCallback(R) : R.updateLensFlares(), f.uniform1i(u.renderType, 2), m.enable(f.BLEND);
						for (var L = 0, P = R.lensFlares.length; L < P; L++) {
							var C = R.lensFlares[L];
							C.opacity > 0.001 && C.scale > 0.001 && (M.x = C.x, M.y = C.y, M.z = C.z, b = C.size * C.scale / g.w, w.x = b * y, w.y = b, f.uniform3f(u.screenPosition, M.x, M.y, M.z), f.uniform2f(u.scale, w.x, w.y), f.uniform1f(u.rotation, C.rotation), f.uniform1f(u.opacity, C.opacity), f.uniform3f(u.color, C.color.r, C.color.g, C.color.b), m.setBlending(C.blending, C.blendEquation, C.blendSrc, C.blendDst), t.setTexture2D(C.texture, 1), f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0))
						}
					}
				}
				m.enable(f.CULL_FACE), m.enable(f.DEPTH_TEST), m.buffers.depth.setMask(!0), t.resetGLState()
			}
		}
	}

	function Z(t, e) {
		function i() {
			var t = new Float32Array([-0.5, -0.5, 0, 0, 0.5, -0.5, 1, 0, 0.5, 0.5, 1, 1, -0.5, 0.5, 0, 1]),
				e = new Uint16Array([0, 1, 2, 0, 2, 3]);
			o = f.createBuffer(), h = f.createBuffer(), f.bindBuffer(f.ARRAY_BUFFER, o), f.bufferData(f.ARRAY_BUFFER, t, f.STATIC_DRAW), f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, h), f.bufferData(f.ELEMENT_ARRAY_BUFFER, e, f.STATIC_DRAW), l = r(), u = {
				position: f.getAttribLocation(l, "position"),
				uv: f.getAttribLocation(l, "uv")
			}, d = {
				uvOffset: f.getUniformLocation(l, "uvOffset"),
				uvScale: f.getUniformLocation(l, "uvScale"),
				rotation: f.getUniformLocation(l, "rotation"),
				scale: f.getUniformLocation(l, "scale"),
				color: f.getUniformLocation(l, "color"),
				map: f.getUniformLocation(l, "map"),
				opacity: f.getUniformLocation(l, "opacity"),
				modelViewMatrix: f.getUniformLocation(l, "modelViewMatrix"),
				projectionMatrix: f.getUniformLocation(l, "projectionMatrix"),
				fogType: f.getUniformLocation(l, "fogType"),
				fogDensity: f.getUniformLocation(l, "fogDensity"),
				fogNear: f.getUniformLocation(l, "fogNear"),
				fogFar: f.getUniformLocation(l, "fogFar"),
				fogColor: f.getUniformLocation(l, "fogColor"),
				alphaTest: f.getUniformLocation(l, "alphaTest")
			};
			var i = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
			i.width = 8, i.height = 8;
			var a = i.getContext("2d");
			a.fillStyle = "white", a.fillRect(0, 0, 8, 8), (p = new n(i)).needsUpdate = !0
		}

		function r() {
			var e = f.createProgram(),
				i = f.createShader(f.VERTEX_SHADER),
				n = f.createShader(f.FRAGMENT_SHADER);
			return f.shaderSource(i, ["precision " + t.getPrecision() + " float;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform float rotation;", "uniform vec2 scale;", "uniform vec2 uvOffset;", "uniform vec2 uvScale;", "attribute vec2 position;", "attribute vec2 uv;", "varying vec2 vUV;", "void main() {", "vUV = uvOffset + uv * uvScale;", "vec2 alignedPosition = position * scale;", "vec2 rotatedPosition;", "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;", "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;", "vec4 finalPosition;", "finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );", "finalPosition.xy += rotatedPosition;", "finalPosition = projectionMatrix * finalPosition;", "gl_Position = finalPosition;", "}"].join("\n")), f.shaderSource(n, ["precision " + t.getPrecision() + " float;", "uniform vec3 color;", "uniform sampler2D map;", "uniform float opacity;", "uniform int fogType;", "uniform vec3 fogColor;", "uniform float fogDensity;", "uniform float fogNear;", "uniform float fogFar;", "uniform float alphaTest;", "varying vec2 vUV;", "void main() {", "vec4 texture = texture2D( map, vUV );", "if ( texture.a < alphaTest ) discard;", "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );", "if ( fogType > 0 ) {", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "float fogFactor = 0.0;", "if ( fogType == 1 ) {", "fogFactor = smoothstep( fogNear, fogFar, depth );", "} else {", "const float LOG2 = 1.442695;", "fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "}", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}", "}"].join("\n")), f.compileShader(i), f.compileShader(n), f.attachShader(e, i), f.attachShader(e, n), f.linkProgram(e), e
		}

		function a(t, e) {
			return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : e.id - t.id
		}
		var o, h, l, u, d, p, f = t.context,
			m = t.state,
			g = new c,
			v = new s,
			y = new c;
		this.render = function(n, r) {
			if (0 !== e.length) {
				void 0 === l && i(), f.useProgram(l), m.initAttributes(), m.enableAttribute(u.position), m.enableAttribute(u.uv), m.disableUnusedAttributes(), m.disable(f.CULL_FACE), m.enable(f.BLEND), f.bindBuffer(f.ARRAY_BUFFER, o), f.vertexAttribPointer(u.position, 2, f.FLOAT, !1, 16, 0), f.vertexAttribPointer(u.uv, 2, f.FLOAT, !1, 16, 8), f.bindBuffer(f.ELEMENT_ARRAY_BUFFER, h), f.uniformMatrix4fv(d.projectionMatrix, !1, r.projectionMatrix.elements), m.activeTexture(f.TEXTURE0), f.uniform1i(d.map, 0);
				var s = 0,
					c = 0,
					x = n.fog;
				x ? (f.uniform3f(d.fogColor, x.color.r, x.color.g, x.color.b), x.isFog ? (f.uniform1f(d.fogNear, x.near), f.uniform1f(d.fogFar, x.far), f.uniform1i(d.fogType, 1), s = 1, c = 1) : x.isFogExp2 && (f.uniform1f(d.fogDensity, x.density), f.uniform1i(d.fogType, 2), s = 2, c = 2)) : (f.uniform1i(d.fogType, 0), s = 0, c = 0);
				for (var _ = 0, b = e.length; _ < b; _++) {
					(M = e[_]).modelViewMatrix.multiplyMatrices(r.matrixWorldInverse, M.matrixWorld), M.z = -M.modelViewMatrix.elements[14]
				}
				e.sort(a);
				for (var w = [], _ = 0, b = e.length; _ < b; _++) {
					var M = e[_],
						E = M.material;
					if (!1 !== E.visible) {
						f.uniform1f(d.alphaTest, E.alphaTest), f.uniformMatrix4fv(d.modelViewMatrix, !1, M.modelViewMatrix.elements), M.matrixWorld.decompose(g, v, y), w[0] = y.x, w[1] = y.y;
						var T = 0;
						n.fog && E.fog && (T = c), s !== T && (f.uniform1i(d.fogType, T), s = T), null !== E.map ? (f.uniform2f(d.uvOffset, E.map.offset.x, E.map.offset.y), f.uniform2f(d.uvScale, E.map.repeat.x, E.map.repeat.y)) : (f.uniform2f(d.uvOffset, 0, 0), f.uniform2f(d.uvScale, 1, 1)), f.uniform1f(d.opacity, E.opacity), f.uniform3f(d.color, E.color.r, E.color.g, E.color.b), f.uniform1f(d.rotation, E.rotation), f.uniform2fv(d.scale, w), m.setBlending(E.blending, E.blendEquation, E.blendSrc, E.blendDst, E.blendEquationAlpha, E.blendSrcAlpha, E.blendDstAlpha, E.premultipliedAlpha), m.buffers.depth.setTest(E.depthTest), m.buffers.depth.setMask(E.depthWrite), E.map ? t.setTexture2D(E.map, 0) : t.setTexture2D(p, 0), f.drawElements(f.TRIANGLES, 6, f.UNSIGNED_SHORT, 0)
					}
				}
				m.enable(f.CULL_FACE), t.resetGLState()
			}
		}
	}

	function J() {
		Object.defineProperty(this, "id", {
			value: Jo++
		}), this.uuid = Do.generateUUID(), this.name = "", this.type = "Material", this.fog = !0, this.lights = !0, this.blending = qr, this.side = Br, this.shading = Vr, this.vertexColors = kr, this.opacity = 1, this.transparent = !1, this.blendSrc = sa, this.blendDst = ca, this.blendEquation = Kr, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = va, this.depthTest = !0, this.depthWrite = !0, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.overdraw = 0, this.visible = !0, this.needsUpdate = !0
	}

	function Q(t) {
		J.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.extensions = {
			derivatives: !1,
			fragDepth: !1,
			drawBuffers: !1,
			shaderTextureLOD: !1
		}, this.defaultAttributeValues = {
			color: [1, 1, 1],
			uv: [0, 0],
			uv2: [0, 0]
		}, this.index0AttributeName = void 0, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t))
	}

	function K(t) {
		J.call(this), this.type = "MeshDepthMaterial", this.depthPacking = No, this.skinning = !1, this.morphTargets = !1, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.setValues(t)
	}

	function $(t, e) {
		this.min = void 0 !== t ? t : new c(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new c(-1 / 0, -1 / 0, -1 / 0)
	}

	function tt(t, e) {
		this.center = void 0 !== t ? t : new c, this.radius = void 0 !== e ? e : 0
	}

	function et() {
		this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
	}

	function it(t, e) {
		this.normal = void 0 !== t ? t : new c(1, 0, 0), this.constant = void 0 !== e ? e : 0
	}

	function nt(t, e, i, n, r, a) {
		this.planes = [void 0 !== t ? t : new it, void 0 !== e ? e : new it, void 0 !== i ? i : new it, void 0 !== n ? n : new it, void 0 !== r ? r : new it, void 0 !== a ? a : new it]
	}

	function rt(t, e, n, o) {
		function s(e, i, n, r) {
			var a = e.geometry,
				o = null,
				s = M,
				c = e.customDepthMaterial;
			if (n && (s = E, c = e.customDistanceMaterial), c) {
				o = c
			} else {
				var h = !1;
				i.morphTargets && (a && a.isBufferGeometry ? h = a.morphAttributes && a.morphAttributes.position && a.morphAttributes.position.length > 0 : a && a.isGeometry && (h = a.morphTargets && a.morphTargets.length > 0)), e.isSkinnedMesh && !1 === i.skinning && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e);
				var l = e.isSkinnedMesh && i.skinning,
					u = 0;
				h && (u |= _), l && (u |= b), o = s[u]
			}
			if (t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length) {
				var d = o.uuid,
					p = i.uuid,
					f = T[d];
				void 0 === f && (f = {}, T[d] = f);
				var m = f[p];
				void 0 === m && (m = o.clone(), f[p] = m), o = m
			}
			o.visible = i.visible, o.wireframe = i.wireframe;
			var g = i.side;
			return F.renderSingleSided && g == Gr && (g = Br), F.renderReverseSided && (g === Br ? g = zr : g === zr && (g = Br)), o.side = g, o.clipShadows = i.clipShadows, o.clippingPlanes = i.clippingPlanes, o.wireframeLinewidth = i.wireframeLinewidth, o.linewidth = i.linewidth, n && void 0 !== o.uniforms.lightPos && o.uniforms.lightPos.value.copy(r), o
		}

		function l(e, i, r, a) {
			if (!1 !== e.visible) {
				if (e.layers.test(i.layers) && (e.isMesh || e.isLine || e.isPoints) && e.castShadow && (!e.frustumCulled || p.intersectsObject(e))) {
					e.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse, e.matrixWorld);
					var o = n.update(e),
						c = e.material;
					if (Array.isArray(c)) {
						for (var h = o.groups, u = 0, d = h.length; u < d; u++) {
							var f = h[u],
								m = c[f.materialIndex];
							m && m.visible && (g = s(e, m, a, x), t.renderBufferDirect(r, null, o, g, e, f))
						}
					} else {
						if (c.visible) {
							var g = s(e, c, a, x);
							t.renderBufferDirect(r, null, o, g, e, null)
						}
					}
				}
				for (var v = e.children, y = 0, _ = v.length; y < _; y++) {
					l(v[y], i, r, a)
				}
			}
		}
		var u = t.context,
			d = t.state,
			p = new nt,
			f = new h,
			m = e.shadows,
			g = new i,
			v = new i(o.maxTextureSize, o.maxTextureSize),
			y = new c,
			x = new c,
			_ = 1,
			b = 2,
			w = 1 + (_ | b),
			M = new Array(w),
			E = new Array(w),
			T = {},
			S = [new c(1, 0, 0), new c(-1, 0, 0), new c(0, 0, 1), new c(0, 0, -1), new c(0, 1, 0), new c(0, -1, 0)],
			A = [new c(0, 1, 0), new c(0, 1, 0), new c(0, 1, 0), new c(0, 1, 0), new c(0, 0, 1), new c(0, 0, -1)],
			R = [new r, new r, new r, new r, new r, new r],
			L = new K;
		L.depthPacking = Oo, L.clipping = !0;
		for (var P = Zo.distanceRGBA, C = qo.clone(P.uniforms), I = 0; I !== w; ++I) {
			var U = 0 != (I & _),
				N = 0 != (I & b),
				O = L.clone();
			O.morphTargets = U, O.skinning = N, M[I] = O;
			var D = new Q({
				defines: {
					USE_SHADOWMAP: ""
				},
				uniforms: C,
				vertexShader: P.vertexShader,
				fragmentShader: P.fragmentShader,
				morphTargets: U,
				skinning: N,
				clipping: !0
			});
			E[I] = D
		}
		var F = this;
		this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Dr, this.renderReverseSided = !0, this.renderSingleSided = !0, this.render = function(e, i) {
			if (!1 !== F.enabled && (!1 !== F.autoUpdate || !1 !== F.needsUpdate) && 0 !== m.length) {
				d.disable(u.BLEND), d.buffers.color.setClear(1, 1, 1, 1), d.buffers.depth.setTest(!0), d.setScissorTest(!1);
				for (var n, r = 0, o = m.length; r < o; r++) {
					var s = m[r],
						c = s.shadow,
						h = s && s.isPointLight;
					if (void 0 !== c) {
						var _ = c.camera;
						if (g.copy(c.mapSize), g.min(v), h) {
							var b = g.x,
								w = g.y;
							R[0].set(2 * b, w, b, w), R[1].set(0, w, b, w), R[2].set(3 * b, w, b, w), R[3].set(b, w, b, w), R[4].set(3 * b, 0, b, w), R[5].set(b, 0, b, w), g.x *= 4, g.y *= 2
						}
						if (null === c.map) {
							var M = {
								minFilter: Ga,
								magFilter: Ga,
								format: oo
							};
							c.map = new a(g.x, g.y, M), c.map.texture.name = s.name + ".shadowMap", _.updateProjectionMatrix()
						}
						c.isSpotLightShadow && c.update(s);
						var E = c.map,
							T = c.matrix;
						x.setFromMatrixPosition(s.matrixWorld), _.position.copy(x), h ? (n = 6, T.makeTranslation(-x.x, -x.y, -x.z)) : (n = 1, y.setFromMatrixPosition(s.target.matrixWorld), _.lookAt(y), _.updateMatrixWorld(), _.matrixWorldInverse.getInverse(_.matrixWorld), T.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), T.multiply(_.projectionMatrix), T.multiply(_.matrixWorldInverse)), t.setRenderTarget(E), t.clear();
						for (var L = 0; L < n; L++) {
							if (h) {
								y.copy(_.position), y.add(S[L]), _.up.copy(A[L]), _.lookAt(y), _.updateMatrixWorld(), _.matrixWorldInverse.getInverse(_.matrixWorld);
								var P = R[L];
								d.viewport(P)
							}
							f.multiplyMatrices(_.projectionMatrix, _.matrixWorldInverse), p.setFromMatrix(f), l(e, i, _, h)
						}
					} else {
						console.warn("THREE.WebGLShadowMap:", s, "has no shadow.")
					}
				}
				var C = t.getClearColor(),
					I = t.getClearAlpha();
				t.setClearColor(C, I), F.needsUpdate = !1
			}
		}
	}

	function at(t, e) {
		this.origin = void 0 !== t ? t : new c, this.direction = void 0 !== e ? e : new c
	}

	function ot(t, e, i, n) {
		this._x = t || 0, this._y = e || 0, this._z = i || 0, this._order = n || ot.DefaultOrder
	}

	function st() {
		this.mask = 1
	}

	function ct() {
		Object.defineProperty(this, "id", {
			value: Qo++
		}), this.uuid = Do.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ct.DefaultUp.clone();
		var t = new c,
			e = new ot,
			i = new s,
			n = new c(1, 1, 1);
		e.onChange(function() {
			i.setFromEuler(e, !1)
		}), i.onChange(function() {
			e.setFromQuaternion(i, void 0, !1)
		}), Object.defineProperties(this, {
			position: {
				enumerable: !0,
				value: t
			},
			rotation: {
				enumerable: !0,
				value: e
			},
			quaternion: {
				enumerable: !0,
				value: i
			},
			scale: {
				enumerable: !0,
				value: n
			},
			modelViewMatrix: {
				value: new h
			},
			normalMatrix: {
				value: new et
			}
		}), this.matrix = new h, this.matrixWorld = new h, this.matrixAutoUpdate = ct.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new st, this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
	}

	function ht(t, e) {
		this.start = void 0 !== t ? t : new c, this.end = void 0 !== e ? e : new c
	}

	function lt(t, e, i) {
		this.a = void 0 !== t ? t : new c, this.b = void 0 !== e ? e : new c, this.c = void 0 !== i ? i : new c
	}

	function ut(t, e, i, n, r, a) {
		this.a = t, this.b = e, this.c = i, this.normal = n && n.isVector3 ? n : new c, this.vertexNormals = Array.isArray(n) ? n : [], this.color = r && r.isColor ? r : new X, this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = void 0 !== a ? a : 0
	}

	function dt(t) {
		J.call(this), this.type = "MeshBasicMaterial", this.color = new X(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = wa, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.lights = !1, this.setValues(t)
	}

	function pt(t, e, i) {
		if (Array.isArray(t)) {
			throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.")
		}
		this.uuid = Do.generateUUID(), this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === i, this.dynamic = !1, this.updateRange = {
			offset: 0,
			count: -1
		}, this.onUploadCallback = function() {}, this.version = 0
	}

	function ft(t, e) {
		pt.call(this, new Int8Array(t), e)
	}

	function mt(t, e) {
		pt.call(this, new Uint8Array(t), e)
	}

	function gt(t, e) {
		pt.call(this, new Uint8ClampedArray(t), e)
	}

	function vt(t, e) {
		pt.call(this, new Int16Array(t), e)
	}

	function yt(t, e) {
		pt.call(this, new Uint16Array(t), e)
	}

	function xt(t, e) {
		pt.call(this, new Int32Array(t), e)
	}

	function _t(t, e) {
		pt.call(this, new Uint32Array(t), e)
	}

	function bt(t, e) {
		pt.call(this, new Float32Array(t), e)
	}

	function wt(t, e) {
		pt.call(this, new Float64Array(t), e)
	}

	function Mt() {
		this.indices = [], this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingBox = null, this.boundingSphere = null, this.verticesNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.uvsNeedUpdate = !1, this.groupsNeedUpdate = !1
	}

	function Et(t) {
		if (0 === t.length) {
			return -1 / 0
		}
		for (var e = t[0], i = 1, n = t.length; i < n; ++i) {
			t[i] > e && (e = t[i])
		}
		return e
	}

	function Tt() {
		return Ko++
	}

	function St() {
		Object.defineProperty(this, "id", {
			value: Tt()
		}), this.uuid = Do.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
			[]
		], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.elementsNeedUpdate = !1, this.verticesNeedUpdate = !1, this.uvsNeedUpdate = !1, this.normalsNeedUpdate = !1, this.colorsNeedUpdate = !1, this.lineDistancesNeedUpdate = !1, this.groupsNeedUpdate = !1
	}

	function At() {
		Object.defineProperty(this, "id", {
			value: Tt()
		}), this.uuid = Do.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
			start: 0,
			count: 1 / 0
		}
	}

	function Rt(t, e) {
		ct.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new At, this.material = void 0 !== e ? e : new dt({
			color: 16777215 * Math.random()
		}), this.drawMode = Eo, this.updateMorphTargets()
	}

	function Lt(t, e, i, n, r, a) {
		St.call(this), this.type = "BoxGeometry", this.parameters = {
			width: t,
			height: e,
			depth: i,
			widthSegments: n,
			heightSegments: r,
			depthSegments: a
		}, this.fromBufferGeometry(new Pt(t, e, i, n, r, a)), this.mergeVertices()
	}

	function Pt(t, e, i, n, r, a) {
		function o(t, e, i, n, r, a, o, m, g, v, y) {
			var x, _, b = a / g,
				w = o / v,
				M = a / 2,
				E = o / 2,
				T = m / 2,
				S = g + 1,
				A = v + 1,
				R = 0,
				L = 0,
				P = new c;
			for (_ = 0; _ < A; _++) {
				var C = _ * w - E;
				for (x = 0; x < S; x++) {
					var I = x * b - M;
					P[t] = I * n, P[e] = C * r, P[i] = T, l.push(P.x, P.y, P.z), P[t] = 0, P[e] = 0, P[i] = m > 0 ? 1 : -1, u.push(P.x, P.y, P.z), d.push(x / g), d.push(1 - _ / v), R += 1
				}
			}
			for (_ = 0; _ < v; _++) {
				for (x = 0; x < g; x++) {
					var U = p + x + S * _,
						N = p + x + S * (_ + 1),
						O = p + (x + 1) + S * (_ + 1),
						D = p + (x + 1) + S * _;
					h.push(U, N, D), h.push(N, O, D), L += 6
				}
			}
			s.addGroup(f, L, y), f += L, p += R
		}
		At.call(this), this.type = "BoxBufferGeometry", this.parameters = {
			width: t,
			height: e,
			depth: i,
			widthSegments: n,
			heightSegments: r,
			depthSegments: a
		};
		var s = this;
		n = Math.floor(n) || 1, r = Math.floor(r) || 1;
		var h = [],
			l = [],
			u = [],
			d = [],
			p = 0,
			f = 0;
		o("z", "y", "x", -1, -1, i, e, t, a = Math.floor(a) || 1, r, 0), o("z", "y", "x", 1, -1, i, e, -t, a, r, 1), o("x", "z", "y", 1, 1, t, i, e, n, a, 2), o("x", "z", "y", 1, -1, t, i, -e, n, a, 3), o("x", "y", "z", 1, -1, t, e, i, n, r, 4), o("x", "y", "z", -1, -1, t, e, -i, n, r, 5), this.setIndex(h), this.addAttribute("position", new bt(l, 3)), this.addAttribute("normal", new bt(u, 3)), this.addAttribute("uv", new bt(d, 2))
	}

	function Ct(t, e, i, n) {
		St.call(this), this.type = "PlaneGeometry", this.parameters = {
			width: t,
			height: e,
			widthSegments: i,
			heightSegments: n
		}, this.fromBufferGeometry(new It(t, e, i, n)), this.mergeVertices()
	}

	function It(t, e, i, n) {
		At.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
			width: t,
			height: e,
			widthSegments: i,
			heightSegments: n
		};
		var r, a, o = t / 2,
			s = e / 2,
			c = Math.floor(i) || 1,
			h = Math.floor(n) || 1,
			l = c + 1,
			u = h + 1,
			d = t / c,
			p = e / h,
			f = [],
			m = [],
			g = [],
			v = [];
		for (a = 0; a < u; a++) {
			var y = a * p - s;
			for (r = 0; r < l; r++) {
				var x = r * d - o;
				m.push(x, -y, 0), g.push(0, 0, 1), v.push(r / c), v.push(1 - a / h)
			}
		}
		for (a = 0; a < h; a++) {
			for (r = 0; r < c; r++) {
				var _ = r + l * a,
					b = r + l * (a + 1),
					w = r + 1 + l * (a + 1),
					M = r + 1 + l * a;
				f.push(_, b, M), f.push(b, w, M)
			}
		}
		this.setIndex(f), this.addAttribute("position", new bt(m, 3)), this.addAttribute("normal", new bt(g, 3)), this.addAttribute("uv", new bt(v, 2))
	}

	function Ut() {
		ct.call(this), this.type = "Camera", this.matrixWorldInverse = new h, this.projectionMatrix = new h
	}

	function Nt(t, e, i, n) {
		Ut.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== t ? t : 50, this.zoom = 1, this.near = void 0 !== i ? i : 0.1, this.far = void 0 !== n ? n : 2000, this.focus = 10, this.aspect = void 0 !== e ? e : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
	}

	function Ot(t, e, i, n, r, a) {
		Ut.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = i, this.bottom = n, this.near = void 0 !== r ? r : 0.1, this.far = void 0 !== a ? a : 2000, this.updateProjectionMatrix()
	}

	function Dt(t) {
		function e(e, i) {
			var n = e.array,
				r = e.dynamic ? t.DYNAMIC_DRAW : t.STATIC_DRAW,
				a = t.createBuffer();
			t.bindBuffer(i, a), t.bufferData(i, n, r), e.onUploadCallback();
			var o = t.FLOAT;
			return n instanceof Float32Array ? o = t.FLOAT : n instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : n instanceof Uint16Array ? o = t.UNSIGNED_SHORT : n instanceof Int16Array ? o = t.SHORT : n instanceof Uint32Array ? o = t.UNSIGNED_INT : n instanceof Int32Array ? o = t.INT : n instanceof Int8Array ? o = t.BYTE : n instanceof Uint8Array && (o = t.UNSIGNED_BYTE), {
				buffer: a,
				type: o,
				bytesPerElement: n.BYTES_PER_ELEMENT,
				version: e.version
			}
		}

		function i(e, i, n) {
			var r = i.array,
				a = i.updateRange;
			t.bindBuffer(n, e), !1 === i.dynamic ? t.bufferData(n, r, t.STATIC_DRAW) : -1 === a.count ? t.bufferSubData(n, 0, r) : 0 === a.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (t.bufferSubData(n, a.offset * r.BYTES_PER_ELEMENT, r.subarray(a.offset, a.offset + a.count)), a.count = 0)
		}
		var n = {};
		return {
			get: function(t) {
				return t.isInterleavedBufferAttribute && (t = t.data), n[t.uuid]
			},
			remove: function(e) {
				var i = n[e.uuid];
				i && (t.deleteBuffer(i.buffer), delete n[e.uuid])
			},
			update: function(t, r) {
				t.isInterleavedBufferAttribute && (t = t.data);
				var a = n[t.uuid];
				void 0 === a ? n[t.uuid] = e(t, r) : a.version < t.version && (i(a.buffer, t, r), a.version = t.version)
			}
		}
	}

	function Ft(t, e) {
		return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program && e.program && t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
	}

	function Bt(t, e) {
		return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
	}

	function zt() {
		var t = [],
			e = -1,
			i = [],
			n = -1;
		return {
			opaque: t,
			transparent: i,
			init: function() {
				e = -1, n = -1
			},
			push: function(r, a, o, s, c) {
				var h, l;
				o.transparent ? (h = i, l = ++n) : (h = t, l = ++e);
				var u = h[l];
				u ? (u.id = r.id, u.object = r, u.geometry = a, u.material = o, u.program = o.program, u.renderOrder = r.renderOrder, u.z = s, u.group = c) : (u = {
					id: r.id,
					object: r,
					geometry: a,
					material: o,
					program: o.program,
					renderOrder: r.renderOrder,
					z: s,
					group: c
				}, h.push(u))
			},
			finish: function() {
				t.length = e + 1, i.length = n + 1
			},
			sort: function() {
				t.sort(Ft), i.sort(Bt)
			}
		}
	}

	function Gt() {
		var t = {};
		return {
			get: function(e, i) {
				var n = e.id + "," + i.id,
					r = t[n];
				return void 0 === r && (r = new zt, t[n] = r), r
			},
			dispose: function() {
				t = {}
			}
		}
	}

	function Ht(t, e, i) {
		var n, r, a;
		this.setMode = function(t) {
			n = t
		}, this.setIndex = function(i) {
			i.array instanceof Uint32Array && e.get("OES_element_index_uint") ? (r = t.UNSIGNED_INT, a = 4) : i.array instanceof Uint16Array ? (r = t.UNSIGNED_SHORT, a = 2) : (r = t.UNSIGNED_BYTE, a = 1)
		}, this.render = function(e, o) {
			t.drawElements(n, o, r, e * a), i.calls++, i.vertices += o, n === t.TRIANGLES && (i.faces += o / 3)
		}, this.renderInstances = function(o, s, c) {
			var h = e.get("ANGLE_instanced_arrays");
			null !== h ? (h.drawElementsInstancedANGLE(n, c, r, s * a, o.maxInstancedCount), i.calls++, i.vertices += c * o.maxInstancedCount, n === t.TRIANGLES && (i.faces += o.maxInstancedCount * c / 3)) : console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.")
		}
	}

	function Vt(t, e, i) {
		var n;
		this.setMode = function(t) {
			n = t
		}, this.render = function(e, r) {
			t.drawArrays(n, e, r), i.calls++, i.vertices += r, n === t.TRIANGLES && (i.faces += r / 3)
		}, this.renderInstances = function(r, a, o) {
			var s = e.get("ANGLE_instanced_arrays");
			if (null !== s) {
				var c = r.attributes.position;
				c.isInterleavedBufferAttribute ? (o = c.data.count, s.drawArraysInstancedANGLE(n, 0, o, r.maxInstancedCount)) : s.drawArraysInstancedANGLE(n, a, o, r.maxInstancedCount), i.calls++, i.vertices += o * r.maxInstancedCount, n === t.TRIANGLES && (i.faces += r.maxInstancedCount * o / 3)
			} else {
				console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.")
			}
		}
	}

	function kt(t, e, i) {
		function n(t) {
			var o = t.target,
				s = r[o.id];
			null !== s.index && e.remove(s.index);
			for (var c in s.attributes) {
				e.remove(s.attributes[c])
			}
			o.removeEventListener("dispose", n), delete r[o.id];
			var h = a[o.id];
			h && (e.remove(h), delete a[o.id]), (h = a[s.id]) && (e.remove(h), delete a[s.id]), i.geometries--
		}
		var r = {},
			a = {};
		return {
			get: function(t, e) {
				var a = r[e.id];
				return a || (e.addEventListener("dispose", n), e.isBufferGeometry ? a = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new At).setFromObject(t)), a = e._bufferGeometry), r[e.id] = a, i.geometries++, a)
			},
			update: function(i) {
				var n = i.index,
					r = i.attributes;
				null !== n && e.update(n, t.ELEMENT_ARRAY_BUFFER);
				for (var a in r) {
					e.update(r[a], t.ARRAY_BUFFER)
				}
				var o = i.morphAttributes;
				for (var a in o) {
					for (var s = o[a], c = 0, h = s.length; c < h; c++) {
						e.update(s[c], t.ARRAY_BUFFER)
					}
				}
			},
			getWireframeAttribute: function(i) {
				var n = a[i.id];
				if (n) {
					return n
				}
				var r = [],
					o = i.index,
					s = i.attributes;
				if (null !== o) {
					for (var c = 0, h = (p = o.array).length; c < h; c += 3) {
						var l = p[c + 0],
							u = p[c + 1],
							d = p[c + 2];
						r.push(l, u, u, d, d, l)
					}
				} else {
					for (var p = s.position.array, c = 0, h = p.length / 3 - 1; c < h; c += 3) {
						var l = c + 0,
							u = c + 1,
							d = c + 2;
						r.push(l, u, u, d, d, l)
					}
				}
				return n = new(Et(r) > 65535 ? _t : yt)(r, 1), e.update(n, t.ELEMENT_ARRAY_BUFFER), a[i.id] = n, n
			}
		}
	}

	function jt() {
		var t = {};
		return {
			get: function(e) {
				if (void 0 !== t[e.id]) {
					return t[e.id]
				}
				var n;
				switch (e.type) {
					case "DirectionalLight":
						n = {
							direction: new c,
							color: new X,
							shadow: !1,
							shadowBias: 0,
							shadowRadius: 1,
							shadowMapSize: new i
						};
						break;
					case "SpotLight":
						n = {
							position: new c,
							direction: new c,
							color: new X,
							distance: 0,
							coneCos: 0,
							penumbraCos: 0,
							decay: 0,
							shadow: !1,
							shadowBias: 0,
							shadowRadius: 1,
							shadowMapSize: new i
						};
						break;
					case "PointLight":
						n = {
							position: new c,
							color: new X,
							distance: 0,
							decay: 0,
							shadow: !1,
							shadowBias: 0,
							shadowRadius: 1,
							shadowMapSize: new i
						};
						break;
					case "HemisphereLight":
						n = {
							direction: new c,
							skyColor: new X,
							groundColor: new X
						};
						break;
					case "RectAreaLight":
						n = {
							color: new X,
							position: new c,
							halfWidth: new c,
							halfHeight: new c
						}
				}
				return t[e.id] = n, n
			}
		}
	}

	function Wt(t, e, i) {
		var n = {};
		return {
			update: function(t) {
				var r = i.frame,
					a = t.geometry,
					o = e.get(t, a);
				return n[o.id] !== r && (a.isGeometry && o.updateFromObject(t), e.update(o), n[o.id] = r), o
			},
			clear: function() {
				n = {}
			}
		}
	}

	function Xt(t) {
		for (var e = t.split("\n"), i = 0; i < e.length; i++) {
			e[i] = i + 1 + ": " + e[i]
		}
		return e.join("\n")
	}

	function qt(t, e, i) {
		var n = t.createShader(e);
		return t.shaderSource(n, i), t.compileShader(n), !1 === t.getShaderParameter(n, t.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== t.getShaderInfoLog(n) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", e === t.VERTEX_SHADER ? "vertex" : "fragment", t.getShaderInfoLog(n), Xt(i)), n
	}

	function Yt(t) {
		switch (t) {
			case Ao:
				return ["Linear", "( value )"];
			case Ro:
				return ["sRGB", "( value )"];
			case Po:
				return ["RGBE", "( value )"];
			case Co:
				return ["RGBM", "( value, 7.0 )"];
			case Io:
				return ["RGBM", "( value, 16.0 )"];
			case Uo:
				return ["RGBD", "( value, 256.0 )"];
			case Lo:
				return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
			default:
				throw new Error("unsupported encoding: " + t)
		}
	}

	function Zt(t, e) {
		var i = Yt(e);
		return "vec4 " + t + "( vec4 value ) { return " + i[0] + "ToLinear" + i[1] + "; }"
	}

	function Jt(t, e) {
		var i = Yt(e);
		return "vec4 " + t + "( vec4 value ) { return LinearTo" + i[0] + i[1] + "; }"
	}

	function Qt(t, e) {
		var i;
		switch (e) {
			case Sa:
				i = "Linear";
				break;
			case Aa:
				i = "Reinhard";
				break;
			case Ra:
				i = "Uncharted2";
				break;
			case La:
				i = "OptimizedCineon";
				break;
			default:
				throw new Error("unsupported toneMapping: " + e)
		}
		return "vec3 " + t + "( vec3 color ) { return " + i + "ToneMapping( color ); }"
	}

	function Kt(t, e, i) {
		return [(t = t || {}).derivatives || e.envMapCubeUV || e.bumpMap || e.normalMap || e.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) && i.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && i.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD || e.envMap) && i.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(ee).join("\n")
	}

	function $t(t) {
		var e = [];
		for (var i in t) {
			var n = t[i];
			!1 !== n && e.push("#define " + i + " " + n)
		}
		return e.join("\n")
	}

	function te(t, e, i) {
		for (var n = {}, r = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), a = 0; a < r; a++) {
			var o = t.getActiveAttrib(e, a).name;
			n[o] = t.getAttribLocation(e, o)
		}
		return n
	}

	function ee(t) {
		return "" !== t
	}

	function ie(t, e) {
		return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
	}

	function ne(t) {
		var e = /^[ \t]*#include +<([\w\d.]+)>/gm;
		return t.replace(e, function(t, e) {
			var i = Yo[e];
			if (void 0 === i) {
				throw new Error("Can not resolve #include <" + e + ">")
			}
			return ne(i)
		})
	}

	function re(t) {
		var e = /for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g;
		return t.replace(e, function(t, e, i, n) {
			for (var r = "", a = parseInt(e); a < parseInt(i); a++) {
				r += n.replace(/\[ i \]/g, "[ " + a + " ]")
			}
			return r
		})
	}

	function ae(t, e, i, n) {
		var r = t.context,
			a = i.extensions,
			o = i.defines,
			s = i.__webglShader.vertexShader,
			c = i.__webglShader.fragmentShader,
			h = "SHADOWMAP_TYPE_BASIC";
		n.shadowMapType === Dr ? h = "SHADOWMAP_TYPE_PCF" : n.shadowMapType === Fr && (h = "SHADOWMAP_TYPE_PCF_SOFT");
		var l = "ENVMAP_TYPE_CUBE",
			u = "ENVMAP_MODE_REFLECTION",
			d = "ENVMAP_BLENDING_MULTIPLY";
		if (n.envMap) {
			switch (i.envMap.mapping) {
				case Pa:
				case Ca:
					l = "ENVMAP_TYPE_CUBE";
					break;
				case Oa:
				case Da:
					l = "ENVMAP_TYPE_CUBE_UV";
					break;
				case Ia:
				case Ua:
					l = "ENVMAP_TYPE_EQUIREC";
					break;
				case Na:
					l = "ENVMAP_TYPE_SPHERE"
			}
			switch (i.envMap.mapping) {
				case Ca:
				case Ua:
					u = "ENVMAP_MODE_REFRACTION"
			}
			switch (i.combine) {
				case wa:
					d = "ENVMAP_BLENDING_MULTIPLY";
					break;
				case Ma:
					d = "ENVMAP_BLENDING_MIX";
					break;
				case Ea:
					d = "ENVMAP_BLENDING_ADD"
			}
		}
		var p, f, m = t.gammaFactor > 0 ? t.gammaFactor : 1,
			g = Kt(a, n, t.extensions),
			v = $t(o),
			y = r.createProgram();
		i.isRawShaderMaterial ? (p = [v, "\n"].filter(ee).join("\n"), f = [g, v, "\n"].filter(ee).join("\n")) : (p = ["precision " + n.precision + " float;", "precision " + n.precision + " int;", "#define SHADER_NAME " + i.__webglShader.name, v, n.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + m, "#define MAX_BONES " + n.maxBones, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + u : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.displacementMap && n.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.vertexColors ? "#define USE_COLOR" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.useVertexTexture ? "#define BONE_TEXTURE" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && !1 === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + n.numClippingPlanes, n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + h : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && t.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(ee).join("\n"), f = [g, "precision " + n.precision + " float;", "precision " + n.precision + " int;", "#define SHADER_NAME " + i.__webglShader.name, v, n.alphaTest ? "#define ALPHATEST " + n.alphaTest : "", "#define GAMMA_FACTOR " + m, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + l : "", n.envMap ? "#define " + u : "", n.envMap ? "#define " + d : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.vertexColors ? "#define USE_COLOR" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + n.numClippingPlanes, "#define UNION_CLIPPING_PLANES " + (n.numClippingPlanes - n.numClipIntersection), n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + h : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.logarithmicDepthBuffer && t.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", n.envMap && t.extensions.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", n.toneMapping !== Ta ? "#define TONE_MAPPING" : "", n.toneMapping !== Ta ? Yo.tonemapping_pars_fragment : "", n.toneMapping !== Ta ? Qt("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", n.outputEncoding || n.mapEncoding || n.envMapEncoding || n.emissiveMapEncoding ? Yo.encodings_pars_fragment : "", n.mapEncoding ? Zt("mapTexelToLinear", n.mapEncoding) : "", n.envMapEncoding ? Zt("envMapTexelToLinear", n.envMapEncoding) : "", n.emissiveMapEncoding ? Zt("emissiveMapTexelToLinear", n.emissiveMapEncoding) : "", n.outputEncoding ? Jt("linearToOutputTexel", n.outputEncoding) : "", n.depthPacking ? "#define DEPTH_PACKING " + i.depthPacking : "", "\n"].filter(ee).join("\n")), s = ie(s = ne(s), n), c = ie(c = ne(c), n), i.isShaderMaterial || (s = re(s), c = re(c));
		var x = p + s,
			_ = f + c,
			b = qt(r, r.VERTEX_SHADER, x),
			w = qt(r, r.FRAGMENT_SHADER, _);
		r.attachShader(y, b), r.attachShader(y, w), void 0 !== i.index0AttributeName ? r.bindAttribLocation(y, 0, i.index0AttributeName) : !0 === n.morphTargets && r.bindAttribLocation(y, 0, "position"), r.linkProgram(y);
		var M = r.getProgramInfoLog(y),
			E = r.getShaderInfoLog(b),
			T = r.getShaderInfoLog(w),
			S = !0,
			A = !0;
		!1 === r.getProgramParameter(y, r.LINK_STATUS) ? (S = !1, console.error("THREE.WebGLProgram: shader error: ", r.getError(), "gl.VALIDATE_STATUS", r.getProgramParameter(y, r.VALIDATE_STATUS), "gl.getProgramInfoLog", M, E, T)) : "" !== M ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", M) : "" !== E && "" !== T || (A = !1), A && (this.diagnostics = {
			runnable: S,
			material: i,
			programLog: M,
			vertexShader: {
				log: E,
				prefix: p
			},
			fragmentShader: {
				log: T,
				prefix: f
			}
		}), r.deleteShader(b), r.deleteShader(w);
		var R;
		this.getUniforms = function() {
			return void 0 === R && (R = new W(r, y, t)), R
		};
		var L;
		return this.getAttributes = function() {
			return void 0 === L && (L = te(r, y)), L
		}, this.destroy = function() {
			r.deleteProgram(y), this.program = void 0
		}, Object.defineProperties(this, {
			uniforms: {
				get: function() {
					return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms()
				}
			},
			attributes: {
				get: function() {
					return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes()
				}
			}
		}), this.id = $o++, this.code = e, this.usedTimes = 1, this.program = y, this.vertexShader = b, this.fragmentShader = w, this
	}

	function oe(t, e) {
		function i(t) {
			var i = t.skeleton.bones;
			if (e.floatVertexTextures) {
				return 1024
			}
			var n = e.maxVertexUniforms,
				r = Math.floor((n - 20) / 4),
				a = Math.min(r, i.length);
			return a < i.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + i.length + " bones. This GPU supports " + a + "."), 0) : a
		}

		function n(t, e) {
			var i;
			return t ? t.isTexture ? i = t.encoding : t.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), i = t.texture.encoding) : i = Ao, i === Ao && e && (i = Lo), i
		}
		var r = [],
			a = {
				MeshDepthMaterial: "depth",
				MeshNormalMaterial: "normal",
				MeshBasicMaterial: "basic",
				MeshLambertMaterial: "lambert",
				MeshPhongMaterial: "phong",
				MeshToonMaterial: "phong",
				MeshStandardMaterial: "physical",
				MeshPhysicalMaterial: "physical",
				LineBasicMaterial: "basic",
				LineDashedMaterial: "dashed",
				PointsMaterial: "points"
			},
			o = ["precision", "supportsVertexTextures", "map", "mapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering"];
		this.getParameters = function(r, o, s, c, h, l) {
			var u = a[r.type],
				d = l.isSkinnedMesh ? i(l) : 0,
				p = t.getPrecision();
			null !== r.precision && (p = e.getMaxPrecision(r.precision)) !== r.precision && console.warn("THREE.WebGLProgram.getParameters:", r.precision, "not supported, using", p, "instead.");
			var f = t.getRenderTarget();
			return {
				shaderID: u,
				precision: p,
				supportsVertexTextures: e.vertexTextures,
				outputEncoding: n(f ? f.texture : null, t.gammaOutput),
				map: !!r.map,
				mapEncoding: n(r.map, t.gammaInput),
				envMap: !!r.envMap,
				envMapMode: r.envMap && r.envMap.mapping,
				envMapEncoding: n(r.envMap, t.gammaInput),
				envMapCubeUV: !!r.envMap && (r.envMap.mapping === Oa || r.envMap.mapping === Da),
				lightMap: !!r.lightMap,
				aoMap: !!r.aoMap,
				emissiveMap: !!r.emissiveMap,
				emissiveMapEncoding: n(r.emissiveMap, t.gammaInput),
				bumpMap: !!r.bumpMap,
				normalMap: !!r.normalMap,
				displacementMap: !!r.displacementMap,
				roughnessMap: !!r.roughnessMap,
				metalnessMap: !!r.metalnessMap,
				specularMap: !!r.specularMap,
				alphaMap: !!r.alphaMap,
				gradientMap: !!r.gradientMap,
				combine: r.combine,
				vertexColors: r.vertexColors,
				fog: !!s,
				useFog: r.fog,
				fogExp: s && s.isFogExp2,
				flatShading: r.shading === Hr,
				sizeAttenuation: r.sizeAttenuation,
				logarithmicDepthBuffer: e.logarithmicDepthBuffer,
				skinning: r.skinning && d > 0,
				maxBones: d,
				useVertexTexture: e.floatVertexTextures,
				morphTargets: r.morphTargets,
				morphNormals: r.morphNormals,
				maxMorphTargets: t.maxMorphTargets,
				maxMorphNormals: t.maxMorphNormals,
				numDirLights: o.directional.length,
				numPointLights: o.point.length,
				numSpotLights: o.spot.length,
				numRectAreaLights: o.rectArea.length,
				numHemiLights: o.hemi.length,
				numClippingPlanes: c,
				numClipIntersection: h,
				dithering: r.dithering,
				shadowMapEnabled: t.shadowMap.enabled && l.receiveShadow && o.shadows.length > 0,
				shadowMapType: t.shadowMap.type,
				toneMapping: t.toneMapping,
				physicallyCorrectLights: t.physicallyCorrectLights,
				premultipliedAlpha: r.premultipliedAlpha,
				alphaTest: r.alphaTest,
				doubleSided: r.side === Gr,
				flipSided: r.side === zr,
				depthPacking: void 0 !== r.depthPacking && r.depthPacking
			}
		}, this.getProgramCode = function(e, i) {
			var n = [];
			if (i.shaderID ? n.push(i.shaderID) : (n.push(e.fragmentShader), n.push(e.vertexShader)), void 0 !== e.defines) {
				for (var r in e.defines) {
					n.push(r), n.push(e.defines[r])
				}
			}
			for (var a = 0; a < o.length; a++) {
				n.push(i[o[a]])
			}
			return n.push(t.gammaOutput), n.join()
		}, this.acquireProgram = function(e, i, n) {
			for (var a, o = 0, s = r.length; o < s; o++) {
				var c = r[o];
				if (c.code === n) {
					++(a = c).usedTimes;
					break
				}
			}
			return void 0 === a && (a = new ae(t, n, e, i), r.push(a)), a
		}, this.releaseProgram = function(t) {
			if (0 == --t.usedTimes) {
				var e = r.indexOf(t);
				r[e] = r[r.length - 1], r.pop(), t.destroy()
			}
		}, this.programs = r
	}

	function se(t, e, i, n, r, a, o) {
		function s(t, e) {
			if (t.width > e || t.height > e) {
				var i = e / Math.max(t.width, t.height),
					n = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
				return n.width = Math.floor(t.width * i), n.height = Math.floor(t.height * i), n.getContext("2d").drawImage(t, 0, 0, t.width, t.height, 0, 0, n.width, n.height), console.warn("THREE.WebGLRenderer: image is too big (" + t.width + "x" + t.height + "). Resized to " + n.width + "x" + n.height, t), n
			}
			return t
		}

		function c(t) {
			return Do.isPowerOfTwo(t.width) && Do.isPowerOfTwo(t.height)
		}

		function h(t) {
			if (t instanceof HTMLImageElement || t instanceof HTMLCanvasElement) {
				var e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
				return e.width = Do.nearestPowerOfTwo(t.width), e.height = Do.nearestPowerOfTwo(t.height), e.getContext("2d").drawImage(t, 0, 0, e.width, e.height), e
			}
			return t
		}

		function l(t) {
			return t.wrapS !== Ba || t.wrapT !== Ba || t.minFilter !== Ga && t.minFilter !== ka
		}

		function u(e) {
			return e === Ga || e === Ha || e === Va ? t.NEAREST : t.LINEAR
		}

		function d(t) {
			var e = t.target;
			e.removeEventListener("dispose", d), f(e), o.textures--
		}

		function p(t) {
			var e = t.target;
			e.removeEventListener("dispose", p), m(e), o.textures--
		}

		function f(e) {
			var i = n.get(e);
			if (e.image && i.__image__webglTextureCube) {
				t.deleteTexture(i.__image__webglTextureCube)
			} else {
				if (void 0 === i.__webglInit) {
					return
				}
				t.deleteTexture(i.__webglTexture)
			}
			n.remove(e)
		}

		function m(e) {
			var i = n.get(e),
				r = n.get(e.texture);
			if (e) {
				if (void 0 !== r.__webglTexture && t.deleteTexture(r.__webglTexture), e.depthTexture && e.depthTexture.dispose(), e.isWebGLRenderTargetCube) {
					for (var a = 0; a < 6; a++) {
						t.deleteFramebuffer(i.__webglFramebuffer[a]), i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer[a])
					}
				} else {
					t.deleteFramebuffer(i.__webglFramebuffer), i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer)
				}
				n.remove(e.texture), n.remove(e)
			}
		}

		function g(e, r) {
			var a = n.get(e);
			if (e.version > 0 && a.__version !== e.version) {
				var o = e.image;
				if (void 0 === o) {
					console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", e)
				} else {
					if (!1 !== o.complete) {
						return void y(a, e, r)
					}
					console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", e)
				}
			}
			i.activeTexture(t.TEXTURE0 + r), i.bindTexture(t.TEXTURE_2D, a.__webglTexture)
		}

		function v(i, o, s) {
			var c;
			if (s ? (t.texParameteri(i, t.TEXTURE_WRAP_S, a(o.wrapS)), t.texParameteri(i, t.TEXTURE_WRAP_T, a(o.wrapT)), t.texParameteri(i, t.TEXTURE_MAG_FILTER, a(o.magFilter)), t.texParameteri(i, t.TEXTURE_MIN_FILTER, a(o.minFilter))) : (t.texParameteri(i, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(i, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), o.wrapS === Ba && o.wrapT === Ba || t.texParameteri(i, t.TEXTURE_MAG_FILTER, u(o.magFilter)), t.texParameteri(i, t.TEXTURE_MIN_FILTER, u(o.minFilter)), o.minFilter !== Ga && o.minFilter !== ka), c = e.get("EXT_texture_filter_anisotropic")) {
				if (o.type === Ka && null === e.get("OES_texture_float_linear")) {
					return
				}
				if (o.type === $a && null === e.get("OES_texture_half_float_linear")) {
					return
				}(o.anisotropy > 1 || n.get(o).__currentAnisotropy) && (t.texParameterf(i, c.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(o.anisotropy, r.getMaxAnisotropy())), n.get(o).__currentAnisotropy = o.anisotropy)
			}
		}

		function y(e, n, u) {
			void 0 === e.__webglInit && (e.__webglInit = !0, n.addEventListener("dispose", d), e.__webglTexture = t.createTexture(), o.textures++), i.activeTexture(t.TEXTURE0 + u), i.bindTexture(t.TEXTURE_2D, e.__webglTexture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, n.flipY), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, n.premultiplyAlpha), t.pixelStorei(t.UNPACK_ALIGNMENT, n.unpackAlignment);
			var p = s(n.image, r.maxTextureSize);
			l(n) && !1 === c(p) && (p = h(p));
			var f = c(p),
				m = a(n.format),
				g = a(n.type);
			v(t.TEXTURE_2D, n, f);
			var y, x = n.mipmaps;
			if (n.isDepthTexture) {
				var _ = t.DEPTH_COMPONENT;
				if (n.type === Ka) {
					if (!M) {
						throw new Error("Float Depth Texture only supported in WebGL2.0")
					}
					_ = t.DEPTH_COMPONENT32F
				} else {
					M && (_ = t.DEPTH_COMPONENT16)
				}
				n.format === lo && _ === t.DEPTH_COMPONENT && n.type !== Za && n.type !== Qa && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), n.type = Za, g = a(n.type)), n.format === uo && (_ = t.DEPTH_STENCIL, n.type !== no && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), n.type = no, g = a(n.type))), i.texImage2D(t.TEXTURE_2D, 0, _, p.width, p.height, 0, m, g, null)
			} else {
				if (n.isDataTexture) {
					if (x.length > 0 && f) {
						for (var b = 0, w = x.length; b < w; b++) {
							y = x[b], i.texImage2D(t.TEXTURE_2D, b, m, y.width, y.height, 0, m, g, y.data)
						}
						n.generateMipmaps = !1
					} else {
						i.texImage2D(t.TEXTURE_2D, 0, m, p.width, p.height, 0, m, g, p.data)
					}
				} else {
					if (n.isCompressedTexture) {
						for (var b = 0, w = x.length; b < w; b++) {
							y = x[b], n.format !== oo && n.format !== ao ? i.getCompressedTextureFormats().indexOf(m) > -1 ? i.compressedTexImage2D(t.TEXTURE_2D, b, m, y.width, y.height, 0, y.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : i.texImage2D(t.TEXTURE_2D, b, m, y.width, y.height, 0, m, g, y.data)
						}
					} else {
						if (x.length > 0 && f) {
							for (var b = 0, w = x.length; b < w; b++) {
								y = x[b], i.texImage2D(t.TEXTURE_2D, b, m, m, g, y)
							}
							n.generateMipmaps = !1
						} else {
							i.texImage2D(t.TEXTURE_2D, 0, m, m, g, p)
						}
					}
				}
			}
			n.generateMipmaps && f && t.generateMipmap(t.TEXTURE_2D), e.__version = n.version, n.onUpdate && n.onUpdate(n)
		}

		function x(e, r, o, s) {
			var c = a(r.texture.format),
				h = a(r.texture.type);
			i.texImage2D(s, 0, c, r.width, r.height, 0, c, h, null), t.bindFramebuffer(t.FRAMEBUFFER, e), t.framebufferTexture2D(t.FRAMEBUFFER, o, s, n.get(r.texture).__webglTexture, 0), t.bindFramebuffer(t.FRAMEBUFFER, null)
		}

		function _(e, i) {
			t.bindRenderbuffer(t.RENDERBUFFER, e), i.depthBuffer && !i.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_COMPONENT16, i.width, i.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, e)) : i.depthBuffer && i.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, i.width, i.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, e)) : t.renderbufferStorage(t.RENDERBUFFER, t.RGBA4, i.width, i.height), t.bindRenderbuffer(t.RENDERBUFFER, null)
		}

		function b(e, i) {
			if (i && i.isWebGLRenderTargetCube) {
				throw new Error("Depth Texture with cube render targets is not supported!")
			}
			if (t.bindFramebuffer(t.FRAMEBUFFER, e), !i.depthTexture || !i.depthTexture.isDepthTexture) {
				throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture")
			}
			n.get(i.depthTexture).__webglTexture && i.depthTexture.image.width === i.width && i.depthTexture.image.height === i.height || (i.depthTexture.image.width = i.width, i.depthTexture.image.height = i.height, i.depthTexture.needsUpdate = !0), g(i.depthTexture, 0);
			var r = n.get(i.depthTexture).__webglTexture;
			if (i.depthTexture.format === lo) {
				t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, r, 0)
			} else {
				if (i.depthTexture.format !== uo) {
					throw new Error("Unknown depthTexture format")
				}
				t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, r, 0)
			}
		}

		function w(e) {
			var i = n.get(e),
				r = !0 === e.isWebGLRenderTargetCube;
			if (e.depthTexture) {
				if (r) {
					throw new Error("target.depthTexture not supported in Cube render targets")
				}
				b(i.__webglFramebuffer, e)
			} else {
				if (r) {
					i.__webglDepthbuffer = [];
					for (var a = 0; a < 6; a++) {
						t.bindFramebuffer(t.FRAMEBUFFER, i.__webglFramebuffer[a]), i.__webglDepthbuffer[a] = t.createRenderbuffer(), _(i.__webglDepthbuffer[a], e)
					}
				} else {
					t.bindFramebuffer(t.FRAMEBUFFER, i.__webglFramebuffer), i.__webglDepthbuffer = t.createRenderbuffer(), _(i.__webglDepthbuffer, e)
				}
			}
			t.bindFramebuffer(t.FRAMEBUFFER, null)
		}
		var M = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext;
		this.setTexture2D = g, this.setTextureCube = function(e, h) {
			var l = n.get(e);
			if (6 === e.image.length) {
				if (e.version > 0 && l.__version !== e.version) {
					l.__image__webglTextureCube || (e.addEventListener("dispose", d), l.__image__webglTextureCube = t.createTexture(), o.textures++), i.activeTexture(t.TEXTURE0 + h), i.bindTexture(t.TEXTURE_CUBE_MAP, l.__image__webglTextureCube), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, e.flipY);
					for (var u = e && e.isCompressedTexture, p = e.image[0] && e.image[0].isDataTexture, f = [], m = 0; m < 6; m++) {
						f[m] = u || p ? p ? e.image[m].image : e.image[m] : s(e.image[m], r.maxCubemapSize)
					}
					var g = c(f[0]),
						y = a(e.format),
						x = a(e.type);
					for (v(t.TEXTURE_CUBE_MAP, e, g), m = 0; m < 6; m++) {
						if (u) {
							for (var _, b = f[m].mipmaps, w = 0, M = b.length; w < M; w++) {
								_ = b[w], e.format !== oo && e.format !== ao ? i.getCompressedTextureFormats().indexOf(y) > -1 ? i.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + m, w, y, _.width, _.height, 0, _.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + m, w, y, _.width, _.height, 0, y, x, _.data)
							}
						} else {
							p ? i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + m, 0, y, f[m].width, f[m].height, 0, y, x, f[m].data) : i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + m, 0, y, y, x, f[m])
						}
					}
					e.generateMipmaps && g && t.generateMipmap(t.TEXTURE_CUBE_MAP), l.__version = e.version, e.onUpdate && e.onUpdate(e)
				} else {
					i.activeTexture(t.TEXTURE0 + h), i.bindTexture(t.TEXTURE_CUBE_MAP, l.__image__webglTextureCube)
				}
			}
		}, this.setTextureCubeDynamic = function(e, r) {
			i.activeTexture(t.TEXTURE0 + r), i.bindTexture(t.TEXTURE_CUBE_MAP, n.get(e).__webglTexture)
		}, this.setupRenderTarget = function(e) {
			var r = n.get(e),
				a = n.get(e.texture);
			e.addEventListener("dispose", p), a.__webglTexture = t.createTexture(), o.textures++;
			var s = !0 === e.isWebGLRenderTargetCube,
				h = c(e);
			if (s) {
				for (r.__webglFramebuffer = [], l = 0; l < 6; l++) {
					r.__webglFramebuffer[l] = t.createFramebuffer()
				}
			} else {
				r.__webglFramebuffer = t.createFramebuffer()
			}
			if (s) {
				i.bindTexture(t.TEXTURE_CUBE_MAP, a.__webglTexture), v(t.TEXTURE_CUBE_MAP, e.texture, h);
				for (var l = 0; l < 6; l++) {
					x(r.__webglFramebuffer[l], e, t.COLOR_ATTACHMENT0, t.TEXTURE_CUBE_MAP_POSITIVE_X + l)
				}
				e.texture.generateMipmaps && h && t.generateMipmap(t.TEXTURE_CUBE_MAP), i.bindTexture(t.TEXTURE_CUBE_MAP, null)
			} else {
				i.bindTexture(t.TEXTURE_2D, a.__webglTexture), v(t.TEXTURE_2D, e.texture, h), x(r.__webglFramebuffer, e, t.COLOR_ATTACHMENT0, t.TEXTURE_2D), e.texture.generateMipmaps && h && t.generateMipmap(t.TEXTURE_2D), i.bindTexture(t.TEXTURE_2D, null)
			}
			e.depthBuffer && w(e)
		}, this.updateRenderTargetMipmap = function(e) {
			var r = e.texture;
			if (r.generateMipmaps && c(e) && r.minFilter !== Ga && r.minFilter !== ka) {
				var a = e && e.isWebGLRenderTargetCube ? t.TEXTURE_CUBE_MAP : t.TEXTURE_2D,
					o = n.get(r).__webglTexture;
				i.bindTexture(a, o), t.generateMipmap(a), i.bindTexture(a, null)
			}
		}
	}

	function ce() {
		var t = {};
		return {
			get: function(e) {
				var i = e.uuid,
					n = t[i];
				return void 0 === n && (n = {}, t[i] = n), n
			},
			remove: function(e) {
				delete t[e.uuid]
			},
			clear: function() {
				t = {}
			}
		}
	}

	function he(t, e, i) {
		function n(e, i, n) {
			var r = new Uint8Array(4),
				a = t.createTexture();
			t.bindTexture(e, a), t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST);
			for (var o = 0; o < n; o++) {
				t.texImage2D(i + o, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, r)
			}
			return a
		}

		function a(e) {
			!0 !== x[e] && (t.enable(e), x[e] = !0)
		}

		function o(e) {
			!1 !== x[e] && (t.disable(e), x[e] = !1)
		}

		function s(e, n, r, s, c, h, l, u) {
			e !== Xr ? a(t.BLEND) : o(t.BLEND), e === Qr || e === b && u === R || (e === Yr ? u ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ONE, t.ONE, t.ONE, t.ONE)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.SRC_ALPHA, t.ONE)) : e === Zr ? u ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ZERO, t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ZERO, t.ONE_MINUS_SRC_COLOR)) : e === Jr ? u ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ZERO, t.SRC_COLOR)) : u ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA)), b = e, R = u), e === Qr ? (c = c || n, h = h || r, l = l || s, n === w && c === T || (t.blendEquationSeparate(i(n), i(c)), w = n, T = c), r === M && s === E && h === S && l === A || (t.blendFuncSeparate(i(r), i(s), i(h), i(l)), M = r, E = s, S = h, A = l)) : (w = null, M = null, E = null, T = null, S = null, A = null)
		}

		function c(e) {
			L !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), L = e)
		}

		function h(e) {
			e !== Ir ? (a(t.CULL_FACE), e !== P && (e === Ur ? t.cullFace(t.BACK) : e === Nr ? t.cullFace(t.FRONT) : t.cullFace(t.FRONT_AND_BACK))) : o(t.CULL_FACE), P = e
		}

		function l(e, i, n) {
			e ? (a(t.POLYGON_OFFSET_FILL), I === i && U === n || (t.polygonOffset(i, n), I = i, U = n)) : o(t.POLYGON_OFFSET_FILL)
		}

		function u(e) {
			void 0 === e && (e = t.TEXTURE0 + O - 1), B !== e && (t.activeTexture(e), B = e)
		}
		var d = new function() {
				var e = !1,
					i = new r,
					n = null,
					a = new r;
				return {
					setMask: function(i) {
						n === i || e || (t.colorMask(i, i, i, i), n = i)
					},
					setLocked: function(t) {
						e = t
					},
					setClear: function(e, n, r, o, s) {
						!0 === s && (e *= o, n *= o, r *= o), i.set(e, n, r, o), !1 === a.equals(i) && (t.clearColor(e, n, r, o), a.copy(i))
					},
					reset: function() {
						e = !1, n = null, a.set(0, 0, 0, 1)
					}
				}
			},
			p = new function() {
				var e = !1,
					i = null,
					n = null,
					r = null;
				return {
					setTest: function(e) {
						e ? a(t.DEPTH_TEST) : o(t.DEPTH_TEST)
					},
					setMask: function(n) {
						i === n || e || (t.depthMask(n), i = n)
					},
					setFunc: function(e) {
						if (n !== e) {
							if (e) {
								switch (e) {
									case fa:
										t.depthFunc(t.NEVER);
										break;
									case ma:
										t.depthFunc(t.ALWAYS);
										break;
									case ga:
										t.depthFunc(t.LESS);
										break;
									case va:
										t.depthFunc(t.LEQUAL);
										break;
									case ya:
										t.depthFunc(t.EQUAL);
										break;
									case xa:
										t.depthFunc(t.GEQUAL);
										break;
									case _a:
										t.depthFunc(t.GREATER);
										break;
									case ba:
										t.depthFunc(t.NOTEQUAL);
										break;
									default:
										t.depthFunc(t.LEQUAL)
								}
							} else {
								t.depthFunc(t.LEQUAL)
							}
							n = e
						}
					},
					setLocked: function(t) {
						e = t
					},
					setClear: function(e) {
						r !== e && (t.clearDepth(e), r = e)
					},
					reset: function() {
						e = !1, i = null, n = null, r = null
					}
				}
			},
			f = new function() {
				var e = !1,
					i = null,
					n = null,
					r = null,
					s = null,
					c = null,
					h = null,
					l = null,
					u = null;
				return {
					setTest: function(e) {
						e ? a(t.STENCIL_TEST) : o(t.STENCIL_TEST)
					},
					setMask: function(n) {
						i === n || e || (t.stencilMask(n), i = n)
					},
					setFunc: function(e, i, a) {
						n === e && r === i && s === a || (t.stencilFunc(e, i, a), n = e, r = i, s = a)
					},
					setOp: function(e, i, n) {
						c === e && h === i && l === n || (t.stencilOp(e, i, n), c = e, h = i, l = n)
					},
					setLocked: function(t) {
						e = t
					},
					setClear: function(e) {
						u !== e && (t.clearStencil(e), u = e)
					},
					reset: function() {
						e = !1, i = null, n = null, r = null, s = null, c = null, h = null, l = null, u = null
					}
				}
			},
			m = t.getParameter(t.MAX_VERTEX_ATTRIBS),
			g = new Uint8Array(m),
			v = new Uint8Array(m),
			y = new Uint8Array(m),
			x = {},
			_ = null,
			b = null,
			w = null,
			M = null,
			E = null,
			T = null,
			S = null,
			A = null,
			R = !1,
			L = null,
			P = null,
			C = null,
			I = null,
			U = null,
			N = null,
			O = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
			D = parseFloat(/^WebGL\ ([0-9])/.exec(t.getParameter(t.VERSION))[1]),
			F = parseFloat(D) >= 1,
			B = null,
			z = {},
			G = new r,
			H = new r,
			V = {};
		return V[t.TEXTURE_2D] = n(t.TEXTURE_2D, t.TEXTURE_2D, 1), V[t.TEXTURE_CUBE_MAP] = n(t.TEXTURE_CUBE_MAP, t.TEXTURE_CUBE_MAP_POSITIVE_X, 6), {
			buffers: {
				color: d,
				depth: p,
				stencil: f
			},
			init: function() {
				d.setClear(0, 0, 0, 1), p.setClear(1), f.setClear(0), a(t.DEPTH_TEST), p.setFunc(va), c(!1), h(Ur), a(t.CULL_FACE), a(t.BLEND), s(qr)
			},
			initAttributes: function() {
				for (var t = 0, e = g.length; t < e; t++) {
					g[t] = 0
				}
			},
			enableAttribute: function(i) {
				g[i] = 1, 0 === v[i] && (t.enableVertexAttribArray(i), v[i] = 1), 0 !== y[i] && (e.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(i, 0), y[i] = 0)
			},
			enableAttributeAndDivisor: function(i, n) {
				g[i] = 1, 0 === v[i] && (t.enableVertexAttribArray(i), v[i] = 1), y[i] !== n && (e.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(i, n), y[i] = n)
			},
			disableUnusedAttributes: function() {
				for (var e = 0, i = v.length; e !== i; ++e) {
					v[e] !== g[e] && (t.disableVertexAttribArray(e), v[e] = 0)
				}
			},
			enable: a,
			disable: o,
			getCompressedTextureFormats: function() {
				if (null === _ && (_ = [], e.get("WEBGL_compressed_texture_pvrtc") || e.get("WEBGL_compressed_texture_s3tc") || e.get("WEBGL_compressed_texture_etc1"))) {
					for (var i = t.getParameter(t.COMPRESSED_TEXTURE_FORMATS), n = 0; n < i.length; n++) {
						_.push(i[n])
					}
				}
				return _
			},
			setBlending: s,
			setMaterial: function(e) {
				e.side === Gr ? o(t.CULL_FACE) : a(t.CULL_FACE), c(e.side === zr), !0 === e.transparent ? s(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha) : s(Xr), p.setFunc(e.depthFunc), p.setTest(e.depthTest), p.setMask(e.depthWrite), d.setMask(e.colorWrite), l(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
			},
			setFlipSided: c,
			setCullFace: h,
			setLineWidth: function(e) {
				e !== C && (F && t.lineWidth(e), C = e)
			},
			setPolygonOffset: l,
			getScissorTest: function() {
				return N
			},
			setScissorTest: function(e) {
				N = e, e ? a(t.SCISSOR_TEST) : o(t.SCISSOR_TEST)
			},
			activeTexture: u,
			bindTexture: function(e, i) {
				null === B && u();
				var n = z[B];
				void 0 === n && (n = {
					type: void 0,
					texture: void 0
				}, z[B] = n), n.type === e && n.texture === i || (t.bindTexture(e, i || V[e]), n.type = e, n.texture = i)
			},
			compressedTexImage2D: function() {
				try {
					t.compressedTexImage2D.apply(t, arguments)
				} catch (t) {
					console.error("THREE.WebGLState:", t)
				}
			},
			texImage2D: function() {
				try {
					t.texImage2D.apply(t, arguments)
				} catch (t) {
					console.error("THREE.WebGLState:", t)
				}
			},
			scissor: function(e) {
				!1 === G.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), G.copy(e))
			},
			viewport: function(e) {
				!1 === H.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), H.copy(e))
			},
			reset: function() {
				for (var e = 0; e < v.length; e++) {
					1 === v[e] && (t.disableVertexAttribArray(e), v[e] = 0)
				}
				x = {}, _ = null, B = null, z = {}, b = null, L = null, P = null, d.reset(), p.reset(), f.reset()
			}
		}
	}

	function le(t, e, i) {
		function n(e) {
			if ("highp" === e) {
				if (t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision > 0) {
					return "highp"
				}
				e = "mediump"
			}
			return "mediump" === e && t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision > 0 && t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
		}
		var r, a = void 0 !== i.precision ? i.precision : "highp",
			o = n(a);
		o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."), a = o);
		var s = !0 === i.logarithmicDepthBuffer && !!e.get("EXT_frag_depth"),
			c = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
			h = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
			l = t.getParameter(t.MAX_TEXTURE_SIZE),
			u = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),
			d = t.getParameter(t.MAX_VERTEX_ATTRIBS),
			p = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),
			f = t.getParameter(t.MAX_VARYING_VECTORS),
			m = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),
			g = h > 0,
			v = !!e.get("OES_texture_float");
		return {
			getMaxAnisotropy: function() {
				if (void 0 !== r) {
					return r
				}
				var i = e.get("EXT_texture_filter_anisotropic");
				return r = null !== i ? t.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
			},
			getMaxPrecision: n,
			precision: a,
			logarithmicDepthBuffer: s,
			maxTextures: c,
			maxVertexTextures: h,
			maxTextureSize: l,
			maxCubemapSize: u,
			maxAttributes: d,
			maxVertexUniforms: p,
			maxVaryings: f,
			maxFragmentUniforms: m,
			vertexTextures: g,
			floatFragmentTextures: v,
			floatVertexTextures: g && v
		}
	}

	function ue(t) {
		var e = {};
		return {
			get: function(i) {
				if (void 0 !== e[i]) {
					return e[i]
				}
				var n;
				switch (i) {
					case "WEBGL_depth_texture":
						n = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
						break;
					case "EXT_texture_filter_anisotropic":
						n = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
						break;
					case "WEBGL_compressed_texture_s3tc":
						n = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
						break;
					case "WEBGL_compressed_texture_pvrtc":
						n = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
						break;
					case "WEBGL_compressed_texture_etc1":
						n = t.getExtension("WEBGL_compressed_texture_etc1");
						break;
					default:
						n = t.getExtension(i)
				}
				return null === n && console.warn("THREE.WebGLRenderer: " + i + " extension not supported."), e[i] = n, n
			}
		}
	}

	function de() {
		function t() {
			h.value !== n && (h.value = n, h.needsUpdate = r > 0), i.numPlanes = r, i.numIntersection = 0
		}

		function e(t, e, n, r) {
			var a = null !== t ? t.length : 0,
				o = null;
			if (0 !== a) {
				if (o = h.value, !0 !== r || null === o) {
					var l = n + 4 * a,
						u = e.matrixWorldInverse;
					c.getNormalMatrix(u), (null === o || o.length < l) && (o = new Float32Array(l));
					for (var d = 0, p = n; d !== a; ++d, p += 4) {
						s.copy(t[d]).applyMatrix4(u, c), s.normal.toArray(o, p), o[p + 3] = s.constant
					}
				}
				h.value = o, h.needsUpdate = !0
			}
			return i.numPlanes = a, o
		}
		var i = this,
			n = null,
			r = 0,
			a = !1,
			o = !1,
			s = new it,
			c = new et,
			h = {
				value: null,
				needsUpdate: !1
			};
		this.uniform = h, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t, i, o) {
			var s = 0 !== t.length || i || 0 !== r || a;
			return a = i, n = e(t, o, 0), r = t.length, s
		}, this.beginShadows = function() {
			o = !0, e(null)
		}, this.endShadows = function() {
			o = !1, t()
		}, this.setState = function(i, s, c, l, u, d) {
			if (!a || null === i || 0 === i.length || o && !c) {
				o ? e(null) : t()
			} else {
				var p = o ? 0 : r,
					f = 4 * p,
					m = u.clippingState || null;
				h.value = m, m = e(i, l, f, d);
				for (var g = 0; g !== f; ++g) {
					m[g] = n[g]
				}
				u.clippingState = m, this.numIntersection = s ? this.numPlanes : 0, this.numPlanes += p
			}
		}
	}

	function pe(t) {
		function e() {
			return null === et ? vt : 1
		}

		function i() {
			Zt.init(), Zt.scissor(ct.copy(yt).multiplyScalar(vt)), Zt.viewport(lt.copy(_t).multiplyScalar(vt)), Zt.buffers.color.setClear(pt.r, pt.g, pt.b, ft, H)
		}

		function n() {
			tt = null, st = null, ot = "", at = -1, Zt.reset()
		}

		function a(t) {
			t.preventDefault(), n(), i(), Jt.clear(), te.clear()
		}

		function o(t) {
			var e = t.target;
			e.removeEventListener("dispose", o), s(e)
		}

		function s(t) {
			u(t), Jt.remove(t)
		}

		function u(t) {
			var e = Jt.get(t).program;
			t.program = void 0, void 0 !== e && ee.releaseProgram(e)
		}

		function d(t, e, i) {
			t.render(function(t) {
				$.renderBufferImmediate(t, e, i)
			})
		}

		function p(t, e) {
			return Math.abs(e[0]) - Math.abs(t[0])
		}

		function f(t, e, i, n) {
			if (i && i.isInstancedBufferGeometry && null === qt.get("ANGLE_instanced_arrays")) {
				console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.")
			} else {
				void 0 === n && (n = 0), Zt.initAttributes();
				var r = i.attributes,
					a = e.getAttributes(),
					o = t.defaultAttributeValues;
				for (var s in a) {
					var c = a[s];
					if (c >= 0) {
						var h = r[s];
						if (void 0 !== h) {
							var l = h.normalized,
								u = h.itemSize,
								d = Kt.get(h),
								p = d.buffer,
								f = d.type,
								m = d.bytesPerElement;
							if (h.isInterleavedBufferAttribute) {
								var g = h.data,
									v = g.stride,
									y = h.offset;
								g && g.isInstancedInterleavedBuffer ? (Zt.enableAttributeAndDivisor(c, g.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount = g.meshPerAttribute * g.count)) : Zt.enableAttribute(c), zt.bindBuffer(zt.ARRAY_BUFFER, p), zt.vertexAttribPointer(c, u, f, l, v * m, (n * v + y) * m)
							} else {
								h.isInstancedBufferAttribute ? (Zt.enableAttributeAndDivisor(c, h.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount = h.meshPerAttribute * h.count)) : Zt.enableAttribute(c), zt.bindBuffer(zt.ARRAY_BUFFER, p), zt.vertexAttribPointer(c, u, f, l, 0, n * u * m)
							}
						} else {
							if (void 0 !== o) {
								var x = o[s];
								if (void 0 !== x) {
									switch (x.length) {
										case 2:
											zt.vertexAttrib2fv(c, x);
											break;
										case 3:
											zt.vertexAttrib3fv(c, x);
											break;
										case 4:
											zt.vertexAttrib4fv(c, x);
											break;
										default:
											zt.vertexAttrib1fv(c, x)
									}
								}
							}
						}
					}
				}
				Zt.disableUnusedAttributes()
			}
		}

		function m(t, e, i) {
			if (t.visible) {
				if (t.layers.test(e.layers)) {
					if (t.isLight) {
						k.push(t)
					} else {
						if (t.isSprite) {
							t.frustumCulled && !bt.intersectsSprite(t) || J.push(t)
						} else {
							if (t.isLensFlare) {
								K.push(t)
							} else {
								if (t.isImmediateRenderObject) {
									i && St.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Tt), j.push(t, null, t.material, St.z, null)
								} else {
									if ((t.isMesh || t.isLine || t.isPoints) && (t.isSkinnedMesh && t.skeleton.update(), !t.frustumCulled || bt.intersectsObject(t))) {
										i && St.setFromMatrixPosition(t.matrixWorld).applyMatrix4(Tt);
										var n = te.update(t),
											r = t.material;
										if (Array.isArray(r)) {
											for (var a = n.groups, o = 0, s = a.length; o < s; o++) {
												var c = a[o],
													h = r[c.materialIndex];
												h && h.visible && j.push(t, n, h, St.z, c)
											}
										} else {
											r.visible && j.push(t, n, r, St.z, null)
										}
									}
								}
							}
						}
					}
				}
				for (var l = t.children, o = 0, s = l.length; o < s; o++) {
					m(l[o], e, i)
				}
			}
		}

		function g(t, e, i, n) {
			for (var r = 0, a = t.length; r < a; r++) {
				var o = t[r],
					s = o.object,
					c = o.geometry,
					h = void 0 === n ? o.material : n,
					l = o.group;
				if (s.onBeforeRender($, e, i, c, h, l), i.isArrayCamera && i.enabled) {
					for (var u = i.cameras, d = 0, p = u.length; d < p; d++) {
						var f = u[d],
							m = f.bounds;
						$.setViewport(m.x * mt * vt, m.y * gt * vt, m.z * mt * vt, m.w * gt * vt), $.setScissor(m.x * mt * vt, m.y * gt * vt, m.z * mt * vt, m.w * gt * vt), $.setScissorTest(!0), v(s, e, f, c, h, l)
					}
				} else {
					v(s, e, i, c, h, l)
				}
				s.onAfterRender($, e, i, c, h, l)
			}
		}

		function v(t, e, i, n, r, a) {
			if (t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
				Zt.setMaterial(r);
				var o = x(i, e.fog, r, t);
				ot = "", d(t, o, r)
			} else {
				$.renderBufferDirect(i, e.fog, n, r, t, a)
			}
		}

		function y(t, e, i) {
			var n = Jt.get(t),
				r = ee.getParameters(t, Ut, e, wt.numPlanes, wt.numIntersection, i),
				a = ee.getProgramCode(t, r),
				s = n.program,
				c = !0;
			if (void 0 === s) {
				t.addEventListener("dispose", o)
			} else {
				if (s.code !== a) {
					u(t)
				} else {
					if (void 0 !== r.shaderID) {
						return
					}
					c = !1
				}
			}
			if (c) {
				if (r.shaderID) {
					var h = Zo[r.shaderID];
					n.__webglShader = {
						name: t.type,
						uniforms: qo.clone(h.uniforms),
						vertexShader: h.vertexShader,
						fragmentShader: h.fragmentShader
					}
				} else {
					n.__webglShader = {
						name: t.type,
						uniforms: t.uniforms,
						vertexShader: t.vertexShader,
						fragmentShader: t.fragmentShader
					}
				}
				t.__webglShader = n.__webglShader, s = ee.acquireProgram(t, r, a), n.program = s, t.program = s
			}
			var l = s.getAttributes();
			if (t.morphTargets) {
				for (t.numSupportedMorphTargets = 0, d = 0; d < $.maxMorphTargets; d++) {
					l["morphTarget" + d] >= 0 && t.numSupportedMorphTargets++
				}
			}
			if (t.morphNormals) {
				t.numSupportedMorphNormals = 0;
				for (var d = 0; d < $.maxMorphNormals; d++) {
					l["morphNormal" + d] >= 0 && t.numSupportedMorphNormals++
				}
			}
			var p = n.__webglShader.uniforms;
			(t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (n.numClippingPlanes = wt.numPlanes, n.numIntersection = wt.numIntersection, p.clippingPlanes = wt.uniform), n.fog = e, n.lightsHash = Ut.hash, t.lights && (p.ambientLightColor.value = Ut.ambient, p.directionalLights.value = Ut.directional, p.spotLights.value = Ut.spot, p.rectAreaLights.value = Ut.rectArea, p.pointLights.value = Ut.point, p.hemisphereLights.value = Ut.hemi, p.directionalShadowMap.value = Ut.directionalShadowMap, p.directionalShadowMatrix.value = Ut.directionalShadowMatrix, p.spotShadowMap.value = Ut.spotShadowMap, p.spotShadowMatrix.value = Ut.spotShadowMatrix, p.pointShadowMap.value = Ut.pointShadowMap, p.pointShadowMatrix.value = Ut.pointShadowMatrix);
			var f = n.program.getUniforms(),
				m = W.seqWithValue(f.seq, p);
			n.uniformsList = m
		}

		function x(t, e, i, n) {
			ut = 0;
			var r = Jt.get(i);
			if (Mt && (Et || t !== st)) {
				var a = t === st && i.id === at;
				wt.setState(i.clippingPlanes, i.clipIntersection, i.clipShadows, t, r, a)
			}!1 === i.needsUpdate && (void 0 === r.program ? i.needsUpdate = !0 : i.fog && r.fog !== e ? i.needsUpdate = !0 : i.lights && r.lightsHash !== Ut.hash ? i.needsUpdate = !0 : void 0 === r.numClippingPlanes || r.numClippingPlanes === wt.numPlanes && r.numIntersection === wt.numIntersection || (i.needsUpdate = !0)), i.needsUpdate && (y(i, e, n), i.needsUpdate = !1);
			var o = !1,
				s = !1,
				c = !1,
				h = r.program,
				u = h.getUniforms(),
				d = r.__webglShader.uniforms;
			if (h.id !== tt && (zt.useProgram(h.program), tt = h.id, o = !0, s = !0, c = !0), i.id !== at && (at = i.id, s = !0), o || t !== st) {
				if (u.setValue(zt, "projectionMatrix", t.projectionMatrix), Yt.logarithmicDepthBuffer && u.setValue(zt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), t !== st && (st = t, s = !0, c = !0), i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.envMap) {
					var p = u.map.cameraPosition;
					void 0 !== p && p.setValue(zt, St.setFromMatrixPosition(t.matrixWorld))
				}(i.isMeshPhongMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.skinning) && u.setValue(zt, "viewMatrix", t.matrixWorldInverse), u.setValue(zt, "toneMappingExposure", $.toneMappingExposure), u.setValue(zt, "toneMappingWhitePoint", $.toneMappingWhitePoint)
			}
			if (i.skinning) {
				u.setOptional(zt, n, "bindMatrix"), u.setOptional(zt, n, "bindMatrixInverse");
				var f = n.skeleton;
				if (f) {
					var m = f.bones;
					if (Yt.floatVertexTextures) {
						if (void 0 === f.boneTexture) {
							var g = Math.sqrt(4 * m.length);
							g = Do.nextPowerOfTwo(Math.ceil(g)), g = Math.max(g, 4);
							var v = new Float32Array(g * g * 4);
							v.set(f.boneMatrices);
							var x = new l(v, g, g, oo, Ka);
							f.boneMatrices = v, f.boneTexture = x, f.boneTextureSize = g
						}
						u.setValue(zt, "boneTexture", f.boneTexture), u.setValue(zt, "boneTextureSize", f.boneTextureSize)
					} else {
						u.setOptional(zt, f, "boneMatrices")
					}
				}
			}
			return s && (i.lights && C(d, c), e && i.fog && E(d, e), (i.isMeshBasicMaterial || i.isMeshLambertMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.isMeshNormalMaterial || i.isMeshDepthMaterial) && _(d, i), i.isLineBasicMaterial ? b(d, i) : i.isLineDashedMaterial ? (b(d, i), w(d, i)) : i.isPointsMaterial ? M(d, i) : i.isMeshLambertMaterial ? T(d, i) : i.isMeshToonMaterial ? A(d, i) : i.isMeshPhongMaterial ? S(d, i) : i.isMeshPhysicalMaterial ? L(d, i) : i.isMeshStandardMaterial ? R(d, i) : i.isMeshDepthMaterial ? i.displacementMap && (d.displacementMap.value = i.displacementMap, d.displacementScale.value = i.displacementScale, d.displacementBias.value = i.displacementBias) : i.isMeshNormalMaterial && P(d, i), void 0 !== d.ltcMat && (d.ltcMat.value = Xo.LTC_MAT_TEXTURE), void 0 !== d.ltcMag && (d.ltcMag.value = Xo.LTC_MAG_TEXTURE), W.upload(zt, r.uniformsList, d, $)), u.setValue(zt, "modelViewMatrix", n.modelViewMatrix), u.setValue(zt, "normalMatrix", n.normalMatrix), u.setValue(zt, "modelMatrix", n.matrixWorld), h
		}

		function _(t, e) {
			t.opacity.value = e.opacity, t.diffuse.value = e.color, e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity), t.map.value = e.map, t.specularMap.value = e.specularMap, t.alphaMap.value = e.alphaMap, e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity);
			var i;
			if (e.map ? i = e.map : e.specularMap ? i = e.specularMap : e.displacementMap ? i = e.displacementMap : e.normalMap ? i = e.normalMap : e.bumpMap ? i = e.bumpMap : e.roughnessMap ? i = e.roughnessMap : e.metalnessMap ? i = e.metalnessMap : e.alphaMap ? i = e.alphaMap : e.emissiveMap && (i = e.emissiveMap), void 0 !== i) {
				i.isWebGLRenderTarget && (i = i.texture);
				var n = i.offset,
					r = i.repeat;
				t.offsetRepeat.value.set(n.x, n.y, r.x, r.y)
			}
			t.envMap.value = e.envMap, t.flipEnvMap.value = e.envMap && e.envMap.isCubeTexture ? -1 : 1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio
		}

		function b(t, e) {
			t.diffuse.value = e.color, t.opacity.value = e.opacity
		}

		function w(t, e) {
			t.dashSize.value = e.dashSize, t.totalSize.value = e.dashSize + e.gapSize, t.scale.value = e.scale
		}

		function M(t, e) {
			if (t.diffuse.value = e.color, t.opacity.value = e.opacity, t.size.value = e.size * vt, t.scale.value = 0.5 * gt, t.map.value = e.map, null !== e.map) {
				var i = e.map.offset,
					n = e.map.repeat;
				t.offsetRepeat.value.set(i.x, i.y, n.x, n.y)
			}
		}

		function E(t, e) {
			t.fogColor.value = e.color, e.isFog ? (t.fogNear.value = e.near, t.fogFar.value = e.far) : e.isFogExp2 && (t.fogDensity.value = e.density)
		}

		function T(t, e) {
			e.emissiveMap && (t.emissiveMap.value = e.emissiveMap)
		}

		function S(t, e) {
			t.specular.value = e.specular, t.shininess.value = Math.max(e.shininess, 0.0001), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale)), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
		}

		function A(t, e) {
			S(t, e), e.gradientMap && (t.gradientMap.value = e.gradientMap)
		}

		function R(t, e) {
			t.roughness.value = e.roughness, t.metalness.value = e.metalness, e.roughnessMap && (t.roughnessMap.value = e.roughnessMap), e.metalnessMap && (t.metalnessMap.value = e.metalnessMap), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale)), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias), e.envMap && (t.envMapIntensity.value = e.envMapIntensity)
		}

		function L(t, e) {
			t.clearCoat.value = e.clearCoat, t.clearCoatRoughness.value = e.clearCoatRoughness, R(t, e)
		}

		function P(t, e) {
			e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale)), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
		}

		function C(t, e) {
			t.ambientLightColor.needsUpdate = e, t.directionalLights.needsUpdate = e, t.pointLights.needsUpdate = e, t.spotLights.needsUpdate = e, t.rectAreaLights.needsUpdate = e, t.hemisphereLights.needsUpdate = e
		}

		function I(t) {
			for (var e = 0, i = 0, n = t.length; i < n; i++) {
				var r = t[i];
				r.castShadow && (Ut.shadows[e] = r, e++)
			}
			Ut.shadows.length = e
		}

		function U(t, e) {
			var i, n, r, a, o, s, c, h, l = 0,
				u = 0,
				d = 0,
				p = e.matrixWorldInverse,
				f = 0,
				m = 0,
				g = 0,
				v = 0,
				y = 0;
			for (i = 0, n = t.length; i < n; i++) {
				if (r = t[i], o = r.color, s = r.intensity, c = r.distance, h = r.shadow && r.shadow.map ? r.shadow.map.texture : null, r.isAmbientLight) {
					l += o.r * s, u += o.g * s, d += o.b * s
				} else {
					if (r.isDirectionalLight) {
						(x = ie.get(r)).color.copy(r.color).multiplyScalar(r.intensity), x.direction.setFromMatrixPosition(r.matrixWorld), St.setFromMatrixPosition(r.target.matrixWorld), x.direction.sub(St), x.direction.transformDirection(p), x.shadow = r.castShadow, r.castShadow && (a = r.shadow, x.shadowBias = a.bias, x.shadowRadius = a.radius, x.shadowMapSize = a.mapSize), Ut.directionalShadowMap[f] = h, Ut.directionalShadowMatrix[f] = r.shadow.matrix, Ut.directional[f] = x, f++
					} else {
						if (r.isSpotLight) {
							(x = ie.get(r)).position.setFromMatrixPosition(r.matrixWorld), x.position.applyMatrix4(p), x.color.copy(o).multiplyScalar(s), x.distance = c, x.direction.setFromMatrixPosition(r.matrixWorld), St.setFromMatrixPosition(r.target.matrixWorld), x.direction.sub(St), x.direction.transformDirection(p), x.coneCos = Math.cos(r.angle), x.penumbraCos = Math.cos(r.angle * (1 - r.penumbra)), x.decay = 0 === r.distance ? 0 : r.decay, x.shadow = r.castShadow, r.castShadow && (a = r.shadow, x.shadowBias = a.bias, x.shadowRadius = a.radius, x.shadowMapSize = a.mapSize), Ut.spotShadowMap[g] = h, Ut.spotShadowMatrix[g] = r.shadow.matrix, Ut.spot[g] = x, g++
						} else {
							if (r.isRectAreaLight) {
								(x = ie.get(r)).color.copy(o).multiplyScalar(s / (r.width * r.height)), x.position.setFromMatrixPosition(r.matrixWorld), x.position.applyMatrix4(p), Ct.identity(), Lt.copy(r.matrixWorld), Lt.premultiply(p), Ct.extractRotation(Lt), x.halfWidth.set(0.5 * r.width, 0, 0), x.halfHeight.set(0, 0.5 * r.height, 0), x.halfWidth.applyMatrix4(Ct), x.halfHeight.applyMatrix4(Ct), Ut.rectArea[v] = x, v++
							} else {
								if (r.isPointLight) {
									(x = ie.get(r)).position.setFromMatrixPosition(r.matrixWorld), x.position.applyMatrix4(p), x.color.copy(r.color).multiplyScalar(r.intensity), x.distance = r.distance, x.decay = 0 === r.distance ? 0 : r.decay, x.shadow = r.castShadow, r.castShadow && (a = r.shadow, x.shadowBias = a.bias, x.shadowRadius = a.radius, x.shadowMapSize = a.mapSize), Ut.pointShadowMap[m] = h, Ut.pointShadowMatrix[m] = r.shadow.matrix, Ut.point[m] = x, m++
								} else {
									if (r.isHemisphereLight) {
										var x = ie.get(r);
										x.direction.setFromMatrixPosition(r.matrixWorld), x.direction.transformDirection(p), x.direction.normalize(), x.skyColor.copy(r.color).multiplyScalar(s), x.groundColor.copy(r.groundColor).multiplyScalar(s), Ut.hemi[y] = x, y++
									}
								}
							}
						}
					}
				}
			}
			Ut.ambient[0] = l, Ut.ambient[1] = u, Ut.ambient[2] = d, Ut.directional.length = f, Ut.spot.length = g, Ut.rectArea.length = v, Ut.point.length = m, Ut.hemi.length = y, Ut.hash = f + "," + m + "," + g + "," + v + "," + y + "," + Ut.shadows.length
		}

		function N(t) {
			var e;
			if (t === Fa) {
				return zt.REPEAT
			}
			if (t === Ba) {
				return zt.CLAMP_TO_EDGE
			}
			if (t === za) {
				return zt.MIRRORED_REPEAT
			}
			if (t === Ga) {
				return zt.NEAREST
			}
			if (t === Ha) {
				return zt.NEAREST_MIPMAP_NEAREST
			}
			if (t === Va) {
				return zt.NEAREST_MIPMAP_LINEAR
			}
			if (t === ka) {
				return zt.LINEAR
			}
			if (t === ja) {
				return zt.LINEAR_MIPMAP_NEAREST
			}
			if (t === Wa) {
				return zt.LINEAR_MIPMAP_LINEAR
			}
			if (t === Xa) {
				return zt.UNSIGNED_BYTE
			}
			if (t === to) {
				return zt.UNSIGNED_SHORT_4_4_4_4
			}
			if (t === eo) {
				return zt.UNSIGNED_SHORT_5_5_5_1
			}
			if (t === io) {
				return zt.UNSIGNED_SHORT_5_6_5
			}
			if (t === qa) {
				return zt.BYTE
			}
			if (t === Ya) {
				return zt.SHORT
			}
			if (t === Za) {
				return zt.UNSIGNED_SHORT
			}
			if (t === Ja) {
				return zt.INT
			}
			if (t === Qa) {
				return zt.UNSIGNED_INT
			}
			if (t === Ka) {
				return zt.FLOAT
			}
			if (t === $a && null !== (e = qt.get("OES_texture_half_float"))) {
				return e.HALF_FLOAT_OES
			}
			if (t === ro) {
				return zt.ALPHA
			}
			if (t === ao) {
				return zt.RGB
			}
			if (t === oo) {
				return zt.RGBA
			}
			if (t === so) {
				return zt.LUMINANCE
			}
			if (t === co) {
				return zt.LUMINANCE_ALPHA
			}
			if (t === lo) {
				return zt.DEPTH_COMPONENT
			}
			if (t === uo) {
				return zt.DEPTH_STENCIL
			}
			if (t === Kr) {
				return zt.FUNC_ADD
			}
			if (t === $r) {
				return zt.FUNC_SUBTRACT
			}
			if (t === ta) {
				return zt.FUNC_REVERSE_SUBTRACT
			}
			if (t === na) {
				return zt.ZERO
			}
			if (t === ra) {
				return zt.ONE
			}
			if (t === aa) {
				return zt.SRC_COLOR
			}
			if (t === oa) {
				return zt.ONE_MINUS_SRC_COLOR
			}
			if (t === sa) {
				return zt.SRC_ALPHA
			}
			if (t === ca) {
				return zt.ONE_MINUS_SRC_ALPHA
			}
			if (t === ha) {
				return zt.DST_ALPHA
			}
			if (t === la) {
				return zt.ONE_MINUS_DST_ALPHA
			}
			if (t === ua) {
				return zt.DST_COLOR
			}
			if (t === da) {
				return zt.ONE_MINUS_DST_COLOR
			}
			if (t === pa) {
				return zt.SRC_ALPHA_SATURATE
			}
			if ((t === po || t === fo || t === mo || t === go) && null !== (e = qt.get("WEBGL_compressed_texture_s3tc"))) {
				if (t === po) {
					return e.COMPRESSED_RGB_S3TC_DXT1_EXT
				}
				if (t === fo) {
					return e.COMPRESSED_RGBA_S3TC_DXT1_EXT
				}
				if (t === mo) {
					return e.COMPRESSED_RGBA_S3TC_DXT3_EXT
				}
				if (t === go) {
					return e.COMPRESSED_RGBA_S3TC_DXT5_EXT
				}
			}
			if ((t === vo || t === yo || t === xo || t === _o) && null !== (e = qt.get("WEBGL_compressed_texture_pvrtc"))) {
				if (t === vo) {
					return e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG
				}
				if (t === yo) {
					return e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG
				}
				if (t === xo) {
					return e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG
				}
				if (t === _o) {
					return e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
				}
			}
			if (t === bo && null !== (e = qt.get("WEBGL_compressed_texture_etc1"))) {
				return e.COMPRESSED_RGB_ETC1_WEBGL
			}
			if ((t === ea || t === ia) && null !== (e = qt.get("EXT_blend_minmax"))) {
				if (t === ea) {
					return e.MIN_EXT
				}
				if (t === ia) {
					return e.MAX_EXT
				}
			}
			return t === no && null !== (e = qt.get("WEBGL_depth_texture")) ? e.UNSIGNED_INT_24_8_WEBGL : 0
		}
		console.log("THREE.WebGLRenderer", Pr);
		var O = void 0 !== (t = t || {}).canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
			D = void 0 !== t.context ? t.context : null,
			F = void 0 !== t.alpha && t.alpha,
			B = void 0 === t.depth || t.depth,
			z = void 0 === t.stencil || t.stencil,
			G = void 0 !== t.antialias && t.antialias,
			H = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
			V = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
			k = [],
			j = null,
			q = new Float32Array(8),
			J = [],
			K = [];
		this.domElement = O, this.context = null, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.gammaInput = !1, this.gammaOutput = !1, this.physicallyCorrectLights = !1, this.toneMapping = Sa, this.toneMappingExposure = 1, this.toneMappingWhitePoint = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
		var $ = this,
			tt = null,
			et = null,
			it = null,
			at = -1,
			ot = "",
			st = null,
			ct = new r,
			ht = null,
			lt = new r,
			ut = 0,
			pt = new X(0),
			ft = 0,
			mt = O.width,
			gt = O.height,
			vt = 1,
			yt = new r(0, 0, mt, gt),
			xt = !1,
			_t = new r(0, 0, mt, gt),
			bt = new nt,
			wt = new de,
			Mt = !1,
			Et = !1,
			Tt = new h,
			St = new c,
			Lt = new h,
			Ct = new h,
			Ut = {
				hash: "",
				ambient: [0, 0, 0],
				directional: [],
				directionalShadowMap: [],
				directionalShadowMatrix: [],
				spot: [],
				spotShadowMap: [],
				spotShadowMatrix: [],
				rectArea: [],
				point: [],
				pointShadowMap: [],
				pointShadowMatrix: [],
				hemi: [],
				shadows: []
			},
			Ft = {
				geometries: 0,
				textures: 0
			},
			Bt = {
				frame: 0,
				calls: 0,
				vertices: 0,
				faces: 0,
				points: 0
			};
		this.info = {
			render: Bt,
			memory: Ft,
			programs: null
		};
		var zt;
		try {
			var Xt = {
				alpha: F,
				depth: B,
				stencil: z,
				antialias: G,
				premultipliedAlpha: H,
				preserveDrawingBuffer: V
			};
			if (null === (zt = D || O.getContext("webgl", Xt) || O.getContext("experimental-webgl", Xt))) {
				throw null !== O.getContext("webgl") ? "Error creating WebGL context with your selected attributes." : "Error creating WebGL context."
			}
			void 0 === zt.getShaderPrecisionFormat && (zt.getShaderPrecisionFormat = function() {
				return {
					rangeMin: 1,
					rangeMax: 1,
					precision: 1
				}
			}), O.addEventListener("webglcontextlost", a, !1)
		} catch (t) {
			console.error("THREE.WebGLRenderer: " + t)
		}
		var qt = new ue(zt);
		qt.get("WEBGL_depth_texture"), qt.get("OES_texture_float"), qt.get("OES_texture_float_linear"), qt.get("OES_texture_half_float"), qt.get("OES_texture_half_float_linear"), qt.get("OES_standard_derivatives"), qt.get("ANGLE_instanced_arrays"), qt.get("OES_element_index_uint") && (At.MaxIndex = 4294967296);
		var Yt = new le(zt, qt, t),
			Zt = new he(zt, qt, N),
			Jt = new ce,
			Qt = new se(zt, qt, Zt, Jt, Yt, N, Ft),
			Kt = new Dt(zt),
			$t = new kt(zt, Kt, Ft),
			te = new Wt(zt, $t, Bt),
			ee = new oe(this, Yt),
			ie = new jt,
			ne = new Gt;
		this.info.programs = ee.programs;
		var re, ae, pe, fe, me = new Vt(zt, qt, Bt),
			ge = new Ht(zt, qt, Bt);
		i(), this.context = zt, this.capabilities = Yt, this.extensions = qt, this.properties = Jt, this.state = Zt;
		var ve = new rt(this, Ut, te, Yt);
		this.shadowMap = ve;
		var ye = new Z(this, J),
			xe = new Y(this, K);
		this.getContext = function() {
			return zt
		}, this.getContextAttributes = function() {
			return zt.getContextAttributes()
		}, this.forceContextLoss = function() {
			var t = qt.get("WEBGL_lose_context");
			t && t.loseContext()
		}, this.getMaxAnisotropy = function() {
			return Yt.getMaxAnisotropy()
		}, this.getPrecision = function() {
			return Yt.precision
		}, this.getPixelRatio = function() {
			return vt
		}, this.setPixelRatio = function(t) {
			void 0 !== t && (vt = t, this.setSize(_t.z, _t.w, !1))
		}, this.getSize = function() {
			return {
				width: mt,
				height: gt
			}
		}, this.setSize = function(t, e, i) {
			mt = t, gt = e, O.width = t * vt, O.height = e * vt, !1 !== i && (O.style.width = t + "px", O.style.height = e + "px"), this.setViewport(0, 0, t, e)
		}, this.setViewport = function(t, e, i, n) {
			Zt.viewport(_t.set(t, e, i, n))
		}, this.setScissor = function(t, e, i, n) {
			Zt.scissor(yt.set(t, e, i, n))
		}, this.setScissorTest = function(t) {
			Zt.setScissorTest(xt = t)
		}, this.getClearColor = function() {
			return pt
		}, this.setClearColor = function(t, e) {
			pt.set(t), ft = void 0 !== e ? e : 1, Zt.buffers.color.setClear(pt.r, pt.g, pt.b, ft, H)
		}, this.getClearAlpha = function() {
			return ft
		}, this.setClearAlpha = function(t) {
			ft = t, Zt.buffers.color.setClear(pt.r, pt.g, pt.b, ft, H)
		}, this.clear = function(t, e, i) {
			var n = 0;
			(void 0 === t || t) && (n |= zt.COLOR_BUFFER_BIT), (void 0 === e || e) && (n |= zt.DEPTH_BUFFER_BIT), (void 0 === i || i) && (n |= zt.STENCIL_BUFFER_BIT), zt.clear(n)
		}, this.clearColor = function() {
			this.clear(!0, !1, !1)
		}, this.clearDepth = function() {
			this.clear(!1, !0, !1)
		}, this.clearStencil = function() {
			this.clear(!1, !1, !0)
		}, this.clearTarget = function(t, e, i, n) {
			this.setRenderTarget(t), this.clear(e, i, n)
		}, this.resetGLState = n, this.dispose = function() {
			O.removeEventListener("webglcontextlost", a, !1), ne.dispose()
		}, this.renderBufferImmediate = function(t, e, i) {
			Zt.initAttributes();
			var n = Jt.get(t);
			t.hasPositions && !n.position && (n.position = zt.createBuffer()), t.hasNormals && !n.normal && (n.normal = zt.createBuffer()), t.hasUvs && !n.uv && (n.uv = zt.createBuffer()), t.hasColors && !n.color && (n.color = zt.createBuffer());
			var r = e.getAttributes();
			if (t.hasPositions && (zt.bindBuffer(zt.ARRAY_BUFFER, n.position), zt.bufferData(zt.ARRAY_BUFFER, t.positionArray, zt.DYNAMIC_DRAW), Zt.enableAttribute(r.position), zt.vertexAttribPointer(r.position, 3, zt.FLOAT, !1, 0, 0)), t.hasNormals) {
				if (zt.bindBuffer(zt.ARRAY_BUFFER, n.normal), !i.isMeshPhongMaterial && !i.isMeshStandardMaterial && !i.isMeshNormalMaterial && i.shading === Hr) {
					for (var a = 0, o = 3 * t.count; a < o; a += 9) {
						var s = t.normalArray,
							c = (s[a + 0] + s[a + 3] + s[a + 6]) / 3,
							h = (s[a + 1] + s[a + 4] + s[a + 7]) / 3,
							l = (s[a + 2] + s[a + 5] + s[a + 8]) / 3;
						s[a + 0] = c, s[a + 1] = h, s[a + 2] = l, s[a + 3] = c, s[a + 4] = h, s[a + 5] = l, s[a + 6] = c, s[a + 7] = h, s[a + 8] = l
					}
				}
				zt.bufferData(zt.ARRAY_BUFFER, t.normalArray, zt.DYNAMIC_DRAW), Zt.enableAttribute(r.normal), zt.vertexAttribPointer(r.normal, 3, zt.FLOAT, !1, 0, 0)
			}
			t.hasUvs && i.map && (zt.bindBuffer(zt.ARRAY_BUFFER, n.uv), zt.bufferData(zt.ARRAY_BUFFER, t.uvArray, zt.DYNAMIC_DRAW), Zt.enableAttribute(r.uv), zt.vertexAttribPointer(Kt.uv, 2, zt.FLOAT, !1, 0, 0)), t.hasColors && i.vertexColors !== kr && (zt.bindBuffer(zt.ARRAY_BUFFER, n.color), zt.bufferData(zt.ARRAY_BUFFER, t.colorArray, zt.DYNAMIC_DRAW), Zt.enableAttribute(r.color), zt.vertexAttribPointer(r.color, 3, zt.FLOAT, !1, 0, 0)), Zt.disableUnusedAttributes(), zt.drawArrays(zt.TRIANGLES, 0, t.count), t.count = 0
		}, this.renderBufferDirect = function(t, i, n, r, a, o) {
			Zt.setMaterial(r);
			var s = x(t, i, r, a),
				c = n.id + "_" + s.id + "_" + (!0 === r.wireframe),
				h = !1;
			c !== ot && (ot = c, h = !0);
			var l = a.morphTargetInfluences;
			if (void 0 !== l) {
				for (var u = [], d = 0, m = l.length; d < m; d++) {
					v = l[d], u.push([v, d])
				}
				u.sort(p), u.length > 8 && (u.length = 8);
				for (var g = n.morphAttributes, d = 0, m = u.length; d < m; d++) {
					var v = u[d];
					q[d] = v[0], 0 !== v[0] ? (_ = v[1], !0 === r.morphTargets && g.position && n.addAttribute("morphTarget" + d, g.position[_]), !0 === r.morphNormals && g.normal && n.addAttribute("morphNormal" + d, g.normal[_])) : (!0 === r.morphTargets && n.removeAttribute("morphTarget" + d), !0 === r.morphNormals && n.removeAttribute("morphNormal" + d))
				}
				for (var d = u.length, y = q.length; d < y; d++) {
					q[d] = 0
				}
				s.getUniforms().setValue(zt, "morphTargetInfluences", q), h = !0
			}
			var _ = n.index,
				b = n.attributes.position,
				w = 1;
			!0 === r.wireframe && (_ = $t.getWireframeAttribute(n), w = 2);
			var M = me;
			null !== _ && (M = ge).setIndex(_), h && (f(r, s, n), null !== _ && zt.bindBuffer(zt.ELEMENT_ARRAY_BUFFER, Kt.get(_).buffer));
			var E = 0;
			null !== _ ? E = _.count : void 0 !== b && (E = b.count);
			var T = n.drawRange.start * w,
				S = n.drawRange.count * w,
				A = null !== o ? o.start * w : 0,
				R = null !== o ? o.count * w : 1 / 0,
				L = Math.max(T, A),
				P = Math.min(E, T + S, A + R) - 1,
				C = Math.max(0, P - L + 1);
			if (0 !== C) {
				if (a.isMesh) {
					if (!0 === r.wireframe) {
						Zt.setLineWidth(r.wireframeLinewidth * e()), M.setMode(zt.LINES)
					} else {
						switch (a.drawMode) {
							case Eo:
								M.setMode(zt.TRIANGLES);
								break;
							case To:
								M.setMode(zt.TRIANGLE_STRIP);
								break;
							case So:
								M.setMode(zt.TRIANGLE_FAN)
						}
					}
				} else {
					if (a.isLine) {
						var I = r.linewidth;
						void 0 === I && (I = 1), Zt.setLineWidth(I * e()), a.isLineSegments ? M.setMode(zt.LINES) : a.isLineLoop ? M.setMode(zt.LINE_LOOP) : M.setMode(zt.LINE_STRIP)
					} else {
						a.isPoints && M.setMode(zt.POINTS)
					}
				}
				n && n.isInstancedBufferGeometry ? n.maxInstancedCount > 0 && M.renderInstances(n, L, C) : M.render(L, C)
			}
		}, this.compile = function(t, e) {
			k = [], t.traverse(function(t) {
				t.isLight && k.push(t)
			}), U(k, e), t.traverse(function(e) {
				if (e.material) {
					if (Array.isArray(e.material)) {
						for (var i = 0; i < e.material.length; i++) {
							y(e.material[i], t.fog, e)
						}
					} else {
						y(e.material, t.fog, e)
					}
				}
			})
		}, this.render = function(t, e, i, n) {
			if (void 0 === e || !0 === e.isCamera) {
				ot = "", at = -1, st = null, !0 === t.autoUpdate && t.updateMatrixWorld(), e.onBeforeRender($), null === e.parent && e.updateMatrixWorld(), e.matrixWorldInverse.getInverse(e.matrixWorld), Tt.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), bt.setFromMatrix(Tt), k.length = 0, J.length = 0, K.length = 0, Et = this.localClippingEnabled, Mt = wt.init(this.clippingPlanes, Et, e), (j = ne.get(t, e)).init(), m(t, e, $.sortObjects), j.finish(), !0 === $.sortObjects && j.sort(), Mt && wt.beginShadows(), I(k), ve.render(t, e), U(k, e), Mt && wt.endShadows(), Bt.frame++, Bt.calls = 0, Bt.vertices = 0, Bt.faces = 0, Bt.points = 0, void 0 === i && (i = null), this.setRenderTarget(i);
				var r = t.background;
				null === r ? Zt.buffers.color.setClear(pt.r, pt.g, pt.b, ft, H) : r && r.isColor && (Zt.buffers.color.setClear(r.r, r.g, r.b, 1, H), n = !0), (this.autoClear || n) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil), r && r.isCubeTexture ? (void 0 === pe && (pe = new Nt, fe = new Rt(new Pt(5, 5, 5), new Q({
					uniforms: Zo.cube.uniforms,
					vertexShader: Zo.cube.vertexShader,
					fragmentShader: Zo.cube.fragmentShader,
					side: zr,
					depthTest: !1,
					depthWrite: !1,
					fog: !1
				}))), pe.projectionMatrix.copy(e.projectionMatrix), pe.matrixWorld.extractRotation(e.matrixWorld), pe.matrixWorldInverse.getInverse(pe.matrixWorld), fe.material.uniforms.tCube.value = r, fe.modelViewMatrix.multiplyMatrices(pe.matrixWorldInverse, fe.matrixWorld), te.update(fe), $.renderBufferDirect(pe, null, fe.geometry, fe.material, fe, null)) : r && r.isTexture && (void 0 === re && (re = new Ot(-1, 1, 1, -1, 0, 1), ae = new Rt(new It(2, 2), new dt({
					depthTest: !1,
					depthWrite: !1,
					fog: !1
				}))), ae.material.map = r, te.update(ae), $.renderBufferDirect(re, null, ae.geometry, ae.material, ae, null));
				var a = j.opaque,
					o = j.transparent;
				if (t.overrideMaterial) {
					var s = t.overrideMaterial;
					a.length && g(a, t, e, s), o.length && g(o, t, e, s)
				} else {
					a.length && g(a, t, e), o.length && g(o, t, e)
				}
				ye.render(t, e), xe.render(t, e, lt), i && Qt.updateRenderTargetMipmap(i), Zt.buffers.depth.setTest(!0), Zt.buffers.depth.setMask(!0), Zt.buffers.color.setMask(!0), e.isArrayCamera && e.enabled && $.setScissorTest(!1), e.onAfterRender($)
			} else {
				console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
			}
		}, this.setFaceCulling = function(t, e) {
			Zt.setCullFace(t), Zt.setFlipSided(e === Or)
		}, this.allocTextureUnit = function() {
			var t = ut;
			return t >= Yt.maxTextures && console.warn("THREE.WebGLRenderer: Trying to use " + t + " texture units while this GPU supports only " + Yt.maxTextures), ut += 1, t
		}, this.setTexture2D = function() {
			var t = !1;
			return function(e, i) {
				e && e.isWebGLRenderTarget && (t || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."), t = !0), e = e.texture), Qt.setTexture2D(e, i)
			}
		}(), this.setTexture = function() {
			var t = !1;
			return function(e, i) {
				t || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), t = !0), Qt.setTexture2D(e, i)
			}
		}(), this.setTextureCube = function() {
			var t = !1;
			return function(e, i) {
				e && e.isWebGLRenderTargetCube && (t || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), t = !0), e = e.texture), e && e.isCubeTexture || Array.isArray(e.image) && 6 === e.image.length ? Qt.setTextureCube(e, i) : Qt.setTextureCubeDynamic(e, i)
			}
		}(), this.getRenderTarget = function() {
			return et
		}, this.setRenderTarget = function(t) {
			et = t, t && void 0 === Jt.get(t).__webglFramebuffer && Qt.setupRenderTarget(t);
			var e, i = t && t.isWebGLRenderTargetCube;
			if (t) {
				var n = Jt.get(t);
				e = i ? n.__webglFramebuffer[t.activeCubeFace] : n.__webglFramebuffer, ct.copy(t.scissor), ht = t.scissorTest, lt.copy(t.viewport)
			} else {
				e = null, ct.copy(yt).multiplyScalar(vt), ht = xt, lt.copy(_t).multiplyScalar(vt)
			}
			if (it !== e && (zt.bindFramebuffer(zt.FRAMEBUFFER, e), it = e), Zt.scissor(ct), Zt.setScissorTest(ht), Zt.viewport(lt), i) {
				var r = Jt.get(t.texture);
				zt.framebufferTexture2D(zt.FRAMEBUFFER, zt.COLOR_ATTACHMENT0, zt.TEXTURE_CUBE_MAP_POSITIVE_X + t.activeCubeFace, r.__webglTexture, t.activeMipMapLevel)
			}
		}, this.readRenderTargetPixels = function(t, e, i, n, r, a) {
			if (!1 !== (t && t.isWebGLRenderTarget)) {
				var o = Jt.get(t).__webglFramebuffer;
				if (o) {
					var s = !1;
					o !== it && (zt.bindFramebuffer(zt.FRAMEBUFFER, o), s = !0);
					try {
						var c = t.texture,
							h = c.format,
							l = c.type;
						if (h !== oo && N(h) !== zt.getParameter(zt.IMPLEMENTATION_COLOR_READ_FORMAT)) {
							return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.")
						}
						if (!(l === Xa || N(l) === zt.getParameter(zt.IMPLEMENTATION_COLOR_READ_TYPE) || l === Ka && (qt.get("OES_texture_float") || qt.get("WEBGL_color_buffer_float")) || l === $a && qt.get("EXT_color_buffer_half_float"))) {
							return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")
						}
						zt.checkFramebufferStatus(zt.FRAMEBUFFER) === zt.FRAMEBUFFER_COMPLETE ? e >= 0 && e <= t.width - n && i >= 0 && i <= t.height - r && zt.readPixels(e, i, n, r, N(h), N(l), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")
					} finally {
						s && zt.bindFramebuffer(zt.FRAMEBUFFER, it)
					}
				}
			} else {
				console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
			}
		}
	}

	function fe(t, e) {
		this.name = "", this.color = new X(t), this.density = void 0 !== e ? e : 0.00025
	}

	function me(t, e, i) {
		this.name = "", this.color = new X(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== i ? i : 1000
	}

	function ge() {
		ct.call(this), this.type = "Scene", this.background = null, this.fog = null, this.overrideMaterial = null, this.autoUpdate = !0
	}

	function ve(t, e, i, n, r) {
		ct.call(this), this.lensFlares = [], this.positionScreen = new c, this.customUpdateCallback = void 0, void 0 !== t && this.add(t, e, i, n, r)
	}

	function ye(t) {
		J.call(this), this.type = "SpriteMaterial", this.color = new X(16777215), this.map = null, this.rotation = 0, this.fog = !1, this.lights = !1, this.setValues(t)
	}

	function xe(t) {
		ct.call(this), this.type = "Sprite", this.material = void 0 !== t ? t : new ye
	}

	function _e() {
		ct.call(this), this.type = "LOD", Object.defineProperties(this, {
			levels: {
				enumerable: !0,
				value: []
			}
		})
	}

	function be(t, e) {
		if (t = t || [], this.bones = t.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length), void 0 === e) {
			this.calculateInverses()
		} else {
			if (this.bones.length === e.length) {
				this.boneInverses = e.slice(0)
			} else {
				console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [];
				for (var i = 0, n = this.bones.length; i < n; i++) {
					this.boneInverses.push(new h)
				}
			}
		}
	}

	function we() {
		ct.call(this), this.type = "Bone"
	}

	function Me(t, e) {
		Rt.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new h, this.bindMatrixInverse = new h;
		var i = new be(this.initBones());
		this.bind(i, this.matrixWorld), this.normalizeSkinWeights()
	}

	function Ee(t) {
		J.call(this), this.type = "LineBasicMaterial", this.color = new X(16777215), this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.lights = !1, this.setValues(t)
	}

	function Te(t, e, i) {
		if (1 === i) {
			return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."), new Se(t, e)
		}
		ct.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new At, this.material = void 0 !== e ? e : new Ee({
			color: 16777215 * Math.random()
		})
	}

	function Se(t, e) {
		Te.call(this, t, e), this.type = "LineSegments"
	}

	function Ae(t, e) {
		Te.call(this, t, e), this.type = "LineLoop"
	}

	function Re(t) {
		J.call(this), this.type = "PointsMaterial", this.color = new X(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.lights = !1, this.setValues(t)
	}

	function Le(t, e) {
		ct.call(this), this.type = "Points", this.geometry = void 0 !== t ? t : new At, this.material = void 0 !== e ? e : new Re({
			color: 16777215 * Math.random()
		})
	}

	function Pe() {
		ct.call(this), this.type = "Group"
	}

	function Ce(t, e, i, r, a, o, s, c, h) {
		function l() {
			requestAnimationFrame(l), t.readyState >= t.HAVE_CURRENT_DATA && (u.needsUpdate = !0)
		}
		n.call(this, t, e, i, r, a, o, s, c, h), this.generateMipmaps = !1;
		var u = this;
		l()
	}

	function Ie(t, e, i, r, a, o, s, c, h, l, u, d) {
		n.call(this, null, o, s, c, h, l, r, a, u, d), this.image = {
			width: e,
			height: i
		}, this.mipmaps = t, this.flipY = !1, this.generateMipmaps = !1
	}

	function Ue(t, e, i, r, a, o, s, c, h) {
		n.call(this, t, e, i, r, a, o, s, c, h), this.needsUpdate = !0
	}

	function Ne(t, e, i, r, a, o, s, c, h, l) {
		if ((l = void 0 !== l ? l : lo) !== lo && l !== uo) {
			throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat")
		}
		void 0 === i && l === lo && (i = Za), void 0 === i && l === uo && (i = no), n.call(this, null, r, a, o, s, c, l, i, h), this.image = {
			width: t,
			height: e
		}, this.magFilter = void 0 !== s ? s : Ga, this.minFilter = void 0 !== c ? c : Ga, this.flipY = !1, this.generateMipmaps = !1
	}

	function Oe(t) {
		At.call(this), this.type = "WireframeGeometry";
		var e, i, n, r, a, o, s, h, l, u, d = [],
			p = [0, 0],
			f = {},
			m = ["a", "b", "c"];
		if (t && t.isGeometry) {
			var g = t.faces;
			for (e = 0, n = g.length; e < n; e++) {
				var v = g[e];
				for (i = 0; i < 3; i++) {
					s = v[m[i]], h = v[m[(i + 1) % 3]], p[0] = Math.min(s, h), p[1] = Math.max(s, h), void 0 === f[l = p[0] + "," + p[1]] && (f[l] = {
						index1: p[0],
						index2: p[1]
					})
				}
			}
			for (l in f) {
				o = f[l], u = t.vertices[o.index1], d.push(u.x, u.y, u.z), u = t.vertices[o.index2], d.push(u.x, u.y, u.z)
			}
		} else {
			if (t && t.isBufferGeometry) {
				var y, x, _, b, w, M, E;
				if (u = new c, null !== t.index) {
					for (y = t.attributes.position, x = t.index, 0 === (_ = t.groups).length && (_ = [{
							start: 0,
							count: x.count,
							materialIndex: 0
						}]), r = 0, a = _.length; r < a; ++r) {
						for (e = w = (b = _[r]).start, n = w + b.count; e < n; e += 3) {
							for (i = 0; i < 3; i++) {
								s = x.getX(e + i), h = x.getX(e + (i + 1) % 3), p[0] = Math.min(s, h), p[1] = Math.max(s, h), void 0 === f[l = p[0] + "," + p[1]] && (f[l] = {
									index1: p[0],
									index2: p[1]
								})
							}
						}
					}
					for (l in f) {
						o = f[l], u.fromBufferAttribute(y, o.index1), d.push(u.x, u.y, u.z), u.fromBufferAttribute(y, o.index2), d.push(u.x, u.y, u.z)
					}
				} else {
					for (e = 0, n = (y = t.attributes.position).count / 3; e < n; e++) {
						for (i = 0; i < 3; i++) {
							M = 3 * e + i, u.fromBufferAttribute(y, M), d.push(u.x, u.y, u.z), E = 3 * e + (i + 1) % 3, u.fromBufferAttribute(y, E), d.push(u.x, u.y, u.z)
						}
					}
				}
			}
		}
		this.addAttribute("position", new bt(d, 3))
	}

	function De(t, e, i) {
		St.call(this), this.type = "ParametricGeometry", this.parameters = {
			func: t,
			slices: e,
			stacks: i
		}, this.fromBufferGeometry(new Fe(t, e, i)), this.mergeVertices()
	}

	function Fe(t, e, i) {
		At.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
			func: t,
			slices: e,
			stacks: i
		};
		var n, r, a = [],
			o = [],
			s = [],
			h = [],
			l = new c,
			u = new c,
			d = new c,
			p = new c,
			f = new c,
			m = e + 1;
		for (n = 0; n <= i; n++) {
			var g = n / i;
			for (r = 0; r <= e; r++) {
				var v = r / e;
				u = t(v, g, u), o.push(u.x, u.y, u.z), v - 0.00001 >= 0 ? (d = t(v - 0.00001, g, d), p.subVectors(u, d)) : (d = t(v + 0.00001, g, d), p.subVectors(d, u)), g - 0.00001 >= 0 ? (d = t(v, g - 0.00001, d), f.subVectors(u, d)) : (d = t(v, g + 0.00001, d), f.subVectors(d, u)), l.crossVectors(p, f).normalize(), s.push(l.x, l.y, l.z), h.push(v, g)
			}
		}
		for (n = 0; n < i; n++) {
			for (r = 0; r < e; r++) {
				var y = n * m + r,
					x = n * m + r + 1,
					_ = (n + 1) * m + r + 1,
					b = (n + 1) * m + r;
				a.push(y, x, b), a.push(x, _, b)
			}
		}
		this.setIndex(a), this.addAttribute("position", new bt(o, 3)), this.addAttribute("normal", new bt(s, 3)), this.addAttribute("uv", new bt(h, 2))
	}

	function Be(t, e, i, n) {
		St.call(this), this.type = "PolyhedronGeometry", this.parameters = {
			vertices: t,
			indices: e,
			radius: i,
			detail: n
		}, this.fromBufferGeometry(new ze(t, e, i, n)), this.mergeVertices()
	}

	function ze(t, e, n, r) {
		function a(t, e, i, n) {
			var r, a, o = Math.pow(2, n),
				c = [];
			for (r = 0; r <= o; r++) {
				c[r] = [];
				var h = t.clone().lerp(i, r / o),
					l = e.clone().lerp(i, r / o),
					u = o - r;
				for (a = 0; a <= u; a++) {
					c[r][a] = 0 === a && r === o ? h : h.clone().lerp(l, a / u)
				}
			}
			for (r = 0; r < o; r++) {
				for (a = 0; a < 2 * (o - r) - 1; a++) {
					var d = Math.floor(a / 2);
					a % 2 == 0 ? (s(c[r][d + 1]), s(c[r + 1][d]), s(c[r][d])) : (s(c[r][d + 1]), s(c[r + 1][d + 1]), s(c[r + 1][d]))
				}
			}
		}

		function o() {
			for (var t = 0; t < m.length; t += 6) {
				var e = m[t + 0],
					i = m[t + 2],
					n = m[t + 4],
					r = Math.max(e, i, n),
					a = Math.min(e, i, n);
				r > 0.9 && a < 0.1 && (e < 0.2 && (m[t + 0] += 1), i < 0.2 && (m[t + 2] += 1), n < 0.2 && (m[t + 4] += 1))
			}
		}

		function s(t) {
			f.push(t.x, t.y, t.z)
		}

		function h(e, i) {
			var n = 3 * e;
			i.x = t[n + 0], i.y = t[n + 1], i.z = t[n + 2]
		}

		function l() {
			for (var t = new c, e = new c, n = new c, r = new c, a = new i, o = new i, s = new i, h = 0, l = 0; h < f.length; h += 9, l += 6) {
				t.set(f[h + 0], f[h + 1], f[h + 2]), e.set(f[h + 3], f[h + 4], f[h + 5]), n.set(f[h + 6], f[h + 7], f[h + 8]), a.set(m[l + 0], m[l + 1]), o.set(m[l + 2], m[l + 3]), s.set(m[l + 4], m[l + 5]), r.copy(t).add(e).add(n).divideScalar(3);
				var p = d(r);
				u(a, l + 0, t, p), u(o, l + 2, e, p), u(s, l + 4, n, p)
			}
		}

		function u(t, e, i, n) {
			n < 0 && 1 === t.x && (m[e] = t.x - 1), 0 === i.x && 0 === i.z && (m[e] = n / 2 / Math.PI + 0.5)
		}

		function d(t) {
			return Math.atan2(t.z, -t.x)
		}

		function p(t) {
			return Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z))
		}
		At.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
			vertices: t,
			indices: e,
			radius: n,
			detail: r
		}, n = n || 1;
		var f = [],
			m = [];
		! function(t) {
			for (var i = new c, n = new c, r = new c, o = 0; o < e.length; o += 3) {
				h(e[o + 0], i), h(e[o + 1], n), h(e[o + 2], r), a(i, n, r, t)
			}
		}(r = r || 0),
		function(t) {
			for (var e = new c, i = 0; i < f.length; i += 3) {
				e.x = f[i + 0], e.y = f[i + 1], e.z = f[i + 2], e.normalize().multiplyScalar(t), f[i + 0] = e.x, f[i + 1] = e.y, f[i + 2] = e.z
			}
		}(n),
		function() {
			for (var t = new c, e = 0; e < f.length; e += 3) {
				t.x = f[e + 0], t.y = f[e + 1], t.z = f[e + 2];
				var i = d(t) / 2 / Math.PI + 0.5,
					n = p(t) / Math.PI + 0.5;
				m.push(i, 1 - n)
			}
			l(), o()
		}(), this.addAttribute("position", new bt(f, 3)), this.addAttribute("normal", new bt(f.slice(), 3)), this.addAttribute("uv", new bt(m, 2)), 0 === r ? this.computeVertexNormals() : this.normalizeNormals()
	}

	function Ge(t, e) {
		St.call(this), this.type = "TetrahedronGeometry", this.parameters = {
			radius: t,
			detail: e
		}, this.fromBufferGeometry(new He(t, e)), this.mergeVertices()
	}

	function He(t, e) {
		var i = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1],
			n = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
		ze.call(this, i, n, t, e), this.type = "TetrahedronBufferGeometry", this.parameters = {
			radius: t,
			detail: e
		}
	}

	function Ve(t, e) {
		St.call(this), this.type = "OctahedronGeometry", this.parameters = {
			radius: t,
			detail: e
		}, this.fromBufferGeometry(new ke(t, e)), this.mergeVertices()
	}

	function ke(t, e) {
		var i = [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1],
			n = [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2];
		ze.call(this, i, n, t, e), this.type = "OctahedronBufferGeometry", this.parameters = {
			radius: t,
			detail: e
		}
	}

	function je(t, e) {
		St.call(this), this.type = "IcosahedronGeometry", this.parameters = {
			radius: t,
			detail: e
		}, this.fromBufferGeometry(new We(t, e)), this.mergeVertices()
	}

	function We(t, e) {
		var i = (1 + Math.sqrt(5)) / 2,
			n = [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1],
			r = [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1];
		ze.call(this, n, r, t, e), this.type = "IcosahedronBufferGeometry", this.parameters = {
			radius: t,
			detail: e
		}
	}

	function Xe(t, e) {
		St.call(this), this.type = "DodecahedronGeometry", this.parameters = {
			radius: t,
			detail: e
		}, this.fromBufferGeometry(new qe(t, e)), this.mergeVertices()
	}

	function qe(t, e) {
		var i = (1 + Math.sqrt(5)) / 2,
			n = 1 / i,
			r = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, 0, -i, 0, -n, i, 0, -n, -i, 0, n, i, 0, n],
			a = [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9];
		ze.call(this, r, a, t, e), this.type = "DodecahedronBufferGeometry", this.parameters = {
			radius: t,
			detail: e
		}
	}

	function Ye(t, e, i, n, r, a) {
		St.call(this), this.type = "TubeGeometry", this.parameters = {
			path: t,
			tubularSegments: e,
			radius: i,
			radialSegments: n,
			closed: r
		}, void 0 !== a && console.warn("THREE.TubeGeometry: taper has been removed.");
		var o = new Ze(t, e, i, n, r);
		this.tangents = o.tangents, this.normals = o.normals, this.binormals = o.binormals, this.fromBufferGeometry(o), this.mergeVertices()
	}

	function Ze(t, e, n, r, a) {
		function o(i) {
			var a = t.getPointAt(i / e),
				o = l.normals[i],
				s = l.binormals[i];
			for (d = 0; d <= r; d++) {
				var c = d / r * Math.PI * 2,
					h = Math.sin(c),
					u = -Math.cos(c);
				f.x = u * o.x + h * s.x, f.y = u * o.y + h * s.y, f.z = u * o.z + h * s.z, f.normalize(), v.push(f.x, f.y, f.z), p.x = a.x + n * f.x, p.y = a.y + n * f.y, p.z = a.z + n * f.z, g.push(p.x, p.y, p.z)
			}
		}

		function s() {
			for (d = 1; d <= e; d++) {
				for (u = 1; u <= r; u++) {
					var t = (r + 1) * (d - 1) + (u - 1),
						i = (r + 1) * d + (u - 1),
						n = (r + 1) * d + u,
						a = (r + 1) * (d - 1) + u;
					x.push(t, i, a), x.push(i, n, a)
				}
			}
		}

		function h() {
			for (u = 0; u <= e; u++) {
				for (d = 0; d <= r; d++) {
					m.x = u / e, m.y = d / r, y.push(m.x, m.y)
				}
			}
		}
		At.call(this), this.type = "TubeBufferGeometry", this.parameters = {
			path: t,
			tubularSegments: e,
			radius: n,
			radialSegments: r,
			closed: a
		}, e = e || 64, n = n || 1, r = r || 8, a = a || !1;
		var l = t.computeFrenetFrames(e, a);
		this.tangents = l.tangents, this.normals = l.normals, this.binormals = l.binormals;
		var u, d, p = new c,
			f = new c,
			m = new i,
			g = [],
			v = [],
			y = [],
			x = [];
		! function() {
			for (u = 0; u < e; u++) {
				o(u)
			}
			o(!1 === a ? e : 0), h(), s()
		}(), this.setIndex(x), this.addAttribute("position", new bt(g, 3)), this.addAttribute("normal", new bt(v, 3)), this.addAttribute("uv", new bt(y, 2))
	}

	function Je(t, e, i, n, r, a, o) {
		St.call(this), this.type = "TorusKnotGeometry", this.parameters = {
			radius: t,
			tube: e,
			tubularSegments: i,
			radialSegments: n,
			p: r,
			q: a
		}, void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new Qe(t, e, i, n, r, a)), this.mergeVertices()
	}

	function Qe(t, e, i, n, r, a) {
		function o(t, e, i, n, r) {
			var a = Math.cos(t),
				o = Math.sin(t),
				s = i / e * t,
				c = Math.cos(s);
			r.x = n * (2 + c) * 0.5 * a, r.y = n * (2 + c) * o * 0.5, r.z = n * Math.sin(s) * 0.5
		}
		At.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
			radius: t,
			tube: e,
			tubularSegments: i,
			radialSegments: n,
			p: r,
			q: a
		}, t = t || 100, e = e || 40, i = Math.floor(i) || 64, n = Math.floor(n) || 8, r = r || 2, a = a || 3;
		var s, h, l = [],
			u = [],
			d = [],
			p = [],
			f = new c,
			m = new c,
			g = new c,
			v = new c,
			y = new c,
			x = new c,
			_ = new c;
		for (s = 0; s <= i; ++s) {
			var b = s / i * r * Math.PI * 2;
			for (o(b, r, a, t, g), o(b + 0.01, r, a, t, v), x.subVectors(v, g), _.addVectors(v, g), y.crossVectors(x, _), _.crossVectors(y, x), y.normalize(), _.normalize(), h = 0; h <= n; ++h) {
				var w = h / n * Math.PI * 2,
					M = -e * Math.cos(w),
					E = e * Math.sin(w);
				f.x = g.x + (M * _.x + E * y.x), f.y = g.y + (M * _.y + E * y.y), f.z = g.z + (M * _.z + E * y.z), u.push(f.x, f.y, f.z), m.subVectors(f, g).normalize(), d.push(m.x, m.y, m.z), p.push(s / i), p.push(h / n)
			}
		}
		for (h = 1; h <= i; h++) {
			for (s = 1; s <= n; s++) {
				var T = (n + 1) * (h - 1) + (s - 1),
					S = (n + 1) * h + (s - 1),
					A = (n + 1) * h + s,
					R = (n + 1) * (h - 1) + s;
				l.push(T, S, R), l.push(S, A, R)
			}
		}
		this.setIndex(l), this.addAttribute("position", new bt(u, 3)), this.addAttribute("normal", new bt(d, 3)), this.addAttribute("uv", new bt(p, 2))
	}

	function Ke(t, e, i, n, r) {
		St.call(this), this.type = "TorusGeometry", this.parameters = {
			radius: t,
			tube: e,
			radialSegments: i,
			tubularSegments: n,
			arc: r
		}, this.fromBufferGeometry(new $e(t, e, i, n, r)), this.mergeVertices()
	}

	function $e(t, e, i, n, r) {
		At.call(this), this.type = "TorusBufferGeometry", this.parameters = {
			radius: t,
			tube: e,
			radialSegments: i,
			tubularSegments: n,
			arc: r
		}, t = t || 100, e = e || 40, i = Math.floor(i) || 8, n = Math.floor(n) || 6, r = r || 2 * Math.PI;
		var a, o, s = [],
			h = [],
			l = [],
			u = [],
			d = new c,
			p = new c,
			f = new c;
		for (a = 0; a <= i; a++) {
			for (o = 0; o <= n; o++) {
				var m = o / n * r,
					g = a / i * Math.PI * 2;
				p.x = (t + e * Math.cos(g)) * Math.cos(m), p.y = (t + e * Math.cos(g)) * Math.sin(m), p.z = e * Math.sin(g), h.push(p.x, p.y, p.z), d.x = t * Math.cos(m), d.y = t * Math.sin(m), f.subVectors(p, d).normalize(), l.push(f.x, f.y, f.z), u.push(o / n), u.push(a / i)
			}
		}
		for (a = 1; a <= i; a++) {
			for (o = 1; o <= n; o++) {
				var v = (n + 1) * a + o - 1,
					y = (n + 1) * (a - 1) + o - 1,
					x = (n + 1) * (a - 1) + o,
					_ = (n + 1) * a + o;
				s.push(v, y, _), s.push(y, x, _)
			}
		}
		this.setIndex(s), this.addAttribute("position", new bt(h, 3)), this.addAttribute("normal", new bt(l, 3)), this.addAttribute("uv", new bt(u, 2))
	}

	function ti(t, e) {
		St.call(this), this.type = "ExtrudeGeometry", this.parameters = {
			shapes: t,
			options: e
		}, this.fromBufferGeometry(new ei(t, e)), this.mergeVertices()
	}

	function ei(t, e) {
		void 0 !== t ? (At.call(this), this.type = "ExtrudeBufferGeometry", t = Array.isArray(t) ? t : [t], this.addShapeList(t, e), this.computeVertexNormals()) : t = []
	}

	function ii(t, e) {
		St.call(this), this.type = "TextGeometry", this.parameters = {
			text: t,
			parameters: e
		}, this.fromBufferGeometry(new ni(t, e)), this.mergeVertices()
	}

	function ni(t, e) {
		var i = (e = e || {}).font;
		if (!1 === (i && i.isFont)) {
			return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new St
		}
		var n = i.generateShapes(t, e.size, e.curveSegments);
		e.amount = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), ei.call(this, n, e), this.type = "TextBufferGeometry"
	}

	function ri(t, e, i, n, r, a, o) {
		St.call(this), this.type = "SphereGeometry", this.parameters = {
			radius: t,
			widthSegments: e,
			heightSegments: i,
			phiStart: n,
			phiLength: r,
			thetaStart: a,
			thetaLength: o
		}, this.fromBufferGeometry(new ai(t, e, i, n, r, a, o)), this.mergeVertices()
	}

	function ai(t, e, i, n, r, a, o) {
		At.call(this), this.type = "SphereBufferGeometry", this.parameters = {
			radius: t,
			widthSegments: e,
			heightSegments: i,
			phiStart: n,
			phiLength: r,
			thetaStart: a,
			thetaLength: o
		}, t = t || 50, e = Math.max(3, Math.floor(e) || 8), i = Math.max(2, Math.floor(i) || 6), n = void 0 !== n ? n : 0, r = void 0 !== r ? r : 2 * Math.PI;
		var s, h, l = (a = void 0 !== a ? a : 0) + (o = void 0 !== o ? o : Math.PI),
			u = 0,
			d = [],
			p = new c,
			f = new c,
			m = [],
			g = [],
			v = [],
			y = [];
		for (h = 0; h <= i; h++) {
			var x = [],
				_ = h / i;
			for (s = 0; s <= e; s++) {
				var b = s / e;
				p.x = -t * Math.cos(n + b * r) * Math.sin(a + _ * o), p.y = t * Math.cos(a + _ * o), p.z = t * Math.sin(n + b * r) * Math.sin(a + _ * o), g.push(p.x, p.y, p.z), f.set(p.x, p.y, p.z).normalize(), v.push(f.x, f.y, f.z), y.push(b, 1 - _), x.push(u++)
			}
			d.push(x)
		}
		for (h = 0; h < i; h++) {
			for (s = 0; s < e; s++) {
				var w = d[h][s + 1],
					M = d[h][s],
					E = d[h + 1][s],
					T = d[h + 1][s + 1];
				(0 !== h || a > 0) && m.push(w, M, T), (h !== i - 1 || l < Math.PI) && m.push(M, E, T)
			}
		}
		this.setIndex(m), this.addAttribute("position", new bt(g, 3)), this.addAttribute("normal", new bt(v, 3)), this.addAttribute("uv", new bt(y, 2))
	}

	function oi(t, e, i, n, r, a) {
		St.call(this), this.type = "RingGeometry", this.parameters = {
			innerRadius: t,
			outerRadius: e,
			thetaSegments: i,
			phiSegments: n,
			thetaStart: r,
			thetaLength: a
		}, this.fromBufferGeometry(new si(t, e, i, n, r, a)), this.mergeVertices()
	}

	function si(t, e, n, r, a, o) {
		At.call(this), this.type = "RingBufferGeometry", this.parameters = {
			innerRadius: t,
			outerRadius: e,
			thetaSegments: n,
			phiSegments: r,
			thetaStart: a,
			thetaLength: o
		}, t = t || 20, e = e || 50, a = void 0 !== a ? a : 0, o = void 0 !== o ? o : 2 * Math.PI, n = void 0 !== n ? Math.max(3, n) : 8;
		var s, h, l, u = [],
			d = [],
			p = [],
			f = [],
			m = t,
			g = (e - t) / (r = void 0 !== r ? Math.max(1, r) : 1),
			v = new c,
			y = new i;
		for (h = 0; h <= r; h++) {
			for (l = 0; l <= n; l++) {
				s = a + l / n * o, v.x = m * Math.cos(s), v.y = m * Math.sin(s), d.push(v.x, v.y, v.z), p.push(0, 0, 1), y.x = (v.x / e + 1) / 2, y.y = (v.y / e + 1) / 2, f.push(y.x, y.y)
			}
			m += g
		}
		for (h = 0; h < r; h++) {
			var x = h * (n + 1);
			for (l = 0; l < n; l++) {
				var _ = s = l + x,
					b = s + n + 1,
					w = s + n + 2,
					M = s + 1;
				u.push(_, b, M), u.push(b, w, M)
			}
		}
		this.setIndex(u), this.addAttribute("position", new bt(d, 3)), this.addAttribute("normal", new bt(p, 3)), this.addAttribute("uv", new bt(f, 2))
	}

	function ci(t, e, i, n) {
		St.call(this), this.type = "LatheGeometry", this.parameters = {
			points: t,
			segments: e,
			phiStart: i,
			phiLength: n
		}, this.fromBufferGeometry(new hi(t, e, i, n)), this.mergeVertices()
	}

	function hi(t, e, n, r) {
		At.call(this), this.type = "LatheBufferGeometry", this.parameters = {
			points: t,
			segments: e,
			phiStart: n,
			phiLength: r
		}, e = Math.floor(e) || 12, n = n || 0, r = r || 2 * Math.PI, r = Do.clamp(r, 0, 2 * Math.PI);
		var a, o, s, h = [],
			l = [],
			u = [],
			d = 1 / e,
			p = new c,
			f = new i;
		for (o = 0; o <= e; o++) {
			var m = n + o * d * r,
				g = Math.sin(m),
				v = Math.cos(m);
			for (s = 0; s <= t.length - 1; s++) {
				p.x = t[s].x * g, p.y = t[s].y, p.z = t[s].x * v, l.push(p.x, p.y, p.z), f.x = o / e, f.y = s / (t.length - 1), u.push(f.x, f.y)
			}
		}
		for (o = 0; o < e; o++) {
			for (s = 0; s < t.length - 1; s++) {
				var y = a = s + o * t.length,
					x = a + t.length,
					_ = a + t.length + 1,
					b = a + 1;
				h.push(y, x, b), h.push(x, _, b)
			}
		}
		if (this.setIndex(h), this.addAttribute("position", new bt(l, 3)), this.addAttribute("uv", new bt(u, 2)), this.computeVertexNormals(), r === 2 * Math.PI) {
			var w = this.attributes.normal.array,
				M = new c,
				E = new c,
				T = new c;
			for (a = e * t.length * 3, o = 0, s = 0; o < t.length; o++, s += 3) {
				M.x = w[s + 0], M.y = w[s + 1], M.z = w[s + 2], E.x = w[a + s + 0], E.y = w[a + s + 1], E.z = w[a + s + 2], T.addVectors(M, E).normalize(), w[s + 0] = w[a + s + 0] = T.x, w[s + 1] = w[a + s + 1] = T.y, w[s + 2] = w[a + s + 2] = T.z
			}
		}
	}

	function li(t, e) {
		St.call(this), this.type = "ShapeGeometry", "object" == typeof e && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), e = e.curveSegments), this.parameters = {
			shapes: t,
			curveSegments: e
		}, this.fromBufferGeometry(new ui(t, e)), this.mergeVertices()
	}

	function ui(t, e) {
		function i(t) {
			var i, s, h, l = r.length / 3,
				u = t.extractPoints(e),
				d = u.shape,
				p = u.holes;
			if (!1 === ts.isClockWise(d)) {
				for (d = d.reverse(), i = 0, s = p.length; i < s; i++) {
					h = p[i], !0 === ts.isClockWise(h) && (p[i] = h.reverse())
				}
			}
			var f = ts.triangulateShape(d, p);
			for (i = 0, s = p.length; i < s; i++) {
				h = p[i], d = d.concat(h)
			}
			for (i = 0, s = d.length; i < s; i++) {
				var m = d[i];
				r.push(m.x, m.y, 0), a.push(0, 0, 1), o.push(m.x, m.y)
			}
			for (i = 0, s = f.length; i < s; i++) {
				var g = f[i],
					v = g[0] + l,
					y = g[1] + l,
					x = g[2] + l;
				n.push(v, y, x), c += 3
			}
		}
		At.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
			shapes: t,
			curveSegments: e
		}, e = e || 12;
		var n = [],
			r = [],
			a = [],
			o = [],
			s = 0,
			c = 0;
		if (!1 === Array.isArray(t)) {
			i(t)
		} else {
			for (var h = 0; h < t.length; h++) {
				i(t[h]), this.addGroup(s, c, h), s += c, c = 0
			}
		}
		this.setIndex(n), this.addAttribute("position", new bt(r, 3)), this.addAttribute("normal", new bt(a, 3)), this.addAttribute("uv", new bt(o, 2))
	}

	function di(t, e) {
		At.call(this), this.type = "EdgesGeometry", this.parameters = {
			thresholdAngle: e
		}, e = void 0 !== e ? e : 1;
		var i, n, r, a, o = [],
			s = Math.cos(Do.DEG2RAD * e),
			c = [0, 0],
			h = {},
			l = ["a", "b", "c"];
		t.isBufferGeometry ? (a = new St).fromBufferGeometry(t) : a = t.clone(), a.mergeVertices(), a.computeFaceNormals();
		for (var u = a.vertices, d = a.faces, p = 0, f = d.length; p < f; p++) {
			for (var m = d[p], g = 0; g < 3; g++) {
				i = m[l[g]], n = m[l[(g + 1) % 3]], c[0] = Math.min(i, n), c[1] = Math.max(i, n), void 0 === h[r = c[0] + "," + c[1]] ? h[r] = {
					index1: c[0],
					index2: c[1],
					face1: p,
					face2: void 0
				} : h[r].face2 = p
			}
		}
		for (r in h) {
			var v = h[r];
			if (void 0 === v.face2 || d[v.face1].normal.dot(d[v.face2].normal) <= s) {
				var y = u[v.index1];
				o.push(y.x, y.y, y.z), y = u[v.index2], o.push(y.x, y.y, y.z)
			}
		}
		this.addAttribute("position", new bt(o, 3))
	}

	function pi(t, e, i, n, r, a, o, s) {
		St.call(this), this.type = "CylinderGeometry", this.parameters = {
			radiusTop: t,
			radiusBottom: e,
			height: i,
			radialSegments: n,
			heightSegments: r,
			openEnded: a,
			thetaStart: o,
			thetaLength: s
		}, this.fromBufferGeometry(new fi(t, e, i, n, r, a, o, s)), this.mergeVertices()
	}

	function fi(t, e, n, r, a, o, s, h) {
		function l(n) {
			var a, o, l, v = new i,
				_ = new c,
				b = 0,
				w = !0 === n ? t : e,
				M = !0 === n ? 1 : -1;
			for (o = g, a = 1; a <= r; a++) {
				p.push(0, y * M, 0), f.push(0, M, 0), m.push(0.5, 0.5), g++
			}
			for (l = g, a = 0; a <= r; a++) {
				var E = a / r * h + s,
					T = Math.cos(E),
					S = Math.sin(E);
				_.x = w * S, _.y = y * M, _.z = w * T, p.push(_.x, _.y, _.z), f.push(0, M, 0), v.x = 0.5 * T + 0.5, v.y = 0.5 * S * M + 0.5, m.push(v.x, v.y), g++
			}
			for (a = 0; a < r; a++) {
				var A = o + a,
					R = l + a;
				!0 === n ? d.push(R, R + 1, A) : d.push(R + 1, R, A), b += 3
			}
			u.addGroup(x, b, !0 === n ? 1 : 2), x += b
		}
		At.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
			radiusTop: t,
			radiusBottom: e,
			height: n,
			radialSegments: r,
			heightSegments: a,
			openEnded: o,
			thetaStart: s,
			thetaLength: h
		};
		var u = this;
		t = void 0 !== t ? t : 20, e = void 0 !== e ? e : 20, n = void 0 !== n ? n : 100, r = Math.floor(r) || 8, a = Math.floor(a) || 1, o = void 0 !== o && o, s = void 0 !== s ? s : 0, h = void 0 !== h ? h : 2 * Math.PI;
		var d = [],
			p = [],
			f = [],
			m = [],
			g = 0,
			v = [],
			y = n / 2,
			x = 0;
		! function() {
			var i, o, l = new c,
				_ = new c,
				b = 0,
				w = (e - t) / n;
			for (o = 0; o <= a; o++) {
				var M = [],
					E = o / a,
					T = E * (e - t) + t;
				for (i = 0; i <= r; i++) {
					var S = i / r,
						A = S * h + s,
						R = Math.sin(A),
						L = Math.cos(A);
					_.x = T * R, _.y = -E * n + y, _.z = T * L, p.push(_.x, _.y, _.z), l.set(R, w, L).normalize(), f.push(l.x, l.y, l.z), m.push(S, 1 - E), M.push(g++)
				}
				v.push(M)
			}
			for (i = 0; i < r; i++) {
				for (o = 0; o < a; o++) {
					var P = v[o][i],
						C = v[o + 1][i],
						I = v[o + 1][i + 1],
						U = v[o][i + 1];
					d.push(P, C, U), d.push(C, I, U), b += 6
				}
			}
			u.addGroup(x, b, 0), x += b
		}(), !1 === o && (t > 0 && l(!0), e > 0 && l(!1)), this.setIndex(d), this.addAttribute("position", new bt(p, 3)), this.addAttribute("normal", new bt(f, 3)), this.addAttribute("uv", new bt(m, 2))
	}

	function mi(t, e, i, n, r, a, o) {
		pi.call(this, 0, t, e, i, n, r, a, o), this.type = "ConeGeometry", this.parameters = {
			radius: t,
			height: e,
			radialSegments: i,
			heightSegments: n,
			openEnded: r,
			thetaStart: a,
			thetaLength: o
		}
	}

	function gi(t, e, i, n, r, a, o) {
		fi.call(this, 0, t, e, i, n, r, a, o), this.type = "ConeBufferGeometry", this.parameters = {
			radius: t,
			height: e,
			radialSegments: i,
			heightSegments: n,
			openEnded: r,
			thetaStart: a,
			thetaLength: o
		}
	}

	function vi(t, e, i, n) {
		St.call(this), this.type = "CircleGeometry", this.parameters = {
			radius: t,
			segments: e,
			thetaStart: i,
			thetaLength: n
		}, this.fromBufferGeometry(new yi(t, e, i, n)), this.mergeVertices()
	}

	function yi(t, e, n, r) {
		At.call(this), this.type = "CircleBufferGeometry", this.parameters = {
			radius: t,
			segments: e,
			thetaStart: n,
			thetaLength: r
		}, t = t || 50, e = void 0 !== e ? Math.max(3, e) : 8, n = void 0 !== n ? n : 0, r = void 0 !== r ? r : 2 * Math.PI;
		var a, o, s = [],
			h = [],
			l = [],
			u = [],
			d = new c,
			p = new i;
		for (h.push(0, 0, 0), l.push(0, 0, 1), u.push(0.5, 0.5), o = 0, a = 3; o <= e; o++, a += 3) {
			var f = n + o / e * r;
			d.x = t * Math.cos(f), d.y = t * Math.sin(f), h.push(d.x, d.y, d.z), l.push(0, 0, 1), p.x = (h[a] / t + 1) / 2, p.y = (h[a + 1] / t + 1) / 2, u.push(p.x, p.y)
		}
		for (a = 1; a <= e; a++) {
			s.push(a, a + 1, 0)
		}
		this.setIndex(s), this.addAttribute("position", new bt(h, 3)), this.addAttribute("normal", new bt(l, 3)), this.addAttribute("uv", new bt(u, 2))
	}

	function xi(t) {
		Q.call(this, {
			uniforms: qo.merge([Xo.lights, {
				opacity: {
					value: 1
				}
			}]),
			vertexShader: Yo.shadow_vert,
			fragmentShader: Yo.shadow_frag
		}), this.lights = !0, this.transparent = !0, Object.defineProperties(this, {
			opacity: {
				enumerable: !0,
				get: function() {
					return this.uniforms.opacity.value
				},
				set: function(t) {
					this.uniforms.opacity.value = t
				}
			}
		}), this.setValues(t)
	}

	function _i(t) {
		Q.call(this, t), this.type = "RawShaderMaterial"
	}

	function bi(t) {
		J.call(this), this.defines = {
			STANDARD: ""
		}, this.type = "MeshStandardMaterial", this.color = new X(16777215), this.roughness = 0.5, this.metalness = 0.5, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new X(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new i(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapIntensity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
	}

	function wi(t) {
		bi.call(this), this.defines = {
			PHYSICAL: ""
		}, this.type = "MeshPhysicalMaterial", this.reflectivity = 0.5, this.clearCoat = 0, this.clearCoatRoughness = 0, this.setValues(t)
	}

	function Mi(t) {
		J.call(this), this.type = "MeshPhongMaterial", this.color = new X(16777215), this.specular = new X(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new X(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new i(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = wa, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
	}

	function Ei(t) {
		Mi.call(this), this.defines = {
			TOON: ""
		}, this.type = "MeshToonMaterial", this.gradientMap = null, this.setValues(t)
	}

	function Ti(t) {
		J.call(this, t), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new i(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
	}

	function Si(t) {
		J.call(this), this.type = "MeshLambertMaterial", this.color = new X(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new X(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = wa, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.skinning = !1, this.morphTargets = !1, this.morphNormals = !1, this.setValues(t)
	}

	function Ai(t) {
		J.call(this), this.type = "LineDashedMaterial", this.color = new X(16777215), this.linewidth = 1, this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.lights = !1, this.setValues(t)
	}

	function Ri(t, e, i) {
		var n = this,
			r = !1,
			a = 0,
			o = 0;
		this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = i, this.itemStart = function(t) {
			o++, !1 === r && void 0 !== n.onStart && n.onStart(t, a, o), r = !0
		}, this.itemEnd = function(t) {
			a++, void 0 !== n.onProgress && n.onProgress(t, a, o), a === o && (r = !1, void 0 !== n.onLoad && n.onLoad())
		}, this.itemError = function(t) {
			void 0 !== n.onError && n.onError(t)
		}
	}

	function Li(t) {
		this.manager = void 0 !== t ? t : rs
	}

	function Pi(t) {
		this.manager = void 0 !== t ? t : rs, this._parser = null
	}

	function Ci(t) {
		this.manager = void 0 !== t ? t : rs, this._parser = null
	}

	function Ii(t) {
		this.manager = void 0 !== t ? t : rs
	}

	function Ui(t) {
		this.manager = void 0 !== t ? t : rs
	}

	function Ni(t) {
		this.manager = void 0 !== t ? t : rs
	}

	function Oi(t, e) {
		ct.call(this), this.type = "Light", this.color = new X(t), this.intensity = void 0 !== e ? e : 1, this.receiveShadow = void 0
	}

	function Di(t, e, i) {
		Oi.call(this, t, i), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(ct.DefaultUp), this.updateMatrix(), this.groundColor = new X(e)
	}

	function Fi(t) {
		this.camera = t, this.bias = 0, this.radius = 1, this.mapSize = new i(512, 512), this.map = null, this.matrix = new h
	}

	function Bi() {
		Fi.call(this, new Nt(50, 1, 0.5, 500))
	}

	function zi(t, e, i, n, r, a) {
		Oi.call(this, t, e), this.type = "SpotLight", this.position.copy(ct.DefaultUp), this.updateMatrix(), this.target = new ct, Object.defineProperty(this, "power", {
			get: function() {
				return this.intensity * Math.PI
			},
			set: function(t) {
				this.intensity = t / Math.PI
			}
		}), this.distance = void 0 !== i ? i : 0, this.angle = void 0 !== n ? n : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== a ? a : 1, this.shadow = new Bi
	}

	function Gi(t, e, i, n) {
		Oi.call(this, t, e), this.type = "PointLight", Object.defineProperty(this, "power", {
			get: function() {
				return 4 * this.intensity * Math.PI
			},
			set: function(t) {
				this.intensity = t / (4 * Math.PI)
			}
		}), this.distance = void 0 !== i ? i : 0, this.decay = void 0 !== n ? n : 1, this.shadow = new Fi(new Nt(90, 1, 0.5, 500))
	}

	function Hi() {
		Fi.call(this, new Ot(-5, 5, 5, -5, 0.5, 500))
	}

	function Vi(t, e) {
		Oi.call(this, t, e), this.type = "DirectionalLight", this.position.copy(ct.DefaultUp), this.updateMatrix(), this.target = new ct, this.shadow = new Hi
	}

	function ki(t, e) {
		Oi.call(this, t, e), this.type = "AmbientLight", this.castShadow = void 0
	}

	function ji(t, e, i, n) {
		Oi.call(this, t, e), this.type = "RectAreaLight", this.position.set(0, 1, 0), this.updateMatrix(), this.width = void 0 !== i ? i : 10, this.height = void 0 !== n ? n : 10
	}

	function Wi(t, e, i, n) {
		this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== n ? n : new e.constructor(i), this.sampleValues = e, this.valueSize = i
	}

	function Xi(t, e, i, n) {
		Wi.call(this, t, e, i, n), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0
	}

	function qi(t, e, i, n) {
		Wi.call(this, t, e, i, n)
	}

	function Yi(t, e, i, n) {
		Wi.call(this, t, e, i, n)
	}

	function Zi(t, e, i, n) {
		if (void 0 === t) {
			throw new Error("track name is undefined")
		}
		if (void 0 === e || 0 === e.length) {
			throw new Error("no keyframes in track named " + t)
		}
		this.name = t, this.times = as.convertArray(e, this.TimeBufferType), this.values = as.convertArray(i, this.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation), this.validate(), this.optimize()
	}

	function Ji(t, e, i, n) {
		Zi.call(this, t, e, i, n)
	}

	function Qi(t, e, i, n) {
		Wi.call(this, t, e, i, n)
	}

	function Ki(t, e, i, n) {
		Zi.call(this, t, e, i, n)
	}

	function $i(t, e, i, n) {
		Zi.call(this, t, e, i, n)
	}

	function tn(t, e, i, n) {
		Zi.call(this, t, e, i, n)
	}

	function en(t, e, i) {
		Zi.call(this, t, e, i)
	}

	function nn(t, e, i, n) {
		Zi.call(this, t, e, i, n)
	}

	function rn(t, e, i, n) {
		Zi.apply(this, arguments)
	}

	function an(t, e, i) {
		this.name = t, this.tracks = i, this.duration = void 0 !== e ? e : -1, this.uuid = Do.generateUUID(), this.duration < 0 && this.resetDuration(), this.optimize()
	}

	function on(t) {
		this.manager = void 0 !== t ? t : rs, this.textures = {}
	}

	function sn(t) {
		this.manager = void 0 !== t ? t : rs
	}

	function cn() {
		this.onLoadStart = function() {}, this.onLoadProgress = function() {}, this.onLoadComplete = function() {}
	}

	function hn(t) {
		"boolean" == typeof t && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), t = void 0), this.manager = void 0 !== t ? t : rs, this.withCredentials = !1
	}

	function ln(t) {
		this.manager = void 0 !== t ? t : rs, this.texturePath = ""
	}

	function un(t, e, i, n, r) {
		var a = 0.5 * (n - e),
			o = 0.5 * (r - i),
			s = t * t;
		return (2 * i - 2 * n + a + o) * (t * s) + (-3 * i + 3 * n - 2 * a - o) * s + a * t + i
	}

	function dn(t, e) {
		var i = 1 - t;
		return i * i * e
	}

	function pn(t, e) {
		return 2 * (1 - t) * t * e
	}

	function fn(t, e) {
		return t * t * e
	}

	function mn(t, e, i, n) {
		return dn(t, e) + pn(t, i) + fn(t, n)
	}

	function gn(t, e) {
		var i = 1 - t;
		return i * i * i * e
	}

	function vn(t, e) {
		var i = 1 - t;
		return 3 * i * i * t * e
	}

	function yn(t, e) {
		return 3 * (1 - t) * t * t * e
	}

	function xn(t, e) {
		return t * t * t * e
	}

	function _n(t, e, i, n, r) {
		return gn(t, e) + vn(t, i) + yn(t, n) + xn(t, r)
	}

	function bn() {
		this.arcLengthDivisions = 200
	}

	function wn(t, e) {
		bn.call(this), this.v1 = t, this.v2 = e
	}

	function Mn() {
		bn.call(this), this.curves = [], this.autoClose = !1
	}

	function En(t, e, i, n, r, a, o, s) {
		bn.call(this), this.aX = t, this.aY = e, this.xRadius = i, this.yRadius = n, this.aStartAngle = r, this.aEndAngle = a, this.aClockwise = o, this.aRotation = s || 0
	}

	function Tn(t) {
		bn.call(this), this.points = void 0 === t ? [] : t
	}

	function Sn(t, e, i, n) {
		bn.call(this), this.v0 = t, this.v1 = e, this.v2 = i, this.v3 = n
	}

	function An(t, e, i) {
		bn.call(this), this.v0 = t, this.v1 = e, this.v2 = i
	}

	function Rn(t) {
		Mn.call(this), this.currentPoint = new i, t && this.fromPoints(t)
	}

	function Ln() {
		Rn.apply(this, arguments), this.holes = []
	}

	function Pn() {
		this.subPaths = [], this.currentPath = null
	}

	function Cn(t) {
		this.data = t
	}

	function In(t) {
		this.manager = void 0 !== t ? t : rs
	}

	function Un(t) {
		this.manager = void 0 !== t ? t : rs
	}

	function Nn() {
		this.type = "StereoCamera", this.aspect = 1, this.eyeSep = 0.064, this.cameraL = new Nt, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new Nt, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1
	}

	function On(t, e, i) {
		ct.call(this), this.type = "CubeCamera";
		var n = new Nt(90, 1, t, e);
		n.up.set(0, -1, 0), n.lookAt(new c(1, 0, 0)), this.add(n);
		var r = new Nt(90, 1, t, e);
		r.up.set(0, -1, 0), r.lookAt(new c(-1, 0, 0)), this.add(r);
		var a = new Nt(90, 1, t, e);
		a.up.set(0, 0, 1), a.lookAt(new c(0, 1, 0)), this.add(a);
		var s = new Nt(90, 1, t, e);
		s.up.set(0, 0, -1), s.lookAt(new c(0, -1, 0)), this.add(s);
		var h = new Nt(90, 1, t, e);
		h.up.set(0, -1, 0), h.lookAt(new c(0, 0, 1)), this.add(h);
		var l = new Nt(90, 1, t, e);
		l.up.set(0, -1, 0), l.lookAt(new c(0, 0, -1)), this.add(l);
		var u = {
			format: ao,
			magFilter: ka,
			minFilter: ka
		};
		this.renderTarget = new o(i, i, u), this.renderTarget.texture.name = "CubeCamera", this.updateCubeMap = function(t, e) {
			null === this.parent && this.updateMatrixWorld();
			var i = this.renderTarget,
				o = i.texture.generateMipmaps;
			i.texture.generateMipmaps = !1, i.activeCubeFace = 0, t.render(e, n, i), i.activeCubeFace = 1, t.render(e, r, i), i.activeCubeFace = 2, t.render(e, a, i), i.activeCubeFace = 3, t.render(e, s, i), i.activeCubeFace = 4, t.render(e, h, i), i.texture.generateMipmaps = o, i.activeCubeFace = 5, t.render(e, l, i), t.setRenderTarget(null)
		}
	}

	function Dn(t) {
		Nt.call(this), this.enabled = !1, this.cameras = t || []
	}

	function Fn() {
		ct.call(this), this.type = "AudioListener", this.context = ps.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null
	}

	function Bn(t) {
		ct.call(this), this.type = "Audio", this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.loop = !1, this.startTime = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this.filters = []
	}

	function zn(t) {
		Bn.call(this, t), this.panner = this.context.createPanner(), this.panner.connect(this.gain)
	}

	function Gn(t, e) {
		this.analyser = t.context.createAnalyser(), this.analyser.fftSize = void 0 !== e ? e : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser)
	}

	function Hn(t, e, i) {
		this.binding = t, this.valueSize = i;
		var n, r = Float64Array;
		switch (e) {
			case "quaternion":
				n = this._slerp;
				break;
			case "string":
			case "bool":
				r = Array, n = this._select;
				break;
			default:
				n = this._lerp
		}
		this.buffer = new r(4 * i), this._mixBufferRegion = n, this.cumulativeWeight = 0, this.useCount = 0, this.referenceCount = 0
	}

	function Vn(t, e, i) {
		var n = i || kn.parseTrackName(e);
		this._targetGroup = t, this._bindings = t.subscribe_(e, n)
	}

	function kn(t, e, i) {
		this.path = e, this.parsedPath = i || kn.parseTrackName(e), this.node = kn.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t
	}

	function jn(t) {
		this.uuid = Do.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
		var e = {};
		this._indicesByUUID = e;
		for (var i = 0, n = arguments.length; i !== n; ++i) {
			e[arguments[i].uuid] = i
		}
		this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
		var r = this;
		this.stats = {
			objects: {
				get totalfunction() {
					return r._objects.length
				},
				get inUsefunction() {
					return this.total - r.nCachedObjects_
				}
			},
			get bindingsPerObjectfunction() {
				return r._bindings.length
			}
		}
	}

	function Wn(t, e, i) {
		this._mixer = t, this._clip = e, this._localRoot = i || null;
		for (var n = e.tracks, r = n.length, a = new Array(r), o = {
				endingStart: Mo,
				endingEnd: Mo
			}, s = 0; s !== r; ++s) {
			var c = n[s].createInterpolant(null);
			a[s] = c, c.settings = o
		}
		this._interpolantSettings = o, this._interpolants = a, this._propertyBindings = new Array(r), this._cacheIndex = null, this._byClipCacheIndex = null, this._timeScaleInterpolant = null, this._weightInterpolant = null, this.loop = wo, this._loopCount = -1, this._startTime = null, this.time = 0, this.timeScale = 1, this._effectiveTimeScale = 1, this.weight = 1, this._effectiveWeight = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtStart = !0, this.zeroSlopeAtEnd = !0
	}

	function Xn(t) {
		this._root = t, this._initMemoryManager(), this._accuIndex = 0, this.time = 0, this.timeScale = 1
	}

	function qn(t) {
		"string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = arguments[1]), this.value = t
	}

	function Yn() {
		At.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
	}

	function Zn(t, e, i, n) {
		this.uuid = Do.generateUUID(), this.data = t, this.itemSize = e, this.offset = i, this.normalized = !0 === n
	}

	function Jn(t, e) {
		this.uuid = Do.generateUUID(), this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.dynamic = !1, this.updateRange = {
			offset: 0,
			count: -1
		}, this.onUploadCallback = function() {}, this.version = 0
	}

	function Qn(t, e, i) {
		Jn.call(this, t, e), this.meshPerAttribute = i || 1
	}

	function Kn(t, e, i) {
		pt.call(this, t, e), this.meshPerAttribute = i || 1
	}

	function $n(t, e, i, n) {
		this.ray = new at(t, e), this.near = i || 0, this.far = n || 1 / 0, this.params = {
			Mesh: {},
			Line: {},
			LOD: {},
			Points: {
				threshold: 1
			},
			Sprite: {}
		}, Object.defineProperties(this.params, {
			PointCloud: {
				get: function() {
					return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
				}
			}
		})
	}

	function tr(t, e) {
		return t.distance - e.distance
	}

	function er(t, e, i, n) {
		if (!1 !== t.visible && (t.raycast(e, i), !0 === n)) {
			for (var r = t.children, a = 0, o = r.length; a < o; a++) {
				er(r[a], e, i, !0)
			}
		}
	}

	function ir(t) {
		this.autoStart = void 0 === t || t, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1
	}

	function nr(t, e, i) {
		return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== i ? i : 0, this
	}

	function rr(t, e, i) {
		return this.radius = void 0 !== t ? t : 1, this.theta = void 0 !== e ? e : 0, this.y = void 0 !== i ? i : 0, this
	}

	function ar(t, e) {
		Rt.call(this, t, e), this.animationsMap = {}, this.animationsList = [];
		var i = this.geometry.morphTargets.length,
			n = i - 1,
			r = i / 1;
		this.createAnimation("__default", 0, n, r), this.setAnimationWeight("__default", 1)
	}

	function or(t) {
		ct.call(this), this.material = t, this.render = function(t) {}
	}

	function sr(t, e, i, n) {
		this.object = t, this.size = void 0 !== e ? e : 1;
		var r = void 0 !== i ? i : 16711680,
			a = void 0 !== n ? n : 1,
			o = 0,
			s = this.object.geometry;
		s && s.isGeometry ? o = 3 * s.faces.length : s && s.isBufferGeometry && (o = s.attributes.normal.count);
		var c = new At,
			h = new bt(2 * o * 3, 3);
		c.addAttribute("position", h), Se.call(this, c, new Ee({
			color: r,
			linewidth: a
		})), this.matrixAutoUpdate = !1, this.update()
	}

	function cr(t) {
		ct.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1;
		for (var e = new At, i = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], n = 0, r = 1; n < 32; n++, r++) {
			var a = n / 32 * Math.PI * 2,
				o = r / 32 * Math.PI * 2;
			i.push(Math.cos(a), Math.sin(a), 1, Math.cos(o), Math.sin(o), 1)
		}
		e.addAttribute("position", new bt(i, 3));
		var s = new Ee({
			fog: !1
		});
		this.cone = new Se(e, s), this.add(this.cone), this.update()
	}

	function hr(t) {
		this.bones = this.getBoneList(t);
		for (var e = new At, i = [], n = [], r = new X(0, 0, 1), a = new X(0, 1, 0), o = 0; o < this.bones.length; o++) {
			var s = this.bones[o];
			s.parent && s.parent.isBone && (i.push(0, 0, 0), i.push(0, 0, 0), n.push(r.r, r.g, r.b), n.push(a.r, a.g, a.b))
		}
		e.addAttribute("position", new bt(i, 3)), e.addAttribute("color", new bt(n, 3));
		var c = new Ee({
			vertexColors: Wr,
			depthTest: !1,
			depthWrite: !1,
			transparent: !0
		});
		Se.call(this, e, c), this.root = t, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.update()
	}

	function lr(t, e) {
		this.light = t, this.light.updateMatrixWorld();
		var i = new ai(e, 4, 2),
			n = new dt({
				wireframe: !0,
				fog: !1
			});
		n.color.copy(this.light.color), Rt.call(this, i, n), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1
	}

	function ur(t) {
		ct.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1;
		var e = new Ee({
				color: t.color
			}),
			i = new At;
		i.addAttribute("position", new pt(new Float32Array(15), 3)), this.add(new Te(i, e)), this.update()
	}

	function dr(t, e) {
		ct.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1;
		var i = new ke(e);
		i.rotateY(0.5 * Math.PI);
		var n = new dt({
				vertexColors: Wr,
				wireframe: !0
			}),
			r = i.getAttribute("position"),
			a = new Float32Array(3 * r.count);
		i.addAttribute("color", new pt(a, 3)), this.add(new Rt(i, n)), this.update()
	}

	function pr(t, e, i, n) {
		t = t || 10, e = e || 10, i = new X(void 0 !== i ? i : 4473924), n = new X(void 0 !== n ? n : 8947848);
		for (var r = e / 2, a = t / e, o = t / 2, s = [], c = [], h = 0, l = 0, u = -o; h <= e; h++, u += a) {
			s.push(-o, 0, u, o, 0, u), s.push(u, 0, -o, u, 0, o);
			var d = h === r ? i : n;
			d.toArray(c, l), l += 3, d.toArray(c, l), l += 3, d.toArray(c, l), l += 3, d.toArray(c, l), l += 3
		}
		var p = new At;
		p.addAttribute("position", new bt(s, 3)), p.addAttribute("color", new bt(c, 3));
		var f = new Ee({
			vertexColors: Wr
		});
		Se.call(this, p, f)
	}

	function fr(t, e, i, n, r, a) {
		t = t || 10, e = e || 16, i = i || 8, n = n || 64, r = new X(void 0 !== r ? r : 4473924), a = new X(void 0 !== a ? a : 8947848);
		var o, s, c, h, l, u, d, p = [],
			f = [];
		for (h = 0; h <= e; h++) {
			c = h / e * (2 * Math.PI), o = Math.sin(c) * t, s = Math.cos(c) * t, p.push(0, 0, 0), p.push(o, 0, s), d = 1 & h ? r : a, f.push(d.r, d.g, d.b), f.push(d.r, d.g, d.b)
		}
		for (h = 0; h <= i; h++) {
			for (d = 1 & h ? r : a, u = t - t / i * h, l = 0; l < n; l++) {
				c = l / n * (2 * Math.PI), o = Math.sin(c) * u, s = Math.cos(c) * u, p.push(o, 0, s), f.push(d.r, d.g, d.b), c = (l + 1) / n * (2 * Math.PI), o = Math.sin(c) * u, s = Math.cos(c) * u, p.push(o, 0, s), f.push(d.r, d.g, d.b)
			}
		}
		var m = new At;
		m.addAttribute("position", new bt(p, 3)), m.addAttribute("color", new bt(f, 3));
		var g = new Ee({
			vertexColors: Wr
		});
		Se.call(this, m, g)
	}

	function mr(t, e, i, n) {
		this.object = t, this.size = void 0 !== e ? e : 1;
		var r = void 0 !== i ? i : 16776960,
			a = void 0 !== n ? n : 1,
			o = 0,
			s = this.object.geometry;
		s && s.isGeometry ? o = s.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
		var c = new At,
			h = new bt(2 * o * 3, 3);
		c.addAttribute("position", h), Se.call(this, c, new Ee({
			color: r,
			linewidth: a
		})), this.matrixAutoUpdate = !1, this.update()
	}

	function gr(t, e) {
		ct.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, void 0 === e && (e = 1);
		var i = new At;
		i.addAttribute("position", new bt([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3));
		var n = new Ee({
			fog: !1
		});
		this.add(new Te(i, n)), (i = new At).addAttribute("position", new bt([0, 0, 0, 0, 0, 1], 3)), this.add(new Te(i, n)), this.update()
	}

	function vr(t) {
		function e(t, e, n) {
			i(t, n), i(e, n)
		}

		function i(t, e) {
			a.push(0, 0, 0), o.push(e.r, e.g, e.b), void 0 === s[t] && (s[t] = []), s[t].push(a.length / 3 - 1)
		}
		var n = new At,
			r = new Ee({
				color: 16777215,
				vertexColors: jr
			}),
			a = [],
			o = [],
			s = {},
			c = new X(16755200),
			h = new X(16711680),
			l = new X(43775),
			u = new X(16777215),
			d = new X(3355443);
		e("n1", "n2", c), e("n2", "n4", c), e("n4", "n3", c), e("n3", "n1", c), e("f1", "f2", c), e("f2", "f4", c), e("f4", "f3", c), e("f3", "f1", c), e("n1", "f1", c), e("n2", "f2", c), e("n3", "f3", c), e("n4", "f4", c), e("p", "n1", h), e("p", "n2", h), e("p", "n3", h), e("p", "n4", h), e("u1", "u2", l), e("u2", "u3", l), e("u3", "u1", l), e("c", "t", u), e("p", "c", d), e("cn1", "cn2", d), e("cn3", "cn4", d), e("cf1", "cf2", d), e("cf3", "cf4", d), n.addAttribute("position", new bt(a, 3)), n.addAttribute("color", new bt(o, 3)), Se.call(this, n, r), this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = s, this.update()
	}

	function yr(t, e) {
		this.object = t, void 0 === e && (e = 16776960);
		var i = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
			n = new Float32Array(24),
			r = new At;
		r.setIndex(new pt(i, 1)), r.addAttribute("position", new pt(n, 3)), Se.call(this, r, new Ee({
			color: e
		})), this.matrixAutoUpdate = !1, this.update()
	}

	function xr(t, e, i, n, r, a) {
		ct.call(this), void 0 === n && (n = 16776960), void 0 === i && (i = 1), void 0 === r && (r = 0.2 * i), void 0 === a && (a = 0.2 * r), void 0 === fs && ((fs = new At).addAttribute("position", new bt([0, 0, 0, 0, 1, 0], 3)), (ms = new fi(0, 0.5, 1, 5, 1)).translate(0, -0.5, 0)), this.position.copy(e), this.line = new Te(fs, new Ee({
			color: n
		})), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new Rt(ms, new dt({
			color: n
		})), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(i, r, a)
	}

	function _r(t) {
		var e = [0, 0, 0, t = t || 1, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t],
			i = [1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1],
			n = new At;
		n.addAttribute("position", new bt(e, 3)), n.addAttribute("color", new bt(i, 3));
		var r = new Ee({
			vertexColors: Wr
		});
		Se.call(this, n, r)
	}

	function br() {
		function t(t, a, o, s) {
			e = t, i = o, n = -3 * t + 3 * a - 2 * o - s, r = 2 * t - 2 * a + o + s
		}
		var e = 0,
			i = 0,
			n = 0,
			r = 0;
		return {
			initCatmullRom: function(e, i, n, r, a) {
				t(i, n, a * (n - e), a * (r - i))
			},
			initNonuniformCatmullRom: function(e, i, n, r, a, o, s) {
				var c = (i - e) / a - (n - e) / (a + o) + (n - i) / o,
					h = (n - i) / o - (r - i) / (o + s) + (r - n) / s;
				t(i, n, c *= o, h *= o)
			},
			calc: function(t) {
				var a = t * t;
				return e + i * t + n * a + r * (a * t)
			}
		}
	}

	function wr(t) {
		bn.call(this), t.length < 2 && console.warn("THREE.CatmullRomCurve3: Points array needs at least two entries."), this.points = t || [], this.closed = !1
	}

	function Mr(t, e, i, n) {
		bn.call(this), this.v0 = t, this.v1 = e, this.v2 = i, this.v3 = n
	}

	function Er(t, e, i) {
		bn.call(this), this.v0 = t, this.v1 = e, this.v2 = i
	}

	function Tr(t, e) {
		bn.call(this), this.v1 = t, this.v2 = e
	}

	function Sr(t, e, i, n, r, a) {
		En.call(this, t, e, i, i, n, r, a)
	}

	function Ar(t) {
		console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), wr.call(this, t), this.type = "catmullrom", this.closed = !0
	}

	function Rr(t) {
		console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), wr.call(this, t), this.type = "catmullrom"
	}

	function Lr(t) {
		console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), wr.call(this, t), this.type = "catmullrom"
	}
	void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function(t) {
		return "number" == typeof t && isFinite(t) && Math.floor(t) === t
	}), void 0 === Math.sign && (Math.sign = function(t) {
		return t < 0 ? -1 : t > 0 ? 1 : +t
	}), void 0 === Function.prototype.name && Object.defineProperty(Function.prototype, "name", {
		get: function() {
			return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
		}
	}), void 0 === Object.assign && (Object.assign = function(t) {
		if (void 0 === t || null === t) {
			throw new TypeError("Cannot convert undefined or null to object")
		}
		for (var e = Object(t), i = 1; i < arguments.length; i++) {
			var n = arguments[i];
			if (void 0 !== n && null !== n) {
				for (var r in n) {
					Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
				}
			}
		}
		return e
	}), Object.assign(e.prototype, {
		addEventListener: function(t, e) {
			void 0 === this._listeners && (this._listeners = {});
			var i = this._listeners;
			void 0 === i[t] && (i[t] = []), -1 === i[t].indexOf(e) && i[t].push(e)
		},
		hasEventListener: function(t, e) {
			if (void 0 === this._listeners) {
				return !1
			}
			var i = this._listeners;
			return void 0 !== i[t] && -1 !== i[t].indexOf(e)
		},
		removeEventListener: function(t, e) {
			if (void 0 !== this._listeners) {
				var i = this._listeners[t];
				if (void 0 !== i) {
					var n = i.indexOf(e); - 1 !== n && i.splice(n, 1)
				}
			}
		},
		dispatchEvent: function(t) {
			if (void 0 !== this._listeners) {
				var e = this._listeners[t.type];
				if (void 0 !== e) {
					t.target = this;
					var i = [],
						n = 0,
						r = e.length;
					for (n = 0; n < r; n++) {
						i[n] = e[n]
					}
					for (n = 0; n < r; n++) {
						i[n].call(this, t)
					}
				}
			}
		}
	});
	var Pr = "86dev",
		Cr = {
			LEFT: 0,
			MIDDLE: 1,
			RIGHT: 2
		},
		Ir = 0,
		Ur = 1,
		Nr = 2,
		Or = 0,
		Dr = 1,
		Fr = 2,
		Br = 0,
		zr = 1,
		Gr = 2,
		Hr = 1,
		Vr = 2,
		kr = 0,
		jr = 1,
		Wr = 2,
		Xr = 0,
		qr = 1,
		Yr = 2,
		Zr = 3,
		Jr = 4,
		Qr = 5,
		Kr = 100,
		$r = 101,
		ta = 102,
		ea = 103,
		ia = 104,
		na = 200,
		ra = 201,
		aa = 202,
		oa = 203,
		sa = 204,
		ca = 205,
		ha = 206,
		la = 207,
		ua = 208,
		da = 209,
		pa = 210,
		fa = 0,
		ma = 1,
		ga = 2,
		va = 3,
		ya = 4,
		xa = 5,
		_a = 6,
		ba = 7,
		wa = 0,
		Ma = 1,
		Ea = 2,
		Ta = 0,
		Sa = 1,
		Aa = 2,
		Ra = 3,
		La = 4,
		Pa = 301,
		Ca = 302,
		Ia = 303,
		Ua = 304,
		Na = 305,
		Oa = 306,
		Da = 307,
		Fa = 1000,
		Ba = 1001,
		za = 1002,
		Ga = 1003,
		Ha = 1004,
		Va = 1005,
		ka = 1006,
		ja = 1007,
		Wa = 1008,
		Xa = 1009,
		qa = 1010,
		Ya = 1011,
		Za = 1012,
		Ja = 1013,
		Qa = 1014,
		Ka = 1015,
		$a = 1016,
		to = 1017,
		eo = 1018,
		io = 1019,
		no = 1020,
		ro = 1021,
		ao = 1022,
		oo = 1023,
		so = 1024,
		co = 1025,
		ho = oo,
		lo = 1026,
		uo = 1027,
		po = 2001,
		fo = 2002,
		mo = 2003,
		go = 2004,
		vo = 2100,
		yo = 2101,
		xo = 2102,
		_o = 2103,
		bo = 2151,
		wo = 2201,
		Mo = 2400,
		Eo = 0,
		To = 1,
		So = 2,
		Ao = 3000,
		Ro = 3001,
		Lo = 3007,
		Po = 3002,
		Co = 3004,
		Io = 3005,
		Uo = 3006,
		No = 3200,
		Oo = 3201,
		Do = {
			DEG2RAD: Math.PI / 180,
			RAD2DEG: 180 / Math.PI,
			generateUUID: function() {
				var t, e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
					i = new Array(36),
					n = 0;
				return function() {
					for (var r = 0; r < 36; r++) {
						8 === r || 13 === r || 18 === r || 23 === r ? i[r] = "-" : 14 === r ? i[r] = "4" : (n <= 2 && (n = 33554432 + 16777216 * Math.random() | 0), t = 15 & n, n >>= 4, i[r] = e[19 === r ? 3 & t | 8 : t])
					}
					return i.join("")
				}
			}(),
			clamp: function(t, e, i) {
				return Math.max(e, Math.min(i, t))
			},
			euclideanModulo: function(t, e) {
				return (t % e + e) % e
			},
			mapLinear: function(t, e, i, n, r) {
				return n + (t - e) * (r - n) / (i - e)
			},
			lerp: function(t, e, i) {
				return (1 - i) * t + i * e
			},
			smoothstep: function(t, e, i) {
				return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * (3 - 2 * t)
			},
			smootherstep: function(t, e, i) {
				return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * t * (t * (6 * t - 15) + 10)
			},
			randInt: function(t, e) {
				return t + Math.floor(Math.random() * (e - t + 1))
			},
			randFloat: function(t, e) {
				return t + Math.random() * (e - t)
			},
			randFloatSpread: function(t) {
				return t * (0.5 - Math.random())
			},
			degToRad: function(t) {
				return t * Do.DEG2RAD
			},
			radToDeg: function(t) {
				return t * Do.RAD2DEG
			},
			isPowerOfTwo: function(t) {
				return 0 == (t & t - 1) && 0 !== t
			},
			nearestPowerOfTwo: function(t) {
				return Math.pow(2, Math.round(Math.log(t) / Math.LN2))
			},
			nextPowerOfTwo: function(t) {
				return t--, t |= t >> 1, t |= t >> 2, t |= t >> 4, t |= t >> 8, t |= t >> 16, ++t
			}
		};
	Object.defineProperties(i.prototype, {
		width: {
			get: function() {
				return this.x
			},
			set: function(t) {
				this.x = t
			}
		},
		height: {
			get: function() {
				return this.y
			},
			set: function(t) {
				this.y = t
			}
		}
	}), Object.assign(i.prototype, {
		isVector2: !0,
		set: function(t, e) {
			return this.x = t, this.y = e, this
		},
		setScalar: function(t) {
			return this.x = t, this.y = t, this
		},
		setX: function(t) {
			return this.x = t, this
		},
		setY: function(t) {
			return this.y = t, this
		},
		setComponent: function(t, e) {
			switch (t) {
				case 0:
					this.x = e;
					break;
				case 1:
					this.y = e;
					break;
				default:
					throw new Error("index is out of range: " + t)
			}
			return this
		},
		getComponent: function(t) {
			switch (t) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				default:
					throw new Error("index is out of range: " + t)
			}
		},
		clone: function() {
			return new this.constructor(this.x, this.y)
		},
		copy: function(t) {
			return this.x = t.x, this.y = t.y, this
		},
		add: function(t, e) {
			return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this)
		},
		addScalar: function(t) {
			return this.x += t, this.y += t, this
		},
		addVectors: function(t, e) {
			return this.x = t.x + e.x, this.y = t.y + e.y, this
		},
		addScaledVector: function(t, e) {
			return this.x += t.x * e, this.y += t.y * e, this
		},
		sub: function(t, e) {
			return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this)
		},
		subScalar: function(t) {
			return this.x -= t, this.y -= t, this
		},
		subVectors: function(t, e) {
			return this.x = t.x - e.x, this.y = t.y - e.y, this
		},
		multiply: function(t) {
			return this.x *= t.x, this.y *= t.y, this
		},
		multiplyScalar: function(t) {
			return this.x *= t, this.y *= t, this
		},
		divide: function(t) {
			return this.x /= t.x, this.y /= t.y, this
		},
		divideScalar: function(t) {
			return this.multiplyScalar(1 / t)
		},
		min: function(t) {
			return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
		},
		max: function(t) {
			return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
		},
		clamp: function(t, e) {
			return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
		},
		clampScalar: function() {
			var t = new i,
				e = new i;
			return function(i, n) {
				return t.set(i, i), e.set(n, n), this.clamp(t, e)
			}
		}(),
		clampLength: function(t, e) {
			var i = this.length();
			return this.multiplyScalar(Math.max(t, Math.min(e, i)) / i)
		},
		floor: function() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
		},
		ceil: function() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
		},
		round: function() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this
		},
		roundToZero: function() {
			return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this
		},
		negate: function() {
			return this.x = -this.x, this.y = -this.y, this
		},
		dot: function(t) {
			return this.x * t.x + this.y * t.y
		},
		lengthSq: function() {
			return this.x * this.x + this.y * this.y
		},
		length: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y)
		},
		lengthManhattan: function() {
			return Math.abs(this.x) + Math.abs(this.y)
		},
		normalize: function() {
			return this.divideScalar(this.length())
		},
		angle: function() {
			var t = Math.atan2(this.y, this.x);
			return t < 0 && (t += 2 * Math.PI), t
		},
		distanceTo: function(t) {
			return Math.sqrt(this.distanceToSquared(t))
		},
		distanceToSquared: function(t) {
			var e = this.x - t.x,
				i = this.y - t.y;
			return e * e + i * i
		},
		distanceToManhattan: function(t) {
			return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
		},
		setLength: function(t) {
			return this.multiplyScalar(t / this.length())
		},
		lerp: function(t, e) {
			return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
		},
		lerpVectors: function(t, e, i) {
			return this.subVectors(e, t).multiplyScalar(i).add(t)
		},
		equals: function(t) {
			return t.x === this.x && t.y === this.y
		},
		fromArray: function(t, e) {
			return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this
		},
		toArray: function(t, e) {
			return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t
		},
		fromBufferAttribute: function(t, e, i) {
			return void 0 !== i && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this
		},
		rotateAround: function(t, e) {
			var i = Math.cos(e),
				n = Math.sin(e),
				r = this.x - t.x,
				a = this.y - t.y;
			return this.x = r * i - a * n + t.x, this.y = r * n + a * i + t.y, this
		}
	});
	var Fo = 0;
	n.DEFAULT_IMAGE = void 0, n.DEFAULT_MAPPING = 300, Object.defineProperty(n.prototype, "needsUpdate", {
		set: function(t) {
			!0 === t && this.version++
		}
	}), Object.assign(n.prototype, e.prototype, {
		constructor: n,
		isTexture: !0,
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this
		},
		toJSON: function(t) {
			if (void 0 !== t.textures[this.uuid]) {
				return t.textures[this.uuid]
			}
			var e = {
				metadata: {
					version: 4.5,
					type: "Texture",
					generator: "Texture.toJSON"
				},
				uuid: this.uuid,
				name: this.name,
				mapping: this.mapping,
				repeat: [this.repeat.x, this.repeat.y],
				offset: [this.offset.x, this.offset.y],
				wrap: [this.wrapS, this.wrapT],
				minFilter: this.minFilter,
				magFilter: this.magFilter,
				anisotropy: this.anisotropy,
				flipY: this.flipY
			};
			if (void 0 !== this.image) {
				var i = this.image;
				void 0 === i.uuid && (i.uuid = Do.generateUUID()), void 0 === t.images[i.uuid] && (t.images[i.uuid] = {
					uuid: i.uuid,
					url: function(t) {
						var e;
						return void 0 !== t.toDataURL ? e = t : ((e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")).width = t.width, e.height = t.height, e.getContext("2d").drawImage(t, 0, 0, t.width, t.height)), e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", 0.6) : e.toDataURL("image/png")
					}(i)
				}), e.image = i.uuid
			}
			return t.textures[this.uuid] = e, e
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		},
		transformUv: function(t) {
			if (300 === this.mapping) {
				if (t.multiply(this.repeat), t.add(this.offset), t.x < 0 || t.x > 1) {
					switch (this.wrapS) {
						case Fa:
							t.x = t.x - Math.floor(t.x);
							break;
						case Ba:
							t.x = t.x < 0 ? 0 : 1;
							break;
						case za:
							1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
					}
				}
				if (t.y < 0 || t.y > 1) {
					switch (this.wrapT) {
						case Fa:
							t.y = t.y - Math.floor(t.y);
							break;
						case Ba:
							t.y = t.y < 0 ? 0 : 1;
							break;
						case za:
							1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
					}
				}
				this.flipY && (t.y = 1 - t.y)
			}
		}
	}), Object.assign(r.prototype, {
		isVector4: !0,
		set: function(t, e, i, n) {
			return this.x = t, this.y = e, this.z = i, this.w = n, this
		},
		setScalar: function(t) {
			return this.x = t, this.y = t, this.z = t, this.w = t, this
		},
		setX: function(t) {
			return this.x = t, this
		},
		setY: function(t) {
			return this.y = t, this
		},
		setZ: function(t) {
			return this.z = t, this
		},
		setW: function(t) {
			return this.w = t, this
		},
		setComponent: function(t, e) {
			switch (t) {
				case 0:
					this.x = e;
					break;
				case 1:
					this.y = e;
					break;
				case 2:
					this.z = e;
					break;
				case 3:
					this.w = e;
					break;
				default:
					throw new Error("index is out of range: " + t)
			}
			return this
		},
		getComponent: function(t) {
			switch (t) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				case 2:
					return this.z;
				case 3:
					return this.w;
				default:
					throw new Error("index is out of range: " + t)
			}
		},
		clone: function() {
			return new this.constructor(this.x, this.y, this.z, this.w)
		},
		copy: function(t) {
			return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
		},
		add: function(t, e) {
			return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this)
		},
		addScalar: function(t) {
			return this.x += t, this.y += t, this.z += t, this.w += t, this
		},
		addVectors: function(t, e) {
			return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
		},
		addScaledVector: function(t, e) {
			return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
		},
		sub: function(t, e) {
			return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this)
		},
		subScalar: function(t) {
			return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
		},
		subVectors: function(t, e) {
			return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
		},
		multiplyScalar: function(t) {
			return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
		},
		applyMatrix4: function(t) {
			var e = this.x,
				i = this.y,
				n = this.z,
				r = this.w,
				a = t.elements;
			return this.x = a[0] * e + a[4] * i + a[8] * n + a[12] * r, this.y = a[1] * e + a[5] * i + a[9] * n + a[13] * r, this.z = a[2] * e + a[6] * i + a[10] * n + a[14] * r, this.w = a[3] * e + a[7] * i + a[11] * n + a[15] * r, this
		},
		divideScalar: function(t) {
			return this.multiplyScalar(1 / t)
		},
		setAxisAngleFromQuaternion: function(t) {
			this.w = 2 * Math.acos(t.w);
			var e = Math.sqrt(1 - t.w * t.w);
			return e < 0.0001 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
		},
		setAxisAngleFromRotationMatrix: function(t) {
			var e, i, n, r, a = t.elements,
				o = a[0],
				s = a[4],
				c = a[8],
				h = a[1],
				l = a[5],
				u = a[9],
				d = a[2],
				p = a[6],
				f = a[10];
			if (Math.abs(s - h) < 0.01 && Math.abs(c - d) < 0.01 && Math.abs(u - p) < 0.01) {
				if (Math.abs(s + h) < 0.1 && Math.abs(c + d) < 0.1 && Math.abs(u + p) < 0.1 && Math.abs(o + l + f - 3) < 0.1) {
					return this.set(1, 0, 0, 0), this
				}
				e = Math.PI;
				var m = (o + 1) / 2,
					g = (l + 1) / 2,
					v = (f + 1) / 2,
					y = (s + h) / 4,
					x = (c + d) / 4,
					_ = (u + p) / 4;
				return m > g && m > v ? m < 0.01 ? (i = 0, n = 0.707106781, r = 0.707106781) : (n = y / (i = Math.sqrt(m)), r = x / i) : g > v ? g < 0.01 ? (i = 0.707106781, n = 0, r = 0.707106781) : (i = y / (n = Math.sqrt(g)), r = _ / n) : v < 0.01 ? (i = 0.707106781, n = 0.707106781, r = 0) : (i = x / (r = Math.sqrt(v)), n = _ / r), this.set(i, n, r, e), this
			}
			var b = Math.sqrt((p - u) * (p - u) + (c - d) * (c - d) + (h - s) * (h - s));
			return Math.abs(b) < 0.001 && (b = 1), this.x = (p - u) / b, this.y = (c - d) / b, this.z = (h - s) / b, this.w = Math.acos((o + l + f - 1) / 2), this
		},
		min: function(t) {
			return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
		},
		max: function(t) {
			return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
		},
		clamp: function(t, e) {
			return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
		},
		clampScalar: function() {
			var t = new r,
				e = new r;
			return function(i, n) {
				return t.set(i, i, i, i), e.set(n, n, n, n), this.clamp(t, e)
			}
		}(),
		floor: function() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
		},
		ceil: function() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
		},
		round: function() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
		},
		roundToZero: function() {
			return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this
		},
		negate: function() {
			return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
		},
		dot: function(t) {
			return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
		},
		lengthSq: function() {
			return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
		},
		length: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
		},
		lengthManhattan: function() {
			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
		},
		normalize: function() {
			return this.divideScalar(this.length())
		},
		setLength: function(t) {
			return this.multiplyScalar(t / this.length())
		},
		lerp: function(t, e) {
			return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
		},
		lerpVectors: function(t, e, i) {
			return this.subVectors(e, t).multiplyScalar(i).add(t)
		},
		equals: function(t) {
			return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
		},
		fromArray: function(t, e) {
			return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
		},
		toArray: function(t, e) {
			return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
		},
		fromBufferAttribute: function(t, e, i) {
			return void 0 !== i && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
		}
	}), Object.assign(a.prototype, e.prototype, {
		isWebGLRenderTarget: !0,
		setSize: function(t, e) {
			this.width === t && this.height === e || (this.width = t, this.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	}), o.prototype = Object.create(a.prototype), o.prototype.constructor = o, o.prototype.isWebGLRenderTargetCube = !0, Object.assign(s, {
		slerp: function(t, e, i, n) {
			return i.copy(t).slerp(e, n)
		},
		slerpFlat: function(t, e, i, n, r, a, o) {
			var s = i[n + 0],
				c = i[n + 1],
				h = i[n + 2],
				l = i[n + 3],
				u = r[a + 0],
				d = r[a + 1],
				p = r[a + 2],
				f = r[a + 3];
			if (l !== f || s !== u || c !== d || h !== p) {
				var m = 1 - o,
					g = s * u + c * d + h * p + l * f,
					v = g >= 0 ? 1 : -1,
					y = 1 - g * g;
				if (y > Number.EPSILON) {
					var x = Math.sqrt(y),
						_ = Math.atan2(x, g * v);
					m = Math.sin(m * _) / x, o = Math.sin(o * _) / x
				}
				var b = o * v;
				if (s = s * m + u * b, c = c * m + d * b, h = h * m + p * b, l = l * m + f * b, m === 1 - o) {
					var w = 1 / Math.sqrt(s * s + c * c + h * h + l * l);
					s *= w, c *= w, h *= w, l *= w
				}
			}
			t[e] = s, t[e + 1] = c, t[e + 2] = h, t[e + 3] = l
		}
	}), Object.defineProperties(s.prototype, {
		x: {
			get: function() {
				return this._x
			},
			set: function(t) {
				this._x = t, this.onChangeCallback()
			}
		},
		y: {
			get: function() {
				return this._y
			},
			set: function(t) {
				this._y = t, this.onChangeCallback()
			}
		},
		z: {
			get: function() {
				return this._z
			},
			set: function(t) {
				this._z = t, this.onChangeCallback()
			}
		},
		w: {
			get: function() {
				return this._w
			},
			set: function(t) {
				this._w = t, this.onChangeCallback()
			}
		}
	}), Object.assign(s.prototype, {
		set: function(t, e, i, n) {
			return this._x = t, this._y = e, this._z = i, this._w = n, this.onChangeCallback(), this
		},
		clone: function() {
			return new this.constructor(this._x, this._y, this._z, this._w)
		},
		copy: function(t) {
			return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(), this
		},
		setFromEuler: function(t, e) {
			if (!1 === (t && t.isEuler)) {
				throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.")
			}
			var i = t._x,
				n = t._y,
				r = t._z,
				a = t.order,
				o = Math.cos,
				s = Math.sin,
				c = o(i / 2),
				h = o(n / 2),
				l = o(r / 2),
				u = s(i / 2),
				d = s(n / 2),
				p = s(r / 2);
			return "XYZ" === a ? (this._x = u * h * l + c * d * p, this._y = c * d * l - u * h * p, this._z = c * h * p + u * d * l, this._w = c * h * l - u * d * p) : "YXZ" === a ? (this._x = u * h * l + c * d * p, this._y = c * d * l - u * h * p, this._z = c * h * p - u * d * l, this._w = c * h * l + u * d * p) : "ZXY" === a ? (this._x = u * h * l - c * d * p, this._y = c * d * l + u * h * p, this._z = c * h * p + u * d * l, this._w = c * h * l - u * d * p) : "ZYX" === a ? (this._x = u * h * l - c * d * p, this._y = c * d * l + u * h * p, this._z = c * h * p - u * d * l, this._w = c * h * l + u * d * p) : "YZX" === a ? (this._x = u * h * l + c * d * p, this._y = c * d * l + u * h * p, this._z = c * h * p - u * d * l, this._w = c * h * l - u * d * p) : "XZY" === a && (this._x = u * h * l - c * d * p, this._y = c * d * l - u * h * p, this._z = c * h * p + u * d * l, this._w = c * h * l + u * d * p), !1 !== e && this.onChangeCallback(), this
		},
		setFromAxisAngle: function(t, e) {
			var i = e / 2,
				n = Math.sin(i);
			return this._x = t.x * n, this._y = t.y * n, this._z = t.z * n, this._w = Math.cos(i), this.onChangeCallback(), this
		},
		setFromRotationMatrix: function(t) {
			var e, i = t.elements,
				n = i[0],
				r = i[4],
				a = i[8],
				o = i[1],
				s = i[5],
				c = i[9],
				h = i[2],
				l = i[6],
				u = i[10],
				d = n + s + u;
			return d > 0 ? (e = 0.5 / Math.sqrt(d + 1), this._w = 0.25 / e, this._x = (l - c) * e, this._y = (a - h) * e, this._z = (o - r) * e) : n > s && n > u ? (e = 2 * Math.sqrt(1 + n - s - u), this._w = (l - c) / e, this._x = 0.25 * e, this._y = (r + o) / e, this._z = (a + h) / e) : s > u ? (e = 2 * Math.sqrt(1 + s - n - u), this._w = (a - h) / e, this._x = (r + o) / e, this._y = 0.25 * e, this._z = (c + l) / e) : (e = 2 * Math.sqrt(1 + u - n - s), this._w = (o - r) / e, this._x = (a + h) / e, this._y = (c + l) / e, this._z = 0.25 * e), this.onChangeCallback(), this
		},
		setFromUnitVectors: function() {
			var t, e = new c;
			return function(i, n) {
				return void 0 === e && (e = new c), (t = i.dot(n) + 1) < 0.000001 ? (t = 0, Math.abs(i.x) > Math.abs(i.z) ? e.set(-i.y, i.x, 0) : e.set(0, -i.z, i.y)) : e.crossVectors(i, n), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize()
			}
		}(),
		inverse: function() {
			return this.conjugate().normalize()
		},
		conjugate: function() {
			return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
		},
		dot: function(t) {
			return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
		},
		lengthSq: function() {
			return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
		},
		length: function() {
			return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
		},
		normalize: function() {
			var t = this.length();
			return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this.onChangeCallback(), this
		},
		multiply: function(t, e) {
			return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
		},
		premultiply: function(t) {
			return this.multiplyQuaternions(t, this)
		},
		multiplyQuaternions: function(t, e) {
			var i = t._x,
				n = t._y,
				r = t._z,
				a = t._w,
				o = e._x,
				s = e._y,
				c = e._z,
				h = e._w;
			return this._x = i * h + a * o + n * c - r * s, this._y = n * h + a * s + r * o - i * c, this._z = r * h + a * c + i * s - n * o, this._w = a * h - i * o - n * s - r * c, this.onChangeCallback(), this
		},
		slerp: function(t, e) {
			if (0 === e) {
				return this
			}
			if (1 === e) {
				return this.copy(t)
			}
			var i = this._x,
				n = this._y,
				r = this._z,
				a = this._w,
				o = a * t._w + i * t._x + n * t._y + r * t._z;
			if (o < 0 ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, o = -o) : this.copy(t), o >= 1) {
				return this._w = a, this._x = i, this._y = n, this._z = r, this
			}
			var s = Math.sqrt(1 - o * o);
			if (Math.abs(s) < 0.001) {
				return this._w = 0.5 * (a + this._w), this._x = 0.5 * (i + this._x), this._y = 0.5 * (n + this._y), this._z = 0.5 * (r + this._z), this
			}
			var c = Math.atan2(s, o),
				h = Math.sin((1 - e) * c) / s,
				l = Math.sin(e * c) / s;
			return this._w = a * h + this._w * l, this._x = i * h + this._x * l, this._y = n * h + this._y * l, this._z = r * h + this._z * l, this.onChangeCallback(), this
		},
		equals: function(t) {
			return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
		},
		fromArray: function(t, e) {
			return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this.onChangeCallback(), this
		},
		toArray: function(t, e) {
			return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
		},
		onChange: function(t) {
			return this.onChangeCallback = t, this
		},
		onChangeCallback: function() {}
	}), Object.assign(c.prototype, {
		isVector3: !0,
		set: function(t, e, i) {
			return this.x = t, this.y = e, this.z = i, this
		},
		setScalar: function(t) {
			return this.x = t, this.y = t, this.z = t, this
		},
		setX: function(t) {
			return this.x = t, this
		},
		setY: function(t) {
			return this.y = t, this
		},
		setZ: function(t) {
			return this.z = t, this
		},
		setComponent: function(t, e) {
			switch (t) {
				case 0:
					this.x = e;
					break;
				case 1:
					this.y = e;
					break;
				case 2:
					this.z = e;
					break;
				default:
					throw new Error("index is out of range: " + t)
			}
			return this
		},
		getComponent: function(t) {
			switch (t) {
				case 0:
					return this.x;
				case 1:
					return this.y;
				case 2:
					return this.z;
				default:
					throw new Error("index is out of range: " + t)
			}
		},
		clone: function() {
			return new this.constructor(this.x, this.y, this.z)
		},
		copy: function(t) {
			return this.x = t.x, this.y = t.y, this.z = t.z, this
		},
		add: function(t, e) {
			return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
		},
		addScalar: function(t) {
			return this.x += t, this.y += t, this.z += t, this
		},
		addVectors: function(t, e) {
			return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
		},
		addScaledVector: function(t, e) {
			return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
		},
		sub: function(t, e) {
			return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
		},
		subScalar: function(t) {
			return this.x -= t, this.y -= t, this.z -= t, this
		},
		subVectors: function(t, e) {
			return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
		},
		multiply: function(t, e) {
			return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
		},
		multiplyScalar: function(t) {
			return this.x *= t, this.y *= t, this.z *= t, this
		},
		multiplyVectors: function(t, e) {
			return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
		},
		applyEuler: function() {
			var t = new s;
			return function(e) {
				return !1 === (e && e.isEuler) && console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(t.setFromEuler(e))
			}
		}(),
		applyAxisAngle: function() {
			var t = new s;
			return function(e, i) {
				return this.applyQuaternion(t.setFromAxisAngle(e, i))
			}
		}(),
		applyMatrix3: function(t) {
			var e = this.x,
				i = this.y,
				n = this.z,
				r = t.elements;
			return this.x = r[0] * e + r[3] * i + r[6] * n, this.y = r[1] * e + r[4] * i + r[7] * n, this.z = r[2] * e + r[5] * i + r[8] * n, this
		},
		applyMatrix4: function(t) {
			var e = this.x,
				i = this.y,
				n = this.z,
				r = t.elements;
			this.x = r[0] * e + r[4] * i + r[8] * n + r[12], this.y = r[1] * e + r[5] * i + r[9] * n + r[13], this.z = r[2] * e + r[6] * i + r[10] * n + r[14];
			var a = r[3] * e + r[7] * i + r[11] * n + r[15];
			return this.divideScalar(a)
		},
		applyQuaternion: function(t) {
			var e = this.x,
				i = this.y,
				n = this.z,
				r = t.x,
				a = t.y,
				o = t.z,
				s = t.w,
				c = s * e + a * n - o * i,
				h = s * i + o * e - r * n,
				l = s * n + r * i - a * e,
				u = -r * e - a * i - o * n;
			return this.x = c * s + u * -r + h * -o - l * -a, this.y = h * s + u * -a + l * -r - c * -o, this.z = l * s + u * -o + c * -a - h * -r, this
		},
		project: function() {
			var t = new h;
			return function(e) {
				return t.multiplyMatrices(e.projectionMatrix, t.getInverse(e.matrixWorld)), this.applyMatrix4(t)
			}
		}(),
		unproject: function() {
			var t = new h;
			return function(e) {
				return t.multiplyMatrices(e.matrixWorld, t.getInverse(e.projectionMatrix)), this.applyMatrix4(t)
			}
		}(),
		transformDirection: function(t) {
			var e = this.x,
				i = this.y,
				n = this.z,
				r = t.elements;
			return this.x = r[0] * e + r[4] * i + r[8] * n, this.y = r[1] * e + r[5] * i + r[9] * n, this.z = r[2] * e + r[6] * i + r[10] * n, this.normalize()
		},
		divide: function(t) {
			return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
		},
		divideScalar: function(t) {
			return this.multiplyScalar(1 / t)
		},
		min: function(t) {
			return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
		},
		max: function(t) {
			return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
		},
		clamp: function(t, e) {
			return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
		},
		clampScalar: function() {
			var t = new c,
				e = new c;
			return function(i, n) {
				return t.set(i, i, i), e.set(n, n, n), this.clamp(t, e)
			}
		}(),
		clampLength: function(t, e) {
			var i = this.length();
			return this.multiplyScalar(Math.max(t, Math.min(e, i)) / i)
		},
		floor: function() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
		},
		ceil: function() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
		},
		round: function() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
		},
		roundToZero: function() {
			return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this
		},
		negate: function() {
			return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
		},
		dot: function(t) {
			return this.x * t.x + this.y * t.y + this.z * t.z
		},
		lengthSq: function() {
			return this.x * this.x + this.y * this.y + this.z * this.z
		},
		length: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
		},
		lengthManhattan: function() {
			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
		},
		normalize: function() {
			return this.divideScalar(this.length())
		},
		setLength: function(t) {
			return this.multiplyScalar(t / this.length())
		},
		lerp: function(t, e) {
			return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
		},
		lerpVectors: function(t, e, i) {
			return this.subVectors(e, t).multiplyScalar(i).add(t)
		},
		cross: function(t, e) {
			if (void 0 !== e) {
				return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e)
			}
			var i = this.x,
				n = this.y,
				r = this.z;
			return this.x = n * t.z - r * t.y, this.y = r * t.x - i * t.z, this.z = i * t.y - n * t.x, this
		},
		crossVectors: function(t, e) {
			var i = t.x,
				n = t.y,
				r = t.z,
				a = e.x,
				o = e.y,
				s = e.z;
			return this.x = n * s - r * o, this.y = r * a - i * s, this.z = i * o - n * a, this
		},
		projectOnVector: function(t) {
			var e = t.dot(this) / t.lengthSq();
			return this.copy(t).multiplyScalar(e)
		},
		projectOnPlane: function() {
			var t = new c;
			return function(e) {
				return t.copy(this).projectOnVector(e), this.sub(t)
			}
		}(),
		reflect: function() {
			var t = new c;
			return function(e) {
				return this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)))
			}
		}(),
		angleTo: function(t) {
			var e = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq());
			return Math.acos(Do.clamp(e, -1, 1))
		},
		distanceTo: function(t) {
			return Math.sqrt(this.distanceToSquared(t))
		},
		distanceToSquared: function(t) {
			var e = this.x - t.x,
				i = this.y - t.y,
				n = this.z - t.z;
			return e * e + i * i + n * n
		},
		distanceToManhattan: function(t) {
			return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
		},
		setFromSpherical: function(t) {
			var e = Math.sin(t.phi) * t.radius;
			return this.x = e * Math.sin(t.theta), this.y = Math.cos(t.phi) * t.radius, this.z = e * Math.cos(t.theta), this
		},
		setFromCylindrical: function(t) {
			return this.x = t.radius * Math.sin(t.theta), this.y = t.y, this.z = t.radius * Math.cos(t.theta), this
		},
		setFromMatrixPosition: function(t) {
			return this.setFromMatrixColumn(t, 3)
		},
		setFromMatrixScale: function(t) {
			var e = this.setFromMatrixColumn(t, 0).length(),
				i = this.setFromMatrixColumn(t, 1).length(),
				n = this.setFromMatrixColumn(t, 2).length();
			return this.x = e, this.y = i, this.z = n, this
		},
		setFromMatrixColumn: function(t, e) {
			return this.fromArray(t.elements, 4 * e)
		},
		equals: function(t) {
			return t.x === this.x && t.y === this.y && t.z === this.z
		},
		fromArray: function(t, e) {
			return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
		},
		toArray: function(t, e) {
			return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
		},
		fromBufferAttribute: function(t, e, i) {
			return void 0 !== i && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
		}
	}), Object.assign(h.prototype, {
		isMatrix4: !0,
		set: function(t, e, i, n, r, a, o, s, c, h, l, u, d, p, f, m) {
			var g = this.elements;
			return g[0] = t, g[4] = e, g[8] = i, g[12] = n, g[1] = r, g[5] = a, g[9] = o, g[13] = s, g[2] = c, g[6] = h, g[10] = l, g[14] = u, g[3] = d, g[7] = p, g[11] = f, g[15] = m, this
		},
		identity: function() {
			return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
		},
		clone: function() {
			return (new h).fromArray(this.elements)
		},
		copy: function(t) {
			var e = this.elements,
				i = t.elements;
			return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], e[9] = i[9], e[10] = i[10], e[11] = i[11], e[12] = i[12], e[13] = i[13], e[14] = i[14], e[15] = i[15], this
		},
		copyPosition: function(t) {
			var e = this.elements,
				i = t.elements;
			return e[12] = i[12], e[13] = i[13], e[14] = i[14], this
		},
		extractBasis: function(t, e, i) {
			return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this
		},
		makeBasis: function(t, e, i) {
			return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this
		},
		extractRotation: function() {
			var t = new c;
			return function(e) {
				var i = this.elements,
					n = e.elements,
					r = 1 / t.setFromMatrixColumn(e, 0).length(),
					a = 1 / t.setFromMatrixColumn(e, 1).length(),
					o = 1 / t.setFromMatrixColumn(e, 2).length();
				return i[0] = n[0] * r, i[1] = n[1] * r, i[2] = n[2] * r, i[4] = n[4] * a, i[5] = n[5] * a, i[6] = n[6] * a, i[8] = n[8] * o, i[9] = n[9] * o, i[10] = n[10] * o, this
			}
		}(),
		makeRotationFromEuler: function(t) {
			!1 === (t && t.isEuler) && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
			var e = this.elements,
				i = t.x,
				n = t.y,
				r = t.z,
				a = Math.cos(i),
				o = Math.sin(i),
				s = Math.cos(n),
				c = Math.sin(n),
				h = Math.cos(r),
				l = Math.sin(r);
			if ("XYZ" === t.order) {
				var u = a * h,
					d = a * l,
					p = o * h,
					f = o * l;
				e[0] = s * h, e[4] = -s * l, e[8] = c, e[1] = d + p * c, e[5] = u - f * c, e[9] = -o * s, e[2] = f - u * c, e[6] = p + d * c, e[10] = a * s
			} else {
				if ("YXZ" === t.order) {
					var m = s * h,
						g = s * l,
						v = c * h,
						y = c * l;
					e[0] = m + y * o, e[4] = v * o - g, e[8] = a * c, e[1] = a * l, e[5] = a * h, e[9] = -o, e[2] = g * o - v, e[6] = y + m * o, e[10] = a * s
				} else {
					if ("ZXY" === t.order) {
						var m = s * h,
							g = s * l,
							v = c * h,
							y = c * l;
						e[0] = m - y * o, e[4] = -a * l, e[8] = v + g * o, e[1] = g + v * o, e[5] = a * h, e[9] = y - m * o, e[2] = -a * c, e[6] = o, e[10] = a * s
					} else {
						if ("ZYX" === t.order) {
							var u = a * h,
								d = a * l,
								p = o * h,
								f = o * l;
							e[0] = s * h, e[4] = p * c - d, e[8] = u * c + f, e[1] = s * l, e[5] = f * c + u, e[9] = d * c - p, e[2] = -c, e[6] = o * s, e[10] = a * s
						} else {
							if ("YZX" === t.order) {
								var x = a * s,
									_ = a * c,
									b = o * s,
									w = o * c;
								e[0] = s * h, e[4] = w - x * l, e[8] = b * l + _, e[1] = l, e[5] = a * h, e[9] = -o * h, e[2] = -c * h, e[6] = _ * l + b, e[10] = x - w * l
							} else {
								if ("XZY" === t.order) {
									var x = a * s,
										_ = a * c,
										b = o * s,
										w = o * c;
									e[0] = s * h, e[4] = -l, e[8] = c * h, e[1] = x * l + w, e[5] = a * h, e[9] = _ * l - b, e[2] = b * l - _, e[6] = o * h, e[10] = w * l + x
								}
							}
						}
					}
				}
			}
			return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
		},
		makeRotationFromQuaternion: function(t) {
			var e = this.elements,
				i = t._x,
				n = t._y,
				r = t._z,
				a = t._w,
				o = i + i,
				s = n + n,
				c = r + r,
				h = i * o,
				l = i * s,
				u = i * c,
				d = n * s,
				p = n * c,
				f = r * c,
				m = a * o,
				g = a * s,
				v = a * c;
			return e[0] = 1 - (d + f), e[4] = l - v, e[8] = u + g, e[1] = l + v, e[5] = 1 - (h + f), e[9] = p - m, e[2] = u - g, e[6] = p + m, e[10] = 1 - (h + d), e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
		},
		lookAt: function() {
			var t = new c,
				e = new c,
				i = new c;
			return function(n, r, a) {
				var o = this.elements;
				return i.subVectors(n, r), 0 === i.lengthSq() && (i.z = 1), i.normalize(), t.crossVectors(a, i), 0 === t.lengthSq() && (i.z += 0.0001, t.crossVectors(a, i)), t.normalize(), e.crossVectors(i, t), o[0] = t.x, o[4] = e.x, o[8] = i.x, o[1] = t.y, o[5] = e.y, o[9] = i.y, o[2] = t.z, o[6] = e.z, o[10] = i.z, this
			}
		}(),
		multiply: function(t, e) {
			return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
		},
		premultiply: function(t) {
			return this.multiplyMatrices(t, this)
		},
		multiplyMatrices: function(t, e) {
			var i = t.elements,
				n = e.elements,
				r = this.elements,
				a = i[0],
				o = i[4],
				s = i[8],
				c = i[12],
				h = i[1],
				l = i[5],
				u = i[9],
				d = i[13],
				p = i[2],
				f = i[6],
				m = i[10],
				g = i[14],
				v = i[3],
				y = i[7],
				x = i[11],
				_ = i[15],
				b = n[0],
				w = n[4],
				M = n[8],
				E = n[12],
				T = n[1],
				S = n[5],
				A = n[9],
				R = n[13],
				L = n[2],
				P = n[6],
				C = n[10],
				I = n[14],
				U = n[3],
				N = n[7],
				O = n[11],
				D = n[15];
			return r[0] = a * b + o * T + s * L + c * U, r[4] = a * w + o * S + s * P + c * N, r[8] = a * M + o * A + s * C + c * O, r[12] = a * E + o * R + s * I + c * D, r[1] = h * b + l * T + u * L + d * U, r[5] = h * w + l * S + u * P + d * N, r[9] = h * M + l * A + u * C + d * O, r[13] = h * E + l * R + u * I + d * D, r[2] = p * b + f * T + m * L + g * U, r[6] = p * w + f * S + m * P + g * N, r[10] = p * M + f * A + m * C + g * O, r[14] = p * E + f * R + m * I + g * D, r[3] = v * b + y * T + x * L + _ * U, r[7] = v * w + y * S + x * P + _ * N, r[11] = v * M + y * A + x * C + _ * O, r[15] = v * E + y * R + x * I + _ * D, this
		},
		multiplyScalar: function(t) {
			var e = this.elements;
			return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
		},
		applyToBufferAttribute: function() {
			var t = new c;
			return function(e) {
				for (var i = 0, n = e.count; i < n; i++) {
					t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.applyMatrix4(this), e.setXYZ(i, t.x, t.y, t.z)
				}
				return e
			}
		}(),
		determinant: function() {
			var t = this.elements,
				e = t[0],
				i = t[4],
				n = t[8],
				r = t[12],
				a = t[1],
				o = t[5],
				s = t[9],
				c = t[13],
				h = t[2],
				l = t[6],
				u = t[10],
				d = t[14];
			return t[3] * (+r * s * l - n * c * l - r * o * u + i * c * u + n * o * d - i * s * d) + t[7] * (+e * s * d - e * c * u + r * a * u - n * a * d + n * c * h - r * s * h) + t[11] * (+e * c * l - e * o * d - r * a * l + i * a * d + r * o * h - i * c * h) + t[15] * (-n * o * h - e * s * l + e * o * u + n * a * l - i * a * u + i * s * h)
		},
		transpose: function() {
			var t, e = this.elements;
			return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this
		},
		setPosition: function(t) {
			var e = this.elements;
			return e[12] = t.x, e[13] = t.y, e[14] = t.z, this
		},
		getInverse: function(t, e) {
			var i = this.elements,
				n = t.elements,
				r = n[0],
				a = n[1],
				o = n[2],
				s = n[3],
				c = n[4],
				h = n[5],
				l = n[6],
				u = n[7],
				d = n[8],
				p = n[9],
				f = n[10],
				m = n[11],
				g = n[12],
				v = n[13],
				y = n[14],
				x = n[15],
				_ = p * y * u - v * f * u + v * l * m - h * y * m - p * l * x + h * f * x,
				b = g * f * u - d * y * u - g * l * m + c * y * m + d * l * x - c * f * x,
				w = d * v * u - g * p * u + g * h * m - c * v * m - d * h * x + c * p * x,
				M = g * p * l - d * v * l - g * h * f + c * v * f + d * h * y - c * p * y,
				E = r * _ + a * b + o * w + s * M;
			if (0 === E) {
				var T = "THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0";
				if (!0 === e) {
					throw new Error(T)
				}
				return console.warn(T), this.identity()
			}
			var S = 1 / E;
			return i[0] = _ * S, i[1] = (v * f * s - p * y * s - v * o * m + a * y * m + p * o * x - a * f * x) * S, i[2] = (h * y * s - v * l * s + v * o * u - a * y * u - h * o * x + a * l * x) * S, i[3] = (p * l * s - h * f * s - p * o * u + a * f * u + h * o * m - a * l * m) * S, i[4] = b * S, i[5] = (d * y * s - g * f * s + g * o * m - r * y * m - d * o * x + r * f * x) * S, i[6] = (g * l * s - c * y * s - g * o * u + r * y * u + c * o * x - r * l * x) * S, i[7] = (c * f * s - d * l * s + d * o * u - r * f * u - c * o * m + r * l * m) * S, i[8] = w * S, i[9] = (g * p * s - d * v * s - g * a * m + r * v * m + d * a * x - r * p * x) * S, i[10] = (c * v * s - g * h * s + g * a * u - r * v * u - c * a * x + r * h * x) * S, i[11] = (d * h * s - c * p * s - d * a * u + r * p * u + c * a * m - r * h * m) * S, i[12] = M * S, i[13] = (d * v * o - g * p * o + g * a * f - r * v * f - d * a * y + r * p * y) * S, i[14] = (g * h * o - c * v * o - g * a * l + r * v * l + c * a * y - r * h * y) * S, i[15] = (c * p * o - d * h * o + d * a * l - r * p * l - c * a * f + r * h * f) * S, this
		},
		scale: function(t) {
			var e = this.elements,
				i = t.x,
				n = t.y,
				r = t.z;
			return e[0] *= i, e[4] *= n, e[8] *= r, e[1] *= i, e[5] *= n, e[9] *= r, e[2] *= i, e[6] *= n, e[10] *= r, e[3] *= i, e[7] *= n, e[11] *= r, this
		},
		getMaxScaleOnAxis: function() {
			var t = this.elements,
				e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2],
				i = t[4] * t[4] + t[5] * t[5] + t[6] * t[6],
				n = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
			return Math.sqrt(Math.max(e, i, n))
		},
		makeTranslation: function(t, e, i) {
			return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this
		},
		makeRotationX: function(t) {
			var e = Math.cos(t),
				i = Math.sin(t);
			return this.set(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1), this
		},
		makeRotationY: function(t) {
			var e = Math.cos(t),
				i = Math.sin(t);
			return this.set(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1), this
		},
		makeRotationZ: function(t) {
			var e = Math.cos(t),
				i = Math.sin(t);
			return this.set(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
		},
		makeRotationAxis: function(t, e) {
			var i = Math.cos(e),
				n = Math.sin(e),
				r = 1 - i,
				a = t.x,
				o = t.y,
				s = t.z,
				c = r * a,
				h = r * o;
			return this.set(c * a + i, c * o - n * s, c * s + n * o, 0, c * o + n * s, h * o + i, h * s - n * a, 0, c * s - n * o, h * s + n * a, r * s * s + i, 0, 0, 0, 0, 1), this
		},
		makeScale: function(t, e, i) {
			return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
		},
		makeShear: function(t, e, i) {
			return this.set(1, e, i, 0, t, 1, i, 0, t, e, 1, 0, 0, 0, 0, 1), this
		},
		compose: function(t, e, i) {
			return this.makeRotationFromQuaternion(e), this.scale(i), this.setPosition(t), this
		},
		decompose: function() {
			var t = new c,
				e = new h;
			return function(i, n, r) {
				var a = this.elements,
					o = t.set(a[0], a[1], a[2]).length(),
					s = t.set(a[4], a[5], a[6]).length(),
					c = t.set(a[8], a[9], a[10]).length();
				this.determinant() < 0 && (o = -o), i.x = a[12], i.y = a[13], i.z = a[14], e.copy(this);
				var h = 1 / o,
					l = 1 / s,
					u = 1 / c;
				return e.elements[0] *= h, e.elements[1] *= h, e.elements[2] *= h, e.elements[4] *= l, e.elements[5] *= l, e.elements[6] *= l, e.elements[8] *= u, e.elements[9] *= u, e.elements[10] *= u, n.setFromRotationMatrix(e), r.x = o, r.y = s, r.z = c, this
			}
		}(),
		makePerspective: function(t, e, i, n, r, a) {
			void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
			var o = this.elements,
				s = 2 * r / (e - t),
				c = 2 * r / (i - n),
				h = (e + t) / (e - t),
				l = (i + n) / (i - n),
				u = -(a + r) / (a - r),
				d = -2 * a * r / (a - r);
			return o[0] = s, o[4] = 0, o[8] = h, o[12] = 0, o[1] = 0, o[5] = c, o[9] = l, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = u, o[14] = d, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
		},
		makeOrthographic: function(t, e, i, n, r, a) {
			var o = this.elements,
				s = 1 / (e - t),
				c = 1 / (i - n),
				h = 1 / (a - r),
				l = (e + t) * s,
				u = (i + n) * c,
				d = (a + r) * h;
			return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -l, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -u, o[2] = 0, o[6] = 0, o[10] = -2 * h, o[14] = -d, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
		},
		equals: function(t) {
			for (var e = this.elements, i = t.elements, n = 0; n < 16; n++) {
				if (e[n] !== i[n]) {
					return !1
				}
			}
			return !0
		},
		fromArray: function(t, e) {
			void 0 === e && (e = 0);
			for (var i = 0; i < 16; i++) {
				this.elements[i] = t[i + e]
			}
			return this
		},
		toArray: function(t, e) {
			void 0 === t && (t = []), void 0 === e && (e = 0);
			var i = this.elements;
			return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t
		}
	}), l.prototype = Object.create(n.prototype), l.prototype.constructor = l, l.prototype.isDataTexture = !0, (u.prototype = Object.create(n.prototype)).constructor = u, u.prototype.isCubeTexture = !0, Object.defineProperty(u.prototype, "images", {
		get: function() {
			return this.image
		},
		set: function(t) {
			this.image = t
		}
	});
	var Bo = new n,
		zo = new u,
		Go = [],
		Ho = [],
		Vo = new Float32Array(16),
		ko = new Float32Array(9);
	V.prototype.setValue = function(t, e) {
		for (var i = this.seq, n = 0, r = i.length; n !== r; ++n) {
			var a = i[n];
			a.setValue(t, e[a.id])
		}
	};
	var jo = /([\w\d_]+)(\])?(\[|\.)?/g;
	W.prototype.setValue = function(t, e, i) {
		var n = this.map[e];
		void 0 !== n && n.setValue(t, i, this.renderer)
	}, W.prototype.setOptional = function(t, e, i) {
		var n = e[i];
		void 0 !== n && this.setValue(t, i, n)
	}, W.upload = function(t, e, i, n) {
		for (var r = 0, a = e.length; r !== a; ++r) {
			var o = e[r],
				s = i[o.id];
			!1 !== s.needsUpdate && o.setValue(t, s.value, n)
		}
	}, W.seqWithValue = function(t, e) {
		for (var i = [], n = 0, r = t.length; n !== r; ++n) {
			var a = t[n];
			a.id in e && i.push(a)
		}
		return i
	};
	var Wo = {
		aliceblue: 15792383,
		antiquewhite: 16444375,
		aqua: 65535,
		aquamarine: 8388564,
		azure: 15794175,
		beige: 16119260,
		bisque: 16770244,
		black: 0,
		blanchedalmond: 16772045,
		blue: 255,
		blueviolet: 9055202,
		brown: 10824234,
		burlywood: 14596231,
		cadetblue: 6266528,
		chartreuse: 8388352,
		chocolate: 13789470,
		coral: 16744272,
		cornflowerblue: 6591981,
		cornsilk: 16775388,
		crimson: 14423100,
		cyan: 65535,
		darkblue: 139,
		darkcyan: 35723,
		darkgoldenrod: 12092939,
		darkgray: 11119017,
		darkgreen: 25600,
		darkgrey: 11119017,
		darkkhaki: 12433259,
		darkmagenta: 9109643,
		darkolivegreen: 5597999,
		darkorange: 16747520,
		darkorchid: 10040012,
		darkred: 9109504,
		darksalmon: 15308410,
		darkseagreen: 9419919,
		darkslateblue: 4734347,
		darkslategray: 3100495,
		darkslategrey: 3100495,
		darkturquoise: 52945,
		darkviolet: 9699539,
		deeppink: 16716947,
		deepskyblue: 49151,
		dimgray: 6908265,
		dimgrey: 6908265,
		dodgerblue: 2003199,
		firebrick: 11674146,
		floralwhite: 16775920,
		forestgreen: 2263842,
		fuchsia: 16711935,
		gainsboro: 14474460,
		ghostwhite: 16316671,
		gold: 16766720,
		goldenrod: 14329120,
		gray: 8421504,
		green: 32768,
		greenyellow: 11403055,
		grey: 8421504,
		honeydew: 15794160,
		hotpink: 16738740,
		indianred: 13458524,
		indigo: 4915330,
		ivory: 16777200,
		khaki: 15787660,
		lavender: 15132410,
		lavenderblush: 16773365,
		lawngreen: 8190976,
		lemonchiffon: 16775885,
		lightblue: 11393254,
		lightcoral: 15761536,
		lightcyan: 14745599,
		lightgoldenrodyellow: 16448210,
		lightgray: 13882323,
		lightgreen: 9498256,
		lightgrey: 13882323,
		lightpink: 16758465,
		lightsalmon: 16752762,
		lightseagreen: 2142890,
		lightskyblue: 8900346,
		lightslategray: 7833753,
		lightslategrey: 7833753,
		lightsteelblue: 11584734,
		lightyellow: 16777184,
		lime: 65280,
		limegreen: 3329330,
		linen: 16445670,
		magenta: 16711935,
		maroon: 8388608,
		mediumaquamarine: 6737322,
		mediumblue: 205,
		mediumorchid: 12211667,
		mediumpurple: 9662683,
		mediumseagreen: 3978097,
		mediumslateblue: 8087790,
		mediumspringgreen: 64154,
		mediumturquoise: 4772300,
		mediumvioletred: 13047173,
		midnightblue: 1644912,
		mintcream: 16121850,
		mistyrose: 16770273,
		moccasin: 16770229,
		navajowhite: 16768685,
		navy: 128,
		oldlace: 16643558,
		olive: 8421376,
		olivedrab: 7048739,
		orange: 16753920,
		orangered: 16729344,
		orchid: 14315734,
		palegoldenrod: 15657130,
		palegreen: 10025880,
		paleturquoise: 11529966,
		palevioletred: 14381203,
		papayawhip: 16773077,
		peachpuff: 16767673,
		peru: 13468991,
		pink: 16761035,
		plum: 14524637,
		powderblue: 11591910,
		purple: 8388736,
		red: 16711680,
		rosybrown: 12357519,
		royalblue: 4286945,
		saddlebrown: 9127187,
		salmon: 16416882,
		sandybrown: 16032864,
		seagreen: 3050327,
		seashell: 16774638,
		sienna: 10506797,
		silver: 12632256,
		skyblue: 8900331,
		slateblue: 6970061,
		slategray: 7372944,
		slategrey: 7372944,
		snow: 16775930,
		springgreen: 65407,
		steelblue: 4620980,
		tan: 13808780,
		teal: 32896,
		thistle: 14204888,
		tomato: 16737095,
		turquoise: 4251856,
		violet: 15631086,
		wheat: 16113331,
		white: 16777215,
		whitesmoke: 16119285,
		yellow: 16776960,
		yellowgreen: 10145074
	};
	Object.assign(X.prototype, {
		isColor: !0,
		r: 1,
		g: 1,
		b: 1,
		set: function(t) {
			return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
		},
		setScalar: function(t) {
			return this.r = t, this.g = t, this.b = t, this
		},
		setHex: function(t) {
			return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
		},
		setRGB: function(t, e, i) {
			return this.r = t, this.g = e, this.b = i, this
		},
		setHSL: function() {
			function t(t, e, i) {
				return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < 0.5 ? e : i < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - i) : t
			}
			return function(e, i, n) {
				if (e = Do.euclideanModulo(e, 1), i = Do.clamp(i, 0, 1), n = Do.clamp(n, 0, 1), 0 === i) {
					this.r = this.g = this.b = n
				} else {
					var r = n <= 0.5 ? n * (1 + i) : n + i - n * i,
						a = 2 * n - r;
					this.r = t(a, r, e + 1 / 3), this.g = t(a, r, e), this.b = t(a, r, e - 1 / 3)
				}
				return this
			}
		}(),
		setStyle: function(t) {
			function e(e) {
				void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
			}
			var i;
			if (i = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
				var n, r = i[1],
					a = i[2];
				switch (r) {
					case "rgb":
					case "rgba":
						if (n = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
							return this.r = Math.min(255, parseInt(n[1], 10)) / 255, this.g = Math.min(255, parseInt(n[2], 10)) / 255, this.b = Math.min(255, parseInt(n[3], 10)) / 255, e(n[5]), this
						}
						if (n = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
							return this.r = Math.min(100, parseInt(n[1], 10)) / 100, this.g = Math.min(100, parseInt(n[2], 10)) / 100, this.b = Math.min(100, parseInt(n[3], 10)) / 100, e(n[5]), this
						}
						break;
					case "hsl":
					case "hsla":
						if (n = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(a)) {
							var o = parseFloat(n[1]) / 360,
								s = parseInt(n[2], 10) / 100,
								c = parseInt(n[3], 10) / 100;
							return e(n[5]), this.setHSL(o, s, c)
						}
				}
			} else {
				if (i = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
					var h = (l = i[1]).length;
					if (3 === h) {
						return this.r = parseInt(l.charAt(0) + l.charAt(0), 16) / 255, this.g = parseInt(l.charAt(1) + l.charAt(1), 16) / 255, this.b = parseInt(l.charAt(2) + l.charAt(2), 16) / 255, this
					}
					if (6 === h) {
						return this.r = parseInt(l.charAt(0) + l.charAt(1), 16) / 255, this.g = parseInt(l.charAt(2) + l.charAt(3), 16) / 255, this.b = parseInt(l.charAt(4) + l.charAt(5), 16) / 255, this
					}
				}
			}
			if (t && t.length > 0) {
				var l = Wo[t];
				void 0 !== l ? this.setHex(l) : console.warn("THREE.Color: Unknown color " + t)
			}
			return this
		},
		clone: function() {
			return new this.constructor(this.r, this.g, this.b)
		},
		copy: function(t) {
			return this.r = t.r, this.g = t.g, this.b = t.b, this
		},
		copyGammaToLinear: function(t, e) {
			return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
		},
		copyLinearToGamma: function(t, e) {
			void 0 === e && (e = 2);
			var i = e > 0 ? 1 / e : 1;
			return this.r = Math.pow(t.r, i), this.g = Math.pow(t.g, i), this.b = Math.pow(t.b, i), this
		},
		convertGammaToLinear: function() {
			var t = this.r,
				e = this.g,
				i = this.b;
			return this.r = t * t, this.g = e * e, this.b = i * i, this
		},
		convertLinearToGamma: function() {
			return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
		},
		getHex: function() {
			return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
		},
		getHexString: function() {
			return ("000000" + this.getHex().toString(16)).slice(-6)
		},
		getHSL: function(t) {
			var e, i, n = t || {
					h: 0,
					s: 0,
					l: 0
				},
				r = this.r,
				a = this.g,
				o = this.b,
				s = Math.max(r, a, o),
				c = Math.min(r, a, o),
				h = (c + s) / 2;
			if (c === s) {
				e = 0, i = 0
			} else {
				var l = s - c;
				switch (i = h <= 0.5 ? l / (s + c) : l / (2 - s - c), s) {
					case r:
						e = (a - o) / l + (a < o ? 6 : 0);
						break;
					case a:
						e = (o - r) / l + 2;
						break;
					case o:
						e = (r - a) / l + 4
				}
				e /= 6
			}
			return n.h = e, n.s = i, n.l = h, n
		},
		getStyle: function() {
			return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
		},
		offsetHSL: function(t, e, i) {
			var n = this.getHSL();
			return n.h += t, n.s += e, n.l += i, this.setHSL(n.h, n.s, n.l), this
		},
		add: function(t) {
			return this.r += t.r, this.g += t.g, this.b += t.b, this
		},
		addColors: function(t, e) {
			return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
		},
		addScalar: function(t) {
			return this.r += t, this.g += t, this.b += t, this
		},
		sub: function(t) {
			return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
		},
		multiply: function(t) {
			return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
		},
		multiplyScalar: function(t) {
			return this.r *= t, this.g *= t, this.b *= t, this
		},
		lerp: function(t, e) {
			return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
		},
		equals: function(t) {
			return t.r === this.r && t.g === this.g && t.b === this.b
		},
		fromArray: function(t, e) {
			return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
		},
		toArray: function(t, e) {
			return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
		},
		toJSON: function() {
			return this.getHex()
		}
	});
	var Xo = {
			common: {
				diffuse: {
					value: new X(15658734)
				},
				opacity: {
					value: 1
				},
				map: {
					value: null
				},
				offsetRepeat: {
					value: new r(0, 0, 1, 1)
				},
				specularMap: {
					value: null
				},
				alphaMap: {
					value: null
				},
				envMap: {
					value: null
				},
				flipEnvMap: {
					value: -1
				},
				reflectivity: {
					value: 1
				},
				refractionRatio: {
					value: 0.98
				}
			},
			aomap: {
				aoMap: {
					value: null
				},
				aoMapIntensity: {
					value: 1
				}
			},
			lightmap: {
				lightMap: {
					value: null
				},
				lightMapIntensity: {
					value: 1
				}
			},
			emissivemap: {
				emissiveMap: {
					value: null
				}
			},
			bumpmap: {
				bumpMap: {
					value: null
				},
				bumpScale: {
					value: 1
				}
			},
			normalmap: {
				normalMap: {
					value: null
				},
				normalScale: {
					value: new i(1, 1)
				}
			},
			displacementmap: {
				displacementMap: {
					value: null
				},
				displacementScale: {
					value: 1
				},
				displacementBias: {
					value: 0
				}
			},
			roughnessmap: {
				roughnessMap: {
					value: null
				}
			},
			metalnessmap: {
				metalnessMap: {
					value: null
				}
			},
			gradientmap: {
				gradientMap: {
					value: null
				}
			},
			fog: {
				fogDensity: {
					value: 0.00025
				},
				fogNear: {
					value: 1
				},
				fogFar: {
					value: 2000
				},
				fogColor: {
					value: new X(16777215)
				}
			},
			lights: {
				ambientLightColor: {
					value: []
				},
				directionalLights: {
					value: [],
					properties: {
						direction: {},
						color: {},
						shadow: {},
						shadowBias: {},
						shadowRadius: {},
						shadowMapSize: {}
					}
				},
				directionalShadowMap: {
					value: []
				},
				directionalShadowMatrix: {
					value: []
				},
				spotLights: {
					value: [],
					properties: {
						color: {},
						position: {},
						direction: {},
						distance: {},
						coneCos: {},
						penumbraCos: {},
						decay: {},
						shadow: {},
						shadowBias: {},
						shadowRadius: {},
						shadowMapSize: {}
					}
				},
				spotShadowMap: {
					value: []
				},
				spotShadowMatrix: {
					value: []
				},
				pointLights: {
					value: [],
					properties: {
						color: {},
						position: {},
						decay: {},
						distance: {},
						shadow: {},
						shadowBias: {},
						shadowRadius: {},
						shadowMapSize: {}
					}
				},
				pointShadowMap: {
					value: []
				},
				pointShadowMatrix: {
					value: []
				},
				hemisphereLights: {
					value: [],
					properties: {
						direction: {},
						skyColor: {},
						groundColor: {}
					}
				},
				rectAreaLights: {
					value: [],
					properties: {
						color: {},
						position: {},
						width: {},
						height: {}
					}
				}
			},
			points: {
				diffuse: {
					value: new X(15658734)
				},
				opacity: {
					value: 1
				},
				size: {
					value: 1
				},
				scale: {
					value: 1
				},
				map: {
					value: null
				},
				offsetRepeat: {
					value: new r(0, 0, 1, 1)
				}
			}
		},
		qo = {
			merge: function(t) {
				for (var e = {}, i = 0; i < t.length; i++) {
					var n = this.clone(t[i]);
					for (var r in n) {
						e[r] = n[r]
					}
				}
				return e
			},
			clone: function(t) {
				var e = {};
				for (var i in t) {
					e[i] = {};
					for (var n in t[i]) {
						var r = t[i][n];
						r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? e[i][n] = r.clone() : Array.isArray(r) ? e[i][n] = r.slice() : e[i][n] = r
					}
				}
				return e
			}
		},
		Yo = {
			alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
			alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",
			alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
			aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
			aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
			begin_vertex: "\nvec3 transformed = vec3( position );\n",
			beginnormal_vertex: "\nvec3 objectNormal = vec3( normal );\n",
			bsdfs: "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t}\n\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat theta = acos( dot( N, V ) );\n\tvec2 uv = vec2(\n\t\tsqrt( saturate( roughness ) ),\n\t\tsaturate( theta / ( 0.5 * PI ) ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.86267 + (0.49788 + 0.01436 * y ) * y;\n\tfloat b = 3.45068 + (4.18814 + y) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = (x > 0.0) ? v : 0.5 * inversesqrt( 1.0 - x * x ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tvec3 result = vec3( LTC_ClippedSphereFormFactor( vectorFormFactor ) );\n\treturn result;\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
			bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
			clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t\t\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\t\tvec4 plane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t\n\t#endif\n#endif\n",
			clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",
			clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",
			clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
			color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
			color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",
			color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
			color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
			common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transpose( const in mat3 v ) {\n\tmat3 tmp;\n\ttmp[0] = vec3(v[0].x, v[1].x, v[2].x);\n\ttmp[1] = vec3(v[0].y, v[1].y, v[2].y);\n\ttmp[2] = vec3(v[0].z, v[1].z, v[2].z);\n\treturn tmp;\n}\n",
			cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
			defaultnormal_vertex: "#ifdef FLIP_SIDED\n\tobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n",
			displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",
			displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
			emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
			emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",
			encodings_fragment: "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
			encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n",
			envmap_fragment: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
			envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
			envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",
			envmap_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
			fog_vertex: "\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif",
			fog_pars_vertex: "#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n",
			fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
			fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",
			gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",
			lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
			lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
			lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
			lights_pars: "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltcMat;\tuniform sampler2D ltcMag;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = saturate( reflectVec.y * 0.5 + 0.5 );\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
			lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
			lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
			lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
			lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tfloat norm = texture2D( ltcMag, uv ).a;\n\t\tvec4 t = texture2D( ltcMat, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3(   1,   0, t.y ),\n\t\t\tvec3(   0, t.z,   0 ),\n\t\t\tvec3( t.w,   0, t.x )\n\t\t);\n\t\treflectedLight.directSpecular += lightColor * material.specularColor * norm * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
			lights_template: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
			logdepthbuf_fragment: "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif",
			logdepthbuf_pars_fragment: "#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",
			logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",
			logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\t#endif\n#endif\n",
			map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",
			map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",
			map_particle_fragment: "#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
			map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n#endif\n",
			metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",
			metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
			morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
			morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
			morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
			normal_flip: "#ifdef DOUBLE_SIDED\n\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n\tfloat flipNormal = 1.0;\n#endif\n",
			normal_fragment: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal ) * flipNormal;\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
			normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",
			packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
			premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",
			project_vertex: "#ifdef USE_SKINNING\n\tvec4 mvPosition = modelViewMatrix * skinned;\n#else\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n",
			dithering_fragment: "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",
			dithering_pars_fragment: "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",
			roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",
			roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
			shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn 1.0;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\tfloat dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
			shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
			shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
			shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
			skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
			skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
			skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n#endif\n",
			skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
			specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
			specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
			tonemapping_fragment: "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
			tonemapping_pars_fragment: "#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
			uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
			uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n#endif\n",
			uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",
			uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
			uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
			uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
			worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\t#ifdef USE_SKINNING\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\t#else\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\t#endif\n#endif\n",
			cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
			cube_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
			depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
			depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
			distanceRGBA_frag: "uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n}\n",
			distanceRGBA_vert: "varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition;\n}\n",
			equirect_frag: "uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",
			equirect_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
			linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
			linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",
			meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
			meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",
			meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
			meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
			meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
			meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
			meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
			meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
			normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
			normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
			points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
			points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
			shadow_frag: "uniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0 - getShadowMask() ) );\n}\n",
			shadow_vert: "#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n"
		},
		Zo = {
			basic: {
				uniforms: qo.merge([Xo.common, Xo.aomap, Xo.lightmap, Xo.fog]),
				vertexShader: Yo.meshbasic_vert,
				fragmentShader: Yo.meshbasic_frag
			},
			lambert: {
				uniforms: qo.merge([Xo.common, Xo.aomap, Xo.lightmap, Xo.emissivemap, Xo.fog, Xo.lights, {
					emissive: {
						value: new X(0)
					}
				}]),
				vertexShader: Yo.meshlambert_vert,
				fragmentShader: Yo.meshlambert_frag
			},
			phong: {
				uniforms: qo.merge([Xo.common, Xo.aomap, Xo.lightmap, Xo.emissivemap, Xo.bumpmap, Xo.normalmap, Xo.displacementmap, Xo.gradientmap, Xo.fog, Xo.lights, {
					emissive: {
						value: new X(0)
					},
					specular: {
						value: new X(1118481)
					},
					shininess: {
						value: 30
					}
				}]),
				vertexShader: Yo.meshphong_vert,
				fragmentShader: Yo.meshphong_frag
			},
			standard: {
				uniforms: qo.merge([Xo.common, Xo.aomap, Xo.lightmap, Xo.emissivemap, Xo.bumpmap, Xo.normalmap, Xo.displacementmap, Xo.roughnessmap, Xo.metalnessmap, Xo.fog, Xo.lights, {
					emissive: {
						value: new X(0)
					},
					roughness: {
						value: 0.5
					},
					metalness: {
						value: 0.5
					},
					envMapIntensity: {
						value: 1
					}
				}]),
				vertexShader: Yo.meshphysical_vert,
				fragmentShader: Yo.meshphysical_frag
			},
			points: {
				uniforms: qo.merge([Xo.points, Xo.fog]),
				vertexShader: Yo.points_vert,
				fragmentShader: Yo.points_frag
			},
			dashed: {
				uniforms: qo.merge([Xo.common, Xo.fog, {
					scale: {
						value: 1
					},
					dashSize: {
						value: 1
					},
					totalSize: {
						value: 2
					}
				}]),
				vertexShader: Yo.linedashed_vert,
				fragmentShader: Yo.linedashed_frag
			},
			depth: {
				uniforms: qo.merge([Xo.common, Xo.displacementmap]),
				vertexShader: Yo.depth_vert,
				fragmentShader: Yo.depth_frag
			},
			normal: {
				uniforms: qo.merge([Xo.common, Xo.bumpmap, Xo.normalmap, Xo.displacementmap, {
					opacity: {
						value: 1
					}
				}]),
				vertexShader: Yo.normal_vert,
				fragmentShader: Yo.normal_frag
			},
			cube: {
				uniforms: {
					tCube: {
						value: null
					},
					tFlip: {
						value: -1
					},
					opacity: {
						value: 1
					}
				},
				vertexShader: Yo.cube_vert,
				fragmentShader: Yo.cube_frag
			},
			equirect: {
				uniforms: {
					tEquirect: {
						value: null
					},
					tFlip: {
						value: -1
					}
				},
				vertexShader: Yo.equirect_vert,
				fragmentShader: Yo.equirect_frag
			},
			distanceRGBA: {
				uniforms: {
					lightPos: {
						value: new c
					}
				},
				vertexShader: Yo.distanceRGBA_vert,
				fragmentShader: Yo.distanceRGBA_frag
			}
		};
	Zo.physical = {
		uniforms: qo.merge([Zo.standard.uniforms, {
			clearCoat: {
				value: 0
			},
			clearCoatRoughness: {
				value: 0
			}
		}]),
		vertexShader: Yo.meshphysical_vert,
		fragmentShader: Yo.meshphysical_frag
	}, Object.assign(q.prototype, {
		set: function(t, e) {
			return this.min.copy(t), this.max.copy(e), this
		},
		setFromPoints: function(t) {
			this.makeEmpty();
			for (var e = 0, i = t.length; e < i; e++) {
				this.expandByPoint(t[e])
			}
			return this
		},
		setFromCenterAndSize: function() {
			var t = new i;
			return function(e, i) {
				var n = t.copy(i).multiplyScalar(0.5);
				return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
			}
		}(),
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.min.copy(t.min), this.max.copy(t.max), this
		},
		makeEmpty: function() {
			return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
		},
		isEmpty: function() {
			return this.max.x < this.min.x || this.max.y < this.min.y
		},
		getCenter: function(t) {
			var e = t || new i;
			return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5)
		},
		getSize: function(t) {
			var e = t || new i;
			return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min)
		},
		expandByPoint: function(t) {
			return this.min.min(t), this.max.max(t), this
		},
		expandByVector: function(t) {
			return this.min.sub(t), this.max.add(t), this
		},
		expandByScalar: function(t) {
			return this.min.addScalar(-t), this.max.addScalar(t), this
		},
		containsPoint: function(t) {
			return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
		},
		containsBox: function(t) {
			return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
		},
		getParameter: function(t, e) {
			return (e || new i).set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
		},
		intersectsBox: function(t) {
			return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
		},
		clampPoint: function(t, e) {
			return (e || new i).copy(t).clamp(this.min, this.max)
		},
		distanceToPoint: function() {
			var t = new i;
			return function(e) {
				return t.copy(e).clamp(this.min, this.max).sub(e).length()
			}
		}(),
		intersect: function(t) {
			return this.min.max(t.min), this.max.min(t.max), this
		},
		union: function(t) {
			return this.min.min(t.min), this.max.max(t.max), this
		},
		translate: function(t) {
			return this.min.add(t), this.max.add(t), this
		},
		equals: function(t) {
			return t.min.equals(this.min) && t.max.equals(this.max)
		}
	});
	var Jo = 0;
	Object.assign(J.prototype, e.prototype, {
		isMaterial: !0,
		setValues: function(t) {
			if (void 0 !== t) {
				for (var e in t) {
					var i = t[e];
					if (void 0 !== i) {
						var n = this[e];
						void 0 !== n ? n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[e] = "overdraw" === e ? Number(i) : i : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
					} else {
						console.warn("THREE.Material: '" + e + "' parameter is undefined.")
					}
				}
			}
		},
		toJSON: function(t) {
			function e(t) {
				var e = [];
				for (var i in t) {
					var n = t[i];
					delete n.metadata, e.push(n)
				}
				return e
			}
			var i = void 0 === t;
			i && (t = {
				textures: {},
				images: {}
			});
			var n = {
				metadata: {
					version: 4.5,
					type: "Material",
					generator: "Material.toJSON"
				}
			};
			if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearCoat && (n.clearCoat = this.clearCoat), void 0 !== this.clearCoatRoughness && (n.clearCoatRoughness = this.clearCoatRoughness), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, n.reflectivity = this.reflectivity), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (n.size = this.size), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== qr && (n.blending = this.blending), this.shading !== Vr && (n.shading = this.shading), this.side !== Br && (n.side = this.side), this.vertexColors !== kr && (n.vertexColors = this.vertexColors), this.opacity < 1 && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, this.alphaTest > 0 && (n.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), n.skinning = this.skinning, n.morphTargets = this.morphTargets, n.dithering = this.dithering, i) {
				var r = e(t.textures),
					a = e(t.images);
				r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a)
			}
			return n
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(t) {
			this.name = t.name, this.fog = t.fog, this.lights = t.lights, this.blending = t.blending, this.side = t.side, this.shading = t.shading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.overdraw = t.overdraw, this.visible = t.visible, this.clipShadows = t.clipShadows, this.clipIntersection = t.clipIntersection;
			var e = t.clippingPlanes,
				i = null;
			if (null !== e) {
				var n = e.length;
				i = new Array(n);
				for (var r = 0; r !== n; ++r) {
					i[r] = e[r].clone()
				}
			}
			return this.clippingPlanes = i, this
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	}), Q.prototype = Object.create(J.prototype), Q.prototype.constructor = Q, Q.prototype.isShaderMaterial = !0, Q.prototype.copy = function(t) {
		return J.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = qo.clone(t.uniforms), this.defines = t.defines, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this
	}, Q.prototype.toJSON = function(t) {
		var e = J.prototype.toJSON.call(this, t);
		return e.uniforms = this.uniforms, e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e
	}, K.prototype = Object.create(J.prototype), K.prototype.constructor = K, K.prototype.isMeshDepthMaterial = !0, K.prototype.copy = function(t) {
		return J.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
	}, Object.assign($.prototype, {
		isBox3: !0,
		set: function(t, e) {
			return this.min.copy(t), this.max.copy(e), this
		},
		setFromArray: function(t) {
			for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.length; s < c; s += 3) {
				var h = t[s],
					l = t[s + 1],
					u = t[s + 2];
				h < e && (e = h), l < i && (i = l), u < n && (n = u), h > r && (r = h), l > a && (a = l), u > o && (o = u)
			}
			return this.min.set(e, i, n), this.max.set(r, a, o), this
		},
		setFromBufferAttribute: function(t) {
			for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.count; s < c; s++) {
				var h = t.getX(s),
					l = t.getY(s),
					u = t.getZ(s);
				h < e && (e = h), l < i && (i = l), u < n && (n = u), h > r && (r = h), l > a && (a = l), u > o && (o = u)
			}
			return this.min.set(e, i, n), this.max.set(r, a, o), this
		},
		setFromPoints: function(t) {
			this.makeEmpty();
			for (var e = 0, i = t.length; e < i; e++) {
				this.expandByPoint(t[e])
			}
			return this
		},
		setFromCenterAndSize: function() {
			var t = new c;
			return function(e, i) {
				var n = t.copy(i).multiplyScalar(0.5);
				return this.min.copy(e).sub(n), this.max.copy(e).add(n), this
			}
		}(),
		setFromObject: function(t) {
			return this.makeEmpty(), this.expandByObject(t)
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.min.copy(t.min), this.max.copy(t.max), this
		},
		makeEmpty: function() {
			return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
		},
		isEmpty: function() {
			return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
		},
		getCenter: function(t) {
			var e = t || new c;
			return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5)
		},
		getSize: function(t) {
			var e = t || new c;
			return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
		},
		expandByPoint: function(t) {
			return this.min.min(t), this.max.max(t), this
		},
		expandByVector: function(t) {
			return this.min.sub(t), this.max.add(t), this
		},
		expandByScalar: function(t) {
			return this.min.addScalar(-t), this.max.addScalar(t), this
		},
		expandByObject: function() {
			var t = new c;
			return function(e) {
				var i = this;
				return e.updateMatrixWorld(!0), e.traverse(function(e) {
					var n, r, a = e.geometry;
					if (void 0 !== a) {
						if (a.isGeometry) {
							var o = a.vertices;
							for (n = 0, r = o.length; n < r; n++) {
								t.copy(o[n]), t.applyMatrix4(e.matrixWorld), i.expandByPoint(t)
							}
						} else {
							if (a.isBufferGeometry) {
								var s = a.attributes.position;
								if (void 0 !== s) {
									for (n = 0, r = s.count; n < r; n++) {
										t.fromBufferAttribute(s, n).applyMatrix4(e.matrixWorld), i.expandByPoint(t)
									}
								}
							}
						}
					}
				}), this
			}
		}(),
		containsPoint: function(t) {
			return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
		},
		containsBox: function(t) {
			return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
		},
		getParameter: function(t, e) {
			return (e || new c).set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
		},
		intersectsBox: function(t) {
			return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
		},
		intersectsSphere: function() {
			var t = new c;
			return function(e) {
				return this.clampPoint(e.center, t), t.distanceToSquared(e.center) <= e.radius * e.radius
			}
		}(),
		intersectsPlane: function(t) {
			var e, i;
			return t.normal.x > 0 ? (e = t.normal.x * this.min.x, i = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, i = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= t.constant && i >= t.constant
		},
		clampPoint: function(t, e) {
			return (e || new c).copy(t).clamp(this.min, this.max)
		},
		distanceToPoint: function() {
			var t = new c;
			return function(e) {
				return t.copy(e).clamp(this.min, this.max).sub(e).length()
			}
		}(),
		getBoundingSphere: function() {
			var t = new c;
			return function(e) {
				var i = e || new tt;
				return this.getCenter(i.center), i.radius = 0.5 * this.getSize(t).length(), i
			}
		}(),
		intersect: function(t) {
			return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
		},
		union: function(t) {
			return this.min.min(t.min), this.max.max(t.max), this
		},
		applyMatrix4: function() {
			var t = [new c, new c, new c, new c, new c, new c, new c, new c];
			return function(e) {
				return this.isEmpty() ? this : (t[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), t[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), t[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), t[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), t[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), t[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), t[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), t[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(t), this)
			}
		}(),
		translate: function(t) {
			return this.min.add(t), this.max.add(t), this
		},
		equals: function(t) {
			return t.min.equals(this.min) && t.max.equals(this.max)
		}
	}), Object.assign(tt.prototype, {
		set: function(t, e) {
			return this.center.copy(t), this.radius = e, this
		},
		setFromPoints: function() {
			var t = new $;
			return function(e, i) {
				var n = this.center;
				void 0 !== i ? n.copy(i) : t.setFromPoints(e).getCenter(n);
				for (var r = 0, a = 0, o = e.length; a < o; a++) {
					r = Math.max(r, n.distanceToSquared(e[a]))
				}
				return this.radius = Math.sqrt(r), this
			}
		}(),
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.center.copy(t.center), this.radius = t.radius, this
		},
		empty: function() {
			return this.radius <= 0
		},
		containsPoint: function(t) {
			return t.distanceToSquared(this.center) <= this.radius * this.radius
		},
		distanceToPoint: function(t) {
			return t.distanceTo(this.center) - this.radius
		},
		intersectsSphere: function(t) {
			var e = this.radius + t.radius;
			return t.center.distanceToSquared(this.center) <= e * e
		},
		intersectsBox: function(t) {
			return t.intersectsSphere(this)
		},
		intersectsPlane: function(t) {
			return Math.abs(this.center.dot(t.normal) - t.constant) <= this.radius
		},
		clampPoint: function(t, e) {
			var i = this.center.distanceToSquared(t),
				n = e || new c;
			return n.copy(t), i > this.radius * this.radius && (n.sub(this.center).normalize(), n.multiplyScalar(this.radius).add(this.center)), n
		},
		getBoundingBox: function(t) {
			var e = t || new $;
			return e.set(this.center, this.center), e.expandByScalar(this.radius), e
		},
		applyMatrix4: function(t) {
			return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this
		},
		translate: function(t) {
			return this.center.add(t), this
		},
		equals: function(t) {
			return t.center.equals(this.center) && t.radius === this.radius
		}
	}), Object.assign(et.prototype, {
		isMatrix3: !0,
		set: function(t, e, i, n, r, a, o, s, c) {
			var h = this.elements;
			return h[0] = t, h[1] = n, h[2] = o, h[3] = e, h[4] = r, h[5] = s, h[6] = i, h[7] = a, h[8] = c, this
		},
		identity: function() {
			return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
		},
		clone: function() {
			return (new this.constructor).fromArray(this.elements)
		},
		copy: function(t) {
			var e = this.elements,
				i = t.elements;
			return e[0] = i[0], e[1] = i[1], e[2] = i[2], e[3] = i[3], e[4] = i[4], e[5] = i[5], e[6] = i[6], e[7] = i[7], e[8] = i[8], this
		},
		setFromMatrix4: function(t) {
			var e = t.elements;
			return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this
		},
		applyToBufferAttribute: function() {
			var t = new c;
			return function(e) {
				for (var i = 0, n = e.count; i < n; i++) {
					t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.applyMatrix3(this), e.setXYZ(i, t.x, t.y, t.z)
				}
				return e
			}
		}(),
		multiply: function(t) {
			return this.multiplyMatrices(this, t)
		},
		premultiply: function(t) {
			return this.multiplyMatrices(t, this)
		},
		multiplyMatrices: function(t, e) {
			var i = t.elements,
				n = e.elements,
				r = this.elements,
				a = i[0],
				o = i[3],
				s = i[6],
				c = i[1],
				h = i[4],
				l = i[7],
				u = i[2],
				d = i[5],
				p = i[8],
				f = n[0],
				m = n[3],
				g = n[6],
				v = n[1],
				y = n[4],
				x = n[7],
				_ = n[2],
				b = n[5],
				w = n[8];
			return r[0] = a * f + o * v + s * _, r[3] = a * m + o * y + s * b, r[6] = a * g + o * x + s * w, r[1] = c * f + h * v + l * _, r[4] = c * m + h * y + l * b, r[7] = c * g + h * x + l * w, r[2] = u * f + d * v + p * _, r[5] = u * m + d * y + p * b, r[8] = u * g + d * x + p * w, this
		},
		multiplyScalar: function(t) {
			var e = this.elements;
			return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
		},
		determinant: function() {
			var t = this.elements,
				e = t[0],
				i = t[1],
				n = t[2],
				r = t[3],
				a = t[4],
				o = t[5],
				s = t[6],
				c = t[7],
				h = t[8];
			return e * a * h - e * o * c - i * r * h + i * o * s + n * r * c - n * a * s
		},
		getInverse: function(t, e) {
			t && t.isMatrix4 && console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");
			var i = t.elements,
				n = this.elements,
				r = i[0],
				a = i[1],
				o = i[2],
				s = i[3],
				c = i[4],
				h = i[5],
				l = i[6],
				u = i[7],
				d = i[8],
				p = d * c - h * u,
				f = h * l - d * s,
				m = u * s - c * l,
				g = r * p + a * f + o * m;
			if (0 === g) {
				var v = "THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0";
				if (!0 === e) {
					throw new Error(v)
				}
				return console.warn(v), this.identity()
			}
			var y = 1 / g;
			return n[0] = p * y, n[1] = (o * u - d * a) * y, n[2] = (h * a - o * c) * y, n[3] = f * y, n[4] = (d * r - o * l) * y, n[5] = (o * s - h * r) * y, n[6] = m * y, n[7] = (a * l - u * r) * y, n[8] = (c * r - a * s) * y, this
		},
		transpose: function() {
			var t, e = this.elements;
			return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this
		},
		getNormalMatrix: function(t) {
			return this.setFromMatrix4(t).getInverse(this).transpose()
		},
		transposeIntoArray: function(t) {
			var e = this.elements;
			return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
		},
		equals: function(t) {
			for (var e = this.elements, i = t.elements, n = 0; n < 9; n++) {
				if (e[n] !== i[n]) {
					return !1
				}
			}
			return !0
		},
		fromArray: function(t, e) {
			void 0 === e && (e = 0);
			for (var i = 0; i < 9; i++) {
				this.elements[i] = t[i + e]
			}
			return this
		},
		toArray: function(t, e) {
			void 0 === t && (t = []), void 0 === e && (e = 0);
			var i = this.elements;
			return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t
		}
	}), Object.assign(it.prototype, {
		set: function(t, e) {
			return this.normal.copy(t), this.constant = e, this
		},
		setComponents: function(t, e, i, n) {
			return this.normal.set(t, e, i), this.constant = n, this
		},
		setFromNormalAndCoplanarPoint: function(t, e) {
			return this.normal.copy(t), this.constant = -e.dot(this.normal), this
		},
		setFromCoplanarPoints: function() {
			var t = new c,
				e = new c;
			return function(i, n, r) {
				var a = t.subVectors(r, n).cross(e.subVectors(i, n)).normalize();
				return this.setFromNormalAndCoplanarPoint(a, i), this
			}
		}(),
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.normal.copy(t.normal), this.constant = t.constant, this
		},
		normalize: function() {
			var t = 1 / this.normal.length();
			return this.normal.multiplyScalar(t), this.constant *= t, this
		},
		negate: function() {
			return this.constant *= -1, this.normal.negate(), this
		},
		distanceToPoint: function(t) {
			return this.normal.dot(t) + this.constant
		},
		distanceToSphere: function(t) {
			return this.distanceToPoint(t.center) - t.radius
		},
		projectPoint: function(t, e) {
			return this.orthoPoint(t, e).sub(t).negate()
		},
		orthoPoint: function(t, e) {
			var i = this.distanceToPoint(t);
			return (e || new c).copy(this.normal).multiplyScalar(i)
		},
		intersectLine: function() {
			var t = new c;
			return function(e, i) {
				var n = i || new c,
					r = e.delta(t),
					a = this.normal.dot(r);
				if (0 !== a) {
					var o = -(e.start.dot(this.normal) + this.constant) / a;
					if (!(o < 0 || o > 1)) {
						return n.copy(r).multiplyScalar(o).add(e.start)
					}
				} else {
					if (0 === this.distanceToPoint(e.start)) {
						return n.copy(e.start)
					}
				}
			}
		}(),
		intersectsLine: function(t) {
			var e = this.distanceToPoint(t.start),
				i = this.distanceToPoint(t.end);
			return e < 0 && i > 0 || i < 0 && e > 0
		},
		intersectsBox: function(t) {
			return t.intersectsPlane(this)
		},
		intersectsSphere: function(t) {
			return t.intersectsPlane(this)
		},
		coplanarPoint: function(t) {
			return (t || new c).copy(this.normal).multiplyScalar(-this.constant)
		},
		applyMatrix4: function() {
			var t = new c,
				e = new et;
			return function(i, n) {
				var r = this.coplanarPoint(t).applyMatrix4(i),
					a = n || e.getNormalMatrix(i),
					o = this.normal.applyMatrix3(a).normalize();
				return this.constant = -r.dot(o), this
			}
		}(),
		translate: function(t) {
			return this.constant = this.constant - t.dot(this.normal), this
		},
		equals: function(t) {
			return t.normal.equals(this.normal) && t.constant === this.constant
		}
	}), Object.assign(nt.prototype, {
		set: function(t, e, i, n, r, a) {
			var o = this.planes;
			return o[0].copy(t), o[1].copy(e), o[2].copy(i), o[3].copy(n), o[4].copy(r), o[5].copy(a), this
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(t) {
			for (var e = this.planes, i = 0; i < 6; i++) {
				e[i].copy(t.planes[i])
			}
			return this
		},
		setFromMatrix: function(t) {
			var e = this.planes,
				i = t.elements,
				n = i[0],
				r = i[1],
				a = i[2],
				o = i[3],
				s = i[4],
				c = i[5],
				h = i[6],
				l = i[7],
				u = i[8],
				d = i[9],
				p = i[10],
				f = i[11],
				m = i[12],
				g = i[13],
				v = i[14],
				y = i[15];
			return e[0].setComponents(o - n, l - s, f - u, y - m).normalize(), e[1].setComponents(o + n, l + s, f + u, y + m).normalize(), e[2].setComponents(o + r, l + c, f + d, y + g).normalize(), e[3].setComponents(o - r, l - c, f - d, y - g).normalize(), e[4].setComponents(o - a, l - h, f - p, y - v).normalize(), e[5].setComponents(o + a, l + h, f + p, y + v).normalize(), this
		},
		intersectsObject: function() {
			var t = new tt;
			return function(e) {
				var i = e.geometry;
				return null === i.boundingSphere && i.computeBoundingSphere(), t.copy(i.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(t)
			}
		}(),
		intersectsSprite: function() {
			var t = new tt;
			return function(e) {
				return t.center.set(0, 0, 0), t.radius = 0.7071067811865476, t.applyMatrix4(e.matrixWorld), this.intersectsSphere(t)
			}
		}(),
		intersectsSphere: function(t) {
			for (var e = this.planes, i = t.center, n = -t.radius, r = 0; r < 6; r++) {
				if (e[r].distanceToPoint(i) < n) {
					return !1
				}
			}
			return !0
		},
		intersectsBox: function() {
			var t = new c,
				e = new c;
			return function(i) {
				for (var n = this.planes, r = 0; r < 6; r++) {
					var a = n[r];
					t.x = a.normal.x > 0 ? i.min.x : i.max.x, e.x = a.normal.x > 0 ? i.max.x : i.min.x, t.y = a.normal.y > 0 ? i.min.y : i.max.y, e.y = a.normal.y > 0 ? i.max.y : i.min.y, t.z = a.normal.z > 0 ? i.min.z : i.max.z, e.z = a.normal.z > 0 ? i.max.z : i.min.z;
					var o = a.distanceToPoint(t),
						s = a.distanceToPoint(e);
					if (o < 0 && s < 0) {
						return !1
					}
				}
				return !0
			}
		}(),
		containsPoint: function(t) {
			for (var e = this.planes, i = 0; i < 6; i++) {
				if (e[i].distanceToPoint(t) < 0) {
					return !1
				}
			}
			return !0
		}
	}), Object.assign(at.prototype, {
		set: function(t, e) {
			return this.origin.copy(t), this.direction.copy(e), this
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.origin.copy(t.origin), this.direction.copy(t.direction), this
		},
		at: function(t, e) {
			return (e || new c).copy(this.direction).multiplyScalar(t).add(this.origin)
		},
		lookAt: function(t) {
			return this.direction.copy(t).sub(this.origin).normalize(), this
		},
		recast: function() {
			var t = new c;
			return function(e) {
				return this.origin.copy(this.at(e, t)), this
			}
		}(),
		closestPointToPoint: function(t, e) {
			var i = e || new c;
			i.subVectors(t, this.origin);
			var n = i.dot(this.direction);
			return n < 0 ? i.copy(this.origin) : i.copy(this.direction).multiplyScalar(n).add(this.origin)
		},
		distanceToPoint: function(t) {
			return Math.sqrt(this.distanceSqToPoint(t))
		},
		distanceSqToPoint: function() {
			var t = new c;
			return function(e) {
				var i = t.subVectors(e, this.origin).dot(this.direction);
				return i < 0 ? this.origin.distanceToSquared(e) : (t.copy(this.direction).multiplyScalar(i).add(this.origin), t.distanceToSquared(e))
			}
		}(),
		distanceSqToSegment: function() {
			var t = new c,
				e = new c,
				i = new c;
			return function(n, r, a, o) {
				t.copy(n).add(r).multiplyScalar(0.5), e.copy(r).sub(n).normalize(), i.copy(this.origin).sub(t);
				var s, c, h, l, u = 0.5 * n.distanceTo(r),
					d = -this.direction.dot(e),
					p = i.dot(this.direction),
					f = -i.dot(e),
					m = i.lengthSq(),
					g = Math.abs(1 - d * d);
				if (g > 0) {
					if (s = d * f - p, c = d * p - f, l = u * g, s >= 0) {
						if (c >= -l) {
							if (c <= l) {
								var v = 1 / g;
								h = (s *= v) * (s + d * (c *= v) + 2 * p) + c * (d * s + c + 2 * f) + m
							} else {
								c = u, h = -(s = Math.max(0, -(d * c + p))) * s + c * (c + 2 * f) + m
							}
						} else {
							c = -u, h = -(s = Math.max(0, -(d * c + p))) * s + c * (c + 2 * f) + m
						}
					} else {
						c <= -l ? h = -(s = Math.max(0, -(-d * u + p))) * s + (c = s > 0 ? -u : Math.min(Math.max(-u, -f), u)) * (c + 2 * f) + m : c <= l ? (s = 0, h = (c = Math.min(Math.max(-u, -f), u)) * (c + 2 * f) + m) : h = -(s = Math.max(0, -(d * u + p))) * s + (c = s > 0 ? u : Math.min(Math.max(-u, -f), u)) * (c + 2 * f) + m
					}
				} else {
					c = d > 0 ? -u : u, h = -(s = Math.max(0, -(d * c + p))) * s + c * (c + 2 * f) + m
				}
				return a && a.copy(this.direction).multiplyScalar(s).add(this.origin), o && o.copy(e).multiplyScalar(c).add(t), h
			}
		}(),
		intersectSphere: function() {
			var t = new c;
			return function(e, i) {
				t.subVectors(e.center, this.origin);
				var n = t.dot(this.direction),
					r = t.dot(t) - n * n,
					a = e.radius * e.radius;
				if (r > a) {
					return null
				}
				var o = Math.sqrt(a - r),
					s = n - o,
					c = n + o;
				return s < 0 && c < 0 ? null : s < 0 ? this.at(c, i) : this.at(s, i)
			}
		}(),
		intersectsSphere: function(t) {
			return this.distanceToPoint(t.center) <= t.radius
		},
		distanceToPlane: function(t) {
			var e = t.normal.dot(this.direction);
			if (0 === e) {
				return 0 === t.distanceToPoint(this.origin) ? 0 : null
			}
			var i = -(this.origin.dot(t.normal) + t.constant) / e;
			return i >= 0 ? i : null
		},
		intersectPlane: function(t, e) {
			var i = this.distanceToPlane(t);
			return null === i ? null : this.at(i, e)
		},
		intersectsPlane: function(t) {
			var e = t.distanceToPoint(this.origin);
			return 0 === e || t.normal.dot(this.direction) * e < 0
		},
		intersectBox: function(t, e) {
			var i, n, r, a, o, s, c = 1 / this.direction.x,
				h = 1 / this.direction.y,
				l = 1 / this.direction.z,
				u = this.origin;
			return c >= 0 ? (i = (t.min.x - u.x) * c, n = (t.max.x - u.x) * c) : (i = (t.max.x - u.x) * c, n = (t.min.x - u.x) * c), h >= 0 ? (r = (t.min.y - u.y) * h, a = (t.max.y - u.y) * h) : (r = (t.max.y - u.y) * h, a = (t.min.y - u.y) * h), i > a || r > n ? null : ((r > i || i !== i) && (i = r), (a < n || n !== n) && (n = a), l >= 0 ? (o = (t.min.z - u.z) * l, s = (t.max.z - u.z) * l) : (o = (t.max.z - u.z) * l, s = (t.min.z - u.z) * l), i > s || o > n ? null : ((o > i || i !== i) && (i = o), (s < n || n !== n) && (n = s), n < 0 ? null : this.at(i >= 0 ? i : n, e)))
		},
		intersectsBox: function() {
			var t = new c;
			return function(e) {
				return null !== this.intersectBox(e, t)
			}
		}(),
		intersectTriangle: function() {
			var t = new c,
				e = new c,
				i = new c,
				n = new c;
			return function(r, a, o, s, c) {
				e.subVectors(a, r), i.subVectors(o, r), n.crossVectors(e, i);
				var h, l = this.direction.dot(n);
				if (l > 0) {
					if (s) {
						return null
					}
					h = 1
				} else {
					if (!(l < 0)) {
						return null
					}
					h = -1, l = -l
				}
				t.subVectors(this.origin, r);
				var u = h * this.direction.dot(i.crossVectors(t, i));
				if (u < 0) {
					return null
				}
				var d = h * this.direction.dot(e.cross(t));
				if (d < 0) {
					return null
				}
				if (u + d > l) {
					return null
				}
				var p = -h * t.dot(n);
				return p < 0 ? null : this.at(p / l, c)
			}
		}(),
		applyMatrix4: function(t) {
			return this.direction.add(this.origin).applyMatrix4(t), this.origin.applyMatrix4(t), this.direction.sub(this.origin), this.direction.normalize(), this
		},
		equals: function(t) {
			return t.origin.equals(this.origin) && t.direction.equals(this.direction)
		}
	}), ot.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"], ot.DefaultOrder = "XYZ", Object.defineProperties(ot.prototype, {
		x: {
			get: function() {
				return this._x
			},
			set: function(t) {
				this._x = t, this.onChangeCallback()
			}
		},
		y: {
			get: function() {
				return this._y
			},
			set: function(t) {
				this._y = t, this.onChangeCallback()
			}
		},
		z: {
			get: function() {
				return this._z
			},
			set: function(t) {
				this._z = t, this.onChangeCallback()
			}
		},
		order: {
			get: function() {
				return this._order
			},
			set: function(t) {
				this._order = t, this.onChangeCallback()
			}
		}
	}), Object.assign(ot.prototype, {
		isEuler: !0,
		set: function(t, e, i, n) {
			return this._x = t, this._y = e, this._z = i, this._order = n || this._order, this.onChangeCallback(), this
		},
		clone: function() {
			return new this.constructor(this._x, this._y, this._z, this._order)
		},
		copy: function(t) {
			return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this.onChangeCallback(), this
		},
		setFromRotationMatrix: function(t, e, i) {
			var n = Do.clamp,
				r = t.elements,
				a = r[0],
				o = r[4],
				s = r[8],
				c = r[1],
				h = r[5],
				l = r[9],
				u = r[2],
				d = r[6],
				p = r[10];
			return "XYZ" === (e = e || this._order) ? (this._y = Math.asin(n(s, -1, 1)), Math.abs(s) < 0.99999 ? (this._x = Math.atan2(-l, p), this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(d, h), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-n(l, -1, 1)), Math.abs(l) < 0.99999 ? (this._y = Math.atan2(s, p), this._z = Math.atan2(c, h)) : (this._y = Math.atan2(-u, a), this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(n(d, -1, 1)), Math.abs(d) < 0.99999 ? (this._y = Math.atan2(-u, p), this._z = Math.atan2(-o, h)) : (this._y = 0, this._z = Math.atan2(c, a))) : "ZYX" === e ? (this._y = Math.asin(-n(u, -1, 1)), Math.abs(u) < 0.99999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(c, a)) : (this._x = 0, this._z = Math.atan2(-o, h))) : "YZX" === e ? (this._z = Math.asin(n(c, -1, 1)), Math.abs(c) < 0.99999 ? (this._x = Math.atan2(-l, h), this._y = Math.atan2(-u, a)) : (this._x = 0, this._y = Math.atan2(s, p))) : "XZY" === e ? (this._z = Math.asin(-n(o, -1, 1)), Math.abs(o) < 0.99999 ? (this._x = Math.atan2(d, h), this._y = Math.atan2(s, a)) : (this._x = Math.atan2(-l, p), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e), this._order = e, !1 !== i && this.onChangeCallback(), this
		},
		setFromQuaternion: function() {
			var t = new h;
			return function(e, i, n) {
				return t.makeRotationFromQuaternion(e), this.setFromRotationMatrix(t, i, n)
			}
		}(),
		setFromVector3: function(t, e) {
			return this.set(t.x, t.y, t.z, e || this._order)
		},
		reorder: function() {
			var t = new s;
			return function(e) {
				return t.setFromEuler(this), this.setFromQuaternion(t, e)
			}
		}(),
		equals: function(t) {
			return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
		},
		fromArray: function(t) {
			return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this.onChangeCallback(), this
		},
		toArray: function(t, e) {
			return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
		},
		toVector3: function(t) {
			return t ? t.set(this._x, this._y, this._z) : new c(this._x, this._y, this._z)
		},
		onChange: function(t) {
			return this.onChangeCallback = t, this
		},
		onChangeCallback: function() {}
	}), Object.assign(st.prototype, {
		set: function(t) {
			this.mask = 1 << t | 0
		},
		enable: function(t) {
			this.mask |= 1 << t | 0
		},
		toggle: function(t) {
			this.mask ^= 1 << t | 0
		},
		disable: function(t) {
			this.mask &= ~(1 << t | 0)
		},
		test: function(t) {
			return 0 != (this.mask & t.mask)
		}
	});
	var Qo = 0;
	ct.DefaultUp = new c(0, 1, 0), ct.DefaultMatrixAutoUpdate = !0, Object.assign(ct.prototype, e.prototype, {
		isObject3D: !0,
		onBeforeRender: function() {},
		onAfterRender: function() {},
		applyMatrix: function(t) {
			this.matrix.multiplyMatrices(t, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
		},
		applyQuaternion: function(t) {
			return this.quaternion.premultiply(t), this
		},
		setRotationFromAxisAngle: function(t, e) {
			this.quaternion.setFromAxisAngle(t, e)
		},
		setRotationFromEuler: function(t) {
			this.quaternion.setFromEuler(t, !0)
		},
		setRotationFromMatrix: function(t) {
			this.quaternion.setFromRotationMatrix(t)
		},
		setRotationFromQuaternion: function(t) {
			this.quaternion.copy(t)
		},
		rotateOnAxis: function() {
			var t = new s;
			return function(e, i) {
				return t.setFromAxisAngle(e, i), this.quaternion.multiply(t), this
			}
		}(),
		rotateX: function() {
			var t = new c(1, 0, 0);
			return function(e) {
				return this.rotateOnAxis(t, e)
			}
		}(),
		rotateY: function() {
			var t = new c(0, 1, 0);
			return function(e) {
				return this.rotateOnAxis(t, e)
			}
		}(),
		rotateZ: function() {
			var t = new c(0, 0, 1);
			return function(e) {
				return this.rotateOnAxis(t, e)
			}
		}(),
		translateOnAxis: function() {
			var t = new c;
			return function(e, i) {
				return t.copy(e).applyQuaternion(this.quaternion), this.position.add(t.multiplyScalar(i)), this
			}
		}(),
		translateX: function() {
			var t = new c(1, 0, 0);
			return function(e) {
				return this.translateOnAxis(t, e)
			}
		}(),
		translateY: function() {
			var t = new c(0, 1, 0);
			return function(e) {
				return this.translateOnAxis(t, e)
			}
		}(),
		translateZ: function() {
			var t = new c(0, 0, 1);
			return function(e) {
				return this.translateOnAxis(t, e)
			}
		}(),
		localToWorld: function(t) {
			return t.applyMatrix4(this.matrixWorld)
		},
		worldToLocal: function() {
			var t = new h;
			return function(e) {
				return e.applyMatrix4(t.getInverse(this.matrixWorld))
			}
		}(),
		lookAt: function() {
			var t = new h;
			return function(e) {
				this.isCamera ? t.lookAt(this.position, e, this.up) : t.lookAt(e, this.position, this.up), this.quaternion.setFromRotationMatrix(t)
			}
		}(),
		add: function(t) {
			if (arguments.length > 1) {
				for (var e = 0; e < arguments.length; e++) {
					this.add(arguments[e])
				}
				return this
			}
			return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, t.dispatchEvent({
				type: "added"
			}), this.children.push(t)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
		},
		remove: function(t) {
			if (arguments.length > 1) {
				for (var e = 0; e < arguments.length; e++) {
					this.remove(arguments[e])
				}
			}
			var i = this.children.indexOf(t); - 1 !== i && (t.parent = null, t.dispatchEvent({
				type: "removed"
			}), this.children.splice(i, 1))
		},
		getObjectById: function(t) {
			return this.getObjectByProperty("id", t)
		},
		getObjectByName: function(t) {
			return this.getObjectByProperty("name", t)
		},
		getObjectByProperty: function(t, e) {
			if (this[t] === e) {
				return this
			}
			for (var i = 0, n = this.children.length; i < n; i++) {
				var r = this.children[i].getObjectByProperty(t, e);
				if (void 0 !== r) {
					return r
				}
			}
		},
		getWorldPosition: function(t) {
			var e = t || new c;
			return this.updateMatrixWorld(!0), e.setFromMatrixPosition(this.matrixWorld)
		},
		getWorldQuaternion: function() {
			var t = new c,
				e = new c;
			return function(i) {
				var n = i || new s;
				return this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, n, e), n
			}
		}(),
		getWorldRotation: function() {
			var t = new s;
			return function(e) {
				var i = e || new ot;
				return this.getWorldQuaternion(t), i.setFromQuaternion(t, this.rotation.order, !1)
			}
		}(),
		getWorldScale: function() {
			var t = new c,
				e = new s;
			return function(i) {
				var n = i || new c;
				return this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, e, n), n
			}
		}(),
		getWorldDirection: function() {
			var t = new s;
			return function(e) {
				var i = e || new c;
				return this.getWorldQuaternion(t), i.set(0, 0, 1).applyQuaternion(t)
			}
		}(),
		raycast: function() {},
		traverse: function(t) {
			t(this);
			for (var e = this.children, i = 0, n = e.length; i < n; i++) {
				e[i].traverse(t)
			}
		},
		traverseVisible: function(t) {
			if (!1 !== this.visible) {
				t(this);
				for (var e = this.children, i = 0, n = e.length; i < n; i++) {
					e[i].traverseVisible(t)
				}
			}
		},
		traverseAncestors: function(t) {
			var e = this.parent;
			null !== e && (t(e), e.traverseAncestors(t))
		},
		updateMatrix: function() {
			this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
		},
		updateMatrixWorld: function(t) {
			this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
			for (var e = this.children, i = 0, n = e.length; i < n; i++) {
				e[i].updateMatrixWorld(t)
			}
		},
		toJSON: function(t) {
			function e(e, i) {
				return void 0 === e[i.uuid] && (e[i.uuid] = i.toJSON(t)), i.uuid
			}

			function i(t) {
				var e = [];
				for (var i in t) {
					var n = t[i];
					delete n.metadata, e.push(n)
				}
				return e
			}
			var n = void 0 === t || "" === t,
				r = {};
			n && (t = {
				geometries: {},
				materials: {},
				textures: {},
				images: {}
			}, r.metadata = {
				version: 4.5,
				type: "Object",
				generator: "Object3D.toJSON"
			});
			var a = {};
			if (a.uuid = this.uuid, a.type = this.type, "" !== this.name && (a.name = this.name), "{}" !== JSON.stringify(this.userData) && (a.userData = this.userData), !0 === this.castShadow && (a.castShadow = !0), !0 === this.receiveShadow && (a.receiveShadow = !0), !1 === this.visible && (a.visible = !1), a.matrix = this.matrix.toArray(), void 0 !== this.geometry && (a.geometry = e(t.geometries, this.geometry)), void 0 !== this.material) {
				if (Array.isArray(this.material)) {
					for (var o = [], s = 0, c = this.material.length; s < c; s++) {
						o.push(e(t.materials, this.material[s]))
					}
					a.material = o
				} else {
					a.material = e(t.materials, this.material)
				}
			}
			if (this.children.length > 0) {
				for (a.children = [], s = 0; s < this.children.length; s++) {
					a.children.push(this.children[s].toJSON(t).object)
				}
			}
			if (n) {
				var h = i(t.geometries),
					l = i(t.materials),
					u = i(t.textures),
					d = i(t.images);
				h.length > 0 && (r.geometries = h), l.length > 0 && (r.materials = l), u.length > 0 && (r.textures = u), d.length > 0 && (r.images = d)
			}
			return r.object = a, r
		},
		clone: function(t) {
			return (new this.constructor).copy(this, t)
		},
		copy: function(t, e) {
			if (void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e) {
				for (var i = 0; i < t.children.length; i++) {
					var n = t.children[i];
					this.add(n.clone())
				}
			}
			return this
		}
	}), Object.assign(ht.prototype, {
		set: function(t, e) {
			return this.start.copy(t), this.end.copy(e), this
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.start.copy(t.start), this.end.copy(t.end), this
		},
		getCenter: function(t) {
			return (t || new c).addVectors(this.start, this.end).multiplyScalar(0.5)
		},
		delta: function(t) {
			return (t || new c).subVectors(this.end, this.start)
		},
		distanceSq: function() {
			return this.start.distanceToSquared(this.end)
		},
		distance: function() {
			return this.start.distanceTo(this.end)
		},
		at: function(t, e) {
			var i = e || new c;
			return this.delta(i).multiplyScalar(t).add(this.start)
		},
		closestPointToPointParameter: function() {
			var t = new c,
				e = new c;
			return function(i, n) {
				t.subVectors(i, this.start), e.subVectors(this.end, this.start);
				var r = e.dot(e),
					a = e.dot(t) / r;
				return n && (a = Do.clamp(a, 0, 1)), a
			}
		}(),
		closestPointToPoint: function(t, e, i) {
			var n = this.closestPointToPointParameter(t, e),
				r = i || new c;
			return this.delta(r).multiplyScalar(n).add(this.start)
		},
		applyMatrix4: function(t) {
			return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
		},
		equals: function(t) {
			return t.start.equals(this.start) && t.end.equals(this.end)
		}
	}), Object.assign(lt, {
		normal: function() {
			var t = new c;
			return function(e, i, n, r) {
				var a = r || new c;
				a.subVectors(n, i), t.subVectors(e, i), a.cross(t);
				var o = a.lengthSq();
				return o > 0 ? a.multiplyScalar(1 / Math.sqrt(o)) : a.set(0, 0, 0)
			}
		}(),
		barycoordFromPoint: function() {
			var t = new c,
				e = new c,
				i = new c;
			return function(n, r, a, o, s) {
				t.subVectors(o, r), e.subVectors(a, r), i.subVectors(n, r);
				var h = t.dot(t),
					l = t.dot(e),
					u = t.dot(i),
					d = e.dot(e),
					p = e.dot(i),
					f = h * d - l * l,
					m = s || new c;
				if (0 === f) {
					return m.set(-2, -1, -1)
				}
				var g = 1 / f,
					v = (d * u - l * p) * g,
					y = (h * p - l * u) * g;
				return m.set(1 - v - y, y, v)
			}
		}(),
		containsPoint: function() {
			var t = new c;
			return function(e, i, n, r) {
				var a = lt.barycoordFromPoint(e, i, n, r, t);
				return a.x >= 0 && a.y >= 0 && a.x + a.y <= 1
			}
		}()
	}), Object.assign(lt.prototype, {
		set: function(t, e, i) {
			return this.a.copy(t), this.b.copy(e), this.c.copy(i), this
		},
		setFromPointsAndIndices: function(t, e, i, n) {
			return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[n]), this
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
		},
		area: function() {
			var t = new c,
				e = new c;
			return function() {
				return t.subVectors(this.c, this.b), e.subVectors(this.a, this.b), 0.5 * t.cross(e).length()
			}
		}(),
		midpoint: function(t) {
			return (t || new c).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
		},
		normal: function(t) {
			return lt.normal(this.a, this.b, this.c, t)
		},
		plane: function(t) {
			return (t || new it).setFromCoplanarPoints(this.a, this.b, this.c)
		},
		barycoordFromPoint: function(t, e) {
			return lt.barycoordFromPoint(t, this.a, this.b, this.c, e)
		},
		containsPoint: function(t) {
			return lt.containsPoint(t, this.a, this.b, this.c)
		},
		closestPointToPoint: function() {
			var t = new it,
				e = [new ht, new ht, new ht],
				i = new c,
				n = new c;
			return function(r, a) {
				var o = a || new c,
					s = 1 / 0;
				if (t.setFromCoplanarPoints(this.a, this.b, this.c), t.projectPoint(r, i), !0 === this.containsPoint(i)) {
					o.copy(i)
				} else {
					e[0].set(this.a, this.b), e[1].set(this.b, this.c), e[2].set(this.c, this.a);
					for (var h = 0; h < e.length; h++) {
						e[h].closestPointToPoint(i, !0, n);
						var l = i.distanceToSquared(n);
						l < s && (s = l, o.copy(n))
					}
				}
				return o
			}
		}(),
		equals: function(t) {
			return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
		}
	}), Object.assign(ut.prototype, {
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(t) {
			this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;
			for (var e = 0, i = t.vertexNormals.length; e < i; e++) {
				this.vertexNormals[e] = t.vertexNormals[e].clone()
			}
			for (var e = 0, i = t.vertexColors.length; e < i; e++) {
				this.vertexColors[e] = t.vertexColors[e].clone()
			}
			return this
		}
	}), dt.prototype = Object.create(J.prototype), dt.prototype.constructor = dt, dt.prototype.isMeshBasicMaterial = !0, dt.prototype.copy = function(t) {
		return J.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
	}, Object.defineProperty(pt.prototype, "needsUpdate", {
		set: function(t) {
			!0 === t && this.version++
		}
	}), Object.assign(pt.prototype, {
		isBufferAttribute: !0,
		setArray: function(t) {
			if (Array.isArray(t)) {
				throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.")
			}
			this.count = void 0 !== t ? t.length / this.itemSize : 0, this.array = t
		},
		setDynamic: function(t) {
			return this.dynamic = t, this
		},
		copy: function(t) {
			return this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.dynamic = t.dynamic, this
		},
		copyAt: function(t, e, i) {
			t *= this.itemSize, i *= e.itemSize;
			for (var n = 0, r = this.itemSize; n < r; n++) {
				this.array[t + n] = e.array[i + n]
			}
			return this
		},
		copyArray: function(t) {
			return this.array.set(t), this
		},
		copyColorsArray: function(t) {
			for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
				var a = t[n];
				void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", n), a = new X), e[i++] = a.r, e[i++] = a.g, e[i++] = a.b
			}
			return this
		},
		copyIndicesArray: function(t) {
			for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
				var a = t[n];
				e[i++] = a.a, e[i++] = a.b, e[i++] = a.c
			}
			return this
		},
		copyVector2sArray: function(t) {
			for (var e = this.array, n = 0, r = 0, a = t.length; r < a; r++) {
				var o = t[r];
				void 0 === o && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r), o = new i), e[n++] = o.x, e[n++] = o.y
			}
			return this
		},
		copyVector3sArray: function(t) {
			for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
				var a = t[n];
				void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", n), a = new c), e[i++] = a.x, e[i++] = a.y, e[i++] = a.z
			}
			return this
		},
		copyVector4sArray: function(t) {
			for (var e = this.array, i = 0, n = 0, a = t.length; n < a; n++) {
				var o = t[n];
				void 0 === o && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n), o = new r), e[i++] = o.x, e[i++] = o.y, e[i++] = o.z, e[i++] = o.w
			}
			return this
		},
		set: function(t, e) {
			return void 0 === e && (e = 0), this.array.set(t, e), this
		},
		getX: function(t) {
			return this.array[t * this.itemSize]
		},
		setX: function(t, e) {
			return this.array[t * this.itemSize] = e, this
		},
		getY: function(t) {
			return this.array[t * this.itemSize + 1]
		},
		setY: function(t, e) {
			return this.array[t * this.itemSize + 1] = e, this
		},
		getZ: function(t) {
			return this.array[t * this.itemSize + 2]
		},
		setZ: function(t, e) {
			return this.array[t * this.itemSize + 2] = e, this
		},
		getW: function(t) {
			return this.array[t * this.itemSize + 3]
		},
		setW: function(t, e) {
			return this.array[t * this.itemSize + 3] = e, this
		},
		setXY: function(t, e, i) {
			return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this
		},
		setXYZ: function(t, e, i, n) {
			return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this
		},
		setXYZW: function(t, e, i, n, r) {
			return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this.array[t + 3] = r, this
		},
		onUpload: function(t) {
			return this.onUploadCallback = t, this
		},
		clone: function() {
			return new this.constructor(this.array, this.itemSize).copy(this)
		}
	}), (ft.prototype = Object.create(pt.prototype)).constructor = ft, (mt.prototype = Object.create(pt.prototype)).constructor = mt, (gt.prototype = Object.create(pt.prototype)).constructor = gt, (vt.prototype = Object.create(pt.prototype)).constructor = vt, yt.prototype = Object.create(pt.prototype), yt.prototype.constructor = yt, (xt.prototype = Object.create(pt.prototype)).constructor = xt, _t.prototype = Object.create(pt.prototype), _t.prototype.constructor = _t, bt.prototype = Object.create(pt.prototype), bt.prototype.constructor = bt, (wt.prototype = Object.create(pt.prototype)).constructor = wt, Object.assign(Mt.prototype, {
		computeGroups: function(t) {
			for (var e, i = [], n = void 0, r = t.faces, a = 0; a < r.length; a++) {
				var o = r[a];
				o.materialIndex !== n && (n = o.materialIndex, void 0 !== e && (e.count = 3 * a - e.start, i.push(e)), e = {
					start: 3 * a,
					materialIndex: n
				})
			}
			void 0 !== e && (e.count = 3 * a - e.start, i.push(e)), this.groups = i
		},
		fromGeometry: function(t) {
			var e, n = t.faces,
				r = t.vertices,
				a = t.faceVertexUvs,
				o = a[0] && a[0].length > 0,
				s = a[1] && a[1].length > 0,
				c = t.morphTargets,
				h = c.length;
			if (h > 0) {
				for (e = [], v = 0; v < h; v++) {
					e[v] = []
				}
				this.morphTargets.position = e
			}
			var l, u = t.morphNormals,
				d = u.length;
			if (d > 0) {
				for (l = [], v = 0; v < d; v++) {
					l[v] = []
				}
				this.morphTargets.normal = l
			}
			for (var p = t.skinIndices, f = t.skinWeights, m = p.length === r.length, g = f.length === r.length, v = 0; v < n.length; v++) {
				var y = n[v];
				this.vertices.push(r[y.a], r[y.b], r[y.c]);
				var x = y.vertexNormals;
				if (3 === x.length) {
					this.normals.push(x[0], x[1], x[2])
				} else {
					var _ = y.normal;
					this.normals.push(_, _, _)
				}
				var b = y.vertexColors;
				if (3 === b.length) {
					this.colors.push(b[0], b[1], b[2])
				} else {
					var w = y.color;
					this.colors.push(w, w, w)
				}
				if (!0 === o && (void 0 !== (M = a[0][v]) ? this.uvs.push(M[0], M[1], M[2]) : (this.uvs.push(new i, new i, new i))), !0 === s) {
					var M = a[1][v];
					void 0 !== M ? this.uvs2.push(M[0], M[1], M[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", v), this.uvs2.push(new i, new i, new i))
				}
				for (T = 0; T < h; T++) {
					var E = c[T].vertices;
					e[T].push(E[y.a], E[y.b], E[y.c])
				}
				for (var T = 0; T < d; T++) {
					var S = u[T].vertexNormals[v];
					l[T].push(S.a, S.b, S.c)
				}
				m && this.skinIndices.push(p[y.a], p[y.b], p[y.c]), g && this.skinWeights.push(f[y.a], f[y.b], f[y.c])
			}
			return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
		}
	});
	var Ko = 0;
	Object.assign(St.prototype, e.prototype, {
		isGeometry: !0,
		applyMatrix: function(t) {
			for (var e = (new et).getNormalMatrix(t), i = 0, n = this.vertices.length; i < n; i++) {
				this.vertices[i].applyMatrix4(t)
			}
			for (var i = 0, n = this.faces.length; i < n; i++) {
				var r = this.faces[i];
				r.normal.applyMatrix3(e).normalize();
				for (var a = 0, o = r.vertexNormals.length; a < o; a++) {
					r.vertexNormals[a].applyMatrix3(e).normalize()
				}
			}
			return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.verticesNeedUpdate = !0, this.normalsNeedUpdate = !0, this
		},
		rotateX: function() {
			var t = new h;
			return function(e) {
				return t.makeRotationX(e), this.applyMatrix(t), this
			}
		}(),
		rotateY: function() {
			var t = new h;
			return function(e) {
				return t.makeRotationY(e), this.applyMatrix(t), this
			}
		}(),
		rotateZ: function() {
			var t = new h;
			return function(e) {
				return t.makeRotationZ(e), this.applyMatrix(t), this
			}
		}(),
		translate: function() {
			var t = new h;
			return function(e, i, n) {
				return t.makeTranslation(e, i, n), this.applyMatrix(t), this
			}
		}(),
		scale: function() {
			var t = new h;
			return function(e, i, n) {
				return t.makeScale(e, i, n), this.applyMatrix(t), this
			}
		}(),
		lookAt: function() {
			var t = new ct;
			return function(e) {
				t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
			}
		}(),
		fromBufferGeometry: function(t) {
			function e(t, e, i, r) {
				var a = new ut(t, e, i, void 0 !== s ? [d[t].clone(), d[e].clone(), d[i].clone()] : [], void 0 !== h ? [n.colors[t].clone(), n.colors[e].clone(), n.colors[i].clone()] : [], r);
				n.faces.push(a), void 0 !== l && n.faceVertexUvs[0].push([p[t].clone(), p[e].clone(), p[i].clone()]), void 0 !== u && n.faceVertexUvs[1].push([f[t].clone(), f[e].clone(), f[i].clone()])
			}
			var n = this,
				r = null !== t.index ? t.index.array : void 0,
				a = t.attributes,
				o = a.position.array,
				s = void 0 !== a.normal ? a.normal.array : void 0,
				h = void 0 !== a.color ? a.color.array : void 0,
				l = void 0 !== a.uv ? a.uv.array : void 0,
				u = void 0 !== a.uv2 ? a.uv2.array : void 0;
			void 0 !== u && (this.faceVertexUvs[1] = []);
			for (var d = [], p = [], f = [], m = 0, g = 0; m < o.length; m += 3, g += 2) {
				n.vertices.push(new c(o[m], o[m + 1], o[m + 2])), void 0 !== s && d.push(new c(s[m], s[m + 1], s[m + 2])), void 0 !== h && n.colors.push(new X(h[m], h[m + 1], h[m + 2])), void 0 !== l && p.push(new i(l[g], l[g + 1])), void 0 !== u && f.push(new i(u[g], u[g + 1]))
			}
			var v = t.groups;
			if (v.length > 0) {
				for (m = 0; m < v.length; m++) {
					for (var y = v[m], x = y.start, g = x, _ = x + y.count; g < _; g += 3) {
						void 0 !== r ? e(r[g], r[g + 1], r[g + 2], y.materialIndex) : e(g, g + 1, g + 2, y.materialIndex)
					}
				}
			} else {
				if (void 0 !== r) {
					for (m = 0; m < r.length; m += 3) {
						e(r[m], r[m + 1], r[m + 2])
					}
				} else {
					for (m = 0; m < o.length / 3; m += 3) {
						e(m, m + 1, m + 2)
					}
				}
			}
			return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this
		},
		center: function() {
			this.computeBoundingBox();
			var t = this.boundingBox.getCenter().negate();
			return this.translate(t.x, t.y, t.z), t
		},
		normalize: function() {
			this.computeBoundingSphere();
			var t = this.boundingSphere.center,
				e = this.boundingSphere.radius,
				i = 0 === e ? 1 : 1 / e,
				n = new h;
			return n.set(i, 0, 0, -i * t.x, 0, i, 0, -i * t.y, 0, 0, i, -i * t.z, 0, 0, 0, 1), this.applyMatrix(n), this
		},
		computeFaceNormals: function() {
			for (var t = new c, e = new c, i = 0, n = this.faces.length; i < n; i++) {
				var r = this.faces[i],
					a = this.vertices[r.a],
					o = this.vertices[r.b],
					s = this.vertices[r.c];
				t.subVectors(s, o), e.subVectors(a, o), t.cross(e), t.normalize(), r.normal.copy(t)
			}
		},
		computeVertexNormals: function(t) {
			void 0 === t && (t = !0);
			var e, i, n, r, a, o;
			for (o = new Array(this.vertices.length), e = 0, i = this.vertices.length; e < i; e++) {
				o[e] = new c
			}
			if (t) {
				var s, h, l, u = new c,
					d = new c;
				for (n = 0, r = this.faces.length; n < r; n++) {
					a = this.faces[n], s = this.vertices[a.a], h = this.vertices[a.b], l = this.vertices[a.c], u.subVectors(l, h), d.subVectors(s, h), u.cross(d), o[a.a].add(u), o[a.b].add(u), o[a.c].add(u)
				}
			} else {
				for (this.computeFaceNormals(), n = 0, r = this.faces.length; n < r; n++) {
					o[(a = this.faces[n]).a].add(a.normal), o[a.b].add(a.normal), o[a.c].add(a.normal)
				}
			}
			for (e = 0, i = this.vertices.length; e < i; e++) {
				o[e].normalize()
			}
			for (n = 0, r = this.faces.length; n < r; n++) {
				var p = (a = this.faces[n]).vertexNormals;
				3 === p.length ? (p[0].copy(o[a.a]), p[1].copy(o[a.b]), p[2].copy(o[a.c])) : (p[0] = o[a.a].clone(), p[1] = o[a.b].clone(), p[2] = o[a.c].clone())
			}
			this.faces.length > 0 && (this.normalsNeedUpdate = !0)
		},
		computeFlatVertexNormals: function() {
			var t, e, i;
			for (this.computeFaceNormals(), t = 0, e = this.faces.length; t < e; t++) {
				var n = (i = this.faces[t]).vertexNormals;
				3 === n.length ? (n[0].copy(i.normal), n[1].copy(i.normal), n[2].copy(i.normal)) : (n[0] = i.normal.clone(), n[1] = i.normal.clone(), n[2] = i.normal.clone())
			}
			this.faces.length > 0 && (this.normalsNeedUpdate = !0)
		},
		computeMorphNormals: function() {
			var t, e, i, n, r;
			for (i = 0, n = this.faces.length; i < n; i++) {
				for ((r = this.faces[i]).__originalFaceNormal ? r.__originalFaceNormal.copy(r.normal) : r.__originalFaceNormal = r.normal.clone(), r.__originalVertexNormals || (r.__originalVertexNormals = []), t = 0, e = r.vertexNormals.length; t < e; t++) {
					r.__originalVertexNormals[t] ? r.__originalVertexNormals[t].copy(r.vertexNormals[t]) : r.__originalVertexNormals[t] = r.vertexNormals[t].clone()
				}
			}
			var a = new St;
			for (a.faces = this.faces, t = 0, e = this.morphTargets.length; t < e; t++) {
				if (!this.morphNormals[t]) {
					this.morphNormals[t] = {}, this.morphNormals[t].faceNormals = [], this.morphNormals[t].vertexNormals = [];
					var o = this.morphNormals[t].faceNormals,
						s = this.morphNormals[t].vertexNormals;
					for (i = 0, n = this.faces.length; i < n; i++) {
						l = new c, u = {
							a: new c,
							b: new c,
							c: new c
						}, o.push(l), s.push(u)
					}
				}
				var h = this.morphNormals[t];
				a.vertices = this.morphTargets[t].vertices, a.computeFaceNormals(), a.computeVertexNormals();
				var l, u;
				for (i = 0, n = this.faces.length; i < n; i++) {
					r = this.faces[i], l = h.faceNormals[i], u = h.vertexNormals[i], l.copy(r.normal), u.a.copy(r.vertexNormals[0]), u.b.copy(r.vertexNormals[1]), u.c.copy(r.vertexNormals[2])
				}
			}
			for (i = 0, n = this.faces.length; i < n; i++) {
				(r = this.faces[i]).normal = r.__originalFaceNormal, r.vertexNormals = r.__originalVertexNormals
			}
		},
		computeLineDistances: function() {
			for (var t = 0, e = this.vertices, i = 0, n = e.length; i < n; i++) {
				i > 0 && (t += e[i].distanceTo(e[i - 1])), this.lineDistances[i] = t
			}
		},
		computeBoundingBox: function() {
			null === this.boundingBox && (this.boundingBox = new $), this.boundingBox.setFromPoints(this.vertices)
		},
		computeBoundingSphere: function() {
			null === this.boundingSphere && (this.boundingSphere = new tt), this.boundingSphere.setFromPoints(this.vertices)
		},
		merge: function(t, e, i) {
			if (!1 !== (t && t.isGeometry)) {
				var n, r = this.vertices.length,
					a = this.vertices,
					o = t.vertices,
					s = this.faces,
					c = t.faces,
					h = this.faceVertexUvs[0],
					l = t.faceVertexUvs[0],
					u = this.colors,
					d = t.colors;
				void 0 === i && (i = 0), void 0 !== e && (n = (new et).getNormalMatrix(e));
				for (var p = 0, f = o.length; p < f; p++) {
					var m = o[p].clone();
					void 0 !== e && m.applyMatrix4(e), a.push(m)
				}
				for (var p = 0, f = d.length; p < f; p++) {
					u.push(d[p].clone())
				}
				for (p = 0, f = c.length; p < f; p++) {
					var g, v, y, x = c[p],
						_ = x.vertexNormals,
						b = x.vertexColors;
					(g = new ut(x.a + r, x.b + r, x.c + r)).normal.copy(x.normal), void 0 !== n && g.normal.applyMatrix3(n).normalize();
					for (var w = 0, M = _.length; w < M; w++) {
						v = _[w].clone(), void 0 !== n && v.applyMatrix3(n).normalize(), g.vertexNormals.push(v)
					}
					g.color.copy(x.color);
					for (var w = 0, M = b.length; w < M; w++) {
						y = b[w], g.vertexColors.push(y.clone())
					}
					g.materialIndex = x.materialIndex + i, s.push(g)
				}
				for (p = 0, f = l.length; p < f; p++) {
					var E = l[p],
						T = [];
					if (void 0 !== E) {
						for (var w = 0, M = E.length; w < M; w++) {
							T.push(E[w].clone())
						}
						h.push(T)
					}
				}
			} else {
				console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t)
			}
		},
		mergeMesh: function(t) {
			!1 !== (t && t.isMesh) ? (t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t)
		},
		mergeVertices: function() {
			var t, e, i, n, r, a, o, s, c = {},
				h = [],
				l = [],
				u = Math.pow(10, 4);
			for (i = 0, n = this.vertices.length; i < n; i++) {
				t = this.vertices[i], void 0 === c[e = Math.round(t.x * u) + "_" + Math.round(t.y * u) + "_" + Math.round(t.z * u)] ? (c[e] = i, h.push(this.vertices[i]), l[i] = h.length - 1) : l[i] = l[c[e]]
			}
			var d = [];
			for (i = 0, n = this.faces.length; i < n; i++) {
				(r = this.faces[i]).a = l[r.a], r.b = l[r.b], r.c = l[r.c], a = [r.a, r.b, r.c];
				for (var p = 0; p < 3; p++) {
					if (a[p] === a[(p + 1) % 3]) {
						d.push(i);
						break
					}
				}
			}
			for (i = d.length - 1; i >= 0; i--) {
				var f = d[i];
				for (this.faces.splice(f, 1), o = 0, s = this.faceVertexUvs.length; o < s; o++) {
					this.faceVertexUvs[o].splice(f, 1)
				}
			}
			var m = this.vertices.length - h.length;
			return this.vertices = h, m
		},
		sortFacesByMaterialIndex: function() {
			for (var t = this.faces, e = t.length, i = 0; i < e; i++) {
				t[i]._id = i
			}
			t.sort(function(t, e) {
				return t.materialIndex - e.materialIndex
			});
			var n, r, a = this.faceVertexUvs[0],
				o = this.faceVertexUvs[1];
			for (a && a.length === e && (n = []), o && o.length === e && (r = []), i = 0; i < e; i++) {
				var s = t[i]._id;
				n && n.push(a[s]), r && r.push(o[s])
			}
			n && (this.faceVertexUvs[0] = n), r && (this.faceVertexUvs[1] = r)
		},
		toJSON: function() {
			function t(t, e, i) {
				return i ? t | 1 << e : t & ~(1 << e)
			}

			function e(t) {
				var e = t.x.toString() + t.y.toString() + t.z.toString();
				return void 0 !== d[e] ? d[e] : (d[e] = u.length / 3, u.push(t.x, t.y, t.z), d[e])
			}

			function i(t) {
				var e = t.r.toString() + t.g.toString() + t.b.toString();
				return void 0 !== f[e] ? f[e] : (f[e] = p.length, p.push(t.getHex()), f[e])
			}

			function n(t) {
				var e = t.x.toString() + t.y.toString();
				return void 0 !== g[e] ? g[e] : (g[e] = m.length / 2, m.push(t.x, t.y), g[e])
			}
			var r = {
				metadata: {
					version: 4.5,
					type: "Geometry",
					generator: "Geometry.toJSON"
				}
			};
			if (r.uuid = this.uuid, r.type = this.type, "" !== this.name && (r.name = this.name), void 0 !== this.parameters) {
				var a = this.parameters;
				for (var o in a) {
					void 0 !== a[o] && (r[o] = a[o])
				}
				return r
			}
			for (var s = [], c = 0; c < this.vertices.length; c++) {
				var h = this.vertices[c];
				s.push(h.x, h.y, h.z)
			}
			for (var l = [], u = [], d = {}, p = [], f = {}, m = [], g = {}, c = 0; c < this.faces.length; c++) {
				var v = this.faces[c],
					y = void 0 !== this.faceVertexUvs[0][c],
					x = v.normal.length() > 0,
					_ = v.vertexNormals.length > 0,
					b = 1 !== v.color.r || 1 !== v.color.g || 1 !== v.color.b,
					w = v.vertexColors.length > 0,
					M = 0;
				if (M = t(M, 0, 0), M = t(M, 1, !0), M = t(M, 2, !1), M = t(M, 3, y), M = t(M, 4, x), M = t(M, 5, _), M = t(M, 6, b), M = t(M, 7, w), l.push(M), l.push(v.a, v.b, v.c), l.push(v.materialIndex), y) {
					var E = this.faceVertexUvs[0][c];
					l.push(n(E[0]), n(E[1]), n(E[2]))
				}
				if (x && l.push(e(v.normal)), _) {
					var T = v.vertexNormals;
					l.push(e(T[0]), e(T[1]), e(T[2]))
				}
				if (b && l.push(i(v.color)), w) {
					var S = v.vertexColors;
					l.push(i(S[0]), i(S[1]), i(S[2]))
				}
			}
			return r.data = {}, r.data.vertices = s, r.data.normals = u, p.length > 0 && (r.data.colors = p), m.length > 0 && (r.data.uvs = [m]), r.data.faces = l, r
		},
		clone: function() {
			return (new St).copy(this)
		},
		copy: function(t) {
			var e, i, n, r, a, o;
			this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
				[]
			], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
			var s = t.vertices;
			for (e = 0, i = s.length; e < i; e++) {
				this.vertices.push(s[e].clone())
			}
			var c = t.colors;
			for (e = 0, i = c.length; e < i; e++) {
				this.colors.push(c[e].clone())
			}
			var h = t.faces;
			for (e = 0, i = h.length; e < i; e++) {
				this.faces.push(h[e].clone())
			}
			for (e = 0, i = t.faceVertexUvs.length; e < i; e++) {
				var l = t.faceVertexUvs[e];
				for (void 0 === this.faceVertexUvs[e] && (this.faceVertexUvs[e] = []), n = 0, r = l.length; n < r; n++) {
					var u = l[n],
						d = [];
					for (a = 0, o = u.length; a < o; a++) {
						var p = u[a];
						d.push(p.clone())
					}
					this.faceVertexUvs[e].push(d)
				}
			}
			var f = t.morphTargets;
			for (e = 0, i = f.length; e < i; e++) {
				var m = {};
				if (m.name = f[e].name, void 0 !== f[e].vertices) {
					for (m.vertices = [], n = 0, r = f[e].vertices.length; n < r; n++) {
						m.vertices.push(f[e].vertices[n].clone())
					}
				}
				if (void 0 !== f[e].normals) {
					for (m.normals = [], n = 0, r = f[e].normals.length; n < r; n++) {
						m.normals.push(f[e].normals[n].clone())
					}
				}
				this.morphTargets.push(m)
			}
			var g = t.morphNormals;
			for (e = 0, i = g.length; e < i; e++) {
				var v = {};
				if (void 0 !== g[e].vertexNormals) {
					for (v.vertexNormals = [], n = 0, r = g[e].vertexNormals.length; n < r; n++) {
						var y = g[e].vertexNormals[n],
							x = {};
						x.a = y.a.clone(), x.b = y.b.clone(), x.c = y.c.clone(), v.vertexNormals.push(x)
					}
				}
				if (void 0 !== g[e].faceNormals) {
					for (v.faceNormals = [], n = 0, r = g[e].faceNormals.length; n < r; n++) {
						v.faceNormals.push(g[e].faceNormals[n].clone())
					}
				}
				this.morphNormals.push(v)
			}
			var _ = t.skinWeights;
			for (e = 0, i = _.length; e < i; e++) {
				this.skinWeights.push(_[e].clone())
			}
			var b = t.skinIndices;
			for (e = 0, i = b.length; e < i; e++) {
				this.skinIndices.push(b[e].clone())
			}
			var w = t.lineDistances;
			for (e = 0, i = w.length; e < i; e++) {
				this.lineDistances.push(w[e])
			}
			var M = t.boundingBox;
			null !== M && (this.boundingBox = M.clone());
			var E = t.boundingSphere;
			return null !== E && (this.boundingSphere = E.clone()), this.elementsNeedUpdate = t.elementsNeedUpdate, this.verticesNeedUpdate = t.verticesNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	}), At.MaxIndex = 65535, Object.assign(At.prototype, e.prototype, {
		isBufferGeometry: !0,
		getIndex: function() {
			return this.index
		},
		setIndex: function(t) {
			Array.isArray(t) ? this.index = new(Et(t) > 65535 ? _t : yt)(t, 1) : this.index = t
		},
		addAttribute: function(t, e) {
			return !1 === (e && e.isBufferAttribute) && !1 === (e && e.isInterleavedBufferAttribute) ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), void this.addAttribute(t, new pt(arguments[1], arguments[2]))) : "index" === t ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), void this.setIndex(e)) : (this.attributes[t] = e, this)
		},
		getAttribute: function(t) {
			return this.attributes[t]
		},
		removeAttribute: function(t) {
			return delete this.attributes[t], this
		},
		addGroup: function(t, e, i) {
			this.groups.push({
				start: t,
				count: e,
				materialIndex: void 0 !== i ? i : 0
			})
		},
		clearGroups: function() {
			this.groups = []
		},
		setDrawRange: function(t, e) {
			this.drawRange.start = t, this.drawRange.count = e
		},
		applyMatrix: function(t) {
			var e = this.attributes.position;
			void 0 !== e && (t.applyToBufferAttribute(e), e.needsUpdate = !0);
			var i = this.attributes.normal;
			return void 0 !== i && ((new et).getNormalMatrix(t).applyToBufferAttribute(i), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
		},
		rotateX: function() {
			var t = new h;
			return function(e) {
				return t.makeRotationX(e), this.applyMatrix(t), this
			}
		}(),
		rotateY: function() {
			var t = new h;
			return function(e) {
				return t.makeRotationY(e), this.applyMatrix(t), this
			}
		}(),
		rotateZ: function() {
			var t = new h;
			return function(e) {
				return t.makeRotationZ(e), this.applyMatrix(t), this
			}
		}(),
		translate: function() {
			var t = new h;
			return function(e, i, n) {
				return t.makeTranslation(e, i, n), this.applyMatrix(t), this
			}
		}(),
		scale: function() {
			var t = new h;
			return function(e, i, n) {
				return t.makeScale(e, i, n), this.applyMatrix(t), this
			}
		}(),
		lookAt: function() {
			var t = new ct;
			return function(e) {
				t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
			}
		}(),
		center: function() {
			this.computeBoundingBox();
			var t = this.boundingBox.getCenter().negate();
			return this.translate(t.x, t.y, t.z), t
		},
		setFromObject: function(t) {
			var e = t.geometry;
			if (t.isPoints || t.isLine) {
				var i = new bt(3 * e.vertices.length, 3),
					n = new bt(3 * e.colors.length, 3);
				if (this.addAttribute("position", i.copyVector3sArray(e.vertices)), this.addAttribute("color", n.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length) {
					var r = new bt(e.lineDistances.length, 1);
					this.addAttribute("lineDistance", r.copyArray(e.lineDistances))
				}
				null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
			} else {
				t.isMesh && e && e.isGeometry && this.fromGeometry(e)
			}
			return this
		},
		updateFromObject: function(t) {
			var e = t.geometry;
			if (t.isMesh) {
				var i = e.__directGeometry;
				if (!0 === e.elementsNeedUpdate && (i = void 0, e.elementsNeedUpdate = !1), void 0 === i) {
					return this.fromGeometry(e)
				}
				i.verticesNeedUpdate = e.verticesNeedUpdate, i.normalsNeedUpdate = e.normalsNeedUpdate, i.colorsNeedUpdate = e.colorsNeedUpdate, i.uvsNeedUpdate = e.uvsNeedUpdate, i.groupsNeedUpdate = e.groupsNeedUpdate, e.verticesNeedUpdate = !1, e.normalsNeedUpdate = !1, e.colorsNeedUpdate = !1, e.uvsNeedUpdate = !1, e.groupsNeedUpdate = !1, e = i
			}
			var n;
			return !0 === e.verticesNeedUpdate && (void 0 !== (n = this.attributes.position) && (n.copyVector3sArray(e.vertices), n.needsUpdate = !0), e.verticesNeedUpdate = !1), !0 === e.normalsNeedUpdate && (void 0 !== (n = this.attributes.normal) && (n.copyVector3sArray(e.normals), n.needsUpdate = !0), e.normalsNeedUpdate = !1), !0 === e.colorsNeedUpdate && (void 0 !== (n = this.attributes.color) && (n.copyColorsArray(e.colors), n.needsUpdate = !0), e.colorsNeedUpdate = !1), e.uvsNeedUpdate && (void 0 !== (n = this.attributes.uv) && (n.copyVector2sArray(e.uvs), n.needsUpdate = !0), e.uvsNeedUpdate = !1), e.lineDistancesNeedUpdate && (void 0 !== (n = this.attributes.lineDistance) && (n.copyArray(e.lineDistances), n.needsUpdate = !0), e.lineDistancesNeedUpdate = !1), e.groupsNeedUpdate && (e.computeGroups(t.geometry), this.groups = e.groups, e.groupsNeedUpdate = !1), this
		},
		fromGeometry: function(t) {
			return t.__directGeometry = (new Mt).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry)
		},
		fromDirectGeometry: function(t) {
			var e = new Float32Array(3 * t.vertices.length);
			if (this.addAttribute("position", new pt(e, 3).copyVector3sArray(t.vertices)), t.normals.length > 0) {
				var i = new Float32Array(3 * t.normals.length);
				this.addAttribute("normal", new pt(i, 3).copyVector3sArray(t.normals))
			}
			if (t.colors.length > 0) {
				var n = new Float32Array(3 * t.colors.length);
				this.addAttribute("color", new pt(n, 3).copyColorsArray(t.colors))
			}
			if (t.uvs.length > 0) {
				var r = new Float32Array(2 * t.uvs.length);
				this.addAttribute("uv", new pt(r, 2).copyVector2sArray(t.uvs))
			}
			if (t.uvs2.length > 0) {
				var a = new Float32Array(2 * t.uvs2.length);
				this.addAttribute("uv2", new pt(a, 2).copyVector2sArray(t.uvs2))
			}
			if (t.indices.length > 0) {
				var o = new(Et(t.indices) > 65535 ? Uint32Array : Uint16Array)(3 * t.indices.length);
				this.setIndex(new pt(o, 1).copyIndicesArray(t.indices))
			}
			this.groups = t.groups;
			for (var s in t.morphTargets) {
				for (var c = [], h = t.morphTargets[s], l = 0, u = h.length; l < u; l++) {
					var d = h[l],
						p = new bt(3 * d.length, 3);
					c.push(p.copyVector3sArray(d))
				}
				this.morphAttributes[s] = c
			}
			if (t.skinIndices.length > 0) {
				var f = new bt(4 * t.skinIndices.length, 4);
				this.addAttribute("skinIndex", f.copyVector4sArray(t.skinIndices))
			}
			if (t.skinWeights.length > 0) {
				var m = new bt(4 * t.skinWeights.length, 4);
				this.addAttribute("skinWeight", m.copyVector4sArray(t.skinWeights))
			}
			return null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
		},
		computeBoundingBox: function() {
			null === this.boundingBox && (this.boundingBox = new $);
			var t = this.attributes.position;
			void 0 !== t ? this.boundingBox.setFromBufferAttribute(t) : this.boundingBox.makeEmpty(), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
		},
		computeBoundingSphere: function() {
			var t = new $,
				e = new c;
			return function() {
				null === this.boundingSphere && (this.boundingSphere = new tt);
				var i = this.attributes.position;
				if (i) {
					var n = this.boundingSphere.center;
					t.setFromBufferAttribute(i), t.getCenter(n);
					for (var r = 0, a = 0, o = i.count; a < o; a++) {
						e.x = i.getX(a), e.y = i.getY(a), e.z = i.getZ(a), r = Math.max(r, n.distanceToSquared(e))
					}
					this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
				}
			}
		}(),
		computeFaceNormals: function() {},
		computeVertexNormals: function() {
			var t = this.index,
				e = this.attributes,
				i = this.groups;
			if (e.position) {
				var n = e.position.array;
				if (void 0 === e.normal) {
					this.addAttribute("normal", new pt(new Float32Array(n.length), 3))
				} else {
					for (var r = e.normal.array, a = 0, o = r.length; a < o; a++) {
						r[a] = 0
					}
				}
				var s, h, l, u = e.normal.array,
					d = new c,
					p = new c,
					f = new c,
					m = new c,
					g = new c;
				if (t) {
					var v = t.array;
					0 === i.length && this.addGroup(0, v.length);
					for (var y = 0, x = i.length; y < x; ++y) {
						for (var _ = i[y], b = _.start, a = b, o = b + _.count; a < o; a += 3) {
							s = 3 * v[a + 0], h = 3 * v[a + 1], l = 3 * v[a + 2], d.fromArray(n, s), p.fromArray(n, h), f.fromArray(n, l), m.subVectors(f, p), g.subVectors(d, p), m.cross(g), u[s] += m.x, u[s + 1] += m.y, u[s + 2] += m.z, u[h] += m.x, u[h + 1] += m.y, u[h + 2] += m.z, u[l] += m.x, u[l + 1] += m.y, u[l + 2] += m.z
						}
					}
				} else {
					for (var a = 0, o = n.length; a < o; a += 9) {
						d.fromArray(n, a), p.fromArray(n, a + 3), f.fromArray(n, a + 6), m.subVectors(f, p), g.subVectors(d, p), m.cross(g), u[a] = m.x, u[a + 1] = m.y, u[a + 2] = m.z, u[a + 3] = m.x, u[a + 4] = m.y, u[a + 5] = m.z, u[a + 6] = m.x, u[a + 7] = m.y, u[a + 8] = m.z
					}
				}
				this.normalizeNormals(), e.normal.needsUpdate = !0
			}
		},
		merge: function(t, e) {
			if (!1 !== (t && t.isBufferGeometry)) {
				void 0 === e && (e = 0);
				var i = this.attributes;
				for (var n in i) {
					if (void 0 !== t.attributes[n]) {
						for (var r = i[n].array, a = t.attributes[n], o = a.array, s = 0, c = a.itemSize * e; s < o.length; s++, c++) {
							r[c] = o[s]
						}
					}
				}
				return this
			}
			console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t)
		},
		normalizeNormals: function() {
			for (var t, e, i, n, r = this.attributes.normal, a = 0, o = r.count; a < o; a++) {
				t = r.getX(a), e = r.getY(a), i = r.getZ(a), n = 1 / Math.sqrt(t * t + e * e + i * i), r.setXYZ(a, t * n, e * n, i * n)
			}
		},
		toNonIndexed: function() {
			if (null === this.index) {
				return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this
			}
			var t = new At,
				e = this.index.array,
				i = this.attributes;
			for (var n in i) {
				for (var r = i[n], a = r.array, o = r.itemSize, s = new a.constructor(e.length * o), c = 0, h = 0, l = 0, u = e.length; l < u; l++) {
					c = e[l] * o;
					for (var d = 0; d < o; d++) {
						s[h++] = a[c++]
					}
				}
				t.addAttribute(n, new pt(s, o))
			}
			return t
		},
		toJSON: function() {
			var t = {
				metadata: {
					version: 4.5,
					type: "BufferGeometry",
					generator: "BufferGeometry.toJSON"
				}
			};
			if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), void 0 !== this.parameters) {
				var e = this.parameters;
				for (var i in e) {
					void 0 !== e[i] && (t[i] = e[i])
				}
				return t
			}
			t.data = {
				attributes: {}
			};
			var n = this.index;
			null !== n && (o = Array.prototype.slice.call(n.array), t.data.index = {
				type: n.array.constructor.name,
				array: o
			});
			var r = this.attributes;
			for (var i in r) {
				var a = r[i],
					o = Array.prototype.slice.call(a.array);
				t.data.attributes[i] = {
					itemSize: a.itemSize,
					type: a.array.constructor.name,
					array: o,
					normalized: a.normalized
				}
			}
			var s = this.groups;
			s.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(s)));
			var c = this.boundingSphere;
			return null !== c && (t.data.boundingSphere = {
				center: c.center.toArray(),
				radius: c.radius
			}), t
		},
		clone: function() {
			return (new At).copy(this)
		},
		copy: function(t) {
			var e, i, n;
			this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.name = t.name;
			var r = t.index;
			null !== r && this.setIndex(r.clone());
			var a = t.attributes;
			for (e in a) {
				var o = a[e];
				this.addAttribute(e, o.clone())
			}
			var s = t.morphAttributes;
			for (e in s) {
				var c = [],
					h = s[e];
				for (i = 0, n = h.length; i < n; i++) {
					c.push(h[i].clone())
				}
				this.morphAttributes[e] = c
			}
			var l = t.groups;
			for (i = 0, n = l.length; i < n; i++) {
				var u = l[i];
				this.addGroup(u.start, u.count, u.materialIndex)
			}
			var d = t.boundingBox;
			null !== d && (this.boundingBox = d.clone());
			var p = t.boundingSphere;
			return null !== p && (this.boundingSphere = p.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this
		},
		dispose: function() {
			this.dispatchEvent({
				type: "dispose"
			})
		}
	}), Rt.prototype = Object.assign(Object.create(ct.prototype), {
		constructor: Rt,
		isMesh: !0,
		setDrawMode: function(t) {
			this.drawMode = t
		},
		copy: function(t) {
			return ct.prototype.copy.call(this, t), this.drawMode = t.drawMode, this
		},
		updateMorphTargets: function() {
			var t, e, i, n = this.geometry;
			if (n.isBufferGeometry) {
				var r = n.morphAttributes,
					a = Object.keys(r);
				if (a.length > 0) {
					var o = r[a[0]];
					if (void 0 !== o) {
						for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = o.length; t < e; t++) {
							i = o[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = t
						}
					}
				}
			} else {
				var s = n.morphTargets;
				if (void 0 !== s && s.length > 0) {
					for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = s.length; t < e; t++) {
						i = s[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[i] = t
					}
				}
			}
		},
		raycast: function() {
			function t(t, e, i, n, r, a, o) {
				return lt.barycoordFromPoint(t, e, i, n, y), r.multiplyScalar(y.x), a.multiplyScalar(y.y), o.multiplyScalar(y.z), r.add(a).add(o), r.clone()
			}

			function e(t, e, i, n, r, a, o) {
				var s = t.material;
				if (null === (s.side === zr ? i.intersectTriangle(a, r, n, !0, o) : i.intersectTriangle(n, r, a, s.side !== Gr, o))) {
					return null
				}
				_.copy(o), _.applyMatrix4(t.matrixWorld);
				var c = e.ray.origin.distanceTo(_);
				return c < e.near || c > e.far ? null : {
					distance: c,
					point: _.clone(),
					object: t
				}
			}

			function n(i, n, r, a, o, c, h, d) {
				s.fromBufferAttribute(a, c), l.fromBufferAttribute(a, h), u.fromBufferAttribute(a, d);
				var p = e(i, n, r, s, l, u, x);
				return p && (o && (m.fromBufferAttribute(o, c), g.fromBufferAttribute(o, h), v.fromBufferAttribute(o, d), p.uv = t(x, s, l, u, m, g, v)), p.face = new ut(c, h, d, lt.normal(s, l, u)), p.faceIndex = c), p
			}
			var r = new h,
				a = new at,
				o = new tt,
				s = new c,
				l = new c,
				u = new c,
				d = new c,
				p = new c,
				f = new c,
				m = new i,
				g = new i,
				v = new i,
				y = new c,
				x = new c,
				_ = new c;
			return function(i, c) {
				var h = this.geometry,
					y = this.material,
					_ = this.matrixWorld;
				if (void 0 !== y && (null === h.boundingSphere && h.computeBoundingSphere(), o.copy(h.boundingSphere), o.applyMatrix4(_), !1 !== i.ray.intersectsSphere(o) && (r.getInverse(_), a.copy(i.ray).applyMatrix4(r), null === h.boundingBox || !1 !== a.intersectsBox(h.boundingBox)))) {
					var b;
					if (h.isBufferGeometry) {
						var w, M, E, T, S, A = h.index,
							R = h.attributes.position,
							L = h.attributes.uv;
						if (null !== A) {
							for (T = 0, S = A.count; T < S; T += 3) {
								w = A.getX(T), M = A.getX(T + 1), E = A.getX(T + 2), (b = n(this, i, a, R, L, w, M, E)) && (b.faceIndex = Math.floor(T / 3), c.push(b))
							}
						} else {
							for (T = 0, S = R.count; T < S; T += 3) {
								(b = n(this, i, a, R, L, w = T, M = T + 1, E = T + 2)) && (b.index = w, c.push(b))
							}
						}
					} else {
						if (h.isGeometry) {
							var P, C, I, U, N = Array.isArray(y),
								O = h.vertices,
								D = h.faces,
								F = h.faceVertexUvs[0];
							F.length > 0 && (U = F);
							for (var B = 0, z = D.length; B < z; B++) {
								var G = D[B],
									H = N ? y[G.materialIndex] : y;
								if (void 0 !== H) {
									if (P = O[G.a], C = O[G.b], I = O[G.c], !0 === H.morphTargets) {
										var V = h.morphTargets,
											k = this.morphTargetInfluences;
										s.set(0, 0, 0), l.set(0, 0, 0), u.set(0, 0, 0);
										for (var j = 0, W = V.length; j < W; j++) {
											var X = k[j];
											if (0 !== X) {
												var q = V[j].vertices;
												s.addScaledVector(d.subVectors(q[G.a], P), X), l.addScaledVector(p.subVectors(q[G.b], C), X), u.addScaledVector(f.subVectors(q[G.c], I), X)
											}
										}
										s.add(P), l.add(C), u.add(I), P = s, C = l, I = u
									}
									if (b = e(this, i, a, P, C, I, x)) {
										if (U && U[B]) {
											var Y = U[B];
											m.copy(Y[0]), g.copy(Y[1]), v.copy(Y[2]), b.uv = t(x, P, C, I, m, g, v)
										}
										b.face = G, b.faceIndex = B, c.push(b)
									}
								}
							}
						}
					}
				}
			}
		}(),
		clone: function() {
			return new this.constructor(this.geometry, this.material).copy(this)
		}
	}), (Lt.prototype = Object.create(St.prototype)).constructor = Lt, Pt.prototype = Object.create(At.prototype), Pt.prototype.constructor = Pt, (Ct.prototype = Object.create(St.prototype)).constructor = Ct, It.prototype = Object.create(At.prototype), It.prototype.constructor = It, Ut.prototype = Object.assign(Object.create(ct.prototype), {
		constructor: Ut,
		isCamera: !0,
		copy: function(t) {
			return ct.prototype.copy.call(this, t), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this
		},
		getWorldDirection: function() {
			var t = new s;
			return function(e) {
				var i = e || new c;
				return this.getWorldQuaternion(t), i.set(0, 0, -1).applyQuaternion(t)
			}
		}(),
		clone: function() {
			return (new this.constructor).copy(this)
		}
	}), Nt.prototype = Object.assign(Object.create(Ut.prototype), {
		constructor: Nt,
		isPerspectiveCamera: !0,
		copy: function(t) {
			return Ut.prototype.copy.call(this, t), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
		},
		setFocalLength: function(t) {
			var e = 0.5 * this.getFilmHeight() / t;
			this.fov = 2 * Do.RAD2DEG * Math.atan(e), this.updateProjectionMatrix()
		},
		getFocalLength: function() {
			var t = Math.tan(0.5 * Do.DEG2RAD * this.fov);
			return 0.5 * this.getFilmHeight() / t
		},
		getEffectiveFOV: function() {
			return 2 * Do.RAD2DEG * Math.atan(Math.tan(0.5 * Do.DEG2RAD * this.fov) / this.zoom)
		},
		getFilmWidth: function() {
			return this.filmGauge * Math.min(this.aspect, 1)
		},
		getFilmHeight: function() {
			return this.filmGauge / Math.max(this.aspect, 1)
		},
		setViewOffset: function(t, e, i, n, r, a) {
			this.aspect = t / e, this.view = {
				fullWidth: t,
				fullHeight: e,
				offsetX: i,
				offsetY: n,
				width: r,
				height: a
			}, this.updateProjectionMatrix()
		},
		clearViewOffset: function() {
			this.view = null, this.updateProjectionMatrix()
		},
		updateProjectionMatrix: function() {
			var t = this.near,
				e = t * Math.tan(0.5 * Do.DEG2RAD * this.fov) / this.zoom,
				i = 2 * e,
				n = this.aspect * i,
				r = -0.5 * n,
				a = this.view;
			if (null !== a) {
				var o = a.fullWidth,
					s = a.fullHeight;
				r += a.offsetX * n / o, e -= a.offsetY * i / s, n *= a.width / o, i *= a.height / s
			}
			var c = this.filmOffset;
			0 !== c && (r += t * c / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + n, e, e - i, t, this.far)
		},
		toJSON: function(t) {
			var e = ct.prototype.toJSON.call(this, t);
			return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e
		}
	}), Ot.prototype = Object.assign(Object.create(Ut.prototype), {
		constructor: Ot,
		isOrthographicCamera: !0,
		copy: function(t) {
			return Ut.prototype.copy.call(this, t), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
		},
		setViewOffset: function(t, e, i, n, r, a) {
			this.view = {
				fullWidth: t,
				fullHeight: e,
				offsetX: i,
				offsetY: n,
				width: r,
				height: a
			}, this.updateProjectionMatrix()
		},
		clearViewOffset: function() {
			this.view = null, this.updateProjectionMatrix()
		},
		updateProjectionMatrix: function() {
			var t = (this.right - this.left) / (2 * this.zoom),
				e = (this.top - this.bottom) / (2 * this.zoom),
				i = (this.right + this.left) / 2,
				n = (this.top + this.bottom) / 2,
				r = i - t,
				a = i + t,
				o = n + e,
				s = n - e;
			if (null !== this.view) {
				var c = this.zoom / (this.view.width / this.view.fullWidth),
					h = this.zoom / (this.view.height / this.view.fullHeight),
					l = (this.right - this.left) / this.view.width,
					u = (this.top - this.bottom) / this.view.height;
				a = (r += l * (this.view.offsetX / c)) + l * (this.view.width / c), s = (o -= u * (this.view.offsetY / h)) - u * (this.view.height / h)
			}
			this.projectionMatrix.makeOrthographic(r, a, o, s, this.near, this.far)
		},
		toJSON: function(t) {
			var e = ct.prototype.toJSON.call(this, t);
			return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e
		}
	});
	var $o = 0;
	fe.prototype.isFogExp2 = !0, fe.prototype.clone = function() {
		return new fe(this.color.getHex(), this.density)
	}, fe.prototype.toJSON = function(t) {
		return {
			type: "FogExp2",
			color: this.color.getHex(),
			density: this.density
		}
	}, me.prototype.isFog = !0, me.prototype.clone = function() {
		return new me(this.color.getHex(), this.near, this.far)
	}, me.prototype.toJSON = function(t) {
		return {
			type: "Fog",
			color: this.color.getHex(),
			near: this.near,
			far: this.far
		}
	}, ge.prototype = Object.assign(Object.create(ct.prototype), {
		constructor: ge,
		copy: function(t, e) {
			return ct.prototype.copy.call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
		},
		toJSON: function(t) {
			var e = ct.prototype.toJSON.call(this, t);
			return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e
		}
	}), ve.prototype = Object.assign(Object.create(ct.prototype), {
		constructor: ve,
		isLensFlare: !0,
		copy: function(t) {
			ct.prototype.copy.call(this, t), this.positionScreen.copy(t.positionScreen), this.customUpdateCallback = t.customUpdateCallback;
			for (var e = 0, i = t.lensFlares.length; e < i; e++) {
				this.lensFlares.push(t.lensFlares[e])
			}
			return this
		},
		add: function(t, e, i, n, r, a) {
			void 0 === e && (e = -1), void 0 === i && (i = 0), void 0 === a && (a = 1), void 0 === r && (r = new X(16777215)), void 0 === n && (n = qr), i = Math.min(i, Math.max(0, i)), this.lensFlares.push({
				texture: t,
				size: e,
				distance: i,
				x: 0,
				y: 0,
				z: 0,
				scale: 1,
				rotation: 0,
				opacity: a,
				color: r,
				blending: n
			})
		},
		updateLensFlares: function() {
			var t, e, i = this.lensFlares.length,
				n = 2 * -this.positionScreen.x,
				r = 2 * -this.positionScreen.y;
			for (t = 0; t < i; t++) {
				(e = this.lensFlares[t]).x = this.positionScreen.x + n * e.distance, e.y = this.positionScreen.y + r * e.distance, e.wantedRotation = e.x * Math.PI * 0.25, e.rotation += 0.25 * (e.wantedRotation - e.rotation)
			}
		}
	}), ye.prototype = Object.create(J.prototype), ye.prototype.constructor = ye, ye.prototype.isSpriteMaterial = !0, ye.prototype.copy = function(t) {
		return J.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.rotation = t.rotation, this
	}, xe.prototype = Object.assign(Object.create(ct.prototype), {
		constructor: xe,
		isSprite: !0,
		raycast: function() {
			var t = new c,
				e = new c,
				i = new c;
			return function(n, r) {
				e.setFromMatrixPosition(this.matrixWorld), n.ray.closestPointToPoint(e, t), i.setFromMatrixScale(this.matrixWorld);
				var a = i.x * i.y / 4;
				if (!(e.distanceToSquared(t) > a)) {
					var o = n.ray.origin.distanceTo(t);
					o < n.near || o > n.far || r.push({
						distance: o,
						point: t.clone(),
						face: null,
						object: this
					})
				}
			}
		}(),
		clone: function() {
			return new this.constructor(this.material).copy(this)
		}
	}), _e.prototype = Object.assign(Object.create(ct.prototype), {
		constructor: _e,
		copy: function(t) {
			ct.prototype.copy.call(this, t, !1);
			for (var e = t.levels, i = 0, n = e.length; i < n; i++) {
				var r = e[i];
				this.addLevel(r.object.clone(), r.distance)
			}
			return this
		},
		addLevel: function(t, e) {
			void 0 === e && (e = 0), e = Math.abs(e);
			for (var i = this.levels, n = 0; n < i.length && !(e < i[n].distance); n++) {}
			i.splice(n, 0, {
				distance: e,
				object: t
			}), this.add(t)
		},
		getObjectForDistance: function(t) {
			for (var e = this.levels, i = 1, n = e.length; i < n && !(t < e[i].distance); i++) {}
			return e[i - 1].object
		},
		raycast: function() {
			var t = new c;
			return function(e, i) {
				t.setFromMatrixPosition(this.matrixWorld);
				var n = e.ray.origin.distanceTo(t);
				this.getObjectForDistance(n).raycast(e, i)
			}
		}(),
		update: function() {
			var t = new c,
				e = new c;
			return function(i) {
				var n = this.levels;
				if (n.length > 1) {
					t.setFromMatrixPosition(i.matrixWorld), e.setFromMatrixPosition(this.matrixWorld);
					var r = t.distanceTo(e);
					n[0].object.visible = !0;
					for (var a = 1, o = n.length; a < o && r >= n[a].distance; a++) {
						n[a - 1].object.visible = !1, n[a].object.visible = !0
					}
					for (; a < o; a++) {
						n[a].object.visible = !1
					}
				}
			}
		}(),
		toJSON: function(t) {
			var e = ct.prototype.toJSON.call(this, t);
			e.object.levels = [];
			for (var i = this.levels, n = 0, r = i.length; n < r; n++) {
				var a = i[n];
				e.object.levels.push({
					object: a.object.uuid,
					distance: a.distance
				})
			}
			return e
		}
	}), Object.assign(be.prototype, {
		calculateInverses: function() {
			this.boneInverses = [];
			for (var t = 0, e = this.bones.length; t < e; t++) {
				var i = new h;
				this.bones[t] && i.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(i)
			}
		},
		pose: function() {
			var t, e, i;
			for (e = 0, i = this.bones.length; e < i; e++) {
				(t = this.bones[e]) && t.matrixWorld.getInverse(this.boneInverses[e])
			}
			for (e = 0, i = this.bones.length; e < i; e++) {
				(t = this.bones[e]) && (t.parent && t.parent.isBone ? (t.matrix.getInverse(t.parent.matrixWorld), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale))
			}
		},
		update: function() {
			var t = new h,
				e = new h;
			return function() {
				for (var i = this.bones, n = this.boneInverses, r = this.boneMatrices, a = this.boneTexture, o = 0, s = i.length; o < s; o++) {
					var c = i[o] ? i[o].matrixWorld : e;
					t.multiplyMatrices(c, n[o]), t.toArray(r, 16 * o)
				}
				void 0 !== a && (a.needsUpdate = !0)
			}
		}(),
		clone: function() {
			return new be(this.bones, this.boneInverses)
		}
	}), we.prototype = Object.assign(Object.create(ct.prototype), {
		constructor: we,
		isBone: !0
	}), Me.prototype = Object.assign(Object.create(Rt.prototype), {
		constructor: Me,
		isSkinnedMesh: !0,
		initBones: function() {
			var t, e, i, n, r = [];
			if (this.geometry && void 0 !== this.geometry.bones) {
				for (i = 0, n = this.geometry.bones.length; i < n; i++) {
					e = this.geometry.bones[i], t = new we, r.push(t), t.name = e.name, t.position.fromArray(e.pos), t.quaternion.fromArray(e.rotq), void 0 !== e.scl && t.scale.fromArray(e.scl)
				}
				for (i = 0, n = this.geometry.bones.length; i < n; i++) {
					-1 !== (e = this.geometry.bones[i]).parent && null !== e.parent && void 0 !== r[e.parent] ? r[e.parent].add(r[i]) : this.add(r[i])
				}
			}
			return this.updateMatrixWorld(!0), r
		},
		bind: function(t, e) {
			this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e)
		},
		pose: function() {
			this.skeleton.pose()
		},
		normalizeSkinWeights: function() {
			var t, e;
			if (this.geometry && this.geometry.isGeometry) {
				for (e = 0; e < this.geometry.skinWeights.length; e++) {
					var i = this.geometry.skinWeights[e];
					(t = 1 / i.lengthManhattan()) != 1 / 0 ? i.multiplyScalar(t) : i.set(1, 0, 0, 0)
				}
			} else {
				if (this.geometry && this.geometry.isBufferGeometry) {
					var n = new r,
						a = this.geometry.attributes.skinWeight;
					for (e = 0; e < a.count; e++) {
						n.x = a.getX(e), n.y = a.getY(e), n.z = a.getZ(e), n.w = a.getW(e), (t = 1 / n.lengthManhattan()) != 1 / 0 ? n.multiplyScalar(t) : n.set(1, 0, 0, 0), a.setXYZW(e, n.x, n.y, n.z, n.w)
					}
				}
			}
		},
		updateMatrixWorld: function(t) {
			Rt.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
		},
		clone: function() {
			return new this.constructor(this.geometry, this.material).copy(this)
		}
	}), Ee.prototype = Object.create(J.prototype), Ee.prototype.constructor = Ee, Ee.prototype.isLineBasicMaterial = !0, Ee.prototype.copy = function(t) {
		return J.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this
	}, Te.prototype = Object.assign(Object.create(ct.prototype), {
		constructor: Te,
		isLine: !0,
		raycast: function() {
			var t = new h,
				e = new at,
				i = new tt;
			return function(n, r) {
				var a = n.linePrecision,
					o = a * a,
					s = this.geometry,
					h = this.matrixWorld;
				if (null === s.boundingSphere && s.computeBoundingSphere(), i.copy(s.boundingSphere), i.applyMatrix4(h), !1 !== n.ray.intersectsSphere(i)) {
					t.getInverse(h), e.copy(n.ray).applyMatrix4(t);
					var l = new c,
						u = new c,
						d = new c,
						p = new c,
						f = this && this.isLineSegments ? 2 : 1;
					if (s.isBufferGeometry) {
						var m = s.index,
							g = s.attributes.position.array;
						if (null !== m) {
							for (var v = m.array, y = 0, x = v.length - 1; y < x; y += f) {
								var _ = v[y],
									b = v[y + 1];
								l.fromArray(g, 3 * _), u.fromArray(g, 3 * b), (E = e.distanceSqToSegment(l, u, p, d)) > o || (p.applyMatrix4(this.matrixWorld), (T = n.ray.origin.distanceTo(p)) < n.near || T > n.far || r.push({
									distance: T,
									point: d.clone().applyMatrix4(this.matrixWorld),
									index: y,
									face: null,
									faceIndex: null,
									object: this
								}))
							}
						} else {
							for (var y = 0, x = g.length / 3 - 1; y < x; y += f) {
								l.fromArray(g, 3 * y), u.fromArray(g, 3 * y + 3), (E = e.distanceSqToSegment(l, u, p, d)) > o || (p.applyMatrix4(this.matrixWorld), (T = n.ray.origin.distanceTo(p)) < n.near || T > n.far || r.push({
									distance: T,
									point: d.clone().applyMatrix4(this.matrixWorld),
									index: y,
									face: null,
									faceIndex: null,
									object: this
								}))
							}
						}
					} else {
						if (s.isGeometry) {
							for (var w = s.vertices, M = w.length, y = 0; y < M - 1; y += f) {
								var E = e.distanceSqToSegment(w[y], w[y + 1], p, d);
								if (!(E > o)) {
									p.applyMatrix4(this.matrixWorld);
									var T = n.ray.origin.distanceTo(p);
									T < n.near || T > n.far || r.push({
										distance: T,
										point: d.clone().applyMatrix4(this.matrixWorld),
										index: y,
										face: null,
										faceIndex: null,
										object: this
									})
								}
							}
						}
					}
				}
			}
		}(),
		clone: function() {
			return new this.constructor(this.geometry, this.material).copy(this)
		}
	}), Se.prototype = Object.assign(Object.create(Te.prototype), {
		constructor: Se,
		isLineSegments: !0
	}), Ae.prototype = Object.assign(Object.create(Te.prototype), {
		constructor: Ae,
		isLineLoop: !0
	}), Re.prototype = Object.create(J.prototype), Re.prototype.constructor = Re, Re.prototype.isPointsMaterial = !0, Re.prototype.copy = function(t) {
		return J.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this
	}, Le.prototype = Object.assign(Object.create(ct.prototype), {
		constructor: Le,
		isPoints: !0,
		raycast: function() {
			var t = new h,
				e = new at,
				i = new tt;
			return function(n, r) {
				function a(t, i) {
					var a = e.distanceSqToPoint(t);
					if (a < d) {
						var s = e.closestPointToPoint(t);
						s.applyMatrix4(h);
						var c = n.ray.origin.distanceTo(s);
						if (c < n.near || c > n.far) {
							return
						}
						r.push({
							distance: c,
							distanceToRay: Math.sqrt(a),
							point: s.clone(),
							index: i,
							face: null,
							object: o
						})
					}
				}
				var o = this,
					s = this.geometry,
					h = this.matrixWorld,
					l = n.params.Points.threshold;
				if (null === s.boundingSphere && s.computeBoundingSphere(), i.copy(s.boundingSphere), i.applyMatrix4(h), i.radius += l, !1 !== n.ray.intersectsSphere(i)) {
					t.getInverse(h), e.copy(n.ray).applyMatrix4(t);
					var u = l / ((this.scale.x + this.scale.y + this.scale.z) / 3),
						d = u * u,
						p = new c;
					if (s.isBufferGeometry) {
						var f = s.index,
							m = s.attributes.position.array;
						if (null !== f) {
							for (var g = f.array, v = 0, y = g.length; v < y; v++) {
								var x = g[v];
								p.fromArray(m, 3 * x), a(p, x)
							}
						} else {
							for (var v = 0, _ = m.length / 3; v < _; v++) {
								p.fromArray(m, 3 * v), a(p, v)
							}
						}
					} else {
						for (var b = s.vertices, v = 0, _ = b.length; v < _; v++) {
							a(b[v], v)
						}
					}
				}
			}
		}(),
		clone: function() {
			return new this.constructor(this.geometry, this.material).copy(this)
		}
	}), Pe.prototype = Object.assign(Object.create(ct.prototype), {
		constructor: Pe
	}), (Ce.prototype = Object.create(n.prototype)).constructor = Ce, (Ie.prototype = Object.create(n.prototype)).constructor = Ie, Ie.prototype.isCompressedTexture = !0, (Ue.prototype = Object.create(n.prototype)).constructor = Ue, (Ne.prototype = Object.create(n.prototype)).constructor = Ne, Ne.prototype.isDepthTexture = !0, (Oe.prototype = Object.create(At.prototype)).constructor = Oe, (De.prototype = Object.create(St.prototype)).constructor = De, (Fe.prototype = Object.create(At.prototype)).constructor = Fe, (Be.prototype = Object.create(St.prototype)).constructor = Be, ze.prototype = Object.create(At.prototype), ze.prototype.constructor = ze, (Ge.prototype = Object.create(St.prototype)).constructor = Ge, (He.prototype = Object.create(ze.prototype)).constructor = He, (Ve.prototype = Object.create(St.prototype)).constructor = Ve, ke.prototype = Object.create(ze.prototype), ke.prototype.constructor = ke, (je.prototype = Object.create(St.prototype)).constructor = je, (We.prototype = Object.create(ze.prototype)).constructor = We, (Xe.prototype = Object.create(St.prototype)).constructor = Xe, (qe.prototype = Object.create(ze.prototype)).constructor = qe, (Ye.prototype = Object.create(St.prototype)).constructor = Ye, (Ze.prototype = Object.create(At.prototype)).constructor = Ze, (Je.prototype = Object.create(St.prototype)).constructor = Je, (Qe.prototype = Object.create(At.prototype)).constructor = Qe, (Ke.prototype = Object.create(St.prototype)).constructor = Ke, ($e.prototype = Object.create(At.prototype)).constructor = $e;
	var ts = {
		area: function(t) {
			for (var e = t.length, i = 0, n = e - 1, r = 0; r < e; n = r++) {
				i += t[n].x * t[r].y - t[r].x * t[n].y
			}
			return 0.5 * i
		},
		triangulate: function() {
			function t(t, e, i, n, r, a) {
				var o, s, c, h, l, u, d, p, f;
				if (s = t[a[e]].x, c = t[a[e]].y, h = t[a[i]].x, l = t[a[i]].y, u = t[a[n]].x, d = t[a[n]].y, (h - s) * (d - c) - (l - c) * (u - s) <= 0) {
					return !1
				}
				var m, g, v, y, x, _, b, w, M, E, T, S, A, R, L;
				for (m = u - h, g = d - l, v = s - u, y = c - d, x = h - s, _ = l - c, o = 0; o < r; o++) {
					if (p = t[a[o]].x, f = t[a[o]].y, !(p === s && f === c || p === h && f === l || p === u && f === d) && (b = p - s, w = f - c, M = p - h, E = f - l, T = p - u, S = f - d, L = m * E - g * M, A = x * w - _ * b, R = v * S - y * T, L >= -Number.EPSILON && R >= -Number.EPSILON && A >= -Number.EPSILON)) {
						return !1
					}
				}
				return !0
			}
			return function(e, i) {
				var n = e.length;
				if (n < 3) {
					return null
				}
				var r, a, o, s = [],
					c = [],
					h = [];
				if (ts.area(e) > 0) {
					for (a = 0; a < n; a++) {
						c[a] = a
					}
				} else {
					for (a = 0; a < n; a++) {
						c[a] = n - 1 - a
					}
				}
				var l = n,
					u = 2 * l;
				for (a = l - 1; l > 2;) {
					if (u-- <= 0) {
						return console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()"), i ? h : s
					}
					if (r = a, l <= r && (r = 0), a = r + 1, l <= a && (a = 0), o = a + 1, l <= o && (o = 0), t(e, r, a, o, l, c)) {
						var d, p, f, m, g;
						for (d = c[r], p = c[a], f = c[o], s.push([e[d], e[p], e[f]]), h.push([c[r], c[a], c[o]]), m = a, g = a + 1; g < l; m++, g++) {
							c[m] = c[g]
						}
						u = 2 * --l
					}
				}
				return i ? h : s
			}
		}(),
		triangulateShape: function(t, e) {
			function i(t) {
				var e = t.length;
				e > 2 && t[e - 1].equals(t[0]) && t.pop()
			}

			function n(t, e, i) {
				return t.x !== e.x ? t.x < e.x ? t.x <= i.x && i.x <= e.x : e.x <= i.x && i.x <= t.x : t.y < e.y ? t.y <= i.y && i.y <= e.y : e.y <= i.y && i.y <= t.y
			}

			function r(t, e, i, r, a) {
				var o = e.x - t.x,
					s = e.y - t.y,
					c = r.x - i.x,
					h = r.y - i.y,
					l = t.x - i.x,
					u = t.y - i.y,
					d = s * c - o * h,
					p = s * l - o * u;
				if (Math.abs(d) > Number.EPSILON) {
					var f;
					if (d > 0) {
						if (p < 0 || p > d) {
							return []
						}
						if ((f = h * l - c * u) < 0 || f > d) {
							return []
						}
					} else {
						if (p > 0 || p < d) {
							return []
						}
						if ((f = h * l - c * u) > 0 || f < d) {
							return []
						}
					}
					if (0 === f) {
						return !a || 0 !== p && p !== d ? [t] : []
					}
					if (f === d) {
						return !a || 0 !== p && p !== d ? [e] : []
					}
					if (0 === p) {
						return [i]
					}
					if (p === d) {
						return [r]
					}
					var m = f / d;
					return [{
						x: t.x + m * o,
						y: t.y + m * s
					}]
				}
				if (0 !== p || h * l != c * u) {
					return []
				}
				var g = 0 === o && 0 === s,
					v = 0 === c && 0 === h;
				if (g && v) {
					return t.x !== i.x || t.y !== i.y ? [] : [t]
				}
				if (g) {
					return n(i, r, t) ? [t] : []
				}
				if (v) {
					return n(t, e, i) ? [i] : []
				}
				var y, x, _, b, w, M, E, T;
				return 0 !== o ? (t.x < e.x ? (y = t, _ = t.x, x = e, b = e.x) : (y = e, _ = e.x, x = t, b = t.x), i.x < r.x ? (w = i, E = i.x, M = r, T = r.x) : (w = r, E = r.x, M = i, T = i.x)) : (t.y < e.y ? (y = t, _ = t.y, x = e, b = e.y) : (y = e, _ = e.y, x = t, b = t.y), i.y < r.y ? (w = i, E = i.y, M = r, T = r.y) : (w = r, E = r.y, M = i, T = i.y)), _ <= E ? b < E ? [] : b === E ? a ? [] : [w] : b <= T ? [w, x] : [w, M] : _ > T ? [] : _ === T ? a ? [] : [y] : b <= T ? [y, x] : [y, M]
			}

			function a(t, e, i, n) {
				var r = e.x - t.x,
					a = e.y - t.y,
					o = i.x - t.x,
					s = i.y - t.y,
					c = n.x - t.x,
					h = n.y - t.y,
					l = r * s - a * o,
					u = r * h - a * c;
				if (Math.abs(l) > Number.EPSILON) {
					var d = c * s - h * o;
					return l > 0 ? u >= 0 && d >= 0 : u >= 0 || d >= 0
				}
				return u > 0
			}
			i(t), e.forEach(i);
			for (var o, s, c, h, l, u, d = {}, p = t.concat(), f = 0, m = e.length; f < m; f++) {
				Array.prototype.push.apply(p, e[f])
			}
			for (o = 0, s = p.length; o < s; o++) {
				void 0 !== d[l = p[o].x + ":" + p[o].y] && console.warn("THREE.ShapeUtils: Duplicate point", l, o), d[l] = o
			}
			var g = function(t, e) {
					for (var i, n, o, s, c, h, l, u, d, p, f, m = t.concat(), g = [], v = [], y = 0, x = e.length; y < x; y++) {
						g.push(y)
					}
					for (var _ = 0, b = 2 * g.length; g.length > 0;) {
						if (--b < 0) {
							console.log("Infinite Loop! Holes left:" + g.length + ", Probably Hole outside Shape!");
							break
						}
						for (o = _; o < m.length; o++) {
							for (s = m[o], n = -1, y = 0; y < g.length; y++) {
								if (h = g[y], l = s.x + ":" + s.y + ":" + h, void 0 === v[l]) {
									i = e[h];
									for (var w = 0; w < i.length; w++) {
										if (c = i[w], function(t, e) {
												var n = m.length - 1,
													r = t - 1;
												r < 0 && (r = n);
												var o = t + 1;
												o > n && (o = 0);
												var s = a(m[t], m[r], m[o], i[e]);
												if (!s) {
													return !1
												}
												var c = i.length - 1,
													h = e - 1;
												h < 0 && (h = c);
												var l = e + 1;
												return l > c && (l = 0), !!(s = a(i[e], i[h], i[l], m[t]))
											}(o, w) && ! function(t, e) {
												var i, n;
												for (i = 0; i < m.length; i++) {
													if (n = i + 1, n %= m.length, r(t, e, m[i], m[n], !0).length > 0) {
														return !0
													}
												}
												return !1
											}(s, c) && ! function(t, i) {
												var n, a, o, s;
												for (n = 0; n < g.length; n++) {
													for (a = e[g[n]], o = 0; o < a.length; o++) {
														if (s = o + 1, s %= a.length, r(t, i, a[o], a[s], !0).length > 0) {
															return !0
														}
													}
												}
												return !1
											}(s, c)) {
											n = w, g.splice(y, 1), u = m.slice(0, o + 1), d = m.slice(o), p = i.slice(n), f = i.slice(0, n + 1), m = u.concat(p).concat(f).concat(d), _ = o;
											break
										}
									}
									if (n >= 0) {
										break
									}
									v[l] = !0
								}
							}
							if (n >= 0) {
								break
							}
						}
					}
					return m
				}(t, e),
				v = ts.triangulate(g, !1);
			for (o = 0, s = v.length; o < s; o++) {
				for (h = v[o], c = 0; c < 3; c++) {
					void 0 !== (u = d[l = h[c].x + ":" + h[c].y]) && (h[c] = u)
				}
			}
			return v.concat()
		},
		isClockWise: function(t) {
			return ts.area(t) < 0
		}
	};
	(ti.prototype = Object.create(St.prototype)).constructor = ti, ei.prototype = Object.create(At.prototype), ei.prototype.constructor = ei, ei.prototype.getArrays = function() {
		var t = this.getAttribute("position"),
			e = t ? Array.prototype.slice.call(t.array) : [],
			i = this.getAttribute("uv"),
			n = i ? Array.prototype.slice.call(i.array) : [],
			r = this.index;
		return {
			position: e,
			uv: n,
			index: r ? Array.prototype.slice.call(r.array) : []
		}
	}, ei.prototype.addShapeList = function(t, e) {
		var i = t.length;
		e.arrays = this.getArrays();
		for (var n = 0; n < i; n++) {
			var r = t[n];
			this.addShape(r, e)
		}
		this.setIndex(e.arrays.index), this.addAttribute("position", new bt(e.arrays.position, 3)), this.addAttribute("uv", new bt(e.arrays.uv, 2))
	}, ei.prototype.addShape = function(t, e) {
		function n(t, e, i) {
			return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(i).add(t)
		}

		function r(t, e, n) {
			var r, a, o = 1,
				s = t.x - e.x,
				c = t.y - e.y,
				h = n.x - t.x,
				l = n.y - t.y,
				u = s * s + c * c,
				d = s * l - c * h;
			if (Math.abs(d) > Number.EPSILON) {
				var p = Math.sqrt(u),
					f = Math.sqrt(h * h + l * l),
					m = e.x - c / p,
					g = e.y + s / p,
					v = ((n.x - l / f - m) * l - (n.y + h / f - g) * h) / (s * l - c * h),
					y = (r = m + s * v - t.x) * r + (a = g + c * v - t.y) * a;
				if (y <= 2) {
					return new i(r, a)
				}
				o = Math.sqrt(y / 2)
			} else {
				var x = !1;
				s > Number.EPSILON ? h > Number.EPSILON && (x = !0) : s < -Number.EPSILON ? h < -Number.EPSILON && (x = !0) : Math.sign(c) === Math.sign(l) && (x = !0), x ? (r = -c, a = s, o = Math.sqrt(u)) : (r = s, a = c, o = Math.sqrt(u / 2))
			}
			return new i(r / o, a / o)
		}

		function a(t, e) {
			var i, n;
			for (Q = t.length; --Q >= 0;) {
				i = Q, (n = Q - 1) < 0 && (n = t.length - 1);
				var r = 0,
					a = R + 2 * T;
				for (r = 0; r < a; r++) {
					var o = Y * r,
						s = Y * (r + 1);
					h(e + i + o, e + n + o, e + n + s, e + i + s, t, r, a, i, n)
				}
			}
		}

		function o(t, e, i) {
			b.push(t), b.push(e), b.push(i)
		}

		function s(t, e, i) {
			l(t), l(e), l(i);
			var n = y.length / 3,
				r = C.generateTopUV(O, y, n - 3, n - 2, n - 1);
			u(r[0]), u(r[1]), u(r[2])
		}

		function h(t, e, i, n, r, a, o, s, c) {
			l(t), l(e), l(n), l(e), l(i), l(n);
			var h = y.length / 3,
				d = C.generateSideWallUV(O, y, h - 6, h - 3, h - 2, h - 1);
			u(d[0]), u(d[1]), u(d[3]), u(d[1]), u(d[2]), u(d[3])
		}

		function l(t) {
			x.push(y.length / 3), y.push(b[3 * t + 0]), y.push(b[3 * t + 1]), y.push(b[3 * t + 2])
		}

		function u(t) {
			_.push(t.x), _.push(t.y)
		}
		var d, p, f, m, g, v = e.arrays ? e.arrays : this.getArrays(),
			y = v.position,
			x = v.index,
			_ = v.uv,
			b = [],
			w = void 0 !== e.amount ? e.amount : 100,
			M = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
			E = void 0 !== e.bevelSize ? e.bevelSize : M - 2,
			T = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
			S = void 0 === e.bevelEnabled || e.bevelEnabled,
			A = void 0 !== e.curveSegments ? e.curveSegments : 12,
			R = void 0 !== e.steps ? e.steps : 1,
			L = e.extrudePath,
			P = !1,
			C = void 0 !== e.UVGenerator ? e.UVGenerator : ti.WorldUVGenerator;
		L && (d = L.getSpacedPoints(R), P = !0, S = !1, p = void 0 !== e.frames ? e.frames : L.computeFrenetFrames(R, !1), f = new c, m = new c, g = new c), S || (T = 0, M = 0, E = 0);
		var I, U, N, O = this,
			D = t.extractPoints(A),
			F = D.shape,
			B = D.holes,
			z = !ts.isClockWise(F);
		if (z) {
			for (F = F.reverse(), U = 0, N = B.length; U < N; U++) {
				I = B[U], ts.isClockWise(I) && (B[U] = I.reverse())
			}
			z = !1
		}
		var G = ts.triangulateShape(F, B),
			H = F;
		for (U = 0, N = B.length; U < N; U++) {
			I = B[U], F = F.concat(I)
		}
		for (var V, k, j, W, X, q, Y = F.length, Z = G.length, J = [], Q = 0, K = H.length, $ = K - 1, tt = Q + 1; Q < K; Q++, $++, tt++) {
			$ === K && ($ = 0), tt === K && (tt = 0), J[Q] = r(H[Q], H[$], H[tt])
		}
		var et, it = [],
			nt = J.concat();
		for (U = 0, N = B.length; U < N; U++) {
			for (I = B[U], et = [], Q = 0, $ = (K = I.length) - 1, tt = Q + 1; Q < K; Q++, $++, tt++) {
				$ === K && ($ = 0), tt === K && (tt = 0), et[Q] = r(I[Q], I[$], I[tt])
			}
			it.push(et), nt = nt.concat(et)
		}
		for (V = 0; V < T; V++) {
			for (j = V / T, W = M * Math.cos(j * Math.PI / 2), k = E * Math.sin(j * Math.PI / 2), Q = 0, K = H.length; Q < K; Q++) {
				o((X = n(H[Q], J[Q], k)).x, X.y, -W)
			}
			for (U = 0, N = B.length; U < N; U++) {
				for (I = B[U], et = it[U], Q = 0, K = I.length; Q < K; Q++) {
					o((X = n(I[Q], et[Q], k)).x, X.y, -W)
				}
			}
		}
		for (k = E, Q = 0; Q < Y; Q++) {
			X = S ? n(F[Q], nt[Q], k) : F[Q], P ? (m.copy(p.normals[0]).multiplyScalar(X.x), f.copy(p.binormals[0]).multiplyScalar(X.y), g.copy(d[0]).add(m).add(f), o(g.x, g.y, g.z)) : o(X.x, X.y, 0)
		}
		var rt;
		for (rt = 1; rt <= R; rt++) {
			for (Q = 0; Q < Y; Q++) {
				X = S ? n(F[Q], nt[Q], k) : F[Q], P ? (m.copy(p.normals[rt]).multiplyScalar(X.x), f.copy(p.binormals[rt]).multiplyScalar(X.y), g.copy(d[rt]).add(m).add(f), o(g.x, g.y, g.z)) : o(X.x, X.y, w / R * rt)
			}
		}
		for (V = T - 1; V >= 0; V--) {
			for (j = V / T, W = M * Math.cos(j * Math.PI / 2), k = E * Math.sin(j * Math.PI / 2), Q = 0, K = H.length; Q < K; Q++) {
				o((X = n(H[Q], J[Q], k)).x, X.y, w + W)
			}
			for (U = 0, N = B.length; U < N; U++) {
				for (I = B[U], et = it[U], Q = 0, K = I.length; Q < K; Q++) {
					X = n(I[Q], et[Q], k), P ? o(X.x, X.y + d[R - 1].y, d[R - 1].x + W) : o(X.x, X.y, w + W)
				}
			}
		}! function() {
			var t = y.length / 3;
			if (S) {
				var i = 0,
					n = Y * i;
				for (Q = 0; Q < Z; Q++) {
					s((q = G[Q])[2] + n, q[1] + n, q[0] + n)
				}
				for (n = Y * (i = R + 2 * T), Q = 0; Q < Z; Q++) {
					s((q = G[Q])[0] + n, q[1] + n, q[2] + n)
				}
			} else {
				for (Q = 0; Q < Z; Q++) {
					s((q = G[Q])[2], q[1], q[0])
				}
				for (Q = 0; Q < Z; Q++) {
					s((q = G[Q])[0] + Y * R, q[1] + Y * R, q[2] + Y * R)
				}
			}
			O.addGroup(t, y.length / 3 - t, void 0 !== e.material ? e.material : 0)
		}(),
		function() {
			var t = y.length / 3,
				i = 0;
			for (a(H, i), i += H.length, U = 0, N = B.length; U < N; U++) {
				a(I = B[U], i), i += I.length
			}
			O.addGroup(t, y.length / 3 - t, void 0 !== e.extrudeMaterial ? e.extrudeMaterial : 1)
		}(), e.arrays || (this.setIndex(x), this.addAttribute("position", new bt(y, 3)), this.addAttribute("uv", new bt(e.arrays.uv, 2)))
	}, ti.WorldUVGenerator = {
		generateTopUV: function(t, e, n, r, a) {
			var o = e[3 * n],
				s = e[3 * n + 1],
				c = e[3 * r],
				h = e[3 * r + 1],
				l = e[3 * a],
				u = e[3 * a + 1];
			return [new i(o, s), new i(c, h), new i(l, u)]
		},
		generateSideWallUV: function(t, e, n, r, a, o) {
			var s = e[3 * n],
				c = e[3 * n + 1],
				h = e[3 * n + 2],
				l = e[3 * r],
				u = e[3 * r + 1],
				d = e[3 * r + 2],
				p = e[3 * a],
				f = e[3 * a + 1],
				m = e[3 * a + 2],
				g = e[3 * o],
				v = e[3 * o + 1],
				y = e[3 * o + 2];
			return Math.abs(c - u) < 0.01 ? [new i(s, 1 - h), new i(l, 1 - d), new i(p, 1 - m), new i(g, 1 - y)] : [new i(c, 1 - h), new i(u, 1 - d), new i(f, 1 - m), new i(v, 1 - y)]
		}
	}, (ii.prototype = Object.create(St.prototype)).constructor = ii, (ni.prototype = Object.create(ei.prototype)).constructor = ni, (ri.prototype = Object.create(St.prototype)).constructor = ri, ai.prototype = Object.create(At.prototype), ai.prototype.constructor = ai, (oi.prototype = Object.create(St.prototype)).constructor = oi, (si.prototype = Object.create(At.prototype)).constructor = si, (ci.prototype = Object.create(St.prototype)).constructor = ci, (hi.prototype = Object.create(At.prototype)).constructor = hi, (li.prototype = Object.create(St.prototype)).constructor = li, (ui.prototype = Object.create(At.prototype)).constructor = ui, (di.prototype = Object.create(At.prototype)).constructor = di, pi.prototype = Object.create(St.prototype), pi.prototype.constructor = pi, fi.prototype = Object.create(At.prototype), fi.prototype.constructor = fi, (mi.prototype = Object.create(pi.prototype)).constructor = mi, (gi.prototype = Object.create(fi.prototype)).constructor = gi, (vi.prototype = Object.create(St.prototype)).constructor = vi, (yi.prototype = Object.create(At.prototype)).constructor = yi;
	var es = Object.freeze({
		WireframeGeometry: Oe,
		ParametricGeometry: De,
		ParametricBufferGeometry: Fe,
		TetrahedronGeometry: Ge,
		TetrahedronBufferGeometry: He,
		OctahedronGeometry: Ve,
		OctahedronBufferGeometry: ke,
		IcosahedronGeometry: je,
		IcosahedronBufferGeometry: We,
		DodecahedronGeometry: Xe,
		DodecahedronBufferGeometry: qe,
		PolyhedronGeometry: Be,
		PolyhedronBufferGeometry: ze,
		TubeGeometry: Ye,
		TubeBufferGeometry: Ze,
		TorusKnotGeometry: Je,
		TorusKnotBufferGeometry: Qe,
		TorusGeometry: Ke,
		TorusBufferGeometry: $e,
		TextGeometry: ii,
		TextBufferGeometry: ni,
		SphereGeometry: ri,
		SphereBufferGeometry: ai,
		RingGeometry: oi,
		RingBufferGeometry: si,
		PlaneGeometry: Ct,
		PlaneBufferGeometry: It,
		LatheGeometry: ci,
		LatheBufferGeometry: hi,
		ShapeGeometry: li,
		ShapeBufferGeometry: ui,
		ExtrudeGeometry: ti,
		ExtrudeBufferGeometry: ei,
		EdgesGeometry: di,
		ConeGeometry: mi,
		ConeBufferGeometry: gi,
		CylinderGeometry: pi,
		CylinderBufferGeometry: fi,
		CircleGeometry: vi,
		CircleBufferGeometry: yi,
		BoxGeometry: Lt,
		BoxBufferGeometry: Pt
	});
	(xi.prototype = Object.create(Q.prototype)).constructor = xi, xi.prototype.isShadowMaterial = !0, (_i.prototype = Object.create(Q.prototype)).constructor = _i, _i.prototype.isRawShaderMaterial = !0, bi.prototype = Object.create(J.prototype), bi.prototype.constructor = bi, bi.prototype.isMeshStandardMaterial = !0, bi.prototype.copy = function(t) {
		return J.prototype.copy.call(this, t), this.defines = {
			STANDARD: ""
		}, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
	}, (wi.prototype = Object.create(bi.prototype)).constructor = wi, wi.prototype.isMeshPhysicalMaterial = !0, wi.prototype.copy = function(t) {
		return bi.prototype.copy.call(this, t), this.defines = {
			PHYSICAL: ""
		}, this.reflectivity = t.reflectivity, this.clearCoat = t.clearCoat, this.clearCoatRoughness = t.clearCoatRoughness, this
	}, Mi.prototype = Object.create(J.prototype), Mi.prototype.constructor = Mi, Mi.prototype.isMeshPhongMaterial = !0, Mi.prototype.copy = function(t) {
		return J.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
	}, (Ei.prototype = Object.create(Mi.prototype)).constructor = Ei, Ei.prototype.isMeshToonMaterial = !0, Ei.prototype.copy = function(t) {
		return Mi.prototype.copy.call(this, t), this.gradientMap = t.gradientMap, this
	}, (Ti.prototype = Object.create(J.prototype)).constructor = Ti, Ti.prototype.isMeshNormalMaterial = !0, Ti.prototype.copy = function(t) {
		return J.prototype.copy.call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
	}, (Si.prototype = Object.create(J.prototype)).constructor = Si, Si.prototype.isMeshLambertMaterial = !0, Si.prototype.copy = function(t) {
		return J.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
	}, (Ai.prototype = Object.create(J.prototype)).constructor = Ai, Ai.prototype.isLineDashedMaterial = !0, Ai.prototype.copy = function(t) {
		return J.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this
	};
	var is = Object.freeze({
			ShadowMaterial: xi,
			SpriteMaterial: ye,
			RawShaderMaterial: _i,
			ShaderMaterial: Q,
			PointsMaterial: Re,
			MeshPhysicalMaterial: wi,
			MeshStandardMaterial: bi,
			MeshPhongMaterial: Mi,
			MeshToonMaterial: Ei,
			MeshNormalMaterial: Ti,
			MeshLambertMaterial: Si,
			MeshDepthMaterial: K,
			MeshBasicMaterial: dt,
			LineDashedMaterial: Ai,
			LineBasicMaterial: Ee,
			Material: J
		}),
		ns = {
			enabled: !1,
			files: {},
			add: function(t, e) {
				!1 !== this.enabled && (this.files[t] = e)
			},
			get: function(t) {
				if (!1 !== this.enabled) {
					return this.files[t]
				}
			},
			remove: function(t) {
				delete this.files[t]
			},
			clear: function() {
				this.files = {}
			}
		},
		rs = new Ri;
	Object.assign(Li.prototype, {
		load: function(t, e, i, n) {
			void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t);
			var r = this,
				a = ns.get(t);
			if (void 0 !== a) {
				return r.manager.itemStart(t), setTimeout(function() {
					e && e(a), r.manager.itemEnd(t)
				}, 0), a
			}
			var o = /^data:(.*?)(;base64)?,(.*)$/,
				s = t.match(o);
			if (s) {
				var c = s[1],
					h = !!s[2],
					l = s[3];
				l = window.decodeURIComponent(l), h && (l = window.atob(l));
				try {
					var u, d = (this.responseType || "").toLowerCase();
					switch (d) {
						case "arraybuffer":
						case "blob":
							u = new ArrayBuffer(l.length);
							for (var p = new Uint8Array(u), f = 0; f < l.length; f++) {
								p[f] = l.charCodeAt(f)
							}
							"blob" === d && (u = new Blob([u], {
								type: c
							}));
							break;
						case "document":
							var m = new DOMParser;
							u = m.parseFromString(l, c);
							break;
						case "json":
							u = JSON.parse(l);
							break;
						default:
							u = l
					}
					window.setTimeout(function() {
						e && e(u), r.manager.itemEnd(t)
					}, 0)
				} catch (e) {
					window.setTimeout(function() {
						n && n(e), r.manager.itemEnd(t), r.manager.itemError(t)
					}, 0)
				}
			} else {
				var g = new XMLHttpRequest;
				g.open("GET", t, !0), g.addEventListener("load", function(i) {
					var a = i.target.response;
					ns.add(t, a), 200 === this.status ? (e && e(a), r.manager.itemEnd(t)) : 0 === this.status ? (console.warn("THREE.FileLoader: HTTP Status 0 received."), e && e(a), r.manager.itemEnd(t)) : (n && n(i), r.manager.itemEnd(t), r.manager.itemError(t))
				}, !1), void 0 !== i && g.addEventListener("progress", function(t) {
					i(t)
				}, !1), g.addEventListener("error", function(e) {
					n && n(e), r.manager.itemEnd(t), r.manager.itemError(t)
				}, !1), void 0 !== this.responseType && (g.responseType = this.responseType), void 0 !== this.withCredentials && (g.withCredentials = this.withCredentials), g.overrideMimeType && g.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain");
				for (var v in this.requestHeader) {
					g.setRequestHeader(v, this.requestHeader[v])
				}
				g.send(null)
			}
			return r.manager.itemStart(t), g
		},
		setPath: function(t) {
			return this.path = t, this
		},
		setResponseType: function(t) {
			return this.responseType = t, this
		},
		setWithCredentials: function(t) {
			return this.withCredentials = t, this
		},
		setMimeType: function(t) {
			return this.mimeType = t, this
		},
		setRequestHeader: function(t) {
			return this.requestHeader = t, this
		}
	}), Object.assign(Pi.prototype, {
		load: function(t, e, i, n) {
			var r = this,
				a = [],
				o = new Ie;
			o.image = a;
			var s = new Li(this.manager);
			if (s.setPath(this.path), s.setResponseType("arraybuffer"), Array.isArray(t)) {
				for (var c = 0, h = 0, l = t.length; h < l; ++h) {
					! function(h) {
						s.load(t[h], function(t) {
							var i = r._parser(t, !0);
							a[h] = {
								width: i.width,
								height: i.height,
								format: i.format,
								mipmaps: i.mipmaps
							}, 6 === (c += 1) && (1 === i.mipmapCount && (o.minFilter = ka), o.format = i.format, o.needsUpdate = !0, e && e(o))
						}, i, n)
					}(h)
				}
			} else {
				s.load(t, function(t) {
					var i = r._parser(t, !0);
					if (i.isCubemap) {
						for (var n = i.mipmaps.length / i.mipmapCount, s = 0; s < n; s++) {
							a[s] = {
								mipmaps: []
							};
							for (var c = 0; c < i.mipmapCount; c++) {
								a[s].mipmaps.push(i.mipmaps[s * i.mipmapCount + c]), a[s].format = i.format, a[s].width = i.width, a[s].height = i.height
							}
						}
					} else {
						o.image.width = i.width, o.image.height = i.height, o.mipmaps = i.mipmaps
					}
					1 === i.mipmapCount && (o.minFilter = ka), o.format = i.format, o.needsUpdate = !0, e && e(o)
				}, i, n)
			}
			return o
		},
		setPath: function(t) {
			return this.path = t, this
		}
	}), Object.assign(Ci.prototype, {
		load: function(t, e, i, n) {
			var r = this,
				a = new l,
				o = new Li(this.manager);
			return o.setResponseType("arraybuffer"), o.load(t, function(t) {
				var i = r._parser(t);
				i && (void 0 !== i.image ? a.image = i.image : void 0 !== i.data && (a.image.width = i.width, a.image.height = i.height, a.image.data = i.data), a.wrapS = void 0 !== i.wrapS ? i.wrapS : Ba, a.wrapT = void 0 !== i.wrapT ? i.wrapT : Ba, a.magFilter = void 0 !== i.magFilter ? i.magFilter : ka, a.minFilter = void 0 !== i.minFilter ? i.minFilter : Wa, a.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1, void 0 !== i.format && (a.format = i.format), void 0 !== i.type && (a.type = i.type), void 0 !== i.mipmaps && (a.mipmaps = i.mipmaps), 1 === i.mipmapCount && (a.minFilter = ka), a.needsUpdate = !0, e && e(a, i))
			}, i, n), a
		}
	}), Object.assign(Ii.prototype, {
		load: function(t, e, i, n) {
			void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t);
			var r = this,
				a = ns.get(t);
			if (void 0 !== a) {
				return r.manager.itemStart(t), setTimeout(function() {
					e && e(a), r.manager.itemEnd(t)
				}, 0), a
			}
			var o = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
			return o.addEventListener("load", function() {
				ns.add(t, this), e && e(this), r.manager.itemEnd(t)
			}, !1), o.addEventListener("error", function(e) {
				n && n(e), r.manager.itemEnd(t), r.manager.itemError(t)
			}, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(t), o.src = t, o
		},
		setCrossOrigin: function(t) {
			return this.crossOrigin = t, this
		},
		setPath: function(t) {
			return this.path = t, this
		}
	}), Object.assign(Ui.prototype, {
		load: function(t, e, i, n) {
			var r = new u,
				a = new Ii(this.manager);
			a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
			for (var o = 0, s = 0; s < t.length; ++s) {
				! function(i) {
					a.load(t[i], function(t) {
						r.images[i] = t, 6 == ++o && (r.needsUpdate = !0, e && e(r))
					}, void 0, n)
				}(s)
			}
			return r
		},
		setCrossOrigin: function(t) {
			return this.crossOrigin = t, this
		},
		setPath: function(t) {
			return this.path = t, this
		}
	}), Object.assign(Ni.prototype, {
		load: function(t, e, i, r) {
			var a = new Ii(this.manager);
			a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
			var o = new n;
			return o.image = a.load(t, function() {
				var i = t.search(/\.(jpg|jpeg)$/) > 0 || 0 === t.search(/^data\:image\/jpeg/);
				o.format = i ? ao : oo, o.needsUpdate = !0, void 0 !== e && e(o)
			}, i, r), o
		},
		setCrossOrigin: function(t) {
			return this.crossOrigin = t, this
		},
		setPath: function(t) {
			return this.path = t, this
		}
	}), Oi.prototype = Object.assign(Object.create(ct.prototype), {
		constructor: Oi,
		isLight: !0,
		copy: function(t) {
			return ct.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this
		},
		toJSON: function(t) {
			var e = ct.prototype.toJSON.call(this, t);
			return e.object.color = this.color.getHex(), e.object.intensity = this.intensity, void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (e.object.distance = this.distance), void 0 !== this.angle && (e.object.angle = this.angle), void 0 !== this.decay && (e.object.decay = this.decay), void 0 !== this.penumbra && (e.object.penumbra = this.penumbra), void 0 !== this.shadow && (e.object.shadow = this.shadow.toJSON()), e
		}
	}), Di.prototype = Object.assign(Object.create(Oi.prototype), {
		constructor: Di,
		isHemisphereLight: !0,
		copy: function(t) {
			return Oi.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this
		}
	}), Object.assign(Fi.prototype, {
		copy: function(t) {
			return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		toJSON: function() {
			var t = {};
			return 0 !== this.bias && (t.bias = this.bias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t
		}
	}), Bi.prototype = Object.assign(Object.create(Fi.prototype), {
		constructor: Bi,
		isSpotLightShadow: !0,
		update: function(t) {
			var e = this.camera,
				i = 2 * Do.RAD2DEG * t.angle,
				n = this.mapSize.width / this.mapSize.height,
				r = t.distance || e.far;
			i === e.fov && n === e.aspect && r === e.far || (e.fov = i, e.aspect = n, e.far = r, e.updateProjectionMatrix())
		}
	}), zi.prototype = Object.assign(Object.create(Oi.prototype), {
		constructor: zi,
		isSpotLight: !0,
		copy: function(t) {
			return Oi.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
		}
	}), Gi.prototype = Object.assign(Object.create(Oi.prototype), {
		constructor: Gi,
		isPointLight: !0,
		copy: function(t) {
			return Oi.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
		}
	}), Hi.prototype = Object.assign(Object.create(Fi.prototype), {
		constructor: Hi
	}), Vi.prototype = Object.assign(Object.create(Oi.prototype), {
		constructor: Vi,
		isDirectionalLight: !0,
		copy: function(t) {
			return Oi.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
		}
	}), ki.prototype = Object.assign(Object.create(Oi.prototype), {
		constructor: ki,
		isAmbientLight: !0
	}), ji.prototype = Object.assign(Object.create(Oi.prototype), {
		constructor: ji,
		isRectAreaLight: !0,
		copy: function(t) {
			return Oi.prototype.copy.call(this, t), this.width = t.width, this.height = t.height, this
		},
		toJSON: function(t) {
			var e = Oi.prototype.toJSON.call(this, t);
			return e.object.width = this.width, e.object.height = this.height, e
		}
	});
	var as = {
		arraySlice: function(t, e, i) {
			return as.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== i ? i : t.length)) : t.slice(e, i)
		},
		convertArray: function(t, e, i) {
			return !t || !i && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
		},
		isTypedArray: function(t) {
			return ArrayBuffer.isView(t) && !(t instanceof DataView)
		},
		getKeyframeOrder: function(t) {
			for (var e = t.length, i = new Array(e), n = 0; n !== e; ++n) {
				i[n] = n
			}
			return i.sort(function(e, i) {
				return t[e] - t[i]
			}), i
		},
		sortedArray: function(t, e, i) {
			for (var n = t.length, r = new t.constructor(n), a = 0, o = 0; o !== n; ++a) {
				for (var s = i[a] * e, c = 0; c !== e; ++c) {
					r[o++] = t[s + c]
				}
			}
			return r
		},
		flattenJSON: function(t, e, i, n) {
			for (var r = 1, a = t[0]; void 0 !== a && void 0 === a[n];) {
				a = t[r++]
			}
			if (void 0 !== a) {
				var o = a[n];
				if (void 0 !== o) {
					if (Array.isArray(o)) {
						do {
							void 0 !== (o = a[n]) && (e.push(a.time), i.push.apply(i, o)), a = t[r++]
						} while (void 0 !== a)
					} else {
						if (void 0 !== o.toArray) {
							do {
								void 0 !== (o = a[n]) && (e.push(a.time), o.toArray(i, i.length)), a = t[r++]
							} while (void 0 !== a)
						} else {
							do {
								void 0 !== (o = a[n]) && (e.push(a.time), i.push(o)), a = t[r++]
							} while (void 0 !== a)
						}
					}
				}
			}
		}
	};
	Object.assign(Wi.prototype, {
		evaluate: function(t) {
			var e = this.parameterPositions,
				i = this._cachedIndex,
				n = e[i],
				r = e[i - 1];
			t: {
				e: {
					var a;i: {
						n: if (!(t < n)) {
							for (s = i + 2;;) {
								if (void 0 === n) {
									if (t < r) {
										break n
									}
									return i = e.length, this._cachedIndex = i, this.afterEnd_(i - 1, t, r)
								}
								if (i === s) {
									break
								}
								if (r = n, n = e[++i], t < n) {
									break e
								}
							}
							a = e.length;
							break i
						}if (t >= r) {
							break t
						}
						var o = e[1];t < o && (i = 2, r = o);
						for (var s = i - 2;;) {
							if (void 0 === r) {
								return this._cachedIndex = 0, this.beforeStart_(0, t, n)
							}
							if (i === s) {
								break
							}
							if (n = r, r = e[--i - 1], t >= r) {
								break e
							}
						}
						a = i,
						i = 0
					}
					for (; i < a;) {
						var c = i + a >>> 1;
						t < e[c] ? a = c : i = c + 1
					}
					if (n = e[i], void 0 === (r = e[i - 1])) {
						return this._cachedIndex = 0, this.beforeStart_(0, t, n)
					}
					if (void 0 === n) {
						return i = e.length, this._cachedIndex = i, this.afterEnd_(i - 1, r, t)
					}
				}
				this._cachedIndex = i,
				this.intervalChanged_(i, r, n)
			}
			return this.interpolate_(i, r, t, n)
		},
		settings: null,
		DefaultSettings_: {},
		getSettings_: function() {
			return this.settings || this.DefaultSettings_
		},
		copySampleValue_: function(t) {
			for (var e = this.resultBuffer, i = this.sampleValues, n = this.valueSize, r = t * n, a = 0; a !== n; ++a) {
				e[a] = i[r + a]
			}
			return e
		},
		interpolate_: function(t, e, i, n) {
			throw new Error("call to abstract method")
		},
		intervalChanged_: function(t, e, i) {}
	}), Object.assign(Wi.prototype, {
		beforeStart_: Wi.prototype.copySampleValue_,
		afterEnd_: Wi.prototype.copySampleValue_
	}), Xi.prototype = Object.assign(Object.create(Wi.prototype), {
		constructor: Xi,
		DefaultSettings_: {
			endingStart: Mo,
			endingEnd: Mo
		},
		intervalChanged_: function(t, e, i) {
			var n = this.parameterPositions,
				r = t - 2,
				a = t + 1,
				o = n[r],
				s = n[a];
			if (void 0 === o) {
				switch (this.getSettings_().endingStart) {
					case 2401:
						r = t, o = 2 * e - i;
						break;
					case 2402:
						o = e + n[r = n.length - 2] - n[r + 1];
						break;
					default:
						r = t, o = i
				}
			}
			if (void 0 === s) {
				switch (this.getSettings_().endingEnd) {
					case 2401:
						a = t, s = 2 * i - e;
						break;
					case 2402:
						a = 1, s = i + n[1] - n[0];
						break;
					default:
						a = t - 1, s = e
				}
			}
			var c = 0.5 * (i - e),
				h = this.valueSize;
			this._weightPrev = c / (e - o), this._weightNext = c / (s - i), this._offsetPrev = r * h, this._offsetNext = a * h
		},
		interpolate_: function(t, e, i, n) {
			for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, h = this._offsetPrev, l = this._offsetNext, u = this._weightPrev, d = this._weightNext, p = (i - e) / (n - e), f = p * p, m = f * p, g = -u * m + 2 * u * f - u * p, v = (1 + u) * m + (-1.5 - 2 * u) * f + (-0.5 + u) * p + 1, y = (-1 - d) * m + (1.5 + d) * f + 0.5 * p, x = d * m - d * f, _ = 0; _ !== o; ++_) {
				r[_] = g * a[h + _] + v * a[c + _] + y * a[s + _] + x * a[l + _]
			}
			return r
		}
	}), qi.prototype = Object.assign(Object.create(Wi.prototype), {
		constructor: qi,
		interpolate_: function(t, e, i, n) {
			for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, s = t * o, c = s - o, h = (i - e) / (n - e), l = 1 - h, u = 0; u !== o; ++u) {
				r[u] = a[c + u] * l + a[s + u] * h
			}
			return r
		}
	}), Yi.prototype = Object.assign(Object.create(Wi.prototype), {
		constructor: Yi,
		interpolate_: function(t, e, i, n) {
			return this.copySampleValue_(t - 1)
		}
	});
	var os;
	os = {
		TimeBufferType: Float32Array,
		ValueBufferType: Float32Array,
		DefaultInterpolation: 2301,
		InterpolantFactoryMethodDiscrete: function(t) {
			return new Yi(this.times, this.values, this.getValueSize(), t)
		},
		InterpolantFactoryMethodLinear: function(t) {
			return new qi(this.times, this.values, this.getValueSize(), t)
		},
		InterpolantFactoryMethodSmooth: function(t) {
			return new Xi(this.times, this.values, this.getValueSize(), t)
		},
		setInterpolation: function(t) {
			var e;
			switch (t) {
				case 2300:
					e = this.InterpolantFactoryMethodDiscrete;
					break;
				case 2301:
					e = this.InterpolantFactoryMethodLinear;
					break;
				case 2302:
					e = this.InterpolantFactoryMethodSmooth
			}
			if (void 0 !== e) {
				this.createInterpolant = e
			} else {
				var i = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
				if (void 0 === this.createInterpolant) {
					if (t === this.DefaultInterpolation) {
						throw new Error(i)
					}
					this.setInterpolation(this.DefaultInterpolation)
				}
				console.warn("THREE.KeyframeTrackPrototype:", i)
			}
		},
		getInterpolation: function() {
			switch (this.createInterpolant) {
				case this.InterpolantFactoryMethodDiscrete:
					return 2300;
				case this.InterpolantFactoryMethodLinear:
					return 2301;
				case this.InterpolantFactoryMethodSmooth:
					return 2302
			}
		},
		getValueSize: function() {
			return this.values.length / this.times.length
		},
		shift: function(t) {
			if (0 !== t) {
				for (var e = this.times, i = 0, n = e.length; i !== n; ++i) {
					e[i] += t
				}
			}
			return this
		},
		scale: function(t) {
			if (1 !== t) {
				for (var e = this.times, i = 0, n = e.length; i !== n; ++i) {
					e[i] *= t
				}
			}
			return this
		},
		trim: function(t, e) {
			for (var i = this.times, n = i.length, r = 0, a = n - 1; r !== n && i[r] < t;) {
				++r
			}
			for (; - 1 !== a && i[a] > e;) {
				--a
			}
			if (++a, 0 !== r || a !== n) {
				r >= a && (a = Math.max(a, 1), r = a - 1);
				var o = this.getValueSize();
				this.times = as.arraySlice(i, r, a), this.values = as.arraySlice(this.values, r * o, a * o)
			}
			return this
		},
		validate: function() {
			var t = !0,
				e = this.getValueSize();
			e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrackPrototype: Invalid value size in track.", this), t = !1);
			var i = this.times,
				n = this.values,
				r = i.length;
			0 === r && (console.error("THREE.KeyframeTrackPrototype: Track is empty.", this), t = !1);
			for (var a = null, o = 0; o !== r; o++) {
				var s = i[o];
				if ("number" == typeof s && isNaN(s)) {
					console.error("THREE.KeyframeTrackPrototype: Time is not a valid number.", this, o, s), t = !1;
					break
				}
				if (null !== a && a > s) {
					console.error("THREE.KeyframeTrackPrototype: Out of order keys.", this, o, s, a), t = !1;
					break
				}
				a = s
			}
			if (void 0 !== n && as.isTypedArray(n)) {
				for (var o = 0, c = n.length; o !== c; ++o) {
					var h = n[o];
					if (isNaN(h)) {
						console.error("THREE.KeyframeTrackPrototype: Value is not a valid number.", this, o, h), t = !1;
						break
					}
				}
			}
			return t
		},
		optimize: function() {
			for (var t = this.times, e = this.values, i = this.getValueSize(), n = 2302 === this.getInterpolation(), r = 1, a = t.length - 1, o = 1; o < a; ++o) {
				var s = !1,
					c = t[o];
				if (c !== t[o + 1] && (1 !== o || c !== c[0])) {
					if (n) {
						s = !0
					} else {
						for (var h = o * i, l = h - i, u = h + i, d = 0; d !== i; ++d) {
							var p = e[h + d];
							if (p !== e[l + d] || p !== e[u + d]) {
								s = !0;
								break
							}
						}
					}
				}
				if (s) {
					if (o !== r) {
						t[r] = t[o];
						for (var f = o * i, m = r * i, d = 0; d !== i; ++d) {
							e[m + d] = e[f + d]
						}
					}++r
				}
			}
			if (a > 0) {
				t[r] = t[a];
				for (var f = a * i, m = r * i, d = 0; d !== i; ++d) {
					e[m + d] = e[f + d]
				}++r
			}
			return r !== t.length && (this.times = as.arraySlice(t, 0, r), this.values = as.arraySlice(e, 0, r * i)), this
		}
	}, Ji.prototype = Object.assign(Object.create(os), {
		constructor: Ji,
		ValueTypeName: "vector"
	}), Qi.prototype = Object.assign(Object.create(Wi.prototype), {
		constructor: Qi,
		interpolate_: function(t, e, i, n) {
			for (var r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, c = t * o, h = (i - e) / (n - e), l = c + o; c !== l; c += 4) {
				s.slerpFlat(r, 0, a, c - o, a, c, h)
			}
			return r
		}
	}), Ki.prototype = Object.assign(Object.create(os), {
		constructor: Ki,
		ValueTypeName: "quaternion",
		DefaultInterpolation: 2301,
		InterpolantFactoryMethodLinear: function(t) {
			return new Qi(this.times, this.values, this.getValueSize(), t)
		},
		InterpolantFactoryMethodSmooth: void 0
	}), $i.prototype = Object.assign(Object.create(os), {
		constructor: $i,
		ValueTypeName: "number"
	}), tn.prototype = Object.assign(Object.create(os), {
		constructor: tn,
		ValueTypeName: "string",
		ValueBufferType: Array,
		DefaultInterpolation: 2300,
		InterpolantFactoryMethodLinear: void 0,
		InterpolantFactoryMethodSmooth: void 0
	}), en.prototype = Object.assign(Object.create(os), {
		constructor: en,
		ValueTypeName: "bool",
		ValueBufferType: Array,
		DefaultInterpolation: 2300,
		InterpolantFactoryMethodLinear: void 0,
		InterpolantFactoryMethodSmooth: void 0
	}), nn.prototype = Object.assign(Object.create(os), {
		constructor: nn,
		ValueTypeName: "color"
	}), rn.prototype = os, os.constructor = rn, Object.assign(rn, {
		parse: function(t) {
			if (void 0 === t.type) {
				throw new Error("track type undefined, can not parse")
			}
			var e = rn._getTrackTypeForValueTypeName(t.type);
			if (void 0 === t.times) {
				var i = [],
					n = [];
				as.flattenJSON(t.keys, i, n, "value"), t.times = i, t.values = n
			}
			return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
		},
		toJSON: function(t) {
			var e, i = t.constructor;
			if (void 0 !== i.toJSON) {
				e = i.toJSON(t)
			} else {
				e = {
					name: t.name,
					times: as.convertArray(t.times, Array),
					values: as.convertArray(t.values, Array)
				};
				var n = t.getInterpolation();
				n !== t.DefaultInterpolation && (e.interpolation = n)
			}
			return e.type = t.ValueTypeName, e
		},
		_getTrackTypeForValueTypeName: function(t) {
			switch (t.toLowerCase()) {
				case "scalar":
				case "double":
				case "float":
				case "number":
				case "integer":
					return $i;
				case "vector":
				case "vector2":
				case "vector3":
				case "vector4":
					return Ji;
				case "color":
					return nn;
				case "quaternion":
					return Ki;
				case "bool":
				case "boolean":
					return en;
				case "string":
					return tn
			}
			throw new Error("Unsupported typeName: " + t)
		}
	}), Object.assign(an, {
		parse: function(t) {
			for (var e = [], i = t.tracks, n = 1 / (t.fps || 1), r = 0, a = i.length; r !== a; ++r) {
				e.push(rn.parse(i[r]).scale(n))
			}
			return new an(t.name, t.duration, e)
		},
		toJSON: function(t) {
			for (var e = [], i = t.tracks, n = {
					name: t.name,
					duration: t.duration,
					tracks: e
				}, r = 0, a = i.length; r !== a; ++r) {
				e.push(rn.toJSON(i[r]))
			}
			return n
		},
		CreateFromMorphTargetSequence: function(t, e, i, n) {
			for (var r = e.length, a = [], o = 0; o < r; o++) {
				var s = [],
					c = [];
				s.push((o + r - 1) % r, o, (o + 1) % r), c.push(0, 1, 0);
				var h = as.getKeyframeOrder(s);
				s = as.sortedArray(s, 1, h), c = as.sortedArray(c, 1, h), n || 0 !== s[0] || (s.push(r), c.push(c[0])), a.push(new $i(".morphTargetInfluences[" + e[o].name + "]", s, c).scale(1 / i))
			}
			return new an(t, -1, a)
		},
		findByName: function(t, e) {
			var i = t;
			if (!Array.isArray(t)) {
				var n = t;
				i = n.geometry && n.geometry.animations || n.animations
			}
			for (var r = 0; r < i.length; r++) {
				if (i[r].name === e) {
					return i[r]
				}
			}
			return null
		},
		CreateClipsFromMorphTargetSequences: function(t, e, i) {
			for (var n = {}, r = /^([\w-]*?)([\d]+)$/, a = 0, o = t.length; a < o; a++) {
				var s = t[a],
					c = s.name.match(r);
				if (c && c.length > 1) {
					var h = n[u = c[1]];
					h || (n[u] = h = []), h.push(s)
				}
			}
			var l = [];
			for (var u in n) {
				l.push(an.CreateFromMorphTargetSequence(u, n[u], e, i))
			}
			return l
		},
		parseAnimation: function(t, e) {
			if (!t) {
				return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null
			}
			for (var i = function(t, e, i, n, r) {
					if (0 !== i.length) {
						var a = [],
							o = [];
						as.flattenJSON(i, a, o, n), 0 !== a.length && r.push(new t(e, a, o))
					}
				}, n = [], r = t.name || "default", a = t.length || -1, o = t.fps || 30, s = t.hierarchy || [], c = 0; c < s.length; c++) {
				var h = s[c].keys;
				if (h && 0 !== h.length) {
					if (h[0].morphTargets) {
						for (var l = {}, u = 0; u < h.length; u++) {
							if (h[u].morphTargets) {
								for (m = 0; m < h[u].morphTargets.length; m++) {
									l[h[u].morphTargets[m]] = -1
								}
							}
						}
						for (var d in l) {
							for (var p = [], f = [], m = 0; m !== h[u].morphTargets.length; ++m) {
								var g = h[u];
								p.push(g.time), f.push(g.morphTarget === d ? 1 : 0)
							}
							n.push(new $i(".morphTargetInfluence[" + d + "]", p, f))
						}
						a = l.length * (o || 1)
					} else {
						var v = ".bones[" + e[c].name + "]";
						i(Ji, v + ".position", h, "pos", n), i(Ki, v + ".quaternion", h, "rot", n), i(Ji, v + ".scale", h, "scl", n)
					}
				}
			}
			return 0 === n.length ? null : new an(r, a, n)
		}
	}), Object.assign(an.prototype, {
		resetDuration: function() {
			for (var t = 0, e = 0, i = this.tracks.length; e !== i; ++e) {
				var n = this.tracks[e];
				t = Math.max(t, n.times[n.times.length - 1])
			}
			this.duration = t
		},
		trim: function() {
			for (var t = 0; t < this.tracks.length; t++) {
				this.tracks[t].trim(0, this.duration)
			}
			return this
		},
		optimize: function() {
			for (var t = 0; t < this.tracks.length; t++) {
				this.tracks[t].optimize()
			}
			return this
		}
	}), Object.assign(on.prototype, {
		load: function(t, e, i, n) {
			var r = this;
			new Li(r.manager).load(t, function(t) {
				e(r.parse(JSON.parse(t)))
			}, i, n)
		},
		setTextures: function(t) {
			this.textures = t
		},
		parse: function(t) {
			function e(t) {
				return void 0 === n[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), n[t]
			}
			var n = this.textures,
				r = new is[t.type];
			if (void 0 !== t.uuid && (r.uuid = t.uuid), void 0 !== t.name && (r.name = t.name), void 0 !== t.color && r.color.setHex(t.color), void 0 !== t.roughness && (r.roughness = t.roughness), void 0 !== t.metalness && (r.metalness = t.metalness), void 0 !== t.emissive && r.emissive.setHex(t.emissive), void 0 !== t.specular && r.specular.setHex(t.specular), void 0 !== t.shininess && (r.shininess = t.shininess), void 0 !== t.clearCoat && (r.clearCoat = t.clearCoat), void 0 !== t.clearCoatRoughness && (r.clearCoatRoughness = t.clearCoatRoughness), void 0 !== t.uniforms && (r.uniforms = t.uniforms), void 0 !== t.vertexShader && (r.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (r.fragmentShader = t.fragmentShader), void 0 !== t.vertexColors && (r.vertexColors = t.vertexColors), void 0 !== t.fog && (r.fog = t.fog), void 0 !== t.shading && (r.shading = t.shading), void 0 !== t.blending && (r.blending = t.blending), void 0 !== t.side && (r.side = t.side), void 0 !== t.opacity && (r.opacity = t.opacity), void 0 !== t.transparent && (r.transparent = t.transparent), void 0 !== t.alphaTest && (r.alphaTest = t.alphaTest), void 0 !== t.depthTest && (r.depthTest = t.depthTest), void 0 !== t.depthWrite && (r.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (r.colorWrite = t.colorWrite), void 0 !== t.wireframe && (r.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (r.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (r.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (r.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.skinning && (r.skinning = t.skinning), void 0 !== t.morphTargets && (r.morphTargets = t.morphTargets), void 0 !== t.size && (r.size = t.size), void 0 !== t.sizeAttenuation && (r.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (r.map = e(t.map)), void 0 !== t.alphaMap && (r.alphaMap = e(t.alphaMap), r.transparent = !0), void 0 !== t.bumpMap && (r.bumpMap = e(t.bumpMap)), void 0 !== t.bumpScale && (r.bumpScale = t.bumpScale), void 0 !== t.normalMap && (r.normalMap = e(t.normalMap)), void 0 !== t.normalScale) {
				var a = t.normalScale;
				!1 === Array.isArray(a) && (a = [a, a]), r.normalScale = (new i).fromArray(a)
			}
			return void 0 !== t.displacementMap && (r.displacementMap = e(t.displacementMap)), void 0 !== t.displacementScale && (r.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (r.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (r.roughnessMap = e(t.roughnessMap)), void 0 !== t.metalnessMap && (r.metalnessMap = e(t.metalnessMap)), void 0 !== t.emissiveMap && (r.emissiveMap = e(t.emissiveMap)), void 0 !== t.emissiveIntensity && (r.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (r.specularMap = e(t.specularMap)), void 0 !== t.envMap && (r.envMap = e(t.envMap)), void 0 !== t.reflectivity && (r.reflectivity = t.reflectivity), void 0 !== t.lightMap && (r.lightMap = e(t.lightMap)), void 0 !== t.lightMapIntensity && (r.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (r.aoMap = e(t.aoMap)), void 0 !== t.aoMapIntensity && (r.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (r.gradientMap = e(t.gradientMap)), r
		}
	}), Object.assign(sn.prototype, {
		load: function(t, e, i, n) {
			var r = this;
			new Li(r.manager).load(t, function(t) {
				e(r.parse(JSON.parse(t)))
			}, i, n)
		},
		parse: function(t) {
			var e = new At,
				i = t.data.index;
			void 0 !== i && (o = new ss[i.type](i.array), e.setIndex(new pt(o, 1)));
			var n = t.data.attributes;
			for (var r in n) {
				var a = n[r],
					o = new ss[a.type](a.array);
				e.addAttribute(r, new pt(o, a.itemSize, a.normalized))
			}
			var s = t.data.groups || t.data.drawcalls || t.data.offsets;
			if (void 0 !== s) {
				for (var h = 0, l = s.length; h !== l; ++h) {
					var u = s[h];
					e.addGroup(u.start, u.count, u.materialIndex)
				}
			}
			var d = t.data.boundingSphere;
			if (void 0 !== d) {
				var p = new c;
				void 0 !== d.center && p.fromArray(d.center), e.boundingSphere = new tt(p, d.radius)
			}
			return e
		}
	});
	var ss = {
		Int8Array: Int8Array,
		Uint8Array: Uint8Array,
		Uint8ClampedArray: Uint8ClampedArray,
		Int16Array: Int16Array,
		Uint16Array: Uint16Array,
		Int32Array: Int32Array,
		Uint32Array: Uint32Array,
		Float32Array: Float32Array,
		Float64Array: Float64Array
	};
	cn.Handlers = {
		handlers: [],
		add: function(t, e) {
			this.handlers.push(t, e)
		},
		get: function(t) {
			for (var e = this.handlers, i = 0, n = e.length; i < n; i += 2) {
				var r = e[i],
					a = e[i + 1];
				if (r.test(t)) {
					return a
				}
			}
			return null
		}
	}, Object.assign(cn.prototype, {
		crossOrigin: void 0,
		extractUrlBase: function(t) {
			var e = t.split("/");
			return 1 === e.length ? "./" : (e.pop(), e.join("/") + "/")
		},
		initMaterials: function(t, e, i) {
			for (var n = [], r = 0; r < t.length; ++r) {
				n[r] = this.createMaterial(t[r], e, i)
			}
			return n
		},
		createMaterial: function() {
			var t = {
					NoBlending: Xr,
					NormalBlending: qr,
					AdditiveBlending: Yr,
					SubtractiveBlending: Zr,
					MultiplyBlending: Jr,
					CustomBlending: Qr
				},
				e = new X,
				i = new Ni,
				n = new on;
			return function(r, a, o) {
				function s(t, e, n, r, s) {
					var h, l = a + t,
						u = cn.Handlers.get(l);
					null !== u ? h = u.load(l) : (i.setCrossOrigin(o), h = i.load(l)), void 0 !== e && (h.repeat.fromArray(e), 1 !== e[0] && (h.wrapS = Fa), 1 !== e[1] && (h.wrapT = Fa)), void 0 !== n && h.offset.fromArray(n), void 0 !== r && ("repeat" === r[0] && (h.wrapS = Fa), "mirror" === r[0] && (h.wrapS = za), "repeat" === r[1] && (h.wrapT = Fa), "mirror" === r[1] && (h.wrapT = za)), void 0 !== s && (h.anisotropy = s);
					var d = Do.generateUUID();
					return c[d] = h, d
				}
				var c = {},
					h = {
						uuid: Do.generateUUID(),
						type: "MeshLambertMaterial"
					};
				for (var l in r) {
					var u = r[l];
					switch (l) {
						case "DbgColor":
						case "DbgIndex":
						case "opticalDensity":
						case "illumination":
							break;
						case "DbgName":
							h.name = u;
							break;
						case "blending":
							h.blending = t[u];
							break;
						case "colorAmbient":
						case "mapAmbient":
							break;
						case "colorDiffuse":
							h.color = e.fromArray(u).getHex();
							break;
						case "colorSpecular":
							h.specular = e.fromArray(u).getHex();
							break;
						case "colorEmissive":
							h.emissive = e.fromArray(u).getHex();
							break;
						case "specularCoef":
							h.shininess = u;
							break;
						case "shading":
							"basic" === u.toLowerCase() && (h.type = "MeshBasicMaterial"), "phong" === u.toLowerCase() && (h.type = "MeshPhongMaterial"), "standard" === u.toLowerCase() && (h.type = "MeshStandardMaterial");
							break;
						case "mapDiffuse":
							h.map = s(u, r.mapDiffuseRepeat, r.mapDiffuseOffset, r.mapDiffuseWrap, r.mapDiffuseAnisotropy);
							break;
						case "mapDiffuseRepeat":
						case "mapDiffuseOffset":
						case "mapDiffuseWrap":
						case "mapDiffuseAnisotropy":
							break;
						case "mapEmissive":
							h.emissiveMap = s(u, r.mapEmissiveRepeat, r.mapEmissiveOffset, r.mapEmissiveWrap, r.mapEmissiveAnisotropy);
							break;
						case "mapEmissiveRepeat":
						case "mapEmissiveOffset":
						case "mapEmissiveWrap":
						case "mapEmissiveAnisotropy":
							break;
						case "mapLight":
							h.lightMap = s(u, r.mapLightRepeat, r.mapLightOffset, r.mapLightWrap, r.mapLightAnisotropy);
							break;
						case "mapLightRepeat":
						case "mapLightOffset":
						case "mapLightWrap":
						case "mapLightAnisotropy":
							break;
						case "mapAO":
							h.aoMap = s(u, r.mapAORepeat, r.mapAOOffset, r.mapAOWrap, r.mapAOAnisotropy);
							break;
						case "mapAORepeat":
						case "mapAOOffset":
						case "mapAOWrap":
						case "mapAOAnisotropy":
							break;
						case "mapBump":
							h.bumpMap = s(u, r.mapBumpRepeat, r.mapBumpOffset, r.mapBumpWrap, r.mapBumpAnisotropy);
							break;
						case "mapBumpScale":
							h.bumpScale = u;
							break;
						case "mapBumpRepeat":
						case "mapBumpOffset":
						case "mapBumpWrap":
						case "mapBumpAnisotropy":
							break;
						case "mapNormal":
							h.normalMap = s(u, r.mapNormalRepeat, r.mapNormalOffset, r.mapNormalWrap, r.mapNormalAnisotropy);
							break;
						case "mapNormalFactor":
							h.normalScale = [u, u];
							break;
						case "mapNormalRepeat":
						case "mapNormalOffset":
						case "mapNormalWrap":
						case "mapNormalAnisotropy":
							break;
						case "mapSpecular":
							h.specularMap = s(u, r.mapSpecularRepeat, r.mapSpecularOffset, r.mapSpecularWrap, r.mapSpecularAnisotropy);
							break;
						case "mapSpecularRepeat":
						case "mapSpecularOffset":
						case "mapSpecularWrap":
						case "mapSpecularAnisotropy":
							break;
						case "mapMetalness":
							h.metalnessMap = s(u, r.mapMetalnessRepeat, r.mapMetalnessOffset, r.mapMetalnessWrap, r.mapMetalnessAnisotropy);
							break;
						case "mapMetalnessRepeat":
						case "mapMetalnessOffset":
						case "mapMetalnessWrap":
						case "mapMetalnessAnisotropy":
							break;
						case "mapRoughness":
							h.roughnessMap = s(u, r.mapRoughnessRepeat, r.mapRoughnessOffset, r.mapRoughnessWrap, r.mapRoughnessAnisotropy);
							break;
						case "mapRoughnessRepeat":
						case "mapRoughnessOffset":
						case "mapRoughnessWrap":
						case "mapRoughnessAnisotropy":
							break;
						case "mapAlpha":
							h.alphaMap = s(u, r.mapAlphaRepeat, r.mapAlphaOffset, r.mapAlphaWrap, r.mapAlphaAnisotropy);
							break;
						case "mapAlphaRepeat":
						case "mapAlphaOffset":
						case "mapAlphaWrap":
						case "mapAlphaAnisotropy":
							break;
						case "flipSided":
							h.side = zr;
							break;
						case "doubleSided":
							h.side = Gr;
							break;
						case "transparency":
							h.opacity = u;
							break;
						case "depthTest":
						case "depthWrite":
						case "colorWrite":
						case "opacity":
						case "reflectivity":
						case "transparent":
						case "visible":
						case "wireframe":
							h[l] = u;
							break;
						case "vertexColors":
							!0 === u && (h.vertexColors = Wr), "face" === u && (h.vertexColors = jr);
							break;
						default:
							console.error("THREE.Loader.createMaterial: Unsupported", l, u)
					}
				}
				return "MeshBasicMaterial" === h.type && delete h.emissive, "MeshPhongMaterial" !== h.type && delete h.specular, h.opacity < 1 && (h.transparent = !0), n.setTextures(c), n.parse(h)
			}
		}()
	}), Object.assign(hn.prototype, {
		load: function(t, e, i, n) {
			var r = this,
				a = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : cn.prototype.extractUrlBase(t),
				o = new Li(this.manager);
			o.setWithCredentials(this.withCredentials), o.load(t, function(i) {
				var n = JSON.parse(i),
					o = n.metadata;
				if (void 0 !== o) {
					var s = o.type;
					if (void 0 !== s) {
						if ("object" === s.toLowerCase()) {
							return void console.error("THREE.JSONLoader: " + t + " should be loaded with THREE.ObjectLoader instead.")
						}
						if ("scene" === s.toLowerCase()) {
							return void console.error("THREE.JSONLoader: " + t + " should be loaded with THREE.SceneLoader instead.")
						}
					}
				}
				var c = r.parse(n, a);
				e(c.geometry, c.materials)
			}, i, n)
		},
		setTexturePath: function(t) {
			this.texturePath = t
		},
		parse: function() {
			function t(t, e) {
				function n(t, e) {
					return t & 1 << e
				}
				var r, a, o, s, h, l, u, d, p, f, m, g, v, y, x, _, b, w, M, E, T, S, A, R, L, P = t.faces,
					C = t.vertices,
					I = t.normals,
					U = t.colors,
					N = t.scale,
					O = 0;
				if (void 0 !== t.uvs) {
					for (r = 0; r < t.uvs.length; r++) {
						t.uvs[r].length && O++
					}
					for (r = 0; r < O; r++) {
						e.faceVertexUvs[r] = []
					}
				}
				for (s = 0, h = C.length; s < h;) {
					(w = new c).x = C[s++] * N, w.y = C[s++] * N, w.z = C[s++] * N, e.vertices.push(w)
				}
				for (s = 0, h = P.length; s < h;) {
					if (f = P[s++], m = n(f, 0), g = n(f, 1), v = n(f, 3), y = n(f, 4), x = n(f, 5), _ = n(f, 6), b = n(f, 7), m) {
						if (E = new ut, E.a = P[s], E.b = P[s + 1], E.c = P[s + 3], T = new ut, T.a = P[s + 1], T.b = P[s + 2], T.c = P[s + 3], s += 4, g && (p = P[s++], E.materialIndex = p, T.materialIndex = p), o = e.faces.length, v) {
							for (r = 0; r < O; r++) {
								for (R = t.uvs[r], e.faceVertexUvs[r][o] = [], e.faceVertexUvs[r][o + 1] = [], a = 0; a < 4; a++) {
									L = new i(R[2 * (d = P[s++])], R[2 * d + 1]), 2 !== a && e.faceVertexUvs[r][o].push(L), 0 !== a && e.faceVertexUvs[r][o + 1].push(L)
								}
							}
						}
						if (y && (u = 3 * P[s++], E.normal.set(I[u++], I[u++], I[u]), T.normal.copy(E.normal)), x) {
							for (r = 0; r < 4; r++) {
								u = 3 * P[s++], A = new c(I[u++], I[u++], I[u]), 2 !== r && E.vertexNormals.push(A), 0 !== r && T.vertexNormals.push(A)
							}
						}
						if (_ && (S = U[l = P[s++]], E.color.setHex(S), T.color.setHex(S)), b) {
							for (r = 0; r < 4; r++) {
								S = U[l = P[s++]], 2 !== r && E.vertexColors.push(new X(S)), 0 !== r && T.vertexColors.push(new X(S))
							}
						}
						e.faces.push(E), e.faces.push(T)
					} else {
						if (M = new ut, M.a = P[s++], M.b = P[s++], M.c = P[s++], g && (p = P[s++], M.materialIndex = p), o = e.faces.length, v) {
							for (r = 0; r < O; r++) {
								for (R = t.uvs[r], e.faceVertexUvs[r][o] = [], a = 0; a < 3; a++) {
									L = new i(R[2 * (d = P[s++])], R[2 * d + 1]), e.faceVertexUvs[r][o].push(L)
								}
							}
						}
						if (y && (u = 3 * P[s++], M.normal.set(I[u++], I[u++], I[u])), x) {
							for (r = 0; r < 3; r++) {
								u = 3 * P[s++], A = new c(I[u++], I[u++], I[u]), M.vertexNormals.push(A)
							}
						}
						if (_ && (l = P[s++], M.color.setHex(U[l])), b) {
							for (r = 0; r < 3; r++) {
								l = P[s++], M.vertexColors.push(new X(U[l]))
							}
						}
						e.faces.push(M)
					}
				}
			}

			function e(t, e) {
				var i = void 0 !== t.influencesPerVertex ? t.influencesPerVertex : 2;
				if (t.skinWeights) {
					for (var n = 0, a = t.skinWeights.length; n < a; n += i) {
						var o = t.skinWeights[n],
							s = i > 1 ? t.skinWeights[n + 1] : 0,
							c = i > 2 ? t.skinWeights[n + 2] : 0,
							h = i > 3 ? t.skinWeights[n + 3] : 0;
						e.skinWeights.push(new r(o, s, c, h))
					}
				}
				if (t.skinIndices) {
					for (var n = 0, a = t.skinIndices.length; n < a; n += i) {
						var l = t.skinIndices[n],
							u = i > 1 ? t.skinIndices[n + 1] : 0,
							d = i > 2 ? t.skinIndices[n + 2] : 0,
							p = i > 3 ? t.skinIndices[n + 3] : 0;
						e.skinIndices.push(new r(l, u, d, p))
					}
				}
				e.bones = t.bones, e.bones && e.bones.length > 0 && (e.skinWeights.length !== e.skinIndices.length || e.skinIndices.length !== e.vertices.length) && console.warn("When skinning, number of vertices (" + e.vertices.length + "), skinIndices (" + e.skinIndices.length + "), and skinWeights (" + e.skinWeights.length + ") should match.")
			}

			function n(t, e) {
				var i = t.scale;
				if (void 0 !== t.morphTargets) {
					for (var n = 0, r = t.morphTargets.length; n < r; n++) {
						e.morphTargets[n] = {}, e.morphTargets[n].name = t.morphTargets[n].name, e.morphTargets[n].vertices = [];
						for (var a = e.morphTargets[n].vertices, o = t.morphTargets[n].vertices, s = 0, h = o.length; s < h; s += 3) {
							var l = new c;
							l.x = o[s] * i, l.y = o[s + 1] * i, l.z = o[s + 2] * i, a.push(l)
						}
					}
				}
				if (void 0 !== t.morphColors && t.morphColors.length > 0) {
					console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.');
					for (var u = e.faces, d = t.morphColors[0].colors, n = 0, r = u.length; n < r; n++) {
						u[n].color.fromArray(d, 3 * n)
					}
				}
			}

			function a(t, e) {
				var i = [],
					n = [];
				void 0 !== t.animation && n.push(t.animation), void 0 !== t.animations && (t.animations.length ? n = n.concat(t.animations) : n.push(t.animations));
				for (var r = 0; r < n.length; r++) {
					var a = an.parseAnimation(n[r], e.bones);
					a && i.push(a)
				}
				if (e.morphTargets) {
					var o = an.CreateClipsFromMorphTargetSequences(e.morphTargets, 10);
					i = i.concat(o)
				}
				i.length > 0 && (e.animations = i)
			}
			return function(i, r) {
				void 0 !== i.data && (i = i.data), void 0 !== i.scale ? i.scale = 1 / i.scale : i.scale = 1;
				var o = new St;
				return t(i, o), e(i, o), n(i, o), a(i, o), o.computeFaceNormals(), o.computeBoundingSphere(), void 0 === i.materials || 0 === i.materials.length ? {
					geometry: o
				} : {
					geometry: o,
					materials: cn.prototype.initMaterials(i.materials, r, this.crossOrigin)
				}
			}
		}()
	}), Object.assign(ln.prototype, {
		load: function(t, e, i, n) {
			"" === this.texturePath && (this.texturePath = t.substring(0, t.lastIndexOf("/") + 1));
			var r = this;
			new Li(r.manager).load(t, function(i) {
				var a = null;
				try {
					a = JSON.parse(i)
				} catch (e) {
					return void 0 !== n && n(e), void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message)
				}
				var o = a.metadata;
				void 0 !== o && void 0 !== o.type && "geometry" !== o.type.toLowerCase() ? r.parse(a, e) : console.error("THREE.ObjectLoader: Can't load " + t + ". Use THREE.JSONLoader instead.")
			}, i, n)
		},
		setTexturePath: function(t) {
			this.texturePath = t
		},
		setCrossOrigin: function(t) {
			this.crossOrigin = t
		},
		parse: function(t, e) {
			var i = this.parseGeometries(t.geometries),
				n = this.parseImages(t.images, function() {
					void 0 !== e && e(o)
				}),
				r = this.parseTextures(t.textures, n),
				a = this.parseMaterials(t.materials, r),
				o = this.parseObject(t.object, i, a);
			return t.animations && (o.animations = this.parseAnimations(t.animations)), void 0 !== t.images && 0 !== t.images.length || void 0 !== e && e(o), o
		},
		parseGeometries: function(t) {
			var e = {};
			if (void 0 !== t) {
				for (var i = new hn, n = new sn, r = 0, a = t.length; r < a; r++) {
					var o, s = t[r];
					switch (s.type) {
						case "PlaneGeometry":
						case "PlaneBufferGeometry":
							o = new es[s.type](s.width, s.height, s.widthSegments, s.heightSegments);
							break;
						case "BoxGeometry":
						case "BoxBufferGeometry":
						case "CubeGeometry":
							o = new es[s.type](s.width, s.height, s.depth, s.widthSegments, s.heightSegments, s.depthSegments);
							break;
						case "CircleGeometry":
						case "CircleBufferGeometry":
							o = new es[s.type](s.radius, s.segments, s.thetaStart, s.thetaLength);
							break;
						case "CylinderGeometry":
						case "CylinderBufferGeometry":
							o = new es[s.type](s.radiusTop, s.radiusBottom, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
							break;
						case "ConeGeometry":
						case "ConeBufferGeometry":
							o = new es[s.type](s.radius, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
							break;
						case "SphereGeometry":
						case "SphereBufferGeometry":
							o = new es[s.type](s.radius, s.widthSegments, s.heightSegments, s.phiStart, s.phiLength, s.thetaStart, s.thetaLength);
							break;
						case "DodecahedronGeometry":
						case "IcosahedronGeometry":
						case "OctahedronGeometry":
						case "TetrahedronGeometry":
							o = new es[s.type](s.radius, s.detail);
							break;
						case "RingGeometry":
						case "RingBufferGeometry":
							o = new es[s.type](s.innerRadius, s.outerRadius, s.thetaSegments, s.phiSegments, s.thetaStart, s.thetaLength);
							break;
						case "TorusGeometry":
						case "TorusBufferGeometry":
							o = new es[s.type](s.radius, s.tube, s.radialSegments, s.tubularSegments, s.arc);
							break;
						case "TorusKnotGeometry":
						case "TorusKnotBufferGeometry":
							o = new es[s.type](s.radius, s.tube, s.tubularSegments, s.radialSegments, s.p, s.q);
							break;
						case "LatheGeometry":
						case "LatheBufferGeometry":
							o = new es[s.type](s.points, s.segments, s.phiStart, s.phiLength);
							break;
						case "BufferGeometry":
							o = n.parse(s);
							break;
						case "Geometry":
							o = i.parse(s, this.texturePath).geometry;
							break;
						default:
							console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
							continue
					}
					o.uuid = s.uuid, void 0 !== s.name && (o.name = s.name), e[s.uuid] = o
				}
			}
			return e
		},
		parseMaterials: function(t, e) {
			var i = {};
			if (void 0 !== t) {
				var n = new on;
				n.setTextures(e);
				for (var r = 0, a = t.length; r < a; r++) {
					var o = t[r];
					if ("MultiMaterial" === o.type) {
						for (var s = [], c = 0; c < o.materials.length; c++) {
							s.push(n.parse(o.materials[c]))
						}
						i[o.uuid] = s
					} else {
						i[o.uuid] = n.parse(o)
					}
				}
			}
			return i
		},
		parseAnimations: function(t) {
			for (var e = [], i = 0; i < t.length; i++) {
				var n = an.parse(t[i]);
				e.push(n)
			}
			return e
		},
		parseImages: function(t, e) {
			var i = this,
				n = {};
			if (void 0 !== t && t.length > 0) {
				var r = new Ii(new Ri(e));
				r.setCrossOrigin(this.crossOrigin);
				for (var a = 0, o = t.length; a < o; a++) {
					var s = t[a],
						c = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(s.url) ? s.url : i.texturePath + s.url;
					n[s.uuid] = function(t) {
						return i.manager.itemStart(t), r.load(t, function() {
							i.manager.itemEnd(t)
						}, void 0, function() {
							i.manager.itemEnd(t), i.manager.itemError(t)
						})
					}(c)
				}
			}
			return n
		},
		parseTextures: function(t, e) {
			function i(t, e) {
				return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t])
			}
			var r = {};
			if (void 0 !== t) {
				for (var a = 0, o = t.length; a < o; a++) {
					var s = t[a];
					void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image);
					var c = new n(e[s.image]);
					c.needsUpdate = !0, c.uuid = s.uuid, void 0 !== s.name && (c.name = s.name), void 0 !== s.mapping && (c.mapping = i(s.mapping, cs)), void 0 !== s.offset && c.offset.fromArray(s.offset), void 0 !== s.repeat && c.repeat.fromArray(s.repeat), void 0 !== s.wrap && (c.wrapS = i(s.wrap[0], hs), c.wrapT = i(s.wrap[1], hs)), void 0 !== s.minFilter && (c.minFilter = i(s.minFilter, ls)), void 0 !== s.magFilter && (c.magFilter = i(s.magFilter, ls)), void 0 !== s.anisotropy && (c.anisotropy = s.anisotropy), void 0 !== s.flipY && (c.flipY = s.flipY), r[s.uuid] = c
				}
			}
			return r
		},
		parseObject: function() {
			var t = new h;
			return function(e, i, n) {
				function r(t) {
					return void 0 === i[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), i[t]
				}

				function a(t) {
					if (void 0 !== t) {
						if (Array.isArray(t)) {
							for (var e = [], i = 0, r = t.length; i < r; i++) {
								var a = t[i];
								void 0 === n[a] && console.warn("THREE.ObjectLoader: Undefined material", a), e.push(n[a])
							}
							return e
						}
						return void 0 === n[t] && console.warn("THREE.ObjectLoader: Undefined material", t), n[t]
					}
				}
				var o;
				switch (e.type) {
					case "Scene":
						o = new ge, void 0 !== e.background && Number.isInteger(e.background) && (o.background = new X(e.background)), void 0 !== e.fog && ("Fog" === e.fog.type ? o.fog = new me(e.fog.color, e.fog.near, e.fog.far) : "FogExp2" === e.fog.type && (o.fog = new fe(e.fog.color, e.fog.density)));
						break;
					case "PerspectiveCamera":
						o = new Nt(e.fov, e.aspect, e.near, e.far), void 0 !== e.focus && (o.focus = e.focus), void 0 !== e.zoom && (o.zoom = e.zoom), void 0 !== e.filmGauge && (o.filmGauge = e.filmGauge), void 0 !== e.filmOffset && (o.filmOffset = e.filmOffset), void 0 !== e.view && (o.view = Object.assign({}, e.view));
						break;
					case "OrthographicCamera":
						o = new Ot(e.left, e.right, e.top, e.bottom, e.near, e.far);
						break;
					case "AmbientLight":
						o = new ki(e.color, e.intensity);
						break;
					case "DirectionalLight":
						o = new Vi(e.color, e.intensity);
						break;
					case "PointLight":
						o = new Gi(e.color, e.intensity, e.distance, e.decay);
						break;
					case "RectAreaLight":
						o = new ji(e.color, e.intensity, e.width, e.height);
						break;
					case "SpotLight":
						o = new zi(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay);
						break;
					case "HemisphereLight":
						o = new Di(e.color, e.groundColor, e.intensity);
						break;
					case "SkinnedMesh":
						console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
					case "Mesh":
						var s = r(e.geometry),
							c = a(e.material);
						o = s.bones && s.bones.length > 0 ? new Me(s, c) : new Rt(s, c);
						break;
					case "LOD":
						o = new _e;
						break;
					case "Line":
						o = new Te(r(e.geometry), a(e.material), e.mode);
						break;
					case "LineLoop":
						o = new Ae(r(e.geometry), a(e.material));
						break;
					case "LineSegments":
						o = new Se(r(e.geometry), a(e.material));
						break;
					case "PointCloud":
					case "Points":
						o = new Le(r(e.geometry), a(e.material));
						break;
					case "Sprite":
						o = new xe(a(e.material));
						break;
					case "Group":
						o = new Pe;
						break;
					default:
						o = new ct
				}
				if (o.uuid = e.uuid, void 0 !== e.name && (o.name = e.name), void 0 !== e.matrix ? (t.fromArray(e.matrix), t.decompose(o.position, o.quaternion, o.scale)) : (void 0 !== e.position && o.position.fromArray(e.position), void 0 !== e.rotation && o.rotation.fromArray(e.rotation), void 0 !== e.quaternion && o.quaternion.fromArray(e.quaternion), void 0 !== e.scale && o.scale.fromArray(e.scale)), void 0 !== e.castShadow && (o.castShadow = e.castShadow), void 0 !== e.receiveShadow && (o.receiveShadow = e.receiveShadow), e.shadow && (void 0 !== e.shadow.bias && (o.shadow.bias = e.shadow.bias), void 0 !== e.shadow.radius && (o.shadow.radius = e.shadow.radius), void 0 !== e.shadow.mapSize && o.shadow.mapSize.fromArray(e.shadow.mapSize), void 0 !== e.shadow.camera && (o.shadow.camera = this.parseObject(e.shadow.camera))), void 0 !== e.visible && (o.visible = e.visible), void 0 !== e.userData && (o.userData = e.userData), void 0 !== e.children) {
					for (var h in e.children) {
						o.add(this.parseObject(e.children[h], i, n))
					}
				}
				if ("LOD" === e.type) {
					for (var l = e.levels, u = 0; u < l.length; u++) {
						var d = l[u];
						void 0 !== (h = o.getObjectByProperty("uuid", d.object)) && o.addLevel(h, d.distance)
					}
				}
				return o
			}
		}()
	});
	var cs = {
			UVMapping: 300,
			CubeReflectionMapping: Pa,
			CubeRefractionMapping: Ca,
			EquirectangularReflectionMapping: Ia,
			EquirectangularRefractionMapping: Ua,
			SphericalReflectionMapping: Na,
			CubeUVReflectionMapping: Oa,
			CubeUVRefractionMapping: Da
		},
		hs = {
			RepeatWrapping: Fa,
			ClampToEdgeWrapping: Ba,
			MirroredRepeatWrapping: za
		},
		ls = {
			NearestFilter: Ga,
			NearestMipMapNearestFilter: Ha,
			NearestMipMapLinearFilter: Va,
			LinearFilter: ka,
			LinearMipMapNearestFilter: ja,
			LinearMipMapLinearFilter: Wa
		};
	Object.assign(bn.prototype, {
		getPoint: function() {
			return console.warn("THREE.Curve: .getPoint() not implemented."), null
		},
		getPointAt: function(t) {
			var e = this.getUtoTmapping(t);
			return this.getPoint(e)
		},
		getPoints: function(t) {
			void 0 === t && (t = 5);
			for (var e = [], i = 0; i <= t; i++) {
				e.push(this.getPoint(i / t))
			}
			return e
		},
		getSpacedPoints: function(t) {
			void 0 === t && (t = 5);
			for (var e = [], i = 0; i <= t; i++) {
				e.push(this.getPointAt(i / t))
			}
			return e
		},
		getLength: function() {
			var t = this.getLengths();
			return t[t.length - 1]
		},
		getLengths: function(t) {
			if (void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) {
				return this.cacheArcLengths
			}
			this.needsUpdate = !1;
			var e, i, n = [],
				r = this.getPoint(0),
				a = 0;
			for (n.push(0), i = 1; i <= t; i++) {
				a += (e = this.getPoint(i / t)).distanceTo(r), n.push(a), r = e
			}
			return this.cacheArcLengths = n, n
		},
		updateArcLengths: function() {
			this.needsUpdate = !0, this.getLengths()
		},
		getUtoTmapping: function(t, e) {
			var i, n = this.getLengths(),
				r = 0,
				a = n.length;
			i = e || t * n[a - 1];
			for (var o, s = 0, c = a - 1; s <= c;) {
				if (r = Math.floor(s + (c - s) / 2), (o = n[r] - i) < 0) {
					s = r + 1
				} else {
					if (!(o > 0)) {
						c = r;
						break
					}
					c = r - 1
				}
			}
			if (r = c, n[r] === i) {
				return r / (a - 1)
			}
			var h = n[r];
			return (r + (i - h) / (n[r + 1] - h)) / (a - 1)
		},
		getTangent: function(t) {
			var e = t - 0.0001,
				i = t + 0.0001;
			e < 0 && (e = 0), i > 1 && (i = 1);
			var n = this.getPoint(e);
			return this.getPoint(i).clone().sub(n).normalize()
		},
		getTangentAt: function(t) {
			var e = this.getUtoTmapping(t);
			return this.getTangent(e)
		},
		computeFrenetFrames: function(t, e) {
			var i, n, r, a = new c,
				o = [],
				s = [],
				l = [],
				u = new c,
				d = new h;
			for (i = 0; i <= t; i++) {
				n = i / t, o[i] = this.getTangentAt(n), o[i].normalize()
			}
			s[0] = new c, l[0] = new c;
			var p = Number.MAX_VALUE,
				f = Math.abs(o[0].x),
				m = Math.abs(o[0].y),
				g = Math.abs(o[0].z);
			for (f <= p && (p = f, a.set(1, 0, 0)), m <= p && (p = m, a.set(0, 1, 0)), g <= p && a.set(0, 0, 1), u.crossVectors(o[0], a).normalize(), s[0].crossVectors(o[0], u), l[0].crossVectors(o[0], s[0]), i = 1; i <= t; i++) {
				s[i] = s[i - 1].clone(), l[i] = l[i - 1].clone(), u.crossVectors(o[i - 1], o[i]), u.length() > Number.EPSILON && (u.normalize(), r = Math.acos(Do.clamp(o[i - 1].dot(o[i]), -1, 1)), s[i].applyMatrix4(d.makeRotationAxis(u, r))), l[i].crossVectors(o[i], s[i])
			}
			if (!0 === e) {
				for (r = Math.acos(Do.clamp(s[0].dot(s[t]), -1, 1)), r /= t, o[0].dot(u.crossVectors(s[0], s[t])) > 0 && (r = -r), i = 1; i <= t; i++) {
					s[i].applyMatrix4(d.makeRotationAxis(o[i], r * i)), l[i].crossVectors(o[i], s[i])
				}
			}
			return {
				tangents: o,
				normals: s,
				binormals: l
			}
		}
	}), (wn.prototype = Object.create(bn.prototype)).constructor = wn, wn.prototype.isLineCurve = !0, wn.prototype.getPoint = function(t) {
		if (1 === t) {
			return this.v2.clone()
		}
		var e = this.v2.clone().sub(this.v1);
		return e.multiplyScalar(t).add(this.v1), e
	}, wn.prototype.getPointAt = function(t) {
		return this.getPoint(t)
	}, wn.prototype.getTangent = function(t) {
		return this.v2.clone().sub(this.v1).normalize()
	}, Mn.prototype = Object.assign(Object.create(bn.prototype), {
		constructor: Mn,
		add: function(t) {
			this.curves.push(t)
		},
		closePath: function() {
			var t = this.curves[0].getPoint(0),
				e = this.curves[this.curves.length - 1].getPoint(1);
			t.equals(e) || this.curves.push(new wn(e, t))
		},
		getPoint: function(t) {
			for (var e = t * this.getLength(), i = this.getCurveLengths(), n = 0; n < i.length;) {
				if (i[n] >= e) {
					var r = i[n] - e,
						a = this.curves[n],
						o = a.getLength(),
						s = 0 === o ? 0 : 1 - r / o;
					return a.getPointAt(s)
				}
				n++
			}
			return null
		},
		getLength: function() {
			var t = this.getCurveLengths();
			return t[t.length - 1]
		},
		updateArcLengths: function() {
			this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
		},
		getCurveLengths: function() {
			if (this.cacheLengths && this.cacheLengths.length === this.curves.length) {
				return this.cacheLengths
			}
			for (var t = [], e = 0, i = 0, n = this.curves.length; i < n; i++) {
				e += this.curves[i].getLength(), t.push(e)
			}
			return this.cacheLengths = t, t
		},
		getSpacedPoints: function(t) {
			void 0 === t && (t = 40);
			for (var e = [], i = 0; i <= t; i++) {
				e.push(this.getPoint(i / t))
			}
			return this.autoClose && e.push(e[0]), e
		},
		getPoints: function(t) {
			t = t || 12;
			for (var e, i = [], n = 0, r = this.curves; n < r.length; n++) {
				for (var a = r[n], o = a && a.isEllipseCurve ? 2 * t : a && a.isLineCurve ? 1 : a && a.isSplineCurve ? t * a.points.length : t, s = a.getPoints(o), c = 0; c < s.length; c++) {
					var h = s[c];
					e && e.equals(h) || (i.push(h), e = h)
				}
			}
			return this.autoClose && i.length > 1 && !i[i.length - 1].equals(i[0]) && i.push(i[0]), i
		},
		createPointsGeometry: function(t) {
			var e = this.getPoints(t);
			return this.createGeometry(e)
		},
		createSpacedPointsGeometry: function(t) {
			var e = this.getSpacedPoints(t);
			return this.createGeometry(e)
		},
		createGeometry: function(t) {
			for (var e = new St, i = 0, n = t.length; i < n; i++) {
				var r = t[i];
				e.vertices.push(new c(r.x, r.y, r.z || 0))
			}
			return e
		}
	}), En.prototype = Object.create(bn.prototype), En.prototype.constructor = En, En.prototype.isEllipseCurve = !0, En.prototype.getPoint = function(t) {
		for (var e = 2 * Math.PI, n = this.aEndAngle - this.aStartAngle, r = Math.abs(n) < Number.EPSILON; n < 0;) {
			n += e
		}
		for (; n > e;) {
			n -= e
		}
		n < Number.EPSILON && (n = r ? 0 : e), !0 !== this.aClockwise || r || (n === e ? n = -e : n -= e);
		var a = this.aStartAngle + t * n,
			o = this.aX + this.xRadius * Math.cos(a),
			s = this.aY + this.yRadius * Math.sin(a);
		if (0 !== this.aRotation) {
			var c = Math.cos(this.aRotation),
				h = Math.sin(this.aRotation),
				l = o - this.aX,
				u = s - this.aY;
			o = l * c - u * h + this.aX, s = l * h + u * c + this.aY
		}
		return new i(o, s)
	}, (Tn.prototype = Object.create(bn.prototype)).constructor = Tn, Tn.prototype.isSplineCurve = !0, Tn.prototype.getPoint = function(t) {
		var e = this.points,
			n = (e.length - 1) * t,
			r = Math.floor(n),
			a = n - r,
			o = e[0 === r ? r : r - 1],
			s = e[r],
			c = e[r > e.length - 2 ? e.length - 1 : r + 1],
			h = e[r > e.length - 3 ? e.length - 1 : r + 2];
		return new i(un(a, o.x, s.x, c.x, h.x), un(a, o.y, s.y, c.y, h.y))
	}, (Sn.prototype = Object.create(bn.prototype)).constructor = Sn, Sn.prototype.getPoint = function(t) {
		var e = this.v0,
			n = this.v1,
			r = this.v2,
			a = this.v3;
		return new i(_n(t, e.x, n.x, r.x, a.x), _n(t, e.y, n.y, r.y, a.y))
	}, (An.prototype = Object.create(bn.prototype)).constructor = An, An.prototype.getPoint = function(t) {
		var e = this.v0,
			n = this.v1,
			r = this.v2;
		return new i(mn(t, e.x, n.x, r.x), mn(t, e.y, n.y, r.y))
	};
	var us = Object.assign(Object.create(Mn.prototype), {
		fromPoints: function(t) {
			this.moveTo(t[0].x, t[0].y);
			for (var e = 1, i = t.length; e < i; e++) {
				this.lineTo(t[e].x, t[e].y)
			}
		},
		moveTo: function(t, e) {
			this.currentPoint.set(t, e)
		},
		lineTo: function(t, e) {
			var n = new wn(this.currentPoint.clone(), new i(t, e));
			this.curves.push(n), this.currentPoint.set(t, e)
		},
		quadraticCurveTo: function(t, e, n, r) {
			var a = new An(this.currentPoint.clone(), new i(t, e), new i(n, r));
			this.curves.push(a), this.currentPoint.set(n, r)
		},
		bezierCurveTo: function(t, e, n, r, a, o) {
			var s = new Sn(this.currentPoint.clone(), new i(t, e), new i(n, r), new i(a, o));
			this.curves.push(s), this.currentPoint.set(a, o)
		},
		splineThru: function(t) {
			var e = new Tn([this.currentPoint.clone()].concat(t));
			this.curves.push(e), this.currentPoint.copy(t[t.length - 1])
		},
		arc: function(t, e, i, n, r, a) {
			var o = this.currentPoint.x,
				s = this.currentPoint.y;
			this.absarc(t + o, e + s, i, n, r, a)
		},
		absarc: function(t, e, i, n, r, a) {
			this.absellipse(t, e, i, i, n, r, a)
		},
		ellipse: function(t, e, i, n, r, a, o, s) {
			var c = this.currentPoint.x,
				h = this.currentPoint.y;
			this.absellipse(t + c, e + h, i, n, r, a, o, s)
		},
		absellipse: function(t, e, i, n, r, a, o, s) {
			var c = new En(t, e, i, n, r, a, o, s);
			if (this.curves.length > 0) {
				var h = c.getPoint(0);
				h.equals(this.currentPoint) || this.lineTo(h.x, h.y)
			}
			this.curves.push(c);
			var l = c.getPoint(1);
			this.currentPoint.copy(l)
		}
	});
	Rn.prototype = us, us.constructor = Rn, Ln.prototype = Object.assign(Object.create(us), {
		constructor: Ln,
		getPointsHoles: function(t) {
			for (var e = [], i = 0, n = this.holes.length; i < n; i++) {
				e[i] = this.holes[i].getPoints(t)
			}
			return e
		},
		extractAllPoints: function(t) {
			return {
				shape: this.getPoints(t),
				holes: this.getPointsHoles(t)
			}
		},
		extractPoints: function(t) {
			return this.extractAllPoints(t)
		}
	}), Object.assign(Pn.prototype, {
		moveTo: function(t, e) {
			this.currentPath = new Rn, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e)
		},
		lineTo: function(t, e) {
			this.currentPath.lineTo(t, e)
		},
		quadraticCurveTo: function(t, e, i, n) {
			this.currentPath.quadraticCurveTo(t, e, i, n)
		},
		bezierCurveTo: function(t, e, i, n, r, a) {
			this.currentPath.bezierCurveTo(t, e, i, n, r, a)
		},
		splineThru: function(t) {
			this.currentPath.splineThru(t)
		},
		toShapes: function(t, e) {
			function i(t) {
				for (var e = [], i = 0, n = t.length; i < n; i++) {
					var r = t[i],
						a = new Ln;
					a.curves = r.curves, e.push(a)
				}
				return e
			}
			var n = ts.isClockWise,
				r = this.subPaths;
			if (0 === r.length) {
				return []
			}
			if (!0 === e) {
				return i(r)
			}
			var a, o, s, c = [];
			if (1 === r.length) {
				return o = r[0], s = new Ln, s.curves = o.curves, c.push(s), c
			}
			var h = !n(r[0].getPoints());
			h = t ? !h : h;
			var l, u = [],
				d = [],
				p = [],
				f = 0;
			d[f] = void 0, p[f] = [];
			for (var m = 0, g = r.length; m < g; m++) {
				a = n(l = (o = r[m]).getPoints()), (a = t ? !a : a) ? (!h && d[f] && f++, d[f] = {
					s: new Ln,
					p: l
				}, d[f].s.curves = o.curves, h && f++, p[f] = []) : p[f].push({
					h: o,
					p: l[0]
				})
			}
			if (!d[0]) {
				return i(r)
			}
			if (d.length > 1) {
				for (var v = !1, y = [], x = 0, _ = d.length; x < _; x++) {
					u[x] = []
				}
				for (var x = 0, _ = d.length; x < _; x++) {
					for (var b = p[x], w = 0; w < b.length; w++) {
						for (var M = b[w], E = !0, T = 0; T < d.length; T++) {
							(function(t, e) {
								for (var i = e.length, n = !1, r = i - 1, a = 0; a < i; r = a++) {
									var o = e[r],
										s = e[a],
										c = s.x - o.x,
										h = s.y - o.y;
									if (Math.abs(h) > Number.EPSILON) {
										if (h < 0 && (o = e[a], c = -c, s = e[r], h = -h), t.y < o.y || t.y > s.y) {
											continue
										}
										if (t.y === o.y) {
											if (t.x === o.x) {
												return !0
											}
										} else {
											var l = h * (t.x - o.x) - c * (t.y - o.y);
											if (0 === l) {
												return !0
											}
											if (l < 0) {
												continue
											}
											n = !n
										}
									} else {
										if (t.y !== o.y) {
											continue
										}
										if (s.x <= t.x && t.x <= o.x || o.x <= t.x && t.x <= s.x) {
											return !0
										}
									}
								}
								return n
							})(M.p, d[T].p) && (x !== T && y.push({
								froms: x,
								tos: T,
								hole: w
							}), E ? (E = !1, u[T].push(M)) : v = !0)
						}
						E && u[x].push(M)
					}
				}
				y.length > 0 && (v || (p = u))
			}
			for (var S, m = 0, A = d.length; m < A; m++) {
				s = d[m].s, c.push(s);
				for (var R = 0, L = (S = p[m]).length; R < L; R++) {
					s.holes.push(S[R].h)
				}
			}
			return c
		}
	}), Object.assign(Cn.prototype, {
		isFont: !0,
		generateShapes: function(t, e, i) {
			function n(t, e, n, a) {
				var o = r.glyphs[t] || r.glyphs["?"];
				if (o) {
					var s, c, h, l, u, d, p, f, m, g, v, y = new Pn,
						x = [];
					if (o.o) {
						for (var _ = o._cachedOutline || (o._cachedOutline = o.o.split(" ")), b = 0, w = _.length; b < w;) {
							switch (_[b++]) {
								case "m":
									s = _[b++] * e + n, c = _[b++] * e + a, y.moveTo(s, c);
									break;
								case "l":
									s = _[b++] * e + n, c = _[b++] * e + a, y.lineTo(s, c);
									break;
								case "q":
									if (h = _[b++] * e + n, l = _[b++] * e + a, p = _[b++] * e + n, f = _[b++] * e + a, y.quadraticCurveTo(p, f, h, l), v = x[x.length - 1]) {
										for (u = v.x, d = v.y, M = 1; M <= i; M++) {
											mn(E = M / i, u, p, h), mn(E, d, f, l)
										}
									}
									break;
								case "b":
									if (h = _[b++] * e + n, l = _[b++] * e + a, p = _[b++] * e + n, f = _[b++] * e + a, m = _[b++] * e + n, g = _[b++] * e + a, y.bezierCurveTo(p, f, m, g, h, l), v = x[x.length - 1]) {
										u = v.x, d = v.y;
										for (var M = 1; M <= i; M++) {
											var E = M / i;
											_n(E, u, p, m, h), _n(E, d, f, g, l)
										}
									}
							}
						}
					}
					return {
						offsetX: o.ha * e,
						path: y
					}
				}
			}
			void 0 === e && (e = 100), void 0 === i && (i = 4);
			for (var r = this.data, a = function(t) {
					for (var i = String(t).split(""), a = e / r.resolution, o = (r.boundingBox.yMax - r.boundingBox.yMin + r.underlineThickness) * a, s = 0, c = 0, h = [], l = 0; l < i.length; l++) {
						var u = i[l];
						if ("\n" === u) {
							s = 0, c -= o
						} else {
							var d = n(u, a, s, c);
							s += d.offsetX, h.push(d.path)
						}
					}
					return h
				}(t), o = [], s = 0, c = a.length; s < c; s++) {
				Array.prototype.push.apply(o, a[s].toShapes())
			}
			return o
		}
	}), Object.assign(In.prototype, {
		load: function(t, e, i, n) {
			var r = this;
			new Li(this.manager).load(t, function(t) {
				var i;
				try {
					i = JSON.parse(t)
				} catch (e) {
					console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), i = JSON.parse(t.substring(65, t.length - 2))
				}
				var n = r.parse(i);
				e && e(n)
			}, i, n)
		},
		parse: function(t) {
			return new Cn(t)
		}
	});
	var ds, ps = {
		getContext: function() {
			return void 0 === ds && (ds = new(window.AudioContext || window.webkitAudioContext)), ds
		},
		setContext: function(t) {
			ds = t
		}
	};
	Object.assign(Un.prototype, {
		load: function(t, e, i, n) {
			var r = new Li(this.manager);
			r.setResponseType("arraybuffer"), r.load(t, function(t) {
				ps.getContext().decodeAudioData(t, function(t) {
					e(t)
				})
			}, i, n)
		}
	}), Object.assign(Nn.prototype, {
		update: function() {
			var t, e, i, n, r, a, o, s, c = new h,
				l = new h;
			return function(h) {
				if (t !== this || e !== h.focus || i !== h.fov || n !== h.aspect * this.aspect || r !== h.near || a !== h.far || o !== h.zoom || s !== this.eyeSep) {
					t = this, e = h.focus, i = h.fov, n = h.aspect * this.aspect, r = h.near, a = h.far, o = h.zoom;
					var u, d, p = h.projectionMatrix.clone(),
						f = (s = this.eyeSep / 2) * r / e,
						m = r * Math.tan(Do.DEG2RAD * i * 0.5) / o;
					l.elements[12] = -s, c.elements[12] = s, u = -m * n + f, d = m * n + f, p.elements[0] = 2 * r / (d - u), p.elements[8] = (d + u) / (d - u), this.cameraL.projectionMatrix.copy(p), u = -m * n - f, d = m * n - f, p.elements[0] = 2 * r / (d - u), p.elements[8] = (d + u) / (d - u), this.cameraR.projectionMatrix.copy(p)
				}
				this.cameraL.matrixWorld.copy(h.matrixWorld).multiply(l), this.cameraR.matrixWorld.copy(h.matrixWorld).multiply(c)
			}
		}()
	}), (On.prototype = Object.create(ct.prototype)).constructor = On, Dn.prototype = Object.assign(Object.create(Nt.prototype), {
		constructor: Dn,
		isArrayCamera: !0
	}), Fn.prototype = Object.assign(Object.create(ct.prototype), {
		constructor: Fn,
		getInput: function() {
			return this.gain
		},
		removeFilter: function() {
			null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null)
		},
		getFilter: function() {
			return this.filter
		},
		setFilter: function(t) {
			null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination)
		},
		getMasterVolume: function() {
			return this.gain.gain.value
		},
		setMasterVolume: function(t) {
			this.gain.gain.value = t
		},
		updateMatrixWorld: function() {
			var t = new c,
				e = new s,
				i = new c,
				n = new c;
			return function(r) {
				ct.prototype.updateMatrixWorld.call(this, r);
				var a = this.context.listener,
					o = this.up;
				this.matrixWorld.decompose(t, e, i), n.set(0, 0, -1).applyQuaternion(e), a.positionX ? (a.positionX.setValueAtTime(t.x, this.context.currentTime), a.positionY.setValueAtTime(t.y, this.context.currentTime), a.positionZ.setValueAtTime(t.z, this.context.currentTime), a.forwardX.setValueAtTime(n.x, this.context.currentTime), a.forwardY.setValueAtTime(n.y, this.context.currentTime), a.forwardZ.setValueAtTime(n.z, this.context.currentTime), a.upX.setValueAtTime(o.x, this.context.currentTime), a.upY.setValueAtTime(o.y, this.context.currentTime), a.upZ.setValueAtTime(o.z, this.context.currentTime)) : (a.setPosition(t.x, t.y, t.z), a.setOrientation(n.x, n.y, n.z, o.x, o.y, o.z))
			}
		}()
	}), Bn.prototype = Object.assign(Object.create(ct.prototype), {
		constructor: Bn,
		getOutput: function() {
			return this.gain
		},
		setNodeSource: function(t) {
			return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this
		},
		setBuffer: function(t) {
			return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this
		},
		play: function() {
			if (!0 !== this.isPlaying) {
				if (!1 !== this.hasPlaybackControl) {
					var t = this.context.createBufferSource();
					return t.buffer = this.buffer, t.loop = this.loop, t.onended = this.onEnded.bind(this), t.playbackRate.setValueAtTime(this.playbackRate, this.startTime), t.start(0, this.startTime), this.isPlaying = !0, this.source = t, this.connect()
				}
				console.warn("THREE.Audio: this Audio has no playback control.")
			} else {
				console.warn("THREE.Audio: Audio is already playing.")
			}
		},
		pause: function() {
			if (!1 !== this.hasPlaybackControl) {
				return this.source.stop(), this.startTime = this.context.currentTime, this.isPlaying = !1, this
			}
			console.warn("THREE.Audio: this Audio has no playback control.")
		},
		stop: function() {
			if (!1 !== this.hasPlaybackControl) {
				return this.source.stop(), this.startTime = 0, this.isPlaying = !1, this
			}
			console.warn("THREE.Audio: this Audio has no playback control.")
		},
		connect: function() {
			if (this.filters.length > 0) {
				this.source.connect(this.filters[0]);
				for (var t = 1, e = this.filters.length; t < e; t++) {
					this.filters[t - 1].connect(this.filters[t])
				}
				this.filters[this.filters.length - 1].connect(this.getOutput())
			} else {
				this.source.connect(this.getOutput())
			}
			return this
		},
		disconnect: function() {
			if (this.filters.length > 0) {
				this.source.disconnect(this.filters[0]);
				for (var t = 1, e = this.filters.length; t < e; t++) {
					this.filters[t - 1].disconnect(this.filters[t])
				}
				this.filters[this.filters.length - 1].disconnect(this.getOutput())
			} else {
				this.source.disconnect(this.getOutput())
			}
			return this
		},
		getFilters: function() {
			return this.filters
		},
		setFilters: function(t) {
			return t || (t = []), !0 === this.isPlaying ? (this.disconnect(), this.filters = t, this.connect()) : this.filters = t, this
		},
		getFilter: function() {
			return this.getFilters()[0]
		},
		setFilter: function(t) {
			return this.setFilters(t ? [t] : [])
		},
		setPlaybackRate: function(t) {
			if (!1 !== this.hasPlaybackControl) {
				return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setValueAtTime(this.playbackRate, this.context.currentTime), this
			}
			console.warn("THREE.Audio: this Audio has no playback control.")
		},
		getPlaybackRate: function() {
			return this.playbackRate
		},
		onEnded: function() {
			this.isPlaying = !1
		},
		getLoop: function() {
			return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
		},
		setLoop: function(t) {
			if (!1 !== this.hasPlaybackControl) {
				return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this
			}
			console.warn("THREE.Audio: this Audio has no playback control.")
		},
		getVolume: function() {
			return this.gain.gain.value
		},
		setVolume: function(t) {
			return this.gain.gain.value = t, this
		}
	}), zn.prototype = Object.assign(Object.create(Bn.prototype), {
		constructor: zn,
		getOutput: function() {
			return this.panner
		},
		getRefDistance: function() {
			return this.panner.refDistance
		},
		setRefDistance: function(t) {
			this.panner.refDistance = t
		},
		getRolloffFactor: function() {
			return this.panner.rolloffFactor
		},
		setRolloffFactor: function(t) {
			this.panner.rolloffFactor = t
		},
		getDistanceModel: function() {
			return this.panner.distanceModel
		},
		setDistanceModel: function(t) {
			this.panner.distanceModel = t
		},
		getMaxDistance: function() {
			return this.panner.maxDistance
		},
		setMaxDistance: function(t) {
			this.panner.maxDistance = t
		},
		updateMatrixWorld: function() {
			var t = new c;
			return function(e) {
				ct.prototype.updateMatrixWorld.call(this, e), t.setFromMatrixPosition(this.matrixWorld), this.panner.setPosition(t.x, t.y, t.z)
			}
		}()
	}), Object.assign(Gn.prototype, {
		getFrequencyData: function() {
			return this.analyser.getByteFrequencyData(this.data), this.data
		},
		getAverageFrequency: function() {
			for (var t = 0, e = this.getFrequencyData(), i = 0; i < e.length; i++) {
				t += e[i]
			}
			return t / e.length
		}
	}), Object.assign(Hn.prototype, {
		accumulate: function(t, e) {
			var i = this.buffer,
				n = this.valueSize,
				r = t * n + n,
				a = this.cumulativeWeight;
			if (0 === a) {
				for (var o = 0; o !== n; ++o) {
					i[r + o] = i[o]
				}
				a = e
			} else {
				var s = e / (a += e);
				this._mixBufferRegion(i, r, 0, s, n)
			}
			this.cumulativeWeight = a
		},
		apply: function(t) {
			var e = this.valueSize,
				i = this.buffer,
				n = t * e + e,
				r = this.cumulativeWeight,
				a = this.binding;
			if (this.cumulativeWeight = 0, r < 1) {
				var o = 3 * e;
				this._mixBufferRegion(i, n, o, 1 - r, e)
			}
			for (var s = e, c = e + e; s !== c; ++s) {
				if (i[s] !== i[s + e]) {
					a.setValue(i, n);
					break
				}
			}
		},
		saveOriginalState: function() {
			var t = this.binding,
				e = this.buffer,
				i = this.valueSize,
				n = 3 * i;
			t.getValue(e, n);
			for (var r = i, a = n; r !== a; ++r) {
				e[r] = e[n + r % i]
			}
			this.cumulativeWeight = 0
		},
		restoreOriginalState: function() {
			var t = 3 * this.valueSize;
			this.binding.setValue(this.buffer, t)
		},
		_select: function(t, e, i, n, r) {
			if (n >= 0.5) {
				for (var a = 0; a !== r; ++a) {
					t[e + a] = t[i + a]
				}
			}
		},
		_slerp: function(t, e, i, n) {
			s.slerpFlat(t, e, t, e, t, i, n)
		},
		_lerp: function(t, e, i, n, r) {
			for (var a = 1 - n, o = 0; o !== r; ++o) {
				var s = e + o;
				t[s] = t[s] * a + t[i + o] * n
			}
		}
	}), Object.assign(Vn.prototype, {
		getValue: function(t, e) {
			this.bind();
			var i = this._targetGroup.nCachedObjects_,
				n = this._bindings[i];
			void 0 !== n && n.getValue(t, e)
		},
		setValue: function(t, e) {
			for (var i = this._bindings, n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n) {
				i[n].setValue(t, e)
			}
		},
		bind: function() {
			for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) {
				t[e].bind()
			}
		},
		unbind: function() {
			for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) {
				t[e].unbind()
			}
		}
	}), Object.assign(kn, {
		Composite: Vn,
		create: function(t, e, i) {
			return t && t.isAnimationObjectGroup ? new kn.Composite(t, e, i) : new kn(t, e, i)
		},
		parseTrackName: function() {
			var t = /((?:[\w-]+[\/:])*)/,
				e = /([\w-\.]+)?/,
				i = /(?:\.([\w-]+)(?:\[(.+)\])?)?/,
				n = /\.([\w-]+)(?:\[(.+)\])?/,
				r = new RegExp("^" + t.source + e.source + i.source + n.source + "$"),
				a = ["material", "materials", "bones"];
			return function(t) {
				var e = r.exec(t);
				if (!e) {
					throw new Error("PropertyBinding: Cannot parse trackName: " + t)
				}
				var i = {
						nodeName: e[2],
						objectName: e[3],
						objectIndex: e[4],
						propertyName: e[5],
						propertyIndex: e[6]
					},
					n = i.nodeName && i.nodeName.lastIndexOf(".");
				if (void 0 !== n && -1 !== n) {
					var o = i.nodeName.substring(n + 1); - 1 !== a.indexOf(o) && (i.nodeName = i.nodeName.substring(0, n), i.objectName = o)
				}
				if (null === i.propertyName || 0 === i.propertyName.length) {
					throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t)
				}
				return i
			}
		}(),
		findNode: function(t, e) {
			if (!e || "" === e || "root" === e || "." === e || -1 === e || e === t.name || e === t.uuid) {
				return t
			}
			if (t.skeleton) {
				var i = function(t) {
					for (var i = 0; i < t.bones.length; i++) {
						var n = t.bones[i];
						if (n.name === e) {
							return n
						}
					}
					return null
				}(t.skeleton);
				if (i) {
					return i
				}
			}
			if (t.children) {
				var n = function(t) {
						for (var i = 0; i < t.length; i++) {
							var r = t[i];
							if (r.name === e || r.uuid === e) {
								return r
							}
							var a = n(r.children);
							if (a) {
								return a
							}
						}
						return null
					},
					r = n(t.children);
				if (r) {
					return r
				}
			}
			return null
		}
	}), Object.assign(kn.prototype, {
		_getValue_unavailable: function() {},
		_setValue_unavailable: function() {},
		BindingType: {
			Direct: 0,
			EntireArray: 1,
			ArrayElement: 2,
			HasFromToArray: 3
		},
		Versioning: {
			None: 0,
			NeedsUpdate: 1,
			MatrixWorldNeedsUpdate: 2
		},
		GetterByBindingType: [function(t, e) {
			t[e] = this.node[this.propertyName]
		}, function(t, e) {
			for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) {
				t[e++] = i[n]
			}
		}, function(t, e) {
			t[e] = this.resolvedProperty[this.propertyIndex]
		}, function(t, e) {
			this.resolvedProperty.toArray(t, e)
		}],
		SetterByBindingTypeAndVersioning: [
			[function(t, e) {
				this.node[this.propertyName] = t[e]
			}, function(t, e) {
				this.node[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
			}, function(t, e) {
				this.node[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
			}],
			[function(t, e) {
				for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) {
					i[n] = t[e++]
				}
			}, function(t, e) {
				for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) {
					i[n] = t[e++]
				}
				this.targetObject.needsUpdate = !0
			}, function(t, e) {
				for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) {
					i[n] = t[e++]
				}
				this.targetObject.matrixWorldNeedsUpdate = !0
			}],
			[function(t, e) {
				this.resolvedProperty[this.propertyIndex] = t[e]
			}, function(t, e) {
				this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
			}, function(t, e) {
				this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
			}],
			[function(t, e) {
				this.resolvedProperty.fromArray(t, e)
			}, function(t, e) {
				this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
			}, function(t, e) {
				this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
			}]
		],
		getValue: function(t, e) {
			this.bind(), this.getValue(t, e)
		},
		setValue: function(t, e) {
			this.bind(), this.setValue(t, e)
		},
		bind: function() {
			var t = this.node,
				e = this.parsedPath,
				i = e.objectName,
				n = e.propertyName,
				r = e.propertyIndex;
			if (t || (t = kn.findNode(this.rootNode, e.nodeName) || this.rootNode, this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, t) {
				if (i) {
					var a = e.objectIndex;
					switch (i) {
						case "materials":
							if (!t.material) {
								return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this)
							}
							if (!t.material.materials) {
								return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this)
							}
							t = t.material.materials;
							break;
						case "bones":
							if (!t.skeleton) {
								return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this)
							}
							for (t = t.skeleton.bones, h = 0; h < t.length; h++) {
								if (t[h].name === a) {
									a = h;
									break
								}
							}
							break;
						default:
							if (void 0 === t[i]) {
								return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this)
							}
							t = t[i]
					}
					if (void 0 !== a) {
						if (void 0 === t[a]) {
							return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t)
						}
						t = t[a]
					}
				}
				var o = t[n];
				if (void 0 !== o) {
					var s = this.Versioning.None;
					void 0 !== t.needsUpdate ? (s = this.Versioning.NeedsUpdate, this.targetObject = t) : void 0 !== t.matrixWorldNeedsUpdate && (s = this.Versioning.MatrixWorldNeedsUpdate, this.targetObject = t);
					var c = this.BindingType.Direct;
					if (void 0 !== r) {
						if ("morphTargetInfluences" === n) {
							if (!t.geometry) {
								return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this)
							}
							if (t.geometry.isBufferGeometry) {
								if (!t.geometry.morphAttributes) {
									return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this)
								}
								for (h = 0; h < this.node.geometry.morphAttributes.position.length; h++) {
									if (t.geometry.morphAttributes.position[h].name === r) {
										r = h;
										break
									}
								}
							} else {
								if (!t.geometry.morphTargets) {
									return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this)
								}
								for (var h = 0; h < this.node.geometry.morphTargets.length; h++) {
									if (t.geometry.morphTargets[h].name === r) {
										r = h;
										break
									}
								}
							}
						}
						c = this.BindingType.ArrayElement, this.resolvedProperty = o, this.propertyIndex = r
					} else {
						void 0 !== o.fromArray && void 0 !== o.toArray ? (c = this.BindingType.HasFromToArray, this.resolvedProperty = o) : Array.isArray(o) ? (c = this.BindingType.EntireArray, this.resolvedProperty = o) : this.propertyName = n
					}
					this.getValue = this.GetterByBindingType[c], this.setValue = this.SetterByBindingTypeAndVersioning[c][s]
				} else {
					var l = e.nodeName;
					console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + n + " but it wasn't found.", t)
				}
			} else {
				console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.")
			}
		},
		unbind: function() {
			this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
		}
	}), Object.assign(kn.prototype, {
		_getValue_unbound: kn.prototype.getValue,
		_setValue_unbound: kn.prototype.setValue
	}), Object.assign(jn.prototype, {
		isAnimationObjectGroup: !0,
		add: function(t) {
			for (var e = this._objects, i = e.length, n = this.nCachedObjects_, r = this._indicesByUUID, a = this._paths, o = this._parsedPaths, s = this._bindings, c = s.length, h = 0, l = arguments.length; h !== l; ++h) {
				var u = arguments[h],
					d = u.uuid,
					p = r[d],
					f = void 0;
				if (void 0 === p) {
					p = i++, r[d] = p, e.push(u);
					for (var m = 0, g = c; m !== g; ++m) {
						s[m].push(new kn(u, a[m], o[m]))
					}
				} else {
					if (p < n) {
						f = e[p];
						var v = --n,
							y = e[v];
						r[y.uuid] = p, e[p] = y, r[d] = v, e[v] = u;
						for (var m = 0, g = c; m !== g; ++m) {
							var x = s[m],
								_ = x[v],
								b = x[p];
							x[p] = _, void 0 === b && (b = new kn(u, a[m], o[m])), x[v] = b
						}
					} else {
						e[p] !== f && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
					}
				}
			}
			this.nCachedObjects_ = n
		},
		remove: function(t) {
			for (var e = this._objects, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, a = r.length, o = 0, s = arguments.length; o !== s; ++o) {
				var c = arguments[o],
					h = c.uuid,
					l = n[h];
				if (void 0 !== l && l >= i) {
					var u = i++,
						d = e[u];
					n[d.uuid] = l, e[l] = d, n[h] = u, e[u] = c;
					for (var p = 0, f = a; p !== f; ++p) {
						var m = r[p],
							g = m[u],
							v = m[l];
						m[l] = g, m[u] = v
					}
				}
			}
			this.nCachedObjects_ = i
		},
		uncache: function(t) {
			for (var e = this._objects, i = e.length, n = this.nCachedObjects_, r = this._indicesByUUID, a = this._bindings, o = a.length, s = 0, c = arguments.length; s !== c; ++s) {
				var h = arguments[s].uuid,
					l = r[h];
				if (void 0 !== l) {
					if (delete r[h], l < n) {
						var u = --n,
							d = e[u],
							p = e[y = --i];
						r[d.uuid] = l, e[l] = d, r[p.uuid] = u, e[u] = p, e.pop();
						for (var f = 0, m = o; f !== m; ++f) {
							var g = (x = a[f])[u],
								v = x[y];
							x[l] = g, x[u] = v, x.pop()
						}
					} else {
						var y = --i;
						r[(p = e[y]).uuid] = l, e[l] = p, e.pop();
						for (var f = 0, m = o; f !== m; ++f) {
							var x = a[f];
							x[l] = x[y], x.pop()
						}
					}
				}
			}
			this.nCachedObjects_ = n
		},
		subscribe_: function(t, e) {
			var i = this._bindingsIndicesByPath,
				n = i[t],
				r = this._bindings;
			if (void 0 !== n) {
				return r[n]
			}
			var a = this._paths,
				o = this._parsedPaths,
				s = this._objects,
				c = s.length,
				h = this.nCachedObjects_,
				l = new Array(c);
			n = r.length, i[t] = n, a.push(t), o.push(e), r.push(l);
			for (var u = h, d = s.length; u !== d; ++u) {
				var p = s[u];
				l[u] = new kn(p, t, e)
			}
			return l
		},
		unsubscribe_: function(t) {
			var e = this._bindingsIndicesByPath,
				i = e[t];
			if (void 0 !== i) {
				var n = this._paths,
					r = this._parsedPaths,
					a = this._bindings,
					o = a.length - 1,
					s = a[o];
				e[t[o]] = i, a[i] = s, a.pop(), r[i] = r[o], r.pop(), n[i] = n[o], n.pop()
			}
		}
	}), Object.assign(Wn.prototype, {
		play: function() {
			return this._mixer._activateAction(this), this
		},
		stop: function() {
			return this._mixer._deactivateAction(this), this.reset()
		},
		reset: function() {
			return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
		},
		isRunning: function() {
			return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
		},
		isScheduled: function() {
			return this._mixer._isActiveAction(this)
		},
		startAt: function(t) {
			return this._startTime = t, this
		},
		setLoop: function(t, e) {
			return this.loop = t, this.repetitions = e, this
		},
		setEffectiveWeight: function(t) {
			return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
		},
		getEffectiveWeight: function() {
			return this._effectiveWeight
		},
		fadeIn: function(t) {
			return this._scheduleFading(t, 0, 1)
		},
		fadeOut: function(t) {
			return this._scheduleFading(t, 1, 0)
		},
		crossFadeFrom: function(t, e, i) {
			if (t.fadeOut(e), this.fadeIn(e), i) {
				var n = this._clip.duration,
					r = t._clip.duration,
					a = r / n,
					o = n / r;
				t.warp(1, a, e), this.warp(o, 1, e)
			}
			return this
		},
		crossFadeTo: function(t, e, i) {
			return t.crossFadeFrom(this, e, i)
		},
		stopFading: function() {
			var t = this._weightInterpolant;
			return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
		},
		setEffectiveTimeScale: function(t) {
			return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping()
		},
		getEffectiveTimeScale: function() {
			return this._effectiveTimeScale
		},
		setDuration: function(t) {
			return this.timeScale = this._clip.duration / t, this.stopWarping()
		},
		syncWith: function(t) {
			return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
		},
		halt: function(t) {
			return this.warp(this._effectiveTimeScale, 0, t)
		},
		warp: function(t, e, i) {
			var n = this._mixer,
				r = n.time,
				a = this._timeScaleInterpolant,
				o = this.timeScale;
			null === a && (a = n._lendControlInterpolant(), this._timeScaleInterpolant = a);
			var s = a.parameterPositions,
				c = a.sampleValues;
			return s[0] = r, s[1] = r + i, c[0] = t / o, c[1] = e / o, this
		},
		stopWarping: function() {
			var t = this._timeScaleInterpolant;
			return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
		},
		getMixer: function() {
			return this._mixer
		},
		getClip: function() {
			return this._clip
		},
		getRoot: function() {
			return this._localRoot || this._mixer._root
		},
		_update: function(t, e, i, n) {
			if (this.enabled) {
				var r = this._startTime;
				if (null !== r) {
					var a = (t - r) * i;
					if (a < 0 || 0 === i) {
						return
					}
					this._startTime = null, e = i * a
				}
				e *= this._updateTimeScale(t);
				var o = this._updateTime(e),
					s = this._updateWeight(t);
				if (s > 0) {
					for (var c = this._interpolants, h = this._propertyBindings, l = 0, u = c.length; l !== u; ++l) {
						c[l].evaluate(o), h[l].accumulate(n, s)
					}
				}
			} else {
				this._updateWeight(t)
			}
		},
		_updateWeight: function(t) {
			var e = 0;
			if (this.enabled) {
				e = this.weight;
				var i = this._weightInterpolant;
				if (null !== i) {
					var n = i.evaluate(t)[0];
					e *= n, t > i.parameterPositions[1] && (this.stopFading(), 0 === n && (this.enabled = !1))
				}
			}
			return this._effectiveWeight = e, e
		},
		_updateTimeScale: function(t) {
			var e = 0;
			if (!this.paused) {
				e = this.timeScale;
				var i = this._timeScaleInterpolant;
				null !== i && (e *= i.evaluate(t)[0], t > i.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e))
			}
			return this._effectiveTimeScale = e, e
		},
		_updateTime: function(t) {
			var e = this.time + t;
			if (0 === t) {
				return e
			}
			var i = this._clip.duration,
				n = this.loop,
				r = this._loopCount;
			if (2200 === n) {
				-1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1));
				t: {
					if (e >= i) {
						e = i
					} else {
						if (!(e < 0)) {
							break t
						}
						e = 0
					}
					this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
					this._mixer.dispatchEvent({
						type: "finished",
						action: this,
						direction: t < 0 ? -1 : 1
					})
				}
			} else {
				var a = 2202 === n;
				if (-1 === r && (t >= 0 ? (r = 0, this._setEndings(!0, 0 === this.repetitions, a)) : this._setEndings(0 === this.repetitions, !0, a)), e >= i || e < 0) {
					var o = Math.floor(e / i);
					e -= i * o, r += Math.abs(o);
					var s = this.repetitions - r;
					if (s < 0) {
						this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, e = t > 0 ? i : 0, this._mixer.dispatchEvent({
							type: "finished",
							action: this,
							direction: t > 0 ? 1 : -1
						})
					} else {
						if (0 === s) {
							var c = t < 0;
							this._setEndings(c, !c, a)
						} else {
							this._setEndings(!1, !1, a)
						}
						this._loopCount = r, this._mixer.dispatchEvent({
							type: "loop",
							action: this,
							loopDelta: o
						})
					}
				}
				if (a && 1 == (1 & r)) {
					return this.time = e, i - e
				}
			}
			return this.time = e, e
		},
		_setEndings: function(t, e, i) {
			var n = this._interpolantSettings;
			i ? (n.endingStart = 2401, n.endingEnd = 2401) : (n.endingStart = t ? this.zeroSlopeAtStart ? 2401 : Mo : 2402, n.endingEnd = e ? this.zeroSlopeAtEnd ? 2401 : Mo : 2402)
		},
		_scheduleFading: function(t, e, i) {
			var n = this._mixer,
				r = n.time,
				a = this._weightInterpolant;
			null === a && (a = n._lendControlInterpolant(), this._weightInterpolant = a);
			var o = a.parameterPositions,
				s = a.sampleValues;
			return o[0] = r, s[0] = e, o[1] = r + t, s[1] = i, this
		}
	}), Object.assign(Xn.prototype, e.prototype, {
		_bindAction: function(t, e) {
			var i = t._localRoot || this._root,
				n = t._clip.tracks,
				r = n.length,
				a = t._propertyBindings,
				o = t._interpolants,
				s = i.uuid,
				c = this._bindingsByRootAndName,
				h = c[s];
			void 0 === h && (h = {}, c[s] = h);
			for (var l = 0; l !== r; ++l) {
				var u = n[l],
					d = u.name,
					p = h[d];
				if (void 0 !== p) {
					a[l] = p
				} else {
					if (void 0 !== (p = a[l])) {
						null === p._cacheIndex && (++p.referenceCount, this._addInactiveBinding(p, s, d));
						continue
					}
					var f = e && e._propertyBindings[l].binding.parsedPath;
					++(p = new Hn(kn.create(i, d, f), u.ValueTypeName, u.getValueSize())).referenceCount, this._addInactiveBinding(p, s, d), a[l] = p
				}
				o[l].resultBuffer = p.buffer
			}
		},
		_activateAction: function(t) {
			if (!this._isActiveAction(t)) {
				if (null === t._cacheIndex) {
					var e = (t._localRoot || this._root).uuid,
						i = t._clip.uuid,
						n = this._actionsByClip[i];
					this._bindAction(t, n && n.knownActions[0]), this._addInactiveAction(t, i, e)
				}
				for (var r = t._propertyBindings, a = 0, o = r.length; a !== o; ++a) {
					var s = r[a];
					0 == s.useCount++ && (this._lendBinding(s), s.saveOriginalState())
				}
				this._lendAction(t)
			}
		},
		_deactivateAction: function(t) {
			if (this._isActiveAction(t)) {
				for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
					var r = e[i];
					0 == --r.useCount && (r.restoreOriginalState(), this._takeBackBinding(r))
				}
				this._takeBackAction(t)
			}
		},
		_initMemoryManager: function() {
			this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
			var t = this;
			this.stats = {
				actions: {
					get totalfunction() {
						return t._actions.length
					},
					get inUsefunction() {
						return t._nActiveActions
					}
				},
				bindings: {
					get totalfunction() {
						return t._bindings.length
					},
					get inUsefunction() {
						return t._nActiveBindings
					}
				},
				controlInterpolants: {
					get totalfunction() {
						return t._controlInterpolants.length
					},
					get inUsefunction() {
						return t._nActiveControlInterpolants
					}
				}
			}
		},
		_isActiveAction: function(t) {
			var e = t._cacheIndex;
			return null !== e && e < this._nActiveActions
		},
		_addInactiveAction: function(t, e, i) {
			var n = this._actions,
				r = this._actionsByClip,
				a = r[e];
			if (void 0 === a) {
				a = {
					knownActions: [t],
					actionByRoot: {}
				}, t._byClipCacheIndex = 0, r[e] = a
			} else {
				var o = a.knownActions;
				t._byClipCacheIndex = o.length, o.push(t)
			}
			t._cacheIndex = n.length, n.push(t), a.actionByRoot[i] = t
		},
		_removeInactiveAction: function(t) {
			var e = this._actions,
				i = e[e.length - 1],
				n = t._cacheIndex;
			i._cacheIndex = n, e[n] = i, e.pop(), t._cacheIndex = null;
			var r = t._clip.uuid,
				a = this._actionsByClip,
				o = a[r],
				s = o.knownActions,
				c = s[s.length - 1],
				h = t._byClipCacheIndex;
			c._byClipCacheIndex = h, s[h] = c, s.pop(), t._byClipCacheIndex = null, delete o.actionByRoot[(t._localRoot || this._root).uuid], 0 === s.length && delete a[r], this._removeInactiveBindingsForAction(t)
		},
		_removeInactiveBindingsForAction: function(t) {
			for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
				var r = e[i];
				0 == --r.referenceCount && this._removeInactiveBinding(r)
			}
		},
		_lendAction: function(t) {
			var e = this._actions,
				i = t._cacheIndex,
				n = this._nActiveActions++,
				r = e[n];
			t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
		},
		_takeBackAction: function(t) {
			var e = this._actions,
				i = t._cacheIndex,
				n = --this._nActiveActions,
				r = e[n];
			t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
		},
		_addInactiveBinding: function(t, e, i) {
			var n = this._bindingsByRootAndName,
				r = n[e],
				a = this._bindings;
			void 0 === r && (r = {}, n[e] = r), r[i] = t, t._cacheIndex = a.length, a.push(t)
		},
		_removeInactiveBinding: function(t) {
			var e = this._bindings,
				i = t.binding,
				n = i.rootNode.uuid,
				r = i.path,
				a = this._bindingsByRootAndName,
				o = a[n],
				s = e[e.length - 1],
				c = t._cacheIndex;
			s._cacheIndex = c, e[c] = s, e.pop(), delete o[r];
			t: {
				for (var h in o) {
					break t
				}
				delete a[n]
			}
		},
		_lendBinding: function(t) {
			var e = this._bindings,
				i = t._cacheIndex,
				n = this._nActiveBindings++,
				r = e[n];
			t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
		},
		_takeBackBinding: function(t) {
			var e = this._bindings,
				i = t._cacheIndex,
				n = --this._nActiveBindings,
				r = e[n];
			t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
		},
		_lendControlInterpolant: function() {
			var t = this._controlInterpolants,
				e = this._nActiveControlInterpolants++,
				i = t[e];
			return void 0 === i && ((i = new qi(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = e, t[e] = i), i
		},
		_takeBackControlInterpolant: function(t) {
			var e = this._controlInterpolants,
				i = t.__cacheIndex,
				n = --this._nActiveControlInterpolants,
				r = e[n];
			t.__cacheIndex = n, e[n] = t, r.__cacheIndex = i, e[i] = r
		},
		_controlInterpolantsResultBuffer: new Float32Array(1),
		clipAction: function(t, e) {
			var i = e || this._root,
				n = i.uuid,
				r = "string" == typeof t ? an.findByName(i, t) : t,
				a = null !== r ? r.uuid : t,
				o = this._actionsByClip[a],
				s = null;
			if (void 0 !== o) {
				var c = o.actionByRoot[n];
				if (void 0 !== c) {
					return c
				}
				s = o.knownActions[0], null === r && (r = s._clip)
			}
			if (null === r) {
				return null
			}
			var h = new Wn(this, r, e);
			return this._bindAction(h, s), this._addInactiveAction(h, a, n), h
		},
		existingAction: function(t, e) {
			var i = e || this._root,
				n = i.uuid,
				r = "string" == typeof t ? an.findByName(i, t) : t,
				a = r ? r.uuid : t,
				o = this._actionsByClip[a];
			return void 0 !== o ? o.actionByRoot[n] || null : null
		},
		stopAllAction: function() {
			var t = this._actions,
				e = this._nActiveActions,
				i = this._bindings,
				n = this._nActiveBindings;
			for (this._nActiveActions = 0, this._nActiveBindings = 0, r = 0; r !== e; ++r) {
				t[r].reset()
			}
			for (var r = 0; r !== n; ++r) {
				i[r].useCount = 0
			}
			return this
		},
		update: function(t) {
			t *= this.timeScale;
			for (var e = this._actions, i = this._nActiveActions, n = this.time += t, r = Math.sign(t), a = this._accuIndex ^= 1, o = 0; o !== i; ++o) {
				e[o]._update(n, t, r, a)
			}
			for (var s = this._bindings, c = this._nActiveBindings, o = 0; o !== c; ++o) {
				s[o].apply(a)
			}
			return this
		},
		getRoot: function() {
			return this._root
		},
		uncacheClip: function(t) {
			var e = this._actions,
				i = t.uuid,
				n = this._actionsByClip,
				r = n[i];
			if (void 0 !== r) {
				for (var a = r.knownActions, o = 0, s = a.length; o !== s; ++o) {
					var c = a[o];
					this._deactivateAction(c);
					var h = c._cacheIndex,
						l = e[e.length - 1];
					c._cacheIndex = null, c._byClipCacheIndex = null, l._cacheIndex = h, e[h] = l, e.pop(), this._removeInactiveBindingsForAction(c)
				}
				delete n[i]
			}
		},
		uncacheRoot: function(t) {
			var e = t.uuid,
				i = this._actionsByClip;
			for (var n in i) {
				var r = i[n].actionByRoot[e];
				void 0 !== r && (this._deactivateAction(r), this._removeInactiveAction(r))
			}
			var a = this._bindingsByRootAndName[e];
			if (void 0 !== a) {
				for (var o in a) {
					var s = a[o];
					s.restoreOriginalState(), this._removeInactiveBinding(s)
				}
			}
		},
		uncacheAction: function(t, e) {
			var i = this.existingAction(t, e);
			null !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
		}
	}), qn.prototype.clone = function() {
		return new qn(void 0 === this.value.clone ? this.value : this.value.clone())
	}, Yn.prototype = Object.assign(Object.create(At.prototype), {
		constructor: Yn,
		isInstancedBufferGeometry: !0,
		addGroup: function(t, e, i) {
			this.groups.push({
				start: t,
				count: e,
				materialIndex: i
			})
		},
		copy: function(t) {
			var e = t.index;
			null !== e && this.setIndex(e.clone());
			var i = t.attributes;
			for (var n in i) {
				var r = i[n];
				this.addAttribute(n, r.clone())
			}
			for (var a = t.groups, o = 0, s = a.length; o < s; o++) {
				var c = a[o];
				this.addGroup(c.start, c.count, c.materialIndex)
			}
			return this
		}
	}), Object.defineProperties(Zn.prototype, {
		count: {
			get: function() {
				return this.data.count
			}
		},
		array: {
			get: function() {
				return this.data.array
			}
		}
	}), Object.assign(Zn.prototype, {
		isInterleavedBufferAttribute: !0,
		setX: function(t, e) {
			return this.data.array[t * this.data.stride + this.offset] = e, this
		},
		setY: function(t, e) {
			return this.data.array[t * this.data.stride + this.offset + 1] = e, this
		},
		setZ: function(t, e) {
			return this.data.array[t * this.data.stride + this.offset + 2] = e, this
		},
		setW: function(t, e) {
			return this.data.array[t * this.data.stride + this.offset + 3] = e, this
		},
		getX: function(t) {
			return this.data.array[t * this.data.stride + this.offset]
		},
		getY: function(t) {
			return this.data.array[t * this.data.stride + this.offset + 1]
		},
		getZ: function(t) {
			return this.data.array[t * this.data.stride + this.offset + 2]
		},
		getW: function(t) {
			return this.data.array[t * this.data.stride + this.offset + 3]
		},
		setXY: function(t, e, i) {
			return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this
		},
		setXYZ: function(t, e, i, n) {
			return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this
		},
		setXYZW: function(t, e, i, n, r) {
			return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this.data.array[t + 3] = r, this
		}
	}), Object.defineProperty(Jn.prototype, "needsUpdate", {
		set: function(t) {
			!0 === t && this.version++
		}
	}), Object.assign(Jn.prototype, {
		isInterleavedBuffer: !0,
		setArray: function(t) {
			if (Array.isArray(t)) {
				throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.")
			}
			this.count = void 0 !== t ? t.length / this.stride : 0, this.array = t
		},
		setDynamic: function(t) {
			return this.dynamic = t, this
		},
		copy: function(t) {
			return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.dynamic = t.dynamic, this
		},
		copyAt: function(t, e, i) {
			t *= this.stride, i *= e.stride;
			for (var n = 0, r = this.stride; n < r; n++) {
				this.array[t + n] = e.array[i + n]
			}
			return this
		},
		set: function(t, e) {
			return void 0 === e && (e = 0), this.array.set(t, e), this
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		onUpload: function(t) {
			return this.onUploadCallback = t, this
		}
	}), Qn.prototype = Object.assign(Object.create(Jn.prototype), {
		constructor: Qn,
		isInstancedInterleavedBuffer: !0,
		copy: function(t) {
			return Jn.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
		}
	}), Kn.prototype = Object.assign(Object.create(pt.prototype), {
		constructor: Kn,
		isInstancedBufferAttribute: !0,
		copy: function(t) {
			return pt.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
		}
	}), Object.assign($n.prototype, {
		linePrecision: 1,
		set: function(t, e) {
			this.ray.set(t, e)
		},
		setFromCamera: function(t, e) {
			e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, 0.5).unproject(e).sub(this.ray.origin).normalize()) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
		},
		intersectObject: function(t, e) {
			var i = [];
			return er(t, this, i, e), i.sort(tr), i
		},
		intersectObjects: function(t, e) {
			var i = [];
			if (!1 === Array.isArray(t)) {
				return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), i
			}
			for (var n = 0, r = t.length; n < r; n++) {
				er(t[n], this, i, e)
			}
			return i.sort(tr), i
		}
	}), Object.assign(ir.prototype, {
		start: function() {
			this.startTime = ("undefined" == typeof performance ? Date : performance).now(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0
		},
		stop: function() {
			this.getElapsedTime(), this.running = !1
		},
		getElapsedTime: function() {
			return this.getDelta(), this.elapsedTime
		},
		getDelta: function() {
			var t = 0;
			if (this.autoStart && !this.running) {
				return this.start(), 0
			}
			if (this.running) {
				var e = ("undefined" == typeof performance ? Date : performance).now();
				t = (e - this.oldTime) / 1000, this.oldTime = e, this.elapsedTime += t
			}
			return t
		}
	}), Object.assign(nr.prototype, {
		set: function(t, e, i) {
			return this.radius = t, this.phi = e, this.theta = i, this
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
		},
		makeSafe: function() {
			return this.phi = Math.max(0.000001, Math.min(Math.PI - 0.000001, this.phi)), this
		},
		setFromVector3: function(t) {
			return this.radius = t.length(), 0 === this.radius ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(t.x, t.z), this.phi = Math.acos(Do.clamp(t.y / this.radius, -1, 1))), this
		}
	}), Object.assign(rr.prototype, {
		set: function(t, e, i) {
			return this.radius = t, this.theta = e, this.y = i, this
		},
		clone: function() {
			return (new this.constructor).copy(this)
		},
		copy: function(t) {
			return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this
		},
		setFromVector3: function(t) {
			return this.radius = Math.sqrt(t.x * t.x + t.z * t.z), this.theta = Math.atan2(t.x, t.z), this.y = t.y, this
		}
	}), (ar.prototype = Object.create(Rt.prototype)).constructor = ar, ar.prototype.createAnimation = function(t, e, i, n) {
		var r = {
			start: e,
			end: i,
			length: i - e + 1,
			fps: n,
			duration: (i - e) / n,
			lastFrame: 0,
			currentFrame: 0,
			active: !1,
			time: 0,
			direction: 1,
			weight: 1,
			directionBackwards: !1,
			mirroredLoop: !1
		};
		this.animationsMap[t] = r, this.animationsList.push(r)
	}, ar.prototype.autoCreateAnimations = function(t) {
		for (var e, i = /([a-z]+)_?(\d+)/i, n = {}, r = this.geometry, a = 0, o = r.morphTargets.length; a < o; a++) {
			var s = r.morphTargets[a].name.match(i);
			s && s.length > 1 && (n[c = s[1]] || (n[c] = {
				start: 1 / 0,
				end: -1 / 0
			}), a < (h = n[c]).start && (h.start = a), a > h.end && (h.end = a), e || (e = c))
		}
		for (var c in n) {
			var h = n[c];
			this.createAnimation(c, h.start, h.end, t)
		}
		this.firstAnimation = e
	}, ar.prototype.setAnimationDirectionForward = function(t) {
		var e = this.animationsMap[t];
		e && (e.direction = 1, e.directionBackwards = !1)
	}, ar.prototype.setAnimationDirectionBackward = function(t) {
		var e = this.animationsMap[t];
		e && (e.direction = -1, e.directionBackwards = !0)
	}, ar.prototype.setAnimationFPS = function(t, e) {
		var i = this.animationsMap[t];
		i && (i.fps = e, i.duration = (i.end - i.start) / i.fps)
	}, ar.prototype.setAnimationDuration = function(t, e) {
		var i = this.animationsMap[t];
		i && (i.duration = e, i.fps = (i.end - i.start) / i.duration)
	}, ar.prototype.setAnimationWeight = function(t, e) {
		var i = this.animationsMap[t];
		i && (i.weight = e)
	}, ar.prototype.setAnimationTime = function(t, e) {
		var i = this.animationsMap[t];
		i && (i.time = e)
	}, ar.prototype.getAnimationTime = function(t) {
		var e = 0,
			i = this.animationsMap[t];
		return i && (e = i.time), e
	}, ar.prototype.getAnimationDuration = function(t) {
		var e = -1,
			i = this.animationsMap[t];
		return i && (e = i.duration), e
	}, ar.prototype.playAnimation = function(t) {
		var e = this.animationsMap[t];
		e ? (e.time = 0, e.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + t + "] undefined in .playAnimation()")
	}, ar.prototype.stopAnimation = function(t) {
		var e = this.animationsMap[t];
		e && (e.active = !1)
	}, ar.prototype.update = function(t) {
		for (var e = 0, i = this.animationsList.length; e < i; e++) {
			var n = this.animationsList[e];
			if (n.active) {
				var r = n.duration / n.length;
				n.time += n.direction * t, n.mirroredLoop ? (n.time > n.duration || n.time < 0) && (n.direction *= -1, n.time > n.duration && (n.time = n.duration, n.directionBackwards = !0), n.time < 0 && (n.time = 0, n.directionBackwards = !1)) : (n.time = n.time % n.duration, n.time < 0 && (n.time += n.duration));
				var a = n.start + Do.clamp(Math.floor(n.time / r), 0, n.length - 1),
					o = n.weight;
				a !== n.currentFrame && (this.morphTargetInfluences[n.lastFrame] = 0, this.morphTargetInfluences[n.currentFrame] = 1 * o, this.morphTargetInfluences[a] = 0, n.lastFrame = n.currentFrame, n.currentFrame = a);
				var s = n.time % r / r;
				n.directionBackwards && (s = 1 - s), n.currentFrame !== n.lastFrame ? (this.morphTargetInfluences[n.currentFrame] = s * o, this.morphTargetInfluences[n.lastFrame] = (1 - s) * o) : this.morphTargetInfluences[n.currentFrame] = o
			}
		}
	}, (or.prototype = Object.create(ct.prototype)).constructor = or, or.prototype.isImmediateRenderObject = !0, (sr.prototype = Object.create(Se.prototype)).constructor = sr, sr.prototype.update = function() {
		var t = new c,
			e = new c,
			i = new et;
		return function() {
			var n = ["a", "b", "c"];
			this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld);
			var r = this.object.matrixWorld,
				a = this.geometry.attributes.position,
				o = this.object.geometry;
			if (o && o.isGeometry) {
				for (var s = o.vertices, c = o.faces, h = 0, l = 0, u = c.length; l < u; l++) {
					for (var d = c[l], p = 0, f = d.vertexNormals.length; p < f; p++) {
						var m = s[d[n[p]]],
							g = d.vertexNormals[p];
						t.copy(m).applyMatrix4(r), e.copy(g).applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), a.setXYZ(h, t.x, t.y, t.z), h += 1, a.setXYZ(h, e.x, e.y, e.z), h += 1
					}
				}
			} else {
				if (o && o.isBufferGeometry) {
					for (var v = o.attributes.position, y = o.attributes.normal, h = 0, p = 0, f = v.count; p < f; p++) {
						t.set(v.getX(p), v.getY(p), v.getZ(p)).applyMatrix4(r), e.set(y.getX(p), y.getY(p), y.getZ(p)), e.applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), a.setXYZ(h, t.x, t.y, t.z), h += 1, a.setXYZ(h, e.x, e.y, e.z), h += 1
					}
				}
			}
			a.needsUpdate = !0
		}
	}(), (cr.prototype = Object.create(ct.prototype)).constructor = cr, cr.prototype.dispose = function() {
		this.cone.geometry.dispose(), this.cone.material.dispose()
	}, cr.prototype.update = function() {
		var t = new c,
			e = new c;
		return function() {
			var i = this.light.distance ? this.light.distance : 1000,
				n = i * Math.tan(this.light.angle);
			this.cone.scale.set(n, n, i), t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(e.sub(t)), this.cone.material.color.copy(this.light.color)
		}
	}(), (hr.prototype = Object.create(Se.prototype)).constructor = hr, hr.prototype.getBoneList = function(t) {
		var e = [];
		t && t.isBone && e.push(t);
		for (var i = 0; i < t.children.length; i++) {
			e.push.apply(e, this.getBoneList(t.children[i]))
		}
		return e
	}, hr.prototype.update = function() {
		var t = new c,
			e = new h,
			i = new h;
		return function() {
			var n = this.geometry,
				r = n.getAttribute("position");
			i.getInverse(this.root.matrixWorld);
			for (var a = 0, o = 0; a < this.bones.length; a++) {
				var s = this.bones[a];
				s.parent && s.parent.isBone && (e.multiplyMatrices(i, s.matrixWorld), t.setFromMatrixPosition(e), r.setXYZ(o, t.x, t.y, t.z), e.multiplyMatrices(i, s.parent.matrixWorld), t.setFromMatrixPosition(e), r.setXYZ(o + 1, t.x, t.y, t.z), o += 2)
			}
			n.getAttribute("position").needsUpdate = !0
		}
	}(), (lr.prototype = Object.create(Rt.prototype)).constructor = lr, lr.prototype.dispose = function() {
		this.geometry.dispose(), this.material.dispose()
	}, lr.prototype.update = function() {
		this.material.color.copy(this.light.color)
	}, (ur.prototype = Object.create(ct.prototype)).constructor = ur, ur.prototype.dispose = function() {
		this.children[0].geometry.dispose(), this.children[0].material.dispose()
	}, ur.prototype.update = function() {
		var t = this.children[0];
		t.material.color.copy(this.light.color);
		var e = 0.5 * this.light.width,
			i = 0.5 * this.light.height,
			n = t.geometry.attributes.position,
			r = n.array;
		r[0] = e, r[1] = -i, r[2] = 0, r[3] = e, r[4] = i, r[5] = 0, r[6] = -e, r[7] = i, r[8] = 0, r[9] = -e, r[10] = -i, r[11] = 0, r[12] = e, r[13] = -i, r[14] = 0, n.needsUpdate = !0
	}, (dr.prototype = Object.create(ct.prototype)).constructor = dr, dr.prototype.dispose = function() {
		this.children[0].geometry.dispose(), this.children[0].material.dispose()
	}, dr.prototype.update = function() {
		var t = new c,
			e = new X,
			i = new X;
		return function() {
			var n = this.children[0],
				r = n.geometry.getAttribute("color");
			e.copy(this.light.color), i.copy(this.light.groundColor);
			for (var a = 0, o = r.count; a < o; a++) {
				var s = a < o / 2 ? e : i;
				r.setXYZ(a, s.r, s.g, s.b)
			}
			n.lookAt(t.setFromMatrixPosition(this.light.matrixWorld).negate()), r.needsUpdate = !0
		}
	}(), (pr.prototype = Object.create(Se.prototype)).constructor = pr, (fr.prototype = Object.create(Se.prototype)).constructor = fr, (mr.prototype = Object.create(Se.prototype)).constructor = mr, mr.prototype.update = function() {
		var t = new c,
			e = new c,
			i = new et;
		return function() {
			this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld);
			for (var n = this.object.matrixWorld, r = this.geometry.attributes.position, a = this.object.geometry, o = a.vertices, s = a.faces, c = 0, h = 0, l = s.length; h < l; h++) {
				var u = s[h],
					d = u.normal;
				t.copy(o[u.a]).add(o[u.b]).add(o[u.c]).divideScalar(3).applyMatrix4(n), e.copy(d).applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), r.setXYZ(c, t.x, t.y, t.z), c += 1, r.setXYZ(c, e.x, e.y, e.z), c += 1
			}
			r.needsUpdate = !0
		}
	}(), (gr.prototype = Object.create(ct.prototype)).constructor = gr, gr.prototype.dispose = function() {
		var t = this.children[0],
			e = this.children[1];
		t.geometry.dispose(), t.material.dispose(), e.geometry.dispose(), e.material.dispose()
	}, gr.prototype.update = function() {
		var t = new c,
			e = new c,
			i = new c;
		return function() {
			t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), i.subVectors(e, t);
			var n = this.children[0],
				r = this.children[1];
			n.lookAt(i), n.material.color.copy(this.light.color), r.lookAt(i), r.scale.z = i.length()
		}
	}(), (vr.prototype = Object.create(Se.prototype)).constructor = vr, vr.prototype.update = function() {
		function t(t, a, o, s) {
			n.set(a, o, s).unproject(r);
			var c = i[t];
			if (void 0 !== c) {
				for (var h = e.getAttribute("position"), l = 0, u = c.length; l < u; l++) {
					h.setXYZ(c[l], n.x, n.y, n.z)
				}
			}
		}
		var e, i, n = new c,
			r = new Ut;
		return function() {
			e = this.geometry, i = this.pointMap, r.projectionMatrix.copy(this.camera.projectionMatrix), t("c", 0, 0, -1), t("t", 0, 0, 1), t("n1", -1, -1, -1), t("n2", 1, -1, -1), t("n3", -1, 1, -1), t("n4", 1, 1, -1), t("f1", -1, -1, 1), t("f2", 1, -1, 1), t("f3", -1, 1, 1), t("f4", 1, 1, 1), t("u1", 0.7, 1.1, -1), t("u2", -0.7, 1.1, -1), t("u3", 0, 2, -1), t("cf1", -1, 0, 1), t("cf2", 1, 0, 1), t("cf3", 0, -1, 1), t("cf4", 0, 1, 1), t("cn1", -1, 0, -1), t("cn2", 1, 0, -1), t("cn3", 0, -1, -1), t("cn4", 0, 1, -1), e.getAttribute("position").needsUpdate = !0
		}
	}(), (yr.prototype = Object.create(Se.prototype)).constructor = yr, yr.prototype.update = function() {
		var t = new $;
		return function(e) {
			if (void 0 !== e && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && t.setFromObject(this.object), !t.isEmpty()) {
				var i = t.min,
					n = t.max,
					r = this.geometry.attributes.position,
					a = r.array;
				a[0] = n.x, a[1] = n.y, a[2] = n.z, a[3] = i.x, a[4] = n.y, a[5] = n.z, a[6] = i.x, a[7] = i.y, a[8] = n.z, a[9] = n.x, a[10] = i.y, a[11] = n.z, a[12] = n.x, a[13] = n.y, a[14] = i.z, a[15] = i.x, a[16] = n.y, a[17] = i.z, a[18] = i.x, a[19] = i.y, a[20] = i.z, a[21] = n.x, a[22] = i.y, a[23] = i.z, r.needsUpdate = !0, this.geometry.computeBoundingSphere()
			}
		}
	}(), yr.prototype.setFromObject = function(t) {
		return this.object = t, this.update(), this
	};
	var fs, ms;
	(xr.prototype = Object.create(ct.prototype)).constructor = xr, xr.prototype.setDirection = function() {
		var t, e = new c;
		return function(i) {
			i.y > 0.99999 ? this.quaternion.set(0, 0, 0, 1) : i.y < -0.99999 ? this.quaternion.set(1, 0, 0, 0) : (e.set(i.z, 0, -i.x).normalize(), t = Math.acos(i.y), this.quaternion.setFromAxisAngle(e, t))
		}
	}(), xr.prototype.setLength = function(t, e, i) {
		void 0 === e && (e = 0.2 * t), void 0 === i && (i = 0.2 * e), this.line.scale.set(1, Math.max(0, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(i, e, i), this.cone.position.y = t, this.cone.updateMatrix()
	}, xr.prototype.setColor = function(t) {
		this.line.material.color.copy(t), this.cone.material.color.copy(t)
	}, (_r.prototype = Object.create(Se.prototype)).constructor = _r;
	var gs = new c,
		vs = new br,
		ys = new br,
		xs = new br;
	wr.prototype = Object.create(bn.prototype), wr.prototype.constructor = wr, wr.prototype.getPoint = function(t) {
		var e = this.points,
			i = e.length,
			n = (i - (this.closed ? 0 : 1)) * t,
			r = Math.floor(n),
			a = n - r;
		this.closed ? r += r > 0 ? 0 : (Math.floor(Math.abs(r) / e.length) + 1) * e.length : 0 === a && r === i - 1 && (r = i - 2, a = 1);
		var o, s, h, l;
		if (this.closed || r > 0 ? o = e[(r - 1) % i] : (gs.subVectors(e[0], e[1]).add(e[0]), o = gs), s = e[r % i], h = e[(r + 1) % i], this.closed || r + 2 < i ? l = e[(r + 2) % i] : (gs.subVectors(e[i - 1], e[i - 2]).add(e[i - 1]), l = gs), void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
			var u = "chordal" === this.type ? 0.5 : 0.25,
				d = Math.pow(o.distanceToSquared(s), u),
				p = Math.pow(s.distanceToSquared(h), u),
				f = Math.pow(h.distanceToSquared(l), u);
			p < 0.0001 && (p = 1), d < 0.0001 && (d = p), f < 0.0001 && (f = p), vs.initNonuniformCatmullRom(o.x, s.x, h.x, l.x, d, p, f), ys.initNonuniformCatmullRom(o.y, s.y, h.y, l.y, d, p, f), xs.initNonuniformCatmullRom(o.z, s.z, h.z, l.z, d, p, f)
		} else {
			if ("catmullrom" === this.type) {
				var m = void 0 !== this.tension ? this.tension : 0.5;
				vs.initCatmullRom(o.x, s.x, h.x, l.x, m), ys.initCatmullRom(o.y, s.y, h.y, l.y, m), xs.initCatmullRom(o.z, s.z, h.z, l.z, m)
			}
		}
		return new c(vs.calc(a), ys.calc(a), xs.calc(a))
	}, (Mr.prototype = Object.create(bn.prototype)).constructor = Mr, Mr.prototype.getPoint = function(t) {
		var e = this.v0,
			i = this.v1,
			n = this.v2,
			r = this.v3;
		return new c(_n(t, e.x, i.x, n.x, r.x), _n(t, e.y, i.y, n.y, r.y), _n(t, e.z, i.z, n.z, r.z))
	}, (Er.prototype = Object.create(bn.prototype)).constructor = Er, Er.prototype.getPoint = function(t) {
		var e = this.v0,
			i = this.v1,
			n = this.v2;
		return new c(mn(t, e.x, i.x, n.x), mn(t, e.y, i.y, n.y), mn(t, e.z, i.z, n.z))
	}, (Tr.prototype = Object.create(bn.prototype)).constructor = Tr, Tr.prototype.getPoint = function(t) {
		if (1 === t) {
			return this.v2.clone()
		}
		var e = new c;
		return e.subVectors(this.v2, this.v1), e.multiplyScalar(t), e.add(this.v1), e
	}, (Sr.prototype = Object.create(En.prototype)).constructor = Sr;
	var _s = {
		createMultiMaterialObject: function(t, e) {
			for (var i = new Pe, n = 0, r = e.length; n < r; n++) {
				i.add(new Rt(t, e[n]))
			}
			return i
		},
		detach: function(t, e, i) {
			t.applyMatrix(e.matrixWorld), e.remove(t), i.add(t)
		},
		attach: function(t, e, i) {
			var n = new h;
			n.getInverse(i.matrixWorld), t.applyMatrix(n), e.remove(t), i.add(t)
		}
	};
	bn.create = function(t, e) {
		return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create(bn.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t
	}, Ar.prototype = Object.create(wr.prototype), Rr.prototype = Object.create(wr.prototype), Lr.prototype = Object.create(wr.prototype), Object.assign(Lr.prototype, {
		initFromArray: function(t) {
			console.error("THREE.Spline: .initFromArray() has been removed.")
		},
		getControlPointsArray: function(t) {
			console.error("THREE.Spline: .getControlPointsArray() has been removed.")
		},
		reparametrizeByArcLength: function(t) {
			console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
		}
	}), pr.prototype.setColors = function() {
		console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
	}, Object.assign(q.prototype, {
		center: function(t) {
			return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t)
		},
		empty: function() {
			return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
		},
		isIntersectionBox: function(t) {
			return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
		},
		size: function(t) {
			return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t)
		}
	}), Object.assign($.prototype, {
		center: function(t) {
			return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t)
		},
		empty: function() {
			return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
		},
		isIntersectionBox: function(t) {
			return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
		},
		isIntersectionSphere: function(t) {
			return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
		},
		size: function(t) {
			return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t)
		}
	}), ht.prototype.center = function(t) {
		return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(t)
	}, Do.random16 = function() {
		return console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead."), Math.random()
	}, Object.assign(et.prototype, {
		flattenToArrayOffset: function(t, e) {
			return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
		},
		multiplyVector3: function(t) {
			return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this)
		},
		multiplyVector3Array: function(t) {
			return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(t)
		},
		applyToBuffer: function(t, e, i) {
			return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(t)
		},
		applyToVector3Array: function(t, e, i) {
			console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
		}
	}), Object.assign(h.prototype, {
		extractPosition: function(t) {
			return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t)
		},
		flattenToArrayOffset: function(t, e) {
			return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
		},
		getPosition: function() {
			var t;
			return function() {
				return void 0 === t && (t = new c), console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), t.setFromMatrixColumn(this, 3)
			}
		}(),
		setRotationFromQuaternion: function(t) {
			return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t)
		},
		multiplyToArray: function() {
			console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
		},
		multiplyVector3: function(t) {
			return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
		},
		multiplyVector4: function(t) {
			return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
		},
		multiplyVector3Array: function(t) {
			return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."), this.applyToVector3Array(t)
		},
		rotateAxis: function(t) {
			console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this)
		},
		crossVector: function(t) {
			return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
		},
		translate: function() {
			console.error("THREE.Matrix4: .translate() has been removed.")
		},
		rotateX: function() {
			console.error("THREE.Matrix4: .rotateX() has been removed.")
		},
		rotateY: function() {
			console.error("THREE.Matrix4: .rotateY() has been removed.")
		},
		rotateZ: function() {
			console.error("THREE.Matrix4: .rotateZ() has been removed.")
		},
		rotateByAxis: function() {
			console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
		},
		applyToBuffer: function(t, e, i) {
			return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(t)
		},
		applyToVector3Array: function(t, e, i) {
			console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
		},
		makeFrustum: function(t, e, i, n, r, a) {
			return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t, e, n, i, r, a)
		}
	}), it.prototype.isIntersectionLine = function(t) {
		return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t)
	}, s.prototype.multiplyVector3 = function(t) {
		return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this)
	}, Object.assign(at.prototype, {
		isIntersectionBox: function(t) {
			return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
		},
		isIntersectionPlane: function(t) {
			return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t)
		},
		isIntersectionSphere: function(t) {
			return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
		}
	}), Object.assign(Ln.prototype, {
		extrude: function(t) {
			return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new ti(this, t)
		},
		makeGeometry: function(t) {
			return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new li(this, t)
		}
	}), Object.assign(i.prototype, {
		fromAttribute: function(t, e, i) {
			return console.error("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, i)
		}
	}), Object.assign(c.prototype, {
		setEulerFromRotationMatrix: function() {
			console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
		},
		setEulerFromQuaternion: function() {
			console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
		},
		getPositionFromMatrix: function(t) {
			return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t)
		},
		getScaleFromMatrix: function(t) {
			return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t)
		},
		getColumnFromMatrix: function(t, e) {
			return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t)
		},
		applyProjection: function(t) {
			return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t)
		},
		fromAttribute: function(t, e, i) {
			return console.error("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, i)
		}
	}), Object.assign(r.prototype, {
		fromAttribute: function(t, e, i) {
			return console.error("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, i)
		}
	}), St.prototype.computeTangents = function() {
		console.warn("THREE.Geometry: .computeTangents() has been removed.")
	}, Object.assign(ct.prototype, {
		getChildByName: function(t) {
			return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t)
		},
		renderDepth: function() {
			console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
		},
		translate: function(t, e) {
			return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t)
		}
	}), Object.defineProperties(ct.prototype, {
		eulerOrder: {
			get: function() {
				return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
			},
			set: function(t) {
				console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t
			}
		},
		useQuaternion: {
			get: function() {
				console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
			},
			set: function() {
				console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
			}
		}
	}), Object.defineProperties(_e.prototype, {
		objects: {
			get: function() {
				return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
			}
		}
	}), Object.defineProperty(be.prototype, "useVertexTexture", {
		get: function() {
			console.warn("THREE.Skeleton: useVertexTexture has been removed.")
		},
		set: function() {
			console.warn("THREE.Skeleton: useVertexTexture has been removed.")
		}
	}), Object.defineProperty(bn.prototype, "__arcLengthDivisions", {
		get: function() {
			return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions
		},
		set: function(t) {
			console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = t
		}
	}), Nt.prototype.setLens = function(t, e) {
		console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t)
	}, Object.defineProperties(Oi.prototype, {
		onlyShadow: {
			set: function() {
				console.warn("THREE.Light: .onlyShadow has been removed.")
			}
		},
		shadowCameraFov: {
			set: function(t) {
				console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t
			}
		},
		shadowCameraLeft: {
			set: function(t) {
				console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t
			}
		},
		shadowCameraRight: {
			set: function(t) {
				console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t
			}
		},
		shadowCameraTop: {
			set: function(t) {
				console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t
			}
		},
		shadowCameraBottom: {
			set: function(t) {
				console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t
			}
		},
		shadowCameraNear: {
			set: function(t) {
				console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t
			}
		},
		shadowCameraFar: {
			set: function(t) {
				console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t
			}
		},
		shadowCameraVisible: {
			set: function() {
				console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
			}
		},
		shadowBias: {
			set: function(t) {
				console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t
			}
		},
		shadowDarkness: {
			set: function() {
				console.warn("THREE.Light: .shadowDarkness has been removed.")
			}
		},
		shadowMapWidth: {
			set: function(t) {
				console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t
			}
		},
		shadowMapHeight: {
			set: function(t) {
				console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t
			}
		}
	}), Object.defineProperties(pt.prototype, {
		length: {
			get: function() {
				return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
			}
		}
	}), Object.assign(At.prototype, {
		addIndex: function(t) {
			console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t)
		},
		addDrawCall: function(t, e, i) {
			void 0 !== i && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e)
		},
		clearDrawCalls: function() {
			console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
		},
		computeTangents: function() {
			console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
		},
		computeOffsets: function() {
			console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
		}
	}), Object.defineProperties(At.prototype, {
		drawcalls: {
			get: function() {
				return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
			}
		},
		offsets: {
			get: function() {
				return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
			}
		}
	}), Object.defineProperties(qn.prototype, {
		dynamic: {
			set: function() {
				console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
			}
		},
		onUpdate: {
			value: function() {
				return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this
			}
		}
	}), Object.defineProperties(J.prototype, {
		wrapAround: {
			get: function() {
				console.warn("THREE.Material: .wrapAround has been removed.")
			},
			set: function() {
				console.warn("THREE.Material: .wrapAround has been removed.")
			}
		},
		wrapRGB: {
			get: function() {
				return console.warn("THREE.Material: .wrapRGB has been removed."), new X
			}
		}
	}), Object.defineProperties(Mi.prototype, {
		metal: {
			get: function() {
				return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1
			},
			set: function() {
				console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
			}
		}
	}), Object.defineProperties(Q.prototype, {
		derivatives: {
			get: function() {
				return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
			},
			set: function(t) {
				console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t
			}
		}
	}), Object.assign(pe.prototype, {
		getCurrentRenderTarget: function() {
			return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
		},
		supportsFloatTextures: function() {
			return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
		},
		supportsHalfFloatTextures: function() {
			return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
		},
		supportsStandardDerivatives: function() {
			return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
		},
		supportsCompressedTextureS3TC: function() {
			return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
		},
		supportsCompressedTexturePVRTC: function() {
			return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
		},
		supportsBlendMinMax: function() {
			return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
		},
		supportsVertexTextures: function() {
			return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
		},
		supportsInstancedArrays: function() {
			return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
		},
		enableScissorTest: function(t) {
			console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t)
		},
		initMaterial: function() {
			console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
		},
		addPrePlugin: function() {
			console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
		},
		addPostPlugin: function() {
			console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
		},
		updateShadowMap: function() {
			console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
		}
	}), Object.defineProperties(pe.prototype, {
		shadowMapEnabled: {
			get: function() {
				return this.shadowMap.enabled
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t
			}
		},
		shadowMapType: {
			get: function() {
				return this.shadowMap.type
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t
			}
		},
		shadowMapCullFace: {
			get: function() {
				return this.shadowMap.cullFace
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."), this.shadowMap.cullFace = t
			}
		}
	}), Object.defineProperties(rt.prototype, {
		cullFace: {
			get: function() {
				return this.renderReverseSided ? Nr : Ur
			},
			set: function(t) {
				var e = t !== Ur;
				console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to " + e + "."), this.renderReverseSided = e
			}
		}
	}), Object.defineProperties(a.prototype, {
		wrapS: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t
			}
		},
		wrapT: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t
			}
		},
		magFilter: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t
			}
		},
		minFilter: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t
			}
		},
		anisotropy: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t
			}
		},
		offset: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t
			}
		},
		repeat: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t
			}
		},
		format: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t
			}
		},
		type: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t
			}
		},
		generateMipmaps: {
			get: function() {
				return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
			},
			set: function(t) {
				console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t
			}
		}
	}), Bn.prototype.load = function(t) {
		console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
		var e = this;
		return (new Un).load(t, function(t) {
			e.setBuffer(t)
		}), this
	}, Gn.prototype.getData = function() {
		return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData()
	};
	var bs = {
			merge: function(t, e, i) {
				console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
				var n;
				e.isMesh && (e.matrixAutoUpdate && e.updateMatrix(), n = e.matrix, e = e.geometry), t.merge(e, n, i)
			},
			center: function(t) {
				return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), t.center()
			}
		},
		ws = {
			crossOrigin: void 0,
			loadTexture: function(t, e, i, n) {
				console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
				var r = new Ni;
				r.setCrossOrigin(this.crossOrigin);
				var a = r.load(t, i, void 0, n);
				return e && (a.mapping = e), a
			},
			loadTextureCube: function(t, e, i, n) {
				console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
				var r = new Ui;
				r.setCrossOrigin(this.crossOrigin);
				var a = r.load(t, i, void 0, n);
				return e && (a.mapping = e), a
			},
			loadCompressedTexture: function() {
				console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
			},
			loadCompressedTextureCube: function() {
				console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
			}
		};
	t.WebGLRenderTargetCube = o, t.WebGLRenderTarget = a, t.WebGLRenderer = pe, t.ShaderLib = Zo, t.UniformsLib = Xo, t.UniformsUtils = qo, t.ShaderChunk = Yo, t.FogExp2 = fe, t.Fog = me, t.Scene = ge, t.LensFlare = ve, t.Sprite = xe, t.LOD = _e, t.SkinnedMesh = Me, t.Skeleton = be, t.Bone = we, t.Mesh = Rt, t.LineSegments = Se, t.LineLoop = Ae, t.Line = Te, t.Points = Le, t.Group = Pe, t.VideoTexture = Ce, t.DataTexture = l, t.CompressedTexture = Ie, t.CubeTexture = u, t.CanvasTexture = Ue, t.DepthTexture = Ne, t.Texture = n, t.CompressedTextureLoader = Pi, t.DataTextureLoader = Ci, t.CubeTextureLoader = Ui, t.TextureLoader = Ni, t.ObjectLoader = ln, t.MaterialLoader = on, t.BufferGeometryLoader = sn, t.DefaultLoadingManager = rs, t.LoadingManager = Ri, t.JSONLoader = hn, t.ImageLoader = Ii, t.FontLoader = In, t.FileLoader = Li, t.Loader = cn, t.Cache = ns, t.AudioLoader = Un, t.SpotLightShadow = Bi, t.SpotLight = zi, t.PointLight = Gi, t.RectAreaLight = ji, t.HemisphereLight = Di, t.DirectionalLightShadow = Hi, t.DirectionalLight = Vi, t.AmbientLight = ki, t.LightShadow = Fi, t.Light = Oi, t.StereoCamera = Nn, t.PerspectiveCamera = Nt, t.OrthographicCamera = Ot, t.CubeCamera = On, t.ArrayCamera = Dn, t.Camera = Ut, t.AudioListener = Fn, t.PositionalAudio = zn, t.AudioContext = ps, t.AudioAnalyser = Gn, t.Audio = Bn, t.VectorKeyframeTrack = Ji, t.StringKeyframeTrack = tn, t.QuaternionKeyframeTrack = Ki, t.NumberKeyframeTrack = $i, t.ColorKeyframeTrack = nn, t.BooleanKeyframeTrack = en, t.PropertyMixer = Hn, t.PropertyBinding = kn, t.KeyframeTrack = rn, t.AnimationUtils = as, t.AnimationObjectGroup = jn, t.AnimationMixer = Xn, t.AnimationClip = an, t.Uniform = qn, t.InstancedBufferGeometry = Yn, t.BufferGeometry = At, t.GeometryIdCount = Tt, t.Geometry = St, t.InterleavedBufferAttribute = Zn, t.InstancedInterleavedBuffer = Qn, t.InterleavedBuffer = Jn, t.InstancedBufferAttribute = Kn, t.Face3 = ut, t.Object3D = ct, t.Raycaster = $n, t.Layers = st, t.EventDispatcher = e, t.Clock = ir, t.QuaternionLinearInterpolant = Qi, t.LinearInterpolant = qi, t.DiscreteInterpolant = Yi, t.CubicInterpolant = Xi, t.Interpolant = Wi, t.Triangle = lt, t.Math = Do, t.Spherical = nr, t.Cylindrical = rr, t.Plane = it, t.Frustum = nt, t.Sphere = tt, t.Ray = at, t.Matrix4 = h, t.Matrix3 = et, t.Box3 = $, t.Box2 = q, t.Line3 = ht, t.Euler = ot, t.Vector4 = r, t.Vector3 = c, t.Vector2 = i, t.Quaternion = s, t.Color = X, t.MorphBlendMesh = ar, t.ImmediateRenderObject = or, t.VertexNormalsHelper = sr, t.SpotLightHelper = cr, t.SkeletonHelper = hr, t.PointLightHelper = lr, t.RectAreaLightHelper = ur, t.HemisphereLightHelper = dr, t.GridHelper = pr, t.PolarGridHelper = fr, t.FaceNormalsHelper = mr, t.DirectionalLightHelper = gr, t.CameraHelper = vr, t.BoxHelper = yr, t.ArrowHelper = xr, t.AxisHelper = _r, t.CatmullRomCurve3 = wr, t.CubicBezierCurve3 = Mr, t.QuadraticBezierCurve3 = Er, t.LineCurve3 = Tr, t.ArcCurve = Sr, t.EllipseCurve = En, t.SplineCurve = Tn, t.CubicBezierCurve = Sn, t.QuadraticBezierCurve = An, t.LineCurve = wn, t.Shape = Ln, t.Path = Rn, t.ShapePath = Pn, t.Font = Cn, t.CurvePath = Mn, t.Curve = bn, t.ShapeUtils = ts, t.SceneUtils = _s, t.WireframeGeometry = Oe, t.ParametricGeometry = De, t.ParametricBufferGeometry = Fe, t.TetrahedronGeometry = Ge, t.TetrahedronBufferGeometry = He, t.OctahedronGeometry = Ve, t.OctahedronBufferGeometry = ke, t.IcosahedronGeometry = je, t.IcosahedronBufferGeometry = We, t.DodecahedronGeometry = Xe, t.DodecahedronBufferGeometry = qe, t.PolyhedronGeometry = Be, t.PolyhedronBufferGeometry = ze, t.TubeGeometry = Ye, t.TubeBufferGeometry = Ze, t.TorusKnotGeometry = Je, t.TorusKnotBufferGeometry = Qe, t.TorusGeometry = Ke, t.TorusBufferGeometry = $e, t.TextGeometry = ii, t.TextBufferGeometry = ni, t.SphereGeometry = ri, t.SphereBufferGeometry = ai, t.RingGeometry = oi, t.RingBufferGeometry = si, t.PlaneGeometry = Ct, t.PlaneBufferGeometry = It, t.LatheGeometry = ci, t.LatheBufferGeometry = hi, t.ShapeGeometry = li, t.ShapeBufferGeometry = ui, t.ExtrudeGeometry = ti, t.ExtrudeBufferGeometry = ei, t.EdgesGeometry = di, t.ConeGeometry = mi, t.ConeBufferGeometry = gi, t.CylinderGeometry = pi, t.CylinderBufferGeometry = fi, t.CircleGeometry = vi, t.CircleBufferGeometry = yi, t.BoxGeometry = Lt, t.BoxBufferGeometry = Pt, t.ShadowMaterial = xi, t.SpriteMaterial = ye, t.RawShaderMaterial = _i, t.ShaderMaterial = Q, t.PointsMaterial = Re, t.MeshPhysicalMaterial = wi, t.MeshStandardMaterial = bi, t.MeshPhongMaterial = Mi, t.MeshToonMaterial = Ei, t.MeshNormalMaterial = Ti, t.MeshLambertMaterial = Si, t.MeshDepthMaterial = K, t.MeshBasicMaterial = dt, t.LineDashedMaterial = Ai, t.LineBasicMaterial = Ee, t.Material = J, t.Float64BufferAttribute = wt, t.Float32BufferAttribute = bt, t.Uint32BufferAttribute = _t, t.Int32BufferAttribute = xt, t.Uint16BufferAttribute = yt, t.Int16BufferAttribute = vt, t.Uint8ClampedBufferAttribute = gt, t.Uint8BufferAttribute = mt, t.Int8BufferAttribute = ft, t.BufferAttribute = pt, t.REVISION = Pr, t.MOUSE = Cr, t.CullFaceNone = Ir, t.CullFaceBack = Ur, t.CullFaceFront = Nr, t.CullFaceFrontBack = 3, t.FrontFaceDirectionCW = Or, t.FrontFaceDirectionCCW = 1, t.BasicShadowMap = 0, t.PCFShadowMap = Dr, t.PCFSoftShadowMap = Fr, t.FrontSide = Br, t.BackSide = zr, t.DoubleSide = Gr, t.FlatShading = Hr, t.SmoothShading = Vr, t.NoColors = kr, t.FaceColors = jr, t.VertexColors = Wr, t.NoBlending = Xr, t.NormalBlending = qr, t.AdditiveBlending = Yr, t.SubtractiveBlending = Zr, t.MultiplyBlending = Jr, t.CustomBlending = Qr, t.AddEquation = Kr, t.SubtractEquation = $r, t.ReverseSubtractEquation = ta, t.MinEquation = ea, t.MaxEquation = ia, t.ZeroFactor = na, t.OneFactor = ra, t.SrcColorFactor = aa, t.OneMinusSrcColorFactor = oa, t.SrcAlphaFactor = sa, t.OneMinusSrcAlphaFactor = ca, t.DstAlphaFactor = ha, t.OneMinusDstAlphaFactor = la, t.DstColorFactor = ua, t.OneMinusDstColorFactor = da, t.SrcAlphaSaturateFactor = pa, t.NeverDepth = fa, t.AlwaysDepth = ma, t.LessDepth = ga, t.LessEqualDepth = va, t.EqualDepth = ya, t.GreaterEqualDepth = xa, t.GreaterDepth = _a, t.NotEqualDepth = ba, t.MultiplyOperation = wa, t.MixOperation = Ma, t.AddOperation = Ea, t.NoToneMapping = Ta, t.LinearToneMapping = Sa, t.ReinhardToneMapping = Aa, t.Uncharted2ToneMapping = Ra, t.CineonToneMapping = La, t.UVMapping = 300, t.CubeReflectionMapping = Pa, t.CubeRefractionMapping = Ca, t.EquirectangularReflectionMapping = Ia, t.EquirectangularRefractionMapping = Ua, t.SphericalReflectionMapping = Na, t.CubeUVReflectionMapping = Oa, t.CubeUVRefractionMapping = Da, t.RepeatWrapping = Fa, t.ClampToEdgeWrapping = Ba, t.MirroredRepeatWrapping = za, t.NearestFilter = Ga, t.NearestMipMapNearestFilter = Ha, t.NearestMipMapLinearFilter = Va, t.LinearFilter = ka, t.LinearMipMapNearestFilter = ja, t.LinearMipMapLinearFilter = Wa, t.UnsignedByteType = Xa, t.ByteType = qa, t.ShortType = Ya, t.UnsignedShortType = Za, t.IntType = Ja, t.UnsignedIntType = Qa, t.FloatType = Ka, t.HalfFloatType = $a, t.UnsignedShort4444Type = to, t.UnsignedShort5551Type = eo, t.UnsignedShort565Type = io, t.UnsignedInt248Type = no, t.AlphaFormat = ro, t.RGBFormat = ao, t.RGBAFormat = oo, t.LuminanceFormat = so, t.LuminanceAlphaFormat = co, t.RGBEFormat = ho, t.DepthFormat = lo, t.DepthStencilFormat = uo, t.RGB_S3TC_DXT1_Format = po, t.RGBA_S3TC_DXT1_Format = fo, t.RGBA_S3TC_DXT3_Format = mo, t.RGBA_S3TC_DXT5_Format = go, t.RGB_PVRTC_4BPPV1_Format = vo, t.RGB_PVRTC_2BPPV1_Format = yo, t.RGBA_PVRTC_4BPPV1_Format = xo, t.RGBA_PVRTC_2BPPV1_Format = _o, t.RGB_ETC1_Format = bo, t.LoopOnce = 2200, t.LoopRepeat = wo, t.LoopPingPong = 2202, t.InterpolateDiscrete = 2300, t.InterpolateLinear = 2301, t.InterpolateSmooth = 2302, t.ZeroCurvatureEnding = Mo, t.ZeroSlopeEnding = 2401, t.WrapAroundEnding = 2402, t.TrianglesDrawMode = Eo, t.TriangleStripDrawMode = To, t.TriangleFanDrawMode = So, t.LinearEncoding = Ao, t.sRGBEncoding = Ro, t.GammaEncoding = Lo, t.RGBEEncoding = Po, t.LogLuvEncoding = 3003, t.RGBM7Encoding = Co, t.RGBM16Encoding = Io, t.RGBDEncoding = Uo, t.BasicDepthPacking = No, t.RGBADepthPacking = Oo, t.CubeGeometry = Lt, t.Face4 = function(t, e, i, n, r, a, o) {
		return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new ut(t, e, i, r, a, o)
	}, t.LineStrip = 0, t.LinePieces = 1, t.MeshFaceMaterial = function(t) {
		return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."), t
	}, t.MultiMaterial = function(t) {
		return void 0 === t && (t = []), console.warn("THREE.MultiMaterial has been removed. Use an Array instead."), t.isMultiMaterial = !0, t.materials = t, t.clone = function() {
			return t.slice()
		}, t
	}, t.PointCloud = function(t, e) {
		return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new Le(t, e)
	}, t.Particle = function(t) {
		return console.warn("THREE.Particle has been renamed to THREE.Sprite."), new xe(t)
	}, t.ParticleSystem = function(t, e) {
		return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new Le(t, e)
	}, t.PointCloudMaterial = function(t) {
		return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new Re(t)
	}, t.ParticleBasicMaterial = function(t) {
		return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new Re(t)
	}, t.ParticleSystemMaterial = function(t) {
		return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new Re(t)
	}, t.Vertex = function(t, e, i) {
		return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), new c(t, e, i)
	}, t.DynamicBufferAttribute = function(t, e) {
		return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."), new pt(t, e).setDynamic(!0)
	}, t.Int8Attribute = function(t, e) {
		return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."), new ft(t, e)
	}, t.Uint8Attribute = function(t, e) {
		return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."), new mt(t, e)
	}, t.Uint8ClampedAttribute = function(t, e) {
		return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."), new gt(t, e)
	}, t.Int16Attribute = function(t, e) {
		return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."), new vt(t, e)
	}, t.Uint16Attribute = function(t, e) {
		return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."), new yt(t, e)
	}, t.Int32Attribute = function(t, e) {
		return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."), new xt(t, e)
	}, t.Uint32Attribute = function(t, e) {
		return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."), new _t(t, e)
	}, t.Float32Attribute = function(t, e) {
		return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."), new bt(t, e)
	}, t.Float64Attribute = function(t, e) {
		return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."), new wt(t, e)
	}, t.ClosedSplineCurve3 = Ar, t.SplineCurve3 = Rr, t.Spline = Lr, t.BoundingBoxHelper = function(t, e) {
		return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."), new yr(t, e)
	}, t.EdgesHelper = function(t, e) {
		return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."), new Se(new di(t.geometry), new Ee({
			color: void 0 !== e ? e : 16777215
		}))
	}, t.WireframeHelper = function(t, e) {
		return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."), new Se(new Oe(t.geometry), new Ee({
			color: void 0 !== e ? e : 16777215
		}))
	}, t.XHRLoader = function(t) {
		return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."), new Li(t)
	}, t.BinaryTextureLoader = function(t) {
		return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."), new Ci(t)
	}, t.GeometryUtils = bs, t.ImageUtils = ws, t.Projector = function() {
		console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."), this.projectVector = function(t, e) {
			console.warn("THREE.Projector: .projectVector() is now vector.project()."), t.project(e)
		}, this.unprojectVector = function(t, e) {
			console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), t.unproject(e)
		}, this.pickingRay = function() {
			console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
		}
	}, t.CanvasRenderer = function() {
		console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"), this.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), this.clear = function() {}, this.render = function() {}, this.setClearColor = function() {}, this.setSize = function() {}
	}, Object.defineProperty(t, "__esModule", {
		value: !0
	})
});