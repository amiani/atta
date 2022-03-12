const defaultFonts = {
	primary: "'Volkorn', serif",
	control: "sans-serif",
}

export interface Theme {
	name: string;
	fonts: {
		primary: string;
		control: string;
	}
}

const themes: { [key: string]: Theme } = {
	light: {
		name: 'light',
		fonts: { ...defaultFonts }
	}
}

export default themes