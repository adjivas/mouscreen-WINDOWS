/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   arrow.js                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: adjivas <adjivas@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2014/09/15 10:02:36 by adjivas           #+#    #+#             */
/*   Updated: 2014/09/15 10:02:36 by adjivas          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

'use strict';

/*
** The Arrow's class is call for move the text's cursor.
*/

var Arrow = {
  'speed': Configuration.mode.arrow.speed,
  'interval': undefined,

  'call': function (arg) {
    Event.action = !Event.action;

    Selector.action(Arrow.speed);
    Pointer.rotate();
  }
};
