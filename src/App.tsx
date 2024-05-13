import { CardDemo } from "./components/CardDemo";
import { CodeBlock } from "react-code-block";
import { useCopyToClipboard } from "react-use";
import animationSample from "./animationSample";
import { useState } from "react";
import { SelectAnimation } from "./components/SelectAnimation";

function App() {
	const [animationSelected, setAnimationSelected] = useState<string>("Fade In");
	const [state, copyToClipboard] = useCopyToClipboard();

	const copyCode = () => {
		// Logic to copy `code`
		copyToClipboard(animationSample[animationSelected].code);
	};

	const AnimationWrap = animationSample[animationSelected].component;

	return (
		<div className="h-[1200px] relative">
			<div className="flex flex-col items-center justify-center w-full">
				<h1 className="text-4xl italic">Animation Framer</h1>
				<h4 className="">By Thuận</h4>
			</div>
			<div className="flex mt-6 ml-6">
				<div className="relative">
					<CodeBlock
						code={animationSample[animationSelected].code}
						language="tsx"
					>
						<CodeBlock.Code className="p-6 bg-gray-900 shadow-lg rounded-xl w-[700px] relative">
							<div className="table-row">
								<CodeBlock.LineNumber className="table-cell pr-4 text-sm text-right text-gray-500 select-none" />
								<CodeBlock.LineContent className="table-cell">
									<CodeBlock.Token />
								</CodeBlock.LineContent>
							</div>
						</CodeBlock.Code>
						<button
							className="bg-white rounded-full px-3.5 py-1.5 absolute top-2 right-2 text-sm font-semibold"
							onClick={copyCode}
						>
							{state.value ? "Copied!" : "Copy code"}
						</button>
					</CodeBlock>
				</div>

				<div className="ml-12">
					<SelectAnimation
						animationSelected={animationSelected}
						setAnimation={setAnimationSelected}
					></SelectAnimation>
					<div className="mt-4 font-mono text-3xl italic font-bold">
						Scroll down to see animation
					</div>
				</div>
			</div>
			<div className="w-[700px] mt-16 flex justify-center demo"></div>
			<AnimationWrap className="flex justify-center w-full translate-y-[100px]">
				<CardDemo></CardDemo>
			</AnimationWrap>
		</div>
	);
}

export default App;
