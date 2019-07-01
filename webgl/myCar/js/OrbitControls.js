THREE.OrbitControls = function(e, t) {
	function n() {
		return 2 * Math.PI / 60 / 60 * x.autoRotateSpeed
	}

	function o() {
		return Math.pow(.95, x.zoomSpeed)
	}

	function a(e) {
		z.theta -= e
	}

	function i(e) {
		z.phi -= e
	}

	function r(e) {
		x.object instanceof THREE.PerspectiveCamera ? F /= e : x.object instanceof THREE.OrthographicCamera ? (x.object.zoom = Math.max(x.minZoom, Math.min(x.maxZoom, x.object.zoom * e)), x.object.updateProjectionMatrix(), X = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), x.enableZoom = !1)
	}

	function s(e) {
		x.object instanceof THREE.PerspectiveCamera ? F *= e : x.object instanceof THREE.OrthographicCamera ? (x.object.zoom = Math.max(x.minZoom, Math.min(x.maxZoom, x.object.zoom / e)), x.object.updateProjectionMatrix(), X = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), x.enableZoom = !1)
	}

	function c(e) {
		K.set(e.clientX, e.clientY)
	}

	function u(e) {
		Q.set(e.clientX, e.clientY)
	}

	function m(e) {
		G.set(e.clientX, e.clientY)
	}

	function l(e) {
		_.set(e.clientX, e.clientY), B.subVectors(_, K);
		var t = x.domElement === document ? x.domElement.body : x.domElement;
		a(2 * Math.PI * B.x / t.clientWidth * x.rotateSpeed), i(2 * Math.PI * B.y / t.clientHeight * x.rotateSpeed), K.copy(_), x.update()
	}

	function d(e) {
		J.set(e.clientX, e.clientY), $.subVectors(J, Q), $.y > 0 ? r(o()) : $.y < 0 && s(o()), Q.copy(J), x.update()
	}

	function E(e) {
		W.set(e.clientX, e.clientY), q.subVectors(W, G), ne(q.x, q.y), G.copy(W), x.update()
	}

	function h(e) {
		// var tween_mouse = new TWEEN.Tween(Y)
		// .to({theta:Y.theta + Math.PI / 3},1000)
		// .start();
		
	}

	function p(e) {
		e.deltaY < 0 ? s(o()) : e.deltaY > 0 && r(o()), x.update()
	}

	function b(e) {
		switch (e.keyCode) {
			case x.keys.UP:
				ne(0, x.keyPanSpeed), x.update();
				break;
			case x.keys.BOTTOM:
				ne(0, -x.keyPanSpeed), x.update();
				break;
			case x.keys.LEFT:
				ne(x.keyPanSpeed, 0), x.update();
				break;
			case x.keys.RIGHT:
				ne(-x.keyPanSpeed, 0), x.update()
		}
	}

	function f(e) {
		K.set(e.touches[0].pageX, e.touches[0].pageY)
	}

	function T(e) {
		var t = e.touches[0].pageX - e.touches[1].pageX,
			n = e.touches[0].pageY - e.touches[1].pageY,
			o = Math.sqrt(t * t + n * n);
		Q.set(0, o)
	}

	function g(e) {
		G.set(e.touches[0].pageX, e.touches[0].pageY)
	}

	function R(e) {
		_.set(e.touches[0].pageX, e.touches[0].pageY), B.subVectors(_, K);
		var t = x.domElement === document ? x.domElement.body : x.domElement;
		a(2 * Math.PI * B.x / t.clientWidth * x.rotateSpeed), i(2 * Math.PI * B.y / t.clientHeight * x.rotateSpeed), K.copy(_), x.update()
	}

	function v(e) {
		var t = e.touches[0].pageX - e.touches[1].pageX,
			n = e.touches[0].pageY - e.touches[1].pageY,
			a = Math.sqrt(t * t + n * n);
		J.set(0, a), $.subVectors(J, Q), $.y > 0 ? s(o()) : $.y < 0 && r(o()), Q.copy(J), x.update()
	}

	function O(e) {
		W.set(e.touches[0].pageX, e.touches[0].pageY), q.subVectors(W, G), ne(q.x, q.y), G.copy(W), x.update()
	}

	function H(e) {}

	function y(e) {
		if (!1 !== x.enabled) {
			if (e.preventDefault(), e.button === x.mouseButtons.ORBIT) {
				if (!1 === x.enableRotate) return;
				c(e), S = V.ROTATE
			} else if (e.button === x.mouseButtons.ZOOM) {
				if (!1 === x.enableZoom) return;
				u(e), S = V.DOLLY
			} else if (e.button === x.mouseButtons.PAN) {
				if (!1 === x.enablePan) return;
				m(e), S = V.PAN
			}
			S !== V.NONE && (document.addEventListener("mousemove", w, !1), document.addEventListener("mouseup", P, !1), x.dispatchEvent(D))
		}
	}

	function w(e) {
		if (!1 !== x.enabled)
			if (e.preventDefault(), S === V.ROTATE) {
				if (!1 === x.enableRotate) return;
				l(e)
			} else if (S === V.DOLLY) {
			if (!1 === x.enableZoom) return;
			d(e)
		} else if (S === V.PAN) {
			if (!1 === x.enablePan) return;
			E(e)
		}
	}

	function P(e) {
		!1 !== x.enabled && (h(e), document.removeEventListener("mousemove", w, !1), document.removeEventListener("mouseup", P, !1), x.dispatchEvent(U), S = V.NONE)
	}

	function j(e) {
		!1 === x.enabled || !1 === x.enableZoom || S !== V.NONE && S !== V.ROTATE || (e.preventDefault(), e.stopPropagation(), p(e), x.dispatchEvent(D), x.dispatchEvent(U))
	}

	function C(e) {
		!1 !== x.enabled && !1 !== x.enableKeys && !1 !== x.enablePan && b(e)
	}

	function M(e) {
		if (!1 !== x.enabled) {
			switch (e.touches.length) {
				case 1:
					if (!1 === x.enableRotate) return;
					f(e), S = V.TOUCH_ROTATE;
					break;
				case 2:
					if (!1 === x.enableZoom) return;
					T(e), S = V.TOUCH_DOLLY;
					break;
				case 3:
					if (!1 === x.enablePan) return;
					g(e), S = V.TOUCH_PAN;
					break;
				default:
					S = V.NONE
			}
			S !== V.NONE && x.dispatchEvent(D)
		}
	}

	function L(e) {
		if (!1 !== x.enabled) switch (e.preventDefault(), e.stopPropagation(), e.touches.length) {
			case 1:
				if (!1 === x.enableRotate) return;
				if (S !== V.TOUCH_ROTATE) return;
				R(e);
				break;
			case 2:
				if (!1 === x.enableZoom) return;
				if (S !== V.TOUCH_DOLLY) return;
				v(e);
				break;
			case 3:
				if (!1 === x.enablePan) return;
				if (S !== V.TOUCH_PAN) return;
				O(e);
				break;
			default:
				S = V.NONE
		}
	}

	function N(e) {
		!1 !== x.enabled && (H(e), x.dispatchEvent(U), S = V.NONE)
	}

	function A(e) {
		e.preventDefault()
	}
	this.object = e, this.domElement = void 0 !== t ? t : document, this.enabled = !0, this.target = new THREE.Vector3(0,0,0), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .25, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.enableKeys = !0, this.keys = {
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		BOTTOM: 40
	}, this.mouseButtons = {
		ORBIT: THREE.MOUSE.LEFT,
		ZOOM: THREE.MOUSE.MIDDLE,
		PAN: THREE.MOUSE.RIGHT
	}, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = function() {
		return Y.phi
	}, this.getAzimuthalAngle = function() {
		return Y.theta
	}, this.reset = function() {
		x.target.copy(x.target0), x.object.position.copy(x.position0), x.object.zoom = x.zoom0, x.object.updateProjectionMatrix(), x.dispatchEvent(k), x.update(), S = V.NONE
	}, this.update = function() {
		var t = new THREE.Vector3,
			o = (new THREE.Quaternion).setFromUnitVectors(e.up, new THREE.Vector3(0, 1, 0)),
			i = o.clone().inverse(),
			r = new THREE.Vector3,
			s = new THREE.Quaternion;
		return function() {
			var e = x.object.position;
			return t.copy(e).sub(x.target), t.applyQuaternion(o), Y.setFromVector3(t), x.autoRotate && S === V.NONE && a(n()), Y.theta += z.theta, Y.phi += z.phi, Y.theta = Math.max(x.minAzimuthAngle, Math.min(x.maxAzimuthAngle, Y.theta)), Y.phi = Math.max(x.minPolarAngle, Math.min(x.maxPolarAngle, Y.phi)), Y.makeSafe(), Y.radius *= F, Y.radius = Math.max(x.minDistance, Math.min(x.maxDistance, Y.radius)), x.target.add(I), t.setFromSpherical(Y), t.applyQuaternion(i), e.copy(x.target).add(t), x.object.lookAt(x.target), !0 === x.enableDamping ? (z.theta *= 1 - x.dampingFactor, z.phi *= 1 - x.dampingFactor) : z.set(0, 0, 0), F = 1, I.set(0, 0, 0), !!(X || r.distanceToSquared(x.object.position) > Z || 8 * (1 - s.dot(x.object.quaternion)) > Z) && (x.dispatchEvent(k), r.copy(x.object.position), s.copy(x.object.quaternion), X = !1, !0)
		}
	}(), this.dispose = function() {
		x.domElement.removeEventListener("contextmenu", A, !1), x.domElement.removeEventListener("mousedown", y, !1), x.domElement.removeEventListener("wheel", j, !1), x.domElement.removeEventListener("touchstart", M, !1), x.domElement.removeEventListener("touchend", N, !1), x.domElement.removeEventListener("touchmove", L, !1), document.removeEventListener("mousemove", w, !1), document.removeEventListener("mouseup", P, !1), window.removeEventListener("keydown", C, !1)
	};
	var x = this,
		k = {
			type: "change"
		},
		D = {
			type: "start"
		},
		U = {
			type: "end"
		},
		V = {
			NONE: -1,
			ROTATE: 0,
			DOLLY: 1,
			PAN: 2,
			TOUCH_ROTATE: 3,
			TOUCH_DOLLY: 4,
			TOUCH_PAN: 5
		},
		S = V.NONE,
		Z = 1e-6,
		Y = new THREE.Spherical,
		z = new THREE.Spherical,
		F = 1,
		I = new THREE.Vector3,
		X = !1,
		K = new THREE.Vector2,
		_ = new THREE.Vector2,
		B = new THREE.Vector2,
		G = new THREE.Vector2,
		W = new THREE.Vector2,
		q = new THREE.Vector2,
		Q = new THREE.Vector2,
		J = new THREE.Vector2,
		$ = new THREE.Vector2,
		ee = function() {
			var e = new THREE.Vector3;
			return function(t, n) {
				e.setFromMatrixColumn(n, 0), e.multiplyScalar(-t), I.add(e)
			}
		}(),
		te = function() {
			var e = new THREE.Vector3;
			return function(t, n) {
				e.setFromMatrixColumn(n, 1), e.multiplyScalar(t), I.add(e)
			}
		}(),
		ne = function() {
			var e = new THREE.Vector3;
			return function(t, n) {
				var o = x.domElement === document ? x.domElement.body : x.domElement;
				if (x.object instanceof THREE.PerspectiveCamera) {
					var a = x.object.position;
					e.copy(a).sub(x.target);
					var i = e.length();
					i *= Math.tan(x.object.fov / 2 * Math.PI / 180), ee(2 * t * i / o.clientHeight, x.object.matrix), te(2 * n * i / o.clientHeight, x.object.matrix)
				} else x.object instanceof THREE.OrthographicCamera ? (ee(t * (x.object.right - x.object.left) / x.object.zoom / o.clientWidth, x.object.matrix), te(n * (x.object.top - x.object.bottom) / x.object.zoom / o.clientHeight, x.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), x.enablePan = !1)
			}
		}();
	x.domElement.addEventListener("contextmenu", A, !1), x.domElement.addEventListener("mousedown", y, !1), x.domElement.addEventListener("wheel", j, !1), x.domElement.addEventListener("touchstart", M, !1), x.domElement.addEventListener("touchend", N, !1), x.domElement.addEventListener("touchmove", L, !1), window.addEventListener("keydown", C, !1), this.update()
}, THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype), THREE.OrbitControls.prototype.constructor = THREE.OrbitControls, Object.defineProperties(THREE.OrbitControls.prototype, {
	center: {
		get: function() {
			return console.warn("THREE.OrbitControls: .center has been renamed to .target"), this.target
		}
	},
	noZoom: {
		get: function() {
			return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."), !this.enableZoom
		},
		set: function(e) {
			console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."), this.enableZoom = !e
		}
	},
	noRotate: {
		get: function() {
			return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."), !this.enableRotate
		},
		set: function(e) {
			console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."), this.enableRotate = !e
		}
	},
	noPan: {
		get: function() {
			return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."), !this.enablePan
		},
		set: function(e) {
			console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."), this.enablePan = !e
		}
	},
	noKeys: {
		get: function() {
			return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."), !this.enableKeys
		},
		set: function(e) {
			console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."), this.enableKeys = !e
		}
	},
	staticMoving: {
		get: function() {
			return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."), !this.enableDamping
		},
		set: function(e) {
			console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."), this.enableDamping = !e
		}
	},
	dynamicDampingFactor: {
		get: function() {
			return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."), this.dampingFactor
		},
		set: function(e) {
			console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."), this.dampingFactor = e
		}
	}
});