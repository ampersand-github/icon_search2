export type processedIconType = {
  name: string
  genre: string
  icon: string[]
}

// 取り込む
const commonlyUsedIconList: processedIconType[] = [
  {
    name: 'material',
    genre: 'action',
    icon: [
      'account_box',
      'account_circle',
      'android',
      'autorenew',
      'cached',
      'delete',
      'done',
      'favorite',
      'favorite_border',
      'feedback',
      'grade',
      'home',
      'list',
      'search',
      'settings',
      'thumb_up',
      'thumbs_up_down',
    ],
  },
  { name: 'material', genre: 'alert', icon: ['error', 'error_outline', 'warning'] },

  {
    name: 'material',
    genre: 'av',
    icon: [
      'fast_forward',
      'fast_rewind',
      'loop',
      'note',
      'pause',
      'play_arrow',
      'repeat',
      'replay',
      'shuffle',
      'skip_next',
      'skip_previous',
      'stop',
    ],
  },
  { name: 'material', genre: 'communication', icon: ['business', 'call', 'chat', 'email', 'phone'] },

  {
    name: 'material',
    genre: 'content',
    icon: [
      'add',
      'archive',
      'backspace',
      'block',
      'clear',
      'create',
      'forward',
      'link',
      'mail',
      'undo',
      'redo',
      'remove',
      'save',
      'send',
    ],
  },
  // {    name: 'material', genre: 'device', icon: ['3d_rotation', 'accessibility'] },
  { name: 'material', genre: 'editor', icon: ['cloud', 'file_download', 'file_upload', 'folder'] },
  { name: 'material', genre: 'file', icon: ['3d_rotation', 'accessibility'] },
  {
    name: 'material',
    genre: 'hardware',
    icon: [
      'keyboard_arrow_down',
      'keyboard_arrow_left',
      'keyboard_arrow_right',
      'keyboard_arrow_up',
      'keyboard_backspace',
      'keyboard_hide',
      'keyboard',
      'keyboard_backspace',
      'keyboard_capslock',
    ],
  },
  { name: 'material', genre: 'image', icon: ['edit', 'timer'] },
  {
    name: 'material',
    genre: 'navigation',
    icon: [
      'apps',
      'arrow_back',
      'arrow_downward',
      'arrow_drop_down',
      'arrow_drop_down_circle',
      'arrow_drop_up',
      'arrow_forward',
      'arrow_upward',
      'cancel',
      'check',
      'close',
      'menu',
      'more_horiz',
      'more_vert',
      'refresh',
    ],
  },
  { name: 'material', genre: 'notification', icon: ['do_not_disturb', 'more', 'sd_card', 'sync'] },
  {
    name: 'material',
    genre: 'social',
    icon: ['group', 'notifications', 'notifications_active', 'people', 'person', 'public', 'share'],
  },
  {
    name: 'material',
    genre: 'toggle',
    icon: ['check_box', 'check_box_outline_blank', 'star', 'star_border', 'star_half'],
  },
  {
    name: 'awesome',
    genre: 'regular',
    icon: [
      'clipboard',
      'comment-dots',
      'comments',
      'copy',
      'envelope',
      'heart',
      'star',
      'trash-alt',
      'user',
      'thumbs-down',
      'thumbs-up',
    ],
  },
  {
    name: 'awesome',
    genre: 'solid',
    icon: [
      'ban',
      'bell-slash',
      'bell',
      'bookmark',
      'check',
      'clipboard',
      'cloud',
      'exclamation-triangle',
      'file',
      'hashtag',
      'heart',
      'info',
      'lock-open',
      'lock',
      'pen',
      'poop',
      'power-off',
      'plus',
      'question',
      'sign-in-alt',
      'sign-out-alt',
      'star',
      'trash',
      'unlock',
      'lock',
      'user-alt',
      'user',
      'thumbs-down',
      'thumbs-up',
      'angle-left',
      'angle-right',
    ],
  },
  {
    name: 'awesome',
    genre: 'brands',
    icon: [
      'amazon',
      'apple',
      'youtube',
      'windows',
      'twitter',
      'twitter-square',
      'slack',
      'line',
      'instagram',
      'google-drive',
      'facebook-f',
    ],
  },
]

export default commonlyUsedIconList
