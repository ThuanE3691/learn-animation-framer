import FadeIn from "./components/animations/FadeIn";
import ScaleUp from "./components/animations/ScaleUp";
import SlideRight from "./components/animations/SlideRight";

type Animation = {
	component: any;
	code: string;
};

const sampleAnimations: Record<string, Animation> = {
	"Fade In": {
		component: FadeIn,
		code: `import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
   children: ReactNode | ReactNode[];
   className: string;
};

const FadeIn = ({ children, className, ...props }: Props) => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
         className={className}
         {...props}
      >
         {children}
      </motion.div>
   );
};

export default FadeIn;
`,
	},
	"Scale Up": {
		component: ScaleUp,
		code: `import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
	children: ReactNode | ReactNode[];
	className: string;
};

const ScaleUp = ({ children, className, ...props }: Props) => {
	return (
		<motion.div
			initial={{ scale: 0 }}
			whileInView={{ scale: 1 }}
			transition={{ duration: 0.5 }}
			className={className}
			{...props}
		>
			{children}
		</motion.div>
	);
};

export default ScaleUp;
`,
	},
	"Slide Right": {
		component: SlideRight,
		code: `import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
	children: ReactNode | ReactNode[];
	className: string;
};

const SlideRight = ({ children, className, ...props }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0, translateX: "-16rem" }}
			whileInView={{ opacity: 1, translateX: 0 }}
			transition={{ duration: 0.5 }}
			className={className}
			{...props}
		>
			{children}
		</motion.div>
	);
};

export default SlideRight;
`,
	},
};

export default sampleAnimations;
