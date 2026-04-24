import { useState, useEffect } from "react";
import { useSite, API_URL } from "@/context/SiteContext";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  LayoutDashboard, Scissors, ShoppingBag, User, Mail, 
  Settings, Plus, Pencil, Trash2, LogOut, Eye, CheckCircle2, Package, Save, ClipboardList, Clock, MapPin, Phone, Tags, Image as ImageIcon, Search, X, Sun, Moon
} from "lucide-react";
import { 
  Dialog, DialogContent, DialogDescription, 
  DialogFooter, DialogHeader, DialogTitle, DialogTrigger 
} from "@/components/ui/dialog";
import { toast } from "sonner";

const Admin = () => {
  const { 
    sections, setSectionVisibility, 
    profile, updateProfile, 
    contact, updateContact,
    services, addService, updateService, deleteService,
    products, addProduct, updateProduct, deleteProduct,
    categories, addCategory, updateCategory, deleteCategory,
    brands, addBrand, updateBrand, deleteBrand,
    logout, token, theme, toggleTheme
  } = useSite();

  const [localProfile, setLocalProfile] = useState(profile);
  const [localContact, setLocalContact] = useState(contact);
  const [requests, setRequests] = useState<any[]>([]);

  useEffect(() => { setLocalProfile(profile); }, [profile]);
  useEffect(() => { setLocalContact(contact); }, [contact]);

  const fetchRequests = async () => {
    try {
      const res = await fetch(`${API_URL}/requests`);
      if (res.ok) {
        const data = await res.json();
        setRequests(data.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()));
      }
    } catch (e) { console.error(e); }
  };

  useEffect(() => { fetchRequests(); }, []);

  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<any>(null);
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);
  const [editingBrand, setEditingBrand] = useState<any>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<any>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  
  const [catalogSearch, setCatalogSearch] = useState("");
  const [catalogCategoryFilter, setCatalogCategoryFilter] = useState<string | null>(null);
  const [categorySearch, setCategorySearch] = useState("");
  const [categoryTypeFilter, setCategoryTypeFilter] = useState<string | null>(null);
  const [brandSearch, setBrandSearch] = useState("");
  const [serviceSearch, setServiceSearch] = useState("");
  const [serviceCategoryFilter, setServiceCategoryFilter] = useState<string | null>(null);
  const [requestSearch, setRequestSearch] = useState("");
  const [requestStatusFilter, setRequestStatusFilter] = useState<string | null>(null);

  const activeSectionsCount = Object.values(sections).filter(v => v).length;

  const handleSaveProfile = async () => {
    await updateProfile(localProfile);
    toast.success("Perfil actualizado");
  };

  const handleSaveContact = async () => {
    await updateContact(localContact);
    toast.success("Contacto actualizado");
  };

  const handleSaveCategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = { name: formData.get("name") as string, type: formData.get("type") as any, icon: formData.get("icon") as string, active: true };
    if (editingCategory) await updateCategory(editingCategory.id, data);
    else await addCategory(data);
    setIsCategoryModalOpen(false);
  };

  const handleSaveBrand = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = { name: formData.get("name") as string, description: formData.get("description") as string, active: true };
    if (editingBrand) await updateBrand(editingBrand.id, data);
    else await addBrand(data);
    setIsBrandModalOpen(false);
  };

  const handleSaveService = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = { name: formData.get("name") as string, description: formData.get("description") as string, price: parseFloat(formData.get("price") as string), category_id: formData.get("category_id") as string, image: formData.get("image") as string, active: true };
    if (editingService) await updateService(editingService.id, data);
    else await addService(data);
    setIsServiceModalOpen(false);
  };

  const handleSaveProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      price: parseFloat(formData.get("price") as string),
      category_id: formData.get("category_id") as string,
      brand_id: formData.get("brand_id") as string,
      reference: formData.get("reference") as string,
      notes: formData.get("notes") as string,
      image: formData.get("image") as string,
      active: true
    };
    if (editingProduct) await updateProduct(editingProduct.id, data);
    else await addProduct(data);
    setIsProductModalOpen(false);
  };

  const handleImageUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('image', file);
    try {
      const res = await fetch(`${API_URL}/upload`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: formData
      });
      const data = await res.json();
      return data.imageUrl;
    } catch (e) {
      toast.error("Error al subir imagen");
      return null;
    }
  };

  const updateRequestStatus = async (id: string, status: string) => {
    try {
      await fetch(`${API_URL}/requests/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }, body: JSON.stringify({ status }) });
      fetchRequests();
    } catch (e) { }
  };

  return (
    <div className="min-h-screen bg-secondary/10 p-6 md:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <LayoutDashboard className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight leading-none">Panel Admin</h1>
              <p className="text-[10px] text-muted-foreground mt-1 uppercase tracking-widest font-medium">Gestión Luisa Restrepo</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </Button>
            <Button variant="outline" asChild><a href="/" target="_blank"><Eye className="w-4 h-4 mr-2" /> Ver Sitio</a></Button>
            <Button variant="destructive" onClick={logout}><LogOut className="w-4 h-4 mr-2" /> Salir</Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <Card className="p-3 bg-white/50 backdrop-blur-sm border-primary/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 overflow-hidden">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-tight text-muted-foreground truncate">Secciones</span>
              </div>
              <span className="text-sm font-black text-foreground">{activeSectionsCount}</span>
            </div>
          </Card>
          <Card className="p-3 bg-white/50 backdrop-blur-sm border-blue-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 overflow-hidden">
                <Scissors className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-tight text-muted-foreground truncate">Servicios</span>
              </div>
              <span className="text-sm font-black text-foreground">{services.length}</span>
            </div>
          </Card>
          <Card className="p-3 bg-white/50 backdrop-blur-sm border-amber-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 overflow-hidden">
                <Tags className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-tight text-muted-foreground truncate">Marcas</span>
              </div>
              <span className="text-sm font-black text-foreground">{brands.length}</span>
            </div>
          </Card>
          <Card className="p-3 bg-white/50 backdrop-blur-sm border-pink-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 overflow-hidden">
                <Package className="w-3.5 h-3.5 text-pink-500 shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-tight text-muted-foreground truncate">Productos</span>
              </div>
              <span className="text-sm font-black text-foreground">{products.length}</span>
            </div>
          </Card>
          <Card className="p-3 bg-white/50 backdrop-blur-sm border-green-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 overflow-hidden">
                <ClipboardList className="w-3.5 h-3.5 text-green-500 shrink-0" />
                <span className="text-[10px] font-bold uppercase tracking-tight text-muted-foreground truncate">Solicitudes</span>
              </div>
              <span className="text-sm font-black text-foreground">{requests.length}</span>
            </div>
          </Card>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="bg-card border p-1 h-auto flex flex-wrap gap-1">
            <TabsTrigger value="general" className="flex-1 min-w-[100px]"><LayoutDashboard className="w-4 h-4 mr-2" /> General</TabsTrigger>
            <TabsTrigger value="categorias" className="flex-1 min-w-[100px]"><Settings className="w-4 h-4 mr-2" /> Categorías</TabsTrigger>
            <TabsTrigger value="marcas" className="flex-1 min-w-[100px]"><Tags className="w-4 h-4 mr-2" /> Marcas</TabsTrigger>
            <TabsTrigger value="servicios" className="flex-1 min-w-[100px]"><Scissors className="w-4 h-4 mr-2" /> Servicios</TabsTrigger>
            <TabsTrigger value="catalogo" className="flex-1 min-w-[100px]"><ShoppingBag className="w-4 h-4 mr-2" /> Catálogo</TabsTrigger>
            <TabsTrigger value="solicitudes" className="flex-1 min-w-[100px]"><ClipboardList className="w-4 h-4 mr-2" /> Solicitudes</TabsTrigger>
            <TabsTrigger value="perfil" className="flex-1 min-w-[100px]"><User className="w-4 h-4 mr-2" /> Perfil</TabsTrigger>
            <TabsTrigger value="contacto" className="flex-1 min-w-[100px]"><Mail className="w-4 h-4 mr-2" /> Contacto</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            <Card><CardHeader><CardTitle>Visibilidad Global</CardTitle></CardHeader><CardContent className="divide-y">
              {Object.entries(sections).map(([k, v]) => (
                <div key={k} className="flex items-center justify-between py-4"><Label className="capitalize">{k}</Label>
                <Switch checked={v} onCheckedChange={(c) => setSectionVisibility(k as any, c)} /></div>
              ))}
            </CardContent></Card>
          </TabsContent>

          <TabsContent value="categorias" className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h2 className="text-xl font-bold">Categorías</h2>
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <div className="relative flex-1 sm:min-w-[200px]">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Buscar categoría..." className="pl-8" value={categorySearch} onChange={e => setCategorySearch(e.target.value)} />
                </div>
                <Dialog open={isCategoryModalOpen} onOpenChange={setIsCategoryModalOpen}>
                  <DialogTrigger asChild><Button onClick={() => setEditingCategory(null)}><Plus className="w-4 h-4 mr-2" /> Nueva</Button></DialogTrigger>
                  <DialogContent><form onSubmit={handleSaveCategory}>
                    <DialogHeader><DialogTitle>{editingCategory ? "Editar" : "Crear"}</DialogTitle></DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="grid gap-2"><Label>Nombre</Label><Input name="name" defaultValue={editingCategory?.name} required /></div>
                      <div className="grid gap-2"><Label>Tipo</Label><select name="type" className="flex h-10 w-full rounded-md border bg-background px-3 text-sm" defaultValue={editingCategory?.type || 'service'}><option value="service">Servicio</option><option value="product">Producto</option></select></div>
                      <div className="grid gap-2"><Label>Icono (Emoji)</Label><Input name="icon" defaultValue={editingCategory?.icon} /></div>
                    </div>
                    <DialogFooter><Button type="submit">Guardar</Button></DialogFooter>
                  </form></DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="flex gap-2 pb-2">
              <Button size="sm" variant={categoryTypeFilter === null ? "default" : "outline"} className="rounded-full" onClick={() => setCategoryTypeFilter(null)}>Todas</Button>
              <Button size="sm" variant={categoryTypeFilter === 'service' ? "default" : "outline"} className="rounded-full" onClick={() => setCategoryTypeFilter('service')}>Servicios</Button>
              <Button size="sm" variant={categoryTypeFilter === 'product' ? "default" : "outline"} className="rounded-full" onClick={() => setCategoryTypeFilter('product')}>Productos</Button>
            </div>
            <Card className="overflow-hidden">
              <div className="max-h-[400px] overflow-y-auto">
                <Table>
                  <TableHeader className="sticky top-0 bg-card z-10">
                    <TableRow><TableHead>Icono</TableHead><TableHead>Nombre</TableHead><TableHead>Tipo</TableHead><TableHead>Estado</TableHead><TableHead className="text-right">Acciones</TableHead></TableRow>
                  </TableHeader>
                  <TableBody>
                    {categories
                      .filter(c => !categoryTypeFilter || c.type === categoryTypeFilter)
                      .filter(c => !categorySearch || c.name.toLowerCase().includes(categorySearch.toLowerCase()))
                      .map(c => (
                        <TableRow key={c.id}><TableCell className="text-2xl">{c.icon || '🛍️'}</TableCell><TableCell>{c.name}</TableCell><TableCell className="capitalize">{c.type}</TableCell>
                        <TableCell><Switch checked={c.active} onCheckedChange={v => updateCategory(c.id, { active: v })} /></TableCell>
                        <TableCell className="text-right"><Button variant="ghost" size="icon" onClick={() => { setEditingCategory(c); setIsCategoryModalOpen(true); }}><Pencil className="w-4 h-4" /></Button><Button variant="ghost" size="icon" className="text-destructive" onClick={() => deleteCategory(c.id)}><Trash2 className="w-4 h-4" /></Button></TableCell></TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="marcas" className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h2 className="text-xl font-bold">Marcas</h2>
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <div className="relative flex-1 sm:min-w-[200px]">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Buscar marca..." className="pl-8" value={brandSearch} onChange={e => setBrandSearch(e.target.value)} />
                </div>
                <Dialog open={isBrandModalOpen} onOpenChange={setIsBrandModalOpen}>
                  <DialogTrigger asChild><Button onClick={() => setEditingBrand(null)}><Plus className="w-4 h-4 mr-2" /> Nueva Marca</Button></DialogTrigger>
                  <DialogContent><form onSubmit={handleSaveBrand}>
                    <DialogHeader><DialogTitle>{editingBrand ? "Editar" : "Crear"}</DialogTitle></DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="grid gap-2"><Label>Nombre</Label><Input name="name" defaultValue={editingBrand?.name} required /></div>
                      <div className="grid gap-2"><Label>Descripción</Label><Textarea name="description" defaultValue={editingBrand?.description} /></div>
                    </div>
                    <DialogFooter><Button type="submit">Guardar</Button></DialogFooter>
                  </form></DialogContent>
                </Dialog>
              </div>
            </div>
            <Card className="overflow-hidden">
              <div className="max-h-[400px] overflow-y-auto">
                <Table>
                  <TableHeader className="sticky top-0 bg-card z-10">
                    <TableRow><TableHead>Nombre</TableHead><TableHead>Estado</TableHead><TableHead className="text-right">Acciones</TableHead></TableRow>
                  </TableHeader>
                  <TableBody>
                    {brands
                      .filter(b => !brandSearch || b.name.toLowerCase().includes(brandSearch.toLowerCase()))
                      .map(b => (
                        <TableRow key={b.id}><TableCell className="font-bold">{b.name}</TableCell>
                        <TableCell><Switch checked={b.active} onCheckedChange={v => updateBrand(b.id, { active: v })} /></TableCell>
                        <TableCell className="text-right"><Button variant="ghost" size="icon" onClick={() => { setEditingBrand(b); setIsBrandModalOpen(true); }}><Pencil className="w-4 h-4" /></Button><Button variant="ghost" size="icon" className="text-destructive" onClick={() => deleteBrand(b.id)}><Trash2 className="w-4 h-4" /></Button></TableCell></TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="servicios" className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h2 className="text-xl font-bold">Servicios</h2>
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <div className="relative flex-1 sm:min-w-[200px]">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Buscar servicio..." className="pl-8" value={serviceSearch} onChange={e => setServiceSearch(e.target.value)} />
                </div>
                <Dialog open={isServiceModalOpen} onOpenChange={setIsServiceModalOpen}>
                  <DialogTrigger asChild><Button onClick={() => setEditingService(null)}><Plus className="w-4 h-4 mr-2" /> Nuevo</Button></DialogTrigger>
                  <DialogContent><form onSubmit={handleSaveService}><DialogHeader><DialogTitle>Servicio</DialogTitle></DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="grid gap-2"><Label>Nombre</Label><Input name="name" defaultValue={editingService?.name} required /></div>
                      <div className="grid gap-2"><Label>Descripción</Label><Textarea name="description" defaultValue={editingService?.description} required /></div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2"><Label>Precio</Label><Input name="price" type="number" defaultValue={editingService?.price} required /></div>
                        <div className="grid gap-2"><Label>Categoría</Label><select name="category_id" className="flex h-10 border bg-background px-3 text-sm rounded" defaultValue={editingService?.category_id} required><option value="">Seleccionar</option>{categories.filter(c => c.type === 'service').map(c => (<option key={c.id} value={c.id}>{c.name}</option>))}</select></div>
                      </div>
                      <div className="grid gap-2"><Label>Imagen</Label>
                        <div className="relative group w-full h-32 rounded border-2 border-dashed flex items-center justify-center bg-secondary/10">
                          {editingService?.image ? <img src={editingService.image} className="h-full w-full object-cover" /> : <Scissors className="w-8 h-8 text-muted-foreground/30" />}
                          <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer text-white">
                            <Plus /><input type="file" className="hidden" accept="image/*" onChange={async e => {
                              const file = e.target.files?.[0]; if (file) {
                                const url = await handleImageUpload(file);
                                if (url) { setEditingService((prev: any) => ({ ...prev, image: url })); toast.success("Imagen cargada"); }
                              }
                            }} />
                          </label>
                        </div>
                        <input type="hidden" name="image" value={editingService?.image || ""} />
                      </div>
                    </div><DialogFooter><Button type="submit">Guardar</Button></DialogFooter>
                  </form></DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="flex gap-2 pb-2 overflow-x-auto">
              <Button size="sm" variant={serviceCategoryFilter === null ? "default" : "outline"} className="rounded-full shrink-0" onClick={() => setServiceCategoryFilter(null)}>Todos</Button>
              {categories.filter(c => c.type === 'service' && c.active).map(cat => (
                <Button key={cat.id} size="sm" variant={serviceCategoryFilter === cat.id ? "default" : "outline"} className="rounded-full shrink-0" onClick={() => setServiceCategoryFilter(cat.id as string)}>{cat.name}</Button>
              ))}
            </div>
            <Card className="overflow-hidden">
              <div className="max-h-[400px] overflow-y-auto">
                <Table>
                  <TableHeader className="sticky top-0 bg-card z-10">
                    <TableRow><TableHead>Nombre</TableHead><TableHead>Categoría</TableHead><TableHead>Precio</TableHead><TableHead className="text-right">Acciones</TableHead></TableRow>
                  </TableHeader>
                  <TableBody>
                    {services
                      .filter(s => !serviceCategoryFilter || s.category_id === serviceCategoryFilter)
                      .filter(s => !serviceSearch || s.name.toLowerCase().includes(serviceSearch.toLowerCase()) || s.description.toLowerCase().includes(serviceSearch.toLowerCase()))
                      .map(s => (
                        <TableRow key={s.id}><TableCell className="font-medium">{s.name}</TableCell>
                        <TableCell><span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">{categories.find(c => c.id === s.category_id)?.name}</span></TableCell>
                        <TableCell>${s.price.toLocaleString()}</TableCell><TableCell className="text-right"><Button variant="ghost" size="icon" onClick={() => { setEditingService(s); setIsServiceModalOpen(true); }}><Pencil className="w-4 h-4" /></Button></TableCell></TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="catalogo" className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h2 className="text-xl font-bold">Catálogo</h2>
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <div className="relative flex-1 sm:min-w-[200px]">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Buscar producto..." 
                    className="pl-8" 
                    value={catalogSearch}
                    onChange={(e) => setCatalogSearch(e.target.value)}
                  />
                </div>
                <Dialog open={isProductModalOpen} onOpenChange={setIsProductModalOpen}>
                  <DialogTrigger asChild><Button onClick={() => setEditingProduct(null)}><Plus className="w-4 h-4 mr-2" /> Nuevo Producto</Button></DialogTrigger>
                  <DialogContent className="max-w-2xl"><form onSubmit={handleSaveProduct}><DialogHeader><DialogTitle>Producto</DialogTitle></DialogHeader>
                    <div className="grid grid-cols-2 gap-4 py-4">
                      <div className="grid gap-2 col-span-2"><Label>Nombre</Label><Input name="name" defaultValue={editingProduct?.name} required /></div>
                      <div className="grid gap-2"><Label>Marca</Label><select name="brand_id" className="flex h-10 border bg-background px-3 text-sm rounded" defaultValue={editingProduct?.brand_id}><option value="">Seleccionar</option>{brands.map(b => (<option key={b.id} value={b.id}>{b.name}</option>))}</select></div>
                      <div className="grid gap-2"><Label>Categoría</Label><select name="category_id" className="flex h-10 border bg-background px-3 text-sm rounded" defaultValue={editingProduct?.category_id} required><option value="">Seleccionar</option>{categories.filter(c => c.type === 'product').map(c => (<option key={c.id} value={c.id}>{c.name}</option>))}</select></div>
                      <div className="grid gap-2"><Label>Precio</Label><Input name="price" type="number" defaultValue={editingProduct?.price} required /></div>
                      <div className="grid gap-2"><Label>Referencia</Label><Input name="reference" defaultValue={editingProduct?.reference} /></div>
                      <div className="grid gap-2 col-span-2"><Label>Notas</Label><Input name="notes" defaultValue={editingProduct?.notes} /></div>
                      <div className="grid gap-2 col-span-2"><Label>Imagen</Label>
                        <div className="relative group w-full h-32 rounded border-2 border-dashed flex items-center justify-center bg-secondary/10">
                          {editingProduct?.image ? <img src={editingProduct.image} className="h-full w-full object-cover" /> : <ShoppingBag className="w-8 h-8 text-muted-foreground/30" />}
                          <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer text-white">
                            <Plus /><input type="file" className="hidden" accept="image/*" onChange={async e => {
                              const file = e.target.files?.[0]; if (file) {
                                const url = await handleImageUpload(file);
                                if (url) { setEditingProduct((prev: any) => ({ ...prev, image: url })); toast.success("Imagen cargada"); }
                              }
                            }} />
                          </label>
                        </div>
                        <input type="hidden" name="image" value={editingProduct?.image || ""} />
                      </div>
                    </div><DialogFooter><Button type="submit">Guardar</Button></DialogFooter>
                  </form></DialogContent>
                </Dialog>
              </div>
            </div>

            <div className="flex gap-2 pb-4 overflow-x-auto no-scrollbar">
              <div className="flex flex-nowrap gap-2 min-w-max">
                <Button variant={catalogCategoryFilter === null ? "default" : "outline"} size="sm" onClick={() => setCatalogCategoryFilter(null)} className="rounded-full shrink-0">Todos</Button>
                {categories.filter(c => c.type === 'product' && c.active).map(cat => (
                  <Button key={cat.id} variant={catalogCategoryFilter === cat.id ? "default" : "outline"} size="sm" onClick={() => setCatalogCategoryFilter(cat.id as string)} className="rounded-full shrink-0">{cat.name}</Button>
                ))}
              </div>
            </div>

            <Card className="overflow-hidden border-primary/10">
              <div className="max-h-[500px] overflow-y-auto relative">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="sticky top-0 bg-white z-20">Nombre</TableHead>
                      <TableHead className="sticky top-0 bg-white z-20">Categoría</TableHead>
                      <TableHead className="sticky top-0 bg-white z-20">Marca</TableHead>
                      <TableHead className="sticky top-0 bg-white z-20">Precio</TableHead>
                      <TableHead className="sticky top-0 bg-white z-20 text-right">Acciones</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {products
                      .filter(p => !catalogCategoryFilter || p.category_id === catalogCategoryFilter)
                      .filter(p => !catalogSearch || p.name.toLowerCase().includes(catalogSearch.toLowerCase()) || (p.brand_name && p.brand_name.toLowerCase().includes(catalogSearch.toLowerCase())) || (p.reference && p.reference.toLowerCase().includes(catalogSearch.toLowerCase())))
                      .map(p => (
                        <TableRow key={p.id} className="hover:bg-secondary/5">
                          <TableCell className="font-medium">{p.name}</TableCell>
                          <TableCell><span className="text-xs bg-primary/5 text-primary px-2 py-0.5 rounded-full border border-primary/10">{p.category_name || '-'}</span></TableCell>
                          <TableCell>{p.brand_name || '-'}</TableCell>
                          <TableCell className="font-bold">${p.price?.toLocaleString() || '0'}</TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-1">
                              <Button variant="ghost" size="icon" onClick={() => { setEditingProduct(p); setIsProductModalOpen(true); }}><Pencil className="w-4 h-4" /></Button>
                              <Button variant="ghost" size="icon" className="text-destructive" onClick={() => deleteProduct(p.id)}><Trash2 className="w-4 h-4" /></Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="solicitudes" className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <h2 className="text-xl font-bold">Solicitudes</h2>
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <div className="relative flex-1 sm:min-w-[200px]">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Buscar por teléfono..." className="pl-8" value={requestSearch} onChange={e => setRequestSearch(e.target.value)} />
                </div>
                <Button variant="outline" onClick={fetchRequests}><Clock className="w-4 h-4 mr-2" /> Actualizar</Button>
              </div>
            </div>
            <div className="flex gap-2 pb-2">
              <Button size="sm" variant={requestStatusFilter === null ? "default" : "outline"} className="rounded-full" onClick={() => setRequestStatusFilter(null)}>Todas</Button>
              <Button size="sm" variant={requestStatusFilter === 'pendiente' ? "default" : "outline"} className="rounded-full" onClick={() => setRequestStatusFilter('pendiente')}>Pendientes</Button>
              <Button size="sm" variant={requestStatusFilter === 'completado' ? "default" : "outline"} className="rounded-full" onClick={() => setRequestStatusFilter('completado')}>Completadas</Button>
            </div>
            <Card className="overflow-hidden">
              <div className="max-h-[400px] overflow-y-auto">
                <Table>
                  <TableHeader className="sticky top-0 bg-card z-10">
                    <TableRow><TableHead>Fecha</TableHead><TableHead>WhatsApp</TableHead><TableHead>Estado</TableHead><TableHead className="text-right">Acciones</TableHead></TableRow>
                  </TableHeader>
                  <TableBody>
                    {requests
                      .filter(r => !requestStatusFilter || r.status === requestStatusFilter)
                      .filter(r => !requestSearch || r.phone.includes(requestSearch))
                      .map(r => (
                        <TableRow key={r.id}>
                          <TableCell className="text-xs text-muted-foreground">{new Date(r.created_at).toLocaleDateString()}</TableCell>
                          <TableCell className="font-medium flex items-center gap-2"><Phone className="w-3 h-3 text-green-500" /> {r.phone}</TableCell>
                          <TableCell><span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${r.status === 'pendiente' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>{r.status}</span></TableCell>
                          <TableCell className="text-right">{r.status === 'pendiente' && <Button size="sm" variant="outline" className="h-7 text-[10px] px-2" onClick={() => updateRequestStatus(r.id, 'completado')}>Marcar OK</Button>}</TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="perfil" className="space-y-4">
            <Card><CardHeader className="flex justify-between flex-row"><div><CardTitle>Perfil</CardTitle></div><Button onClick={handleSaveProfile} className="gradient-primary">Guardar</Button></CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-full md:w-1/3">
                    <Label>Foto de Perfil</Label>
                    <div className="relative group w-48 h-48 rounded border-2 border-dashed flex items-center justify-center bg-secondary/20 overflow-hidden">
                      {profile.imageUrl ? <img src={profile.imageUrl} className="w-full h-full object-cover" /> : <User className="w-12 h-12 text-muted-foreground/30" />}
                      <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center cursor-pointer text-white">
                        <Plus /><input type="file" className="hidden" accept="image/*" onChange={async e => {
                          const file = e.target.files?.[0]; if (file) {
                            const url = await handleImageUpload(file);
                            if (url) { updateProfile({ imageUrl: url }); toast.success("Foto de perfil cargada"); }
                          }
                        }} />
                      </label>
                    </div>
                  </div>
                  <div className="flex-1 space-y-4 w-full">
                    <div className="grid gap-2"><Label>Nombre Comercial</Label><Input value={localProfile.name} onChange={e => setLocalProfile({...localProfile, name: e.target.value})} /></div>
                    <div className="grid gap-2"><Label>Bio</Label><Textarea rows={4} value={localProfile.bio} onChange={e => setLocalProfile({...localProfile, bio: e.target.value})} /></div>
                    <div className="grid gap-2"><Label>URL Video TikTok (Embed)</Label><Input placeholder="https://www.tiktok.com/@user/video/..." value={localProfile.tiktok_video_url} onChange={e => setLocalProfile({...localProfile, tiktok_video_url: e.target.value})} /></div>
                    <div className="grid grid-cols-2 gap-4">
                      {['stats_years', 'stats_clients', 'stats_products', 'stats_awards'].map(s => (<div key={s}><Label className="text-xs">{s.split('_')[1]}</Label><Input value={(localProfile as any)[s]} onChange={e => setLocalProfile({...localProfile, [s]: e.target.value})} /></div>))}
                    </div>
                    <div className="flex items-center gap-2 pt-4"><Switch checked={localProfile.active} onCheckedChange={v => setLocalProfile({...localProfile, active: v})} /><Label>Perfil Activo</Label></div>
                  </div>
                </div>
              </CardContent></Card>
          </TabsContent>

          <TabsContent value="contacto" className="space-y-4">
            <Card><CardHeader className="flex justify-between flex-row"><div><CardTitle>Contacto</CardTitle></div><Button onClick={handleSaveContact} className="gradient-primary">Guardar</Button></CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4 border-b pb-4">
                  <div className="grid gap-1"><Label>WhatsApp</Label><Input value={localContact.phone} onChange={e => setLocalContact({...localContact, phone: e.target.value})} /></div>
                  <div className="grid gap-1"><Label>Email</Label><Input value={localContact.email} onChange={e => setLocalContact({...localContact, email: e.target.value})} /></div>
                  <div className="grid gap-1 col-span-2"><Label>Ubicación</Label><Input value={localContact.address} onChange={e => setLocalContact({...localContact, address: e.target.value})} /></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {['instagram', 'tiktok', 'facebook', 'youtube'].map(s => (<div key={s} className="p-3 border rounded bg-secondary/5 space-y-2"><Label className="capitalize font-bold text-xs">{s}</Label><Input className="h-8" value={(localContact as any)[`${s}_url`]} onChange={e => setLocalContact({...localContact, [`${s}_url`]: e.target.value})} /><div className="flex justify-between items-center text-[10px]"><Label>Visible</Label><Switch checked={(localContact as any)[`${s}_active`]} onCheckedChange={v => setLocalContact({...localContact, [`${s}_active`]: v})} /></div></div>))}
                </div>
              </CardContent></Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
