document.write('<link rel="stylesheet" href="/css/embed-2cd369fa1c0830bd3aa06c21d4f14a13e060d2d31bbaae740f4af4602b825bd9.css">')
document.write('<div id=\"gist29687835\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-lorenz-ex-m\" class=\"file\">\n    \n\n  <div class=\"blob-wrapper data type-matlab\">\n      <table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-lorenz-ex-m-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-lorenz-ex-m-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">clear<\/span> <span class=\"pl-k\">all<\/span><\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-lorenz-ex-m-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-lorenz-ex-m-LC2\" class=\"blob-code blob-code-inner js-file-line\">t = <span class=\"pl-k\">linspace<\/span>(<span class=\"pl-c1\">0<\/span>,<span class=\"pl-c1\">350<\/span>,<span class=\"pl-c1\">100001<\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-lorenz-ex-m-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-lorenz-ex-m-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">lsode_options</span>(<span class=\"pl-ii\">&quot;<\/span>relative tolerance<span class=\"pl-ii\">&quot;<\/span>, 1e-<span class=\"pl-c1\">15<\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-lorenz-ex-m-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-lorenz-ex-m-LC4\" class=\"blob-code blob-code-inner js-file-line\">y = <span class=\"pl-k\">lsode</span>(<span class=\"pl-ii\">&quot;<\/span>lorenz<span class=\"pl-ii\">&quot;<\/span>,[ <span class=\"pl-c1\">1.0<\/span>; <span class=\"pl-c1\">1.0<\/span>; <span class=\"pl-c1\">1.0<\/span>]<span class=\"pl-k\">&#39;<\/span>,t);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-lorenz-ex-m-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-lorenz-ex-m-LC5\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-lorenz-ex-m-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-lorenz-ex-m-LC6\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">figure<\/span>(<span class=\"pl-c1\">1<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-lorenz-ex-m-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-lorenz-ex-m-LC7\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-lorenz-ex-m-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-lorenz-ex-m-LC8\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">subplot<\/span>(<span class=\"pl-c1\">221<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-lorenz-ex-m-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-lorenz-ex-m-LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">plot<\/span>(y(:,<span class=\"pl-c1\">1<\/span>),y(:,<span class=\"pl-c1\">2<\/span>),<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>-<span class=\"pl-pds\">&#39;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-lorenz-ex-m-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-lorenz-ex-m-LC10\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">xlabel<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>x(t)<span class=\"pl-pds\">&#39;<\/span><\/span>,<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>FontSize<span class=\"pl-pds\">&#39;<\/span><\/span>,<span class=\"pl-c1\">16<\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-lorenz-ex-m-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-lorenz-ex-m-LC11\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">ylabel<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>y(t)<span class=\"pl-pds\">&#39;<\/span><\/span>,<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>FontSize<span class=\"pl-pds\">&#39;<\/span><\/span>,<span class=\"pl-c1\">16<\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-lorenz-ex-m-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-lorenz-ex-m-LC12\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-lorenz-ex-m-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-lorenz-ex-m-LC13\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">subplot<\/span>(<span class=\"pl-c1\">222<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-lorenz-ex-m-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-lorenz-ex-m-LC14\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">plot<\/span>(y(:,<span class=\"pl-c1\">1<\/span>),y(:,<span class=\"pl-c1\">3<\/span>),<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>-<span class=\"pl-pds\">&#39;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-lorenz-ex-m-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-lorenz-ex-m-LC15\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">xlabel<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>x(t)<span class=\"pl-pds\">&#39;<\/span><\/span>,<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>FontSize<span class=\"pl-pds\">&#39;<\/span><\/span>,<span class=\"pl-c1\">16<\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-lorenz-ex-m-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-lorenz-ex-m-LC16\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">ylabel<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>z(t)<span class=\"pl-pds\">&#39;<\/span><\/span>,<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>FontSize<span class=\"pl-pds\">&#39;<\/span><\/span>,<span class=\"pl-c1\">16<\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-lorenz-ex-m-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-lorenz-ex-m-LC17\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-lorenz-ex-m-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-lorenz-ex-m-LC18\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">subplot<\/span>(<span class=\"pl-c1\">223<\/span>)<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-lorenz-ex-m-L19\" class=\"blob-num js-line-number\" data-line-number=\"19\"><\/td>\n        <td id=\"file-lorenz-ex-m-LC19\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">plot<\/span>(y(:,<span class=\"pl-c1\">2<\/span>),y(:,<span class=\"pl-c1\">3<\/span>),<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>-<span class=\"pl-pds\">&#39;<\/span><\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-lorenz-ex-m-L20\" class=\"blob-num js-line-number\" data-line-number=\"20\"><\/td>\n        <td id=\"file-lorenz-ex-m-LC20\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">xlabel<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>y(t)<span class=\"pl-pds\">&#39;<\/span><\/span>,<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>FontSize<span class=\"pl-pds\">&#39;<\/span><\/span>,<span class=\"pl-c1\">16<\/span>);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-lorenz-ex-m-L21\" class=\"blob-num js-line-number\" data-line-number=\"21\"><\/td>\n        <td id=\"file-lorenz-ex-m-LC21\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">ylabel<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>z(t)<span class=\"pl-pds\">&#39;<\/span><\/span>,<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>FontSize<span class=\"pl-pds\">&#39;<\/span><\/span>,<span class=\"pl-c1\">16<\/span>);<\/td>\n      <\/tr>\n<\/table>\n\n  <\/div>\n\n  <\/div>\n  \n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/fusion809/458fb365ea109af5a201/raw/c1bf781f76f60c9847ad7f2b01c737dc5089ab3f/lorenz-ex.m\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/fusion809/458fb365ea109af5a201#file-lorenz-ex-m\">lorenz-ex.m<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
