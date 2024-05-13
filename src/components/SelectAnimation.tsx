import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import sampleAnimations from "@/animationSample";

export function SelectAnimation({ animationSelected, setAnimation }) {
	return (
		<Select onValueChange={setAnimation} value={animationSelected}>
			<SelectTrigger className="w-[250px]">
				<SelectValue placeholder="Select animation show card" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Animation</SelectLabel>
					{Object.keys(sampleAnimations).map((sample) => {
						return <SelectItem value={sample}>{sample}</SelectItem>;
					})}
				</SelectGroup>
			</SelectContent>
		</Select>
	);
}
