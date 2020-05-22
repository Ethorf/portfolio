export const webAnimYAxis = () => {
	let y = 0;
	if (window.innerWidth >= 1200) {
		y = '-100px';
	} else if (window.innerWidth >= 768 && window.innerWidth <= 1199) {
		y = '-110px';
	} else {
		y = '-50px';
	}
	return y;
};
export const webAnimXAxis = () => {
	let x = 0;
	if (window.innerWidth >= 1200) {
		x = '-10%';
	} else if (window.innerWidth >= 768 && window.innerWidth <= 1199) {
		x = '-5%';
	} else {
		x = '3%';
	}
	return x;
};
export const musicAnimYAxis = () => {
	let y = 0;
	if (window.innerWidth >= 768) {
		y = '-90px';
	} else {
		y = '-50px';
	}
	return y;
};
export const musicAnimXAxis = () => {
	let x = 0;
	if (window.innerWidth >= 1200) {
		x = '-5%';
	} else if (window.innerWidth >= 768 && window.innerWidth <= 1199) {
		x = '2%';
	} else {
		x = '3%';
	}
	return x;
};
export const engineerAnimYAxis = () => {
	let y = 0;
	if (window.innerWidth >= 993) {
		y = '-70px';
	} else if (window.innerWidth >= 768 && window.innerWidth <= 992) {
		y = '-44px';
	} else {
		y = '-50px';
	}
	return y;
};
export const headersBigFontSize = () => {
	let size;

	if (window.innerWidth >= 1200) {
		size = '30px';
	} else if (window.innerWidth >= 993 && window.innerWidth < 1199) {
		size = '26px';
	} else if (window.innerWidth >= 768 && window.innerWidth < 992) {
		size = '25px';
	} else if (window.innerWidth <= 767) {
		size = '25px';
	}
	return size;
};
export const headersSmallFontSize = () => {
	let size;

	if (window.innerWidth >= 1200) {
		size = '24px';
	} else if (window.innerWidth >= 993 && window.innerWidth < 1199) {
		size = '21px';
	} else if (window.innerWidth >= 768 && window.innerWidth < 992) {
		size = '16px';
	} else if (window.innerWidth <= 767) {
		size = '18px';
	}
	return size;
};

export const musicAnimSize = () => {
	let x = 0;
	if (window.innerWidth >= 1800) {
		x = '-14vw';
	} else if (window.innerWidth >= 1500 && window.innerWidth < 1799) {
		x = '-16vw';
	} else if (window.innerWidth >= 1350 && window.innerWidth < 1500) {
		x = '-18vw';
	} else if (window.innerWidth >= 1200 && window.innerWidth < 1349) {
		x = '-20vw';
	} else if (window.innerWidth >= 993 && window.innerWidth < 1199) {
		x = '-20vw';
	} else if (window.innerWidth >= 768 && window.innerWidth < 992) {
		x = '-20vw';
	} else if (window.innerWidth >= 426 && window.innerWidth < 767) {
		x = '-20vw';
	}
	return x;
};

export const dividerNormalSize = () => {
	let x = 0;
	if (window.innerWidth >= 1200) {
		x = '2.8rem';
	} else if (window.innerWidth >= 993 && window.innerWidth < 1199) {
		x = '2.4rem';
	} else {
		x = '1.8rem';
	}
	return x;
};
