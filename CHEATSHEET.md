# Cheat Sheet

## Setup (do once)
```jsx
import { buildTokens, ThemeContext } from "./bticket-ds";
const tokens = buildTokens("dark");
<ThemeContext.Provider value={tokens}>...</ThemeContext.Provider>
```

## Buttons
```jsx
<Button variant="primary">Save</Button>           // green
<Button variant="secondary">Info</Button>          // blue
<Button variant="danger">Delete</Button>           // red
<Button variant="warning">Warn</Button>            // orange
<Button variant="accent">Special</Button>          // purple
<Button variant="outline">Cancel</Button>          // border only
<Button variant="ghost">Skip</Button>              // text only
<Button icon="search">Search</Button>              // with icon
<Button size="sm">Small</Button>                   // sm | md | lg
<Button disabled>Can't click</Button>              // disabled
```

## Inputs
```jsx
<TextInput placeholder="Search..." />
<TextInput hasIcon={false} placeholder="No icon" />
<Textarea placeholder="Long text..." rows={4} />
<Select options={[{value:'a', label:'Option A'}, {value:'b', label:'Option B'}]} />
<Checkbox label="Accept terms" />
<RadioGroup options={[{value:'a', label:'Choice A'}, {value:'b', label:'Choice B'}]} />
<Toggle label="Notifications" checked />
```

## Feedback
```jsx
<Alert variant="info" title="Tip">Message here</Alert>        // info | success | warning | danger
<Alert variant="danger" title="Error" dismissible>Oops!</Alert>
<Spinner size="md" />                                          // sm | md | lg | xl
<Progress value={75} showLabel />                              // 0-100
<Skeleton width="200px" height="20px" />                       // loading placeholder
<Modal open={isOpen} onClose={close} title="Title" footer={<Button>OK</Button>}>Content</Modal>
```

## Data
```jsx
<Avatar name="John Doe" size="lg" status="online" />          // xs | sm | md | lg | xl
<Badge variant="success" dot>Active</Badge>                    // default | primary | success | danger | warning | accent | info
<Badge variant="primary" removable>Tag</Badge>
<StatsCard title="REVENUE" value="$45K" change="+12%" icon="$" />
<DataTable columns={[{key:'name', label:'Name'}]} data={[{name:'John'}]} />
<Tabs tabs={[{label:'Tab 1', content: <div>Content</div>}]} />
<Accordion items={[{title:'Question', content:'Answer'}]} />
```

## Navigation
```jsx
<Breadcrumb items={[{label:'Home'}, {label:'Page'}]} />
<Pagination totalPages={10} />
<Stepper steps={[{label:'Step 1', active:true}, {label:'Step 2', active:false}]} />
<Tooltip text="Helpful hint"><Button>Hover me</Button></Tooltip>
<Divider label="OR" />
<NavItem label="Dashboard" active badge="5" icon="📊" />
```

## Theme
```jsx
<ThemeToggle mode={mode} setMode={setMode} />
// Or manually: setMode(mode === "dark" ? "light" : "dark")
```

## Icons (20 available)
```jsx
<Icon name="search" size={20} color="#22C55E" />
```
Names: `search` `x` `check` `chevronDown` `chevronRight` `chevronLeft` `sun` `moon` `info` `alertTriangle` `checkCircle` `xCircle` `home` `loader` `user` `copy` `edit` `trash` `eye` `sort`

## Custom Components (use tokens)
```jsx
import { useTokens } from "./bticket-ds/hooks";

function MyComponent() {
  const t = useTokens();
  return <div style={{
    backgroundColor: t.colors.bgCard,
    color: t.colors.textPrimary,
    padding: t.spacing[4],
    borderRadius: t.radius.md,
    fontFamily: t.typography.fontFamily,
    fontSize: t.typography.fontSize.base,
  }}>Custom component</div>;
}
```

## Rebrand (edit src/tokens/brand.js)
```javascript
primary: palette.blue500,       // change green → blue
primaryHover: palette.blue600,  // one shade darker
// Done. Every component updates.
```
