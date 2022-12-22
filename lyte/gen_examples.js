examples = {
///////////////////////////////////////////////////////////

empty: {
    app:"",
    src:``,
  },
  hello1: {
    title: "Hello world #1",
    app:"hello1.lua",
    src: `
function frame()
draw_text("Hello, world",0, 0)
end
`
  },

hello2: {
    title: "Hello world #2",
    app:"hello2.lua",
    src: `
local x = get_windowwidth()
local y = get_windowheight()
local s = "Hello, world :)"

function frame()
clear(0,0,0,0)
set_color(1,1,1,1)
local w, h = measure_text(s)
draw_text(s, (x-w)/2, (y-h)/2)
end
`
  },

shapes1: {
    title: "Shapes #1",
    app:"shapes1.lua",
    src: `
---
local W, H = 0, 0
local str = "Shapes! #1"

local function my_print(str, x, y, center)
if center then
    local w, h = measure_text(str)
    x = x - w / 2
    y = y - h / 2
end
draw_text(str, x, y)
end

function frame()
W = get_windowwidth()
H = get_windowheight()

clear(0, 0, 0, 1)

-- circle
set_color(0.4, 0.2, 0, 0.7)
draw_circle_filled(W/2,H/2,510)

-- rectangles
set_color(1,0,0,0.5)
draw_rect_filled(20, H/2-100, 200, 50)

set_color(0,1,0,0.25)
draw_rect_filled(20, H/2-100, 50, 150)

-- random circles and lines
math.randomseed(1)
for i=1,20 do
    local x = math.random(0, W)
    local y = math.random(0, H)
    local s = math.random(10,50)
    local r = math.random()
    local g = math.random()
    local b = math.random()
    local a = math.random()*0.5 + 0.5
    set_color(r,g,b,a)
    draw_circle(x,y,s)
    draw_line(W/2, H/2, x, y)
end

-- centered text
set_color(1, 1, 1, 1)
my_print(str, W / 2, H / 2, true)

end

-- buggy in wasm
-- set_windowsize(800,580)
set_windowminsize(800,580)
`
  },

///////////////////////////////////////////////////////////
};
