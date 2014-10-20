/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   start.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

var win = require('nw.gui').Window.get();

var Start = {
  'target': 'program',

  'show': function (arg) {
    win.show(true);
  },
  'default': window.addEventListener('load', function() {
    var dom = document.querySelector(Start.target);

    Tools.init(dom);
    Start.show();
  }, false)
};
