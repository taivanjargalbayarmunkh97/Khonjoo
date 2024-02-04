import { useEffect, useState } from 'react';
import NProgress from 'nprogress';
// next

//
import { Progress } from '@nextui-org/react';

// ----------------------------------------------------------------------

export default function ProgressBar() {
    const [progressValue, setProgressValue] = useState(0);

    useEffect(() => {
        NProgress.configure({ showSpinner: false });

        const handleAnchorClick = (event) => {
            const targetUrl = event.currentTarget.href;
            const currentUrl = window.location.href;
            if (targetUrl !== currentUrl) {
                NProgress.start();
                startProgress();
            }
        };

        const handleMutation = () => {
            const anchorElements = document.querySelectorAll('a[href]');

            anchorElements.forEach((anchor) => anchor.addEventListener('click', handleAnchorClick));
        };

        const mutationObserver = new MutationObserver(handleMutation);

        mutationObserver.observe(document, { childList: true, subtree: true });

        window.history.pushState = new Proxy(window.history.pushState, {
            apply: (target, thisArg, argArray) => {
                NProgress.done();
                finishProgress();
                return target.apply(thisArg, argArray);
            },
        });
    });

    const startProgress = () => {
        setProgressValue(99); // Set to 0 when loading starts
    };

    const finishProgress = () => {
        setProgressValue(100); // Set to 100 when loading finishes
    };

    return (
        <>
            {progressValue !== 100 && (
                <Progress
                    aria-label="loading..."
                    value={progressValue}
                    style={{ height: 3, position: 'fixed', zIndex: 99999 }}
                    classNames={{
                        indicator: 'bg-gradient-to-r from-pink-500 to-[#FD3D80]',
                    }}
                />
            )}
        </>
    );
}
