function assets(path) {
    return `/inspect/twitch-elements/assets/${path}`;
}
class PagePromotionalBanner extends HTMLElement {
    visible = false;
    focused = null;
    now = new Date();
    event = null;
    events = {
        'pebi-steampunk': {
            from: new Date('2022/11/18 00:00'),
            to: new Date('2023/5/1 00:00'),
            banner: assets('promotional/pebi-steampunk/banner.png'),
            title: 'Time for some steampunk!',
            caption: `PEBI, the emote artist's toolbox, is now available on Steam. If you haven't heard of it yet, you should check it out!`,
            profiles: [
                {
                    name: 'Itch.io',
                    figure: assets('promotional/pebi-steampunk/figure.itchio.svg'),
                    href: 'https:/' + '/spielmannspiel.itch.io/pebi'
                },
                {
                    name: 'Steam',
                    figure: assets('promotional/pebi-steampunk/figure.steam.svg'),
                    href: 'https:/' + '/store.steampowered.com/app/2192700'
                }
            ]
        }
    };
    render() {
        return `
      <style>
        * {
          box-sizing: border-box;
        }

        :host {
          font-family: 'BreezeSans', 'Breeze Sans', -apple-system, Helvetica;
        }

        :host {
          z-index: 100;

          position: fixed;
          inset: 0rem 0rem;

          background: rgba(0, 0, 0, 0.6);

          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: center;

          overflow: hidden scroll;
        }
        :host([hidden]) {
          visibility: hidden;
          display: none;
        }

        .node.banner {
          flex: none;

          width: calc(100% + 1.25rem + 1.25rem);
          height: auto;
          
          margin: -1.25rem -1.25rem 0.625rem;
          overflow: hidden;

          border-bottom: 1px solid #292929;
        }

        .node.banner > img {
          width: 100%;
          height: auto;
        }

        .node.dialog {
          display: flex;
          flex: none;
          flex-direction: column;

          width: min(100%, 30rem);
          margin: 0.625rem 0rem 0.625rem;
          padding: 1.25rem 1.25rem 0.625rem;

          background: #202020;
          
          border: none;
          border-radius: 0.625rem;

          overflow: hidden;
        }

        .node.dialog > * {
          flex: none;
        }

         
        .node.action-row {
          display: flex;
          flex-direction: row-reverse;
          flex-wrap: wrap-reverse;

          margin: 0.625rem 0.625rem 0rem 0rem;
          gap: 0.25rem;
        }

        .node.action,
        .node.action-skip {
          border: none;
          border-radius: 0.25rem;
          background: none;

          font-weight: 300;
          line-height: 1.25rem;
          font-weight: 400; 
          font-size: 0.75rem;

          min-height: 1.5625rem;
          margin: 0rem -0.625rem;
          padding: 0rem 0.625rem;

          cursor: pointer;
          transition: 
            color 50ms ease-in, color 50ms ease-in,
            background-color 50ms ease-in, color 50ms ease-in;
        }

        .node.action {
          border: 1px solid #292929;
          background: rgba(255, 255, 255, 0.06);
          color: #e5e5e5;
        }

        .node.action-skip {
          color: #bbbbbb;
        }


        .node.action:hover  {
          background: rgba(255, 255, 255, 0.10);
        }

        .node.action:active  {
          color: #bbbbbb; 
          background: rgba(255, 255, 255, 0.04);
        }

        .node.action-skip:hover {
          color: #c7c7c7; 
        }

        .node.action-skip:active {
          color: #bbbbbb; 
        }

         
        .node.profile-row {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: flex-end;

          margin: 0.625rem 0rem 0rem;
          gap: 0.25rem;
        }

        .node.profile-title {
          display: flex;
          flex-direction: row;
          align-items: center;
          
          color: #fff;
          font-size: 1.0625rem;
          font-weight: 400;

          height: 2.5rem;
        }

        .node.profile-caption {
          display: block;
          
          color: #e5e5e5;
          font-size: 0.8125rem;
          font-weight: 400;
          line-height: 1.5;

          margin: 0.25rem 0rem 0.75rem;
        }
        .node.profile-caption a {
          color: #ecae55;
          text-decoration: none;
        }

        .node.profile {
          display: flex;
          flex-direction: row;
          align-items: center;

          border: none;
          border-radius: 0.25rem;
          background: none;

          padding: 0.625rem 0.625rem;
          gap: 0.625rem;

          color: #e5e5e5;
          text-decoration: none;
          font-size: 0.88889rem;
          font-weight: 400;
          
          transition: 
            color 50ms ease-in, color 50ms ease-in,
            background-color 50ms ease-in, color 50ms ease-in;
        }

        .node.profile > img {
          height: 1.25rem;
          width: 1.25rem;
        }

        .node.profile:hover  {
          background: rgba(255, 255, 255, 0.10);
        }

        .node.profile:active  {
          background: rgba(255, 255, 255, 0.04);
        }
      </style>
      <div class="node dialog">
        ${((eve)=>`
          <div class="node banner">
            <img src="${eve.banner}"/>
          </div>
          
          <div class="node profile-row">
            <div class="node profile-title">${eve.title}</div>
          
            <div style="flex: 1;"></div>

            ${eve.profiles.map((pro)=>`
              <a class="node profile" href="${pro.href}" target="_blank">
                <img src="${pro.figure}"/>
                <span>${pro.name}</span>
              </a>
            `).join('')}
          </div>
          <div class="node profile-caption">${eve.caption}</div>
        `)(this.events[this.event])}

        <div class="node action-row">
          <button class="node action" type="button" data-dialog-hide>
            <span>Close</span>
          </button>
          <div style="flex: 1;"></div>
          <button class="node action-skip" type="button" data-dialog-skip>
            <span>Do not display this banner again</span>
          </button>
        </div>
      </div>
    `;
    }
    constructor(){
        super();
    }
    connectedCallback() {
        for(const i in this.events){
            if (this.now <= this.events[i].from || this.now >= this.events[i].to) {
                delete this.events[i];
            }
        }
        this.event = Object.keys(this.events).sort((a, b)=>this.events[a].from < this.events[b].from ? 1 : -1)[0] || null;
        this.attachShadow({
            mode: 'open'
        }).innerHTML = this.render();
        this.setAttribute('hidden', 'true');
        this.setAttribute('role', 'dialog');
        this.setAttribute('aria-modal', 'true');
        const skipers = [
            ...this.shadowRoot.querySelectorAll('[data-dialog-skip]')
        ];
        skipers.forEach((closer)=>closer.addEventListener('click', this.skip.bind(this)));
        const closers = [
            ...this.shadowRoot.querySelectorAll('[data-dialog-hide]')
        ];
        closers.forEach((closer)=>closer.addEventListener('click', this.hide.bind(this)));
        requestAnimationFrame(()=>{
            const lis = JSON.parse(localStorage.getItem('events') || '[]');
            if (this.event && lis.indexOf(this.event) == -1) this.show();
        });
    }
    show() {
        this.focused = document.activeElement;
        this.visible = true;
        this.removeAttribute('hidden');
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
    }
    skip() {
        const lis = JSON.parse(localStorage.getItem('events') || '[]');
        if (lis.indexOf(this.event) == -1) {
            localStorage.setItem('events', JSON.stringify([
                ...lis,
                this.event
            ]));
        }
        this.hide();
    }
    hide() {
        if (this.focused != null && 'focus' in this.focused) {
            this.focused.focus();
        }
        this.visible = false;
        this.setAttribute('hidden', 'true');
        document.removeEventListener('keydown', this.handleKeyDown.bind(this));
    }
    handleKeyDown(event) {
        if (event.key === 'Escape') this.hide();
    }
}
customElements.define('page-promotional-banner', PagePromotionalBanner);
document.body.append(document.createElement('page-promotional-banner'));
