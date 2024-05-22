import {useEffect, useMemo} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {type Container, type ISourceOptions} from "@tsparticles/engine";
import {loadSlim} from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

const ParticlesContainer = ({init, setInit, className}) => {

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                // color: "#fff",
                image: "url('https://marketplace.canva.com/EAFCO6pfthY/1/0/1600w/canva-blue-green-watercolor-linktree-background-F2CyNS5sQdM.jpg')",
                repeat: "no-repeat",
                size: "cover",
            },
            styles: {
                height: "100%",
            },
            particles: {
                color: {
                    value: "#000",
                },
                number: {
                    value: 100,
                },
                links: {
                    distance: 150,
                    enable: true,
                    color: "#000",
                },
                move: {
                    enable: true,
                },
                size: {
                    value: 2,
                },
                shape: {
                    type: "circle",
                },
            },
            fullScreen: false,
        }),
        []
    );

    if (init) {
        return <Particles className={className} id="tsparticles" particlesLoaded={particlesLoaded} options={options} />;
    }

    return <></>;
};

export default ParticlesContainer;