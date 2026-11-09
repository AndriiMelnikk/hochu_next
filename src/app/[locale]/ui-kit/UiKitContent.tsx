'use client';

import * as React from 'react';
import {
  Briefcase,
  Flag,
  Heart,
  Home,
  LogOut,
  MessageSquare,
  Pencil,
  Plus,
  Search,
  Settings,
  ThumbsDown,
  User,
} from 'lucide-react';
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardHeader,
  CardSection,
  Checkbox,
  CheckboxField,
  Chip,
  CopyField,
  DescriptionItem,
  Heading,
  RailNav,
  RailNavItem,
  Rating,
  SettingsRow,
  SideNav,
  SideNavItem,
  SideNavList,
  StatCard,
  Stepper,
  Switch,
  SwitchField,
  TextLink,
  WizardFooter,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  ModalTrigger,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/ui-v2';

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-[550] leading-8">{title}</h2>
      <div className="flex flex-wrap items-center gap-4">{children}</div>
    </section>
  );
}

export default function UiKitContent() {
  const [checked, setChecked] = React.useState<Record<string, boolean>>({ a: true });
  const [menuChecked, setMenuChecked] = React.useState(true);

  return (
    <div className="ui-v2 mx-auto max-w-5xl space-y-12 px-4 py-8">
      <header className="space-y-1">
        <h1 className="text-[40px] font-[550] leading-[48px]">UI kit v2</h1>
        <p className="text-v2-muted">Вітрина компонентів з src/ui-v2. Лише для розробки.</p>
      </header>

      <Section title="Button">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button disabled>Disabled</Button>
        <Button size="sm">Primary sm</Button>
        <Button size="sm" variant="secondary">
          Secondary sm
        </Button>
        <IconButton aria-label="Save job">
          <Heart />
        </IconButton>
        <IconButton aria-label="Not interested">
          <ThumbsDown />
        </IconButton>
        <IconButton aria-label="Edit" variant="secondary">
          <Pencil />
        </IconButton>
        <IconButton aria-label="Add" variant="secondary" size="sm">
          <Plus />
        </IconButton>
      </Section>

      <Section title="Input">
        <div className="w-72">
          <Input placeholder="Default" />
        </div>
        <div className="w-72">
          <Input search placeholder="Search" size="sm" />
        </div>
        <div className="w-72">
          <Input placeholder="Invalid" invalid />
        </div>
        <div className="w-72">
          <Input placeholder="Disabled" disabled />
        </div>
      </Section>

      <Section title="Select / Dropdown menu">
        <div className="w-72">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Accounting &amp; Consulting</SelectLabel>
                <SelectItem value="acc">Accounting &amp; Bookkeeping</SelectItem>
                <SelectItem value="fin">Financial Planning</SelectItem>
              </SelectGroup>
              <SelectGroup>
                <SelectLabel>Admin Support</SelectLabel>
                <SelectItem value="va">Virtual Assistance</SelectItem>
                <SelectItem value="dis" disabled>
                  Disabled option
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary">Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Just not interested</DropdownMenuLabel>
            <DropdownMenuItem>Not in my preferred location</DropdownMenuItem>
            <DropdownMenuItem disabled>The client will not be notified</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked={menuChecked} onCheckedChange={setMenuChecked}>
              Checkbox item
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Section>

      <Section title="Checkbox">
        <CheckboxField
          label="Entry level"
          count={2}
          checked={!!checked.a}
          onCheckedChange={(v) => setChecked((s) => ({ ...s, a: v === true }))}
        />
        <CheckboxField
          label="Intermediate"
          count={33}
          checked={!!checked.b}
          onCheckedChange={(v) => setChecked((s) => ({ ...s, b: v === true }))}
        />
        <CheckboxField label="Disabled" disabled />
        <Checkbox aria-label="Bare checkbox" />
      </Section>

      <Section title="Badge / Chip">
        <Badge>Off</Badge>
        <Badge tone="info">Proposals: 5 to 10</Badge>
        <Badge tone="success">Payment verified</Badge>
        <Badge tone="warning">Pending</Badge>
        <Badge tone="danger">Declined</Badge>
        <Chip>Node.js</Chip>
        <Chip>TypeScript</Chip>
        <Chip>React</Chip>
      </Section>

      <Section title="Avatar">
        <Avatar fallback="AM" />
        <Avatar size="md" fallback="AM" />
        <Avatar size="lg" fallback="AM" />
      </Section>

      <Section title="Tabs">
        <Tabs defaultValue="best" className="w-full">
          <TabsList>
            <TabsTrigger value="best">Best matches</TabsTrigger>
            <TabsTrigger value="recent">Most recent</TabsTrigger>
            <TabsTrigger value="saved">Saved jobs</TabsTrigger>
          </TabsList>
          <TabsContent value="best">Best matches content</TabsContent>
          <TabsContent value="recent">Most recent content</TabsContent>
          <TabsContent value="saved">Saved jobs content</TabsContent>
        </Tabs>
      </Section>

      <Section title="Card">
        <Card className="w-full max-w-md">
          <CardSection>
            <h3 className="text-xl font-[550]">Outline card</h3>
            <p className="text-v2-muted">Секція з падінгом 32px.</p>
          </CardSection>
          <CardSection interactive className="py-3 px-4">
            Interactive section
          </CardSection>
        </Card>
        <Card variant="tinted" className="w-full max-w-md p-6">
          <h3 className="mb-3 text-2xl font-[550]">Reach more clients</h3>
          <p>Tinted card (info background).</p>
        </Card>
      </Section>

      <Section title="Typography">
        <div className="w-full space-y-3">
          <Heading level="display">Display 56</Heading>
          <Heading level="h1">Heading 1 · 40</Heading>
          <Heading level="h2">Heading 2 · 32</Heading>
          <Heading level="h3">Heading 3 · 24</Heading>
          <Heading level="h4">Heading 4 · 20</Heading>
          <p>
            Body 14/20. <TextLink href="#">Change password</TextLink>{' '}
            <TextLink href="#">
              <Flag /> Flag as inappropriate
            </TextLink>
          </p>
        </div>
      </Section>

      <Section title="Switch">
        <Switch aria-label="Off" />
        <Switch aria-label="On" defaultChecked />
        <Switch aria-label="Disabled" disabled />
        <div className="w-64">
          <SwitchField label="Online for messages" defaultChecked />
        </div>
      </Section>

      <Section title="Stepper / Wizard footer">
        <div className="w-full max-w-2xl space-y-6">
          <Stepper
            steps={[
              { label: 'Add business context', status: 'done' },
              { label: 'Create job post', status: 'active' },
              { label: 'Share with talent', status: 'pending' },
            ]}
          />
          <div className="overflow-hidden rounded-v2-2xl border border-v2-border">
            <WizardFooter
              progress={33}
              back={<Button variant="outline">Back</Button>}
              next={<Button disabled>Next: Skills</Button>}
            />
          </div>
        </div>
      </Section>

      <Section title="Navigation">
        <SideNav className="w-56">
          <SideNavList>
            <SideNavItem href="#" active>
              My info
            </SideNavItem>
            <SideNavItem href="#">Billing &amp; Payments</SideNavItem>
            <SideNavItem href="#">Password &amp; Security</SideNavItem>
          </SideNavList>
        </SideNav>
        <RailNav className="rounded-v2-lg">
          <RailNavItem href="#" icon={<Search />} label="Search" />
          <RailNavItem href="#" icon={<Home />} label="Home" active />
          <RailNavItem href="#" icon={<MessageSquare />} label="Messages" />
          <RailNavItem href="#" icon={<Briefcase />} label="Jobs" />
        </RailNav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Account menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent surface="popover">
            <div className="flex items-center gap-3 px-4 pb-3">
              <Avatar size="md" fallback="AM" />
              <div>
                <p className="font-semibold">Andrij Melnuk</p>
                <p className="text-xs text-v2-muted">Freelancer Basic</p>
              </div>
            </div>
            <div className="px-4 pb-3">
              <SwitchField label="Online for messages" defaultChecked />
            </div>
            <DropdownMenuItem compact>
              <User /> My profile
            </DropdownMenuItem>
            <DropdownMenuItem compact>
              <Settings /> Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="px-2 text-v2-subtle">Switch accounts</DropdownMenuLabel>
            <DropdownMenuItem compact>
              <Avatar tone="info" fallback="K" /> Kladovka
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem compact>
              <LogOut /> Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Section>

      <Section title="Cards: settings / stats / key-value">
        <div className="grid w-full gap-6 md:grid-cols-2">
          <Card>
            <CardSection>
              <CardHeader title="Login" />
            </CardSection>
            <SettingsRow
              title="Log in with Google"
              description="You've set up login with your Google account."
              action={<Button variant="secondary">Disconnect</Button>}
            />
            <SettingsRow
              title="Mobile app notifications"
              description="Verify notifications with your mobile app."
              action={<Switch aria-label="Mobile app notifications" />}
            />
          </Card>
          <div className="space-y-6">
            <StatCard
              label="Balance"
              value="9"
              action={<TextLink href="#">Buy Connects</TextLink>}
            />
            <Card variant="muted" className="space-y-2 p-6">
              <Badge>Earn up to 10 Connects</Badge>
              <Heading level="h3">Boost your profile</Heading>
              <p className="text-v2-muted">Improve your profile&apos;s search placement.</p>
              <Button variant="secondary" size="sm">
                Set bid
              </Button>
            </Card>
            <Card variant="highlight" className="p-3">
              <p className="font-semibold">Try Freelancer Plus →</p>
              <p className="text-xs">Subscribers have a 50% higher chance of being hired.</p>
            </Card>
          </div>
        </div>
        <dl className="grid w-full gap-4 md:grid-cols-3">
          <DescriptionItem label="Payment method verified">
            <Rating value={4.9} showValue />
          </DescriptionItem>
          <DescriptionItem label="United States">Jupiter 5:13 AM</DescriptionItem>
          <DescriptionItem label="255 jobs posted">51% hire rate, 4 open jobs</DescriptionItem>
        </dl>
        <div className="w-72">
          <CopyField value="https://www.upwork.com/jobs/~022119620085684467668" />
        </div>
      </Section>

      <Section title="Modal / Drawer">
        <Modal>
          <ModalTrigger asChild>
            <Button variant="secondary">Open modal</Button>
          </ModalTrigger>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Filters</ModalTitle>
              <ModalDescription>Filters will only apply to searches.</ModalDescription>
            </ModalHeader>
            <ModalBody>
              <CheckboxField label="Hourly" count={47} />
              <CheckboxField label="Fixed-Price" count={27} />
              <div className="mt-4">
                <Input search placeholder="Search" size="sm" />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button variant="link">Clear</Button>
              <Button>Apply</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal>
          <ModalTrigger asChild>
            <Button variant="secondary">Open drawer</Button>
          </ModalTrigger>
          <DrawerContent>
            <DrawerHeader>
              <Button variant="link" size="sm">
                Open in a new window
              </Button>
            </DrawerHeader>
            <DrawerBody>
              <DrawerTitle>Creative Developer Wanted</DrawerTitle>
              <p className="mt-4 text-v2-muted">
                Drawer справа на всю висоту, шапка 64px, фіксований футер з діями.
              </p>
            </DrawerBody>
            <DrawerFooter>
              <Button className="w-full">Apply now</Button>
              <Button variant="secondary" className="w-full">
                Save job
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Modal>
      </Section>
    </div>
  );
}
