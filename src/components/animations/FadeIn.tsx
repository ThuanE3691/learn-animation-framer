import { ReactNode } from "react";
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
