/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   notification.js                                    :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Synthse's class on or off the notification's message.
*/

var Notification = {
  'target': 'notif',
  'actived': Conf.notification.active,

  'change': function (arg) {
    Conf.notification.active = !Conf.notification.active;
  },
  'build': function (dom) {
    var tag = document.createElement('input');
    var cnt = -1;

    tag.setAttribute('id', Notification.target);
    tag.setAttribute('type', 'checkbox');
    tag.setAttribute('label', Lang.translate(Notification.target, {}));
    tag.addEventListener('change', Notification.change, false);
    if (Notification.actived)
      tag.setAttribute('checked', 'checked');
    dom.appendChild(tag);
  }
};
