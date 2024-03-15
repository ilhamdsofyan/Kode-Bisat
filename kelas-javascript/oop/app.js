// START Function dan property function
function convertColor(r, g, b) {
  const color = {};

  color.r = r;
  color.g = g;
  color.b = b;

  color.rgb = () => {
    const { r, g, b } = this;

    return `rgb(${r}, ${g}, ${b})`;
  };

  color.hex = () => {
    const { r, g, b } = this;

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };

  return color;
}
// END Function dan property function

// START Function dan prototype
function color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

color.prototype.rgb = function () {
  const { r, g, b } = this;

  return `rgb(${r}, ${g}, ${b})`;
};

color.prototype.rgba = function (a = 1.0) {
  const { r, g, b } = this;

  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

color.prototype.hex = function () {
  const { r, g, b } = this;

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
};
// END Function dan prototype

// START Object class
class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;

    this.calcHsl();
  }

  rgb() {
    const { r, g, b } = this;

    return `rgb(${r}, ${g}, ${b})`;
  }

  rgba(a = 1.0) {
    const { r, g, b } = this;

    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }

  hex() {
    const { r, g, b } = this;

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }

  calcHsl() {
    let { r, g, b } = this;

    r /= 255;
    g /= 255;
    b /= 255;

    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;

    if (delta == 0) h = 0;
    else if (cmax == r) h = ((g - b) / delta) % 6;
    else if (cmax == g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    if (h < 0) h += 360;

    l = (cmax + cmin) / 2;

    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    this.h = h;
    this.s = s;
    this.l = l;
  }

  hsl() {
    const { h, s, l } = this;

    return `hsl(${h}, ${s}%, ${l}%)`;
  }

  fullySaturated() {
    const { h, l } = this;

    return `hsl(${h}, 100%, ${l}%)`;
  }

  hslOpposite() {
    const { h, s, l } = this;
    const newHue = (h + 180) % 360;

    return `hsl(${newHue}, ${s}%, ${l}%)`;
  }
}
// END Object class

// START Class inheritance
class Peliharaan {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  makan() {
    return `${this.name} sudah pasti makan`;
  }
}

class Kucing extends Peliharaan {
  meong() {
    return "Meong";
  }
}

class Anjing extends Peliharaan {
  menggonggong() {
    return "Guk guk!";
  }
}
// END Class inheritance
