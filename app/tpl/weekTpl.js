templates.weekTpl = _.template([
            '  	<tr class="daysName">',
            '		<td>',
            '		</td>',
            '		<td>',
            '			Monday',
            '		</td>',
            '		<td>',
            '			Tuesday',
            '		</td>',
            '		<td>',
            '			Wednesday',
            '		</td>',
            '		<td>',
            '			Thursday',
            '		</td>',
            '		<td>',
            '			Friday',
            '		</td>',
            '	</tr>',
            '	<tr class="daysDate">',
            '		<td></td>',
            '		<td>',
            '           <% var date = new Date(week.startDate) %>',
            '			<%= date.getDate() %>.<%= date.getMonth() + 1 %>',
            '<% date.setDate(date.getDate() + 1); %>',
            '		</td>',
            '		<td>',
            '			<%= date.getDate() %>.<%= date.getMonth() + 1 %>',
            '<% date.setDate(date.getDate() + 1); %>',
            '		</td>',
            '		<td>',
            '			<%= date.getDate() %>.<%= date.getMonth() + 1 %>',
            '<% date.setDate(date.getDate() + 1); %>',
            '		</td>',
            '		<td>',
            '			<%= date.getDate() %>.<%= date.getMonth() + 1 %>',
            '<% date.setDate(date.getDate() + 1); %>',
            '		</td>',
            '		<td>',
            '			<%= date.getDate() %>.<%= date.getMonth() + 1 %>',
            '<% date.setDate(date.getDate() + 1); %>',
            '		</td>',
            '	</tr>',
            '<% _.each(templates.timelines, function (value) { %>',
            '	<tr  timeline = "<%= value %>">',
            '		<td>',
            '			<%= value %>',
            '		</td>',
            '		<td day= "<%= 1 %>">',
            '       <% _.each(resources, function (resource, day) { %>',
            '           <% if (day == 1) { %>',
            '               <% _.each(resource, function (r, time) { %>',
            '                   <% if (time === value) { %>',
            '                       <% _.each(events, function (event) { %>',
            '                           <% if (event.id == r) { %>',
            '                               <%= event.name %>',
            '                           <% } %>',
            '                       <% }); %>',
            '                   <% } %>',
            '               <% }); %>',
            '           <% } %>',
            '       <% }); %>',
            '		</td>',
            '		<td day= "<%= 2 %>">',
            '       <% _.each(resources, function (resource, day) { %>',
            '           <% if (day == 2) { %>',
            '               <% _.each(resource, function (r, time) { %>',
            '                   <% if (time === value) { %>',
            '                       <% _.each(events, function (event) { %>',
            '                           <% if (event.id == r) { %>',
            '                               <%= event.name %>',
            '                           <% } %>',
            '                       <% }); %>',
            '                   <% } %>',
            '               <% }); %>',
            '           <% } %>',
            '       <% }); %>',
            '		</td>',
            '		<td day= "<%= 3 %>">',
            '       <% _.each(resources, function (resource, day) { %>',
            '           <% if (day == 3) { %>',
            '               <% _.each(resource, function (r, time) { %>',
            '                   <% if (time === value) { %>',
            '                       <% _.each(events, function (event) { %>',
            '                           <% if (event.id == r) { %>',
            '                               <%= event.name %>',
            '                           <% } %>',
            '                       <% }); %>',
            '                   <% } %>',
            '               <% }); %>',
            '           <% } %>',
            '       <% }); %>',
            '		</td>',
            '		<td day= "<%= 4 %>">',
            '       <% _.each(resources, function (resource, day) { %>',
            '           <% if (day == 4) { %>',
            '               <% _.each(resource, function (r, time) { %>',
            '                   <% if (time === value) { %>',
            '                       <% _.each(events, function (event) { %>',
            '                           <% if (event.id == r) { %>',
            '                               <%= event.name %>',
            '                           <% } %>',
            '                       <% }); %>',
            '                   <% } %>',
            '               <% }); %>',
            '           <% } %>',
            '       <% }); %>',
            '		</td>',
            '		<td day= "<%= 5 %>">',
            '       <% _.each(resources, function (resource, day) { %>',
            '           <% if (day == 5) { %>',
            '               <% _.each(resource, function (r, time) { %>',
            '                   <% if (time === value) { %>',
            '                       <% _.each(events, function (event) { %>',
            '                           <% if (event.id == r) { %>',
            '                               <%= event.name %>',
            '                           <% } %>',
            '                       <% }); %>',
            '                   <% } %>',
            '               <% }); %>',
            '           <% } %>',
            '       <% }); %>',
            '		</td>',
            '	</tr>',
            '<% }); %>'
].join(''));