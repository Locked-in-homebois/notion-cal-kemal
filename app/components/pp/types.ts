export interface PricingTier {
	id: string;
	plan: string;
	price: string;
	pricedesc: string;
	desc: string;
	btn: {
		text: {
			lable: string;
			color: string;
		};
		color: string;
	};

	thingiesinbox: string[];

	features: string[];
	featuresHeader?: string;
}
