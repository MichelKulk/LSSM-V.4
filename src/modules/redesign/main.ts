import { ModuleMainFunction } from 'typings/Module';

export default (LSSM => {
    LSSM.$store
        .dispatch('hook', {
            event: 'lightboxOpen',
            abortOnFalse: true,
            callback(href: string) {
                LSSM.$modal.show(
                    () =>
                        import(
                            /* webpackChunkName: "modules/redesign/lightbox" */ `./components/lightbox.vue`
                        ),
                    { url: href },
                    {
                        name: 'redesign-lightbox',
                        height: '96%',
                        width: '96%',
                    },
                    {
                        closed() {
                            window.lightboxClose();
                        },
                    }
                );
                return false;
            },
        })
        .then();
    LSSM.$store
        .dispatch('hook', {
            event: 'lightboxAdjust',
            abortOnFalse: true,
            callback() {
                const iframe = document.getElementById(
                    LSSM.$store.getters.nodeAttribute(
                        'redesign-lightbox-iframe'
                    )
                ) as HTMLIFrameElement | null;
                if (!iframe) return true;
                const container = iframe.contentDocument?.getElementById(
                    'iframe-inside-container'
                );
                if (!container) return true;
                container.style.width = '100%';
                container.style.height = '100%';
                const modal = document.querySelector<HTMLDivElement>(
                    '.vm--overlay[data-modal="redesign-lightbox"] ~ .vm--modal'
                );
                if (modal) {
                    modal.style.padding = '0';
                    const isIframe = !!modal.querySelector<HTMLDivElement>(
                        '.is-iframe'
                    );
                    modal.style.setProperty(
                        'overflow',
                        isIframe ? 'hidden' : null,
                        'important'
                    );
                }
                return false;
            },
        })
        .then();

    LSSM.$store
        .dispatch('hook', {
            event: 'lightboxClose',
            callback() {
                LSSM.$modal.hide('redesign-lightbox');
            },
        })
        .then();
}) as ModuleMainFunction;
