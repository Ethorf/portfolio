export const webAnimSize = () => {
	let x = 0;
	if (window.innerWidth >= 1800) {
		x = '17vw';
	} else if (window.innerWidth >= 1500 && window.innerWidth < 1799) {
		x = '18.5vw';
	} else if (window.innerWidth >= 1350 && window.innerWidth < 1500) {
		x = '17vw';
	} else if (window.innerWidth >= 1200 && window.innerWidth < 1349) {
		x = '27vw';
	} else if (window.innerWidth >= 993 && window.innerWidth < 1199) {
		x = '24vw';
	} else if (window.innerWidth >= 768 && window.innerWidth < 992) {
		x = '24vw';
	} else if (window.innerWidth >= 426 && window.innerWidth < 767) {
		x = '20vw';
	}
	return x;
};
export const headersBigFontSize = () => {
	let size;

	if (window.innerWidth >= 1200) {
		size = '30px';
	} else if (window.innerWidth >= 993 && window.innerWidth < 1199) {
		size = '30px';
	} else if (window.innerWidth >= 768 && window.innerWidth < 992) {
		size = '34px';
	} else if (window.innerWidth <= 767) {
		size = '34px';
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
export const webAnimSizeMobile = () => {
	let x = 0;
	if (window.innerWidth >= 600 && window.innerWidth < 767) {
		x = '14vw';
	} else if (window.innerWidth >= 425 && window.innerWidth < 599) {
		x = '17vw';
	} else if (window.innerWidth >= 375 && window.innerWidth < 425) {
		x = '17vw';
	} else if (window.innerWidth < 374) {
		x = '19vw';
	}
	return x;
};
export const musicAnimSizeMobile = () => {
	let x = 0;
	if (window.innerWidth >= 600 && window.innerWidth < 767) {
		x = '-14vw';
	} else if (window.innerWidth >= 425 && window.innerWidth < 599) {
		x = '-18vw';
	} else if (window.innerWidth >= 375 && window.innerWidth < 425) {
		x = '-20vw';
	} else if (window.innerWidth >= 320 && window.innerWidth < 374) {
		x = '-25vw';
	}
	return x;
};
