/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   event.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

var toCapitalizeCase = function (string) {
  return (string.toLowerCase().replace( /\b./g, function (character) {
    return (character.toUpperCase());
  }));
};

var Event = {
  'interval': undefined,
  'timestamp': undefined,
  'action': 0,
  'delay': 700,
  'find': Tool.find,

  'console': function (data) {
    console.log('console', data);
  },
  'call': function (data) {
    var mode = document.querySelector(Event.find);

    mode = toCapitalizeCase(mode.tagName);
    if (window[mode]) {
      door.send({
        'class': 'eventcall',
        'method': 'capture'
      }, {
        'stop': window[mode].stop
      });
      window[mode].call();
      move.rotate();
    }
  },
  'down': function (data) {
    if (!Event.action)
      if (!Event.interval)
        Event.interval = window.setInterval(Tool.next, Event.delay);
    Event.timestamp = (+new Date());
  },
  'up': function (data) {
    if (Event.interval)
      Event.interval = window.clearInterval(Event.interval);
    if ((+new Date()) - Event.timestamp < Event.delay)
      Event.call();
    else if (!Event.action)
      Speak.call();
  }
};