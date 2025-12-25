import { TIERS } from "./constants";
import Card from "./Card";

export default function Pricing() {
	return (
		<section className="py-20">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{TIERS.map((item) => (
						<Card key={item.id} data={item} />
					))}
				</div>
			</div>
		</section>
	);
}
